"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { BarChart3, Users, Globe, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Medepro",
    description: "Led the development and launch of HCP learning engagement platform in South Africa",
    icon: <BarChart3 className="w-5 h-5" />,
    category: ["B2C"],
    demoUrl: "https://www.medepro.co.za",
    metrics: {
      monthlyUsers: "2.5M+",
      yoyGrowth: "150%",
      keyMarkets: "South Africa",
    },
    achievements: [
      "Increased user acquisition by 150% YoY",
      "Achieved $10M ARR within 18 months",
      "Expanded to 12 new markets in APAC"
    ],
    tags: ["B2C", "Medical", "EdTech"]
  },
  {
    title: "Panacea",
    description: "GenAI medical assistant for HCPs and patients for their medical questions",
    icon: <Users className="w-5 h-5" />,
    category: ["B2C"],
    demoUrl: "https://www.panaceapp.site/login",
    metrics: {
      monthlyUsers: "100",
      queriesHandled: "10K+",
      keyMarkets: "IN",
    },
    achievements: [
      "Ideation to production in 7 Days",
      "Onboarded 50+ HCPs in 2 months"
    ],
    tags: ["B2C", "GenAI", "Medical"]
  },
  {
    title: "DigiCx",
    description: "Marketing Engagement platform for managing, budgeting and payments of marketing engagements for HCPs",
    icon: <Globe className="w-5 h-5" />,
    category: ["Enterprise"],
    metrics: {
      monthlyUsers: "2K",
      yoyGrowth: "70%",
      keyMarkets: "IN, RUS, LATAM, AAA",
    },
    achievements: [
      "Reduced Turn around time TAT for payments for HCPs by 40% in Russia and 25% in other geographies",
      "Increase in marketing transaction value by 70% in Russia",
      "Rolled out the platform to 15% of global workforce"
    ],
    tags: ["B2B", "Enterprise", "SaaS"]
  }
]

const categories = ["All", "B2C", "Enterprise"]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" || project.category.includes(activeCategory)
  )

  return (
    <section id="portfolio" className="py-20 scroll-mt-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Product Portfolio</h2>
          <p className="text-muted-foreground text-lg">
            Showcasing successful product launches and strategic achievements across global markets
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeCategory === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-background/60 hover:bg-background/80 border border-border'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-background/60 backdrop-blur-sm border-border transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:bg-background/80">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {project.icon}
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                    {project.demoUrl && (
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="sm" className="gap-2 hover:bg-primary hover:text-primary-foreground">
                          Try Now
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{project.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Monthly Active Users</p>
                      <p className="text-lg font-semibold">{project.metrics.monthlyUsers}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {project.metrics.queriesHandled ? 'Queries Handled' : 'YoY Growth'}
                      </p>
                      <p className="text-lg font-semibold">
                        {project.metrics.queriesHandled || project.metrics.yoyGrowth}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Key Markets</p>
                      <p className="text-lg font-semibold">{project.metrics.keyMarkets}</p>
                    </div>
                    <div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="font-semibold mb-2">Key Achievements</p>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 border-transparent"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

