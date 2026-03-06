'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { ResumeTemplate, ResumeData } from '@/components/resume-template'
import { ResumeTemplateModern } from '@/components/resume-template-modern'
import { ResumeTemplateMinimalist } from '@/components/resume-template-minimalist'
import { ResumeTemplateCreative } from '@/components/resume-template-creative'
import { ResumeTemplateProfessional } from '@/components/resume-template-professional'
import { ResumeTemplateTech } from '@/components/resume-template-tech'
import { ResumeTemplateColorful } from '@/components/resume-template-colorful'
import { ResumeTemplatePhoto } from '@/components/resume-template-photo'
import { ResumeTemplateExecutive } from '@/components/resume-template-executive'
import { ResumeTemplateTimeline } from '@/components/resume-template-timeline'
import { ResumeTemplateInfographic } from '@/components/resume-template-infographic'
import { ResumeTemplateAcademic } from '@/components/resume-template-academic'
import { ResumeTemplateSidebar } from '@/components/resume-template-sidebar'
import { ResumeTemplateStartup } from '@/components/resume-template-startup'
import { ResumeTemplateCreativePortfolio } from '@/components/resume-template-creative-portfolio'
import { ResumeTemplateGovernment } from '@/components/resume-template-government'
import { ResumeTemplateHealthcare } from '@/components/resume-template-healthcare'
import { ResumeEditor } from '@/components/resume-editor'
import { ThemeToggle } from '@/components/theme-toggle'
import { TemplateSelector } from '@/components/template-selector'
import type { TemplateType } from '@/components/template-selector'

const INITIAL_RESUME_DATA: ResumeData = {
  fullName: 'Sarah Anderson',
  email: 'sarah.anderson@email.com',
  phone: '+1 (555) 987-6543',
  location: 'San Francisco, CA',
  summary:
    'Experienced Full Stack Developer with 5+ years of expertise in building scalable web applications. Proven track record of delivering high-quality solutions and leading cross-functional teams. Passionate about modern technologies and continuous learning.',
  experience: [
    {
      id: '1',
      company: 'Tech Solutions Inc.',
      position: 'Senior Full Stack Developer',
      duration: 'Jan 2022 - Present',
      description:
        'Led development of microservices architecture serving 2M+ daily users. Improved system performance by 40% through optimization. Mentored team of 4 junior developers and established coding standards.',
    },
    {
      id: '2',
      company: 'Digital Innovations Ltd.',
      position: 'Full Stack Developer',
      duration: 'Jun 2019 - Dec 2021',
      description:
        'Developed and maintained 10+ production web applications using React and Node.js. Implemented CI/CD pipelines reducing deployment time by 60%. Collaborated with design team to deliver intuitive user interfaces.',
    },
  ],
  education: [
    {
      id: '1',
      school: 'University of California',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      year: '2019',
    },
    {
      id: '2',
      school: 'Online Academy',
      degree: 'Certificate',
      field: 'Advanced Web Development',
      year: '2021',
    },
  ],
  skills: [
    'React',
    'Node.js',
    'TypeScript',
    'PostgreSQL',
    'AWS',
    'Docker',
    'REST APIs',
    'Git',
    'Next.js',
    'Tailwind CSS',
  ],
}

const TEMPLATES: Array<{ id: TemplateType; name: string; description: string; color: string }> = [
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional, timeless design with clean sections and elegant formatting',
    color: 'bg-slate-100',
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Contemporary compact design with minimalist approach and tight spacing',
    color: 'bg-blue-100',
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Ultra-clean serif design with bold accents and maximum readability',
    color: 'bg-neutral-100',
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Striking sidebar layout with accent colors and modern visual hierarchy',
    color: 'bg-indigo-100',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Executive design with elegant typography and sophisticated styling',
    color: 'bg-amber-100',
  },
  {
    id: 'tech',
    name: 'Tech',
    description: 'Developer-focused with code-inspired formatting and technical highlights',
    color: 'bg-cyan-100',
  },
  {
    id: 'colorful',
    name: 'Colorful',
    description: 'Vibrant design with gradient accents and colorful skill badges',
    color: 'bg-pink-100',
  },
  {
    id: 'photo',
    name: 'With Photo',
    description: 'Professional layout with photo section and left sidebar',
    color: 'bg-orange-100',
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'Corporate style with accent bars and professional hierarchy',
    color: 'bg-red-100',
  },
  {
    id: 'timeline',
    name: 'Timeline',
    description: 'Experience-focused with visual timeline and milestones',
    color: 'bg-purple-100',
  },
  {
    id: 'infographic',
    name: 'Infographic',
    description: 'Visual design with progress bars and skill ratings',
    color: 'bg-green-100',
  },
  {
    id: 'academic',
    name: 'Academic',
    description: 'Research and academic credentials focused design',
    color: 'bg-yellow-100',
  },
  {
    id: 'sidebar',
    name: 'Sidebar',
    description: 'Two-column layout with dark sidebar for quick info',
    color: 'bg-slate-200',
  },
  {
    id: 'startup',
    name: 'Startup',
    description: 'Modern bold design perfect for tech startups',
    color: 'bg-purple-100',
  },
  {
    id: 'creative-portfolio',
    name: 'Creative Portfolio',
    description: 'Vibrant design with gradient elements and cards',
    color: 'bg-rose-100',
  },
  {
    id: 'government',
    name: 'Government',
    description: 'Official formal design for government positions',
    color: 'bg-blue-200',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Professional healthcare and clinical design',
    color: 'bg-emerald-100',
  },
]

