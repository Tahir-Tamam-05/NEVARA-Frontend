import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/nivara-ring-logo.png";
import heroVideo from "@/assets/hero.mp4";

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-[#1a1c1c] dark:text-gray-100 font-sans antialiased overflow-x-hidden bg-white dark:bg-[#0A1118] transition-colors duration-300">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-[#020A09]/80 backdrop-blur-[20px] py-3 shadow-lg"
          : "bg-[#020A09]/50 backdrop-blur-[16px] py-5"
          } border-b border-white/[0.07]`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white shrink-0">
            <img src={logo} alt="NEVARA Icon" className="h-8 w-8 object-contain" />
            NEVARA
          </Link>

          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {["Home", "How It Works", "Why NEVARA", "Roadmap", "About"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(/ /g, "-")}`}
                className="group relative text-sm font-medium text-white/75 hover:text-white transition-colors"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#14b8a6] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <ThemeToggle />
            <Link
              to="/contact"
              className="bg-[#0F766E] text-white text-[13px] sm:text-sm font-bold px-4 sm:px-7 py-2.5 rounded-full border border-teal-500/40 hover:bg-[#14b8a6] hover:shadow-[0_0_20px_rgba(20,184,166,0.35)] transition-all duration-300 whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 w-full border-b border-gray-100 flex flex-col justify-end min-h-[85vh] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover brightness-100 contrast-110 saturate-95 z-0"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Layered Overlay System */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(2, 10, 9, 0.55) 0%, rgba(2, 10, 9, 0.30) 30%, rgba(2, 10, 9, 0.20) 50%, rgba(2, 10, 9, 0.65) 75%, rgba(2, 10, 9, 0.88) 100%)"
          }}
        />
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, rgba(2, 10, 9, 0.18) 100%)"
          }}
        />

        {/* Background Grid Pattern */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-[0.35] dark:opacity-[0.1]"
          style={{
            backgroundImage: "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            backgroundPosition: "center top",
            maskImage: "linear-gradient(to bottom, white 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, white 40%, transparent 100%)",
          }}
        />

        <div className="max-w-[1100px] mx-auto px-6 relative z-10 w-full">
          <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">

            {/* Hero Badge */}
            <div className="bg-[#020A09]/60 backdrop-blur-[8px] border border-[#14B8A6]/35 text-[#5EEAD4] font-mono text-[11px] font-semibold uppercase tracking-[0.18em] px-5 py-2 rounded-full inline-flex items-center gap-2">
              INDIA'S BLUE CARBON REGISTRY — EARLY STAGE
            </div>

            {/* Massive Heading */}
            <div className="flex flex-col gap-4">
              <h1
                className="font-black tracking-tighter leading-[0.90] uppercase text-transparent bg-clip-text"
                style={{
                  fontSize: "clamp(64px, 14vw, 140px)",
                  backgroundImage: "linear-gradient(160deg, #FFFFFF 0%, #E0FDF4 25%, #99F6E4 55%, #2DD4BF 80%, #14B8A6 100%)",
                  filter: "drop-shadow(0 4px 24px rgba(20, 184, 166, 0.25))"
                }}
              >
                NEVARA
              </h1>

              <h2
                className="font-extrabold text-white uppercase tracking-tight leading-[1.05]"
                style={{
                  fontSize: "clamp(24px, 4.5vw, 52px)",
                  textShadow: "0 2px 20px rgba(2, 10, 9, 0.80), 0 0 60px rgba(2, 10, 9, 0.60)"
                }}
              >
                Turning Coastal Ecosystems<br className="hidden sm:block" />Into Trusted Carbon Assets.
              </h2>
            </div>

            {/* Subtitle Backdrop Pill */}
            <div className="bg-[#020A09]/45 backdrop-blur-[6px] rounded-[12px] px-6 py-4 border border-white/10 max-w-[560px] mx-auto">
              <p className="text-white/95 text-base sm:text-lg font-medium leading-[1.8]">
                NEVARA is rethinking how carbon is tracked and trusted.<br />
                Built for transparency. Designed for real impact.<br />
                Early-stage. Purpose-driven.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center pt-4 w-full sm:w-auto">
              <Link
                to="/contact"
                className="bg-[#0D9488] text-white text-[15px] font-bold px-10 py-4 rounded-full border border-[#14B8A6] shadow-[0_4px_20px_rgba(13,148,136,0.35)] hover:bg-[#14B8A6] hover:shadow-[0_8px_32px_rgba(13,148,136,0.50)] hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto text-center"
              >
                Contact Us
              </Link>
              <Link
                to="/how-it-works"
                className="bg-white/10 backdrop-blur-[10px] text-white text-[15px] font-semibold px-10 py-4 rounded-full border border-white/25 hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto text-center"
              >
                How It Works
              </Link>
            </div>

            {/* Trust Line */}
            <p className="text-[12px] sm:text-sm font-bold uppercase tracking-[0.2em] text-white/40 pt-4">
              Early-stage project • Open to mentorship • Building in public
            </p>
          </div>
        </div>

      </section>

      {/* Section: Scale that Matters */}
      <section className="py-20 sm:py-32 bg-white dark:bg-[#0A1118] text-center border-b border-gray-100 dark:border-white/10">
        <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-bold text-gray-900 dark:text-white mb-6 tracking-tight px-4 leading-tight">
          India's Coastline Is One of the<br className="hidden md:block" /> World's Most Valuable Climate Assets.
        </h2>
        <p className="text-lg sm:text-xl lg:text-[22px] text-gray-500 dark:text-gray-400 mb-10 max-w-4xl mx-auto px-6 leading-relaxed font-medium">
          India's 11,098 km coastline holds one of the planet's most carbon-rich natural environments. Mangroves, seagrass, and salt marshes sequester carbon at rates far exceeding terrestrial forests. Today, this potential is almost entirely untapped.
        </p>
        <p className="text-sm text-teal-600 dark:text-teal-400 font-bold mb-16 uppercase tracking-[0.2em]">
          We aim to help change that.
        </p>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-[#f8fcfb] dark:bg-white/5 rounded-[20px] p-6 sm:p-8 border border-[#e6f2f0] dark:border-white/10 text-left shadow-sm">
            <p className="text-[10px] font-bold tracking-[0.15em] text-[#2c7a7b] dark:text-[#3BA58F] uppercase mb-6">COASTLINE_LENGTH</p>
            <div className="text-[28px] sm:text-[32px] lg:text-[40px] leading-[1.1] font-bold text-[#1a202c] dark:text-white mb-2 tracking-tight">Approx. 11,098 km</div>
            <p className="text-sm font-medium text-gray-500">One of the longest in Asia</p>
          </div>
          {/* Card 2 */}
          <div className="bg-[#f8fcfb] dark:bg-white/5 rounded-[20px] p-6 sm:p-8 border border-[#e6f2f0] dark:border-white/10 text-left shadow-sm">
            <p className="text-[10px] font-bold tracking-[0.15em] text-[#2c7a7b] dark:text-[#3BA58F] uppercase mb-6">STORAGE_POTENTIAL</p>
            <div className="text-[20px] sm:text-[22px] leading-[1.3] font-bold text-[#1a202c] dark:text-white mb-2 tracking-tight">Millions of tonnes stored annually</div>
            <p className="text-sm font-medium text-gray-500">In coastal wetlands</p>
          </div>
          {/* Card 3 */}
          <div className="bg-[#f8fcfb] dark:bg-white/5 rounded-[20px] p-6 sm:p-8 border border-[#e6f2f0] dark:border-white/10 text-left shadow-sm">
            <p className="text-[10px] font-bold tracking-[0.15em] text-[#2c7a7b] dark:text-[#3BA58F] uppercase mb-6">MARKET_GROWTH</p>
            <div className="text-[20px] sm:text-[22px] leading-[1.3] font-bold text-[#1a202c] dark:text-white mb-2 tracking-tight">Growing through CCTS 2026</div>
            <p className="text-sm font-medium text-gray-500">Domestic carbon market</p>
          </div>
          {/* Card 4 */}
          <div className="bg-[#f8fcfb] dark:bg-white/5 rounded-[20px] p-6 sm:p-8 border border-[#e6f2f0] dark:border-white/10 text-left shadow-sm">
            <p className="text-[10px] font-bold tracking-[0.15em] text-[#2c7a7b] dark:text-[#3BA58F] uppercase mb-6">EQUITY_GAP</p>
            <div className="text-[20px] sm:text-[22px] leading-[1.3] font-bold text-[#1a202c] dark:text-white mb-2 tracking-tight">Communities largely excluded today</div>
            <p className="text-sm font-medium text-gray-500">Untapped revenue streams</p>
          </div>
          <div className="col-span-full mt-4 text-[10px] text-gray-400 uppercase tracking-widest font-medium">
            Note: These are market-level figures sourced from public research. NEVARA has not independently verified these at scale.
          </div>
        </div>
      </section>

      {/* Section: Three Pillars */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white dark:bg-[#0A1118] border-b border-gray-100 dark:border-white/10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 mb-16 sm:mb-20 items-start lg:items-end">
          <div className="flex-1">
            <h2 className="text-[36px] sm:text-[48px] lg:text-[52px] leading-[1.05] font-bold tracking-tight max-w-xl">
              Three Pillars — Our Approach
            </h2>
          </div>
          <div className="flex-1 lg:pb-2">
            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-lg">
              We are building the technical infrastructure to bridge the gap between coastal conservation and institutional carbon markets.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="rounded-2xl border border-gray-200 dark:border-white/10 p-8 sm:p-10 bg-white dark:bg-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-colors shadow-sm flex flex-col h-full">
            <div className="w-12 h-12 bg-[#1a1c1c] dark:bg-white rounded-xl flex items-center justify-center mb-10 shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="stroke-white dark:stroke-[#1a1c1c]" strokeWidth="2"><path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">High-Precision GIS Mapping</h3>
            <p className="text-gray-500 text-[16px] font-medium leading-relaxed mb-10 flex-grow">
              We are building tools for contributors to define project boundaries using GPS-locked polygon mapping — making it harder to fraudulently claim or overlap carbon project areas.
            </p>
            <p className="text-[10px] font-bold text-[#007D8A] tracking-[0.15em] uppercase mt-auto">SPATIAL_VERIFY_V2</p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-gray-200 dark:border-white/10 p-8 sm:p-10 bg-white dark:bg-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-colors shadow-sm flex flex-col h-full">
            <div className="w-12 h-12 bg-[#007D8A] dark:bg-[#3BA58F] rounded-xl flex items-center justify-center mb-10 shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4l3-9 5 18 3-9h6" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">AI-Assisted MRV Engine</h3>
            <p className="text-gray-500 text-[16px] font-medium leading-relaxed mb-10 flex-grow">
              We are developing a Monitoring, Reporting, and Verification (MRV) layer that uses publicly available satellite imagery (Sentinel-2) to estimate biomass density and track vegetation health over time.
            </p>
            <p className="text-[10px] font-bold text-[#007D8A] tracking-[0.15em] uppercase mt-auto">ALGORITHMIC_TRUST</p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-gray-200 dark:border-white/10 p-8 sm:p-10 bg-white dark:bg-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-colors shadow-sm flex flex-col h-full">
            <div className="w-12 h-12 bg-[#1a1c1c] dark:bg-white rounded-xl flex items-center justify-center mb-10 shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="stroke-white dark:stroke-[#1a1c1c]" strokeWidth="2"><path d="M4 6a8 3 0 1016 0A8 3 0 104 6zm0 0v12a8 3 0 0016 0V6M4 12a8 3 0 0016 0" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Blockchain Registry</h3>
            <p className="text-gray-500 text-[16px] font-medium leading-relaxed mb-10 flex-grow">
              We are exploring how SHA-256 blockchain technology can serve as an immutable ledger for carbon credits — making every credit traceable back to its source coordinates and verification record.
            </p>
            <p className="text-[10px] font-bold text-[#007D8A] tracking-[0.15em] uppercase mt-auto">SHA256_LEDGER</p>
          </div>
        </div>
      </section>

      {/* Section: Image Left / Text Right */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white dark:bg-[#0A1118] border-b border-gray-100 dark:border-white/10 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        <div className="flex-1 order-2 lg:order-1 text-left">
          <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.05] font-bold tracking-tight mb-8">
            Institutional Trust Through<br className="hidden md:block" /> Scientific Rigor.
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-10 max-w-lg">
            Protecting nature should create real value. We don't just count trees; we certify a living system's ability to sequester carbon over 100-year horizons.
          </p>

          <div className="space-y-8">
            <div className="border-l-2 border-teal-500/30 pl-6">
              <h4 className="text-lg font-bold mb-2">Sovereign Asset Control</h4>
              <p className="text-[16px] text-gray-500 dark:text-gray-400 font-medium max-w-md leading-relaxed">Assessments from India's Forest Survey, BEE carbon market data, and UNFCCC methodology research.</p>
            </div>
            <div className="border-l-2 border-teal-500/30 pl-6">
              <h4 className="text-lg font-bold mb-2">Real-time Telemetry</h4>
              <p className="text-[16px] text-gray-500 dark:text-gray-400 font-medium max-w-md leading-relaxed">Live feeds from coastal sensor networks integrated directly into the dashboard.</p>
            </div>
          </div>

          <div className="mt-12">
            <Link to="/about" className="text-sm font-bold tracking-[0.1em] text-[#007D8A] uppercase hover:underline inline-flex items-center gap-2 group">
              Read Our Approach
              <span className="group-hover:translate-x-1 transition-transform">&gt;</span>
            </Link>
          </div>
        </div>

        <div className="flex-1 order-1 lg:order-2 relative w-full h-[400px] sm:h-[500px] lg:h-[600px] transition-all">
          <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/7b/Mangroves_at_sunset.jpg')" }}
            />
          </div>
          <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-white/95 dark:bg-[#0A1118]/95 backdrop-blur-md rounded-xl p-4 shadow-xl border dark:border-white/10">
            <p className="text-[9px] font-bold text-gray-400 dark:text-gray-500 tracking-[0.15em] uppercase mb-1">SCAN_COORDINATES</p>
            <p className="text-[13px] font-bold font-mono text-gray-900 dark:text-gray-100 italic">02°14'15"N | 102°15'11"E</p>
          </div>
        </div>
      </section>

      {/* Section: Dark Timeline */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0A1118] text-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center mb-16 sm:mb-24 max-w-2xl px-4">
            <h2 className="text-[36px] sm:text-[48px] leading-[1.05] font-bold tracking-tight mb-6">
              Asset Lifecycle from Shore to Ledger
            </h2>
            <p className="text-base sm:text-lg text-gray-400 font-medium leading-relaxed">
              Our four-step institutional workflow ensures every credit is unique, verifiable, and permanent.
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto">
            {/* The vertical divider line - adjust for mobile */}
            <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 sm:-ml-px w-[2px] bg-white/10" />

            <div className="w-full relative z-10 flex flex-col gap-12 sm:gap-16">
              {/* Step 1 */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center w-full relative">
                <div className="hidden sm:block sm:w-1/2 pr-12 text-right">
                  <h3 className="text-2xl font-bold mb-3">01 — GIS Polygon Definition</h3>
                  <p className="text-gray-400 font-medium text-[16px] leading-relaxed">A contributor submits land parcel boundaries through our mapping interface. The system checks for regulatory compliance, boundary integrity, and documented land rights before the project is accepted.</p>
                </div>
                <div className="w-12 h-12 bg-[#007D8A] rounded-full border-4 border-[#0A1118] flex items-center justify-center font-bold text-sm z-10 sm:mx-[-24px] shrink-0">01</div>
                <div className="sm:hidden pl-10 mt-[-32px] mb-8">
                  <h3 className="text-xl font-bold mb-3">01 — GIS Polygon Definition</h3>
                  <p className="text-gray-400 font-medium text-base leading-relaxed">A contributor submits land parcel boundaries through our mapping interface. The system checks for regulatory compliance, boundary integrity, and documented land rights before the project is accepted.</p>
                </div>
                <div className="hidden sm:block sm:w-1/2 pl-12"></div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center w-full relative">
                <div className="hidden sm:block sm:w-1/2 pr-12"></div>
                <div className="w-12 h-12 bg-[#007D8A] rounded-full border-4 border-[#0A1118] flex items-center justify-center font-bold text-sm z-10 sm:mx-[-24px] shrink-0">02</div>
                <div className="pl-10 sm:pl-12 mt-[-32px] sm:mt-0 mb-8 sm:mb-0 sm:w-1/2 text-left">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">02 — MRV Engine Verification</h3>
                  <p className="text-gray-400 font-medium text-base sm:text-[16px] leading-relaxed">Satellite imagery is used to estimate biomass and carbon stock. The goal is to replace expensive, infrequent manual audits with continuous automated monitoring.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center w-full relative">
                <div className="hidden sm:block sm:w-1/2 pr-12 text-right">
                  <h3 className="text-2xl font-bold mb-3">03 — Blockchain Record Creation</h3>
                  <p className="text-gray-400 font-medium text-[16px] leading-relaxed">Verified data is written to an immutable blockchain record. Each entry is cryptographically linked to the previous, making tampering detectable.</p>
                </div>
                <div className="w-12 h-12 bg-[#007D8A] rounded-full border-4 border-[#0A1118] flex items-center justify-center font-bold text-sm z-10 sm:mx-[-24px] shrink-0">03</div>
                <div className="sm:hidden pl-10 mt-[-32px] mb-8">
                  <h3 className="text-xl font-bold mb-3">03 — Blockchain Record Creation</h3>
                  <p className="text-gray-400 font-medium text-base leading-relaxed">Verified data is written to an immutable blockchain record. Each entry is cryptographically linked to the previous, making tampering detectable.</p>
                </div>
                <div className="hidden sm:block sm:w-1/2 pl-12"></div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center w-full relative">
                <div className="hidden sm:block sm:w-1/2 pr-12"></div>
                <div className="w-12 h-12 bg-[#007D8A] rounded-full border-4 border-[#0A1118] flex items-center justify-center font-bold text-sm z-10 sm:mx-[-24px] shrink-0">04</div>
                <div className="pl-10 sm:pl-12 mt-[-32px] sm:mt-0 mb-8 sm:mb-0 sm:w-1/2 text-left">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">04 — Carbon Credit Certificate (CCC) Issuance</h3>
                  <p className="text-gray-400 font-medium text-base sm:text-[16px] leading-relaxed">Credits are issued as Carbon Credit Certificates, each linked to a blockchain record and source GPS coordinates. They can be listed on a transparent marketplace for voluntary or compliance buyers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Manifesto Quote */}
      <section className="relative overflow-hidden bg-[#1D748A] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="absolute top-0 right-0 bottom-0 pointer-events-none opacity-[0.08] translate-x-24 translate-y-12">
          <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.05c3.55-1.57 10-7.85 10-14.05 0-3.3-2.69-6-6-6-2.6 0-4.8 1.54-5.69 3.75l-.31.84-.31-.84A6.002 6.002 0 0 0 4 1C1.31 1-1.38 3.7 1.38 7c0 6.2 6.45 12.48 10 14.05l.62.27.62-.27z" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <h2 className="text-2xl sm:text-4xl lg:text-[56px] leading-[1.3] font-semibold italic mb-12 px-2 sm:px-0">
            \"We're building a system where protecting nature actually pays — for the people who protect it.\"
          </h2>
          <div className="w-16 h-[1px] bg-white/40 mb-6" />
          <p className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-white/90">
            THE NEVARA BELIEF
          </p>
        </div>
      </section>

      {/* Footer matching new design */}
      <footer className="bg-white dark:bg-[#0A1118] text-gray-900 dark:text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-16 gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img src={logo} alt="NEVARA Icon" className="h-10 w-10 object-contain" />
                <h3 className="text-3xl font-black tracking-tight">NEVARA</h3>
              </div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.15em] leading-relaxed max-w-[300px]">
                © 2026 NEVARA BLUE CARBON REGISTRY.<br />
                SOVEREIGN ENVIRONMENTAL INTEGRITY.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs font-bold tracking-[0.2em] text-gray-500 uppercase md:pt-4">
              <Link to="/" className="hover:text-[#14b8a6] transition-colors">Home</Link>
              <Link to="/how-it-works" className="hover:text-[#14b8a6] transition-colors">How It Works</Link>
              <Link to="/about" className="hover:text-[#14b8a6] transition-colors">About</Link>
              <Link to="/contact" className="hover:text-[#14b8a6] transition-colors">Contact</Link>
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-6 text-gray-400">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500">
              Early-stage student project. Open to collaboration.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
