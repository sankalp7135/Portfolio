"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { 
  LineChart, 
  Users, 
  Puzzle,
  GraduationCap
} from 'lucide-react'
import { Progress } from "@/components/ui/progress"

const experiences = [
  {
    title: "Lead Product Manager",
    company: "Dr. Reddy's Laboratories",
    period: "2024 - Present",
    description: "Serving as the Lead PM, managing a portfolio of more than 6 products delivering value in Russia, India, ASEAN and LATAM",
    icon: <LineChart className="w-5 h-5" />
  },
  {
    title: "Product Manager",
    company: "Dr. Reddy's Laboratories",
    period: "2022 - 2024",
    description: "Managed end-to-end product lifecycle for marketing engagement platform, driving Rubles 10M in transaction value",
    icon: <Users className="w-5 h-5" />
  },
  {
    title: "Management Trainee",
    company: "Dr. Reddy's Laboratories",
    period: "2021 - 2022",
    description: "Leadership program with stints across BUs such as Digital, Supply chain, Sales, Marketing & Manufacturing",
    icon: <Puzzle className="w-5 h-5" />
  }
]

const education = [
  {
    title: "MBA in Supply Chain Management",
    institution: "IIM Mumbai",
    period: "2019 - 2021",
    description: "Specialized in supply chain, technology management and product development.",
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    title: "BE in Mechanical Engineering",
    institution: "UIET, Panjab University",
    period: "2013 - 2017",
    description: "Focus on manufacturing, electric vehicles and healthcare projects",
    icon: <GraduationCap className="w-5 h-5" />
  }
]

const skills = [
  { name: "Product Strategy", level: 90 },
  { name: "Agile Management", level: 85 },
  { name: "Data Analysis", level: 80 },
  { name: "UX Design", level: 75 },
  { name: "Technical Architecture", level: 70 }
]

const tabs = ['experience', 'education', 'skills']

// Function to calculate experience duration
function calculateExperience(startDate: Date): string {
  const start = new Date(startDate)
  const now = new Date()
  
  let years = now.getFullYear() - start.getFullYear()
  let months = now.getMonth() - start.getMonth()
  
  // Adjust for negative months or months > 12
  if (months < 0) {
    years--
    months += 12
  }
  
  // Create the experience string
  const yearText = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : ''
  const monthText = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : ''
  
  if (yearText && monthText) {
    return `${yearText} and ${monthText}`
  } else {
    return yearText || monthText
  }
}

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState('experience')
  
  // Calculate experience once and memoize it
  const experienceDuration = useMemo(() => {
    const startDate = new Date(2021, 7) // August 2021 (month is 0-based)
    return calculateExperience(startDate)
  }, [])

  return (
    <section 
      id="about" 
      className="py-20 scroll-mt-20 bg-gradient-to-b from-background to-background/50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">
            Product Manager with {experienceDuration} of experience in building innovative solutions and leading high-performing teams
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === tab 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-muted'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-3xl mx-auto"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-8 relative pl-8 before:content-[''] before:absolute before:left-[7px] before:top-8 before:w-[2px] before:h-[calc(100%-24px)] before:bg-border last:before:h-0"
                >
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary" />
                  <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all">
                    <div className="flex items-center mb-2">
                      {exp.icon}
                      <h3 className="text-xl font-semibold ml-2">{exp.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-1">{exp.company} • {exp.period}</p>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'education' && (
            <motion.div
              key="education"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-3xl mx-auto"
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-8 relative pl-8 before:content-[''] before:absolute before:left-[7px] before:top-8 before:w-[2px] before:h-[calc(100%-24px)] before:bg-border last:before:h-0"
                >
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary" />
                  <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all">
                    <div className="flex items-center mb-2">
                      {edu.icon}
                      <h3 className="text-xl font-semibold ml-2">{edu.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-1">{edu.institution} • {edu.period}</p>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'skills' && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-3xl mx-auto"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-6"
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

