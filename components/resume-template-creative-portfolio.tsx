import type { ResumeData } from './resume-template'

export function ResumeTemplateCreativePortfolio({ data }: { data: ResumeData }) {
  return (
    <div className="a4-page bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white p-6 rounded-lg mb-6 -mx-6 -mt-6 -mx-6">
        <h1 className="text-3xl font-black mb-2">{data.fullName}</h1>
        <div className="flex gap-3 text-sm">
          <span>📧 {data.email}</span>
          <span>📱 {data.phone}</span>
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mb-6 p-4 bg-white rounded-lg border-l-4 border-pink-500">
          <p className="text-xs text-gray-700 leading-relaxed">{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      <div className="mb-6">
        <h2 className="text-sm font-black uppercase tracking-wider mb-4 text-gray-900">Experience</h2>
        <div className="space-y-4">
          {data.experience.map((job) => (
            <div key={job.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-xs text-gray-900">{job.position}</h3>
                  <p className="text-xs text-rose-600 font-semibold">{job.company}</p>
                </div>
                <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">{job.duration}</span>
              </div>
              <p className="text-xs text-gray-700">{job.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Skills in Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-xs font-black uppercase tracking-wider mb-3 text-gray-900">Education</h2>
          <div className="space-y-2">
            {data.education.map((edu) => (
              <div key={edu.id} className="text-xs">
                <p className="font-bold text-gray-900">{edu.degree}</p>
                <p className="text-gray-600">{edu.school}</p>
              </div>
            ))}
          </div>
        </div>

        {data.skills.length > 0 && (
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xs font-black uppercase tracking-wider mb-3 text-gray-900">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.slice(0, 6).map((skill, idx) => (
                <span key={idx} className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full font-semibold">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
