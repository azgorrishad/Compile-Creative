"use client";

import { Search, Bell, Settings, Command } from "lucide-react";
import Image from "next/image";

export default function TopBar() {
  return (
    <header className="h-16 flex items-center justify-between px-8 bg-transparent sticky top-0 z-30 mb-4 backdrop-blur-md">
      
      {/* Left side / Breadcrumbs or Context */}
      <div className="flex items-center gap-2">
        {/* We can dynamically inject breadcrumbs here later if needed */}
      </div>
      
      {/* Center - Global Search */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md hidden md:block">
        <button className="w-full flex items-center justify-between bg-white border border-[var(--border)] rounded-lg px-3 py-1.5 text-sm text-[var(--text-muted)] hover:border-[var(--sage)] transition-colors shadow-sm">
          <div className="flex items-center gap-2">
            <Search size={16} />
            <span>Search anything...</span>
          </div>
          <div className="flex items-center gap-1">
            <kbd className="bg-[var(--bg-base)] border border-[var(--border)] rounded px-1.5 py-0.5 text-xs font-sans text-[var(--text-primary)] flex items-center">
              <Command size={10} className="mr-0.5" /> K
            </kbd>
          </div>
        </button>
      </div>
      
      {/* Right - User Actions */}
      <div className="flex items-center space-x-4 ml-auto">
        <button className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        
        <button className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
          <Settings size={20} />
        </button>

        <div className="h-6 w-px bg-[var(--border)] mx-2"></div>
        
        <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-full bg-[var(--sage-dark)] text-white flex items-center justify-center font-bold shadow-sm overflow-hidden border border-[var(--border)]">
            <Image src="/media__1780764027825.jpg" alt="User Avatar" width={32} height={32} className="object-cover w-full h-full" />
          </div>
        </button>
      </div>
    </header>
  );
}