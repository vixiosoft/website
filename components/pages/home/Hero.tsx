"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  const pillarHeights = [
    160, 140, 120, 100, 80, 65, 52, 42, 34, 28, 25, 28, 34, 42, 52, 65, 80, 100,
    120, 140, 160,
  ]

  // Animation variants for staggered entrance of text elements
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
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28">
      {/* --- 1. BRAND-COLORED GLOWING PILLARS --- */}
      {/* Defined with h-full so percentage heights resolve correctly relative to the entire hero section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex h-full w-full items-end">
        {pillarHeights.map((height, i) => (
          <motion.div
            key={i}
            className="flex-1 blur-[1px] filter"
            style={{
              height: `${height}%`,
              background:
                "linear-gradient(to top, rgba(255, 77, 0, 0.32) 0%, rgba(255, 77, 0, 0.05) 40%, transparent 100%)",
            }}
          />
        ))}
      </div>

      {/* --- 2. HERO INNER CONTENT --- */}
      <div className="relative z-10 mx-auto flex w-full max-w-300 flex-col justify-between px-6">
        {/* Main Content Area */}
        <motion.main
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-[850px] flex-col items-center py-10 text-center md:py-16"
        >
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl leading-[1.1] font-bold tracking-[-0.03em] text-ext-text-primary sm:text-5xl md:text-[4.5rem]"
          >
            Crafting <span className="text-ext-accent">digital products</span>
            <br className="hidden md:block" /> that actually matter
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mb-9 max-w-[640px] text-[0.95rem] leading-relaxed text-ext-text-secondary sm:text-base md:text-[1.05rem]"
          >
            From concept and design to engineering and cloud scaling, we build
            high-performance digital systems in less than{" "}
            <strong className="font-semibold text-ext-text-primary">
              4 weeks
            </strong>
            .
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-ext-text-primary px-8 py-3.5 text-[0.95rem] font-semibold text-white shadow-sm transition-all hover:opacity-95 hover:shadow-md active:scale-[0.98] sm:w-auto"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 10 4 15 9 20"></polyline>
                <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
              </svg>
              Start Project
            </Link>
            <Link
              href="/works"
              className="inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-ext-text-primary transition-colors hover:text-ext-accent"
            >
              Learn more <span className="font-mono">↓</span>
            </Link>
          </motion.div>
        </motion.main>
      </div>
    </section>
  )
}
