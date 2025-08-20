"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAuth } from "@/lib/auth-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { user, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ]

  const legalItems = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/90 backdrop-blur-xl shadow-xl border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="/spiral-pay-logo.png"
                alt="Spiral Pay"
                className="h-12 w-auto group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-black font-heading bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Spiral Pay
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-foreground hover:text-primary transition-all duration-300 font-semibold text-lg group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            {/* Legal Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors duration-300 font-semibold text-lg">
                Legal <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-xl border border-border/50">
                {legalItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link href={item.href} className="font-medium">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors duration-300 font-semibold text-lg">
                  {user.name} <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background/95 backdrop-blur-xl border border-border/50">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="font-medium">
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout} className="font-medium">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  asChild
                  className="text-lg font-semibold hover:bg-primary/10 transition-all duration-300"
                >
                  <Link href="/login">Login</Link>
                </Button>
                <Button
                  asChild
                  className="text-lg font-semibold px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Link href="/register">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:bg-primary/10 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 shadow-xl">
            <div className="px-2 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 font-semibold text-lg rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {legalItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 font-medium rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-4 space-y-3">
                {user ? (
                  <>
                    <Button
                      asChild
                      className="w-full bg-transparent border-2 border-primary hover:bg-primary/10"
                      variant="outline"
                    >
                      <Link href="/dashboard">Dashboard</Link>
                    </Button>
                    <Button onClick={logout} className="w-full" variant="ghost">
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      asChild
                      className="w-full bg-transparent border-2 border-primary hover:bg-primary/10 font-semibold"
                      variant="outline"
                    >
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 font-semibold shadow-lg"
                    >
                      <Link href="/register">Sign Up</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
