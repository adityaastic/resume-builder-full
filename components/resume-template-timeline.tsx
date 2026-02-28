import { ResumeData } from './resume-template'

export function ResumeTemplateTimeline({ data }: { data: ResumeData }) {
  return (
    <div className="a4-page">
      {/* Header */}
      <div className="mb-8 pb-6 border-b-2 border-primary">
        <h1 className="text-3xl font-bold text-foreground mb-1">{data.fullName}</h1>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <span>{data.location}</span>
          <span>•</span>
          <span>{data.phone}</span>
          <span>•</span>
          <span>{data.email}</span>
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mb-8">
          <h2 className="text-sm font-bold text-foreground mb-2">About</h2>
          <p className="text-xs leading-relaxed text-muted-foreground">{data.summary}</p>
        </div>
      )}

      {/* Experience Timeline */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-bold text-foreground mb-6">Experience</h2>
          <div className="relative pl-6 space-y-6">
            {data.experience.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-6 top-1 w-3 h-3 bg-primary rounded-full border-2 border-background" />
                {/* Timeline line */}
                {index !== data.experience.length - 1 && (
                  <div className="absolute -left-4 top-4 bottom-0 w-0.5 bg-primary/30" />
                )}
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-xs text-foreground">{exp.position}</h3>
                    <span className="text-xs text-primary font-semibold">{exp.duration}</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-semibold mb-1">{exp.company}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-bold text-foreground mb-4">Education</h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id} className="border-l-2 border-primary pl-4">
                <h3 className="font-bold text-xs text-foreground">{edu.degree}</h3>
                <p className="text-xs text-muted-foreground">{edu.field} • {edu.school} • {edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div>
          <h2 className="text-sm font-bold text-foreground mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span key={index} className="text-xs bg-primary/20 text-primary px-2.5 py-1.5 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
