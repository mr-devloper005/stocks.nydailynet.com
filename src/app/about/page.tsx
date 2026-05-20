import Link from "next/link";
import { ArrowRight, Users, Target, Sparkles } from "lucide-react";
import { NavbarShell } from "@/components/shared/navbar-shell";
import { Footer } from "@/components/shared/footer";
import { SITE_CONFIG } from "@/lib/site-config";


const values = [
  { title: "Curated by people", description: "We believe trusted recommendations beat endless feeds." },
  { title: "Designed for focus", description: "Clear, calm UI helps you find the next best resource fast." },
  { title: "Built to share", description: "Collections make collaboration and knowledge flow effortless." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f4f5f7] text-[#1a1f2e]">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#262E53] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%237BA3C3' d='M0 224L60 213.3C120 203 240 181 360 181.3C480 181 600 203 720 208C840 213 960 203 1080 186.7C1200 171 1320 149 1380 138.7L1440 128V320H1380C1320 320 1200 320 1080 320C960 320 840 320 720 320C600 320 480 320 360 320C240 320 120 320 60 320H0Z'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#3E85BD]/25 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[#BB3426]/20 blur-3xl" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7BA3C3]">
            <span className="h-px w-8 bg-[#BB3426]" aria-hidden />
            About Us
          </p>
          <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.12] tracking-[-0.03em] sm:text-5xl lg:text-[3.15rem]">
            A single home for knowledge, discovery, and community.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#c8d0e4] sm:text-lg">
            {SITE_CONFIG.name} brings together publishing, listings, and social bookmarking so teams can move faster
            and keep their best resources close.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 rounded-full bg-[#3E85BD] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(62,133,189,0.35)] transition hover:bg-[#3576a8] hover:shadow-[0_16px_44px_rgba(62,133,189,0.42)]"
            >
              Meet the Team
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/16"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-18">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-[#e2e6ef] bg-white p-8 shadow-[0_24px_70px_rgba(38,46,83,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6B7291]">Our Story</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#262E53]">
              Building the future of collaborative discovery.
            </h2>
            <p className="mt-4 text-sm leading-8 text-[#4a5366]">
              We believe that the best resources deserve better organization. Our platform brings together creators, 
              communities, and businesses in a space designed for meaningful connection and efficient knowledge sharing.
            </p>
          </div>
          
          <div className="grid gap-4">
            {values.map((value, index) => (
              <div key={value.title} className="rounded-[2rem] border border-[#e2e6ef] bg-white p-6 shadow-[0_12px_40px_rgba(38,46,83,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(38,46,83,0.1)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3E85BD]/10">
                    {index === 0 && <Users className="h-5 w-5 text-[#3E85BD]" />}
                    {index === 1 && <Target className="h-5 w-5 text-[#3E85BD]" />}
                    {index === 2 && <Sparkles className="h-5 w-5 text-[#3E85BD]" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#262E53]">{value.title}</h3>
                    <p className="mt-2 text-sm leading-8 text-[#4a5366]">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
