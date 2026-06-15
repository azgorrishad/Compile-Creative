"use client";

import { founderMetrics } from "@/data/mock/portalData";
import { DollarSign, ArrowUpRight, ArrowDownRight, CreditCard, PieChart } from "lucide-react";

export default function FinancialCommandCenter() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header Actions */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-display font-semibold text-[var(--text-primary)]">Financial Command Center</h1>
          <p className="text-[var(--text-muted)] mt-1">Real-time profitability, cash flow, and forecasting.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 border border-[var(--border)] px-4 py-2 rounded-md text-sm font-medium hover:bg-white bg-white/50 shadow-sm">
            Export Report
          </button>
          <button className="gold-btn py-2 px-4 text-sm flex items-center gap-2">
            <DollarSign size={16} /> Create Invoice
          </button>
        </div>
      </div>

      {/* Main KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[var(--bg-forest)] text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <h3 className="text-sm font-medium text-white/70 mb-2">Total Monthly Revenue</h3>
          <div className="flex items-end justify-between">
            <span className="text-4xl font-display font-semibold">{founderMetrics.monthlyRevenue}</span>
            <span className="flex items-center gap-1 text-sm font-medium text-green-400">
              <ArrowUpRight size={16} /> {founderMetrics.monthlyGrowth}
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[var(--border)] shadow-sm">
          <h3 className="text-sm font-medium text-[var(--text-muted)] mb-2">Net Profit Margin</h3>
          <div className="flex items-end justify-between">
            <span className="text-4xl font-display font-semibold text-[var(--text-primary)]">{founderMetrics.profitMargin}</span>
            <span className="flex items-center gap-1 text-sm font-medium text-green-600">
              <ArrowUpRight size={16} /> +2.4%
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[var(--border)] shadow-sm">
          <h3 className="text-sm font-medium text-[var(--text-muted)] mb-2">Outstanding Invoices</h3>
          <div className="flex items-end justify-between">
            <span className="text-4xl font-display font-semibold text-[var(--text-primary)]">{founderMetrics.outstandingRevenue}</span>
            <span className="flex items-center gap-1 text-sm font-medium text-red-600">
              <ArrowDownRight size={16} /> Needs Action
            </span>
          </div>
        </div>
      </div>

      {/* Charts / Data Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Cash Flow Mock Chart */}
        <div className="bg-white rounded-xl border border-[var(--border)] shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-[var(--text-primary)]">Cash Flow Forecast</h3>
            <select className="text-sm border border-[var(--border)] rounded px-2 py-1 outline-none text-[var(--text-muted)]">
              <option>This Quarter</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between gap-2 border-b border-[var(--border)] pb-2 relative">
            {/* Mock bars */}
            <div className="absolute top-1/2 left-0 w-full border-t border-dashed border-gray-200"></div>
            {[40, 60, 45, 80, 65, 90, 75, 100].map((h, i) => (
              <div key={i} className="w-full flex justify-center group relative z-10">
                <div 
                  className="w-full max-w-[3rem] bg-[var(--sage)]/20 hover:bg-[var(--sage)] transition-colors rounded-t-sm" 
                  style={{ height: `${h}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-[var(--text-muted)] font-medium">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
          </div>
        </div>

        {/* Revenue Breakdown */}
        <div className="bg-white rounded-xl border border-[var(--border)] shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-[var(--text-primary)]">Revenue by Service</h3>
            <PieChart size={20} className="text-[var(--text-muted)]" />
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-[var(--text-primary)]">Brand Identity & Strategy</span>
                <span className="font-semibold">45%</span>
              </div>
              <div className="w-full h-2 bg-[var(--bg-base)] rounded-full overflow-hidden">
                <div className="h-full bg-[var(--sage)] w-[45%]"></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-[var(--text-primary)]">Product Design (UX/UI)</span>
                <span className="font-semibold">30%</span>
              </div>
              <div className="w-full h-2 bg-[var(--bg-base)] rounded-full overflow-hidden">
                <div className="h-full bg-[#829E8D] w-[30%]"></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-[var(--text-primary)]">Agency OS Automation</span>
                <span className="font-semibold">25%</span>
              </div>
              <div className="w-full h-2 bg-[var(--bg-base)] rounded-full overflow-hidden">
                <div className="h-full bg-[var(--gold)] w-[25%]"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
