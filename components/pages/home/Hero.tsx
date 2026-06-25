"use client"

import { Button } from "@/components/ui/button"
import { IMAGES } from "@/constants/assets"
import { IconArrowRight } from "@tabler/icons-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.5,
      },
    },
  }

  return (
    <section className="relative w-full overflow-hidden bg-white pt-32 pb-20 md:pt-52">
      <div className="container2X">
        {/* Main Header/Text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex w-full gap-10 text-left"
        >
          {/* Heading with inline graphics */}
          <motion.h1
            variants={itemVariants}
            className="max-w-4xl font-sans text-5xl leading-[1.03] font-semibold tracking-tighter text-neutral-900 sm:text-6xl md:text-8xl"
          >
            Crafting{" "}
            <span className="text-ext-accent">Digital Experiences </span>
            That Matter
          </motion.h1>

          <div className="ml-auto w-full max-w-sm">
            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mx-auto text-lg leading-relaxed text-neutral-500 md:text-xl"
            >
              From strategy and design to development and scaling, we create
              digital products that make an impact.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8">
              <Button
                size="lg"
                asChild
                className="group flex h-11.5 max-w-max cursor-pointer items-center gap-1.5 rounded-full bg-neutral-900 px-7 text-sm font-semibold text-white shadow-md transition-all hover:bg-neutral-800 hover:shadow-neutral-900/20 active:scale-[0.98]"
              >
                <Link href="/pricing">
                  View Plans
                  <IconArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
       
      </div>
    </section>
  )
}
