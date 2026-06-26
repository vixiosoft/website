"use client"

import { motion, useInView, Variants } from "framer-motion"
import * as React from "react"

interface AnimatedCounterProps {
  value: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
}

function AnimatedCounter({
  value,
  duration = 1.5,
  suffix = "",
  prefix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  React.useEffect(() => {
    if (!inView) return

    let startTime: number
    const startValue = 0
    const endValue = value

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      // Easing: easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      const currentValue = startValue + easeProgress * (endValue - startValue)

      if (ref.current) {
        ref.current.textContent = `${prefix}${currentValue.toFixed(decimals)}${suffix}`
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      }
    }

    requestAnimationFrame(updateCounter)
  }, [inView, value, duration, prefix, suffix, decimals])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}0{suffix}
    </span>
  )
}

export default function WhyChooseUs() {
  const transitionEase = [0.16, 1, 0.3, 1] as [number, number, number, number]

  // Container variants for staggered entrance reveal
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Card variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="relative w-full overflow-hidden border-t border-slate-100 bg-slate-50/50 py-20 select-none md:py-28">
      <div className="containerX">
        {/* --- 1. SECTION HEADER --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: transitionEase },
            },
          }}
          className="mb-16"
        >
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl md:leading-[1.15]">
            Why Partners <br />{" "}
            <span className="text-ext-accent">Choose Us</span>
          </h2>
        </motion.div>

        {/* --- 2. BENEFITS GRID --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-3 md:h-[660px] md:grid-cols-3 md:grid-rows-4"
        >
          {/* Card 1: Cut Costs (div1 - spans 4 rows in col 1) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="group flex flex-col justify-between rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.015)] transition-[border-color,box-shadow] duration-300 hover:border-slate-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] md:col-start-1 md:row-span-4 md:row-start-1"
          >
            <div>
              <h3 className="text-lg font-bold text-slate-800">Cut Costs</h3>
              <p className="mt-4 text-xs leading-relaxed text-slate-500 md:text-[0.9rem]">
                We identify cost-saving opportunities without compromising value
                — from cloud auto-scaling policies to smart workspace resource
                allocation.
              </p>
            </div>
            <div className="mt-8 border-t border-slate-100 pt-6">
              <div className="font-sans text-5xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
                <AnimatedCounter value={2} suffix="x" />
              </div>
              <p className="mt-2 text-xs font-medium text-slate-400">
                Is an average result in cost optimization services.
              </p>
            </div>
          </motion.div>

          {/* Card 2: 20+ Partners (div2 - sits naturally at col 2, row 1) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="flex items-center justify-between rounded-3xl border border-slate-200/70 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.015)] transition-[border-color,box-shadow] duration-300 hover:border-slate-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] md:col-start-2 md:row-span-1 md:row-start-1"
          >
            <div className="flex -space-x-3.5">
              <div className="flex size-10 items-center justify-center rounded-full border-2 border-white bg-linear-to-tr from-orange-400 to-rose-400 text-[10px] font-bold text-white shadow-xs">
                A
              </div>
              <div className="flex size-10 items-center justify-center rounded-full border-2 border-white bg-linear-to-tr from-violet-500 to-indigo-500 text-[10px] font-bold text-white shadow-xs">
                K
              </div>
              <div className="flex size-10 items-center justify-center rounded-full border-2 border-white bg-linear-to-tr from-emerald-400 to-teal-500 text-[10px] font-bold text-white shadow-xs">
                S
              </div>
              <div className="flex size-10 items-center justify-center rounded-full border-2 border-white bg-linear-to-tr from-sky-400 to-blue-500 text-[10px] font-bold text-white shadow-xs">
                M
              </div>
            </div>
            <div className="text-right">
              <span className="font-sans text-lg font-extrabold tracking-tight text-slate-800 md:text-xl">
                <AnimatedCounter value={20} suffix="+" /> Partners
              </span>
            </div>
          </motion.div>

          {/* Card 3: Average Investment (div3 - spans 2 rows starting at col 2, row 2) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="group flex flex-col justify-between rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.015)] transition-[border-color,box-shadow] duration-300 hover:border-slate-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] md:col-start-2 md:row-span-2 md:row-start-2"
          >
            <div>
              <h3 className="text-lg font-bold text-slate-800">
                Average Investment
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-500 md:text-[0.9rem]">
                Even modest strategic investments can lead to visible
                improvements in efficiency and growth.
              </p>
            </div>
            <div className="mt-6 border-t border-slate-100 pt-5">
              <div className="font-sans text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
                <AnimatedCounter value={15} prefix="$" suffix="K" />
              </div>
            </div>
          </motion.div>

          {/* Card 5: Focus & Uptime (div5 - spans 3 rows starting at col 3, row 1) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="group flex flex-col justify-between rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.015)] transition-[border-color,box-shadow] duration-300 hover:border-slate-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] md:col-start-3 md:row-span-3 md:row-start-1"
          >
            <div>
              <div className="font-sans text-5xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
                <AnimatedCounter value={78} suffix="%" />
              </div>
              <p className="mt-2 text-xs font-semibold text-slate-500">
                Of businesses don&apos;t check their analytics regularly.
              </p>
            </div>
            <div className="mt-8 border-t border-slate-100 pt-6">
              <h3 className="text-lg font-bold text-slate-800">Focusing</h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-500 md:text-[0.9rem]">
                We help you build a data-driven culture. Forget about blind
                decisions and lost revenue.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Tailored Solutions (div4 - spans 2 columns starting at col 2, row 4) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4 }}
            className="group flex flex-col justify-center rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.015)] transition-[border-color,box-shadow] duration-300 hover:border-slate-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.03)] md:col-span-2 md:col-start-2 md:row-span-1 md:row-start-4 md:gap-2"
          >
            <h3 className="text-lg font-bold text-slate-800">
              Tailored Solutions
            </h3>
            <p className="text-xs leading-relaxed text-slate-500 md:text-[0.9rem]">
              We analyze your specific goals and challenges to build{" "}
              <span className="font-bold text-slate-700">
                solutions that truly fit
              </span>
              .
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
