"use client";

import { Search, Book, FileText, Video, Folder, Plus } from "lucide-react";

export default function KnowledgeHub() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header Actions */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-display font-semibold text-[var(--text-primary)]">Knowledge Hub</h1>
          <p className="text-[var(--text-muted)] mt-1">SOPs, Brand Guidelines, and Internal Training.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input type="text" placeholder="Search the wiki..." className="pl-9 pr-4 py-2 border border-[var(--border)] rounded-md text-sm focus:border-[var(--sage)] outline-none w-80 shadow-sm" />
          </div>
          <button className="gold-btn py-2 px-4 text-sm flex items-center gap-2">
            <Plus size={16} /> New Document
          </button>
        </div>
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DirectoryCard title="Agency SOPs" count="24 Docs" icon={<Book />} color="text-blue-600" bg="bg-blue-50" />
        <DirectoryCard title="Brand Assets" count="12 Files" icon={<Folder />} color="text-purple-600" bg="bg-purple-50" />
        <DirectoryCard title="Client Templates" count="8 Assets" icon={<FileText />} color="text-orange-600" bg="bg-orange-50" />
        <DirectoryCard title="Training Videos" count="15 Videos" icon={<Video />} color="text-green-600" bg="bg-green-50" />
      </div>

      {/* Recent Documents Table */}
      <div className="bg-white rounded-xl border border-[var(--border)] shadow-sm overflow-hidden">
        <div className="p-5 border-b border-[var(--border)] bg-[var(--bg-base)]">
          <h2 className="font-semibold text-[var(--text-primary)]">Recently Updated</h2>
        </div>
        <table className="w-full text-left text-sm">
          <thead className="text-[var(--text-muted)] font-medium border-b border-[var(--border)] bg-white">
            <tr>
              <th className="px-6 py-4">Document Title</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Last Edited</th>
              <th className="px-6 py-4 text-right">Author</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)] bg-white">
            <DocRow name="Client Onboarding Checklist v2.1" cat="Agency SOPs" date="2 hours ago" author="Founder" />
            <DocRow name="Compile Creative - Master Logo Pack" cat="Brand Assets" date="Yesterday" author="Design Team" />
            <DocRow name="Discovery Call Framework" cat="Agency SOPs" date="Oct 12, 2024" author="Sales" />
            <DocRow name="Notion Client Portal Template" cat="Client Templates" date="Sep 28, 2024" author="Operations" />
            <DocRow name="Figma Auto-Layout Best Practices" cat="Training Videos" date="Sep 15, 2024" author="Design Team" />
          </tbody>
        </table>
      </div>

    </div>
  );
}

function DirectoryCard({ title, count, icon, color, bg }: any) {
  return (
    <div className="bg-white p-6 rounded-xl border border-[var(--border)] shadow-sm hover:border-[var(--sage)] transition-colors cursor-pointer group">
      <div className={`w-12 h-12 rounded-lg ${bg} ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="font-semibold text-[var(--text-primary)] mb-1">{title}</h3>
      <p className="text-sm text-[var(--text-muted)]">{count}</p>
    </div>
  );
}

function DocRow({ name, cat, date, author }: any) {
  return (
    <tr className="hover:bg-[var(--bg-base)] transition-colors cursor-pointer group">
      <td className="px-6 py-4 font-medium text-[var(--text-primary)] group-hover:text-[var(--sage)] transition-colors flex items-center gap-3">
        <FileText size={16} className="text-[var(--text-muted)]" />
        {name}
      </td>
      <td className="px-6 py-4">
        <span className="bg-[var(--bg-base)] border border-[var(--border)] text-[var(--text-muted)] text-xs font-medium px-2.5 py-1 rounded-md">
          {cat}
        </span>
      </td>
      <td className="px-6 py-4 text-[var(--text-muted)]">{date}</td>
      <td className="px-6 py-4 text-right text-[var(--text-muted)]">{author}</td>
    </tr>
  );
}
