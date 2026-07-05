"use client"

import { IconArrowUpRight } from "@tabler/icons-react"
import { motion, Variants } from "framer-motion"
import Link from "next/link"

interface WorkItem {
  id: string
  title: string
  category: string
  image: string
  href: string
}

const works: WorkItem[] = [
  {
    id: "creative-agency",
    title: "Creative Agency Showcase",
    category: "Branding & Web Design",
    image: "/images/work-creative.png",
    href: "/works/creative-agency",
  },
  {
    id: "saas-analytics",
    title: "SaaS Analytics Platform",
    category: "Development & Cloud Scaling",
    image: "/images/work-saas.png",
    href: "/works/saas-analytics",
  },
  {
    id: "food-delivery",
    title: "Food Delivery Application",
    category: "UI/UX & Mobile Interface",
    image: "/images/work-food.png",
    href: "/works/food-delivery",
  },
]

function WorkCard({ work, index }: { work: WorkItem; index: number }) {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="group relative aspect-[4/3] w-full rounded-3xl duration-500"
    >
      <Link href={work.href} className="relative block size-full">
        {/* Work Visual Image Wrapper (rounded to clip zoom effect) */}
        <div className="absolute inset-0 z-0 size-full overflow-hidden rounded-3xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            src={work.image}
            alt={work.title}
            variants={{
              hover: { scale: 1.05 },
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="size-full object-cover"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-black/5 opacity-100 transition-opacity duration-500 group-hover:bg-black/10" />
        </div>

        {/* Card Border Overlay (hides original sharp corners and draws continuous border) */}
        <div className="pointer-events-none absolute inset-0 z-20 rounded-3xl border border-slate-200/80" />

        {/* Notched Corner Cutout SVG Overlay (covers card border in corner and draws curved border with beautiful gap) */}
        <div className="pointer-events-none absolute right-[-1px] bottom-[-1px] z-30 size-28 select-none">
          <svg
            viewBox="0 0 112 112"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 size-full"
          >
            {/* White corner fill to mask original card border and background */}
            <path
              d="M 0 112 C 10 112, 20 102, 20 92 C 20 45, 45 20, 92 20 C 102 20, 112 10, 112 0 V 112 H 0 Z"
              className="fill-white"
            />
            {/* Notched border stroke to match card border */}
            <path
              d="M 0 112 C 10 112, 20 102, 20 92 C 20 45, 45 20, 92 20 C 102 20, 112 10, 112 0"
              className="stroke-slate-200/80"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Floating Circle Button (positioned to create a uniform 14px gap around the notch curve) */}
        <div className="absolute right-4 bottom-4 z-40">
          <motion.div
            variants={{
              hover: { scale: 1.08 },
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex size-14 items-center justify-center rounded-full bg-[#1a1b3a] text-white shadow-md transition-colors duration-300 group-hover:bg-ext-accent active:scale-95"
          >
            <IconArrowUpRight className="size-5 stroke-[2.5]" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function Work() {
  const transitionEase = [0.16, 1, 0.3, 1] as [number, number, number, number]

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  return (
    <section className="relative w-full overflow-hidden bg-white py-20 select-none md:py-28">
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
          className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div className="flex flex-col items-start gap-4">
            <span className="mb-4 inline-flex items-center rounded-full border border-slate-200/80 bg-slate-50 px-3.5 py-1.5 text-[11px] font-medium tracking-widest text-slate-500 uppercase">
              Our Work
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Our Latest Work
            </h2>
            <p className="max-w-[580px] text-sm leading-relaxed text-slate-500 md:text-[0.95rem]">
              Our tailored solutions empower your online presence, ensuring
              growth and success in the digital landscape.
            </p>
          </div>

          <div className="flex items-end">
            <Link
              href="/works"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ext-text-primary px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-ext-accent hover:shadow-md active:scale-[0.98]"
            >
              <span>See more</span>
              <IconArrowUpRight className="size-4 stroke-[2.5]" />
            </Link>
          </div>
        </motion.div>

        {/* --- 2. WORKS GRID --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4"
        >
          {works.map((work, index) => (
            <WorkCard key={work.id} work={work} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
