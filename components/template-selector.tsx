'use client';

import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export type TemplateType = 'classic' | 'modern' | 'minimalist' | 'creative' | 'professional' | 'tech' | 'colorful' | 'photo' | 'executive' | 'timeline' | 'infographic' | 'academic' | 'sidebar' | 'startup' | 'creative-portfolio' | 'government' | 'healthcare'

interface TemplateSelectorProps {
  selected: TemplateType
  onSelect: (template: TemplateType) => void
}

interface TemplateCategory {
  name: string
  description: string
  templates: Array<{
    id: TemplateType
    name: string
    description: string
    color: string
  }>
}

const TEMPLATE_CATEGORIES: TemplateCategory[] = [
  {
    name: 'Classic & Traditional',
    description: 'Timeless professional designs ideal for traditional industries',
    templates: [
      {
        id: 'classic',
        name: 'Classic',
        description: 'Traditional layout with clear sections and professional formatting',
        color: 'bg-slate-100',
      },
      {
        id: 'minimalist',
        name: 'Minimalist',
        description: 'Clean serif design with bold borders and simple formatting',
        color: 'bg-gray-100',
      },
      {
        id: 'professional',
        name: 'Professional',
        description: 'Elegant serif typography with sophisticated spacing',
        color: 'bg-amber-100',
      },
      {
        id: 'government',
        name: 'Government',
        description: 'Official formal design for government positions',
        color: 'bg-blue-200',
      },
    ],
  },
  {
    name: 'Modern & Tech',
    description: 'Contemporary designs perfect for technology and innovation roles',
    templates: [
      {
        id: 'modern',
        name: 'Modern',
        description: 'Compact contemporary design with minimalist aesthetic',
        color: 'bg-blue-100',
      },
      {
        id: 'tech',
        name: 'Tech',
        description: 'Dark slate background with cyan accents and code-inspired formatting',
        color: 'bg-purple-100',
      },
      {
        id: 'startup',
        name: 'Startup',
        description: 'Modern bold design perfect for tech startups',
        color: 'bg-purple-100',
      },
    ],
  },
  {
    name: 'Creative & Visual',
    description: 'Vibrant designs with visual elements for creative professionals',
    templates: [
      {
        id: 'creative',
        name: 'Creative',
        description: 'Striking blue sidebar with timeline-style experience sections',
        color: 'bg-cyan-100',
      },
      {
        id: 'colorful',
        name: 'Colorful',
        description: 'Vibrant gradient accents and colored skill badges',
        color: 'bg-pink-100',
      },
      {
        id: 'infographic',
        name: 'Infographic',
        description: 'Visual design with progress bars and skill ratings',
        color: 'bg-green-100',
      },
      {
        id: 'creative-portfolio',
        name: 'Creative Portfolio',
        description: 'Vibrant design with gradient elements and cards',
        color: 'bg-rose-100',
      },
    ],
  },
  {
    name: 'Corporate & Executive',
    description: 'High-impact designs for leadership and corporate positions',
    templates: [
      {
        id: 'executive',
        name: 'Executive',
        description: 'Corporate style with accent bars and professional hierarchy',
        color: 'bg-red-100',
      },
      {
        id: 'sidebar',
        name: 'Sidebar',
        description: 'Two-column layout with dark sidebar for quick info',
        color: 'bg-slate-200',
      },
      {
        id: 'photo',
        name: 'With Photo',
        description: 'Professional layout with photo section and left sidebar',
        color: 'bg-orange-100',
      },
    ],
  },
  {
    name: 'Specialized & Focused',
    description: 'Designs tailored for specific industries and roles',
    templates: [
      {
        id: 'academic',
        name: 'Academic',
        description: 'Research and academic credentials focused design',
        color: 'bg-yellow-100',
      },
      {
        id: 'healthcare',
        name: 'Healthcare',
        description: 'Professional healthcare and clinical design',
        color: 'bg-emerald-100',
      },
      {
        id: 'timeline',
        name: 'Timeline',
        description: 'Experience-focused with visual timeline and milestones',
        color: 'bg-purple-100',
      },
    ],
  },
]

