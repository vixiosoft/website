"use client"

import {
  IconBrandAirbnb,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandSlack,
  IconBrandStripe,
} from "@tabler/icons-react"
import * as React from "react"

import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

interface Client {
  name: string
  icon?: React.ComponentType<{ className?: string }>
  customIcon?: () => React.ReactNode
  color: string
}

const firstRowClients: Client[] = [
  { name: "Stripe", icon: IconBrandStripe, color: "text-[#635BFF]" },
  { name: "Figma", icon: IconBrandFigma, color: "text-[#F24E1E]" },
  { name: "GitHub", icon: IconBrandGithub, color: "text-[#24292F]" },
  { name: "Slack", icon: IconBrandSlack, color: "text-[#4A154B]" },
  { name: "Airbnb", icon: IconBrandAirbnb, color: "text-[#FF5A5F]" },
  {
    name: "Linear",
    customIcon: () => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
      </svg>
    ),
    color: "text-slate-900",
  },
]

const secondRowClients: Client[] = [
  {
    name: "Vercel",
    customIcon: () => (
      <svg viewBox="0 0 24 24" className="size-4.5 fill-current">
        <path d="M24 22.525H0L12 1.748L24 22.525Z" />
      </svg>
    ),
    color: "text-black",
  },
  {
    name: "Supabase",
    customIcon: () => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-5 text-[#3ECF8E]"
      >
        <path d="M13.35 2.1a1.2 1.2 0 0 0-1.74 0l-9.6 9.6a1.2 1.2 0 0 0 .85 2.05h7.35l-1.2 8.15a1.2 1.2 0 0 0 2.04.85l9.6-9.6a1.2 1.2 0 0 0-.85-2.05h-7.35l1.2-8.15z" />
      </svg>
    ),
    color: "text-[#3ECF8E]",
  },
  {
    name: "Resend",
    customIcon: () => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    ),
    color: "text-slate-900",
  },
  {
    name: "Raycast",
    customIcon: () => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        className="size-5"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
    color: "text-[#FF6363]",
  },
  {
    name: "Tailwind CSS",
    customIcon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M12 6.036c-2.286 0-3.428 1.143-3.428 3.429 0 2.285 1.142 3.428 3.428 3.428m0-6.857c2.286 0 3.428 1.143 3.428 3.429 0 2.285-1.142 3.428-3.428 3.428m-3.428-3.429c0-2.285 1.142-3.428 3.428-3.428 2.286 0 3.428 1.143 3.428 3.428m-6.856 6.857c0-2.285 1.142-3.428 3.428-3.428 2.286 0 3.428 1.143 3.428 3.428m-3.428 3.429c-2.286 0-3.428 1.143-3.428 3.429 0 2.285 1.142 3.428 3.428 3.428m0-6.857c2.286 0 3.428 1.143 3.428 3.429 0 2.285-1.142 3.428-3.428 3.428m-3.428-3.429c0-2.285 1.142-3.428 3.428-3.428 2.286 0 3.428 1.143 3.428 3.428" />
      </svg>
    ),
    color: "text-[#38BDF8]",
  },
]

function ClientCard({ name, icon: Icon, customIcon, color }: Client) {
  return (
    <div className="flex items-center gap-1 px-6 py-2">
      <div
        className={cn(
          "flex size-5 shrink-0 items-center justify-center",
          color
        )}
      >
        {Icon ? <Icon className="size-5" /> : customIcon?.()}
      </div>
      <span className="text-sm font-semibold tracking-tight text-slate-700">
        {name}
      </span>
    </div>
  )
}

export default function ClientLogo() {
  return (
    <section className="w-full py-20 md:py-24 bg-white">
      <div className="containerX">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-[11px] font-bold tracking-[0.25em] text-slate-400 uppercase">
            trusted by progressive teams worldwide
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-2">
          {/* Row 1 */}
          <Marquee className="mb-3 [--duration:35s]" pauseOnHover>
            {firstRowClients.map((client) => (
              <ClientCard key={client.name} {...client} />
            ))}
          </Marquee>

          {/* Row 2 */}
          <Marquee className="[--duration:35s]" reverse pauseOnHover>
            {secondRowClients.map((client) => (
              <ClientCard key={client.name} {...client} />
            ))}
          </Marquee>

          {/* Left Gradient Fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-1/6 bg-linear-to-r from-white to-transparent" />

          {/* Right Gradient Fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-1/6 bg-linear-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  )
}
