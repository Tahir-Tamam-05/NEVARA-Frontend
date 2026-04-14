import { LandingLayout, Section, SectionLabel } from "@/components/layout/LandingLayout";
import { SubHero } from "@/components/layout/SubHero";
import { Link } from "react-router-dom";

export default function WhyNevara() {
  return (
    <LandingLayout>
      <SubHero 
        label="The Problem We Solve"
        title="Closing the Integrity Gap."
        subtitle="Blue carbon represents the world's most powerful natural climate solution — and the least accessible. NEVARA exists to close the 'trust deficit' that keeps it underutilised."
      />

      {/* ── THE MARKET GAP ───────────────────────────────────────────── */}
      <section className="bg-gray-50 dark:bg-[#060F0C] py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Why Blue Carbon Is Underutilised</SectionLabel>
          <h2 className="font-syne mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            The World's Best Climate Asset<br />Has a Measurement Problem.
          </h2>
          <p className="mb-14 max-w-3xl text-lg sm:text-xl lg:text-[22px] leading-relaxed text-gray-500 dark:text-gray-400 font-medium">
            Coastal ecosystems sequester carbon at rates up to 10 times that of tropical rainforests. Yet blue carbon represents a tiny fraction of global carbon market volume. The reason is not a lack of potential — it is a lack of credible, accessible measurement infrastructure.
          </p>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: "01",
                tag: "Technical Barrier",
                title: "Too Complex to Measure",
                body: "Unlike terrestrial forestry, blue carbon stocks exist in tidal wetlands where traditional methods are expensive, dangerous, and infrequent. Most project developers cannot afford the scientific rigour required for institutional credibility — so they simply do not enter the market.",
                border: "border-red-900/30",
                grad: "from-red-900/10"
              },
              {
                num: "02",
                tag: "Regulatory Barrier",
                title: "No India-First Framework",
                body: "Global carbon standards were designed for international markets and do not natively map to India's regulatory environment. There is no platform today that integrates these frameworks into a single Indian contributor workflow. That is the gap NEVARA is working to fill.",
                border: "border-amber-900/30",
                grad: "from-amber-900/10"
              },
              {
                num: "03",
                tag: "Market Barrier",
                title: "A Trust Deficit",
                body: "Corporate buyers cannot purchase blue carbon credits they cannot verify. Without traceable, auditable provenance, a credit is merely a claim. This trust gap has historically kept carbon-dense ecosystems like Indian mangroves out of the market entirely.",
                border: "border-orange-900/30",
                grad: "from-orange-900/10"
              }
            ].map(card => (
              <Section key={card.num}>
                <div className={`relative h-full overflow-hidden rounded-2xl border ${card.border} bg-gradient-to-b ${card.grad} to-[#040D0B] p-8 sm:p-10 flex flex-col`}>
                  <span className="font-syne absolute right-4 top-2 select-none text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white/5">{card.num}</span>
                  <span className="mb-6 self-start rounded-full border border-gray-200 dark:border-white/10 px-4 py-1.5 text-[11px] uppercase font-bold text-gray-400 tracking-widest">{card.tag}</span>
                  <h3 className="font-syne mb-5 text-2xl font-bold text-gray-900 dark:text-white leading-tight">{card.title}</h3>
                  <p className="text-[16px] leading-relaxed text-gray-500 dark:text-gray-400 flex-grow">{card.body}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE EQUITY FAILURE ────────────────────────────────────────── */}
      <section className="bg-white dark:bg-[#040D0B] py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Who It Fails Most</SectionLabel>
          <h2 className="font-syne mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            The Communities Who Protect<br />the Coastline Are Paid Last.
          </h2>
          <p className="mb-8 max-w-3xl text-lg sm:text-xl lg:text-[22px] leading-relaxed text-gray-500 dark:text-gray-400 font-medium">
            In traditional carbon project structures, value flows upward. Project developers and international brokers capture the majority of revenue. The communities who actually maintain these ecosystems receive a fraction — often less than 20% of the credit's market value.
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-500 dark:text-gray-400 font-semibold italic">
            NEVARA's model is designed to reverse this. Our planned revenue structure aims to direct <span className="text-teal-400">60% of every credit sale directly</span> to the community or institution that protects the land — automated and transparent.
          </p>
          <p className="mt-6 text-sm text-gray-500 font-medium italic">
            Note: This revenue distribution model is our design target. It has not yet been tested at scale.
          </p>

          <div className="grid gap-8 md:grid-cols-2 mt-12">
            <div className="rounded-2xl border border-red-900/30 bg-red-950/20 p-8 flex flex-col">
              <span className="text-red-400 text-[10px] font-bold uppercase tracking-widest mb-6">Traditional Carbon Project</span>
              <div className="space-y-4 flex-grow">
                {[
                  { step: "Manual field audit", extra: "6–18 months" },
                  { step: "International broker", extra: "30–40% commission" },
                  { step: "Third-party certification", extra: "Major upfront cost" },
                  { step: "Community payment", extra: "< 20% of credit value" },
                  { step: "Second audit", extra: "2+ years later" },
                  { step: "Credit issuance", extra: "Unverifiable by buyer" },
                ].map((s, i) => (
                  <div key={i} className="flex justify-between items-center text-sm border-b border-red-900/20 pb-3">
                    <span className="text-gray-600 dark:text-gray-300">{s.step}</span>
                    <span className="text-red-300 font-medium">{s.extra}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-teal-800/30 bg-teal-950/10 p-8 flex flex-col">
              <span className="text-teal-400 text-[10px] font-bold uppercase tracking-widest mb-6">NEVARA'S PLANNED FLOW</span>
              <div className="space-y-4 flex-grow">
                {[
                  { step: "GIS submission", extra: "Same day" },
                  { step: "AI MRV pre-screening", extra: "Targeted 72-hour turnaround" },
                  { step: "Expert verifier review", extra: "Transparent, fixed cost" },
                  { step: "Community payment", extra: "60% of credit value" },
                  { step: "Ongoing monitoring", extra: "Continuous, satellite-based" },
                  { step: "Credit issuance", extra: "QR-linked to blockchain record" },
                ].map((s, i) => (
                  <div key={i} className="flex justify-between items-center text-sm border-b border-teal-900/20 pb-3">
                    <span className="text-gray-600 dark:text-gray-300">{s.step}</span>
                    <span className="text-teal-300 font-medium">{s.extra}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE MODEL ─────────────────────────────────────────────────── */}
      <section className="bg-gray-50 dark:bg-[#060F0C] py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>The NEVARA Difference</SectionLabel>
          <h2 className="font-syne mb-12 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Automated Verification.<br />Real-Time Distribution.<br />Full Provenance.
          </h2>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            {[
              { label: "Audit Method", old: "Manual field survey, 6–18 months", new: "AI + satellite, continuous", icon: "🕒" },
              { label: "Verification Cost", old: "High upfront cost", new: "Transparent fixed fee", icon: "📉" },
              { label: "Time to Approval", old: "2+ years from submission", new: "Fast turnaround on pre-screening", icon: "⚡" },
              { label: "Community Revenue", old: "< 20% of credit value", new: "Planned 60%, automated", icon: "💎" },
              { label: "Buyer Traceability", old: "PDF certificate only", new: "QR → blockchain → source coords", icon: "🔗" },
              { label: "Double-Counting Risk", old: "Administrative controls only", new: "Cryptographically impossible", icon: "🔒" },
            ].map(row => (
              <div key={row.label} className="p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#040D0B] flex gap-5 transition-all hover:shadow-lg dark:hover:bg-white/[0.02]">
                <div className="text-3xl pt-1 shrink-0">{row.icon}</div>
                <div>
                  <div className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.15em] mb-3">{row.label}</div>
                  <div className="flex flex-col gap-3">
                    <div className="text-sm font-medium text-red-500/70 border-l border-red-500/20 pl-3 italic">Old: {row.old}</div>
                    <div className="text-base sm:text-lg text-teal-500 border-l-2 border-teal-500 pl-3 font-bold leading-tight">New: {row.new}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOME ───────────────────────────────────────────────────── */}
      <section className="bg-white dark:bg-[#040D0B] py-16 sm:py-24 lg:py-32 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">Credits the Market Can Trust.</h2>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl lg:text-[22px] font-medium text-gray-500 dark:text-gray-400 mb-14 leading-relaxed">
            NEVARA credits are designed to be blockchain-verified, satellite-monitored, and expert-reviewed records of real carbon sequestration. Our goal is to give Indian blue carbon a credible path into both domestic and global carbon markets.
          </p>

          <Link to="/how-it-works" className="inline-flex items-center gap-2 text-teal-500 font-bold text-sm tracking-widest uppercase hover:underline">
            See the Technology Behind This 
            <span>→</span>
          </Link>
        </div>
      </section>
    </LandingLayout>
  );
}
