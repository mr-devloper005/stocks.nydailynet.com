import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

export function ContactPageOverride() {
  return (
    <div className="min-h-screen bg-[#f4f5f7] text-[#1a1f2e]">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden bg-[#262E53] text-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(62,133,189,0.2),transparent_42%)]" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7BA3C3]">
              <span className="mr-3 inline-block h-px w-10 bg-[#BB3426] align-middle" aria-hidden />
              Contact
            </p>
            <h1 className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Let&apos;s talk distribution
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#c8d0e4] sm:text-lg">
              For media desk questions, enterprise plans, or compliance-friendly workflows, reach the releaseprCore team. We route requests to the right owner—no ticket black holes.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="rounded-2xl border border-[#d9dee8] bg-[#f4f5f7] p-7 shadow-[0_4px_24px_rgba(38,46,83,0.07)]">
            <form className="grid gap-5">
              {/* Row 1: Contact Name + Phone Number */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#1a1f2e]">
                    Contact Name <span className="text-[#BB3426]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="h-10 rounded-md border border-[#c5cbd8] bg-white px-3 text-sm text-[#1a1f2e] placeholder:text-[#9aa3bd] focus:border-[#3E85BD] focus:outline-none focus:ring-2 focus:ring-[#3E85BD]/20"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#1a1f2e]">Phone Number</label>
                  <input
                    type="tel"
                    className="h-10 rounded-md border border-[#c5cbd8] bg-white px-3 text-sm text-[#1a1f2e] placeholder:text-[#9aa3bd] focus:border-[#3E85BD] focus:outline-none focus:ring-2 focus:ring-[#3E85BD]/20"
                  />
                </div>
              </div>

              {/* Row 2: Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#1a1f2e]">
                  Email <span className="text-[#BB3426]">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="h-10 rounded-md border border-[#c5cbd8] bg-white px-3 text-sm text-[#1a1f2e] placeholder:text-[#9aa3bd] focus:border-[#3E85BD] focus:outline-none focus:ring-2 focus:ring-[#3E85BD]/20"
                />
              </div>

              {/* Helper text */}
              <p className="text-sm text-[#6B7291]">Help Us Understand Your Needs A Little More.</p>

              {/* Row 3: Organization type + Subject */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#1a1f2e]">
                    What type of organization are you? <span className="text-[#BB3426]">*</span>
                  </label>
                  <select
                    required
                    className="h-10 rounded-md border border-[#c5cbd8] bg-white px-3 text-sm text-[#1a1f2e] focus:border-[#3E85BD] focus:outline-none focus:ring-2 focus:ring-[#3E85BD]/20"
                  >
                    <option value="">Please Select</option>
                    <option value="agency">Agency / PR Firm</option>
                    <option value="corporate">Corporate / Enterprise</option>
                    <option value="startup">Startup</option>
                    <option value="nonprofit">Non-Profit</option>
                    <option value="media">Media / Publisher</option>
                    <option value="individual">Individual</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#1a1f2e]">
                    Subject: How may we help you? <span className="text-[#BB3426]">*</span>
                  </label>
                  <select
                    required
                    className="h-10 rounded-md border border-[#c5cbd8] bg-white px-3 text-sm text-[#1a1f2e] focus:border-[#3E85BD] focus:outline-none focus:ring-2 focus:ring-[#3E85BD]/20"
                  >
                    <option value="">Please Select</option>
                    <option value="distribution">Press Release Distribution</option>
                    <option value="pricing">Pricing &amp; Plans</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="billing">Billing Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[#1a1f2e]">
                  Message / Comment <span className="text-[#BB3426]">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  className="resize-none rounded-md border border-[#c5cbd8] bg-white px-3 py-2.5 text-sm text-[#1a1f2e] placeholder:text-[#9aa3bd] focus:border-[#3E85BD] focus:outline-none focus:ring-2 focus:ring-[#3E85BD]/20"
                />
              </div>

              {/* Submit */}
              <div className="flex justify-center pt-1">
                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#3E85BD] px-8 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(62,133,189,0.35)] transition hover:bg-[#3576a8]"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
