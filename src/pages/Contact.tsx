import { useState } from "react";
import { LandingLayout, SectionLabel } from "@/components/layout/LandingLayout";
import { SubHero } from "@/components/layout/SubHero";

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xdaykekg", {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <LandingLayout>
      <SubHero
        label="Connect With Us"
        title="Get in Touch with NEVARA"
        subtitle="We are an early-stage student team open to collaboration, mentorship, and opportunities."
      />

      <section className="bg-white dark:bg-[#040D0B] py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Contact Info */}
            <div className="flex flex-col">
              <SectionLabel>CONTACT</SectionLabel>
              <h2 className="font-syne text-3xl sm:text-4xl font-bold mb-8 leading-tight">
                Have something in mind?<br />Let’s build it together.
              </h2>

              <div className="space-y-12">
                <div>
                  <h3 className="text-sm font-bold text-teal-500 uppercase tracking-widest mb-4">Email</h3>
                  <a
                    href="mailto:contact.nevara@gmail.com"
                    className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white hover:text-teal-400 transition-colors"
                  >
                    contact.nevara@gmail.com
                  </a>
                  <p className="mt-2 text-gray-500 font-medium italic">Response time: 24–48 hours</p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-teal-500 uppercase tracking-widest mb-4">Connect</h3>
                  <div className="flex flex-col gap-4">
                    <a
                      href="https://github.com/Tahir-Tamam-05/nevara-blue-carbon-ledger"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-lg font-bold text-gray-900 dark:text-white hover:text-teal-400 transition-colors"
                    >
                      <span className="text-teal-500">◈</span> GitHub Repository
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 dark:bg-[#060F0C] rounded-3xl border border-gray-100 dark:border-teal-900/30 p-8 sm:p-12 shadow-sm">
              <SectionLabel>Inquiry Form</SectionLabel>
              
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center py-12 text-center transition-all animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent Successfully</h3>
                  <p className="text-gray-500 dark:text-gray-400">We’ll get back to you soon.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-sm font-bold text-teal-500 uppercase tracking-widest hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form 
                  action="https://formspree.io/f/xdaykekg" 
                  method="POST" 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <input type="hidden" name="_subject" value="New NEVARA Inquiry" />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Jane Doe"
                        className="bg-white dark:bg-[#040D0B] border border-gray-200 dark:border-white/5 rounded-xl px-4 py-3 text-base text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all shadow-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="jane@example.com"
                        className="bg-white dark:bg-[#040D0B] border border-gray-200 dark:border-white/5 rounded-xl px-4 py-3 text-base text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us about your project or interest..."
                      className="bg-white dark:bg-[#040D0B] border border-gray-200 dark:border-white/5 rounded-xl px-4 py-3 text-base text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all shadow-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-[#0F766E] text-white text-base font-bold px-8 py-4 rounded-xl border border-teal-500/40 hover:bg-[#14b8a6] hover:shadow-[0_0_20px_rgba(20,184,166,0.35)] transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>

                  {status === 'error' && (
                    <p className="text-sm text-red-500 text-center font-medium">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <p className="text-[11px] text-gray-500 text-center font-medium">
                    By submitting, you agree to our concept privacy standards.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <section className="bg-white dark:bg-[#040D0B] pb-24 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center py-12 border-t border-gray-100 dark:border-teal-900/10">
            <p className="text-[10px] font-bold text-gray-400 dark:text-gray-600 uppercase tracking-[0.4em]">
              NEVARA ARCHITECTURE • 2026
            </p>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
}
