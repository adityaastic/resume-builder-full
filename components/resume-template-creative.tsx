import { ResumeData } from './resume-template'

export function ResumeTemplateCreative({ data }: { data: ResumeData }) {
  return (
    <div className="a4-page flex p-0"  style={{ display: 'flex' }}>
      {/* Sidebar */}
      <div className="w-1/3 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 p-8 text-white">
        {/* Name on Sidebar */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1">{data.fullName.split(' ')[0]}</h1>
          <p className="text-blue-200 text-sm">{data.fullName.split(' ').slice(1).join(' ')}</p>
        </div>

        {/* Contact */}
        <div className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-3">Contact</h3>
          <div className="space-y-2 text-sm">
            <p className="break-words">{data.email}</p>
            <p>{data.phone}</p>
          </div>
        </div>

        {/* Skills Sidebar */}
        {data.skills.length > 0 && (
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-blue-200 mb-3">Skills</h3>
            <div className="space-y-2">
              {data.skills.slice(0, 6).map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-300 rounded-full" />
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="w-2/3 p-8">
        {/* Professional Summary */}
        {data.summary && (
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-900 mb-3">About</h2>
            <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-900 mb-4">Experience</h2>
            <div className="space-y-5">
              {data.experience.map((job, idx) => (
                <div key={idx} className="relative pl-4 border-l-2 border-blue-400">
                  <div className="absolute -left-2.5 top-0 w-2 h-2 bg-blue-500 rounded-full" />
                  <p className="font-semibold text-gray-900">{job.position}</p>
                  <p className="text-xs text-blue-600 font-medium mb-1">{job.company}</p>
                  <p className="text-xs text-gray-500 mb-2">{job.startDate} – {job.endDate}</p>
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
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-900 mb-4">Education</h2>
            <div className="space-y-3">
              {data.education.map((edu, idx) => (
                <div key={idx} className="relative pl-4 border-l-2 border-blue-400">
                  <div className="absolute -left-2.5 top-0 w-2 h-2 bg-blue-500 rounded-full" />
                  <p className="font-semibold text-gray-900">{edu.school}</p>
                  <p className="text-sm text-gray-700">{edu.degree} in {edu.field}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
