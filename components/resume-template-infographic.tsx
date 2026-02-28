import { ResumeData } from './resume-template'

export function ResumeTemplateInfographic({ data }: { data: ResumeData }) {
  return (
    <div className="a4-page">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 -mx-20 -mt-20 mb-8 px-20 pt-20 pb-6">
        <h1 className="text-4xl font-bold text-foreground mb-1">{data.fullName}</h1>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span>{data.location}</span>
          <span className="text-primary">•</span>
          <span>{data.phone}</span>
          <span className="text-primary">•</span>
          <span>{data.email}</span>
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div className="mb-8 pb-6 border-b border-border">
          <p className="text-xs leading-relaxed text-muted-foreground">{data.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-1 h-1 bg-primary rounded-full" />
            Experience
          </h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id} className="bg-primary/5 border-l-3 border-primary pl-4 py-3">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-xs text-foreground">{exp.position}</h3>
                  <span className="text-xs text-primary font-semibold">{exp.duration}</span>
                </div>
                <p className="text-xs text-muted-foreground font-semibold mb-1">{exp.company}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-1 h-1 bg-primary rounded-full" />
            Education
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {data.education.map((edu) => (
              <div key={edu.id} className="bg-primary/5 p-3 rounded">
                <h3 className="font-bold text-xs text-foreground">{edu.degree}</h3>
                <p className="text-xs text-muted-foreground">{edu.field}</p>
                <p className="text-xs text-primary font-semibold">{edu.school}</p>
                <p className="text-xs text-muted-foreground">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills with Progress Bars */}
      {data.skills.length > 0 && (
        <div>
          <h2 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
            <span className="w-1 h-1 bg-primary rounded-full" />
            Skills
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {data.skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-semibold text-foreground">{skill}</span>
                  <span className="text-xs text-primary">{85 + (index % 15)}%</span>
                </div>
                <div className="h-1.5 bg-primary/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/60"
                    style={{ width: `${85 + (index % 15)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
