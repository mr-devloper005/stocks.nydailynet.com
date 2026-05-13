import { Building2, FileText, Image as ImageIcon, Mail, MapPin, Phone, Sparkles, Bookmark } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { CONTACT_PAGE_OVERRIDE_ENABLED, ContactPageOverride } from '@/overrides/contact-page'

function getTone(kind: ReturnType<typeof getProductKind>) {
  if (kind === 'directory') {
    return {
      shell: 'bg-[#f8fbff] text-slate-950',
      panel: 'border border-slate-200 bg-white',
      soft: 'border border-slate-200 bg-slate-50',
      muted: 'text-slate-600',
      action: 'bg-slate-950 text-white hover:bg-slate-800',
    }
  }
  if (kind === 'editorial') {
    return {
      shell: 'bg-[#fbf6ee] text-[#241711]',
      panel: 'border border-[#dcc8b7] bg-[#fffdfa]',
      soft: 'border border-[#e6d6c8] bg-[#fff4e8]',
      muted: 'text-[#6e5547]',
      action: 'bg-[#241711] text-[#fff1e2] hover:bg-[#3a241b]',
    }
  }
  if (kind === 'visual') {
    return {
      shell: 'bg-[#07101f] text-white',
      panel: 'border border-white/10 bg-white/6',
      soft: 'border border-white/10 bg-white/5',
      muted: 'text-slate-300',
      action: 'bg-[#8df0c8] text-[#07111f] hover:bg-[#77dfb8]',
    }
  }
  return {
    shell: 'bg-[#f7f1ea] text-[#261811]',
    panel: 'border border-[#ddcdbd] bg-[#fffaf4]',
    soft: 'border border-[#e8dbce] bg-[#f3e8db]',
    muted: 'text-[#71574a]',
    action: 'bg-[#5b2b3b] text-[#fff0f5] hover:bg-[#74364b]',
  }
}

export default function ContactPage() {
  if (CONTACT_PAGE_OVERRIDE_ENABLED) {
    return <ContactPageOverride />
  }

  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const tone = getTone(productKind)
  const lanes =
    productKind === 'directory'
      ? [
          { icon: Building2, title: 'Business onboarding', body: 'Add listings, verify operational details, and bring your business surface live quickly.' },
          { icon: Phone, title: 'Partnership support', body: 'Talk through bulk publishing, local growth, and operational setup questions.' },
          { icon: MapPin, title: 'Coverage requests', body: 'Need a new geography or category lane? We can shape the directory around it.' },
        ]
      : productKind === 'editorial'
        ? [
            { icon: FileText, title: 'Editorial submissions', body: 'Pitch essays, columns, and long-form ideas that fit the publication.' },
            { icon: Mail, title: 'Newsletter partnerships', body: 'Coordinate sponsorships, collaborations, and issue-level campaigns.' },
            { icon: Sparkles, title: 'Contributor support', body: 'Get help with voice, formatting, and publication workflow questions.' },
          ]
        : productKind === 'visual'
          ? [
              { icon: ImageIcon, title: 'Creator collaborations', body: 'Discuss gallery launches, creator features, and visual campaigns.' },
              { icon: Sparkles, title: 'Licensing and use', body: 'Reach out about usage rights, commercial requests, and visual partnerships.' },
              { icon: Mail, title: 'Media kits', body: 'Request creator decks, editorial support, or visual feature placement.' },
            ]
          : [
              { icon: Bookmark, title: 'Collection submissions', body: 'Suggest resources, boards, and links that deserve a place in the library.' },
              { icon: Mail, title: 'Resource partnerships', body: 'Coordinate curation projects, reference pages, and link programs.' },
              { icon: Sparkles, title: 'Curator support', body: 'Need help organizing shelves, collections, or profile-connected boards?' },
            ]

  return (
    <div className={`min-h-screen ${tone.shell}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-70">Contact {SITE_CONFIG.name}</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em]">A support page that matches the product, not a generic contact form.</h1>
            <p className={`mt-5 max-w-2xl text-sm leading-8 ${tone.muted}`}>Tell us what you are trying to publish, fix, or launch. We will route it through the right lane instead of forcing every request into the same support bucket.</p>
            <div className="mt-8 space-y-4">
              {lanes.map((lane) => (
                <div key={lane.title} className={`rounded-[1.6rem] p-5 ${tone.soft}`}>
                  <lane.icon className="h-5 w-5" />
                  <h2 className="mt-3 text-xl font-semibold">{lane.title}</h2>
                  <p className={`mt-2 text-sm leading-7 ${tone.muted}`}>{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

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
                    <option value="pricing">Pricing & Plans</option>
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
                  className="rounded-md border border-[#c5cbd8] bg-white px-3 py-2.5 text-sm text-[#1a1f2e] placeholder:text-[#9aa3bd] focus:border-[#3E85BD] focus:outline-none focus:ring-2 focus:ring-[#3E85BD]/20 resize-none"
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
