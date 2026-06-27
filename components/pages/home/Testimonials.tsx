"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import { Marquee } from "@/components/ui/marquee"

interface TestimonialItem {
  quote: string
  name: string
  role: string
  avatar: string
}

const testimonialsRow1: TestimonialItem[] = [
  {
    quote:
      "Cynigen did an amazing job bringing our brand to life. From strategy to final assets, their team was incredibly professional, responsive, and supportive. The entire process was smooth, delivered on time, and completely stress-free.",
    name: "Tommy Lu",
    role: "Founder @ GoodGenes",
    avatar: "/images/avatar-tommy.png",
  },
  {
    quote:
      "Working with Cynigen was a fantastic experience from start to finish. They took the time to truly understand our product vision and delivered high-quality results at a very competitive price. Highly recommended.",
    name: "David",
    role: "Founder @ Externalize It",
    avatar: "/images/avatar-david.png",
  },
  {
    quote:
      "We started with a rough MVP and needed a highly polished production product. Cynigen delivered exceptional communication, rapid iterations, and top-tier code quality. We couldn't be happier with our launch.",
    name: "Sebastian",
    role: "Founder @ Salesgo",
    avatar: "/images/avatar-sebastian.png",
  },
]

const testimonialsRow2: TestimonialItem[] = [
  {
    quote:
      "The engineering team at Cynigen exceeded our expectations. They built a highly scalable, secure, and performant cloud architecture for our web app. The page speeds and user metrics have improved dramatically.",
    name: "Sarah Jenkins",
    role: "CTO @ CloudSync",
    avatar: "/images/avatar-david.png",
  },
  {
    quote:
      "Partnering with Cynigen has completely transformed our development velocity. Their expertise in Next.js, React, and Tailwind CSS saved us months of coding. They feel like an extension of our own team.",
    name: "Marcus Aurelius",
    role: "VP of Engineering @ FintechFlow",
    avatar: "/images/avatar-sebastian.png",
  },
  {
    quote:
      "Cynigen redesigned our complex SaaS platform into a beautiful, modern, and highly intuitive dashboard. Our customer conversion and user retention metrics increased by 40% in the first week.",
    name: "Elena Rostova",
    role: "Head of Product @ ApexDashboard",
    avatar: "/images/avatar-tommy.png",
  },
]

function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  return (
    <div className="flex h-[210px] w-[350px] flex-col justify-between rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.01)] transition-[border-color,box-shadow] duration-300 hover:border-slate-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.02)] sm:h-[230px] sm:w-[420px] sm:p-8">
      <div>
        <p className="line-clamp-4 text-xs leading-relaxed text-slate-500 sm:text-[0.92rem]">
          {testimonial.quote}
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-slate-100/80 pt-4">
        <div className="flex items-center gap-3">
          <div className="relative size-8 overflow-hidden rounded-full bg-slate-100 sm:size-10">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-slate-800 sm:text-sm">
              {testimonial.name}
            </h4>
            <p className="text-[10px] font-medium text-slate-400 sm:text-xs">
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* Rating Stars (Right Side) */}
        <div className="flex shrink-0 items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="size-3.5 fill-ext-accent text-ext-accent"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const transitionEase = [0.16, 1, 0.3, 1] as [number, number, number, number]

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
          className="mb-14 flex flex-col items-center text-center"
        >
          <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-50/50 px-3.5 py-1 text-[11px] font-semibold tracking-wider text-emerald-600 uppercase">
            Referral From People
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl md:leading-[1.2]">
            Trusted by People <br />
            <span className="font-serif font-normal text-slate-800 italic">
              Chosen By Brands
            </span>
          </h2>
        </motion.div>
      </div>

      {/* --- 2. TESTIMONIALS SLIDERS (Full-width containers outside the containerX boundaries for edge-to-edge marquee effect) --- */}
      <div className="relative flex flex-col gap-1 overflow-hidden py-2">
        {/* Row 1 (Right to Left / Default) */}
        <Marquee className="[--duration:40s]" pauseOnHover>
          {testimonialsRow1.map((item, idx) => (
            <TestimonialCard key={`row1-${idx}`} testimonial={item} />
          ))}
        </Marquee>

        {/* Row 2 (Left to Right / Reverse) */}
        <Marquee className="[--duration:40s]" reverse pauseOnHover>
          {testimonialsRow2.map((item, idx) => (
            <TestimonialCard key={`row2-${idx}`} testimonial={item} />
          ))}
        </Marquee>

        {/* Side Gradients for fading edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  )
}
