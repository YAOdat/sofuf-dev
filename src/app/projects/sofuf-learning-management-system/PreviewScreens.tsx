import React, { useState } from 'react';
import { X, Users, BookOpen, Calendar, MessageSquare, BarChart3, Bell, Search, Menu, ChevronDown, Star, Clock, Award, TrendingUp } from 'lucide-react';

// Mini Dashboard Preview Component
const MiniDashboard = ({ scale = 'scale-50' }) => (
  <div className={`${scale} origin-top-left transform-gpu`}>
    <div className="w-96 h-64 bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
      {/* Header */}
      <div className="h-12 bg-slate-800 border-b border-slate-700 flex items-center px-4">
        <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded"></div>
        <div className="ml-2 text-xs text-white font-semibold">Sofuf Dashboard</div>
        <div className="ml-auto flex space-x-2">
          <Bell className="w-4 h-4 text-slate-400" />
          <div className="w-6 h-6 bg-slate-600 rounded-full"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 grid grid-cols-2 gap-3 h-52">
        <div className="bg-slate-800 rounded p-3">
          <Users className="w-4 h-4 text-cyan-400 mb-1" />
          <div className="text-xs text-slate-300">Students</div>
          <div className="text-lg font-bold text-white">1,247</div>
        </div>
        <div className="bg-slate-800 rounded p-3">
          <BookOpen className="w-4 h-4 text-purple-400 mb-1" />
          <div className="text-xs text-slate-300">Classes</div>
          <div className="text-lg font-bold text-white">34</div>
        </div>
        <div className="bg-slate-800 rounded p-3">
          <Calendar className="w-4 h-4 text-pink-400 mb-1" />
          <div className="text-xs text-slate-300">Events</div>
          <div className="text-lg font-bold text-white">12</div>
        </div>
        <div className="bg-slate-800 rounded p-3">
          <BarChart3 className="w-4 h-4 text-green-400 mb-1" />
          <div className="text-xs text-slate-300">Performance</div>
          <div className="text-lg font-bold text-white">94%</div>
        </div>
      </div>
    </div>
  </div>
);

