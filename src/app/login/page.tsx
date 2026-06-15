"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement proper authentication (e.g., NextAuth.js, Supabase Auth)
    // Currently disabled — portal access requires authentication setup
    alert("Portal access coming soon. Please contact compilecreative@gmail.com for access.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-base">
      <Link href="/" className="absolute top-8 left-8 font-display font-bold text-xl tracking-tight clay-card px-6 py-3 rounded-full hover:scale-105 transition-transform">
        Compile Creative
      </Link>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="clay-card p-10 md:p-14 w-full max-w-md"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-display font-bold mb-2">Welcome Back</h1>
          <p className="text-text-secondary">Enter your credentials to access the portal.</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-bold text-text-secondary">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="clay-input w-full"
              placeholder="compilecreative@gmail.com"
              required
            />
          </div>
          
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-bold text-text-secondary">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="clay-input w-full"
              placeholder="••••••••"
              required
            />
          </div>
          
          <button type="submit" className="clay-btn bg-accent text-white w-full py-4 mt-4 hover:scale-[1.02]">
            Sign In
          </button>
        </form>
        
        <div className="mt-8 text-center text-sm text-text-secondary">
          <p>Don&apos;t have an account? <Link href="mailto:compilecreative@gmail.com" className="text-accent font-bold hover:underline">Contact us</Link></p>
        </div>
      </motion.div>
    </div>
  );
}