import type { ResumeData } from './resume-template'

export function ResumeTemplateGovernment({ data }: { data: ResumeData }) {
  return (
    <div className="a4-page" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Official Header */}
      <div className="mb-8 pb-6 border-t-4 border-b-2 border-blue-900 py-4">
        <h1 className="text-2xl font-bold text-blue-900 mb-1">{data.fullName}</h1>
        <div className="text-xs text-gray-700 space-y-0.5">
          <p>Phone: {data.phone} | Email: {data.email}</p>
          <p>Location: {data.location}</p>
        </div>
      </div>

      {/* Professional Summary */}
      {data.summary && (
        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">SUMMARY OF QUALIFICATIONS</h2>
          <p className="text-xs leading-relaxed text-gray-800">{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      <div className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-3">PROFESSIONAL EXPERIENCE</h2>
        <div className="space-y-4">
          {data.experience.map((job) => (
            <div key={job.id}>
              <div className="flex justify-between">
                <span className="font-bold text-xs text-gray-900">{job.position}</span>
                <span className="text-xs text-gray-700">{job.duration}</span>
              </div>
              <p className="text-xs text-gray-700 font-semibold">{job.company}</p>
              <p className="text-xs text-gray-800 mt-1 leading-relaxed">{job.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-3">EDUCATION</h2>
        {data.education.map((edu) => (
          <div key={edu.id} className="mb-2">
            <div className="flex justify-between">
              <span className="font-bold text-xs text-gray-900">{edu.degree} in {edu.field}</span>
              <span className="text-xs text-gray-700">{edu.year}</span>
            </div>
            <p className="text-xs text-gray-700">{edu.school}</p>
          </div>
        ))}
      </div>

      {/* Competencies */}
      {data.skills.length > 0 && (
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">CORE COMPETENCIES</h2>
          <p className="text-xs text-gray-800">{data.skills.join(', ')}</p>
        </div>
      )}
    </div>
  )
}
