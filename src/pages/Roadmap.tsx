import { LandingLayout, Section, SectionLabel, useCounter, useInView } from "@/components/layout/LandingLayout";
import { SubHero } from "@/components/layout/SubHero";
import { useEffect } from "react";

// ── Components ─────────────────────────────────────────────────────────────

function StatCard({ value, unit, label, started }: { value: number; unit: string; label: string; started: boolean }) {
  const { value: count, start } = useCounter(value, 2000);
  useEffect(() => { if (started) start(); }, [started, start]);
  return (
    <div className="rounded-xl border border-teal-700/40 bg-teal-950/10 p-5 text-center transition-all hover:bg-teal-900/20">
      <div className="font-syne text-3xl font-bold text-white">
        {count.toLocaleString()}{unit}
      </div>
      <div className="mt-1 text-[10px] uppercase font-bold text-teal-400 tracking-widest">{label}</div>
    </div>
  );
}

export default function Roadmap() {
  const { ref: statsRef, inView: statsInView } = useInView(0.15);

  return (
    <LandingLayout>
      <SubHero 
        label="Strategic Roadmap"
        title="Building India's Blue Carbon Infrastructure — Step by Step."
        subtitle="From a prototype platform developed by students at BITM Ballari to a vision of national carbon infrastructure — a five-phase roadmap grounded in regulatory reality and honest about where we are today."
      />

      {/* ── LIVE STATUS ───────────────────────────────────────────────── */}
      <section className="bg-[#060F0C] py-20 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-bold text-teal-400 uppercase tracking-[0.2em] mb-6">CURRENT STATUS</div>
          <h2 className="font-syne mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Prototype Platform — Built at BITM Ballari.
          </h2>
          <p className="mb-14 max-w-3xl text-lg sm:text-xl lg:text-[22px] text-gray-400 leading-relaxed font-medium">
            We are a team of four Computer Science undergraduates who have built a working prototype of the NEVARA platform. The platform includes core modules for GIS contribution, AI vegetation scoring, blockchain record-keeping, a marketplace interface, and certificate generation.
          </p>

          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            <div className="space-y-6">
              {[
                {
                  status: "Prototype",
                  title: "GIS Contributor Portal",
                  body: "Interactive polygon-based land submission module designed for project boundary definition."
                },
                {
                  status: "Prototype",
                  title: "AI Vegetation Scoring",
                  body: "NDVI-based analysis layer using publicly available Sentinel-2 multispectral data."
                },
                {
                  status: "Prototype",
                  title: "Blockchain Explorer",
                  body: "SHA-256 ledger prototype for immutable record-keeping and traceable credit provenance."
                }
              ].map(m => (
                <div key={m.title} className="p-8 rounded-2xl border border-teal-700/40 bg-teal-950/10 transition-all hover:bg-teal-900/20">
                   <div className="text-[11px] font-bold text-teal-500 uppercase tracking-[0.15em] mb-4 px-2.5 py-1 bg-teal-500/10 inline-block rounded-md border border-teal-500/20">{m.status}</div>
                   <h3 className="font-syne mb-3 text-xl font-bold text-white leading-tight">{m.title}</h3>
                   <p className="text-[16px] leading-relaxed text-gray-500 font-medium">{m.body}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
               <div className="bg-teal-950/20 border border-teal-800/30 rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-4">TECHNICAL MILESTONES</h3>
                  <div className="space-y-3">
                    {[
                      "14 platform modules built",
                      "42 API endpoints developed",
                      "Platform prototype deployed on AWS EC2",
                      "Indian Patent Application No. 202541114138"
                    ].map(item => (
                      <div key={item} className="flex items-center gap-3 text-sm text-gray-300">
                        <span className="text-teal-500">◈</span> {item}
                      </div>
                    ))}
                  </div>
               </div>
               <p className="text-sm text-gray-500 italic leading-relaxed px-2">
                 Note: The platform is a working prototype. We have not yet onboarded any live projects or issued real carbon credits. All statistics displayed are simulated for demonstration purposes.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHASE TIMELINE ─────────────────────────────────────────────── */}
      <section className="bg-[#040D0B] py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne mb-20 text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center tracking-tight">The Five Phases of National Scale.</h2>

          <div className="relative border-l border-teal-900/40 ml-4 md:ml-12 space-y-24">
            {[
              {
                phase: "Phase 1 — Q4 2025 (Current): Prototype",
                color: "text-teal-400",
                dot: "bg-teal-400",
                title: "Prototype & Community Building",
                body: "Platform prototype completed with all 14 modules. Actively seeking mentorship from coastal scientists, carbon market experts, and policy advisors. Looking for pilot site partners who want to explore this technology together.",
                items: ["GIS Portal", "AI Scoring", "Blockchain Registry", "Marketplace", "Certificates"]
              },
              {
                phase: "Phase 2 — 2026 · Planned",
                color: "text-amber-400",
                dot: "bg-amber-400",
                title: "Pilot Site & Scientific Collaboration",
                body: "Establish a real pilot site in partnership with a coastal community or NGO. Integrate actual satellite data pipelines and begin real MRV testing. Seeking collaborators for this phase.",
                items: ["Pilot Site Onboarding", "Sentinel-2 Live Data", "NDVI Monitoring", "Scientific Validation"]
              },
              {
                phase: "Phase 3 — 2026 Q3–Q4 · Planned",
                color: "text-gray-400",
                dot: "bg-gray-600",
                title: "Expansion & Validation",
                body: "Expand to additional coastal sites pending successful pilot validation. Develop a mobile field reporting app and pursue LiDAR integration for higher-confidence biomass estimation.",
                items: ["Additional Coastal Sites", "Mobile Field App", "LiDAR Integration", "Local Interface"]
              },
              {
                phase: "Phase 4 — 2027 · Planned",
                color: "text-gray-400",
                dot: "bg-gray-600",
                title: "Standards Alignment",
                body: "Pursue formal alignment with international carbon standards. Work toward ESG disclosure compatibility and explore government registry integration.",
                items: ["Verra VCS (VM0033)", "Gold Standard SDG", "Gov Registry Sync", "ESG Compatibility"]
              },
              {
                phase: "Phase 5 — 2027+ · Targeted",
                color: "text-gray-400",
                dot: "bg-gray-700",
                title: "Global Carbon Trading",
                body: "Long-term vision: position NEVARA as a bridge between India's domestic carbon market and international Article 6.4 eligible credits.",
                items: ["Article 6.4 Eligibility", "Cross-Border Trading", "Global Registry Sync"]
              }
            ].map(p => (
              <div key={p.title} className="relative pl-10 md:pl-20">
                 <div className={`absolute -left-[5px] top-2.5 w-2.5 h-2.5 rounded-full ${p.dot} shadow-[0_0_10px_rgba(20,184,166,0.6)]`} />
                 <span className={`${p.color} text-[11px] font-bold uppercase tracking-[0.2em] mb-3 block`}>{p.phase}</span>
                 <h3 className="font-syne text-2xl sm:text-3xl font-bold text-white mb-5 leading-tight">{p.title}</h3>
                 <p className="text-base sm:text-lg leading-relaxed text-gray-400 mb-8 max-w-4xl font-medium">{p.body}</p>
                 <div className="flex flex-wrap gap-3">
                    {p.items.map(item => (
                       <span key={item} className="px-4 py-1.5 rounded-md border border-white/5 bg-[#060F0C] text-xs text-gray-500 font-bold uppercase tracking-wider">{item}</span>
                    ))}
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FUTURE SCOPE ──────────────────────────────────────────────── */}
      <section className="bg-[#060F0C] py-28 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>National Scaling</SectionLabel>
          <h2 className="font-syne mb-6 text-3xl font-bold text-white sm:text-4xl leading-tight">
            The Digital Backbone of<br />India's Blue Carbon.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 leading-relaxed text-center mb-16">
            NEVARA's long-term goal is to provide the mapping, monitoring, and verification layer that turns India's natural coastal ecosystems into trusted carbon assets — at national scale.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { val: "11,098 km", label: "Indian Coastline", sub: "National potential" },
                { val: "5M+ Tons", label: "Annual Storage", sub: "Mangrove potential" },
                { val: "Tens of Billions", label: "Market Value", sub: "By 2030" },
                { val: "490+", label: "Target Entities", sub: "For compliance" }
              ].map(stat => (
                <div key={stat.label}>
                   <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.val}</div>
                   <div className="text-[11px] font-bold text-teal-400 uppercase tracking-widest mb-1">{stat.label}</div>
                   <div className="text-[10px] text-gray-600">{stat.sub}</div>
                </div>
              ))}
           </div>
           <p className="mt-12 text-[10px] text-gray-600 uppercase tracking-widest font-medium">
             Note: These are market-level projections based on public research. NEVARA has not independently modelled or verified these figures.
           </p>
        </div>
      </section>
    </LandingLayout>
  );
}
