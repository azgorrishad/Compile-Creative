"use client";

import { crmPipeline } from "@/data/mock/portalData";
import { Plus, MoreHorizontal, Filter, Search } from "lucide-react";

export default function CRMPipeline() {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header Actions */}
      <div className="flex justify-between items-center mb-8 shrink-0">
        <div>
          <h1 className="text-3xl font-display font-semibold text-[var(--text-primary)]">Sales Pipeline</h1>
          <p className="text-[var(--text-muted)] mt-1">Total Pipeline Value: <span className="font-semibold text-[var(--text-primary)]">$1.2M</span></p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input type="text" placeholder="Search leads..." className="pl-9 pr-4 py-2 border border-[var(--border)] rounded-md text-sm focus:border-[var(--sage)] outline-none w-64" />
          </div>
          <button className="flex items-center gap-2 border border-[var(--border)] px-4 py-2 rounded-md text-sm font-medium hover:bg-white bg-white/50">
            <Filter size={16} /> Filter
          </button>
          <button className="gold-btn py-2 px-4 text-sm flex items-center gap-2">
            <Plus size={16} /> New Lead
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex gap-6 overflow-x-auto pb-4 flex-1 items-start hide-scrollbar">
        {crmPipeline.map((column) => (
          <div key={column.id} className="min-w-[300px] w-[300px] bg-white rounded-xl border border-[var(--border)] shadow-sm flex flex-col max-h-full">
            
            {/* Column Header */}
            <div className="p-4 border-b border-[var(--border)] flex justify-between items-center shrink-0">
              <h3 className="font-semibold text-[var(--text-primary)] flex items-center gap-2">
                {column.title}
                <span className="bg-[var(--bg-base)] text-[var(--text-muted)] text-xs px-2 py-0.5 rounded-full">{column.items.length}</span>
              </h3>
              <button className="text-gray-400 hover:text-gray-600"><Plus size={16} /></button>
            </div>

            {/* Cards */}
            <div className="p-3 overflow-y-auto flex-1 space-y-3 bg-[var(--bg-base)]/30">
              {column.items.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-lg border border-[var(--border)] shadow-sm hover:border-[var(--sage)] transition-colors cursor-grab active:cursor-grabbing">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded">
                      {item.tag}
                    </span>
                    <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal size={16} /></button>
                  </div>
                  <h4 className="font-medium text-[var(--text-primary)] mb-1">{item.client}</h4>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-semibold text-[var(--sage)]">{item.value}</span>
                    <span className="text-xs text-[var(--text-muted)]">{item.date}</span>
                  </div>
                </div>
              ))}
              
              {column.items.length === 0 && (
                <div className="h-24 border-2 border-dashed border-[var(--border)] rounded-lg flex items-center justify-center text-sm text-[var(--text-muted)]">
                  Drop leads here
                </div>
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
