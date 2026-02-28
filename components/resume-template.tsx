import React from 'react'

export interface ResumeData {
  fullName: string
  email: string
  phone: string
  location: string
  summary: string
  photo?: string
  experience: Array<{
    id: string
    company: string
    position: string
    duration: string
    description: string
  }>
  education: Array<{
    id: string
    school: string
    degree: string
    field: string
    year: string
  }>
  skills: string[]
}

interface ResumeTemplateProps {
  data: ResumeData
}

export function ResumeTemplate({ data }: ResumeTemplateProps) {
  return (
    <div className="a4-page">
      {/* Header */}
      <div className="border-b-2 border-black pb-6 mb-6">
        <h1 className="text-4xl font-bold">{data.fullName}</h1>
        <div className="flex flex-wrap gap-4 text-sm mt-2 text-gray-700">
          {data.email && <span>{data.email}</span>}
          {data.phone && <span>•</span>}
          {data.phone && <span>{data.phone}</span>}
          {data.location && <span>•</span>}
          {data.location && <span>{data.location}</span>}
        </div>
      </div>

      {/* Professional Summary */}
      {data.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-2 mb-3">
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed">{data.summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-2 mb-3">
            Professional Experience
          </h2>
          <div className="space-y-4">
            {data.experience.map((job) => (
              <div key={job.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-sm">{job.position}</p>
                    <p className="text-sm text-gray-700">{job.company}</p>
                  </div>
                  <p className="text-sm text-gray-700">{job.duration}</p>
                </div>
                <p className="text-sm mt-2 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-2 mb-3">
            Education
          </h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-sm">{edu.degree}</p>
                    <p className="text-sm text-gray-700">
                      {edu.school}
                      {edu.field && ` • ${edu.field}`}
                    </p>
                  </div>
                  <p className="text-sm text-gray-700">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section>
          <h2 className="text-lg font-bold uppercase border-b border-gray-300 pb-2 mb-3">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span key={index} className="text-sm bg-gray-100 px-3 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
