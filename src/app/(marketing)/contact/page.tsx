"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to homepage with booking modal open
    router.replace("/#book");
  }, [router]);

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)] pt-32 pb-20 min-h-screen flex items-center justify-center">
      <p className="text-[var(--text-muted)]">Redirecting to booking...</p>
    </main>
  );
}