import React from 'react'
import { ResumeData } from './resume-template'

interface ResumeTemplatePhotoProps {
  data: ResumeData
}

export function ResumeTemplatePhoto({ data }: ResumeTemplatePhotoProps) {
  return (
    <div className="a4-page">
      <div className="grid grid-cols-4 gap-8">
        {/* Left Sidebar with Photo */}
        <div className="col-span-1 flex flex-col items-center">
          {/* Photo */}
          {data.photo ? (
            <div className="w-32 h-32 mb-6 rounded-lg overflow-hidden border-2 border-gray-400 shadow-md">
              <img src={data.photo} alt={data.fullName} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-32 h-32 mb-6 rounded-lg bg-gray-200 border-2 border-gray-400 flex items-center justify-center">
              <span className="text-gray-500 text-xs text-center">Photo</span>
            </div>
          )}

          {/* Contact Info */}
          <div className="space-y-2 text-left w-full">
            <div className="text-xs border-b border-gray-300 pb-2 mb-2">
              <p className="font-bold uppercase text-gray-800">Contact</p>
            </div>
            {data.email && <p className="text-xs text-gray-700 break-words">{data.email}</p>}
            {data.phone && <p className="text-xs text-gray-700">{data.phone}</p>}
            {data.location && <p className="text-xs text-gray-700">{data.location}</p>}
          </div>

          {/* Skills Sidebar */}
          {data.skills.length > 0 && (
            <div className="mt-6 w-full">
              <div className="text-xs border-b border-gray-300 pb-2 mb-2">
                <p className="font-bold uppercase text-gray-800">Skills</p>
              </div>
              <div className="flex flex-wrap gap-1">
                {data.skills.map((skill, index) => (
                  <span key={index} className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Content Area */}
        <div className="col-span-3 space-y-4">
          {/* Header */}
          <div className="border-b-2 border-gray-400 pb-4">
            <h1 className="text-3xl font-bold text-gray-900">{data.fullName}</h1>
          </div>

          {/* Professional Summary */}
          {data.summary && (
            <section>
              <h2 className="text-sm font-bold uppercase text-gray-800 border-b border-gray-300 pb-2 mb-2">
                Professional Summary
              </h2>
              <p className="text-xs leading-relaxed text-gray-700">{data.summary}</p>
            </section>
          )}

          {/* Experience */}
          {data.experience.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase text-gray-800 border-b border-gray-300 pb-2 mb-2">
                Professional Experience
              </h2>
              <div className="space-y-3">
                {data.experience.map((job) => (
                  <div key={job.id}>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-xs text-gray-900">{job.position}</p>
                        <p className="text-xs text-gray-700">{job.company}</p>
                      </div>
                      <p className="text-xs text-gray-700 whitespace-nowrap ml-2">{job.duration}</p>
                    </div>
                    <p className="text-xs mt-1 leading-relaxed text-gray-700">{job.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {data.education.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase text-gray-800 border-b border-gray-300 pb-2 mb-2">
                Education
              </h2>
              <div className="space-y-2">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-xs text-gray-900">{edu.degree}</p>
                        <p className="text-xs text-gray-700">
                          {edu.school}
                          {edu.field && ` • ${edu.field}`}
                        </p>
                      </div>
                      <p className="text-xs text-gray-700">{edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
