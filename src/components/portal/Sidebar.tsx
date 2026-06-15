"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  KanbanSquare, 
  Briefcase, 
  LineChart, 
  Users, 
  Zap,
  CheckCircle2,
  FileBox,
  BookOpen,
  ArrowLeft
} from "lucide-react";
import Image from "next/image";

export default function Sidebar() {
  const pathname = usePathname();
  
  const isFounder = pathname?.includes("/founder");
  const isTeam = pathname?.includes("/team");

  const founderLinks = [
    { name: "Command Center", path: "/portal/founder", icon: LayoutDashboard },
    { name: "CRM Pipeline", path: "/portal/founder/crm", icon: KanbanSquare },
    { name: "Projects", path: "/portal/founder/projects", icon: Briefcase },
    { name: "Financials", path: "/portal/founder/financials", icon: LineChart },
    { name: "Team Management", path: "/portal/founder/team", icon: Users },
    { name: "Automations", path: "/portal/founder/automations", icon: Zap },
  ];

  const teamLinks = [
    { name: "Team Home", path: "/portal/team", icon: LayoutDashboard },
    { name: "Task Center", path: "/portal/team/tasks", icon: CheckCircle2 },
    { name: "Deliverables", path: "/portal/team/deliverables", icon: FileBox },
    { name: "Knowledge Hub", path: "/portal/team/knowledge", icon: BookOpen },
  ];

  const activeLinks = isFounder ? founderLinks : (isTeam ? teamLinks : []);

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-[var(--bg-forest)] text-[var(--border-light)] p-5 flex flex-col z-40 border-r border-white/5">
      
      {/* Brand */}
      <div className="mb-10 mt-2 px-3">
        <div className="flex items-center gap-2 mb-1">
          <Image src="/compile-logo.png" alt="Logo" width={24} height={24} className="mix-blend-screen invert grayscale contrast-150 rounded-sm" />
          <span className="font-display font-semibold text-white tracking-tight text-lg">Compile OS</span>
        </div>
        <div className="text-xs font-mono text-[var(--sage)] uppercase tracking-widest pl-8">
          {isFounder ? "Founder Environment" : "Team Workspace"}
        </div>
      </div>
      
      {/* Main Nav */}
      <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3 px-3">Menu</div>
      <nav className="flex-1 space-y-1">
        {activeLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.path;
          
          return (
            <Link 
              key={link.path} 
              href={link.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm font-medium ${
                isActive 
                  ? "bg-white/10 text-white shadow-sm" 
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={18} className={isActive ? "text-[var(--gold)]" : "opacity-70"} />
              {link.name}
            </Link>
          );
        })}
      </nav>
      
      {/* Environment Switcher (For Demo Purposes) */}
      <div className="mt-auto pt-6 border-t border-white/10 space-y-1">
        <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3 px-3">Environments</div>
        
        {!isFounder && (
          <Link href="/portal/founder" className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white">
            <LayoutDashboard size={16} className="opacity-70" /> Switch to Founder
          </Link>
        )}
        
        {!isTeam && (
          <Link href="/portal/team" className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white">
            <Users size={16} className="opacity-70" /> Switch to Team
          </Link>
        )}

        <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white mt-4">
          <ArrowLeft size={16} className="opacity-70" /> Exit Portal
        </Link>
      </div>
    </aside>
  );
}