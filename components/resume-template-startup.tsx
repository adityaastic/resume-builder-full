import type { ResumeData } from './resume-template'

export function ResumeTemplateStartup({ data }: { data: ResumeData }) {
  return (
    <div className="a4-page bg-white">
      {/* Header with gradient accent */}
      <div className="mb-8 pb-6 border-l-4 border-purple-500 pl-6">
        <h1 className="text-4xl font-black text-gray-900 mb-1">{data.fullName}</h1>
        <div className="flex gap-4 text-xs text-gray-600">
          <span>{data.phone}</span>
          <span>{data.email}</span>
          <span>{data.location}</span>
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mb-6">
          <p className="text-xs leading-relaxed text-gray-700">{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      <div className="mb-6">
        <h2 className="text-sm font-black uppercase tracking-wider mb-3 text-gray-900">Experience</h2>
        {data.experience.map((job, idx) => (
          <div key={job.id} className={`mb-4 ${idx !== data.experience.length - 1 ? 'pb-4 border-b border-gray-200' : ''}`}>
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-xs text-gray-900">{job.position}</h3>
              <span className="text-xs text-purple-600 font-semibold">{job.duration}</span>
            </div>
            <p className="text-xs text-gray-600 mb-2">{job.company}</p>
            <p className="text-xs text-gray-700 leading-relaxed">{job.description}</p>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="text-sm font-black uppercase tracking-wider mb-3 text-gray-900">Education</h2>
        {data.education.map((edu) => (
          <div key={edu.id} className="mb-2">
            <p className="font-bold text-xs text-gray-900">{edu.degree} in {edu.field}</p>
            <p className="text-xs text-gray-600">{edu.school} • {edu.year}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      {data.skills.length > 0 && (
        <div>
          <h2 className="text-sm font-black uppercase tracking-wider mb-3 text-gray-900">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, idx) => (
              <span key={idx} className="text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
