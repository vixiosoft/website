"use client"

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react"
import Link from "next/link"

const footerLinks = [
  {
    title: "Products",
    links: [
      { label: "Vixiosoft for Service", href: "/works" },
      { label: "Vixiosoft for Sales", href: "/works" },
      { label: "Integrations", href: "/services" },
      { label: "Product updates", href: "/blog" },
      { label: "System status", href: "#" },
      { label: "Sign in", href: "#" },
      { label: "Vixiosoft for Enterprise", href: "#" },
      { label: "Vixiosoft for Small Business", href: "#" },
      { label: "Vixiosoft for Startups", href: "#" },
      { label: "Vixiosoft Benchmark", href: "#" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Ticketing", href: "/services" },
      { label: "Messaging & live chat", href: "/services" },
      { label: "Help center", href: "/services" },
      { label: "Knowledge base", href: "/services" },
      { label: "Voice", href: "/services" },
      { label: "Community forums", href: "#" },
      { label: "Reporting & analytics", href: "/services" },
      { label: "AI and automation", href: "/services" },
      { label: "Workforce management", href: "/services" },
      { label: "Advanced Data Privacy and Protection", href: "/services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Security", href: "/about" },
      { label: "Support", href: "/contact" },
      { label: "Blog", href: "/blog" },
      { label: "Training", href: "#" },
      { label: "Partners", href: "#" },
      { label: "Events and webinars", href: "#" },
      { label: "Professional services", href: "/services" },
      { label: "Customer stories", href: "/works" },
      { label: "What is CRM?", href: "/about" },
      { label: "CRM software guide", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Newsroom", href: "/blog" },
      { label: "What is Vixiosoft?", href: "/about" },
      { label: "Careers", href: "/about" },
      { label: "Diversity and inclusion", href: "/about" },
      { label: "Accessibility Plan", href: "/about" },
      { label: "Social impact", href: "/about" },
      { label: "Vixiosoft Foundation", href: "/about" },
      { label: "Legal", href: "/privacy" },
    ],
  },
  {
    title: "Trending",
    links: [
      { label: "CX Trends 2023", href: "/blog", badge: "NEW" },
      { label: "ROI calculator", href: "#" },
      { label: "Sustainability report", href: "/about" },
      { label: "Join our research panel", href: "#" },
      { label: "Customer service software", href: "/services" },
      { label: "Ticketing system software", href: "/services" },
      { label: "Live chat software", href: "/services" },
      { label: "Forum software", href: "#" },
      { label: "Help desk software", href: "/services" },
    ],
  },
]

const socialLinks = [
  { icon: IconBrandX, href: "https://twitter.com", label: "Twitter" },
  { icon: IconBrandFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: IconBrandLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: IconBrandYoutube, href: "https://youtube.com", label: "YouTube" },
  {
    icon: IconBrandInstagram,
    href: "https://instagram.com",
    label: "Instagram",
  },
  { icon: IconBrandTiktok, href: "https://tiktok.com", label: "TikTok" },
]

const bottomLinks = [
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Notice", href: "/privacy" },
  { label: "Cookie Notice", href: "/privacy" },
  { label: "Cookie settings", href: "#" },
  { label: "Trust Center", href: "/about" },
]

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200/80 bg-white pt-16 pb-8 text-slate-800">
      <div className="containerX">
        {/* Row 1: Columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-10 lg:grid-cols-5">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="mb-4 text-[14px] font-semibold tracking-wider text-slate-900 uppercase">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx} className="flex items-center">
                    <Link
                      href={link.href}
                      className="text-[13px] leading-relaxed text-slate-500 transition-colors duration-200 hover:text-slate-900"
                    >
                      {link.label}
                    </Link>
                    {link.badge && (
                      <span className="ml-2 inline-flex items-center rounded bg-lime-100 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-lime-800 uppercase">
                        {link.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider 1 */}
        <hr className="mt-16 mb-8 border-slate-200/60" />

        {/* Row 2: Help Callout & Socials */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-2xl leading-tight text-slate-900 sm:text-3xl md:text-[2.2rem]">
            How can we help?{" "}
            <Link
              href="/contact"
              className="text-[#6f9000] underline decoration-1 underline-offset-[6px] transition-colors hover:text-lime-700"
            >
              Contact us.
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, sIdx) => {
              const Icon = social.icon
              return (
                <Link
                  key={sIdx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 text-slate-800 transition-colors hover:text-ext-accent"
                  aria-label={social.label}
                >
                  <Icon className="size-5" />
                </Link>
              )
            })}
          </div>
        </div>

        {/* Divider 2 */}
        <hr className="mt-8 mb-4 border-slate-200/60" />

        {/* Row 3: Giant Watermark */}
        <div className="pointer-events-none my-6 w-full select-none">
          <svg
            viewBox="0 0 380 75"
            className="h-auto w-full fill-current text-[#f1f3f9]"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <text
              x="0"
              y="95"
              className="font-extrabold tracking-tighter text-ext-accent/10"
              fontSize="100"
              textLength="380"
              lengthAdjust="spacing"
            >
              vixiosoft
            </text>
          </svg>
        </div>

        {/* Row 4: Bottom Links & Copyright */}
        <div className="flex flex-col gap-4 border-t border-slate-100 pt-6 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {bottomLinks.map((bLink, bIdx) => (
              <Link
                key={bIdx}
                href={bLink.href}
                className="transition-colors hover:text-slate-800"
              >
                {bLink.label}
              </Link>
            ))}
          </div>
          <div>
            <span>©Vixiosoft 2026</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
