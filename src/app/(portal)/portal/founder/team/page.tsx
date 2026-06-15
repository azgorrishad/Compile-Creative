"use client";

import { teamMembers } from "@/data/mock/portalData";
import { Search, Filter, Mail, Calendar } from "lucide-react";

export default function TeamManagement() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header Actions */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-display font-semibold text-[var(--text-primary)]">Team Management</h1>
          <p className="text-[var(--text-muted)] mt-1">Track capacity, utilization, and deliverables across the agency.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input type="text" placeholder="Search team..." className="pl-9 pr-4 py-2 border border-[var(--border)] rounded-md text-sm focus:border-[var(--sage)] outline-none w-64" />
          </div>
          <button className="flex items-center gap-2 border border-[var(--border)] px-4 py-2 rounded-md text-sm font-medium hover:bg-white bg-white/50 shadow-sm">
            <Filter size={16} /> Roles
          </button>
        </div>
      </div>

      {/* Roster Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-xl border border-[var(--border)] shadow-sm overflow-hidden flex flex-col hover:border-[var(--sage)] transition-colors">
            
            {/* Header info */}
            <div className="p-6 border-b border-[var(--border)] flex flex-col items-center text-center relative">
              <span className={`absolute top-4 right-4 w-2.5 h-2.5 rounded-full ${
                member.status === 'Available' ? 'bg-green-500' :
                member.status === 'Busy' ? 'bg-yellow-500' : 'bg-red-500'
              }`}></span>
              
              <div className="w-16 h-16 rounded-full bg-[var(--bg-forest)] text-[var(--gold)] flex items-center justify-center font-display text-2xl font-bold shadow-md mb-4">
                {member.name.charAt(0)}
              </div>
              <h3 className="font-semibold text-lg text-[var(--text-primary)]">{member.name}</h3>
              <p className="text-sm font-medium text-[var(--text-muted)]">{member.role}</p>
            </div>

            {/* Metrics */}
            <div className="p-6 flex-1 flex flex-col gap-4 bg-[var(--bg-base)]/50">
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-[var(--text-primary)]">Utilization Rate</span>
                  <span className="font-semibold">{member.utilization}%</span>
                </div>
                <div className="w-full h-2 bg-[var(--border)] rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${member.utilization > 100 ? 'bg-red-500' : 'bg-[var(--sage)]'}`} 
                    style={{ width: `${Math.min(member.utilization, 100)}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="bg-white p-3 rounded border border-[var(--border)] text-center">
                  <div className="text-xl font-bold text-[var(--text-primary)]">{Math.floor(Math.random() * 5) + 2}</div>
                  <div className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-semibold mt-1">Active Projects</div>
                </div>
                <div className="bg-white p-3 rounded border border-[var(--border)] text-center">
                  <div className="text-xl font-bold text-[var(--text-primary)]">{Math.floor(Math.random() * 12) + 4}</div>
                  <div className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-semibold mt-1">Open Tasks</div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-4 border-t border-[var(--border)] flex gap-2">
              <button className="flex-1 flex justify-center items-center gap-2 py-2 border border-[var(--border)] rounded-md text-sm font-medium hover:bg-[var(--bg-base)] text-[var(--text-muted)] transition-colors">
                <Mail size={16} /> Message
              </button>
              <button className="flex-1 flex justify-center items-center gap-2 py-2 border border-[var(--border)] rounded-md text-sm font-medium hover:bg-[var(--bg-base)] text-[var(--text-muted)] transition-colors">
                <Calendar size={16} /> Schedule
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
