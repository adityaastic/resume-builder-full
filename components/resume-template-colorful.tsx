import React from 'react'
import { ResumeData } from './resume-template'

export function ResumeTemplateColorful({ data }: { data: ResumeData }) {
  const colors = ['bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-green-500', 'bg-orange-500']

  return (
    <div className="a4-page">
      {/* Header with colorful accent */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-1 h-12 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.fullName}</h1>
            <p className="text-sm text-gray-600">{data.email} • {data.phone}</p>
          </div>
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mb-8 pb-6 border-l-4 border-blue-500 pl-4">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-2 text-blue-600">About</h2>
          <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-purple-500" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-purple-600">Experience</h2>
          </div>
          <div className="space-y-5">
            {data.experience.map((exp, idx) => (
              <div key={idx} className="pl-4 border-l-2 border-purple-200">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-sm font-bold text-gray-900">{exp.position}</h3>
                  <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded">
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>
                <p className="text-xs text-gray-600 font-semibold mb-2">{exp.company}</p>
                {exp.description && <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-pink-500" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-pink-600">Education</h2>
          </div>
          <div className="space-y-4 pl-4">
            {data.education.map((edu, idx) => (
              <div key={idx} className="border-l-2 border-pink-200 pl-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-xs text-gray-600">{edu.school}</p>
                  </div>
                  <span className="text-xs font-medium text-pink-600 bg-pink-50 px-2 py-1 rounded">
                    {edu.graduationYear}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-green-500" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-green-600">Skills</h2>
          </div>
          <div className="flex flex-wrap gap-2 pl-4">
            {data.skills.map((skill, idx) => (
              <span
                key={idx}
                className={`text-xs font-semibold px-3 py-1 rounded-full text-white ${colors[idx % colors.length]}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
