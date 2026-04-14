import { LandingLayout, SectionLabel } from "@/components/layout/LandingLayout";
import { SubHero } from "@/components/layout/SubHero";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  return (
    <LandingLayout>
      <SubHero
        label="Technical Architecture"
        title="The Science of Trust."
        subtitle="How NEVARA envisions automating integrity across the entire blue carbon credit lifecycle — from coastline to carbon certificate."
      />

      {/* ── PHASE 1 ─────────────────────────────────────────────────── */}
      <section className="bg-gray-50 dark:bg-[#060F0C] py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Phase 01 · GIS Onboarding</SectionLabel>
          <h2 className="font-syne mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Mapping Land, Validating Rights.
          </h2>
          <p className="mb-12 max-w-3xl text-lg sm:text-xl lg:text-[22px] leading-relaxed text-gray-500 dark:text-gray-400 font-medium">
            Our platform is designed to allow contributors — coastal landowners, community groups, or forest departments — to submit land parcels through an interactive mapping interface. The GIS engine we are building is planned to validate three conditions before a project is accepted:
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Regulatory Surplus (Additionality)",
                body: "The project must demonstrate that its carbon benefit goes beyond what existing laws already require. A project inside an already-protected reserve, for example, would not qualify unless it provides measurable benefit beyond existing conservation mandates.",
                icon: "🛡",
                border: "border-teal-800/30"
              },
              {
                title: "Boundary Integrity",
                body: "Polygon coordinates will be cross-referenced against High-Water Line datasets and cadastral records to prevent overlap with existing registrations. We are aiming for a minimum buffer between adjacent project boundaries to eliminate double-counting.",
                icon: "🎯",
                border: "border-emerald-800/30"
              },
              {
                title: "Legal Right to Carbon",
                body: "Contributors will need to submit land title, lease agreements, or authorisation letters. For community and tribal land, gram sabha resolutions and FPIC certificates satisfying the Forest Rights Act (FRA) 2006 will be required.",
                icon: "⚖️",
                border: "border-blue-800/30"
              }
            ].map(check => (
              <div key={check.title} className="flex flex-col">
                <div className={`h-full rounded-2xl border ${check.border} bg-white dark:bg-[#040D0B] p-8 transition-all hover:bg-black/5 dark:hover:bg-white/[0.02] flex flex-col`}>
                  <div className="mb-6 text-3xl">{check.icon}</div>
                  <h3 className="font-syne mb-4 text-xl font-bold text-gray-900 dark:text-white">{check.title}</h3>
                  <p className="text-[16px] leading-relaxed text-gray-500 dark:text-gray-400 flex-grow">{check.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#040D0B] p-8">
            <p className="text-teal-400 text-xs font-bold mb-6 uppercase tracking-[0.2em]">COMPLIANCE FRAMEWORKS WE ARE ALIGNING WITH</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "◈ Forest (Conservation) Act, 1980",
                "◈ CRZ Rules 2019",
                "◈ Forest Rights Act (FRA) 2006",
                "◈ Energy Conservation Act (Amendment) 2022"
              ].map(law => (
                <div key={law} className="px-4 py-3 rounded-lg border border-gray-200 dark:border-white/5 text-sm font-medium text-gray-600 dark:text-gray-400 bg-black/5 dark:bg-white/[0.01]">
                  {law}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PHASE 2 ─────────────────────────────────────────────────── */}
      <section className="bg-white dark:bg-[#040D0B] py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Phase 02 · AI Verification</SectionLabel>
          <h2 className="font-syne mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Continuous Monitoring.<br />Zero Manual Audits.
          </h2>
          <p className="mb-12 max-w-3xl text-lg sm:text-xl lg:text-[22px] leading-relaxed text-gray-500 dark:text-gray-400 font-medium">
            Once onboarded, every registered project would be continuously monitored using our planned AI stack. We intend to use multi-source remote sensing data to track vegetation health, canopy density, and soil carbon — producing a verifiable digital record.
          </p>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Sentinel-2 Optical Imagery",
                body: "10-metre resolution multispectral data from ESA's Copernicus programme. NDVI (vegetation index) computed from Band 8 and Band 4 provides a proxy for biomass density and canopy health.",
                tag: "10m resolution · Daily cadence",
                icon: "🛰",
                border: "border-teal-800/30"
              },
              {
                title: "Synthetic Aperture Radar (SAR)",
                body: "Cloud-penetrating radar imagery to ensure monitoring continuity during India's monsoon season when optical imagery is unavailable.",
                tag: "All-weather · Structural mapping",
                icon: "📡",
                border: "border-purple-800/30"
              },
              {
                title: "LiDAR Point Cloud Analysis (Planned)",
                body: "Three-dimensional canopy structure data for precise above-ground biomass estimation. This feature is on our roadmap and would be required for high-confidence credit issuance.",
                tag: "3D biomass mapping",
                icon: "🗼",
                border: "border-blue-800/30"
              },
              {
                title: "Climate and Tidal Correction",
                body: "Sea-level rise data and tidal models would automatically adjust project boundary polygons to account for shoreline change over time.",
                tag: "Auto-updating",
                icon: "🌊",
                border: "border-amber-800/30"
              }
            ].map(source => (
              <div key={source.title} className="flex flex-col">
                <div className={`h-full rounded-2xl border ${source.border} bg-gray-50 dark:bg-[#060F0C] p-6 sm:p-7 transition-all hover:shadow-lg dark:hover:bg-white/[0.02] flex flex-col`}>
                  <div className="mb-5 text-3xl">{source.icon}</div>
                  <h3 className="font-syne mb-3 text-lg font-bold text-gray-900 dark:text-white leading-tight">{source.title}</h3>
                  <p className="mb-6 text-[15px] leading-relaxed text-gray-500 flex-grow">{source.body}</p>
                  <span className="text-[11px] font-bold text-teal-500 uppercase tracking-widest mt-auto">{source.tag}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 sm:p-10 rounded-2xl border border-emerald-800/30 bg-emerald-950/10">
            <p className="text-emerald-400 font-bold mb-4 uppercase tracking-[0.2em] text-[11px]">CREDIT ISSUANCE THRESHOLD WE ARE TARGETING</p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-500 dark:text-gray-400 mb-8 font-medium">
              Minimum 40% canopy density — aligned with India's Green Credit Rules 2025. NEVARA's MRV engine monitors and certifies this threshold, ensuring credits represent real, measurable restoration progress.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "40% Minimum Canopy Density", color: "bg-teal-500/10 border-teal-500/20 text-teal-400" },
                { label: "5-Year Monitoring Period (Planned)", color: "bg-amber-500/10 border-amber-500/20 text-amber-400" },
                { label: "20% Non-Permanence Buffer Pool", color: "bg-blue-500/10 border-blue-500/20 text-blue-400" }
              ].map(badge => (
                <span key={badge.label} className={`px-4 py-1.5 rounded-full border text-xs font-bold ${badge.color}`}>
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PHASE 3 ─────────────────────────────────────────────────── */}
      <section className="bg-gray-50 dark:bg-[#060F0C] py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Phase 03 · Blockchain Minting</SectionLabel>
          <h2 className="font-syne mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            One Credit.<br className="sm:hidden" /> One Block.<br className="sm:hidden" /> One Record Forever.
          </h2>
          <p className="mb-12 max-w-3xl text-lg sm:text-xl lg:text-[22px] leading-relaxed text-gray-500 dark:text-gray-400 font-medium">
            Every tonne of verified CO₂e sequestration would be converted into a
            unique Carbon Credit Certificate (CCC) and recorded as a block on
            NEVARA's SHA-256 ledger. The chain structure ensures
            that tampering with any record would invalidate every subsequent block —
            making retroactive fraud computationally impossible.
          </p>

          <div className="grid gap-8 md:grid-cols-2 mt-8 sm:mt-12">
            <div className="rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#040D0B] p-8 sm:p-10">
              <h3 className="text-[13px] font-bold text-teal-400 uppercase tracking-widest mb-8">EACH BLOCK WOULD CONTAIN</h3>
              <div className="space-y-6">
                {[
                  "Block Index + Timestamp",
                  "Project Coordinates (GPS polygon hash)",
                  "Verified tCO₂e amount",
                  "Verifier signature + methodology code",
                  "Previous block hash (chain linkage)",
                  "SHA-256 block hash (tamper seal)"
                ].map(item => (
                  <div key={item} className="flex items-center gap-4 text-base sm:text-[17px] text-gray-600 dark:text-gray-300">
                    <span className="text-teal-500 inline-block w-4 shrink-0">⬡</span> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#040D0B] p-8 sm:p-10">
              <h3 className="text-[13px] font-bold text-teal-400 uppercase tracking-widest mb-8">Sample Block Record</h3>
              <div className="font-mono text-[13px] text-teal-400 bg-black/40 p-6 sm:p-8 rounded-xl border border-teal-900/30 leading-relaxed overflow-x-auto">
                <div className="mb-1 text-white/50"># Block Index</div>
                <div className="mb-3 text-white">Block #1,247</div>
                <div className="mb-1 text-white/50"># Metadata</div>
                <div className="mb-1">Project: Gurupur Estuary, Mangalore</div>
                <div className="mb-1">tCO₂e: 1,200.00</div>
                <div className="mb-1">Verifier: NITK-WROE-002</div>
                <div className="mb-1">Method: VM0033-v2.1</div>
                <div className="mt-4 mb-1 text-white/50"># Cryptographic Proof</div>
                <div className="mb-1 truncate">Hash: 0x9D2B...71E4</div>
                <div className="mb-1 truncate">Prev: 0x4A7F...3C91</div>
                <div className="mt-6 text-emerald-400 flex items-center gap-2 font-bold">
                  Status: IMMUTABLE ✓
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 sm:p-10 rounded-2xl border border-blue-800/30 bg-blue-950/10">
            <p className="text-blue-400 font-bold mb-4 uppercase tracking-[0.2em] text-[11px]">Anti-Double-Counting Architecture</p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-400 font-medium">
              Once a credit is minted, it receives a unique token ID that cannot
              be duplicated or re-issued. Once retired (used by a corporate buyer
              for offsetting), the block would be permanently marked at 'RETIRED' in
              our public explorer — making double-counting cryptographically impossible.
            </p>
          </div>
        </div>
      </section>

      {/* ── PHASE 4 ─────────────────────────────────────────────────── */}
      <section className="bg-white dark:bg-[#040D0B] py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Phase 04 · Market Listing</SectionLabel>
          <h2 className="font-syne mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            From Registry to Revenue.
          </h2>
          <p className="mb-12 max-w-3xl text-lg sm:text-xl lg:text-[22px] leading-relaxed text-gray-500 dark:text-gray-400 font-medium">
            Verified credits would be listed on NEVARA's transparent marketplace,
            accessible to corporate buyers for both compliance and voluntary ESG purposes. Every purchase generates a certificate linking directly to the blockchain record.
          </p>

          <div className="grid gap-8 md:grid-cols-2 mt-8 sm:mt-12">
            {[
              {
                title: "Mandatory Compliance Demand",
                label: "CCTS-Obligated Industries",
                labelColor: "text-teal-400",
                body: "India's Carbon Credit Trading Scheme (CCTS 2026) is expected to mandate greenhouse gas intensity targets for industrial entities. NEVARA credits are being designed to align with these requirements directly.",
                stat: "Mandatory compliance · Market driven",
                border: "border-teal-800/30"
              },
              {
                title: "Voluntary ESG Buyers",
                label: "ESG & Net Zero Commitments",
                labelColor: "text-emerald-400",
                body: "Corporates with net-zero commitments would be able to use NEVARA's blue carbon credits for ESG reporting and climate disclosures — with blockchain-backed traceability.",
                stat: "High biodiversity co-benefits · Premium value",
                border: "border-emerald-800/30"
              }
            ].map(segment => (
              <div key={segment.title} className={`rounded-2xl border ${segment.border} bg-gray-50 dark:bg-[#060F0C] p-8 sm:p-10 h-full flex flex-col transition-all hover:bg-black/5 dark:hover:bg-white/[0.01]`}>
                <span className={`${segment.labelColor} text-[11px] uppercase tracking-[0.2em] mb-4 font-bold`}>{segment.label}</span>
                <h3 className="font-syne text-2xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">{segment.title}</h3>
                <p className="text-base sm:text-[17px] leading-relaxed text-gray-500 dark:text-gray-400 mb-8 flex-grow">{segment.body}</p>
                <div className="pt-6 border-t border-gray-200 dark:border-white/10 text-[11px] font-bold text-gray-500 uppercase tracking-widest">{segment.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STANDARDS ───────────────────────────────────────────────── */}
      <section className="bg-gray-50 dark:bg-[#060F0C] py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Compliance</SectionLabel>
          <h2 className="font-syne mb-12 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">Standards We Are Aligning With</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { code: "VM0033 v2.1", name: "Verra VCS", status: "Methodology Aligned", detail: "Additionality, Leakage, and Dynamic Boundary requirements mapped to planned project workflow.", border: "border-teal-800/30", color: "text-teal-400" },
              { code: "GS4GG", name: "Gold Standard", status: "SDG Tracking Ready", detail: "SDG 13, 14, and 8 tagging for future projects.", border: "border-purple-800/30", color: "text-purple-400" },
              { code: "CCTS 2026", name: "BEE India", status: "Offset Mechanism Aligned", detail: "Designed to align with India's Offset Mechanism requirements.", border: "border-emerald-800/30", color: "text-emerald-400" },
              { code: "Art. 6.4", name: "Paris Agreement", status: "Later Phase Target", detail: "Cross-border carbon trading eligibility targeted for later development stages.", border: "border-blue-800/30", color: "text-blue-400" }
            ].map(block => (
              <div key={block.code} className={`rounded-xl border ${block.border} bg-white dark:bg-[#040D0B] p-6 text-left flex flex-col h-full`}>
                <div className={`text-sm font-bold ${block.color} mb-2`}>{block.code}</div>
                <div className="text-base font-bold text-gray-900 dark:text-white mb-2">{block.name}</div>
                <div className="text-[10px] uppercase font-bold text-gray-500 mb-4 tracking-widest">{block.status}</div>
                <p className="text-[13px] leading-relaxed text-gray-500 font-medium flex-grow">{block.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-sm text-gray-500 italic max-w-2xl mx-auto">
            Note: NEVARA is not yet registered under any of these standards. These represent our design targets and aspirational roadmap.
          </p>
          <div className="mt-12">
            <Link to="/roadmap" className="inline-flex items-center gap-2 text-teal-500 font-bold text-sm tracking-wider uppercase hover:underline">
              See the National Scaling Roadmap
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
}