export default function EditorPage() {
  const [resumeData, setResumeData] = useState<ResumeData>(INITIAL_RESUME_DATA)
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>('classic')
  const [isEditing, setIsEditing] = useState(false)

  const renderTemplate = (template: TemplateType) => {
    switch (template) {
      case 'classic':
        return <ResumeTemplate data={resumeData} />
      case 'modern':
        return <ResumeTemplateModern data={resumeData} />
      case 'minimalist':
        return <ResumeTemplateMinimalist data={resumeData} />
      case 'creative':
        return <ResumeTemplateCreative data={resumeData} />
      case 'professional':
        return <ResumeTemplateProfessional data={resumeData} />
      case 'tech':
        return <ResumeTemplateTech data={resumeData} />
      case 'colorful':
        return <ResumeTemplateColorful data={resumeData} />
      case 'photo':
        return <ResumeTemplatePhoto data={resumeData} />
      case 'executive':
        return <ResumeTemplateExecutive data={resumeData} />
      case 'timeline':
        return <ResumeTemplateTimeline data={resumeData} />
      case 'infographic':
        return <ResumeTemplateInfographic data={resumeData} />
      case 'academic':
        return <ResumeTemplateAcademic data={resumeData} />
      case 'sidebar':
        return <ResumeTemplateSidebar data={resumeData} />
      case 'startup':
        return <ResumeTemplateStartup data={resumeData} />
      case 'creative-portfolio':
        return <ResumeTemplateCreativePortfolio data={resumeData} />
      case 'government':
        return <ResumeTemplateGovernment data={resumeData} />
      case 'healthcare':
        return <ResumeTemplateHealthcare data={resumeData} />
      default:
        return <ResumeTemplate data={resumeData} />
    }
  }

  if (isEditing) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b border-border bg-card sticky top-0 z-50 shadow-sm">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsEditing(false)}
                className="text-muted-foreground hover:text-foreground flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Templates</span>
              </Button>
              <div className="h-4 w-px bg-border hidden sm:block" />
              <h1 className="text-sm sm:text-base font-bold text-foreground truncate max-w-[150px] sm:max-w-none">
                {TEMPLATES.find((t) => t.id === selectedTemplate)?.name} Template
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setIsEditing(false)}
                className="hidden sm:flex text-xs border-primary/20 hover:border-primary/50 text-primary hover:bg-primary/5"
              >
                Change Template
              </Button>
              <div className="h-4 w-px bg-border hidden sm:block" />
              <ThemeToggle />
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-0">
          <div className="border-r border-border overflow-y-auto max-h-[calc(100vh-48px)]">
            <ResumeEditor data={resumeData} onChange={setResumeData} selectedTemplate={selectedTemplate} />
          </div>

          <div className="bg-secondary/30 overflow-y-auto max-h-[calc(100vh-48px)] p-8 flex justify-center">
            <div id="resume-output" className="w-full">
              {renderTemplate(selectedTemplate)}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Choose Your Template</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-12">
          <p className="text-lg text-muted-foreground mb-8">
            Browse our professionally designed resume templates organized by category. Click on any template to select and start editing.
          </p>
        </div>

        <TemplateSelector
          selected={selectedTemplate}
          onSelect={(template) => {
            setSelectedTemplate(template)
            setIsEditing(true)
          }}
        />
      </main>
    </div>
  )
}
