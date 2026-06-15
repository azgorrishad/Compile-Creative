"use client";

import { Search, Plus, Filter, LayoutGrid, List, Calendar, CheckCircle2 } from "lucide-react";

export default function TaskCenter() {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header Actions */}
      <div className="flex justify-between items-center mb-8 shrink-0">
        <div>
          <h1 className="text-3xl font-display font-semibold text-[var(--text-primary)]">Task Center</h1>
          <p className="text-[var(--text-muted)] mt-1">Manage your active workload and upcoming deadlines.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-white rounded-md border border-[var(--border)] p-1">
            <button className="p-1.5 rounded bg-[var(--bg-base)] text-[var(--text-primary)] shadow-sm"><LayoutGrid size={16} /></button>
            <button className="p-1.5 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)]"><List size={16} /></button>
            <button className="p-1.5 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)]"><Calendar size={16} /></button>
          </div>
          <div className="h-6 w-px bg-[var(--border)] mx-1"></div>
          <button className="gold-btn py-2 px-4 text-sm flex items-center gap-2">
            <Plus size={16} /> New Task
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex gap-6 overflow-x-auto pb-4 flex-1 items-start hide-scrollbar">
        
        {/* Column: To Do */}
        <div className="min-w-[320px] w-[320px] bg-white rounded-xl border border-[var(--border)] shadow-sm flex flex-col max-h-full">
          <div className="p-4 border-b border-[var(--border)] flex justify-between items-center shrink-0">
            <h3 className="font-semibold text-[var(--text-primary)] flex items-center gap-2">
              To Do
              <span className="bg-[var(--bg-base)] text-[var(--text-muted)] text-xs px-2 py-0.5 rounded-full">4</span>
            </h3>
            <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
          </div>
          <div className="p-3 overflow-y-auto flex-1 space-y-3 bg-[var(--bg-base)]/30">
            <TaskCard title="Finalize Logo Concepts" project="Aura Botanica" date="Due Today" priority="High" tags={["Design", "Client"]} />
            <TaskCard title="Draft Social Copy" project="Vault Financial" date="Due Tomorrow" priority="Low" tags={["Copywriting"]} />
            <TaskCard title="Review Competitor Set" project="Nexus OS" date="Next Week" priority="Medium" tags={["Strategy"]} />
            <TaskCard title="Update Component Library" project="Internal" date="No Deadline" priority="Low" tags={["Design System"]} />
          </div>
        </div>

        {/* Column: In Progress */}
        <div className="min-w-[320px] w-[320px] bg-white rounded-xl border border-[var(--border)] shadow-sm flex flex-col max-h-full">
          <div className="p-4 border-b border-[var(--border)] flex justify-between items-center shrink-0">
            <h3 className="font-semibold text-[var(--text-primary)] flex items-center gap-2">
              In Progress
              <span className="bg-yellow-50 text-yellow-700 border border-yellow-200 text-xs px-2 py-0.5 rounded-full">2</span>
            </h3>
          </div>
          <div className="p-3 overflow-y-auto flex-1 space-y-3 bg-[var(--bg-base)]/30">
            <TaskCard title="Design Landing Page Wireframes" project="Aura Botanica" date="Due Oct 12" priority="High" tags={["UX/UI"]} active />
            <TaskCard title="Compile Brand Audit Report" project="Lumina Health" date="Due Oct 14" priority="Medium" tags={["Strategy"]} />
          </div>
        </div>

        {/* Column: In Review */}
        <div className="min-w-[320px] w-[320px] bg-white rounded-xl border border-[var(--border)] shadow-sm flex flex-col max-h-full">
          <div className="p-4 border-b border-[var(--border)] flex justify-between items-center shrink-0">
            <h3 className="font-semibold text-[var(--text-primary)] flex items-center gap-2">
              In Review
              <span className="bg-blue-50 text-blue-700 border border-blue-200 text-xs px-2 py-0.5 rounded-full">1</span>
            </h3>
          </div>
          <div className="p-3 overflow-y-auto flex-1 space-y-3 bg-[var(--bg-base)]/30">
            <TaskCard title="User Persona Document" project="Nexus OS" date="Awaiting Founder" priority="Medium" tags={["Research"]} />
          </div>
        </div>

        {/* Column: Done */}
        <div className="min-w-[320px] w-[320px] bg-white rounded-xl border border-[var(--border)] shadow-sm flex flex-col max-h-full opacity-70 hover:opacity-100 transition-opacity">
          <div className="p-4 border-b border-[var(--border)] flex justify-between items-center shrink-0">
            <h3 className="font-semibold text-[var(--text-primary)] flex items-center gap-2">
              Done (This Week)
              <span className="bg-green-50 text-green-700 border border-green-200 text-xs px-2 py-0.5 rounded-full">8</span>
            </h3>
          </div>
          <div className="p-3 overflow-y-auto flex-1 space-y-3 bg-[var(--bg-base)]/30">
            <TaskCard title="Kickoff Meeting Prep" project="Aura Botanica" date="Completed" priority="None" tags={["Admin"]} done />
            <TaskCard title="Domain Setup" project="Nexus OS" date="Completed" priority="None" tags={["Dev"]} done />
          </div>
        </div>

      </div>

    </div>
  );
}

function TaskCard({ title, project, date, priority, tags, active, done }: any) {
  return (
    <div className={`bg-white p-4 rounded-lg shadow-sm cursor-grab active:cursor-grabbing transition-all ${
      active ? 'border-2 border-[var(--sage)] shadow-md' : 
      done ? 'border border-[var(--border)] bg-gray-50' : 
      'border border-[var(--border)] hover:border-[var(--sage)]'
    }`}>
      <div className="flex justify-between items-start mb-3">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">{project}</span>
        {priority === 'High' && <span className="w-2 h-2 rounded-full bg-red-500"></span>}
        {priority === 'Medium' && <span className="w-2 h-2 rounded-full bg-yellow-500"></span>}
      </div>
      
      <h4 className={`font-medium text-sm mb-3 ${done ? 'text-[var(--text-muted)] line-through' : 'text-[var(--text-primary)]'}`}>
        {title}
      </h4>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag: string) => (
          <span key={tag} className="text-[10px] font-medium px-2 py-1 bg-[var(--bg-base)] text-[var(--text-muted)] rounded">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center pt-3 border-t border-[var(--border)]">
        <span className="text-xs font-medium text-[var(--text-muted)] flex items-center gap-1.5">
          {done ? <CheckCircle2 size={12} className="text-green-500" /> : <Calendar size={12} />}
          {date}
        </span>
        <div className="w-6 h-6 rounded-full bg-[var(--sage-dark)] text-white flex items-center justify-center text-[10px] font-bold">
          AM
        </div>
      </div>
    </div>
  );
}
