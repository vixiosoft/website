"use client"

import { IMAGES } from "@/constants/assets"
import { IconArrowUpRight, IconShieldCheck } from "@tabler/icons-react"
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  Variants,
} from "framer-motion"
import Link from "next/link"
import * as React from "react"

interface ProductItem {
  id: string
  title: string
  category: string
  image: string
  colSpan: string
  heightClass: string
  href: string
}

const products: ProductItem[] = [
  {
    id: "pulse",
    title: "Pulse",
    category: "Analytics",
    image: IMAGES.product1,
    colSpan: "md:col-span-4",
    heightClass: "h-[380px] md:h-[440px]",
    href: "/products/pulse",
  },
  {
    id: "sync",
    title: "Sync",
    category: "Collaboration",
    image: IMAGES.product2,
    colSpan: "md:col-span-2",
    heightClass: "h-[380px] md:h-[440px]",
    href: "/products/sync",
  },
  {
    id: "flow",
    title: "Flow",
    category: "Automation",
    image: IMAGES.product3,
    colSpan: "md:col-span-3",
    heightClass: "h-[380px] md:h-[440px]",
    href: "/products/flow",
  },
  {
    id: "shield",
    title: "Shield",
    category: "Security",
    image: IMAGES.product4,
    colSpan: "md:col-span-3",
    heightClass: "h-[380px] md:h-[440px]",
    href: "/products/shield",
  },
  {
    id: "deploy",
    title: "Deploy",
    category: "Infrastructure",
    image: IMAGES.product5,
    colSpan: "md:col-span-2",
    heightClass: "h-[320px] md:h-[360px]",
    href: "/products/deploy",
  },
  {
    id: "insight",
    title: "Insight",
    category: "Telemetry",
    image: IMAGES.product6,
    colSpan: "md:col-span-2",
    heightClass: "h-[320px] md:h-[360px]",
    href: "/products/insight",
  },
]

function ProductCard({
  product,
  cardVariants,
}: {
  product: ProductItem
  cardVariants: Variants
}) {
  const [isHovered, setIsHovered] = React.useState(false)
  const cardRef = React.useRef<HTMLDivElement>(null)

  // Motion values for tracking cursor positions
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Configure smooth springs for organic pointer tracking
  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    // Initialize coordinate positions instantly to avoid laggy pull-in from (0,0)
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
    setIsHovered(true)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`group relative w-full ${product.heightClass} ${product.colSpan} overflow-hidden rounded-3xl border border-slate-200/75 bg-slate-50 shadow-xs transition-[border-color,box-shadow] duration-500 hover:border-ext-accent/30 hover:shadow-xl md:hover:cursor-none`}
    >
      <Link
        href={product.href}
        className="absolute inset-0 z-20 block size-full cursor-pointer md:cursor-none"
      >
        {/* Product Visual/Image */}
        <div className="absolute inset-0 size-full">
          {/* Overlay gradient to ensure text legibility */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent transition-opacity duration-500 group-hover:from-slate-950/90 group-hover:via-slate-950/35" />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.title}
            className="size-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:blur-[6px]"
          />
        </div>

        {/* Overlaid Title */}
        <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-8">
          <h3 className="text-xl font-bold tracking-tight text-white transition-transform duration-500 group-hover:translate-x-1 md:text-2xl">
            {product.title}
          </h3>
        </div>
      </Link>

      {/* Custom Follower Cursor (Glass Pill shape) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="pointer-events-none absolute z-30 hidden items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-[11px] font-extrabold tracking-wider text-white uppercase shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] backdrop-blur-md md:flex"
            style={{
              left: smoothX,
              top: smoothY,
              x: "-50%",
              y: "-50%",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            <span>Visit</span>
            <IconArrowUpRight className="size-3.5" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Products() {
  const transitionEase = [0.16, 1, 0.3, 1] as [number, number, number, number]

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: transitionEase,
      },
    },
  }

  return (
    <section className="relative w-full overflow-hidden border-t border-slate-100 bg-white py-20 select-none md:py-28">
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
          className="mb-16 md:mb-20"
        >
          <span className="mb-4 inline-flex items-center rounded-full border border-slate-200/80 bg-slate-50 px-3.5 py-1.5 text-[11px] font-medium tracking-widest text-slate-500 uppercase">
            Products
          </span>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl md:leading-[1.15]">
            Tools that <span className="text-ext-accent">compound</span> your
            team&apos;s output
          </h2>
        </motion.div>

        {/* --- 2. BENTO GRID --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-3 md:grid-cols-6"
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cardVariants={cardVariants}
            />
          ))}

          {/* Card 7: Suite Info & See All (Light Theme Stat Card) */}
          <motion.div
            variants={cardVariants}
            className="group relative flex h-[320px] w-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/75 bg-slate-50/50 p-8 shadow-xs transition-all duration-500 hover:border-ext-accent/30 hover:shadow-xl md:col-span-2 md:h-[360px]"
          >
            {/* Glowing Accent Spot */}
            <div className="absolute -top-12 -right-12 size-40 rounded-full bg-ext-accent/5 blur-3xl transition-opacity duration-500 group-hover:bg-ext-accent/10" />

            <div className="flex flex-col">
              <span className="font-mono text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                Suite Overview
              </span>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-6xl font-extrabold tracking-tight text-ext-text-primary md:text-7xl">
                  6+
                </span>
                <span className="text-sm font-semibold text-slate-500">
                  products in suite
                </span>
              </div>
              <p className="mt-3 max-w-md text-xs leading-relaxed text-slate-500">
                A cohesive ecosystem engineered to accelerate development, secure
                data streams, and orchestrate serverless scaling.
              </p>
            </div>

            <Link
              href="/works"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ext-text-primary px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-ext-accent hover:shadow-md active:scale-[0.98] w-fit"
            >
              <span>See All Products</span>
              <IconArrowUpRight className="size-4 stroke-[2.5]" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
