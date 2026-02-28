import type { ResumeData } from './resume-template'

export function ResumeTemplateSidebar({ data }: { data: ResumeData }) {
  return (
    <div className="a4-page p-0 flex">
      {/* Left Sidebar */}
      <div className="w-2/5 bg-gradient-to-br from-slate-800 to-slate-900 text-white p-6">
        {/* Name */}
        <h1 className="text-2xl font-bold mb-6">{data.fullName}</h1>

        {/* Contact Info */}
        <div className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-blue-300">Contact</h3>
          <div className="text-xs space-y-2 text-gray-200">
            <p>{data.phone}</p>
            <p>{data.email}</p>
            <p>{data.location}</p>
          </div>
        </div>

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-blue-300">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, idx) => (
                <span key={idx} className="text-xs bg-blue-600 px-2 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Content */}
      <div className="w-3/5 p-6">
        {/* Summary */}
        {data.summary && (
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider mb-2 text-slate-800">Profile</h2>
            <p className="text-xs leading-relaxed text-gray-700">{data.summary}</p>
          </div>
        )}

        {/* Experience */}
        <div className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider mb-3 text-slate-800">Experience</h2>
          <div className="space-y-4">
            {data.experience.map((job) => (
              <div key={job.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-xs text-gray-900">{job.position}</p>
                    <p className="text-xs text-gray-600">{job.company}</p>
                  </div>
                  <span className="text-xs text-gray-600">{job.duration}</span>
                </div>
                <p className="text-xs text-gray-700 mt-1">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider mb-3 text-slate-800">Education</h2>
          <div className="space-y-2">
            {data.education.map((edu) => (
              <div key={edu.id} className="text-xs">
                <p className="font-bold text-gray-900">{edu.degree}</p>
                <p className="text-gray-600">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
