import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-forest)] text-[var(--bg-base)] pt-20 pb-10 border-t border-[var(--bg-base)]/10">
      <div className="section-container">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-bold tracking-tight mb-6 text-[var(--gold)]">
              COMPILE CREATIVE
            </h3>
            <p className="text-[var(--bg-base)]/60 max-w-sm text-sm leading-relaxed">
              We bridge strategy, design, systems, and growth to build brands that command a premium and scale efficiently.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-widest text-[var(--bg-base)]/40 mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium text-[var(--bg-base)]/80">
              <li><Link href="#work" className="hover:text-[var(--gold)] transition-colors">Portfolio</Link></li>
              <li><Link href="#method" className="hover:text-[var(--gold)] transition-colors">The Compile Method</Link></li>
              <li><Link href="#thinking" className="hover:text-[var(--gold)] transition-colors">Inside The Thinking</Link></li>
              <li><Link href="#strategist" className="hover:text-[var(--gold)] transition-colors">Meet The Strategist</Link></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-widest text-[var(--bg-base)]/40 mb-6">Connect</h4>
            <ul className="space-y-4 text-sm font-medium text-[var(--bg-base)]/80">
              <li>
                <Link href="mailto:hello@compilecreative.com" className="hover:text-[var(--gold)] transition-colors flex items-center gap-1 group">
                  hello@compilecreative.com
                  <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com/in/salehazgorrishad" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold)] transition-colors flex items-center gap-1 group">
                  LinkedIn
                  <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/compilecreative" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold)] transition-colors flex items-center gap-1 group">
                  Twitter / X
                  <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--bg-base)]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--bg-base)]/40 font-medium">
          <p>© {new Date().getFullYear()} Compile Creative. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[var(--bg-base)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--bg-base)] transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}