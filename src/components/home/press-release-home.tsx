'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Radio, Shield, Sparkles } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import { SITE_CONFIG } from '@/lib/site-config'
import { siteContent } from '@/config/site.content'
import type { SitePost } from '@/lib/site-connector'

function getPostImage(post: SitePost) {
  const media = Array.isArray(post.media) ? post.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const images = Array.isArray(content.images) ? content.images.filter((u): u is string => typeof u === 'string') : []
  const logo = typeof content.logo === 'string' ? content.logo : null
  return mediaUrl || images[0] || logo || '/placeholder.svg?height=640&width=960'
}

function hasRealPostImage(post: SitePost) {
  const image = getPostImage(post)
  return !image.startsWith('/placeholder')
}

function getCategory(post: SitePost) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const cat = content.category
  if (typeof cat === 'string' && cat.trim()) return cat.trim()
  const tag = post.tags?.find((t) => typeof t === 'string' && t !== 'mediaDistribution')
  if (typeof tag === 'string') return tag
  return 'Press release'
}

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return ''
  return value.length > 160 ? `${value.slice(0, 157).trimEnd()}…` : value
}

type Props = {
  posts: SitePost[]
}

export function PressReleaseHome({ posts }: Props) {
  const [visibleCount, setVisibleCount] = useState(3)
  const visiblePosts = posts.slice(0, visibleCount)
  const lead = visiblePosts[0]
  const grid = visiblePosts.slice(1)
  const hasMorePosts = visibleCount < posts.length
  const leadHasImage = lead ? hasRealPostImage(lead) : false
  const heroTitle = siteContent.hero.title
  const heroLine = Array.isArray(heroTitle) ? heroTitle[0] : String(heroTitle)

  return (
    <main className="bg-[#f4f5f7] text-[#1a1f2e]">
      <section className="relative overflow-hidden border-t border-[#d9dee8] bg-[#efefef] text-[#161720]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%237BA3C3' d='M0 224L60 213.3C120 203 240 181 360 181.3C480 181 600 203 720 208C840 213 960 203 1080 186.7C1200 171 1320 149 1380 138.7L1440 128V320H1380C1320 320 1200 320 1080 320C960 320 840 320 720 320C600 320 480 320 360 320C240 320 120 320 60 320H0Z'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#a78bfa]/25 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[#60a5fa]/20 blur-3xl" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6B7291]">
                <span className="h-px w-8 bg-[#7c3aed]" aria-hidden />
                {siteContent.hero.badge}
              </p>
              <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.12] tracking-[-0.03em] text-[#161720] sm:text-5xl lg:text-[3.8rem]">
                {heroLine}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#2a3246] sm:text-lg">
                {siteContent.hero.description}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href={siteContent.hero.primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-[#7c3aed] px-8 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(124,58,237,0.35)] transition hover:bg-[#6d28d9] hover:shadow-[0_16px_44px_rgba(124,58,237,0.42)]"
                >
                  {siteContent.hero.primaryCta.label}
                </Link>
                <Link
                  href={siteContent.hero.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-[#161720] px-8 py-3 text-sm font-semibold text-[#161720] transition hover:bg-[#e7e7ea]"
                >
                  {siteContent.hero.secondaryCta.label}
                </Link>
              </div>
            </div>

            <div className="hero-orbit-panel relative mx-auto w-full max-w-[700px] rounded-[1.3rem] border border-[#b794f6]/55 bg-[#ccb6e7] p-3 shadow-[0_28px_90px_rgba(15,16,30,0.32)]">
              <div className="hero-grid-lines relative h-[340px] overflow-hidden rounded-[1rem] border border-[#b18cee]/75 bg-[#cdb8e7] sm:h-[430px]">
                <div className="hero-float hero-float-slow hero-card hero-card-a">
                  <div className="flex h-full w-full flex-col justify-end bg-[linear-gradient(135deg,#7c3aed_0%,#a855f7_100%)] p-3 text-white">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">Distribution</p>
                    <p className="mt-1 text-sm font-semibold">PR Newswire</p>
                  </div>
                </div>
                <div className="hero-float hero-float-fast hero-card hero-card-b">
                  <div className="flex h-full w-full flex-col justify-end bg-[linear-gradient(135deg,#9333ea_0%,#2563eb_100%)] p-3 text-white">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">Syndication</p>
                    <p className="mt-1 text-sm font-semibold">Business Wire</p>
                  </div>
                </div>
                <div className="hero-float hero-float-fast hero-chip hero-chip-a">Yahoo</div>
                <div className="hero-float hero-float-slow hero-chip hero-chip-b">Google News</div>
                <div className="hero-float hero-float-fast hero-chip hero-chip-c">Bing News</div>
                <div className="hero-float hero-float-slow hero-chip hero-chip-d">☎</div>
                <div className="hero-float hero-float-fast hero-chip hero-chip-e">+1 (555) 123-4567</div>
                <div className="hero-float hero-float-slow hero-chip hero-chip-f">charles@pear.co</div>
                <div className="hero-float hero-float-fast hero-chip hero-chip-g">✉</div>
                <div className="hero-float hero-float-slow hero-chip hero-chip-h">Media List</div>
                <div className="hero-float hero-float-slow hero-chip hero-chip-i">GlobeNewswire</div>
                <div className="hero-float hero-float-fast hero-chip hero-chip-j">MarketWatch</div>
              </div>
              <div className="hero-float hero-float-slow hero-side-card hero-side-card-a" />
              <div className="hero-float hero-float-fast hero-side-card hero-side-card-b" />
            </div>
          </div>

          <dl className="mt-14 grid gap-4 border-t border-[#d9dee8] pt-10 sm:grid-cols-3">
            {[
              { icon: Radio, t: 'Wire-ready formatting', d: 'Structured releases built for scans and syndication.' },
              { icon: Shield, t: 'Editorial safeguards', d: 'Clear attribution, categories, and review-friendly layouts.' },
              { icon: Sparkles, t: 'Measurable reach', d: 'Analytics-friendly surfaces without cluttering the story.' },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-[#d9dee8] bg-white/75 p-5 backdrop-blur-sm transition hover:bg-white">
                <dt className="flex items-center gap-2 text-sm font-semibold text-[#161720]">
                  <Icon className="h-4 w-4 text-[#7c3aed]" aria-hidden />
                  {t}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-[#4a5366]">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-18">
        <div className="flex flex-col gap-4 border-b border-[#d9dee8] pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6B7291]">{siteContent.home.introBadge}</p>
            <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.02em] text-[#262E53] sm:text-3xl">
              {siteContent.home.introTitle}
            </h2>
          </div>
          <Link
            href={siteContent.home.primaryLink.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#3E85BD] hover:text-[#2f6f9e]"
          >
            {siteContent.home.primaryLink.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.home.sidePoints.map((line) => (
            <li
              key={line}
              className="flex gap-3 rounded-2xl border border-[#e2e6ef] bg-white p-4 text-sm leading-snug text-[#3d465c] shadow-[0_8px_30px_rgba(38,46,83,0.06)]"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#3E85BD]" aria-hidden />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-[#e5e8f0] bg-[#EEEEEE]/80">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#6B7291]">{siteContent.taskSectionHeading}</p>
              <p className="mt-2 text-sm text-[#4a5366]">{siteContent.taskSectionDescriptionSuffix}</p>
            </div>
            <Link href="/search" className="text-sm font-semibold text-[#3E85BD] hover:underline">
              Open search
            </Link>
          </div>

          {lead ? (
            <Link
              href={`/updates/${lead.slug}`}
              className={`mt-8 overflow-hidden rounded-[1.35rem] border border-[#d9dee8] bg-white shadow-[0_24px_70px_rgba(38,46,83,0.08)] transition hover:border-[#3E85BD]/35 ${leadHasImage ? 'grid gap-0 md:grid-cols-[1.15fr_0.85fr]' : 'block'}`}
            >
              {leadHasImage ? (
                <div className="relative aspect-[16/10] w-full md:aspect-auto md:min-h-[280px]">
                  <ContentImage
                    src={getPostImage(lead)}
                    alt={lead.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#262E53]/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                    {getCategory(lead)}
                  </span>
                </div>
              ) : null}
              <div className={`flex flex-col justify-center p-7 sm:p-10 ${leadHasImage ? '' : 'max-w-4xl'}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6B7291]">
                  {new Date(lead.publishedAt || Date.now()).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}{' '}
                  · {lead.authorName || SITE_CONFIG.name}
                </p>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold leading-snug tracking-[-0.02em] text-[#262E53] sm:text-[1.65rem]">
                  {lead.title}
                </h3>
                {lead.summary ? <p className="mt-4 text-sm leading-relaxed text-[#4a5366]">{excerpt(lead.summary)}</p> : null}
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#3E85BD]">
                  Read release
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ) : (
            <div className="mt-8 rounded-[1.35rem] border border-dashed border-[#c5cbd8] bg-white p-12 text-center">
              <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-[#262E53]">No releases published yet</p>
              <p className="mt-2 text-sm text-[#6B7291]">When your first story goes live, it will appear here automatically.</p>
            </div>
          )}

          {grid.length ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {grid.map((post) => (
                <Link
                  key={post.id}
                  href={`/updates/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#e2e6ef] bg-white shadow-[0_12px_40px_rgba(38,46,83,0.06)] transition hover:-translate-y-0.5 hover:border-[#3E85BD]/30 hover:shadow-[0_18px_50px_rgba(38,46,83,0.1)]"
                >
                  {hasRealPostImage(post) ? (
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e8ebf2]">
                      <ContentImage
                        src={getPostImage(post)}
                        alt={post.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6B7291]">
                      {getCategory(post)} ·{' '}
                      {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                    <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-[#262E53] group-hover:text-[#3E85BD]">
                      {post.title}
                    </h3>
                    {post.summary ? (
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#5c6478]">{excerpt(post.summary)}</p>
                    ) : null}
                  </div>
                </Link>
              ))}
            </div>
          ) : null}

          {hasMorePosts ? (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => Math.min(count + 3, posts.length))}
                className="inline-flex items-center gap-2 rounded-full border border-[#cfd5e3] bg-white px-7 py-3 text-sm font-semibold text-[#262E53] shadow-[0_10px_30px_rgba(38,46,83,0.08)] transition hover:border-[#3E85BD]/40 hover:text-[#3E85BD]"
              >
                Load more releases
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ) : null}
        </div>
      </section>

      <section className="border-y border-[#e5e8f0] bg-[#f3f4f6]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-18">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6B7291]">Media intelligence</p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.02em] text-[#262E53] sm:text-5xl">
                Publish with distribution data you can trust
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#4a5366]">
                Track pickup performance, journalist engagement, publication windows, and outlet coverage in one place so every release is backed by real distribution signals.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={siteContent.hero.primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-[#7c3aed] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_36px_rgba(124,58,237,0.35)] transition hover:bg-[#6d28d9]"
                >
                  Explore
                </Link>
                <Link
                  href={siteContent.hero.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-[#262E53] px-6 py-3 text-sm font-semibold text-[#262E53] transition hover:bg-[#e8ebf2]"
                >
                  Contact media desk
                </Link>
              </div>
            </div>

            <div className="rounded-[1.8rem] bg-[#0b0d13] p-8 shadow-[0_28px_80px_rgba(10,15,35,0.35)]">
              <div className="mx-auto flex h-52 max-w-sm items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#7c3aed_0%,#9333ea_50%,#2563eb_100%)]">
                <div className="text-center text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">Live feed</p>
                  <p className="mt-2 text-3xl font-semibold">Press + Syndication</p>
                  <p className="mt-2 text-sm text-white/80">Real-time publication visibility</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-[1.5rem] border border-[#d9dee8] bg-white p-6 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-3">
              {['Workspace', 'API', 'Browser alerts'].map((item, index) => (
                <div
                  key={item}
                  className={`rounded-lg px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] ${
                    index === 0 ? 'bg-[#e9ddfa] text-[#262E53]' : 'bg-[#f3f4f6] text-[#505970]'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#262E53]">
                Build, route, and distribute releases faster
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#4a5366]">
                Bring newsroom drafts, approvals, media lists, and distribution endpoints into one workflow so your team moves from draft to pickup without tool switching.
              </p>
              <Link href="/search" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#7c3aed] hover:underline">
                Explore distribution workspace
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#080a11] text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-18">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8ea3d1]">Signals and coverage</p>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.02em] sm:text-5xl">
                Distribution analytics built for comms teams
              </h3>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#b8c2db]">
                From first publish to pickup trend changes, keep your communications decisions aligned with what is happening right now across outlets and channels.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
              <p className="text-5xl font-semibold text-white">1.2M+</p>
              <p className="mt-2 text-base text-[#d5ddf4]">Distribution, reach, and sentiment events processed daily</p>
              <div className="mt-6 h-44 rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(124,58,237,0.2),rgba(37,99,235,0.08))] p-4">
                <div className="flex h-full items-end gap-3 border-b border-white/20 pb-3">
                  {[48, 62, 74, 88, 104, 122].map((height, idx) => (
                    <div
                      key={height}
                      className={`w-8 rounded-sm ${idx < 3 ? 'bg-[#4f46e5]/55' : idx < 5 ? 'bg-[#7c3aed]/70' : 'bg-[#9333ea]/85'}`}
                      style={{ height }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['99.2%', 'Feed uptime across wire endpoints'],
              ['7M+', 'Weekly media interaction signals'],
              ['300K+', 'Journalist and outlet profiles tracked'],
              ['30K+', 'Active distribution campaigns indexed'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-semibold">{value}</p>
                <p className="mt-2 text-sm text-[#b8c2db]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4f6]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-18">
          <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.02em] text-[#262E53] sm:text-5xl">
            Built-in compliance and newsroom reliability
          </h3>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              ['Editorial Policy Aligned', 'Release workflows align with newsroom standards for attribution, approvals, and corrections.'],
              ['ISO 27001', 'Security controls and internal access governance follow audited information security standards.'],
              ['SOC 2 Type II', 'Operational controls are continuously monitored for data handling integrity and availability.'],
              ['24x7 Monitoring', 'Feed freshness, endpoint health, and delivery anomaly checks run around the clock.'],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-[#d9dee8] bg-white p-6">
                <div className="mb-4 h-20 w-20 rounded-full bg-[linear-gradient(135deg,#d8f65a_0%,#bfdbfe_45%,#e9d5ff_100%)]" />
                <h4 className="text-lg font-semibold text-[#262E53]">{title}</h4>
                <p className="mt-3 text-sm leading-7 text-[#4a5366]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="overflow-hidden rounded-[1.5rem] bg-[#262E53] px-8 py-12 text-center text-white sm:px-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7BA3C3]">{siteContent.cta.badge}</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">{siteContent.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#c8d0e4] sm:text-base">{siteContent.cta.description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={siteContent.cta.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-full bg-[#3E85BD] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#3E85BD]/25 transition hover:bg-[#3576a8]"
            >
              {siteContent.cta.primaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4f6] pb-20 sm:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-[1.6rem] bg-[#0b0d13] px-6 py-14 text-white sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.18),transparent_42%)]" />

            <div className="relative mx-auto mb-10 flex max-w-3xl items-end justify-center gap-4 sm:mb-14 sm:gap-7">
              {[
                ['PR', 'rotate-[-22deg]'],
                ['WIRE', 'rotate-[-12deg]'],
                ['MEDIA', 'rotate-[-4deg]'],
                ['RSS', 'rotate-[8deg]'],
                ['NEWS', 'rotate-[18deg]'],
              ].map(([label, rotate], idx) => (
                <div
                  key={label}
                  className={`integration-float ${idx % 2 ? 'integration-float-fast' : 'integration-float-slow'} flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-xs font-semibold tracking-[0.08em] text-white shadow-[0_16px_36px_rgba(0,0,0,0.45)] sm:h-16 sm:w-16 ${rotate} ${idx % 2 ? 'translate-y-[-8px]' : ''}`}
                >
                  {label}
                </div>
              ))}
            </div>

            <div className="relative mx-auto max-w-3xl text-center">
              <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.02em] sm:text-6xl">
                Run on the media stack you already use
              </h3>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#d3daef] sm:text-lg">
                Connect newsroom tools, PR workflows, alerts, and distribution channels in one place so drafting, approval, and delivery stay in sync.
              </p>
              <div className="mt-9">
                <Link
                  href="/news"
                  className="inline-flex items-center rounded-full bg-[#7c3aed] px-8 py-3 text-lg font-semibold text-white shadow-[0_14px_40px_rgba(124,58,237,0.38)] transition hover:bg-[#6d28d9]"
                >
                  Explore all channels
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
