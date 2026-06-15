"use client";

import { recentDeliverables, activeProjects } from "@/data/mock/portalData";
import { CheckCircle2, Clock, MessageSquare, Play, Calendar } from "lucide-react";

export default function TeamDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-display font-semibold text-[var(--text-primary)]">Good Morning, Alex</h1>
          <p className="text-[var(--text-muted)] mt-1">You have 3 tasks due today and 1 unread message.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="gold-btn py-2 px-4 text-sm flex items-center gap-2">
            <Play size={16} fill="currentColor" /> Start Deep Work Session
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Today's Focus */}
          <div className="bg-white rounded-xl border border-[var(--border)] shadow-sm overflow-hidden">
            <div className="p-5 border-b border-[var(--border)] flex justify-between items-center bg-[var(--bg-base)]">
              <h2 className="font-semibold text-[var(--text-primary)] flex items-center gap-2">
                Today&apos;s Focus
                <span className="bg-[var(--sage)] text-white text-xs px-2 py-0.5 rounded-full">3</span>
              </h2>
            </div>
            <div className="divide-y divide-[var(--border)]">
              <TaskRow name="Finalize Logo Concepts" project="Aura Botanica" time="Due 2:00 PM" priority="High" />
              <TaskRow name="Review Developer Handoff" project="Nexus OS" time="Due 5:00 PM" priority="Medium" />
              <TaskRow name="Client Feedback Sync" project="Internal" time="3:30 PM Call" priority="High" type="meeting" />
            </div>
          </div>

          {/* Deliverables Awaiting Review */}
          <div className="bg-white rounded-xl border border-[var(--border)] shadow-sm overflow-hidden">
            <div className="p-5 border-b border-[var(--border)] flex justify-between items-center bg-[var(--bg-base)]">
              <h2 className="font-semibold text-[var(--text-primary)] flex items-center gap-2">
                Awaiting Your Review
              </h2>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                {recentDeliverables.map(del => (
                  <div key={del.id} className="flex items-center justify-between p-4 border border-[var(--border)] rounded-lg hover:border-[var(--sage)] transition-colors cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--bg-base)] flex items-center justify-center text-[var(--sage)]">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-[var(--text-primary)] group-hover:text-[var(--sage)] transition-colors">{del.task || del.cast}</h4>
                        <p className="text-xs text-[var(--text-muted)] mt-0.5">{del.project} • {del.assignee}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded-md">
                      {del.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Side Column */}
        <div className="space-y-8">
          
          {/* Productivity Snapshot */}
          <div className="bg-[var(--bg-forest)] text-white rounded-xl shadow-lg p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="font-semibold mb-6 flex items-center gap-2"><Clock size={18} className="text-[var(--gold)]" /> Weekly Velocity</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white/70">Tasks Completed</span>
                  <span className="font-semibold">14 / 20</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--gold)] w-[70%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white/70">Billable Hours</span>
                  <span className="font-semibold">28h</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--sage)] w-[85%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Unread Messages */}
          <div className="bg-white rounded-xl border border-[var(--border)] shadow-sm overflow-hidden">
            <div className="p-4 border-b border-[var(--border)] flex justify-between items-center">
              <h3 className="font-semibold text-sm text-[var(--text-primary)] flex items-center gap-2">
                <MessageSquare size={16} /> Recent Comm
              </h3>
            </div>
            <div className="p-4">
              <div className="flex gap-3 items-start border-b border-[var(--border)] pb-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-[var(--sage-dark)] text-white flex items-center justify-center text-xs font-bold shrink-0">ER</div>
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Elena Rodriguez <span className="text-xs font-normal text-[var(--text-muted)]">Aura Botanica</span></p>
                  <p className="text-sm text-[var(--text-muted)] mt-0.5 line-clamp-2">The new brand guidelines look incredible. Can we hop on a quick call tomorrow to discuss...</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

function TaskRow({ name, project, time, priority, type }: any) {
  return (
    <div className="p-4 flex items-center justify-between hover:bg-[var(--bg-base)] transition-colors group cursor-pointer">
      <div className="flex items-center gap-4">
        <button className="w-5 h-5 rounded border border-[var(--border)] flex items-center justify-center text-transparent hover:border-[var(--sage)] group-hover:text-gray-300 transition-colors">
          <CheckCircle2 size={14} />
        </button>
        <div>
          <h4 className="font-medium text-sm text-[var(--text-primary)] group-hover:text-[var(--sage)] transition-colors">
            {type === 'meeting' ? <Calendar size={14} className="inline mr-1 text-[var(--text-muted)]" /> : null}
            {name}
          </h4>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">{project}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium text-[var(--text-muted)]">{time}</span>
        <span className={`w-2 h-2 rounded-full ${priority === 'High' ? 'bg-red-500' : 'bg-yellow-500'}`}></span>
      </div>
    </div>
  );
}