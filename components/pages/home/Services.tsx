"use client"

import { IconArrowRight } from "@tabler/icons-react"
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion"
import * as React from "react"

import { cn } from "@/lib/utils"

interface ServiceItem {
  id: string
  title: string
  shortDesc: string
  longDesc: string
  renderCard: () => React.ReactNode
}

const services: ServiceItem[] = [
  {
    id: "branding",
    title: "Branding",
    shortDesc: "Brand Strategy & Visual Identity",
    longDesc:
      "Creating cohesive visual identities, brand guidelines, and unique logo packages that tell your story.",
    renderCard: () => (
      <div className="flex size-full flex-col justify-between p-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <span className="font-mono text-xs font-bold tracking-widest text-slate-400 uppercase">
            Design System
          </span>
          <span className="text-xs font-semibold text-slate-800">v0.1.0</span>
        </div>
        <div className="my-4 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full bg-ext-accent shadow-sm" />
            <div className="size-8 rounded-full bg-violet shadow-sm" />
            <div className="size-8 rounded-full bg-sky shadow-sm" />
            <div className="size-8 rounded-full bg-[#1a1b3a] shadow-sm" />
          </div>
          <div className="mt-2 space-y-1.5">
            <div className="h-2 w-28 rounded-full bg-slate-200" />
            <div className="h-2 w-20 rounded-full bg-slate-100" />
          </div>
        </div>
        <div className="flex items-baseline justify-between border-t border-slate-100 pt-4">
          <span className="font-serif text-3xl font-bold text-slate-800">
            Aa
          </span>
          <span className="font-sans text-sm text-slate-500">Geist Sans</span>
        </div>
      </div>
    ),
  },
  {
    id: "development",
    title: "Development",
    shortDesc: "High-Performance Engineering",
    longDesc:
      "Engineering high-performance web applications, server architectures, and scalable cloud APIs.",
    renderCard: () => (
      <div className="flex size-full flex-col justify-between bg-slate-950 p-5 font-mono text-xs text-slate-300">
        <div className="flex items-center gap-1.5 border-b border-slate-800 pb-3">
          <div className="size-2.5 rounded-full bg-rose-500" />
          <div className="size-2.5 rounded-full bg-amber-500" />
          <div className="size-2.5 rounded-full bg-emerald-500" />
          <span className="ml-2 text-[10px] text-slate-500">vixiosoft.ts</span>
        </div>
        <div className="my-4 flex-1 space-y-2 text-[11px] leading-relaxed">
          <div>
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-400">vixiosoft</span> = {"{"}
          </div>
          <div className="pl-4">
            <span className="text-slate-400">speed:</span>{" "}
            <span className="text-emerald-400">&apos;100fps&apos;</span>,
          </div>
          <div className="pl-4">
            <span className="text-slate-400">quality:</span>{" "}
            <span className="text-emerald-400">&apos;impeccable&apos;</span>,
          </div>
          <div className="pl-4">
            <span className="text-slate-400">scale:</span>{" "}
            <span className="text-emerald-400">&apos;infinite&apos;</span>
          </div>
          <div>{"};"}</div>
        </div>
        <div className="flex items-center gap-1 border-t border-slate-900 pt-3 text-[10px] text-emerald-400">
          <span>$</span>
          <span className="animate-pulse">npm run build:success_</span>
        </div>
      </div>
    ),
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    shortDesc: "Interactive Interface Design",
    longDesc:
      "Designing intuitive user interfaces and smooth interactions for a frictionless experience.",
    renderCard: () => (
      <div className="flex size-full flex-col justify-between p-5">
        {/* Mock Browser Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex gap-1.5">
            <div className="size-2 rounded-full bg-slate-200" />
            <div className="size-2 rounded-full bg-slate-200" />
            <div className="size-2 rounded-full bg-slate-200" />
          </div>
          <div className="h-3 w-32 rounded-full bg-slate-100" />
          <div className="size-2 rounded-full bg-slate-200" />
        </div>
        {/* Mock Content */}
        <div className="my-3 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-teal-500/10 text-teal-600">
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-2 w-20 rounded-full bg-slate-200" />
            <div className="h-1.5 w-16 rounded-full bg-slate-100" />
          </div>
        </div>
        {/* Mock UI widgets */}
        <div className="flex items-center justify-between rounded-xl border border-teal-100/50 bg-teal-50/50 p-3">
          <span className="text-[10px] font-bold tracking-wider text-teal-700 uppercase">
            Active Mode
          </span>
          <div className="flex h-4.5 w-8 justify-end rounded-full bg-teal-500 p-0.5">
            <div className="size-3.5 rounded-full bg-white shadow-xs" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "graphic",
    title: "Graphic Design",
    shortDesc: "Visual Content & Art",
    longDesc:
      "Crafting beautiful marketing assets, custom icons, typography, and promotional media.",
    renderCard: () => (
      <div className="flex size-full items-center justify-center p-6">
        <div className="relative flex size-32 items-center justify-center">
          <div className="animate-spin-around ation-duration-[15s] absolute inset-0 rounded-full border-2 border-dashed border-slate-200" />
          <div className="absolute size-24 rounded-full bg-linear-to-tr from-orange-400 to-rose-400 opacity-80 blur-xs" />
          <div className="absolute flex size-16 rotate-12 items-center justify-center rounded-xl bg-white text-slate-800 shadow-lg transition-transform hover:rotate-0">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="size-6 text-ext-accent"
            >
              <path d="M12 19l7-7 3 3-10 10-3-3zM19 12L5 22M2 2h20v4H2z" />
            </svg>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "seo",
    title: "SEO",
    shortDesc: "Search & Growth Optimization",
    longDesc:
      "Optimizing search engine visibility, performance audit, domain authority, and organic traffic.",
    renderCard: () => (
      <div className="flex size-full flex-col justify-between p-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <span className="font-mono text-[10px] font-bold text-slate-400 uppercase">
            Performance
          </span>
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-600">
            +148%
          </span>
        </div>
        {/* Simple Chart */}
        <div className="my-4 flex h-16 items-end gap-2.5 px-2">
          <div className="h-6 w-full rounded-xs bg-slate-100" />
          <div className="h-10 w-full rounded-xs bg-slate-100" />
          <div className="h-8 w-full rounded-xs bg-slate-100" />
          <div className="h-12 w-full rounded-xs bg-slate-100" />
          <div className="h-16 w-full rounded-xs bg-ext-accent/80" />
        </div>
        <div className="flex items-center justify-between text-[10px] text-slate-500">
          <span>Organic Traffic</span>
          <span className="font-semibold text-slate-800">42.8k / mo</span>
        </div>
      </div>
    ),
  },
]

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Motion values for smooth cursor-follow animation
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 28, stiffness: 220 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    // Shift slightly to offset from pointer in viewport coordinates
    mouseX.set(e.clientX + 25)
    mouseY.set(e.clientY - 120)
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredIdx(null)}
      className="relative w-full overflow-hidden bg-white py-20 select-none md:py-28"
    >
      <div className="containerX">
        {/* --- 1. SECTION HEADER --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
          className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10"
        >
          <div className="md:col-span-5">
            <span className="mb-4 inline-flex items-center rounded-full border border-slate-200/80 bg-slate-50 px-3.5 py-1.5 text-[11px] font-medium tracking-widest text-slate-500 uppercase">
              Our Service
            </span>
            <h2 className="text-3xl leading-[1.1] font-extrabold tracking-tight text-slate-900 md:text-5xl">
              What <span className="text-ext-accent">Services</span> <br />{" "}
              We&apos;re Offering
            </h2>
          </div>
          <div className="flex items-end md:col-span-7">
            <p className="ml-auto max-w-135 text-sm leading-relaxed text-slate-500 md:text-[0.95rem]">
              We offer services that can help businesses improve their
              visibility and business reputation online, expand market reach,
              and increase turnover through effective digital strategies.
              Following are the services we provide.
            </p>
          </div>
        </motion.div>

        {/* --- 2. SERVICES LIST --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="relative mt-8 border-t border-slate-200/80"
        >
          {services.map((service, index) => {
            const isHovered = hoveredIdx === index
            const isAnyHovered = hoveredIdx !== null

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                variants={{
                  hidden: { opacity: 0, y: 35 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className="group relative flex cursor-pointer flex-col justify-between border-b border-slate-200/80 py-8 md:flex-row md:items-center md:py-10"
              >
                {/* Left Side: Index & Title */}
                <div className="flex items-center gap-6 md:w-1/3">
                  <span
                    className={cn(
                      "font-mono text-xs font-bold transition-colors duration-300",
                      isHovered ? "text-ext-accent" : "text-slate-400"
                    )}
                  >
                    /0{index + 1}
                  </span>
                  <h3
                    className={cn(
                      "flex items-center gap-2 text-xl font-bold tracking-tight transition-all duration-300 md:text-3xl",
                      isHovered
                        ? "translate-x-2 text-slate-900"
                        : isAnyHovered
                          ? "text-slate-300"
                          : "text-slate-800"
                    )}
                  >
                    {service.title}
                    {isHovered && (
                      <motion.span
                        layoutId="activeDot"
                        className="inline-block size-2 rounded-xs bg-ext-accent"
                      />
                    )}
                  </h3>
                </div>

                {/* Center: Long Description (Framer Motion Slide-In) */}
                <div className="mt-3 md:mt-0 md:w-1/2">
                  <p
                    className={cn(
                      "text-xs leading-relaxed transition-all duration-300 md:text-sm",
                      isHovered
                        ? "translate-x-0 text-slate-600 opacity-100"
                        : "pointer-events-none hidden -translate-x-4 text-slate-400 opacity-0 md:block"
                    )}
                  >
                    {service.longDesc}
                  </p>
                </div>

                {/* Right Side: Circular Arrow Icon */}
                <div className="mt-4 flex justify-end md:mt-0 md:w-16">
                  <div
                    className={cn(
                      "flex size-10 items-center justify-center rounded-full border transition-all duration-300",
                      isHovered
                        ? "scale-110 -rotate-45 border-ext-accent bg-ext-accent text-white"
                        : "border-slate-200 text-slate-400"
                    )}
                  >
                    <IconArrowRight className="size-4 stroke-[2.5]" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* --- 3. CURSOR-FOLLOWING FLOAT CARDS --- */}
      <div className="hidden md:block">
        <AnimatePresence>
          {hoveredIdx !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              exit={{ opacity: 0, scale: 0.85, rotate: -3 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                left: cursorX,
                top: cursorY,
              }}
              className="pointer-events-none fixed z-50 size-60 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.08)] backdrop-blur-md"
            >
              {services[hoveredIdx].renderCard()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
