import type { ResumeData } from './resume-template'

export function ResumeTemplateHealthcare({ data }: { data: ResumeData }) {
  return (
    <div className="a4-page">
      {/* Professional Header */}
      <div className="mb-6 pb-4 border-b-2 border-emerald-600">
        <h1 className="text-2xl font-bold text-emerald-900 mb-2">{data.fullName}</h1>
        <div className="text-xs text-gray-700 space-y-0.5">
          <p>{data.phone} • {data.email} • {data.location}</p>
        </div>
      </div>

      {/* Professional Summary */}
      {data.summary && (
        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">PROFESSIONAL SUMMARY</h2>
          <p className="text-xs leading-relaxed text-gray-800">{data.summary}</p>
        </div>
      )}

      {/* Clinical/Professional Experience */}
      <div className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-3">PROFESSIONAL EXPERIENCE</h2>
        <div className="space-y-4">
          {data.experience.map((job) => (
            <div key={job.id} className="border-l-3 border-emerald-500 pl-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-xs text-gray-900">{job.position}</h3>
                <span className="text-xs text-gray-600 bg-emerald-50 px-2 py-1 rounded">{job.duration}</span>
              </div>
              <p className="text-xs text-emerald-700 font-semibold mb-1">{job.company}</p>
              <p className="text-xs text-gray-800 leading-relaxed">{job.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-3">EDUCATION & CREDENTIALS</h2>
        <div className="space-y-2">
          {data.education.map((edu) => (
            <div key={edu.id} className="text-xs">
              <p className="font-bold text-gray-900">{edu.degree} in {edu.field}</p>
              <p className="text-gray-700">{edu.school} • {edu.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills/Competencies */}
      {data.skills.length > 0 && (
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">CLINICAL SKILLS & COMPETENCIES</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, idx) => (
              <span key={idx} className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded border border-emerald-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
