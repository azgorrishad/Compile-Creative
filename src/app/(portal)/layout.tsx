import Sidebar from "@/components/portal/Sidebar";
import TopBar from "@/components/portal/TopBar";

export const metadata = {
  title: "Portal OS — Compile Creative",
  description: "Internal Operating System",
};

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--bg-surface)] flex text-[var(--text-primary)] selection:bg-[var(--sage)] selection:text-white">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col w-full min-h-screen relative ml-64 bg-[#FAFAFA]">
        <TopBar />
        
        <main className="flex-1 p-8 lg:p-10 xl:p-12 relative z-10 mx-auto w-full max-w-7xl">
          {children}
        </main>
      </div>
    </div>
  );
}
