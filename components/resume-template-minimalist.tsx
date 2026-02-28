import { ResumeData } from './resume-template'

export function ResumeTemplateMinimalist({ data }: { data: ResumeData }) {
  return (
    <div className="a4-page" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Header */}
      <div className="mb-8 border-b-2 border-black pb-6">
        <h1 className="text-4xl font-bold text-black mb-1">{data.fullName}</h1>
        <p className="text-sm text-gray-600">{data.email} · {data.phone}</p>
      </div>

      {/* Professional Summary */}
      {data.summary && (
        <div className="mb-8">
          <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-bold text-black uppercase tracking-widest mb-4">Experience</h2>
          <div className="space-y-4">
            {data.experience.map((job, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline mb-1">
                  <p className="font-semibold text-black">{job.position}</p>
                  <p className="text-xs text-gray-600">{job.startDate} – {job.endDate}</p>
                </div>
                <p className="text-sm text-gray-600 mb-2">{job.company}</p>
                {job.description && (
                  <p className="text-sm text-gray-700 leading-relaxed">{job.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-bold text-black uppercase tracking-widest mb-4">Education</h2>
          <div className="space-y-3">
            {data.education.map((edu, idx) => (
              <div key={idx}>
                <p className="font-semibold text-black">{edu.school}</p>
                <p className="text-sm text-gray-700">{edu.degree} in {edu.field}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div>
          <h2 className="text-sm font-bold text-black uppercase tracking-widest mb-3">Skills</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{data.skills.join(' · ')}</p>
        </div>
      )}
    </div>
  )
}
