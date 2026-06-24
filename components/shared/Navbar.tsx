"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { IconMenu2, IconX } from "@tabler/icons-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

const navLinks = [
  { label: "Works", href: "/works" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 w-full bg-transparent py-4 transition-all duration-300",
        isScrolled && "!bg-background/80 backdrop-blur-md"
      )}
    >
      <div
        className={cn(
          "container2X flex w-full items-center justify-between transition-all duration-300"
        )}
      >
        {/* Logo Section */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-sans text-3xl font-bold tracking-tight text-ext-accent transition-transform duration-300 active:scale-95">
            cynigen.
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
                  "text-base font-medium transition-colors hover:text-ext-accent",
                  isActive ? "text-ext-accent" : "text-neutral-600"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Right Section (Desktop) */}
        <div className="hidden items-center gap-6 md:flex">
          <Button
            size="sm"
            asChild
            className="h-9.5 cursor-pointer rounded-full bg-neutral-900 px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-neutral-800 hover:shadow-neutral-900/10 active:scale-[0.98]"
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer rounded-full text-neutral-700"
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
    </header>
  )
}
