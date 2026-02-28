import type { ResumeData } from './resume-template'

export function ResumeTemplateAcademic({ data }: { data: ResumeData }) {
  return (
    <div className="a4-page" style={{ fontFamily: 'Times New Roman, serif' }}>
      {/* Header */}
      <div className="text-center mb-6 pb-4 border-b-2 border-gray-400">
        <h1 className="text-3xl font-bold text-gray-900">{data.fullName}</h1>
        <div className="text-sm text-gray-700 mt-2 space-y-1">
          <p>{data.phone} | {data.email}</p>
          <p>{data.location}</p>
        </div>
      </div>

      {/* Professional Summary */}
      {data.summary && (
        <div className="mb-5">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-400 pb-1 mb-2">PROFESSIONAL SUMMARY</h2>
          <p className="text-xs leading-relaxed">{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      <div className="mb-5">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-400 pb-1 mb-2">PROFESSIONAL EXPERIENCE</h2>
        <div className="space-y-3">
          {data.experience.map((job) => (
            <div key={job.id} className="text-xs">
              <div className="flex justify-between">
                <span className="font-bold">{job.position}</span>
                <span className="text-gray-700">{job.duration}</span>
              </div>
              <p className="text-gray-700 italic">{job.company}</p>
              <p className="text-gray-800 mt-1">{job.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-5">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-400 pb-1 mb-2">EDUCATION</h2>
        <div className="space-y-2">
          {data.education.map((edu) => (
            <div key={edu.id} className="text-xs">
              <div className="flex justify-between">
                <span className="font-bold">{edu.degree} in {edu.field}</span>
                <span className="text-gray-700">{edu.year}</span>
              </div>
              <p className="text-gray-700">{edu.school}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      {data.skills.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-400 pb-1 mb-2">CORE COMPETENCIES</h2>
          <p className="text-xs text-gray-800">{data.skills.join(', ')}</p>
        </div>
      )}
    </div>
  )
}
