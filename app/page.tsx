"use client"

import { Suspense, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useToast } from "@/components/ui/use-toast"
import Navigation from './components/navigation'
import Hero from './components/hero'
import AboutMe from './components/about-me'
import Portfolio from './components/portfolio'
import BlogsAndArticles from './components/blogs-and-articles'
import ContactMe from './components/contact-me'
import Footer from './components/footer'
import SearchParamsWrapper from './components/search-params-wrapper'

export default function Home() {
  const { toast } = useToast()
  const searchParams = useSearchParams()
  
  useEffect(() => {
    const submitted = searchParams.get('submitted')
    if (submitted === 'true') {
      // Add a small delay to ensure the toast appears after the page loads
      setTimeout(() => {
        toast({
          title: "Message sent successfully! 🎉",
          description: "Thank you for reaching out. I will get back to you soon.",
          duration: 5000, // Show for 5 seconds
          className: "bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-900/50",
        })
      }, 100)

      // Remove the submitted parameter from the URL without refreshing the page
      const url = new URL(window.location.href)
      url.searchParams.delete('submitted')
      window.history.replaceState({}, '', url)
    }
  }, [searchParams, toast]) // Removed useSearchParams from dependencies, using `searchParams` directly

  return (
    <main className="min-h-screen bg-background">
      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsWrapper />
        <Navigation />
        <Hero />
        <AboutMe />
        <Portfolio />
        <BlogsAndArticles />
        <ContactMe />
        <Footer />
      </Suspense>
    </main>
  )
}
