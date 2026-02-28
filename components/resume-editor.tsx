'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Plus, Trash2, Download, Upload } from 'lucide-react'
import { ResumeData } from './resume-template'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface ResumeEditorProps {
  data: ResumeData
  onChange: (data: ResumeData) => void
  selectedTemplate?: string
}

export function ResumeEditor({ data, onChange, selectedTemplate }: ResumeEditorProps) {
  const updateBasicInfo = (field: keyof ResumeData, value: string) => {
    onChange({ ...data, [field]: value })
  }

  const updateExperience = (id: string, field: string, value: string) => {
    const updated = data.experience.map((exp) =>
      exp.id === id ? { ...exp, [field]: value } : exp
    )
    onChange({ ...data, experience: updated })
  }

  const addExperience = () => {
    onChange({
      ...data,
      experience: [
        ...data.experience,
        {
          id: Date.now().toString(),
          company: '',
          position: '',
          duration: '',
          description: '',
        },
      ],
    })
  }

  const removeExperience = (id: string) => {
    onChange({
      ...data,
      experience: data.experience.filter((exp) => exp.id !== id),
    })
  }

  const updateEducation = (id: string, field: string, value: string) => {
    const updated = data.education.map((edu) =>
      edu.id === id ? { ...edu, [field]: value } : edu
    )
    onChange({ ...data, education: updated })
  }

  const addEducation = () => {
    onChange({
      ...data,
      education: [
        ...data.education,
        {
          id: Date.now().toString(),
          school: '',
          degree: '',
          field: '',
          year: '',
        },
      ],
    })
  }

  const removeEducation = (id: string) => {
    onChange({
      ...data,
      education: data.education.filter((edu) => edu.id !== id),
    })
  }

  const updateSkill = (index: number, value: string) => {
    const updated = data.skills.map((skill, i) => (i === index ? value : skill))
    onChange({ ...data, skills: updated })
  }

  const addSkill = () => {
    onChange({ ...data, skills: [...data.skills, ''] })
  }

  const removeSkill = (index: number) => {
    onChange({ ...data, skills: data.skills.filter((_, i) => i !== index) })
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64 = reader.result as string
        onChange({ ...data, photo: base64 })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleExport = () => {
    const element = document.getElementById('resume-output')
    if (element) {
      const html = element.innerHTML
      const printWindow = window.open('', '', 'width=800,height=600')
      if (printWindow) {
        printWindow.document.write(html)
        printWindow.document.close()
        printWindow.print()
      }
    }
  }

  return (
    <div className="w-full">
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-4 sticky top-16 z-40 bg-card border-b border-border rounded-none">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>

        {/* Basic Information */}
        <TabsContent value="basic" className="space-y-6 p-6">
          {selectedTemplate === 'photo' && (
          <div>
            <label className="text-sm font-medium text-foreground block mb-3">Profile Photo</label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
              {data.photo ? (
                <div className="space-y-3">
                  <img
                    src={data.photo}
                    alt="Profile"
                    className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-primary"
                  />
                  <p className="text-sm text-muted-foreground">Profile photo added</p>
                  <Button
                    onClick={() => {
                      const input = document.getElementById('photo-upload') as HTMLInputElement
                      input?.click()
                    }}
                    variant="outline"
                    size="sm"
                    className="border-border bg-transparent"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Change Photo
                  </Button>
                </div>
              ) : (
                <div>
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-3">Click to upload a profile photo</p>
                  <Button
                    onClick={() => {
                      const input = document.getElementById('photo-upload') as HTMLInputElement
                      input?.click()
                    }}
                    variant="outline"
                    size="sm"
                    className="border-border bg-transparent"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photo
                  </Button>
                </div>
              )}
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </div>
          </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground">Full Name</label>
              <Input
                value={data.fullName}
                onChange={(e) => updateBasicInfo('fullName', e.target.value)}
                placeholder="John Doe"
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Email</label>
              <Input
                type="email"
                value={data.email}
                onChange={(e) => updateBasicInfo('email', e.target.value)}
                placeholder="john@example.com"
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Phone</label>
              <Input
                value={data.phone}
                onChange={(e) => updateBasicInfo('phone', e.target.value)}
                placeholder="+1 (555) 123-4567"
                className="mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Location</label>
              <Input
                value={data.location}
                onChange={(e) => updateBasicInfo('location', e.target.value)}
                placeholder="New York, NY"
                className="mt-1"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground">Professional Summary</label>
            <Textarea
              value={data.summary}
              onChange={(e) => updateBasicInfo('summary', e.target.value)}
              placeholder="Brief overview of your professional background and goals..."
              className="mt-1 min-h-24"
            />
          </div>
        </TabsContent>

        {/* Experience */}
        <TabsContent value="experience" className="space-y-6 p-6">
          <Button onClick={addExperience} variant="outline" className="w-full border-border bg-transparent">
            <Plus className="w-4 h-4 mr-2" />
            Add Experience
          </Button>

          <div className="space-y-6">
            {data.experience.map((exp, idx) => (
              <div key={exp.id} className="border border-border rounded-lg p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-foreground">Experience {idx + 1}</h3>
                  <Button
                    onClick={() => removeExperience(exp.id)}
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">Company</label>
                    <Input
                      value={exp.company}
                      onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                      placeholder="Company Name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Position</label>
                    <Input
                      value={exp.position}
                      onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                      placeholder="Job Title"
                      className="mt-1"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-foreground">Duration</label>
                    <Input
                      value={exp.duration}
                      onChange={(e) => updateExperience(exp.id, 'duration', e.target.value)}
                      placeholder="Jan 2020 - Dec 2023"
                      className="mt-1"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-foreground">Description</label>
                    <Textarea
                      value={exp.description}
                      onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                      placeholder="Describe your responsibilities and achievements..."
                      className="mt-1 min-h-20"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Education */}
        <TabsContent value="education" className="space-y-6 p-6">
          <Button onClick={addEducation} variant="outline" className="w-full border-border bg-transparent">
            <Plus className="w-4 h-4 mr-2" />
            Add Education
          </Button>

          <div className="space-y-6">
            {data.education.map((edu, idx) => (
              <div key={edu.id} className="border border-border rounded-lg p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-foreground">Education {idx + 1}</h3>
                  <Button
                    onClick={() => removeEducation(edu.id)}
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">School/University</label>
                    <Input
                      value={edu.school}
                      onChange={(e) => updateEducation(edu.id, 'school', e.target.value)}
                      placeholder="University Name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Degree</label>
                    <Input
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                      placeholder="Bachelor of Science"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Field of Study</label>
                    <Input
                      value={edu.field}
                      onChange={(e) => updateEducation(edu.id, 'field', e.target.value)}
                      placeholder="Computer Science"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Graduation Year</label>
                    <Input
                      value={edu.year}
                      onChange={(e) => updateEducation(edu.id, 'year', e.target.value)}
                      placeholder="2023"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Skills */}
        <TabsContent value="skills" className="space-y-6 p-6">
          <Button onClick={addSkill} variant="outline" className="w-full border-border bg-transparent">
            <Plus className="w-4 h-4 mr-2" />
            Add Skill
          </Button>

          <div className="grid md:grid-cols-2 gap-4">
            {data.skills.map((skill, idx) => (
              <div key={idx} className="flex gap-2 items-end">
                <div className="flex-1">
                  <Input
                    value={skill}
                    onChange={(e) => updateSkill(idx, e.target.value)}
                    placeholder="e.g., React, JavaScript, etc."
                  />
                </div>
                <Button
                  onClick={() => removeSkill(idx)}
                  variant="ghost"
                  size="sm"
                  className="text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="sticky bottom-0 bg-card border-t border-border p-4 flex justify-end gap-2">
        <Button onClick={handleExport} className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </div>
    </div>
  )
}
