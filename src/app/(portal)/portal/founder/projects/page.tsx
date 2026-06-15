"use client";

import { activeProjects } from "@/data/mock/portalData";
import { Plus, Search, Filter, Briefcase, AlertCircle, CheckCircle2 } from "lucide-react";

export default function ProjectControlCenter() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header Actions */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-display font-semibold text-[var(--text-primary)]">Project Control Center</h1>
          <p className="text-[var(--text-muted)] mt-1">Manage all active client engagements and deliverables.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input type="text" placeholder="Search projects..." className="pl-9 pr-4 py-2 border border-[var(--border)] rounded-md text-sm focus:border-[var(--sage)] outline-none w-64" />
          </div>
          <button className="flex items-center gap-2 border border-[var(--border)] px-4 py-2 rounded-md text-sm font-medium hover:bg-white bg-white/50 shadow-sm">
            <Filter size={16} /> Filter
          </button>
          <button className="gold-btn py-2 px-4 text-sm flex items-center gap-2">
            <Plus size={16} /> New Project
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-[var(--border)] shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm font-medium text-[var(--text-muted)]">Active Projects</h3>
            <Briefcase size={16} className="text-[var(--sage)]" />
          </div>
          <span className="text-3xl font-display font-semibold">{activeProjects.length}</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-[var(--border)] shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm font-medium text-[var(--text-muted)]">On Track</h3>
            <CheckCircle2 size={16} className="text-green-500" />
          </div>
          <span className="text-3xl font-display font-semibold text-green-600">
            {activeProjects.filter(p => p.health === 'green').length}
          </span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-[var(--border)] shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm font-medium text-[var(--text-muted)]">At Risk</h3>
            <AlertCircle size={16} className="text-red-500" />
          </div>
          <span className="text-3xl font-display font-semibold text-red-600">
            {activeProjects.filter(p => p.health === 'red').length}
          </span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-[var(--border)] shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm font-medium text-[var(--text-muted)]">Avg Margin</h3>
          </div>
          <span className="text-3xl font-display font-semibold">65.5%</span>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-xl border border-[var(--border)] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-base)] text-[var(--text-muted)] font-medium border-b border-[var(--border)]">
              <tr>
                <th className="px-6 py-4">Project Name</th>
                <th className="px-6 py-4">Client Contact</th>
                <th className="px-6 py-4">Health Status</th>
                <th className="px-6 py-4">Team Size</th>
                <th className="px-6 py-4">Profit Margin</th>
                <th className="px-6 py-4 text-right">Deadline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {activeProjects.map((project) => (
                <tr key={project.id} className="hover:bg-[var(--bg-base)] transition-colors cursor-pointer group">
                  <td className="px-6 py-4 font-medium text-[var(--text-primary)] group-hover:text-[var(--sage)] transition-colors">
                    {project.name}
                  </td>
                  <td className="px-6 py-4 text-[var(--text-muted)]">{project.client}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold ${
                      project.health === 'green' ? 'bg-green-50 text-green-700 border border-green-200' :
                      project.health === 'yellow' ? 'bg-yellow-50 text-yellow-700 border border-yellow-200' :
                      'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        project.health === 'green' ? 'bg-green-500' :
                        project.health === 'yellow' ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}></span>
                      {project.health === 'green' ? 'On Track' : project.health === 'yellow' ? 'At Risk' : 'Critical'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex -space-x-2">
                      {[...Array(project.team)].map((_, i) => (
                        <div key={i} className="w-7 h-7 rounded-full bg-[var(--sage-dark)] border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">
                          {(i + 1).toString()}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium">{project.margin}</td>
                  <td className="px-6 py-4 text-right font-medium text-[var(--text-muted)]">{project.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
