"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CtaBanner() {
  const transitionEase = [0.16, 1, 0.3, 1] as [number, number, number, number]

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: transitionEase,
        staggerChildren: 0.1,
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
        ease: transitionEase,
      },
    },
  }

  return (
    <section className="relative w-full overflow-hidden bg-slate-50/50 pb-6 sm:pb-12 md:pb-20">
      <div className="containerX">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerVariants}
          className="relative mx-auto w-full overflow-hidden rounded-3xl border bg-white p-8 text-center sm:p-12 md:p-16 lg:p-20"
        >
          {/* Subtle light violet grid overlay */}
          <div
            className="pointer-events-none absolute inset-0 bg-[size:52px_52px] opacity-80"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(124, 58, 237, 0.07) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(124, 58, 237, 0.07) 1px, transparent 1px)
              `,
              maskImage:
                "radial-gradient(ellipse at center, black 70%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 70%, transparent 100%)",
            }}
          />

          {/* Glowing violet background at center */}
          <div
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, rgba(139, 92, 246, 0.09) 0%, rgba(168, 85, 247, 0.03) 40%, transparent 75%)",
            }}
          />

          {/* Content Area */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Starvy Logo Icon */}
            <motion.div
              variants={itemVariants}
              className="mb-8 flex items-center justify-center"
            >
              <div className="grid size-11 grid-cols-2 gap-1.5 rounded-2xl border border-violet-100/80 bg-violet-50 p-2.5 text-violet-600 shadow-[0_2px_8px_rgba(124,58,237,0.08)]">
                <div className="rounded-br-2xs rounded-tl-md bg-current" />
                <div className="rounded-bl-2xs rounded-tr-md bg-current" />
                <div className="rounded-tr-2xs rounded-bl-md bg-current" />
                <div className="rounded-tl-2xs rounded-br-md bg-current" />
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              variants={itemVariants}
              className="max-w-2xl text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl md:leading-[1.15]"
            >
              Ready to Transform <br /> Your Scheduling?
            </motion.h2>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-lg text-xs leading-relaxed text-slate-500 sm:text-sm md:text-[0.95rem] md:leading-relaxed"
            >
              Join thousands of professionals who have already streamlined their
              scheduling with our AI Assistant.
            </motion.p>

            {/* Get Started Button */}
            <motion.div variants={itemVariants} className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(99,102,241,0.25)] transition-all duration-300 hover:scale-[1.02] hover:from-violet-500 hover:to-indigo-500 hover:shadow-[0_12px_35px_rgba(99,102,241,0.35)] active:scale-[0.98]"
              >
                <span>Get Started</span>
                <svg
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
