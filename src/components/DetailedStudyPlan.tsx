import React, { useState } from 'react';
import { Calendar, Clock, Target, CheckCircle, BookOpen, Mic, FileText, Headphones, Star, TrendingUp, Award } from 'lucide-react';

interface DayPlan {
  day: number;
  week: number;
  phase: string;
  speaking: {
    tasks: { name: string; count: number; time: number }[];
    totalTime: number;
  };
  writing: {
    tasks: { name: string; count: number; time: number }[];
    totalTime: number;
  };
  reading: {
    tasks: { name: string; count: number; time: number }[];
    totalTime: number;
  };
  listening: {
    tasks: { name: string; count: number; time: number }[];
    totalTime: number;
  };
  reflection: {
    tasks: string[];
    time: number;
  };
  totalTime: number;
  focus: string;
  notes: string[];
}

export default function DetailedStudyPlan() {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [completedDays, setCompletedDays] = useState<Set<number>>(new Set());

  const toggleDayComplete = (day: number) => {
    const newCompleted = new Set(completedDays);
    if (newCompleted.has(day)) {
      newCompleted.delete(day);
    } else {
      newCompleted.add(day);
    }
    setCompletedDays(newCompleted);
  };

  const studyPlan: DayPlan[] = [
    // WEEK 1: FOUNDATION
    {
      day: 1,
      week: 1,
      phase: "Foundation",
      speaking: {
        tasks: [
          { name: "Read Aloud", count: 8, time: 20 },
          { name: "Repeat Sentence", count: 15, time: 25 },
          { name: "Describe Image", count: 3, time: 15 }
        ],
        totalTime: 60
      },
      writing: {
        tasks: [
          { name: "Summarize Written Text", count: 1, time: 15 }
        ],
        totalTime: 15
      },
      reading: {
        tasks: [
          { name: "Fill in Blanks (R&W)", count: 3, time: 20 }
        ],
        totalTime: 20
      },
      listening: {
        tasks: [
          { name: "Write from Dictation", count: 10, time: 20 }
        ],
        totalTime: 20
      },
      reflection: {
        tasks: ["Log pronunciation errors", "Note new vocabulary", "Record speaking samples"],
        time: 15
      },
      totalTime: 130,
      focus: "Learn task formats and basic templates",
      notes: [
        "Focus on understanding each task type",
        "Don't worry about speed yet",
        "Record yourself speaking for self-assessment"
      ]
    },
    {
      day: 2,
      week: 1,
      phase: "Foundation",
      speaking: {
        tasks: [
          { name: "Read Aloud", count: 10, time: 25 },
          { name: "Repeat Sentence", count: 20, time: 30 },
          { name: "Answer Short Question", count: 8, time: 15 }
        ],
        totalTime: 70
      },
      writing: {
        tasks: [
          { name: "Write Essay", count: 1, time: 25 }
        ],
        totalTime: 25
      },
      reading: {
        tasks: [
          { name: "Multiple Choice (Single)", count: 2, time: 15 }
        ],
        totalTime: 15
      },
      listening: {
        tasks: [
          { name: "Write from Dictation", count: 12, time: 25 }
        ],
        totalTime: 25
      },
      reflection: {
        tasks: ["Review essay structure", "Log dictation mistakes", "Practice pronunciation"],
        time: 15
      },
      totalTime: 150,
      focus: "Essay writing basics and dictation accuracy",
      notes: [
        "Use essay template provided",
        "Focus on spelling in dictation",
        "Practice common word pronunciations"
      ]
    },
    {
      day: 3,
      week: 1,
      phase: "Foundation",
      speaking: {
        tasks: [
          { name: "Read Aloud", count: 12, time: 30 },
          { name: "Repeat Sentence", count: 25, time: 35 },
          { name: "Describe Image", count: 4, time: 20 }
        ],
        totalTime: 85
      },
      writing: {
        tasks: [
          { name: "Summarize Written Text", count: 2, time: 25 }
        ],
        totalTime: 25
      },
      reading: {
        tasks: [
          { name: "Fill in Blanks (Reading)", count: 2, time: 15 }
        ],
        totalTime: 15
      },
      listening: {
        tasks: [
          { name: "Write from Dictation", count: 15, time: 30 }
        ],
        totalTime: 30
      },
      reflection: {
        tasks: ["Image description templates", "Summarization techniques", "Dictation error patterns"],
        time: 15
      },
      totalTime: 170,
      focus: "Image description and text summarization",
      notes: [
        "Use describe image template consistently",
        "Practice one-sentence summaries",
        "Identify common dictation error patterns"
      ]
    },
    {
      day: 4,
      week: 1,
      phase: "Foundation",
      speaking: {
        tasks: [
          { name: "Read Aloud", count: 10, time: 25 },
          { name: "Repeat Sentence", count: 20, time: 30 },
          { name: "Re-tell Lecture", count: 2, time: 20 }
        ],
        totalTime: 75
      },
      writing: {
        tasks: [
          { name: "Write Essay", count: 1, time: 25 }
        ],
        totalTime: 25
      },
      reading: {
        tasks: [
          { name: "Multiple Choice (Multiple)", count: 2, time: 20 }
        ],
        totalTime: 20
      },
      listening: {
        tasks: [
          { name: "Summarize Spoken Text", count: 1, time: 15 },
          { name: "Write from Dictation", count: 12, time: 25 }
        ],
        totalTime: 40
      },
      reflection: {
        tasks: ["Note-taking practice", "Lecture retelling structure", "Essay feedback"],
        time: 15
      },
      totalTime: 175,
      focus: "Note-taking and lecture retelling",
      notes: [
        "Practice shorthand note-taking",
        "Use retell lecture template",
        "Focus on main ideas in lectures"
      ]
    },
    {
      day: 5,
      week: 1,
      phase: "Foundation",
      speaking: {
        tasks: [
          { name: "Read Aloud", count: 12, time: 30 },
          { name: "Repeat Sentence", count: 25, time: 35 },
          { name: "Describe Image", count: 5, time: 25 }
        ],
        totalTime: 90
      },
      writing: {
        tasks: [
          { name: "Summarize Written Text", count: 2, time: 25 }
        ],
        totalTime: 25
      },
      reading: {
        tasks: [
          { name: "Fill in Blanks (R&W)", count: 3, time: 25 }
        ],
        totalTime: 25
      },
      listening: {
        tasks: [
          { name: "Write from Dictation", count: 18, time: 35 }
        ],
        totalTime: 35
      },
      reflection: {
        tasks: ["Log pronunciation errors", "Vocabulary building", "Grammar review"],
        time: 15
      },
      totalTime: 190,
      focus: "Consolidating basic skills",
      notes: [
        "Review all templates learned",
        "Focus on consistent pronunciation",
        "Build academic vocabulary list"
      ]
    },
    {
      day: 6,
      week: 1,
      phase: "Foundation",
      speaking: {
        tasks: [
          { name: "Read Aloud", count: 8, time: 20 },
          { name: "Repeat Sentence", count: 15, time: 25 },
          { name: "Answer Short Question", count: 10, time: 20 }
        ],
        totalTime: 65
      },
      writing: {
        tasks: [
          { name: "Write Essay", count: 1, time: 25 }
        ],
        totalTime: 25
      },
      reading: {
        tasks: [
          { name: "Re-order Paragraphs", count: 2, time: 20 }
        ],
        totalTime: 20
      },
      listening: {
        tasks: [
          { name: "Multiple Choice (Single)", count: 2, time: 15 },
          { name: "Write from Dictation", count: 15, time: 30 }
        ],
        totalTime: 45
      },
      reflection: {
        tasks: ["Week 1 progress review", "Identify weak areas", "Plan Week 2 focus"],
        time: 20
      },
      totalTime: 175,
      focus: "Week 1 review and assessment",
      notes: [
        "Complete all task types at least once",
        "Assess comfort level with each task",
        "Prepare for accuracy focus in Week 2"
      ]
    },
    {
      day: 7,
      week: 1,
      phase: "Foundation",
      speaking: {
        tasks: [
          { name: "Mini Mock Test - Speaking", count: 1, time: 45 }
        ],
        totalTime: 45
      },
      writing: {
        tasks: [
          { name: "Mini Mock Test - Writing", count: 1, time: 30 }
        ],
        totalTime: 30
      },
      reading: {
        tasks: [
          { name: "Mini Mock Test - Reading", count: 1, time: 30 }
        ],
        totalTime: 30
      },
      listening: {
        tasks: [
          { name: "Mini Mock Test - Listening", count: 1, time: 30 }
        ],
        totalTime: 30
      },
      reflection: {
        tasks: ["Analyze mock test results", "Create error log", "Set Week 2 goals"],
        time: 30
      },
      totalTime: 165,
      focus: "First mini mock test and analysis",
      notes: [
        "Complete under timed conditions",
        "Don't worry about scores yet",
        "Focus on identifying improvement areas"
      ]
    },

    // WEEK 2: ACCURACY
    {
      day: 8,
      week: 2,
      phase: "Accuracy",
      speaking: {
        tasks: [
          { name: "Read Aloud", count: 15, time: 35 },
          { name: "Repeat Sentence", count: 30, time: 40 },
          { name: "Describe Image", count: 6, time: 30 }
        ],
        totalTime: 105
      },
      writing: {
        tasks: [
          { name: "Summarize Written Text", count: 3, time: 35 }
        ],
        totalTime: 35
      },
      reading: {
        tasks: [
          { name: "Fill in Blanks (R&W)", count: 4, time: 30 }
        ],
        totalTime: 30
      },
      listening: {
        tasks: [
          { name: "Write from Dictation", count: 25, time: 40 }
        ],
        totalTime: 40
      },
      reflection: {
        tasks: ["Error log analysis", "Grammar corrections", "Pronunciation drills"],
        time: 20
      },
      totalTime: 230,
      focus: "Accuracy over speed - error reduction",
      notes: [
        "Start detailed error logging",
        "Focus on grammar accuracy",
        "Slow down for precision"
      ]
    },
    {
      day: 9,
      week: 2,
      phase: "Accuracy",
      speaking: {
        tasks: [
          { name: "Read Aloud", count: 12, time: 30 },
          { name: "Repeat Sentence", count: 25, time: 35 },
          { name: "Re-tell Lecture", count: 3, time: 30 }
        ],
        totalTime: 95
      },
      writing: {
        tasks: [
          { name: "Write Essay", count: 1, time: 30 }
        ],
        totalTime: 30
      },
      reading: {
        tasks: [
          { name: "Multiple Choice (Single)", count: 3, time: 25 }
        ],
        totalTime: 25
      },
      listening: {
        tasks: [
          { name: "Summarize Spoken Text", count: 2, time: 25 },
          { name: "Write from Dictation", count: 20, time: 35 }
        ],
        totalTime: 60
      },
      reflection: {
        tasks: ["Note-taking accuracy", "Essay structure review", "Vocabulary expansion"],
        time: 20
      },
      totalTime: 230,
      focus: "Note-taking accuracy and essay structure",
      notes: [
        "Perfect note-taking symbols",
        "Check essay grammar thoroughly",
        "Build academic word bank"
      ]
    },
    {
      day: 10,
      week: 2,
      phase: "Accuracy",
      speaking: {
        tasks: [
          { name: "Read Aloud", count: 18, time: 40 },
          { name: "Repeat Sentence", count: 35, time: 45 },
          { name: "Describe Image", count: 8, time: 40 }
        ],
        totalTime: 125
      },
      writing: {
        tasks: [
          { name: "Summarize Written Text", count: 3, time: 35 }
        ],
        totalTime: 35
      },
      reading: {
        tasks: [
          { name: "Fill in Blanks (Reading)", count: 3, time: 25 }
        ],
        totalTime: 25
      },
      listening: {
        tasks: [
          { name: "Write from Dictation", count: 30, time: 45 }
        ],
        totalTime: 45
      },
      reflection: {
        tasks: ["Pronunciation accuracy check", "Grammar error patterns", "Spelling practice"],
        time: 20
      },
      totalTime: 250,
      focus: "Pronunciation and spelling accuracy",
      notes: [
        "Record and analyze pronunciation",
        "Focus on problem sounds",
        "Practice difficult spellings"
      ]
    },
    {
      day: 11,
      week: 2,
      phase: "Accuracy",
      speaking: {
        tasks: [
          { name: "Read Aloud", count: 15, time: 35 },
          { name: "Repeat Sentence", count: 30, time: 40 },
          { name: "Answer Short Question", count: 15, time: 25 }
        ],
        totalTime: 100
      },
      writing: {
        tasks: [
          { name: "Write Essay", count: 1, time: 30 }
        ],
        totalTime: 30
      },
      reading: {
        tasks: [
          { name: "Multiple Choice (Multiple)", count: 3, time: 30 }
        ],
        totalTime: 30
      },
      listening: {
        tasks: [
          { name: "Fill in Blanks", count: 3, time: 20 },
          { name: "Write from Dictation", count: 25, time: 40 }
        ],
        totalTime: 60
      },
      reflection: {
        tasks: ["Answer accuracy analysis", "Essay coherence check", "Listening comprehension"],
        time: 20
      },
      totalTime: 240,
      focus: "Quick response accuracy and comprehension",
      notes: [
        "Improve answer precision",
        "Check essay flow and coherence",
        "Focus on listening for details"
      ]
    },
    {
      day: 12,
      week: 2,
      phase: "Accuracy",
      speaking: {
        tasks: [
          { name: "Read Aloud", count: 20, time: 45 },
          { name: "Repeat Sentence", count: 40, time: 50 },
          { name: "Describe Image", count: 10, time: 50 }
        ],
        totalTime: 145
      },
      writing: {
        tasks: [
          { name: "Summarize Written Text", count: 4, time: 45 }
        ],
        totalTime: 45
      },
      reading: {
        tasks: [
          { name: "Fill in Blanks (R&W)", count: 5, time: 35 }
        ],
        totalTime: 35
      },
      listening: {
        tasks: [
          { name: "Write from Dictation", count: 35, time: 50 }
        ],
        totalTime: 50
      },
      reflection: {
        tasks: ["Comprehensive error review", "Accuracy metrics tracking", "Weak area identification"],
        time: 25
      },
      totalTime: 300,
      focus: "Intensive accuracy practice",
      notes: [
        "Maximum repetitions for accuracy",
        "Track error reduction progress",
        "Identify persistent weak areas"
      ]
    },
    {
      day: 13,
      week: 2,
      phase: "Accuracy",
      speaking: {
        tasks: [
          { name: "Read Aloud", count: 12, time: 30 },
          { name: "Repeat Sentence", count: 25, time: 35 },
          { name: "Re-tell Lecture", count: 4, time: 40 }
        ],
        totalTime: 105
      },
      writing: {
        tasks: [
          { name: "Write Essay", count: 1, time: 30 }
        ],
        totalTime: 30
      },
      reading: {
        tasks: [
          { name: "Re-order Paragraphs", count: 3, time: 30 }
        ],
        totalTime: 30
      },
      listening: {
        tasks: [
          { name: "Summarize Spoken Text", count: 2, time: 25 },
          { name: "Write from Dictation", count: 20, time: 35 }
        ],
        totalTime: 60
      },
      reflection: {
        tasks: ["Week 2 accuracy assessment", "Error log summary", "Prepare for timing focus"],
        time: 25
      },
      totalTime: 250,
      focus: "Week 2 consolidation and assessment",
      notes: [
        "Review accuracy improvements",
        "Summarize common error patterns",
        "Prepare for speed building phase"
      ]
    },
    {
      day: 14,
      week: 2,
      phase: "Accuracy",
      speaking: {
        tasks: [
          { name: "Progress Mock Test - Speaking", count: 1, time: 50 }
        ],
        totalTime: 50
      },
      writing: {
        tasks: [
          { name: "Progress Mock Test - Writing", count: 1, time: 35 }
        ],
        totalTime: 35
      },
      reading: {
        tasks: [
          { name: "Progress Mock Test - Reading", count: 1, time: 35 }
        ],
        totalTime: 35
      },
      listening: {
        tasks: [
          { name: "Progress Mock Test - Listening", count: 1, time: 40 }
        ],
        totalTime: 40
      },
      reflection: {
        tasks: ["Detailed mock test analysis", "Compare with Day 7 results", "Set Week 3 timing goals"],
        time: 40
      },
      totalTime: 200,
      focus: "Progress assessment and timing preparation",
      notes: [
        "Compare accuracy with Week 1",
        "Note improvement areas",
        "Prepare for speed building"
      ]
    },

    // WEEK 3: TIMING
    {
      day: 15,
      week: 3,
      phase: "Timing",
      speaking: {
        tasks: [
          { name: "Read Aloud", count: 20, time: 35 },
          { name: "Repeat Sentence", count: 40, time: 40 },
          { name: "Describe Image", count: 12, time: 40 }
        ],
        totalTime: 115
      },
      writing: {
        tasks: [
          { name: "Summarize Written Text", count: 4, time: 30 },
          { name: "Write Essay", count: 1, time: 18 }
        ],
        totalTime: 48
      },
      reading: {
        tasks: [
          { name: "Fill in Blanks (R&W)", count: 6, time: 25 }
        ],
        totalTime: 25
      },
      listening: {
        tasks: [
          { name: "Write from Dictation", count: 40, time: 35 }
        ],
        totalTime: 35
      },
      reflection: {
        tasks: ["Time management analysis", "Speed vs accuracy balance", "Stamina building"],
        time: 20
      },
      totalTime: 243,
      focus: "Speed building while maintaining accuracy",
      notes: [
        "Start timing all tasks strictly",
        "Build speaking stamina",
        "Reduce essay writing time"
      ]
    },
    {
      day: 16,
      week: 3,
      phase: "Timing",
      speaking: {
        tasks: [
          { name: "Read Aloud", count: 18, time: 32 },
          { name: "Repeat Sentence", count: 35, time: 35 },
          { name: "Re-tell Lecture", count: 5, time: 35 }
        ],
        totalTime: 102
      },
      writing: {
        tasks: [
          { name: "Summarize Written Text", count: 3, time: 25 },
          { name: "Write Essay", count: 1, time: 18 }
        ],
        totalTime: 43
      },
      reading: {
        tasks: [
          { name: "Multiple Choice (Single)", count: 4, time: 20 },
          { name: "Fill in Blanks (Reading)", count: 4, time: 20 }
        ],
        totalTime: 40
      },
      listening: {
        tasks: [
          { name: "Summarize Spoken Text", count: 3, time: 25 },
          { name: "Write from Dictation", count: 30, time: 30 }
        ],
        totalTime: 55
      },
      reflection: {
        tasks: ["Note-taking speed", "Quick decision making", "Time pressure adaptation"],
        time: 20
      },
      totalTime: 260,
      focus: "Note-taking speed and quick responses",
      notes: [
        "Improve note-taking speed",
        "Practice quick decision making",
        "Adapt to time pressure"
      ]
    },
    {
      day: 17,
      week: 3,
      phase: "Timing",
      speaking: {
        tasks: [
          { name: "Read Aloud", count: 25, time: 40 },
          { name: "Repeat Sentence", count: 50, time: 45 },
          { name: "Describe Image", count: 15, time: 45 }
        ],
        totalTime: 130
      },
      writing: {
        tasks: [
          { name: "Summarize Written Text", count: 5, time: 35 },
          { name: "Write Essay", count: 1, time: 17 }
        ],
        totalTime: 52
      },
      reading: {
        tasks: [
          { name: "Fill in Blanks (R&W)", count: 8, time: 30 }
        ],
        totalTime: 30
      },
      listening: {
        tasks: [
          { name: "Write from Dictation", count: 45, time: 40 }
        ],
        totalTime: 40
      },
      reflection: {
        tasks: ["Speed benchmarking", "Stamina assessment", "Efficiency improvements"],
        time: 20
      },
      totalTime: 272,
      focus: "Maximum speed with accuracy maintenance",
      notes: [
        "Push speed limits safely",
        "Maintain accuracy standards",
        "Build mental stamina"
      ]
    },
    {
      day: 18,
      week: 3,
      phase: "Timing",
      speaking: {
        tasks: [
          { name: "Read Aloud", count: 20, time: 35 },
          { name: "Repeat Sentence", count: 40, time: 40 },
          { name: "Answer Short Question", count: 20, time: 25 }
        ],
        totalTime: 100
      },
      writing: {
        tasks: [
          { name: "Write Essay", count: 2, time: 35 }
        ],
        totalTime: 35
      },
      reading: {
        tasks: [
          { name: "Multiple Choice (Multiple)", count: 4, time: 25 },
          { name: "Re-order Paragraphs", count: 4, time: 25 }
        ],
        totalTime: 50
      },
      listening: {
        tasks: [
          { name: "Fill in Blanks", count: 5, time: 20 },
          { name: "Write from Dictation", count: 35, time: 35 }
        ],
        totalTime: 55
      },
      reflection: {
        tasks: ["Multi-task endurance", "Quick switching", "Concentration maintenance"],
        time: 20
      },
      totalTime: 260,
      focus: "Task switching and endurance building",
      notes: [
        "Practice quick task switching",
        "Build concentration endurance",
        "Maintain performance consistency"
      ]
    },
    {
      day: 19,
      week: 3,
      phase: "Timing",
      speaking: {
        tasks: [
          { name: "Read Aloud", count: 22, time: 38 },
          { name: "Repeat Sentence", count: 45, time: 42 },
          { name: "Describe Image", count: 18, time: 50 }
        ],
        totalTime: 130
      },
      writing: {
        tasks: [
          { name: "Summarize Written Text", count: 6, time: 40 },
          { name: "Write Essay", count: 1, time: 16 }
        ],
        totalTime: 56
      },
      reading: {
        tasks: [
          { name: "Fill in Blanks (R&W)", count: 10, time: 35 }
        ],
        totalTime: 35
      },
      listening: {
        tasks: [
          { name: "Write from Dictation", count: 50, time: 45 }
        ],
        totalTime: 45
      },
      reflection: {
        tasks: ["Peak performance analysis", "Fatigue management", "Optimal timing strategies"],
        time: 20
      },
      totalTime: 286,
      focus: "Peak performance under time pressure",
      notes: [
        "Achieve peak performance",
        "Manage fatigue effectively",
        "Optimize timing strategies"
      ]
    },
    {
      day: 20,
      week: 3,
      phase: "Timing",
      speaking: {
        tasks: [
          { name: "Read Aloud", count: 18, time: 32 },
          { name: "Repeat Sentence", count: 35, time: 35 },
          { name: "Re-tell Lecture", count: 6, time: 45 }
        ],
        totalTime: 112
      },
      writing: {
        tasks: [
          { name: "Summarize Written Text", count: 4, time: 28 },
          { name: "Write Essay", count: 1, time: 16 }
        ],
        totalTime: 44
      },
      reading: {
        tasks: [
          { name: "Multiple Choice (Single)", count: 5, time: 22 },
          { name: "Fill in Blanks (Reading)", count: 5, time: 22 }
        ],
        totalTime: 44
      },
      listening: {
        tasks: [
          { name: "Summarize Spoken Text", count: 4, time: 30 },
          { name: "Write from Dictation", count: 40, time: 38 }
        ],
        totalTime: 68
      },
      reflection: {
        tasks: ["Week 3 timing mastery", "Speed-accuracy optimization", "Prepare for polishing"],
        time: 22
      },
      totalTime: 290,
      focus: "Timing mastery and optimization",
      notes: [
        "Master optimal timing for each task",
        "Perfect speed-accuracy balance",
        "Prepare for final polishing phase"
      ]
    },
    {
      day: 21,
      week: 3,
      phase: "Timing",
      speaking: {
        tasks: [
          { name: "Timed Mock Test - Speaking", count: 1, time: 55 }
        ],
        totalTime: 55
      },
      writing: {
        tasks: [
          { name: "Timed Mock Test - Writing", count: 1, time: 30 }
        ],
        totalTime: 30
      },
      reading: {
        tasks: [
          { name: "Timed Mock Test - Reading", count: 1, time: 30 }
        ],
        totalTime: 30
      },
      listening: {
        tasks: [
          { name: "Timed Mock Test - Listening", count: 1, time: 45 }
        ],
        totalTime: 45
      },
      reflection: {
        tasks: ["Comprehensive timing analysis", "Stamina assessment", "Final phase preparation"],
        time: 40
      },
      totalTime: 200,
      focus: "Full timing assessment under exam conditions",
      notes: [
        "Complete under strict exam timing",
        "Assess stamina and consistency",
        "Identify final improvement areas"
      ]
    },

    // WEEK 4: POLISHING
    {
      day: 22,
      week: 4,
      phase: "Polishing",
      speaking: {
        tasks: [
          { name: "Read Aloud", count: 15, time: 28 },
          { name: "Repeat Sentence", count: 30, time: 30 },
          { name: "Describe Image", count: 10, time: 35 },
          { name: "Re-tell Lecture", count: 3, time: 25 }
        ],
        totalTime: 118
      },
      writing: {
        tasks: [
          { name: "Summarize Written Text", count: 3, time: 20 },
          { name: "Write Essay", count: 1, time: 15 }
        ],
        totalTime: 35
      },
      reading: {
        tasks: [
          { name: "Fill in Blanks (R&W)", count: 5, time: 20 },
          { name: "Multiple Choice (Single)", count: 3, time: 15 }
        ],
        totalTime: 35
      },
      listening: {
        tasks: [
          { name: "Write from Dictation", count: 25, time: 25 },
          { name: "Summarize Spoken Text", count: 2, time: 15 }
        ],
        totalTime: 40
      },
      reflection: {
        tasks: ["Weak area focus", "Fine-tuning strategies", "Confidence building"],
        time: 25
      },
      totalTime: 253,
      focus: "Weak area improvement and fine-tuning",
      notes: [
        "Focus on identified weak areas",
        "Fine-tune successful strategies",
        "Build exam confidence"
      ]
    },
    {
      day: 23,
      week: 4,
      phase: "Polishing",
      speaking: {
        tasks: [
          { name: "Read Aloud", count: 20, time: 35 },
          { name: "Repeat Sentence", count: 40, time: 38 },
          { name: "Answer Short Question", count: 15, time: 20 }
        ],
        totalTime: 93
      },
      writing: {
        tasks: [
          { name: "Write Essay", count: 2, time: 30 }
        ],
        totalTime: 30
      },
      reading: {
        tasks: [
          { name: "Multiple Choice (Multiple)", count: 3, time: 20 },
          { name: "Re-order Paragraphs", count: 3, time: 20 }
        ],
        totalTime: 40
      },
      listening: {
        tasks: [
          { name: "Fill in Blanks", count: 4, time: 15 },
          { name: "Write from Dictation", count: 30, time: 30 }
        ],
        totalTime: 45
      },
      reflection: {
        tasks: ["Strategy refinement", "Error pattern elimination", "Performance consistency"],
        time: 25
      },
      totalTime: 233,
      focus: "Strategy refinement and consistency",
      notes: [
        "Refine successful strategies",
        "Eliminate remaining error patterns",
        "Ensure consistent performance"
      ]
    },
    {
      day: 24,
      week: 4,
      phase: "Polishing",
      speaking: {
        tasks: [
          { name: "Read Aloud", count: 18, time: 32 },
          { name: "Repeat Sentence", count: 35, time: 35 },
          { name: "Describe Image", count: 12, time: 40 }
        ],
        totalTime: 107
      },
      writing: {
        tasks: [
          { name: "Summarize Written Text", count: 4, time: 25 },
          { name: "Write Essay", count: 1, time: 15 }
        ],
        totalTime: 40
      },
      reading: {
        tasks: [
          { name: "Fill in Blanks (R&W)", count: 6, time: 25 },
          { name: "Fill in Blanks (Reading)", count: 4, time: 20 }
        ],
        totalTime: 45
      },
      listening: {
        tasks: [
          { name: "Write from Dictation", count: 35, time: 35 },
          { name: "Summarize Spoken Text", count: 3, time: 20 }
        ],
        totalTime: 55
      },
      reflection: {
        tasks: ["Performance optimization", "Final adjustments", "Exam readiness check"],
        time: 25
      },
      totalTime: 272,
      focus: "Performance optimization and final adjustments",
      notes: [
        "Optimize peak performance",
        "Make final strategy adjustments",
        "Confirm exam readiness"
      ]
    },
    {
      day: 25,
      week: 4,
      phase: "Polishing",
      speaking: {
        tasks: [
          { name: "Read Aloud", count: 12, time: 25 },
          { name: "Repeat Sentence", count: 25, time: 28 },
          { name: "Re-tell Lecture", count: 4, time: 30 }
        ],
        totalTime: 83
      },
      writing: {
        tasks: [
          { name: "Write Essay", count: 2, time: 28 }
        ],
        totalTime: 28
      },
      reading: {
        tasks: [
          { name: "Multiple Choice (Single)", count: 4, time: 18 },
          { name: "Multiple Choice (Multiple)", count: 3, time: 18 }
        ],
        totalTime: 36
      },
      listening: {
        tasks: [
          { name: "All task types review", count: 1, time: 60 }
        ],
        totalTime: 60
      },
      reflection: {
        tasks: ["Comprehensive review", "Confidence assessment", "Final preparations"],
        time: 30
      },
      totalTime: 237,
      focus: "Comprehensive review and confidence building",
      notes: [
        "Review all task types",
        "Build final confidence",
        "Prepare mentally for exam"
      ]
    },
    {
      day: 26,
      week: 4,
      phase: "Polishing",
      speaking: {
        tasks: [
          { name: "Light practice - all tasks", count: 1, time: 45 }
        ],
        totalTime: 45
      },
      writing: {
        tasks: [
          { name: "Template review", count: 1, time: 20 }
        ],
        totalTime: 20
      },
      reading: {
        tasks: [
          { name: "Strategy review", count: 1, time: 20 }
        ],
        totalTime: 20
      },
      listening: {
        tasks: [
          { name: "Final practice", count: 1, time: 30 }
        ],
        totalTime: 30
      },
      reflection: {
        tasks: ["Final strategy review", "Relaxation techniques", "Exam day preparation"],
        time: 30
      },
      totalTime: 145,
      focus: "Light practice and exam preparation",
      notes: [
        "Light practice to maintain sharpness",
        "Review all strategies and templates",
        "Prepare for exam day logistics"
      ]
    },
    {
      day: 27,
      week: 4,
      phase: "Polishing",
      speaking: {
        tasks: [
          { name: "Full Mock Test - Speaking", count: 1, time: 60 }
        ],
        totalTime: 60
      },
      writing: {
        tasks: [
          { name: "Full Mock Test - Writing", count: 1, time: 30 }
        ],
        totalTime: 30
      },
      reading: {
        tasks: [
          { name: "Full Mock Test - Reading", count: 1, time: 30 }
        ],
        totalTime: 30
      },
      listening: {
        tasks: [
          { name: "Full Mock Test - Listening", count: 1, time: 45 }
        ],
        totalTime: 45
      },
      reflection: {
        tasks: ["Complete mock test analysis", "Final score prediction", "Last-minute adjustments"],
        time: 45
      },
      totalTime: 210,
      focus: "Final full mock test and analysis",
      notes: [
        "Complete under exact exam conditions",
        "Analyze performance thoroughly",
        "Make any last-minute adjustments"
      ]
    },
    {
      day: 28,
      week: 4,
      phase: "Polishing",
      speaking: {
        tasks: [
          { name: "Confidence building practice", count: 1, time: 30 }
        ],
        totalTime: 30
      },
      writing: {
        tasks: [
          { name: "Template final review", count: 1, time: 15 }
        ],
        totalTime: 15
      },
      reading: {
        tasks: [
          { name: "Quick strategy refresh", count: 1, time: 15 }
        ],
        totalTime: 15
      },
      listening: {
        tasks: [
          { name: "Accuracy maintenance", count: 1, time: 20 }
        ],
        totalTime: 20
      },
      reflection: {
        tasks: ["Journey reflection", "Achievement celebration", "Final confidence boost"],
        time: 25
      },
      totalTime: 105,
      focus: "Confidence building and final preparation",
      notes: [
        "Build final confidence",
        "Celebrate progress made",
        "Maintain positive mindset"
      ]
    },
    {
      day: 29,
      week: 4,
      phase: "Polishing",
      speaking: {
        tasks: [
          { name: "Light warm-up practice", count: 1, time: 20 }
        ],
        totalTime: 20
      },
      writing: {
        tasks: [
          { name: "Quick template check", count: 1, time: 10 }
        ],
        totalTime: 10
      },
      reading: {
        tasks: [
          { name: "Strategy reminder", count: 1, time: 10 }
        ],
        totalTime: 10
      },
      listening: {
        tasks: [
          { name: "Confidence practice", count: 1, time: 15 }
        ],
        totalTime: 15
      },
      reflection: {
        tasks: ["Final mental preparation", "Relaxation", "Exam day logistics"],
        time: 20
      },
      totalTime: 75,
      focus: "Final mental preparation and relaxation",
      notes: [
        "Light practice only",
        "Focus on mental preparation",
        "Ensure proper rest"
      ]
    },
    {
      day: 30,
      week: 4,
      phase: "Polishing",
      speaking: {
        tasks: [
          { name: "Final confidence check", count: 1, time: 15 }
        ],
        totalTime: 15
      },
      writing: {
        tasks: [
          { name: "Template final glance", count: 1, time: 5 }
        ],
        totalTime: 5
      },
      reading: {
        tasks: [
          { name: "Strategy final review", count: 1, time: 5 }
        ],
        totalTime: 5
      },
      listening: {
        tasks: [
          { name: "Final readiness check", count: 1, time: 10 }
        ],
        totalTime: 10
      },
      reflection: {
        tasks: ["30-day journey completion", "Final affirmations", "Exam success visualization"],
        time: 30
      },
      totalTime: 65,
      focus: "Journey completion and exam day readiness",
      notes: [
        "Celebrate 30-day completion",
        "Final positive affirmations",
        "You are ready for success!"
      ]
    }
  ];

  const currentPlan = studyPlan[selectedDay - 1];
  const currentWeek = Math.ceil(selectedDay / 7);
  const completionRate = (completedDays.size / 30) * 100;

  const getPhaseColor = (phase: string) => {
    switch (phase) {
      case 'Foundation': return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'Accuracy': return 'bg-green-50 border-green-200 text-green-800';
      case 'Timing': return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'Polishing': return 'bg-purple-50 border-purple-200 text-purple-800';
      default: return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <Calendar className="h-7 w-7 text-indigo-600 mr-3" />
          30-Day Detailed Study Plan
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600">{completedDays.size}</div>
            <div className="text-sm text-blue-800">Days Completed</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">{Math.round(completionRate)}%</div>
            <div className="text-sm text-green-800">Progress</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-600">{currentWeek}</div>
            <div className="text-sm text-purple-800">Current Week</div>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-amber-600">{30 - completedDays.size}</div>
            <div className="text-sm text-amber-800">Days Remaining</div>
          </div>
        </div>

        {/* Phase Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { phase: 'Foundation', week: '1', focus: 'Learn formats & templates' },
            { phase: 'Accuracy', week: '2', focus: 'Error reduction & precision' },
            { phase: 'Timing', week: '3', focus: 'Speed & stamina building' },
            { phase: 'Polishing', week: '4', focus: 'Mock tests & refinement' }
          ].map((item) => (
            <div key={item.phase} className={`p-4 rounded-lg border ${getPhaseColor(item.phase)}`}>
              <div className="font-semibold mb-1">Week {item.week}: {item.phase}</div>
              <div className="text-sm">{item.focus}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Day Selector */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Select Day</h3>
          <div className="grid grid-cols-5 gap-2 max-h-96 overflow-y-auto">
            {studyPlan.map((day) => (
              <button
                key={day.day}
                onClick={() => setSelectedDay(day.day)}
                className={`p-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedDay === day.day
                    ? 'bg-indigo-600 text-white'
                    : completedDays.has(day.day)
                    ? 'bg-green-100 text-green-800 border border-green-300'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {day.day}
              </button>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Legend:</span>
            </div>
            <div className="mt-2 space-y-1 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-indigo-600 rounded"></div>
                <span>Selected</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-100 border border-green-300 rounded"></div>
                <span>Completed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-100 rounded"></div>
                <span>Pending</span>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Plan Details */}
        <div className="lg:col-span-3 space-y-6">
          {/* Day Header */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Day {currentPlan.day}</h3>
                <div className="flex items-center space-x-4 mt-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getPhaseColor(currentPlan.phase)}`}>
                    Week {currentPlan.week}: {currentPlan.phase}
                  </span>
                  <span className="text-sm text-gray-600">
                    <Clock className="h-4 w-4 inline mr-1" />
                    {Math.floor(currentPlan.totalTime / 60)}h {currentPlan.totalTime % 60}m
                  </span>
                </div>
              </div>
              
              <button
                onClick={() => toggleDayComplete(currentPlan.day)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                  completedDays.has(currentPlan.day)
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                }`}
              >
                <CheckCircle className="h-4 w-4" />
                <span>{completedDays.has(currentPlan.day) ? 'Completed' : 'Mark Complete'}</span>
              </button>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Today's Focus</h4>
              <p className="text-blue-800">{currentPlan.focus}</p>
            </div>
          </div>

          {/* Task Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Speaking */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Mic className="h-5 w-5 text-blue-600 mr-2" />
                Speaking ({currentPlan.speaking.totalTime} min)
              </h4>
              <div className="space-y-3">
                {currentPlan.speaking.tasks.map((task, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium text-blue-900">{task.name}</span>
                    <div className="text-right">
                      <div className="text-sm font-bold text-blue-700">×{task.count}</div>
                      <div className="text-xs text-blue-600">{task.time} min</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Writing */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="h-5 w-5 text-purple-600 mr-2" />
                Writing ({currentPlan.writing.totalTime} min)
              </h4>
              <div className="space-y-3">
                {currentPlan.writing.tasks.map((task, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium text-purple-900">{task.name}</span>
                    <div className="text-right">
                      <div className="text-sm font-bold text-purple-700">×{task.count}</div>
                      <div className="text-xs text-purple-600">{task.time} min</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reading */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <BookOpen className="h-5 w-5 text-green-600 mr-2" />
                Reading ({currentPlan.reading.totalTime} min)
              </h4>
              <div className="space-y-3">
                {currentPlan.reading.tasks.map((task, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-green-900">{task.name}</span>
                    <div className="text-right">
                      <div className="text-sm font-bold text-green-700">×{task.count}</div>
                      <div className="text-xs text-green-600">{task.time} min</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Listening */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Headphones className="h-5 w-5 text-orange-600 mr-2" />
                Listening ({currentPlan.listening.totalTime} min)
              </h4>
              <div className="space-y-3">
                {currentPlan.listening.tasks.map((task, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="font-medium text-orange-900">{task.name}</span>
                    <div className="text-right">
                      <div className="text-sm font-bold text-orange-700">×{task.count}</div>
                      <div className="text-xs text-orange-600">{task.time} min</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reflection Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Target className="h-5 w-5 text-indigo-600 mr-2" />
              Reflection & Recording ({currentPlan.reflection.time} min)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentPlan.reflection.tasks.map((task, index) => (
                <div key={index} className="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                  <div className="font-medium text-indigo-900">{task}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Study Notes */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h4 className="text-lg font-bold text-amber-900 mb-4 flex items-center">
              <Star className="h-5 w-5 mr-2" />
              Study Notes & Tips
            </h4>
            <div className="space-y-2">
              {currentPlan.notes.map((note, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-amber-800">{note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Milestones */}
          {[7, 14, 21, 28].includes(currentPlan.day) && (
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-6">
              <h4 className="text-lg font-bold text-purple-900 mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Week {currentPlan.week} Milestone
              </h4>
              <div className="text-purple-800">
                {currentPlan.week === 1 && "🎉 Foundation Complete! You've learned all task formats and basic templates."}
                {currentPlan.week === 2 && "🎯 Accuracy Mastered! Your error rate should be significantly reduced."}
                {currentPlan.week === 3 && "⚡ Timing Optimized! You can now complete tasks within time limits."}
                {currentPlan.week === 4 && "🏆 Journey Complete! You're ready for PTE success!"}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}