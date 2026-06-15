"use client";

import { founderMetrics, agencyHealth, activeProjects } from "@/data/mock/portalData";
import { ArrowUpRight, TrendingUp, AlertCircle, CheckCircle2, Clock } from "lucide-react";

export default function FounderCommandCenter() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-display font-semibold text-[var(--text-primary)]">Command Center</h1>
          <p className="text-[var(--text-muted)] mt-1">Real-time overview of agency operations and financial health.</p>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-muted)]">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Live Sync Active
        </div>
      </div>

      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Monthly Revenue" value={founderMetrics.monthlyRevenue} trend={founderMetrics.monthlyGrowth} trendUp />
        <MetricCard title="Outstanding Revenue" value={founderMetrics.outstandingRevenue} />
        <MetricCard title="Pipeline Value" value={founderMetrics.pipelineValue} />
        <MetricCard title="Profit Margin" value={founderMetrics.profitMargin} trend="+2%" trendUp />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Real-Time Agency Health */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-lg font-semibold text-[var(--text-primary)] border-b border-[var(--border)] pb-2">Agency Health Monitor</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {agencyHealth.map((health, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-[var(--border)] shadow-sm flex items-start gap-4">
                <div className="mt-1">
                  {health.status === 'green' && <CheckCircle2 className="text-green-500" size={20} />}
                  {health.status === 'yellow' && <Clock className="text-yellow-500" size={20} />}
                  {health.status === 'red' && <AlertCircle className="text-red-500" size={20} />}
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] text-sm">{health.metric}</h3>
                  <p className="text-[var(--text-muted)] text-sm mt-0.5">{health.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats Column */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-[var(--text-primary)] border-b border-[var(--border)] pb-2">Operational KPIs</h2>
          <div className="bg-white rounded-xl border border-[var(--border)] shadow-sm overflow-hidden">
            <KPIRow label="Active Projects" value={founderMetrics.activeProjects.toString()} />
            <KPIRow label="Projects At Risk" value={founderMetrics.projectsAtRisk.toString()} alert />
            <KPIRow label="Active Clients" value={founderMetrics.activeClients.toString()} />
            <KPIRow label="Client Retention" value={founderMetrics.clientRetention} />
            <KPIRow label="Lead Conversion" value={founderMetrics.leadConversion} />
            <KPIRow label="Team Utilization" value={founderMetrics.teamUtilization} />
          </div>
        </div>
      </div>

      {/* Active Projects Snapshot */}
      <div className="space-y-6 pt-4">
        <h2 className="text-lg font-semibold text-[var(--text-primary)] border-b border-[var(--border)] pb-2 flex justify-between items-center">
          Project Control Center
          <button className="text-sm text-[var(--sage)] font-medium hover:underline">View All Projects</button>
        </h2>
        <div className="bg-white rounded-xl border border-[var(--border)] shadow-sm overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-[var(--bg-base)] text-[var(--text-muted)] font-medium border-b border-[var(--border)]">
              <tr>
                <th className="px-6 py-4">Project</th>
                <th className="px-6 py-4">Client</th>
                <th className="px-6 py-4">Health</th>
                <th className="px-6 py-4">Margin</th>
                <th className="px-6 py-4 text-right">Deadline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {activeProjects.map((project) => (
                <tr key={project.id} className="hover:bg-[var(--bg-base)] transition-colors">
                  <td className="px-6 py-4 font-medium text-[var(--text-primary)]">{project.name}</td>
                  <td className="px-6 py-4 text-[var(--text-muted)]">{project.client}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium ${
                      project.health === 'green' ? 'bg-green-50 text-green-700' :
                      project.health === 'yellow' ? 'bg-yellow-50 text-yellow-700' :
                      'bg-red-50 text-red-700'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        project.health === 'green' ? 'bg-green-500' :
                        project.health === 'yellow' ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}></span>
                      {project.health === 'green' ? 'On Track' : project.health === 'yellow' ? 'At Risk' : 'Critical'}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium">{project.margin}</td>
                  <td className="px-6 py-4 text-right text-[var(--text-muted)]">{project.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

function MetricCard({ title, value, trend, trendUp }: { title: string, value: string, trend?: string, trendUp?: boolean }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-[var(--border)] shadow-sm flex flex-col justify-between">
      <h3 className="text-sm font-medium text-[var(--text-muted)] mb-2">{title}</h3>
      <div className="flex items-end justify-between">
        <span className="text-3xl font-display font-semibold text-[var(--text-primary)]">{value}</span>
        {trend && (
          <span className={`flex items-center gap-1 text-sm font-medium ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
            {trendUp ? <TrendingUp size={16} /> : <TrendingUp size={16} className="rotate-180" />}
            {trend}
          </span>
        )}
      </div>
    </div>
  );
}

function KPIRow({ label, value, alert }: { label: string, value: string, alert?: boolean }) {
  return (
    <div className="flex justify-between items-center px-6 py-4 border-b border-[var(--border)] last:border-0 hover:bg-[var(--bg-base)] transition-colors">
      <span className="text-sm font-medium text-[var(--text-muted)]">{label}</span>
      <span className={`text-sm font-semibold ${alert ? 'text-red-600' : 'text-[var(--text-primary)]'}`}>{value}</span>
    </div>
  );
}