"use client";

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import DashboardWidgets from '@/components/DashboardWidgets';
import Projects from '@/components/Projects';
import DarkModeToggle from '@/components/DarkModeToggle';
import { UserCircleIcon, BellIcon } from '@heroicons/react/24/outline';

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Dummy user info
  const user = { name: 'Jane Doe', email: 'jane@example.com' };
  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <main className="flex-1 flex flex-col p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded">PRO</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              <BellIcon className="h-6 w-6 text-gray-500 dark:text-gray-300" />
              <span className="absolute top-1 right-1 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              <UserCircleIcon className="h-6 w-6 text-gray-500 dark:text-gray-300" />
              <span className="text-sm text-gray-800 dark:text-gray-200 font-medium">{user.name}</span>
            </div>
            <DarkModeToggle />
          </div>
        </div>
        {/* Fix: Add a container for widgets with grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <DashboardWidgets />
        </div>
        {/* Projects section below widgets */}
        <div className="mt-8">
          <Projects />
        </div>
      </main>
    </div>
  );
}
