"use client";

import { recentDeliverables } from "@/data/mock/portalData";
import { UploadCloud, FileText, CheckCircle2, MessageSquare, Plus, Search, GitPullRequest } from "lucide-react";

export default function DeliverableSubmissionSystem() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header Actions */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-display font-semibold text-[var(--text-primary)]">Deliverables</h1>
          <p className="text-[var(--text-muted)] mt-1">Submit, review, and track project assets.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input type="text" placeholder="Search files..." className="pl-9 pr-4 py-2 border border-[var(--border)] rounded-md text-sm focus:border-[var(--sage)] outline-none w-64" />
          </div>
          <button className="gold-btn py-2 px-4 text-sm flex items-center gap-2">
            <UploadCloud size={16} /> Submit Deliverable
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Col - Submission Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-[var(--border)] shadow-sm overflow-hidden">
            <div className="p-4 border-b border-[var(--border)] bg-[var(--bg-base)] flex gap-4">
              <button className="text-sm font-semibold text-[var(--sage)] border-b-2 border-[var(--sage)] pb-1">Needs Action</button>
              <button className="text-sm font-semibold text-[var(--text-muted)] pb-1">In Review</button>
              <button className="text-sm font-semibold text-[var(--text-muted)] pb-1">Approved</button>
            </div>
            
            <div className="divide-y divide-[var(--border)]">
              
              {/* Submission Item */}
              <div className="p-6 hover:bg-[var(--bg-base)]/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)]">Aura Botanica - Brand Guidelines v1.pdf</h3>
                      <p className="text-sm text-[var(--text-muted)] mt-0.5">Submitted by Alex Mercer • 2 hours ago</p>
                    </div>
                  </div>
                  <span className="bg-yellow-50 text-yellow-700 border border-yellow-200 text-xs font-semibold px-2 py-1 rounded-md">
                    Founder Review
                  </span>
                </div>
                
                <div className="ml-14 pl-4 border-l-2 border-[var(--border)] space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[var(--sage)] text-white text-[10px] font-bold flex items-center justify-center shrink-0">FC</div>
                    <div className="bg-white border border-[var(--border)] rounded-lg p-3 text-sm text-[var(--text-primary)] shadow-sm">
                      <p className="font-semibold mb-1">Founder Note</p>
                      <p>The typography section looks great, but we need to refine the secondary color palette. It feels a bit too vibrant compared to the moodboard.</p>
                    </div>
                  </div>
                  <button className="text-sm font-medium text-[var(--sage)] hover:underline flex items-center gap-1">
                    <GitPullRequest size={14} /> Submit Revision
                  </button>
                </div>
              </div>

              {/* Submission Item */}
              <div className="p-6 hover:bg-[var(--bg-base)]/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center shrink-0">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)]">Nexus OS - Landing Page Copy.docx</h3>
                      <p className="text-sm text-[var(--text-muted)] mt-0.5">Submitted by Taylor Swift • Yesterday</p>
                    </div>
                  </div>
                  <span className="bg-green-50 text-green-700 border border-green-200 text-xs font-semibold px-2 py-1 rounded-md">
                    Client Review
                  </span>
                </div>
                
                <div className="ml-14 flex items-center gap-2 text-sm text-[var(--text-muted)]">
                  <CheckCircle2 size={16} className="text-green-500" />
                  Internal reviews passed. Awaiting client sign-off.
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Col - Workflow Status */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-[var(--border)] shadow-sm p-6">
            <h3 className="font-semibold text-[var(--text-primary)] mb-6">Approval Pipeline</h3>
            
            <div className="relative pl-6 space-y-8">
              <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-[var(--border)]"></div>
              
              <div className="relative">
                <div className="absolute -left-[1.6rem] top-1 w-3 h-3 rounded-full bg-[var(--sage)] ring-4 ring-white"></div>
                <h4 className="font-semibold text-sm text-[var(--text-primary)]">1. Draft Submitted</h4>
                <p className="text-xs text-[var(--text-muted)] mt-1">Creator uploads initial version.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.6rem] top-1 w-3 h-3 rounded-full bg-[var(--sage)] ring-4 ring-white"></div>
                <h4 className="font-semibold text-sm text-[var(--text-primary)]">2. Internal Review</h4>
                <p className="text-xs text-[var(--text-muted)] mt-1">Peer review for quality & scope.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.6rem] top-1 w-3 h-3 rounded-full bg-yellow-500 ring-4 ring-white shadow-sm"></div>
                <h4 className="font-semibold text-sm text-[var(--text-primary)]">3. Founder Review</h4>
                <p className="text-xs text-[var(--text-muted)] mt-1">Strategic alignment check.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.6rem] top-1 w-3 h-3 rounded-full bg-[var(--border)] ring-4 ring-white"></div>
                <h4 className="font-semibold text-sm text-[var(--text-muted)]">4. Client Review</h4>
                <p className="text-xs text-[var(--text-muted)] mt-1">External presentation.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[1.6rem] top-1 w-3 h-3 rounded-full bg-[var(--border)] ring-4 ring-white"></div>
                <h4 className="font-semibold text-sm text-[var(--text-muted)]">5. Approved & Delivered</h4>
                <p className="text-xs text-[var(--text-muted)] mt-1">Final assets handed over.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
