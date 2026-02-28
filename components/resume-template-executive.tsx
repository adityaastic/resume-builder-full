import { ResumeData } from './resume-template'

export function ResumeTemplateExecutive({ data }: { data: ResumeData }) {
  return (
    <div className="a4-page">
      {/* Header with accent bar */}
      <div className="border-l-4 border-primary pl-6 mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-1">{data.fullName}</h1>
        <p className="text-sm text-primary font-semibold tracking-wide uppercase">Executive Profile</p>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-4 gap-4 text-xs text-muted-foreground mb-8 pb-6 border-b border-border">
        <div>{data.location}</div>
        <div>{data.phone}</div>
        <div>{data.email}</div>
      </div>

      {/* Professional Summary */}
      {data.summary && (
        <div className="mb-8">
          <h2 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3 border-b-2 border-primary pb-2">
            Executive Summary
          </h2>
          <p className="text-xs leading-relaxed text-muted-foreground">{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 border-b-2 border-primary pb-2">
            Professional Experience
          </h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-xs text-foreground">{exp.position}</h3>
                  <span className="text-xs text-muted-foreground">{exp.duration}</span>
                </div>
                <p className="text-xs text-primary font-semibold">{exp.company}</p>
                <p className="text-xs text-muted-foreground leading-relaxed mt-1">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 border-b-2 border-primary pb-2">
            Education
          </h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <h3 className="font-bold text-xs text-foreground">{edu.degree} in {edu.field}</h3>
                <p className="text-xs text-primary font-semibold">{edu.school}</p>
                <p className="text-xs text-muted-foreground">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div>
          <h2 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 border-b-2 border-primary pb-2">
            Core Competencies
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {data.skills.map((skill, index) => (
              <div key={index} className="bg-primary/10 px-3 py-2 rounded">
                <span className="text-xs font-semibold text-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
