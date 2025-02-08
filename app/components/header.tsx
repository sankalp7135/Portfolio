"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, Github, Linkedin, Twitter } from 'lucide-react'
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">Sankalp Arora</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about">About</Link>
            <Link href="#portfolio">Portfolio</Link>
            <Link href="#blogs">Blogs</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="https://github.com/sankalp7135" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/sankalp-arora-736772189/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="https://x.com/SankalpArora03" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
        <Button
          className="md:hidden"
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
        {isMenuOpen && (
          <div className="absolute top-14 left-0 w-full bg-background border-b md:hidden">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <Link href="#about" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
              <Link href="#blogs" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <div className="flex items-center space-x-4 pt-2">
                <Link href="https://github.com/sankalp7135" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                </Link>
                <Link href="https://www.linkedin.com/in/sankalp-arora-736772189/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="https://x.com/SankalpArora03" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

