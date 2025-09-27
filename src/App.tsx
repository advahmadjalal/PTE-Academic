import React, { useState, useEffect } from 'react';
import { BookOpen, Target, Clock, User, ChevronRight, Star, TrendingUp, CheckCircle, Award, Calendar, Brain, Zap } from 'lucide-react';
import { useAuth } from './contexts/AuthContext';
import { useUserData } from './hooks/useUserData';
import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';
import OnboardingSection from './components/OnboardingSection';
import Dashboard from './components/Dashboard';
import TaskGuide from './components/TaskGuide';
import ProgressTracker from './components/ProgressTracker';
import QuickReference from './components/QuickReference';
import MockTest from './components/MockTest';
import StudyPlanner from './components/StudyPlanner';
import VocabularyBuilder from './components/VocabularyBuilder';
import NotificationSystem from './components/NotificationSystem';

export interface StudentProfile {
  targetScore: number;
  dailyHours: number;
  currentLevel: string;
  startDate: string;
  completed: boolean;
}

export interface TaskData {
  id: string;
  name: string;
  priority: 'high' | 'medium' | 'low';
  section: 'speaking' | 'writing' | 'reading' | 'listening';
  dailyTarget: number;
  completed: number;
  description: string;
  scoringCriteria: string[];
  commonMistakes: string[];
  tips: string[];
}

function App() {
  const { user, loading: authLoading } = useAuth();
  const { profile, tasks, loading: dataLoading, updateTaskProgress } = useUserData();
  const [currentSection, setCurrentSection] = useState<string>('onboarding');

  useEffect(() => {
    if (profile && profile.completed) {
      setCurrentSection('dashboard');
    }
  }, [profile]);

  const completeOnboarding = () => {
    setCurrentSection('dashboard');
  };

  // Show loading screen while authentication is being checked
  if (authLoading || dataLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show login form if user is not authenticated
  if (!user) {
    return <LoginForm />;
  }

  // Show onboarding if user doesn't have a completed profile
  if (!profile || !profile.completed) {
    return <OnboardingSection onComplete={completeOnboarding} />;
  }

  const navigation = [
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
    { id: 'tasks', label: 'Task Guide', icon: BookOpen },
    { id: 'planner', label: 'Study Plan', icon: Calendar },
    { id: 'vocabulary', label: 'Vocabulary', icon: Brain },
    { id: 'progress', label: 'Progress', icon: Target },
    { id: 'reference', label: 'Quick Ref', icon: Brain },
    { id: 'mock', label: 'Mock Test', icon: Award },
    { id: 'profile', label: 'Profile', icon: User }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">PTE Academic AI Tutor</h1>
                <p className="text-sm text-gray-500">2025 Updated • Premium Guide</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">Target: {profile.targetScore}+</div>
                <div className="text-xs text-gray-500">{profile.dailyHours}h daily</div>
              </div>
              <NotificationSystem studentProfile={profile} tasks={tasks} />
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Day {Math.ceil((Date.now() - new Date(profile.startDate).getTime()) / (1000 * 60 * 60 * 24))} of 30
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-full">
        {/* Sidebar */}
        <nav className="bg-white shadow-sm w-64 min-h-screen border-r border-gray-200">
          <div className="p-6">
            <div className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      currentSection === item.id
                        ? 'bg-indigo-100 text-indigo-700 border-l-4 border-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Progress Summary */}
            <div className="mt-8 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
              <h3 className="font-semibold text-gray-900 mb-3">Today's Progress</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tasks Complete</span>
                  <span className="font-medium text-indigo-600">
                    {tasks.filter(t => t.completed >= t.dailyTarget).length}/{tasks.length}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all"
                    style={{ 
                      width: `${tasks.length > 0 ? (tasks.filter(t => t.completed >= t.dailyTarget).length / tasks.length) * 100 : 0}%` 
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {currentSection === 'dashboard' && <Dashboard studentProfile={profile} tasks={tasks} />}
            {currentSection === 'tasks' && <TaskGuide tasks={tasks} updateTaskProgress={updateTaskProgress} />}
            {currentSection === 'planner' && <StudyPlanner dailyHours={profile.dailyHours} targetScore={profile.targetScore} />}
            {currentSection === 'vocabulary' && <VocabularyBuilder />}
            {currentSection === 'progress' && <ProgressTracker studentProfile={profile} tasks={tasks} />}
            {currentSection === 'reference' && <QuickReference />}
            {currentSection === 'mock' && <MockTest studentProfile={profile} />}
            {currentSection === 'profile' && <UserProfile />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;