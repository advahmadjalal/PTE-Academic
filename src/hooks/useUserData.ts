import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { StudentProfile, TaskData } from '../App';

export const useUserData = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [tasks, setTasks] = useState<TaskData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadUserData();
    } else {
      setProfile(null);
      setTasks([]);
      setLoading(false);
    }
  }, [user]);

  const loadUserData = async () => {
    if (!user) return;

    try {
      setLoading(true);

      // Load user profile
      const { data: profileData, error: profileError } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (profileError) {
        console.error('Error loading profile:', profileError);
        return;
      }

      if (profileData) {
        const studentProfile: StudentProfile = {
          targetScore: profileData.target_score,
          dailyHours: profileData.daily_hours,
          currentLevel: profileData.current_level,
          startDate: profileData.start_date,
          completed: true,
        };
        setProfile(studentProfile);

        // Load or initialize tasks for today
        await loadTodaysTasks(studentProfile);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadTodaysTasks = async (profile: StudentProfile) => {
    if (!user) return;

    const today = new Date().toISOString().split('T')[0];

    // Check if tasks exist for today
    const { data: existingTasks, error: tasksError } = await supabase
      .from('user_tasks')
      .select('*')
      .eq('user_id', user.id)
      .eq('date', today);

    if (tasksError) {
      console.error('Error loading tasks:', tasksError);
      return;
    }

    if (existingTasks && existingTasks.length > 0) {
      // Convert database tasks to TaskData format
      const taskData: TaskData[] = existingTasks.map(task => ({
        id: task.task_id,
        name: task.task_name,
        priority: task.priority as 'high' | 'medium' | 'low',
        section: task.section as 'speaking' | 'writing' | 'reading' | 'listening',
        dailyTarget: task.daily_target,
        completed: task.completed,
        description: getTaskDescription(task.task_id),
        scoringCriteria: getTaskScoringCriteria(task.task_id),
        commonMistakes: getTaskCommonMistakes(task.task_id),
        tips: getTaskTips(task.task_id),
      }));
      setTasks(taskData);
    } else {
      // Initialize tasks for today
      await initializeTodaysTasks(profile);
    }
  };

  const initializeTodaysTasks = async (profile: StudentProfile) => {
    if (!user) return;

    const baseMultiplier = profile.targetScore >= 70 ? 1.5 : 1;
    const hourMultiplier = profile.dailyHours >= 3 ? 1.2 : profile.dailyHours >= 2 ? 1 : 0.8;
    
    const taskList = [
      {
        task_id: 'repeat-sentence',
        task_name: 'Repeat Sentence',
        priority: 'high',
        section: 'speaking',
        daily_target: Math.round(15 * baseMultiplier * hourMultiplier),
      },
      {
        task_id: 'describe-image',
        task_name: 'Describe Image',
        priority: 'high',
        section: 'speaking',
        daily_target: Math.round(8 * baseMultiplier * hourMultiplier),
      },
      {
        task_id: 'read-aloud',
        task_name: 'Read Aloud',
        priority: 'high',
        section: 'speaking',
        daily_target: Math.round(12 * baseMultiplier * hourMultiplier),
      },
      {
        task_id: 'summarize-written-text',
        task_name: 'Summarize Written Text',
        priority: 'high',
        section: 'writing',
        daily_target: Math.round(3 * baseMultiplier),
      },
      {
        task_id: 'write-essay',
        task_name: 'Write Essay',
        priority: 'medium',
        section: 'writing',
        daily_target: Math.round(2 * baseMultiplier),
      },
      {
        task_id: 'reading-writing-blanks',
        task_name: 'Reading & Writing: Fill Blanks',
        priority: 'high',
        section: 'reading',
        daily_target: Math.round(5 * baseMultiplier),
      },
      {
        task_id: 'summarize-spoken-text',
        task_name: 'Summarize Spoken Text',
        priority: 'high',
        section: 'listening',
        daily_target: Math.round(3 * baseMultiplier),
      },
      {
        task_id: 'write-from-dictation',
        task_name: 'Write From Dictation',
        priority: 'high',
        section: 'listening',
        daily_target: Math.round(10 * baseMultiplier * hourMultiplier),
      },
    ];

    const today = new Date().toISOString().split('T')[0];

    // Insert tasks into database
    const tasksToInsert = taskList.map(task => ({
      user_id: user.id,
      task_id: task.task_id,
      task_name: task.task_name,
      priority: task.priority,
      section: task.section,
      daily_target: task.daily_target,
      completed: 0,
      date: today,
    }));

    const { error } = await supabase
      .from('user_tasks')
      .insert(tasksToInsert);

    if (error) {
      console.error('Error initializing tasks:', error);
      return;
    }

    // Load the newly created tasks
    await loadTodaysTasks(profile);
  };

  const updateTaskProgress = async (taskId: string, increment: boolean) => {
    if (!user) return;

    const today = new Date().toISOString().split('T')[0];

    // Update in database
    const { data: currentTask } = await supabase
      .from('user_tasks')
      .select('completed')
      .eq('user_id', user.id)
      .eq('task_id', taskId)
      .eq('date', today)
      .single();

    if (currentTask) {
      const newCompleted = Math.max(0, currentTask.completed + (increment ? 1 : -1));
      
      const { error } = await supabase
        .from('user_tasks')
        .update({ 
          completed: newCompleted,
          updated_at: new Date().toISOString()
        })
        .eq('user_id', user.id)
        .eq('task_id', taskId)
        .eq('date', today);

      if (!error) {
        // Update local state
        setTasks(prevTasks => 
          prevTasks.map(task => 
            task.id === taskId 
              ? { ...task, completed: newCompleted }
              : task
          )
        );

        // Update daily progress
        await updateDailyProgress();
      }
    }
  };

  const updateDailyProgress = async () => {
    if (!user) return;

    const today = new Date().toISOString().split('T')[0];
    const totalTasks = tasks.reduce((sum, task) => sum + task.dailyTarget, 0);
    const completedTasks = tasks.reduce((sum, task) => sum + task.completed, 0);

    const { error } = await supabase
      .from('user_progress')
      .upsert({
        user_id: user.id,
        date: today,
        total_tasks: totalTasks,
        completed_tasks: completedTasks,
        updated_at: new Date().toISOString()
      });

    if (error) {
      console.error('Error updating daily progress:', error);
    }
  };

  const updateProfile = async (updates: Partial<StudentProfile>) => {
    if (!user || !profile) return;

    const { error } = await supabase
      .from('user_profiles')
      .update({
        target_score: updates.targetScore ?? profile.targetScore,
        daily_hours: updates.dailyHours ?? profile.dailyHours,
        current_level: updates.currentLevel ?? profile.currentLevel,
        updated_at: new Date().toISOString()
      })
      .eq('user_id', user.id);

    if (!error) {
      setProfile({ ...profile, ...updates });
    }
  };

  return {
    profile,
    tasks,
    loading,
    updateTaskProgress,
    updateProfile,
    loadUserData,
  };
};

// Helper functions for task data
const getTaskDescription = (taskId: string): string => {
  const descriptions: Record<string, string> = {
    'repeat-sentence': 'Listen to a sentence and repeat it exactly as heard',
    'describe-image': 'Describe an image in detail within 40 seconds',
    'read-aloud': 'Read a text passage aloud with proper pronunciation and fluency',
    'summarize-written-text': 'Summarize a passage in one sentence (5-75 words)',
    'write-essay': 'Write a 200-300 word essay on given topic',
    'reading-writing-blanks': 'Fill in missing words in a text passage',
    'summarize-spoken-text': 'Listen to audio and write 50-70 word summary',
    'write-from-dictation': 'Type exactly what you hear',
  };
  return descriptions[taskId] || 'Practice this PTE task';
};

const getTaskScoringCriteria = (taskId: string): string[] => {
  const criteria: Record<string, string[]> = {
    'repeat-sentence': ['Content (3 points)', 'Oral Fluency (5 points)', 'Pronunciation (5 points)'],
    'describe-image': ['Content (5 points)', 'Oral Fluency (5 points)', 'Pronunciation (5 points)'],
    'read-aloud': ['Content (5 points)', 'Oral Fluency (5 points)', 'Pronunciation (5 points)'],
    'summarize-written-text': ['Content (2 points)', 'Form (1 point)', 'Grammar (2 points)', 'Vocabulary (2 points)'],
    'write-essay': ['Content (3 points)', 'Form (2 points)', 'Development (2 points)', 'Structure (2 points)', 'Vocabulary (2 points)', 'Language Use (2 points)', 'Grammar (2 points)'],
    'reading-writing-blanks': ['Reading (1 point per blank)', 'Writing (1 point per blank)'],
    'summarize-spoken-text': ['Content (2 points)', 'Form (2 points)', 'Grammar (2 points)', 'Vocabulary (2 points)', 'Spelling (2 points)'],
    'write-from-dictation': ['Listening (1 point per word)', 'Writing (1 point per word)'],
  };
  return criteria[taskId] || ['Practice and improve'];
};

const getTaskCommonMistakes = (taskId: string): string[] => {
  const mistakes: Record<string, string[]> = {
    'repeat-sentence': ['Missing words', 'Adding extra words', 'Wrong pronunciation', 'Hesitation'],
    'describe-image': ['Going off-topic', 'Long pauses', 'Repetitive language', 'Poor structure'],
    'read-aloud': ['Mispronunciation', 'Wrong stress patterns', 'Poor chunking', 'Monotone delivery'],
    'summarize-written-text': ['Exceeding word limit', 'Multiple sentences', 'Missing key points', 'Grammar errors'],
    'write-essay': ['Poor structure', 'Off-topic content', 'Grammar mistakes', 'Word count issues'],
    'reading-writing-blanks': ['Not reading context', 'Grammar mismatches', 'Spelling errors'],
    'summarize-spoken-text': ['Missing key points', 'Word count issues', 'Poor note-taking', 'Spelling errors'],
    'write-from-dictation': ['Missing words', 'Spelling errors', 'Wrong word forms'],
  };
  return mistakes[taskId] || ['Practice regularly to improve'];
};

const getTaskTips = (taskId: string): string[] => {
  const tips: Record<string, string[]> = {
    'repeat-sentence': ['Practice shadowing technique', 'Focus on rhythm and stress', 'Record yourself daily'],
    'describe-image': ['Use template structure', 'Practice describing daily objects', 'Time management crucial'],
    'read-aloud': ['Practice chunking phrases', 'Mark stress patterns', 'Record and compare'],
    'summarize-written-text': ['Identify main idea first', 'Use connecting words', 'Check word count'],
    'write-essay': ['Use essay template', 'Plan before writing', 'Check grammar'],
    'reading-writing-blanks': ['Read full text first', 'Check grammar fit', 'Build vocabulary'],
    'summarize-spoken-text': ['Practice shorthand notes', 'Focus on main ideas', 'Use template phrases'],
    'write-from-dictation': ['Practice spelling', 'Listen for function words', 'Type as you hear'],
  };
  return tips[taskId] || ['Practice consistently for best results'];
};