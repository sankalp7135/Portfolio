"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function ContactMe() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <section id="contact" className="py-20 bg-secondary scroll-mt-20">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact Me</h2>
        <form 
          action="https://formsubmit.co/arora.sankalp152@gmail.com" 
          method="POST"
          className="space-y-6"
          onSubmit={() => setIsSubmitting(true)}
        >
          {/* FormSubmit Configuration */}
          <input type="hidden" name="_subject" value="New Portfolio Contact!" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="true" />
          <input 
            type="hidden" 
            name="_next" 
            value="https://sankalparoraportfolio.vercel.app?submitted=true"
          />
          <input type="hidden" name="_autoresponse" value="Thank you for your message! Sankalp will reach out to you soon." />
          
          {/* Honeypot for spam prevention */}
          <input type="text" name="_honey" style={{ display: 'none' }} />

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name
            </label>
            <Input 
              type="text" 
              id="name"
              name="name" 
              placeholder="Sankalp Arora" 
              className="text-base"
              required 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Your Email
            </label>
            <Input 
              type="email" 
              id="email"
              name="email" 
              placeholder="arora.sankalp152@gmail.com" 
              className="text-base"
              required 
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Your Message
            </label>
            <Textarea 
              id="message"
              name="message" 
              placeholder="How can I help you?" 
              className="text-base"
              required 
            />
          </div>
          <Button 
            type="submit" 
            className="w-full text-base"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  )
}