function TemplateCard({ template, selected, onSelect }: { template: any; selected: boolean; onSelect: () => void }) {
  const colorMap: Record<string, { bg: string; accent: string; text: string }> = {
    'bg-slate-100': { bg: 'bg-slate-50', accent: 'bg-slate-300', text: 'text-slate-900' },
    'bg-gray-100': { bg: 'bg-gray-50', accent: 'border-t-4 border-gray-800', text: 'text-gray-900' },
    'bg-amber-100': { bg: 'bg-amber-50', accent: 'bg-amber-200', text: 'text-amber-900' },
    'bg-blue-200': { bg: 'bg-blue-50', accent: 'bg-blue-400', text: 'text-blue-900' },
    'bg-blue-100': { bg: 'bg-blue-50', accent: 'bg-blue-300', text: 'text-blue-900' },
    'bg-purple-100': { bg: 'bg-purple-50', accent: 'bg-purple-300', text: 'text-purple-900' },
    'bg-cyan-100': { bg: 'bg-cyan-50', accent: 'bg-cyan-400', text: 'text-cyan-900' },
    'bg-pink-100': { bg: 'bg-pink-50', accent: 'bg-pink-300', text: 'text-pink-900' },
    'bg-green-100': { bg: 'bg-green-50', accent: 'bg-green-300', text: 'text-green-900' },
    'bg-yellow-100': { bg: 'bg-yellow-50', accent: 'bg-yellow-300', text: 'text-yellow-900' },
    'bg-slate-200': { bg: 'bg-slate-800', accent: 'bg-slate-600', text: 'text-white' },
    'bg-rose-100': { bg: 'bg-rose-50', accent: 'bg-gradient-to-r from-rose-300 to-pink-300', text: 'text-rose-900' },
    'bg-emerald-100': { bg: 'bg-emerald-50', accent: 'bg-emerald-300', text: 'text-emerald-900' },
  }

  const colors = colorMap[template.color] || colorMap['bg-slate-100']

  return (
    <button
      onClick={onSelect}
      className={`relative group text-left transition-all rounded-lg overflow-hidden border-2 ${
        selected ? 'border-primary shadow-lg scale-105' : 'border-border hover:border-primary/50 hover:shadow-md'
      }`}
    >
      {/* Template Visual Preview */}
      <div className={`${colors.bg} h-80 p-4 flex flex-col`}>
        {/* Header Section */}
        <div className={`${colors.accent} rounded px-3 py-2 mb-3 ${colors.text}`}>
          <div className="font-bold text-sm">Full Name</div>
          <div className="text-xs opacity-75">Position Title</div>
        </div>

        {/* Content Sections */}
        <div className="space-y-2 flex-1 overflow-hidden text-xs">
          <div className={`${colors.accent} h-2 rounded`}></div>
          <div className={`${colors.accent} h-2 rounded w-3/4`}></div>
          <div className="mt-3 space-y-1">
            <div className={`${colors.accent} h-2 rounded w-1/2`}></div>
            <div className={`${colors.accent} h-2 rounded`}></div>
            <div className={`${colors.accent} h-2 rounded w-5/6`}></div>
          </div>
          <div className="mt-3 space-y-1">
            <div className={`${colors.accent} h-2 rounded w-2/3`}></div>
            <div className={`${colors.accent} h-2 rounded`}></div>
          </div>
        </div>
      </div>

      {/* Name Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent p-4 pt-8">
        <h4 className="font-bold text-foreground text-base">{template.name}</h4>
      </div>

      {/* Selected Indicator */}
      {selected && (
        <div className="absolute top-3 right-3 bg-primary rounded-full p-2 shadow-lg">
          <Check className="w-5 h-5 text-primary-foreground" />
        </div>
      )}
    </button>
  )
}

export function TemplateSelector({ selected, onSelect }: TemplateSelectorProps) {
  return (
    <div className="space-y-12">
      {TEMPLATE_CATEGORIES.map((category) => (
        <div key={category.name} className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">{category.name}</h3>
            <p className="text-sm text-muted-foreground">{category.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.templates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                selected={selected === template.id}
                onSelect={() => onSelect(template.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
