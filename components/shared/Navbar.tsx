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
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-close mobile menu on desktop resize
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 w-full border-b border-transparent bg-transparent py-4 transition-all duration-300",
          isScrolled &&
            "border-ext-border/20 bg-white/80 shadow-sm backdrop-blur-md"
        )}
      >
        <div className="containerX flex w-full items-center justify-between">
          {/* Logo Section */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-2.5"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full border-[3.5px] border-ext-text-primary transition-transform group-hover:rotate-12">
              <div className="h-1.5 w-1.5 rounded-full bg-ext-accent" />
            </div>
            <span className="text-lg font-bold tracking-tight text-ext-text-primary md:text-xl">
              vixiosoft.
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
                    "text-sm font-medium transition-colors hover:text-ext-text-primary",
                    isActive ? "text-ext-accent" : "text-ext-text-secondary"
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
              className="h-9.5 cursor-pointer rounded-full bg-ext-text-primary px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-ext-text-primary/95 active:scale-[0.98]"
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
              className="cursor-pointer rounded-full text-ext-text-primary transition-colors hover:bg-ext-surface-2"
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

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={cn(
          "fixed inset-x-0 top-[72px] z-40 border-b border-ext-border/30 bg-white/95 px-6 py-8 shadow-md backdrop-blur-md transition-all duration-300 md:hidden",
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base font-medium transition-colors",
                  isActive
                    ? "text-ext-accent"
                    : "text-ext-text-primary hover:text-ext-accent"
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <hr className="my-1 border-ext-border/50" />
          <div className="flex flex-col gap-4">
            <Button
              asChild
              className="w-full rounded-full bg-ext-text-primary py-3 font-semibold text-white shadow-sm hover:bg-ext-text-primary/95 active:scale-[0.98]"
            >
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </>
  )
}
