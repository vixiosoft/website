"use client"

import {
  IconArrowUpRight,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
  IconSun,
} from "@tabler/icons-react"
import Link from "next/link"
import * as React from "react"

export default function Footer() {
  const [time, setTime] = React.useState("")

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      // Format as h:mm A (e.g., 11:36 PM)
      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }
      setTime(now.toLocaleTimeString("en-US", options))
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="w-full pt-4 pb-8">
      {/* Giant Inset Card */}
      <div className="container2X">
        <div className="rounded-[2.5rem] bg-[#f3f4f6] p-8 pb-0">
          {/* Top Content Row */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Column 1: Intro Text */}
            <div className="flex flex-col justify-start lg:col-span-4">
              <p className="max-w-[280px] font-sans text-xl leading-snug font-bold tracking-tight text-slate-900 md:text-2xl">
                cynigen is independent digital studio and software company
              </p>
            </div>

            {/* Column 2: Explore Links */}
            <div className="flex flex-col gap-4 lg:col-span-2">
              <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                Explore
              </span>
              <div className="flex flex-col gap-2.5 text-sm font-semibold text-slate-800">
                <Link
                  href="/bio"
                  className="transition-colors hover:text-indigo-600"
                >
                  Bio
                </Link>
                <Link
                  href="/newsletter"
                  className="transition-colors hover:text-indigo-600"
                >
                  Newsletter
                </Link>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-indigo-600"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Column 3: Follow Me Links */}
            <div className="flex flex-col gap-4 lg:col-span-3">
              <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                Follow me
              </span>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm font-semibold text-slate-800">
                {/* X */}
                <Link
                  href="https://x.com"
                  target="_blank"
                  className="flex items-center gap-1.5 transition-colors hover:text-indigo-600"
                >
                  <IconBrandX className="size-4 text-slate-500" />
                  <span>@cynigen</span>
                </Link>
                {/* Instagram */}
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="flex items-center gap-1.5 transition-colors hover:text-indigo-600"
                >
                  <IconBrandInstagram className="size-4 text-pink-600" />
                  <span>@cynigen</span>
                </Link>
                {/* GitHub */}
                <Link
                  href="https://github.com"
                  target="_blank"
                  className="flex items-center gap-1.5 transition-colors hover:text-indigo-600"
                >
                  <IconBrandGithub className="size-4 text-slate-800" />
                  <span>@cynigen</span>
                </Link>
                {/* YouTube */}
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  className="flex items-center gap-1.5 transition-colors hover:text-indigo-600"
                >
                  <IconBrandYoutube className="size-4 text-red-600" />
                  <span>@cynigen</span>
                </Link>
                {/* Figma */}
                <Link
                  href="https://figma.com"
                  target="_blank"
                  className="flex items-center gap-1.5 transition-colors hover:text-indigo-600"
                >
                  <IconBrandFigma className="size-4 text-orange-600" />
                  <span>@cynigen</span>
                </Link>
              </div>
            </div>

            {/* Column 4: Contact & Service CTA Blocks */}
            <div className="flex flex-col gap-6 lg:col-span-3">
              {/* Call Cynigen */}
              <div className="flex flex-col gap-1">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2"
                >
                  <span className="text-lg font-bold text-[#f97316] group-hover:underline">
                    Call Cynigen
                  </span>
                  <span className="inline-flex size-6 items-center justify-center rounded-full bg-[#f97316] text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <IconArrowUpRight className="size-3.5 stroke-[3]" />
                  </span>
                </Link>
                <span className="text-xs font-semibold text-slate-500">
                  Let's work together
                </span>
              </div>

              {/* Products & Services */}
              <div className="flex flex-col gap-1">
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-2"
                >
                  <span className="text-lg font-bold text-slate-900 group-hover:underline">
                    Products & Tools
                  </span>
                  <span className="inline-flex size-6 items-center justify-center rounded-full bg-slate-900 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <IconArrowUpRight className="size-3.5 stroke-[3]" />
                  </span>
                </Link>
                <span className="text-xs font-semibold text-slate-500">
                  Creative solutions
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Giant Cropped Text Banner */}
          <div className="pointer-events-none relative mt-16 h-36 w-full overflow-hidden select-none sm:h-48 md:mt-24 md:h-64">
            <h2 className="absolute right-0 bottom-[-15vw] left-0 text-center text-[19vw] leading-none font-black tracking-tighter text-slate-900/95 sm:bottom-[-10vw] md:bottom-[-9vw] lg:bottom-[-7vw]">
              cynigen
            </h2>
          </div>

          {/* Inset Footer Bottom Bar */}
          <div className="mt-2 flex flex-col items-center justify-between gap-4 border-t border-slate-200/60 py-6 text-[11px] font-semibold text-slate-500 sm:flex-row">
            {/* Left info */}
            <div className="flex items-center gap-2">
              <span>Cynigen © 2026</span>
              <span className="text-slate-300">•</span>
              <Link
                href="/privacy"
                className="transition-colors hover:text-slate-800"
              >
                Privacy Policy
              </Link>
            </div>

            {/* Right Live Info */}
            <div className="flex items-center gap-2">
              <span>Bangladesh</span>
              <span className="text-slate-300">•</span>
              <span>{time || "11:36 PM"}</span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1">
                <span>28°C</span>
                <IconSun className="size-3 fill-orange-500/20 text-orange-500" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
