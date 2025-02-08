"use client"

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useToast } from "@/components/ui/use-toast"

const SearchParamsWrapper = () => {
  const { toast } = useToast()
  const searchParams = useSearchParams()

  useEffect(() => {
    const submitted = searchParams.get('submitted')
    if (submitted === 'true') {
      setTimeout(() => {
        toast({
          title: "Message sent successfully! 🎉",
          description: "Thank you for reaching out. I will get back to you soon.",
          duration: 5000,
          className: "bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-900/50",
        })
      }, 100)

      const url = new URL(window.location.href)
      url.searchParams.delete('submitted')
      window.history.replaceState({}, '', url)
    }
  }, [searchParams, toast])

  return null // This component does not render anything
}

export default SearchParamsWrapper 