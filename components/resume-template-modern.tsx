import React from 'react'
import { ResumeData } from './resume-template'

interface ResumeTemplateModernProps {
  data: ResumeData
}

export function ResumeTemplateModern({ data }: ResumeTemplateModernProps) {
  return (
    <div className="a4-page">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">{data.fullName}</h1>
        <div className="flex flex-wrap gap-2 text-xs text-gray-600 font-medium">
          {data.email && <span>{data.email}</span>}
          {data.phone && data.email && <span>•</span>}
          {data.phone && <span>{data.phone}</span>}
          {data.location && (data.email || data.phone) && <span>•</span>}
          {data.location && <span>{data.location}</span>}
        </div>
      </div>

      {/* Professional Summary */}
      {data.summary && (
        <section className="mb-5">
          <p className="text-xs leading-relaxed text-gray-700">{data.summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase text-gray-900 tracking-wide mb-3">
            Experience
          </h2>
          <div className="space-y-3">
            {data.experience.map((job) => (
              <div key={job.id}>
                <div className="flex justify-between items-baseline gap-2">
                  <p className="font-semibold text-xs text-gray-900">{job.position}</p>
                  <p className="text-xs text-gray-600 whitespace-nowrap">{job.duration}</p>
                </div>
                <p className="text-xs text-gray-600 font-medium mb-1">{job.company}</p>
                <p className="text-xs leading-tight text-gray-700">{job.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase text-gray-900 tracking-wide mb-3">
            Education
          </h2>
          <div className="space-y-2">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline gap-2">
                  <p className="font-semibold text-xs text-gray-900">{edu.degree}</p>
                  <p className="text-xs text-gray-600 whitespace-nowrap">{edu.year}</p>
                </div>
                <p className="text-xs text-gray-600 font-medium">
                  {edu.school}
                  {edu.field && ` – ${edu.field}`}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section>
          <h2 className="text-xs font-bold uppercase text-gray-900 tracking-wide mb-2">
            Skills
          </h2>
          <p className="text-xs text-gray-700 leading-relaxed">
            {data.skills.join(' • ')}
          </p>
        </section>
      )}
    </div>
  )
}
