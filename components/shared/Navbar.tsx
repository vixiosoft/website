"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { IconChevronDown, IconMenu2, IconX } from "@tabler/icons-react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Resources", href: "/resources", hasDropdown: true },
  { label: "Pricing", href: "/pricing" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-transparent backdrop-blur-md transition-all duration-200",
        isScrolled
          ? "border-b border-slate-100 bg-white/80 shadow-sm"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Logo Section */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="grid h-3 w-4 grid-cols-3 gap-0.5">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="size-1 rounded-full bg-indigo-600 transition-transform duration-300 group-hover:scale-110"
              />
            ))}
          </div>
          <span className="font-sans text-xl font-bold tracking-tight text-slate-900">
            cynigen
          </span>
        </Link>

        {/* Center Links (Desktop) */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors hover:text-indigo-600",
                  isActive ? "text-indigo-600" : "text-slate-600"
                )}
              >
                {link.label}
                {link.hasDropdown && (
                  <IconChevronDown className="size-3.5 opacity-80" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right Section (Desktop) */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/login"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Log in
          </Link>
          <Button
            size="sm"
            className="h-9 cursor-pointer rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-all hover:from-indigo-500 hover:to-blue-500 hover:shadow-indigo-500/10 active:scale-[0.98]"
          >
            Try for free
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer rounded-full text-slate-700"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <IconX className="size-5" />
            ) : (
              <IconMenu2 className="size-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-slate-100 bg-white px-6 py-4 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between rounded-lg py-2 text-sm font-semibold transition-colors",
                      isActive
                        ? "text-indigo-600"
                        : "text-slate-600 hover:text-indigo-600"
                    )}
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && <IconChevronDown className="size-4" />}
                  </Link>
                )
              })}
              <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-4">
                <Link
                  href="/login"
                  className="flex h-9 items-center justify-center text-sm font-semibold text-slate-700 hover:text-slate-900"
                >
                  Log in
                </Link>
                <Button className="h-10 w-full rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 font-semibold text-white">
                  Try for free
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
