import React from 'react'
import { ResumeData } from './resume-template'

export function ResumeTemplateTech({ data }: { data: ResumeData }) {
  return (
    <div className="a4-page !bg-gradient-to-br from-slate-900 to-slate-800 !text-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-1 font-mono">&lt;{data.fullName.split(' ')[0].toLowerCase()} /&gt;</h1>
        <div className="flex gap-4 text-xs text-cyan-400 font-mono">
          <a href={`mailto:${data.email}`}>{data.email}</a>
          <span>•</span>
          <span>{data.phone}</span>
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mb-7 pb-6 border-b border-slate-700">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-2 text-cyan-400 font-mono">
            / / about
          </h2>
          <p className="text-sm leading-relaxed text-slate-300">{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-7 pb-6 border-b border-slate-700">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-cyan-400 font-mono">
            / / experience
          </h2>
          <div className="space-y-4">
            {data.experience.map((exp, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-start mb-1">
                  <span className="text-sm font-mono text-cyan-300">{exp.position}</span>
                  <span className="text-xs text-slate-500 font-mono">{exp.startDate} → {exp.endDate}</span>
                </div>
                <p className="text-xs text-slate-400 mb-1">@ {exp.company}</p>
                {exp.description && (
                  <p className="text-sm text-slate-300 leading-relaxed">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-7 pb-6 border-b border-slate-700">
          <h2 className="text-xs font-bold uppercase tracking-widest mb-4 text-cyan-400 font-mono">
            / / education
          </h2>
          <div className="space-y-3">
            {data.education.map((edu, idx) => (
              <div key={idx}>
                <span className="text-sm font-mono text-cyan-300">{edu.degree}</span>
                <p className="text-xs text-slate-400">{edu.school} • {edu.graduationYear}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest mb-3 text-cyan-400 font-mono">
            / / skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, idx) => (
              <span key={idx} className="text-xs px-2 py-1 bg-slate-700 text-cyan-300 rounded font-mono">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
