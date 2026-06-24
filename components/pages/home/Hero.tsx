"use client"

import {
  IconArrowRight,
  IconBoxMultiple,
  IconCircle,
  IconDiamond,
  IconTrendingUp,
} from "@tabler/icons-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  return (
    <section className="relative w-full overflow-hidden pt-10 pb-16 md:pt-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 pt-16 md:pt-24"
        >
          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="max-w-4xl font-sans text-6xl leading-[1.05] font-bold tracking-tight text-[#0f1134] sm:text-6xl md:text-7xl lg:text-[76px]"
          >
            Software That Works <br /> The Way You Think.
          </motion.h1>

          {/* Subtitle & Contact Us Row */}
          <motion.div
            variants={itemVariants}
            className="mt-4 flex w-full max-w-4xl flex-col justify-between gap-8 md:flex-row md:items-end"
          >
            <p className="max-w-lg text-base leading-relaxed font-normal text-slate-500 md:text-lg">
              Launch stunning, responsive sites without hiring designers or
              developers — perfect for early-stage startups and growing SaaS
              companies.
            </p>
            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-1.5 pb-1 text-sm font-bold text-slate-900 transition-colors hover:text-indigo-600"
            >
              Contact us
              <IconArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Client Logos Strip */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex w-full flex-wrap items-center justify-between gap-x-12 gap-y-6 border-t border-slate-100/90 pt-8 md:mt-24"
          >
            {/* Startup Logo */}
            <div className="flex items-center gap-2 text-slate-400/70 select-none">
              <IconTrendingUp className="size-5 stroke-[2]" />
              <span className="font-sans text-lg font-bold tracking-tight">
                startup
              </span>
            </div>

            {/* Company Logo */}
            <div className="flex items-center gap-2 text-slate-400/70 select-none">
              <IconBoxMultiple className="size-5 stroke-[2]" />
              <span className="font-sans text-lg font-bold tracking-tight">
                company
              </span>
            </div>

            {/* Business Logo */}
            <div className="flex items-center gap-2 text-slate-400/70 select-none">
              <IconDiamond className="size-5 stroke-[2]" />
              <span className="font-sans text-lg font-bold tracking-tight">
                business
              </span>
            </div>

            {/* Agency Logo */}
            <div className="flex items-center gap-2 text-slate-400/70 select-none">
              <IconCircle className="size-5 stroke-[2.5]" />
              <span className="font-sans text-lg font-bold tracking-tight">
                agency
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
