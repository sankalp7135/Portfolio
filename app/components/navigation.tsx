"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, Github, Linkedin, Twitter, Mail, Code2 } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/app/components/ui/theme-toggle"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const topOffset = (target as HTMLElement).offsetTop - 80 // Adjust this value based on your header height
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="font-semibold text-lg flex items-center gap-2">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-primary rounded-full"></div>
              <div className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-background rounded-full"></div>
            </div>
            <span>Sankalp Arora</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <Link href="#about" className="hover:text-primary">About</Link>
              <Link href="#portfolio" className="hover:text-primary">Portfolio</Link>
              <Link href="#blogs" className="hover:text-primary">Blogs</Link>
              <Link href="#contact" className="hover:text-primary">Contact</Link>
            </div>
            
            <div className="flex items-center gap-4">
              <Link href="https://github.com/sankalp7135" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/sankalp-arora-736772189/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://x.com/SankalpArora03" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

