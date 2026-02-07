import React from 'react';
import { 
  Menu, 
  Bell, 
  CheckCircle, 
  FileText, 
  Calendar, 
  Clock, 
  Gavel, 
  User 
} from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-8 font-sans">
      {/* Header */}
      <header className="px-4 py-4 flex items-center justify-between bg-white">
        <div className="flex items-center gap-4">
          <Menu className="w-6 h-6 text-[#1A3D63]" />
          <h1 className="text-xl font-bold text-[#1A3D63]">Dashboard</h1>
        </div>
        <div className="relative">
          <Bell className="w-6 h-6 text-[#1A3D63]" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </div>
      </header>

      {/* Profile Card Section */}
      <div className="px-4 mt-2">
        <div className="bg-gradient-to-br from-[#4A7FA7] to-[#1A3D63] rounded-[30px] p-6 text-white relative overflow-hidden shadow-lg">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <p className="text-blue-100 font-medium">Hello,</p>
              <h2 className="text-3xl font-bold">Avinash Maurya</h2>
              <div className="flex items-center gap-2 mt-4">
                <p className="text-sm text-blue-100">B.Sc IT • Div B</p>
              </div>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
              <span className="text-2xl font-bold">A</span>
            </div>
          </div>
          
          <div className="mt-8">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-xs font-medium backdrop-blur-md border border-white/20">
              Academic Year 2025-26
            </span>
          </div>

          {/* Abstract background shapes */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-0 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Performance Snapshot */}
      <div className="mt-8 px-4">
        <h3 className="text-lg font-bold text-[#1A3D63] mb-4">Performance Snapshot</h3>
        <div className="grid grid-cols-2 gap-4">
          {/* Attendance */}
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-50 flex flex-col gap-3">
            <div className="w-10 h-10 bg-[#E0F2FE] rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-[#0EA5E9]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#1A3D63]">0%</p>
              <p className="text-xs text-gray-400 font-medium">Attendance</p>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-50 flex flex-col gap-3">
            <div className="w-10 h-10 bg-[#E0E7FF] rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-[#6366F1]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#1A3D63]">0</p>
              <p className="text-xs text-gray-400 font-medium">Notes</p>
            </div>
          </div>

          {/* Events */}
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-50 flex flex-col gap-3">
            <div className="w-10 h-10 bg-[#F0F9FF] rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-[#38BDF8]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#1A3D63]">0</p>
              <p className="text-xs text-gray-400 font-medium">Events</p>
            </div>
          </div>

          {/* Notices */}
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-50 flex flex-col gap-3">
            <div className="w-10 h-10 bg-[#FEF2F2] rounded-xl flex items-center justify-center">
              <Bell className="w-6 h-6 text-[#F87171]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#1A3D63]">0</p>
              <p className="text-xs text-gray-400 font-medium">Notices</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Services */}
      <div className="mt-8 px-4">
        <h3 className="text-lg font-bold text-[#1A3D63] mb-4">Quick Services</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-[#B9D5E8] rounded-2xl flex items-center justify-center shadow-sm">
              <Clock className="w-8 h-8 text-[#1A3D63]" />
            </div>
            <p className="text-xs font-semibold text-[#1A3D63]">Schedule</p>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-[#8FB9D6] rounded-2xl flex items-center justify-center shadow-sm">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <p className="text-xs font-semibold text-[#1A3D63]">Leave</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-[#5289B1] rounded-2xl flex items-center justify-center shadow-sm">
              <Gavel className="w-8 h-8 text-white" />
            </div>
            <p className="text-xs font-semibold text-[#1A3D63]">Redressal</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 bg-[#6B7C93] rounded-2xl flex items-center justify-center shadow-sm">
              <User className="w-8 h-8 text-white" />
            </div>
            <p className="text-xs font-semibold text-[#1A3D63]">Profile</p>
          </div>
        </div>
      </div>

      {/* Bottom Handle */}
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full"></div>
    </div>
  );
};

export default Dashboard;
