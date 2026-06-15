"use client";

import { Zap, Cpu, Activity, Clock, Server, ArrowUpRight } from "lucide-react";

export default function AutomationCenter() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header Actions */}
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-widest bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/30">
              Future Jarvis Integration
            </span>
          </div>
          <h1 className="text-3xl font-display font-semibold text-[var(--text-primary)]">Automation Center</h1>
          <p className="text-[var(--text-muted)] mt-1">Manage AI agents, workflows, and system integrations.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="gold-btn py-2 px-4 text-sm flex items-center gap-2">
            <Plus size={16} /> New Workflow
          </button>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={<Cpu />} title="Automations Running" value="24" trend="100% Uptime" />
        <StatCard icon={<Activity />} title="Leads Generated (Auto)" value="142" trend="+12% this week" trendUp />
        <StatCard icon={<Server />} title="Content Generated" value="48 pieces" trend="Scheduled" />
        <StatCard icon={<Clock />} title="Time Saved (Est.)" value="184 hrs" trend="Last 30 days" trendUp />
      </div>

      {/* Active Workflows Table */}
      <div className="bg-white rounded-xl border border-[var(--border)] shadow-sm overflow-hidden">
        <div className="p-6 border-b border-[var(--border)] flex justify-between items-center bg-[var(--bg-base)]">
          <h2 className="font-semibold text-[var(--text-primary)]">Active Workflows & Agents</h2>
          <span className="text-sm font-medium text-[var(--sage)] cursor-pointer hover:underline">View Logs</span>
        </div>
        <table className="w-full text-left text-sm">
          <thead className="text-[var(--text-muted)] font-medium border-b border-[var(--border)] bg-white">
            <tr>
              <th className="px-6 py-4">Agent / Workflow</th>
              <th className="px-6 py-4">Trigger</th>
              <th className="px-6 py-4">Last Run</th>
              <th className="px-6 py-4">Success Rate</th>
              <th className="px-6 py-4 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)] bg-white">
            <WorkflowRow name="Inbound Lead Qualification" trigger="Typeform Submission" lastRun="2 mins ago" rate="99.8%" status="Active" />
            <WorkflowRow name="Client Onboarding Sync" trigger="Stripe Payment" lastRun="1 hour ago" rate="100%" status="Active" />
            <WorkflowRow name="Social Content Drafter" trigger="Weekly Schedule" lastRun="Yesterday" rate="94.5%" status="Active" />
            <WorkflowRow name="Competitor Intel Crawler" trigger="Daily Schedule" lastRun="Today 6:00 AM" rate="82.0%" status="Warning" />
          </tbody>
        </table>
      </div>

      {/* Future AI Placeholder */}
      <div className="relative mt-12 bg-[#1D2521] rounded-2xl p-12 overflow-hidden border border-[var(--sage)]/30 text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--gold)] via-transparent to-transparent blur-3xl"></div>
        <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-[var(--gold)] shadow-inner mb-6">
            <Zap size={24} />
          </div>
          <h2 className="text-2xl font-display font-semibold text-white mb-4">Jarvis AI Kernel (Locked)</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            The advanced Jarvis integration module is currently in development. Soon, you will be able to orchestrate autonomous agents to run the entire agency using natural language commands.
          </p>
          <button className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-colors font-medium backdrop-blur-sm cursor-not-allowed">
            Deploy Kernel (Coming Q4)
          </button>
        </div>
      </div>

    </div>
  );
}

function StatCard({ icon, title, value, trend, trendUp }: any) {
  return (
    <div className="bg-white p-6 rounded-xl border border-[var(--border)] shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className="text-[var(--text-muted)]">{icon}</div>
      </div>
      <h3 className="text-sm font-medium text-[var(--text-muted)] mb-1">{title}</h3>
      <div className="flex items-end justify-between">
        <span className="text-3xl font-display font-semibold text-[var(--text-primary)]">{value}</span>
      </div>
      <div className={`text-xs font-semibold mt-4 ${trendUp ? 'text-green-600' : 'text-[var(--text-muted)]'}`}>
        {trend}
      </div>
    </div>
  );
}

function WorkflowRow({ name, trigger, lastRun, rate, status }: any) {
  return (
    <tr className="hover:bg-[var(--bg-base)] transition-colors group">
      <td className="px-6 py-4 font-medium text-[var(--text-primary)]">{name}</td>
      <td className="px-6 py-4 text-[var(--text-muted)]">{trigger}</td>
      <td className="px-6 py-4 text-[var(--text-muted)]">{lastRun}</td>
      <td className="px-6 py-4 font-medium text-[var(--text-primary)]">{rate}</td>
      <td className="px-6 py-4 text-right">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold ${
          status === 'Active' ? 'bg-green-50 text-green-700 border border-green-200' :
          'bg-yellow-50 text-yellow-700 border border-yellow-200'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
          {status}
        </span>
      </td>
    </tr>
  );
}

import { Plus } from "lucide-react";