// Mini Student Portal Preview
const MiniStudentPortal = ({ scale = 'scale-50' }) => (
  <div className={`${scale} origin-top-left transform-gpu`}>
    <div className="w-96 h-64 bg-white rounded-lg border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center px-4">
        <div className="text-white font-bold text-sm">Student Portal</div>
        <div className="ml-auto text-white text-xs">Ziyad Ahmad - Grade 10</div>
      </div>
      
      {/* Navigation */}
      <div className="h-10 bg-slate-50 border-b flex items-center px-4 space-x-4">
        <div className="text-xs text-slate-600 border-b-2 border-cyan-500 pb-2">Grades</div>
        <div className="text-xs text-slate-400">Assignments</div>
        <div className="text-xs text-slate-400">Schedule</div>
      </div>
      
      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between p-2 bg-slate-50 rounded">
          <div className="text-xs font-medium text-slate-700">Mathematics</div>
          <div className="text-xs font-bold text-green-600">A+</div>
        </div>
        <div className="flex items-center justify-between p-2 bg-slate-50 rounded">
          <div className="text-xs font-medium text-slate-700">Science</div>
          <div className="text-xs font-bold text-blue-600">B+</div>
        </div>
        <div className="flex items-center justify-between p-2 bg-slate-50 rounded">
          <div className="text-xs font-medium text-slate-700">English</div>
          <div className="text-xs font-bold text-purple-600">A</div>
        </div>
        <div className="mt-4 p-3 bg-gradient-to-r from-cyan-50 to-purple-50 rounded">
          <div className="flex items-center">
            <Award className="w-4 h-4 text-yellow-500 mr-2" />
            <div className="text-xs font-semibold text-slate-700">Overall GPA: 3.8</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Mini Teacher Dashboard Preview
const MiniTeacherDashboard = ({ scale = 'scale-50' }) => (
  <div className={`${scale} origin-top-left transform-gpu`}>
    <div className="w-96 h-64 bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
      {/* Header */}
      <div className="h-12 bg-slate-800 border-b border-slate-700 flex items-center px-4">
        <Menu className="w-4 h-4 text-slate-400 mr-3" />
        <div className="text-xs text-white font-semibold">Teacher Dashboard</div>
        <div className="ml-auto text-xs text-slate-300">Ms. Johnson</div>
      </div>
      
      {/* Today's Schedule */}
      <div className="p-4">
        <div className="text-xs font-semibold text-slate-300 mb-3">Today's Classes</div>
        <div className="space-y-2">
          <div className="flex items-center p-2 bg-slate-800 rounded">
            <Clock className="w-3 h-3 text-cyan-400 mr-3" />
            <div>
              <div className="text-xs font-medium text-white">Math 101</div>
              <div className="text-xs text-slate-400">9:00 AM - Room 204</div>
            </div>
            <div className="ml-auto text-xs text-green-400">24 students</div>
          </div>
          <div className="flex items-center p-2 bg-slate-800 rounded">
            <Clock className="w-3 h-3 text-purple-400 mr-3" />
            <div>
              <div className="text-xs font-medium text-white">Physics 102</div>
              <div className="text-xs text-slate-400">11:00 AM - Lab 3</div>
            </div>
            <div className="ml-auto text-xs text-green-400">18 students</div>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="bg-slate-800 p-2 rounded text-center">
            <div className="text-lg font-bold text-cyan-400">42</div>
            <div className="text-xs text-slate-400">Assignments</div>
          </div>
          <div className="bg-slate-800 p-2 rounded text-center">
            <div className="text-lg font-bold text-purple-400">87%</div>
            <div className="text-xs text-slate-400">Avg Grade</div>
          </div>
          <div className="bg-slate-800 p-2 rounded text-center">
            <div className="text-lg font-bold text-pink-400">156</div>
            <div className="text-xs text-slate-400">Students</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Mini Parent Portal Preview
const MiniParentPortal = ({ scale = 'scale-50' }) => (
  <div className={`${scale} origin-top-left transform-gpu`}>
    <div className="w-96 h-64 bg-white rounded-lg border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="h-12 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center px-4">
        <div className="text-white font-bold text-sm">Parent Portal</div>
        <div className="ml-auto text-white text-xs">Sarah's Parent</div>
      </div>
      
      {/* Child Selector */}
      <div className="h-10 bg-slate-50 border-b flex items-center px-4">
        <div className="text-xs text-slate-600 mr-2">Viewing:</div>
        <div className="flex items-center text-xs font-medium text-slate-800">
          Sarah Johnson (Grade 8)
          <ChevronDown className="w-3 h-3 ml-1" />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-green-50 p-3 rounded">
            <div className="text-xs text-green-600 font-semibold">Attendance</div>
            <div className="text-lg font-bold text-green-700">96%</div>
          </div>
          <div className="bg-blue-50 p-3 rounded">
            <div className="text-xs text-blue-600 font-semibold">Avg Grade</div>
            <div className="text-lg font-bold text-blue-700">B+</div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="text-xs font-semibold text-slate-700">Recent Notifications</div>
          <div className="p-2 bg-yellow-50 rounded border-l-2 border-yellow-400">
            <div className="text-xs font-medium text-slate-700">Math Quiz Tomorrow</div>
            <div className="text-xs text-slate-500">Study chapters 5-6</div>
          </div>
          <div className="p-2 bg-blue-50 rounded border-l-2 border-blue-400">
            <div className="text-xs font-medium text-slate-700">Parent-Teacher Meeting</div>
            <div className="text-xs text-slate-500">Scheduled for Friday 3 PM</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Mini Analytics Dashboard Preview
const MiniAnalytics = ({ scale = 'scale-50' }) => (
  <div className={`${scale} origin-top-left transform-gpu`}>
    <div className="w-96 h-64 bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
      {/* Header */}
      <div className="h-12 bg-slate-800 border-b border-slate-700 flex items-center px-4">
        <BarChart3 className="w-4 h-4 text-cyan-400 mr-2" />
        <div className="text-xs text-white font-semibold">School Analytics</div>
        <div className="ml-auto text-xs text-slate-400">Last 30 days</div>
      </div>
      
      {/* KPI Cards */}
      <div className="p-4 grid grid-cols-2 gap-3 mb-4">
        <div className="bg-slate-800 p-3 rounded">
          <div className="flex items-center justify-between">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <div className="text-xs text-green-400">+12%</div>
          </div>
          <div className="text-xs text-slate-400 mt-1">Enrollment</div>
          <div className="text-lg font-bold text-white">1,284</div>
        </div>
        <div className="bg-slate-800 p-3 rounded">
          <div className="flex items-center justify-between">
            <Star className="w-4 h-4 text-yellow-400" />
            <div className="text-xs text-yellow-400">+5%</div>
          </div>
          <div className="text-xs text-slate-400 mt-1">Satisfaction</div>
          <div className="text-lg font-bold text-white">4.8/5</div>
        </div>
      </div>
      
      {/* Chart Area */}
      <div className="px-4 pb-4">
        <div className="bg-slate-800 rounded p-3 h-20">
          <div className="text-xs text-slate-400 mb-2">Performance Trends</div>
          <div className="flex items-end space-x-1 h-10">
            <div className="w-2 bg-cyan-400 h-6 rounded-sm"></div>
            <div className="w-2 bg-cyan-400 h-8 rounded-sm"></div>
            <div className="w-2 bg-cyan-400 h-4 rounded-sm"></div>
            <div className="w-2 bg-cyan-400 h-10 rounded-sm"></div>
            <div className="w-2 bg-cyan-400 h-7 rounded-sm"></div>
            <div className="w-2 bg-cyan-400 h-9 rounded-sm"></div>
            <div className="w-2 bg-cyan-400 h-5 rounded-sm"></div>
            <div className="w-2 bg-cyan-400 h-8 rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Mini Mobile App Preview
const MiniMobileApp = ({ scale = 'scale-50' }) => (
  <div className={`${scale} origin-top-left transform-gpu`}>
    <div className="w-64 h-64 bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden mx-auto">
      {/* Phone Header */}
      <div className="h-8 bg-black flex items-center justify-center">
        <div className="w-12 h-1 bg-slate-600 rounded-full"></div>
      </div>
      
      {/* App Header */}
      <div className="h-12 bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center px-4">
        <div className="text-white font-bold text-xs">Sofuf Mobile</div>
        <div className="ml-auto">
          <Bell className="w-4 h-4 text-white" />
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-slate-800 p-3 rounded-lg text-center">
            <Users className="w-6 h-6 text-cyan-400 mx-auto mb-1" />
            <div className="text-xs text-slate-300">Students</div>
          </div>
          <div className="bg-slate-800 p-3 rounded-lg text-center">
            <BookOpen className="w-6 h-6 text-purple-400 mx-auto mb-1" />
            <div className="text-xs text-slate-300">Grades</div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="bg-slate-800 p-2 rounded flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
            <div className="text-xs text-white">Math class in 30 min</div>
          </div>
          <div className="bg-slate-800 p-2 rounded flex items-center">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
            <div className="text-xs text-white">Assignment due today</div>
          </div>
          <div className="bg-slate-800 p-2 rounded flex items-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
            <div className="text-xs text-white">Parent meeting scheduled</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Mini Telegram Bot Preview
const MiniTelegramBot = ({ scale = 'scale-50' }) => (
  <div className={`${scale} origin-top-left transform-gpu`}>
    <div className="w-96 h-64 bg-slate-900 rounded-lg border border-slate-700 overflow-hidden">
      {/* Header */}
      <div className="h-12 bg-gradient-to-r from-blue-500 to-cyan-500 px-4 flex items-center">
        <div className="text-white font-semibold text-sm">Telegram Bot</div>
        <div className="ml-auto text-xs text-white">School Bot</div>
      </div>
      
      {/* Chat Bubbles */}
      <div className="p-4 space-y-3 overflow-y-auto h-52">
        <div className="bg-slate-800 p-3 rounded-lg text-sm text-white w-fit max-w-[80%]">
          ✅ Attendance: Sarah was present today.
        </div>
        <div className="bg-slate-800 p-3 rounded-lg text-sm text-white w-fit max-w-[80%]">
          📌 Homework: Complete Chapter 7 exercises by Monday.
        </div>
        <div className="bg-slate-800 p-3 rounded-lg text-sm text-white w-fit max-w-[80%]">
          📅 Event Reminder: Science Fair on Thursday at 10AM.
        </div>
        <div className="bg-slate-800 p-3 rounded-lg text-sm text-white w-fit max-w-[80%]">
          🔔 New Message: Report cards are available online.
        </div>
      </div>
    </div>
  </div>
);

// Mini Attendance Tracker Preview
const MiniAttendanceTracker = ({ scale = 'scale-50' }) => (
  <div className={`${scale} origin-top-left transform-gpu`}>
    <div className="w-96 h-64 bg-white rounded-lg border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="h-12 bg-gradient-to-r from-green-400 to-blue-400 px-4 flex items-center justify-between">
        <div className="text-white font-semibold text-sm">Attendance - Grade 6A</div>
        <div className="text-xs text-white">Today</div>
      </div>

      {/* Student List */}
      <div className="p-4 space-y-3 h-52 overflow-y-auto text-xs">
        <div className="flex items-center justify-between">
          <span className="text-slate-700">Ali Ahmed</span>
          <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">Present</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-700">Sara Yousif</span>
          <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-600 font-medium">Absent</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-700">Yazan Khalid</span>
          <span className="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 font-medium">Late</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-700">Maya Zaid</span>
          <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">Present</span>
        </div>
      </div>
    </div>
  </div>
);

// Mini Weekly Plan Preview
const MiniWeeklyPlan = ({ scale = 'scale-50' }) => (
  <div className={`${scale} origin-top-left transform-gpu`}>
    <div className="w-96 h-64 bg-white rounded-lg border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="h-12 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center px-4">
        <div className="text-white font-bold text-sm">Weekly Plan</div>
        <div className="ml-auto text-white text-xs">Ms. Johnson</div>
      </div>
      {/* Form Fields */}
      <div className="p-4 space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-20 text-xs text-slate-600">Subject:</div>
          <div className="flex-1 bg-slate-100 rounded px-2 py-1 text-xs text-slate-700">Mathematics</div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-20 text-xs text-slate-600">Objectives:</div>
          <div className="flex-1 bg-slate-100 rounded px-2 py-1 text-xs text-slate-700 truncate">Fractions, Decimals, Problem Solving</div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-20 text-xs text-slate-600">Week:</div>
          <div className="flex-1 bg-slate-100 rounded px-2 py-1 text-xs text-slate-700">Apr 7 - Apr 11</div>
        </div>
      </div>
      {/* Table Preview */}
      <div className="px-4 pt-2">
        <div className="bg-slate-50 rounded-lg overflow-hidden">
          <div className="flex text-xs font-bold bg-slate-200 text-slate-700">
            <div className="flex-1 px-2 py-1">Day</div>
            <div className="flex-1 px-2 py-1">Objective</div>
          </div>
          <div className="flex text-xs border-t border-slate-100">
            <div className="flex-1 px-2 py-1">Sunday</div>
            <div className="flex-1 px-2 py-1">Intro to Fractions</div>
          </div>
          <div className="flex text-xs border-t border-slate-100">
            <div className="flex-1 px-2 py-1">Monday</div>
            <div className="flex-1 px-2 py-1">Adding Fractions</div>
          </div>
          <div className="flex text-xs border-t border-slate-100">
            <div className="flex-1 px-2 py-1">Tuesday</div>
            <div className="flex-1 px-2 py-1">Decimals</div>
          </div>
          <div className="flex text-xs border-t border-slate-100">
            <div className="flex-1 px-2 py-1">Wednesday</div>
            <div className="flex-1 px-2 py-1">Word Problems</div>
          </div>
          <div className="flex text-xs border-t border-slate-100">
            <div className="flex-1 px-2 py-1">Thursday</div>
            <div className="flex-1 px-2 py-1">Review & Quiz</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};
const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-slate-900 rounded-2xl border border-slate-700 max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-slate-800"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 flex justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

type Preview = {
  id: string;
  title: string;
  description: string;
  component: React.FC<{ scale?: string }>;
};

export const PreviewScreens = () => {
  const [selectedPreview, setSelectedPreview] = useState<Preview | null>(null);

  const previews: Preview[] = [
    {
      id: 'dashboard',
      title: 'Admin Dashboard',
      description: 'Complete overview of school metrics and KPIs',
      component: MiniDashboard,
    },
    {
      id: 'student',
      title: 'Student Portal',
      description: 'Student grades, assignments, and schedule view',
      component: MiniStudentPortal,
    },
    {
      id: 'teacher',
      title: 'Teacher Dashboard',
      description: 'Class management and student progress tracking',
      component: MiniTeacherDashboard,
    },
    {
      id: 'parent',
      title: 'Parent Portal',
      description: 'Child progress monitoring and communication',
      component: MiniParentPortal,
    },
    {
      id: 'analytics',
      title: 'Analytics Dashboard',
      description: 'School performance insights and trends',
      component: MiniAnalytics,
    },
    {
      id: 'mobile',
      title: 'Mobile App',
      description: 'On-the-go access to all features',
      component: MiniMobileApp,
    },
    {
      id: 'telegram',
      title: 'Telegram Bot',
      description: 'Automated school notifications and updates via Telegram',
      component: MiniTelegramBot,
    },
    {
      id: 'attendance',
      title: 'Attendance Tracker',
      description: 'Track student attendance in real time',
      component: MiniAttendanceTracker,
    },
    {
      id: 'weeklyplan',
      title: 'Weekly Plan',
      description: 'Teachers can insert weekly plans, subjects, objectives, and week dates',
      component: MiniWeeklyPlan,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {previews.map((preview) => {
          const Component = preview.component;
          return (
            <div key={preview.id} className="group">
              <div 
                className="relative bg-slate-900/60 rounded-2xl p-6 border border-slate-700/50 cursor-pointer transition-all duration-300 hover:bg-slate-900/80 hover:border-slate-600 hover:scale-105"
                onClick={() => setSelectedPreview(preview)}
              >
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-2">{preview.title}</h3>
                  <p className="text-sm text-slate-400">{preview.description}</p>
                </div>
                
                <div className="relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    Click to enlarge
                  </div>
                  <Component scale="scale-75" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Modal 
        isOpen={!!selectedPreview} 
        onClose={() => setSelectedPreview(null)}
        title={selectedPreview?.title || ''}
      >
        {selectedPreview && (
          <div>
            <p className="text-slate-400 mb-6 text-center">{selectedPreview.description}</p>
            <selectedPreview.component scale="scale-100" />
          </div>
        )}
      </Modal>
    </>
  );
};