import { LandingLayout, Section, SectionLabel } from "@/components/layout/LandingLayout";
import { SubHero } from "@/components/layout/SubHero";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <LandingLayout>
      <SubHero
        label="About NEVARA"
        title="Built by Students. Driven by a Real Problem."
        subtitle="From the engineering labs of BITM Ballari to the coastlines of Karnataka — four undergraduate students building India's blue carbon infrastructure, one honest step at a time."
      />

      {/* ── THE MISSION ───────────────────────────────────────────────── */}
      <section className="bg-[#060F0C] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Why We Exist</SectionLabel>
          <h2 className="font-syne mb-6 text-3xl font-bold text-white sm:text-4xl leading-tight">
            To Make Coastal Protection<br />Economically Rational.
          </h2>
          <div className="max-w-2xl text-lg text-gray-400 leading-relaxed mb-12 space-y-6">
            <p>
              India's 11,098 km coastline is one of the most carbon-dense natural
              environments on the planet. Mangroves, seagrass meadows, and salt
              marshes sequester carbon at rates that no terrestrial reforestation
              programme can match. Yet these ecosystems remain almost entirely
              outside the global carbon market — not because the value is absent,
              but because the infrastructure to capture it does not yet exist in India.
            </p>
            <p>
              NEVARA is our attempt to build that infrastructure. We are not claiming to have solved this problem. We are a student team with a working prototype, a patent application, and a deep belief that this matters.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mt-12">
            {[
              { title: "Transparency", body: "Every credit should be traceable to a GPS coordinate, a verifier, and a blockchain record. No black boxes." },
              { title: "Equity", body: "We are designing a model where 60% of every credit sale goes directly to the community or institution protecting the land — not to intermediaries." },
              { title: "Honesty", body: "We are early-stage. We are students. We will tell you exactly where the platform stands and what is still a vision versus what is built." }
            ].map(m => (
              <div key={m.title} className="p-6 rounded-2xl border border-white/5 bg-[#040D0B] transition-all hover:bg-white/[0.02]">
                <h3 className="font-syne mb-3 text-lg font-bold text-white tracking-widest uppercase text-center">{m.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500 text-center">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE ORIGIN STORY ─────────────────────────────────────────── */}
      <section className="bg-[#040D0B] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <SectionLabel>The Story — Why We Started</SectionLabel>
              <h2 className="font-syne mb-6 text-3xl font-bold text-white leading-tight">A Realization on the Coastline.</h2>
              <div className="space-y-6 text-gray-400 leading-relaxed max-w-xl">
                <p>
                  NEVARA began with a question: why does India's most powerful
                  natural climate asset — its mangrove-lined coastline —
                  generate almost no economic return for the communities that protect it?
                  The answer was not a lack of value. It was a lack of verifiable,
                  accessible measurement.
                </p>
                <p>
                  A 3rd-year Computer Science undergraduate at BITM, began exploring this problem in 2025 — merging blockchain concepts with environmental monitoring to prototype what India's first institutional-grade blue carbon registry might look like. Three teammates joined to build the platform into what it is today.
                </p>
                <p>
                  NEVARA was not built for a hackathon. It was built because the
                  problem was real, the market gap was documented, and the
                  technology to address it exists — it simply has not yet been
                  assembled specifically for India's coastal regulatory environment. We want to change that.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-fit">
              {[
                { name: "Tahir Tamam", role: "Coordinator & Backend Systems", email: "tahir.tamam.005@gmail.com" },
                { name: "M Mahenoor", role: "Frontend & User Experience", email: "mahi090405@gmail.com" },
                { name: "Aiman Fathima Shaikh", role: "Research & Data Analysis", email: "shaikhaiman250@gmail.com" },
                { name: "Avni Sodani", role: "Strategy & Communication", email: "a.sodani.2315@gmail.com" }
              ].map(member => (
                <div key={member.name} className="p-6 rounded-2xl border border-teal-800/30 bg-teal-950/10">
                  <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest mb-1 block">Team Member</span>
                  <h3 className="font-syne text-lg font-bold text-white mb-1 leading-none">{member.name}</h3>
                  <p className="text-gray-400 text-xs mb-2">{member.role}</p>
                  <p className="text-[10px] text-gray-500 font-mono break-all">{member.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THE VISION ───────────────────────────────────────────────── */}
      <section className="bg-[#060F0C] py-28 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Where We Are Going</SectionLabel>
          <h2 className="font-syne mb-6 text-3xl font-bold text-white sm:text-4xl leading-tight">
            The Default Digital Backbone<br />of India's Carbon Market.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 leading-relaxed mb-16 px-4">
            The vision is not to become another carbon credit platform.
            The vision is to become the infrastructure layer that every
            other participant in India's carbon market depends on —
            the public ledger of record for nature-based solutions,
            starting with the coastlines of Karnataka and expanding
            to every coastal state in India.
          </p>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              { label: "2026", title: "Real Pilot Site", color: "text-teal-400", body: "Partner with a coastal community, NGO, or government body to test NEVARA on a real land parcel. Validate our MRV methodology in the field. Begin conversations with domain experts and potential scientific collaborators." },
              { label: "2027", title: "Standards Alignment", color: "text-emerald-400", body: "Work toward formal alignment with Verra VM0033 or equivalent international standards. Explore BEE (CCTS) integration for domestic compliance use cases." },
              { label: "2030+", title: "National Infrastructure", color: "text-blue-400", body: "Operate as a foundational layer for India's Green Credit Programme, CCTS Offset Mechanism, and international nature-based solution credits — making Indian coastal ecosystems a trusted part of the global carbon market." }
            ].map(v => (
              <div key={v.label} className="p-7 rounded-2xl border border-white/5 bg-[#040D0B] text-center transition-all hover:bg-white/[0.01]">
                <span className={`${v.color} text-xs font-bold uppercase tracking-widest block mb-1`}>{v.label}</span>
                <h3 className="font-syne text-lg font-bold text-white mb-4">{v.title}</h3>
                <p className="text-xs leading-relaxed text-gray-500">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEEKING ───────────────────────────────────────────────────── */}
      <section className="bg-[#040D0B] py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Seeking — Who We Want to Connect With</SectionLabel>
          <h2 className="font-syne mb-10 text-2xl font-bold text-white">We are actively looking for specialists and partners.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Scientific mentors — coastal ecologists, marine biologists, carbon scientists",
              "Policy experts — carbon markets, CRZ law, forest rights, CCTS framework",
              "Pilot partners — coastal NGOs, community groups, or forest departments",
              "Investors and grant makers — who believe in climate infrastructure and student innovation",
              "Industry advisors — ESG, sustainability, carbon trading professionals"
            ].map(item => (
              <div key={item} className="p-5 rounded-xl border border-white/5 bg-[#060F0C] text-sm text-gray-400 flex items-center gap-3">
                <span className="text-teal-500 text-lg">✦</span> {item}
              </div>
            ))}
          </div>

          <p className="mt-10 text-gray-500 text-sm max-w-xl mx-auto text-center">
            If you work in any of these areas and believe this matters, please reach out. We are a small team, we are early, and we welcome all forms of collaboration and guidance.
          </p>
        </div>
      </section>

      {/* ── CLOSING ──────────────────────────────────────────────────── */}
      <section className="bg-[#040D0B] py-28 text-center border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6">
          <blockquote className="font-light italic text-2xl sm:text-3xl text-white mb-8 leading-relaxed max-w-2xl mx-auto">
            "The vision is not a feature. It is a market — where a fishing
            community in Mangalore earns a transparent, verifiable income
            from the carbon their coastline sequesters, and a corporate
            buyer in Mumbai can verify that income source to a specific
            block on an immutable ledger."
          </blockquote>
          <div className="text-sm text-gray-400 mb-10 font-bold uppercase tracking-[0.25em]">NEVARA</div>
          <Link to="/contact" className="inline-block px-8 py-4 bg-teal-500 text-black font-bold rounded-xl transition-all hover:bg-teal-400">
            Contact Us
          </Link>
        </div>
      </section>
    </LandingLayout>
  );
}
