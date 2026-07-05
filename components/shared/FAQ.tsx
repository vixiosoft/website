"use client"

import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Do You Offer Revisions On Designs?",
    answer:
      "Yes, we provide unlimited revisions to ensure the final design and code align perfectly with your business expectations. We iterate closely with you during each phase of the project.",
  },
  {
    question: "What Tools Do You Use For Your Work?",
    answer:
      "We leverage industry-leading tools and frameworks including Next.js, React, Tailwind CSS, Framer Motion, and Figma for design, engineering, and prototyping.",
  },
  {
    question: "Can You Help With Branding From Scratch?",
    answer:
      "Absolutely. We specialize in building complete brand identities, including logo design, color typography, style guides, and comprehensive design systems.",
  },
  {
    question: "How Do You Approach A New Project?",
    answer:
      "We start with an in-depth discovery phase to align on goals, followed by UI/UX design wireframes, interactive prototyping, engineering, and rigorous QA testing before deployment.",
  },
  {
    question: "What Is The Cost Of Your Services?",
    answer:
      "Our pricing is tailored based on the project's scope, complexity, and timeline. Contact us to schedule a brief consultation and receive a transparent, itemized proposal.",
  },
]

function FAQItemCard({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      layout
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.005)] transition-[border-color,box-shadow] duration-300 hover:border-slate-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.015)]"
    >
      {/* Clickable Header */}
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4.5"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-50 text-xs font-bold text-slate-800 sm:size-10 sm:text-sm">
            ?
          </div>
          <span className="text-left text-xs font-semibold text-slate-800 sm:text-sm md:text-base">
            {item.question}
          </span>
        </div>
        <div className="mr-1 sm:mr-2">
          <svg
            className={`size-4 text-slate-400 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {/* Expandable Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-4 pr-5 pb-5 pl-15 sm:px-6 sm:pr-8 sm:pb-6 sm:pl-20">
              <div className="flex items-start justify-between gap-4 border-t border-slate-100 pt-4 sm:gap-6">
                <p className="max-w-[85%] text-xs leading-relaxed text-slate-500 sm:text-[0.92rem] md:max-w-[90%]">
                  {item.answer}
                </p>
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white shadow-xs sm:size-10">
                  <svg
                    className="size-3.5 sm:size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0) // Open first item by default
  const transitionEase = [0.16, 1, 0.3, 1] as [number, number, number, number]

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
          className="mb-14 flex flex-col items-center text-center"
        >
          <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-50/50 px-3.5 py-1 text-[11px] font-semibold tracking-wider text-emerald-600 uppercase">
            FAQs
          </span>
          <h2 className="mt-5 max-w-3xl text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-5xl md:leading-[1.2]">
            Have Questions? Here Are Quick Answers <br />
            <span className="font-serif font-normal text-slate-800 italic">
              To Some Of The Most Common Queries
            </span>
          </h2>
        </motion.div>

        {/* --- 2. FAQ ACCORDION LIST --- */}
        <div className="mx-auto flex max-w-4xl flex-col gap-3">
          {faqData.map((item, idx) => (
            <FAQItemCard
              key={idx}
              item={item}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
