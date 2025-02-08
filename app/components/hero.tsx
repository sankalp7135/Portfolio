"use client"

import { useEffect, useState } from "react"
import Typewriter from "typewriter-effect"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="pt-20 bg-secondary min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            {mounted && (
              <Typewriter
                options={{
                  strings: [
                    "Crafting User-Centric Products",
                    "Designing Intuitive Experiences",
                    "Solving Complex Problems",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 20,
                  delay: 30,
                }}
              />
            )}
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Product Manager specializing in intuitive and accessible digital experiences.
          </p>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl">
            Turning complex problems into simple, beautiful, and intuitive designs that users love.
          </p>
        </div>
      </div>
    </section>
  )
}

