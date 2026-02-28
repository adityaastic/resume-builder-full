import React from 'react'
import { ResumeData } from './resume-template'

export function ResumeTemplateProfessional({ data }: { data: ResumeData }) {
  return (
    <div className="a4-page font-serif">
      {/* Header */}
      <div className="mb-8 pb-6 border-b-2 border-gray-900">
        <h1 className="text-4xl font-bold mb-1">{data.fullName}</h1>
        <p className="text-sm text-gray-600 tracking-wide uppercase">{data.email} • {data.phone}</p>
      </div>

      {/* Professional Summary */}
      {data.summary && (
        <div className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-3 text-gray-900">Professional Summary</h2>
          <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-4 text-gray-900">Professional Experience</h2>
          <div className="space-y-5">
            {data.experience.map((exp, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-sm font-bold text-gray-900">{exp.position}</h3>
                  <span className="text-xs text-gray-600">{exp.startDate} – {exp.endDate}</span>
                </div>
                <p className="text-xs text-gray-600 italic mb-2">{exp.company}</p>
                {exp.description && <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-4 text-gray-900">Education</h2>
          <div className="space-y-4">
            {data.education.map((edu, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-xs text-gray-600">{edu.school}</p>
                  </div>
                  <span className="text-xs text-gray-600">{edu.graduationYear}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest mb-3 text-gray-900">Core Competencies</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            {data.skills.join(' • ')}
          </p>
        </div>
      )}
    </div>
  )
}
