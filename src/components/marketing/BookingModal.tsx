"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle } from "lucide-react";

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    challenge: "",
  });

  // Listen for hash changes to open/close modal
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#book") {
        setIsOpen(true);
        // Prevent scrolling on body
        document.body.style.overflow = "hidden";
      } else {
        setIsOpen(false);
        document.body.style.overflow = "unset";
        // Reset state after close animation
        setTimeout(() => setStep(1), 300);
      }
    };

    // Check initial hash
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      document.body.style.overflow = "unset";
    };
  }, []);

  const closeModal = () => {
    window.location.hash = "";
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Formspree submission
      // Replace "YOUR_FORMSPREE_ID" with your actual Formspree endpoint ID
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStep(2);
      } else {
        console.error("Form submission failed");
        // Proceed to step 2 anyway for better UX, or show error
        setStep(2);
      }
    } catch (error) {
      console.error(error);
      setStep(2);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-[var(--bg-forest)]/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[var(--bg-surface)] border border-[var(--border)] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors rounded-full hover:bg-[var(--border-light)]"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="px-8 pt-8 pb-6 border-b border-[var(--border-light)]">
              <span className="chapter-label block mb-2">Strategy Audit</span>
              <h2 className="text-3xl md:text-4xl font-heading text-[var(--text-primary)]">
                {step === 1 ? "Let's align on your brand." : "Pick your time."}
              </h2>
            </div>

            {/* Scrollable Content */}
            <div className="p-8 overflow-y-auto">
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.form
                    key="step-1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-[var(--text-primary)]">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-[var(--bg-base)] border border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--sage)] focus:ring-1 focus:ring-[var(--sage)] transition-colors"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-[var(--text-primary)]">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-[var(--bg-base)] border border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--sage)] focus:ring-1 focus:ring-[var(--sage)] transition-colors"
                          placeholder="jane@company.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-[var(--text-primary)]">
                        Brand / Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[var(--bg-base)] border border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--sage)] focus:ring-1 focus:ring-[var(--sage)] transition-colors"
                        placeholder="Acme Corp"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-[var(--text-primary)]">
                        What is the primary challenge you're looking to solve?
                      </label>
                      <textarea
                        name="challenge"
                        required
                        value={formData.challenge}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-[var(--bg-base)] border border-[var(--border)] rounded-xl focus:outline-none focus:border-[var(--sage)] focus:ring-1 focus:ring-[var(--sage)] transition-colors resize-none"
                        placeholder="We have a great product but struggle to communicate our value..."
                      />
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <p className="text-xs text-[var(--text-muted)] max-w-[200px]">
                        This helps us prepare properly for our conversation.
                      </p>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="gold-btn"
                      >
                        {isSubmitting ? "Processing..." : "Continue to Calendar"}
                        {!isSubmitting && <ArrowRight size={16} />}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col items-center justify-center min-h-[400px]"
                  >
                    {/* Cal.com Placeholder / Instruction */}
                    <div className="text-center space-y-4 max-w-md mx-auto">
                      <div className="w-16 h-16 bg-[var(--sage)]/10 rounded-full flex items-center justify-center mx-auto text-[var(--sage)] mb-6">
                        <CheckCircle size={32} />
                      </div>
                      <h3 className="text-2xl font-heading text-[var(--text-primary)]">
                        Details received.
                      </h3>
                      <p className="text-[var(--text-muted)] pb-6">
                        Please insert your Cal.com embed code here. The user's
                        details have been submitted to Formspree successfully!
                      </p>

                      {/* EXAMPLE CAL.COM IFRAME
                      <iframe
                        src={`https://cal.com/YOUR_CAL_LINK/30min?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}`}
                        style={{ width: '100%', height: '100%', border: 'none' }}
                      />
                      */}
                      
                      <button
                        onClick={closeModal}
                        className="outline-btn mt-4 w-full"
                      >
                        Close
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
