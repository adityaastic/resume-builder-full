'use client';

import { Check } from 'lucide-react'

export type TemplateType =
  | 'classic' | 'modern' | 'minimalist' | 'creative' | 'professional'
  | 'tech' | 'colorful' | 'photo' | 'executive' | 'timeline' | 'infographic'
  | 'academic' | 'sidebar' | 'startup' | 'creative-portfolio' | 'government' | 'healthcare'

interface TemplateSelectorProps {
  selected: TemplateType
  onSelect: (template: TemplateType) => void
}

// ─── Template Categories ──────────────────────────────────────────────────────

export const TEMPLATE_CATEGORIES = [
  {
    name: 'Classic & Traditional',
    description: 'Timeless professional designs ideal for traditional industries',
    templates: [
      { id: 'classic' as TemplateType, name: 'Classic', description: 'Traditional layout with clear sections' },
      { id: 'minimalist' as TemplateType, name: 'Minimalist', description: 'Clean serif design with bold borders' },
      { id: 'professional' as TemplateType, name: 'Professional', description: 'Elegant serif typography' },
      { id: 'government' as TemplateType, name: 'Government', description: 'Official formal design' },
    ],
  },
  {
    name: 'Modern & Tech',
    description: 'Contemporary designs perfect for technology and innovation roles',
    templates: [
      { id: 'modern' as TemplateType, name: 'Modern', description: 'Compact contemporary design' },
      { id: 'tech' as TemplateType, name: 'Tech', description: 'Dark slate with cyan accents' },
      { id: 'startup' as TemplateType, name: 'Startup', description: 'Bold design for tech startups' },
    ],
  },
  {
    name: 'Creative & Visual',
    description: 'Vibrant designs with visual elements for creative professionals',
    templates: [
      { id: 'creative' as TemplateType, name: 'Creative', description: 'Blue sidebar with timeline experience' },
      { id: 'colorful' as TemplateType, name: 'Colorful', description: 'Vibrant gradient accents' },
      { id: 'infographic' as TemplateType, name: 'Infographic', description: 'Visual design with progress bars' },
      { id: 'creative-portfolio' as TemplateType, name: 'Creative Portfolio', description: 'Gradient elements and cards' },
    ],
  },
  {
    name: 'Corporate & Executive',
    description: 'High-impact designs for leadership and corporate positions',
    templates: [
      { id: 'executive' as TemplateType, name: 'Executive', description: 'Corporate style with accent bars' },
      { id: 'sidebar' as TemplateType, name: 'Sidebar', description: 'Two-column with dark sidebar' },
      { id: 'photo' as TemplateType, name: 'With Photo', description: 'Layout with photo section' },
    ],
  },
  {
    name: 'Specialized & Focused',
    description: 'Designs tailored for specific industries and roles',
    templates: [
      { id: 'academic' as TemplateType, name: 'Academic', description: 'Research and academic credentials' },
      { id: 'healthcare' as TemplateType, name: 'Healthcare', description: 'Professional clinical design' },
      { id: 'timeline' as TemplateType, name: 'Timeline', description: 'Visual timeline and milestones' },
    ],
  },
]

// ─── PREVIEW COMPONENTS (rendered at 800px, scaled down) ─────────────────────
// All previews use inline styles (no Tailwind) to avoid purge issues at scale.
// Font sizes are in px that look good at 800px wide, then get scaled to ~0.33x.

// ─── PREVIEW COMPONENTS (rendered at 1200px, scaled down) ────────────────────
// Previews use detailed HTML/CSS to mimic real-life document thumbnails.

function PreviewClassic() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', padding: '60px 50px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', fontFamily: '"Times New Roman", Times, serif' }}>
      <div style={{ textAlign: 'center', marginBottom: 40, borderBottom: '3px solid #000', paddingBottom: 25 }}>
        <div style={{ fontSize: 56, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '3px', color: '#000' }}>John Snow</div>
        <div style={{ fontSize: 20, color: '#334155', marginTop: 12, fontWeight: 700, letterSpacing: '1px' }}>M.Sc. Snack Science student</div>
        <div style={{ fontSize: 16, color: '#475569', marginTop: 10, display: 'flex', justifyContent: 'center', gap: 15 }}>
          <span>john.snow@example.com</span>
          <span>|</span>
          <span>+1 234 567 890</span>
          <span>|</span>
          <span>San Francisco, CA</span>
        </div>
      </div>
      
      <div style={{ marginBottom: 35 }}>
        <div style={{ fontSize: 22, fontWeight: 800, textTransform: 'uppercase', borderBottom: '1px solid #000', paddingBottom: 5, marginBottom: 15, color: '#000' }}>Skills</div>
        <div style={{ fontSize: 16, color: '#1e293b', lineHeight: 1.6, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
          <div><b>Languages:</b> Python, JavaScript</div>
          <div><b>Frontend:</b> React, Tailwind</div>
          <div><b>Backend:</b> Node.js, SQL</div>
          <div><b>Tools:</b> Git, Docker, Figma</div>
        </div>
      </div>

      <div style={{ marginBottom: 35 }}>
        <div style={{ fontSize: 22, fontWeight: 800, textTransform: 'uppercase', borderBottom: '1px solid #000', paddingBottom: 5, marginBottom: 15, color: '#000' }}>Experience</div>
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: 19, color: '#000' }}>
            <span>Senior Software Engineer • Tech Corp</span>
            <span>2021 – Present</span>
          </div>
          <div style={{ fontSize: 16, marginTop: 8, color: '#334155', lineHeight: 1.6 }}>
            • Engineered a highly scalable microservice architecture using Go and Kubernetes.<br/>
            • Improved system performance by 40% through extensive database optimization.<br/>
            • Mentored junior developers and led the transition to a modern frontend stack.
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: 19, color: '#000' }}>
            <span>Full Stack Developer • Innovate Solutions</span>
            <span>2018 – 2021</span>
          </div>
          <div style={{ fontSize: 16, marginTop: 8, color: '#334155', lineHeight: 1.6 }}>
            • Developed and maintained multiple high-traffic web applications used by millions.<br/>
            • Integrated third-party APIs and services for seamless data synchronization.
          </div>
        </div>
      </div>

      <div>
        <div style={{ fontSize: 22, fontWeight: 800, textTransform: 'uppercase', borderBottom: '1px solid #000', paddingBottom: 5, marginBottom: 15, color: '#000' }}>Education</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: 19, color: '#000' }}>
          <span>M.S. in Computer Science • University of Technology</span>
          <span>2018</span>
        </div>
      </div>
    </div>
  )
}

function PreviewMinimalist() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', padding: '60px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', fontFamily: '"Hoefler Text", "Baskerville Old Face", Garamond, "Times New Roman", serif' }}>
      <div style={{ borderTop: '8px solid #000', borderBottom: '2px solid #000', padding: '25px 0', marginBottom: 40, textAlign: 'center' }}>
        <div style={{ fontSize: 52, fontWeight: 400, color: '#000', letterSpacing: '6px', textTransform: 'uppercase' }}>Jane Doe</div>
        <div style={{ fontSize: 18, color: '#444', letterSpacing: '3px', textTransform: 'uppercase', marginTop: 10, fontWeight: 600 }}>Art Director • Designer</div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 40 }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 900, textTransform: 'uppercase', color: '#000', borderBottom: '1px solid #000', paddingBottom: 5, marginBottom: 20 }}>Contact</div>
          <div style={{ fontSize: 15, color: '#444', lineHeight: 1.8 }}>
            hello@janedoe.com<br/>+1 212-555-0198<br/>Brooklyn, NY
          </div>
          
          <div style={{ fontSize: 18, fontWeight: 900, textTransform: 'uppercase', color: '#000', borderBottom: '1px solid #000', paddingBottom: 5, marginTop: 40, marginBottom: 20 }}>Expertise</div>
          <div style={{ fontSize: 15, color: '#444', lineHeight: 1.8 }}>
            Brand Identity<br/>Typography<br/>Editorial Design<br/>Art Direction
          </div>
        </div>
        
        <div>
          <div style={{ fontSize: 18, fontWeight: 900, textTransform: 'uppercase', color: '#000', borderBottom: '1px solid #000', paddingBottom: 5, marginBottom: 20 }}>Experience</div>
          {[
            { t: 'Senior Art Director', c: 'Modern Studio', d: '2019 – Present' },
            { t: 'Graphic Designer', c: 'Vogue Magazine', d: '2016 – 2019' }
          ].map(j => (
            <div key={j.t} style={{ marginBottom: 30 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, fontWeight: 800 }}>
                <span>{j.t}</span>
                <span style={{ fontSize: 14, fontWeight: 500 }}>{j.d}</span>
              </div>
              <div style={{ fontSize: 15, fontStyle: 'italic', color: '#666', marginTop: 2 }}>{j.c}</div>
              <div style={{ fontSize: 15, color: '#444', marginTop: 10, lineHeight: 1.6 }}>Developed award-winning visual identities for Fortune 500 clients.</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PreviewProfessional() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fffbeb', padding: '60px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', fontFamily: 'Garamond, serif' }}>
      <div style={{ textAlign: 'center', borderBottom: '2px solid #78350f', paddingBottom: 30, marginBottom: 45 }}>
        <div style={{ fontSize: 56, fontWeight: 800, color: '#78350f', letterSpacing: '2px' }}>Sarah Anderson</div>
        <div style={{ fontSize: 22, color: '#92400e', fontStyle: 'italic', fontWeight: 600, marginTop: 12 }}>Senior Executive Financial Officer</div>
        <div style={{ fontSize: 16, color: '#92400e', marginTop: 15, display: 'flex', justifyContent: 'center', gap: 15 }}>
          <span>s.anderson@corporate.com</span>
          <span>•</span>
          <span>+1 312 555 0101</span>
          <span>•</span>
          <span>Chicago, IL</span>
        </div>
      </div>
      
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 20, fontWeight: 900, textTransform: 'uppercase', color: '#78350f', borderBottom: '1px solid #fcd34d', paddingBottom: 8, marginBottom: 20 }}>Executive Summary</div>
        <div style={{ fontSize: 17, lineHeight: 1.7, color: '#78350f', textAlign: 'justify' }}>
          Distinguished finance professional with 15+ years of success in global asset management and corporate strategy. 
          Proven track record of driving multi-million dollar revenue growth and operational excellence.
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 20, fontWeight: 900, textTransform: 'uppercase', color: '#78350f', borderBottom: '1px solid #fcd34d', paddingBottom: 8, marginBottom: 20 }}>Core Competencies</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 15 }}>
          {['Strategic Planning', 'Risk Mitigation', 'M&A Advisory', 'Global Logistics', 'Fiscal Controls', 'Stakeholder Mngmt'].map(s => (
            <div key={s} style={{ fontSize: 16, color: '#92400e', display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 6, height: 6, background: '#b45309', borderRadius: '50%' }} />
              {s}
            </div>
          ))}
        </div>
      </div>

      <div>
        <div style={{ fontSize: 20, fontWeight: 900, textTransform: 'uppercase', color: '#78350f', borderBottom: '1px solid #fcd34d', paddingBottom: 8, marginBottom: 20 }}>Significant Experience</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: 19, color: '#78350f' }}>
          <span>Managing Director • Goldman Sachs</span>
          <span>2015 – Present</span>
        </div>
        <div style={{ fontSize: 16, color: '#92400e', lineHeight: 1.6, marginTop: 10 }}>
          Overseeing $2.4B in annual assets under management across emerging markets.
        </div>
      </div>
    </div>
  )
}

function PreviewGovernment() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', padding: '60px', fontFamily: '"Times New Roman", Times, serif', boxSizing: 'border-box' }}>
      <div style={{ border: '4px solid #000', padding: '30px', textAlign: 'center', marginBottom: 50 }}>
        <div style={{ fontSize: 48, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', color: '#000' }}>Michael J. Harrison</div>
        <div style={{ fontSize: 20, color: '#111827', fontWeight: 700, marginTop: 10, borderTop: '1px solid #000', paddingTop: 10, display: 'inline-block' }}>GS-14 Senior Program Analyst • Department of Homeland Security</div>
      </div>
      
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 22, fontWeight: 900, textTransform: 'uppercase', borderBottom: '2px solid #000', paddingBottom: 5, marginBottom: 20 }}>Professional Summary</div>
        <div style={{ fontSize: 17, lineHeight: 1.6, color: '#111827', textAlign: 'justify' }}>
          Accomplished Federal Program Manager with 15+ years of experience in multi-agency coordination, budgetary oversight, and strategic policy implementation. 
          Expert in NAVAIR and FAR regulations with a proven track record of optimizing inter-departmental workflows.
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 22, fontWeight: 900, textTransform: 'uppercase', borderBottom: '2px solid #000', paddingBottom: 5, marginBottom: 20 }}>Work History</div>
        {[
          { t: 'Senior Program Manager', c: 'DHS • Washington DC', d: '2018 – Present', s: 'Directing a $50M annual budget for cybersecurity infrastructure.' },
          { t: 'Strategic Specialist', c: 'Department of Justice', d: '2012 – 2018', s: 'Managed compliance for federal grant programs across 15 states.' }
        ].map(j => (
          <div key={j.t} style={{ marginBottom: 30 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20, fontWeight: 800, color: '#000' }}>
              <span>{j.t}</span>
              <span style={{ fontSize: 16 }}>{j.d}</span>
            </div>
            <div style={{ fontSize: 18, color: '#374151', fontWeight: 700, marginTop: 4 }}>{j.c}</div>
            <div style={{ fontSize: 17, color: '#000', marginTop: 10, lineHeight: 1.5 }}>{j.s} Negotiated service level agreements with major defense contractors.</div>
          </div>
        ))}
      </div>

      <div>
        <div style={{ fontSize: 22, fontWeight: 900, textTransform: 'uppercase', borderBottom: '2px solid #000', paddingBottom: 5, marginBottom: 20 }}>Clearances & Certifications</div>
        <div style={{ fontSize: 18, color: '#000', fontWeight: 700 }}>• TS/SCI Security Clearance (Active)<br/>• PMP Certification • FAC-P/PM Level III</div>
      </div>
    </div>
  )
}

function PreviewModern() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', padding: '60px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 50 }}>
        <div>
          <div style={{ fontSize: 64, fontWeight: 900, color: '#1e40af', letterSpacing: '-2px', lineHeight: 1 }}>Harshibar</div>
          <div style={{ fontSize: 24, fontWeight: 600, color: '#3b82f6', marginTop: 10 }}>Lead Software Engineer</div>
        </div>
        <div style={{ textAlign: 'right', fontSize: 16, color: '#64748b', lineHeight: 1.8, fontWeight: 500 }}>
          harshibar@example.com<br/>+1 555-9876<br/>San Francisco, CA
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60 }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 900, textTransform: 'uppercase', color: '#111827', marginBottom: 20, letterSpacing: '1px' }}>Core Expertise</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {['Cloud Arch', 'React/Next.js', 'Node.js', 'PostgreSQL', 'AWS'].map(s => (
              <div key={s} style={{ background: '#eff6ff', color: '#1d4ed8', padding: '8px 16px', borderRadius: 6, fontSize: 15, fontWeight: 700 }}>{s}</div>
            ))}
          </div>
          
          <div style={{ fontSize: 18, fontWeight: 900, textTransform: 'uppercase', color: '#111827', marginTop: 45, marginBottom: 20, letterSpacing: '1px' }}>Education</div>
          <div style={{ fontSize: 16, color: '#111827', fontWeight: 800 }}>UC Berkeley</div>
          <div style={{ fontSize: 15, color: '#64748b', marginTop: 4 }}>B.S. in Computer Science</div>
          <div style={{ fontSize: 14, color: '#94a3b8', marginTop: 4 }}>2014 – 2018</div>
        </div>
        
        <div style={{ borderLeft: '2px solid #f1f5f9', paddingLeft: 40 }}>
          <div style={{ fontSize: 18, fontWeight: 900, textTransform: 'uppercase', color: '#111827', marginBottom: 20, letterSpacing: '1px' }}>Experience</div>
          {[
            { t: 'Staff Engineer', c: 'Vercel', d: '2021 – Present', desc: 'Leading the development of Next.js features and developer experience.' },
            { t: 'Senior Developer', c: 'GitHub', d: '2019 – 2021', desc: 'Built core features for GitHub Actions and security automation.' }
          ].map(j => (
            <div key={j.t} style={{ marginBottom: 35 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 19, fontWeight: 800, color: '#111827' }}>
                <span>{j.t}</span>
                <span style={{ color: '#94a3b8', fontSize: 15, fontWeight: 500 }}>{j.d}</span>
              </div>
              <div style={{ fontSize: 17, color: '#3b82f6', fontWeight: 700, marginTop: 4 }}>{j.c}</div>
              <div style={{ fontSize: 16, color: '#475569', lineHeight: 1.6, marginTop: 10 }}>
                {j.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PreviewTech() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#0f172a', padding: '50px', fontFamily: '"Fira Code", monospace', boxSizing: 'border-box' }}>
      <div style={{ border: '2px solid #38bdf8', padding: '30px', marginBottom: 40, position: 'relative' }}>
        <div style={{ position: 'absolute', top: -15, left: 20, background: '#0f172a', padding: '0 10px', color: '#38bdf8', fontSize: 18, fontWeight: 700 }}>&lt;identity&gt;</div>
        <div style={{ fontSize: 48, fontWeight: 800, color: '#f8fafc' }}>Alex River.js</div>
        <div style={{ fontSize: 20, color: '#38bdf8', marginTop: 10 }}>[Full Stack Developer // Cloud Architect]</div>
        <div style={{ fontSize: 16, color: '#94a3b8', marginTop: 15 }}>// Contact: alex.dev@null.ptr | github.com/ariver | @alexsys</div>
      </div>
      
      <div style={{ marginBottom: 35 }}>
        <div style={{ color: '#38bdf8', fontSize: 20, fontWeight: 800, marginBottom: 15 }}>const STACK = {`{`}</div>
        <div style={{ paddingLeft: 30, fontSize: 16, lineHeight: 1.8 }}>
          <div style={{ color: '#f8fafc' }}><span style={{ color: '#94a3b8' }}>frontend:</span> ["React", "TypeScript", "Next.js", "Three.js"],</div>
          <div style={{ color: '#f8fafc' }}><span style={{ color: '#94a3b8' }}>backend:</span> ["Node.js", "Go", "Rust", "PostgreSQL"],</div>
          <div style={{ color: '#f8fafc' }}><span style={{ color: '#94a3b8' }}>infra:</span> ["AWS", "Docker", "K8s", "Terraform"]</div>
        </div>
        <div style={{ color: '#38bdf8', fontSize: 20, fontWeight: 800 }}>{`}`}</div>
      </div>

      <div>
        <div style={{ color: '#38bdf8', fontSize: 20, fontWeight: 800, marginBottom: 15 }}>async function getExperience() {`{`}</div>
        <div style={{ paddingLeft: 30 }}>
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 18, color: '#f8fafc', fontWeight: 700 }}>"Lead Systems Engineer" @ "SpaceX"</div>
            <div style={{ fontSize: 14, color: '#64748b' }}>// 2021 – PRESENT</div>
            <div style={{ fontSize: 16, color: '#94a3b8', marginTop: 8 }}>• Optimized telemetry processing pipeline, reducing latency by 60%.</div>
          </div>
          <div>
            <div style={{ fontSize: 18, color: '#f8fafc', fontWeight: 700 }}>"Backend Developer" @ "Stripe"</div>
            <div style={{ fontSize: 14, color: '#64748b' }}>// 2018 – 2021</div>
          </div>
        </div>
        <div style={{ color: '#38bdf8', fontSize: 20, fontWeight: 800 }}>{`}`}</div>
      </div>
    </div>
  )
}

function PreviewStartup() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', padding: 0, fontFamily: 'system-ui', boxSizing: 'border-box' }}>
      <div style={{ background: '#7c3aed', padding: '60px', color: '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 56, fontWeight: 900, letterSpacing: '-1px' }}>Marcus Volt</div>
            <div style={{ fontSize: 22, fontWeight: 500, color: '#ddd6fe', marginTop: 10 }}>Growth Lead & Founding Engineer</div>
          </div>
          <div style={{ width: 100, height: 100, borderRadius: 24, background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40 }}>⚡</div>
        </div>
      </div>
      
      <div style={{ padding: '50px 60px', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 60 }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 900, textTransform: 'uppercase', color: '#7c3aed', letterSpacing: '2px', marginBottom: 20 }}>The Mission</div>
          <div style={{ fontSize: 18, color: '#4b5563', lineHeight: 1.6, marginBottom: 40 }}>
            Scaling high-impact startups from 1 to 100. Obsessed with product-market fit, user retention, and performance-driven engineering. 
          </div>
          
          <div style={{ fontSize: 14, fontWeight: 900, textTransform: 'uppercase', color: '#7c3aed', letterSpacing: '2px', marginBottom: 25 }}>Ventures</div>
          {[
            { n: 'Vortex AI', r: 'Lead Engineer (Employee #4)', d: '2022 – Now', dsc: 'Scaling API throughput for over 2M+ active daily users.' },
            { n: 'Spark.io', r: 'Full Stack Dev', d: '2020 – 2022', dsc: 'Early team member, helped raise $15M Series A.' }
          ].map(v => (
            <div key={v.n} style={{ marginBottom: 30 }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: '#111827' }}>{v.n}</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: '#7c3aed', marginTop: 4 }}>{v.r} <span style={{ color: '#94a3b8', fontWeight: 400 }}>• {v.d}</span></div>
              <div style={{ fontSize: 15, color: '#6b7280', marginTop: 8 }}>{v.dsc}</div>
            </div>
          ))}
        </div>
        
        <div>
          <div style={{ fontSize: 14, fontWeight: 900, textTransform: 'uppercase', color: '#7c3aed', letterSpacing: '2px', marginBottom: 20 }}>Toolkit</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {['Growth Hacking', 'React / Next.js', 'Postgres', 'Redis', 'TypeScript', 'Storytelling'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 16, fontWeight: 600, color: '#4b5563' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#7c3aed' }} />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function PreviewCreative() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }}>
      <div style={{ width: '400px', background: '#2563eb', color: '#fff', padding: '60px 40px', boxSizing: 'border-box' }}>
        <div style={{ width: 150, height: 150, borderRadius: '50%', background: '#fff', marginBottom: 40, border: '8px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 60 }}>🎨</div>
        <div style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1 }}>Mia<br/>Castillo</div>
        <div style={{ fontSize: 20, color: '#bfdbfe', fontWeight: 700, marginTop: 15 }}>Visual Storyteller</div>
        
        <div style={{ marginTop: 60 }}>
          <div style={{ fontSize: 14, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '3px', color: '#93c5fd', marginBottom: 25 }}>Reach Out</div>
          <div style={{ fontSize: 16, color: '#eff6ff', marginBottom: 15 }}>mia.create@gmail.com</div>
          <div style={{ fontSize: 16, color: '#eff6ff', marginBottom: 15 }}>+1 (415) 888-9999</div>
          <div style={{ fontSize: 16, color: '#eff6ff' }}>miacastillo.design</div>
        </div>

        <div style={{ marginTop: 60 }}>
          <div style={{ fontSize: 14, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '3px', color: '#93c5fd', marginBottom: 25 }}>Manifesto</div>
          <div style={{ fontSize: 16, color: '#bfdbfe', fontStyle: 'italic', lineHeight: 1.6 }}>"Design is not just what it looks like, it's how it works."</div>
        </div>
      </div>
      
      <div style={{ flex: 1, background: '#fff', padding: '60px', boxSizing: 'border-box' }}>
        <div style={{ borderBottom: '8px solid #2563eb', width: 80, marginBottom: 40 }} />
        <div style={{ fontSize: 24, fontWeight: 900, color: '#1e3a8a', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 40 }}>Exhibitions & Experience</div>
        
        {[
          { y: '2021-23', t: 'Lead UX Designer', c: 'Spotify', d: 'Redesigning the listener experience for mobile.' },
          { y: '2018-21', t: 'Brand Consultant', c: 'Apple Inc.', d: 'Shaping visual language for global campaigns.' },
          { y: '2016-18', t: 'Graphic Artist', c: 'Studio 7', d: 'Experimental poster design and typography.' }
        ].map(e => (
          <div key={e.t} style={{ display: 'flex', gap: 30, marginBottom: 45 }}>
            <div style={{ width: 100, fontSize: 16, fontWeight: 800, color: '#2563eb' }}>{e.y}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 20, fontWeight: 900, color: '#111827' }}>{e.t}</div>
              <div style={{ fontSize: 17, color: '#3b82f6', fontWeight: 700, marginTop: 4 }}>{e.c}</div>
              <div style={{ fontSize: 16, color: '#4b5563', marginTop: 10, lineHeight: 1.6 }}>{e.d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PreviewColorful() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', padding: 0, fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }}>
      <div style={{ background: 'linear-gradient(135deg, #f472b6 0%, #a855f7 50%, #6366f1 100%)', padding: '70px', color: '#fff' }}>
        <div style={{ fontSize: 64, fontWeight: 900, filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}>Liam Rivera</div>
        <div style={{ fontSize: 24, fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginTop: 10 }}>Multidisciplinary Creative Director</div>
      </div>
      
      <div style={{ padding: '60px', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 60 }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 900, textTransform: 'uppercase', color: '#7c3aed', letterSpacing: '3px', marginBottom: 30 }}>Career Highlights</div>
          {[
            { t: 'Creative Director', c: 'Pentagram', d: '2020 – Now', g: '#f472b6' },
            { t: 'Art Director', c: 'Nike Global', d: '2017 – 2020', g: '#a855f7' }
          ].map(h => (
            <div key={h.t} style={{ marginBottom: 40, borderLeft: '6px solid ' + h.g, paddingLeft: 25 }}>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#111827' }}>{h.t}</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: h.g, marginTop: 4 }}>{h.c} <span style={{ color: '#94a3b8', fontWeight: 400 }}>• {h.d}</span></div>
              <div style={{ fontSize: 16, color: '#6b7280', marginTop: 12, lineHeight: 1.6 }}>Leading high-performance creative teams to deliver iconic brand experiences across all digital and physical touchpoints.</div>
            </div>
          ))}
        </div>
        
        <div>
          <div style={{ fontSize: 18, fontWeight: 900, textTransform: 'uppercase', color: '#f472b6', letterSpacing: '3px', marginBottom: 30 }}>Toolkit</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {['After Effects', 'Figma', 'Blender', 'Photoshop', 'Midjourney', 'Strategy', 'Storytelling'].map(s => (
              <div key={s} style={{ background: '#fdf2f8', color: '#db2777', padding: '10px 20px', borderRadius: 30, fontSize: 15, fontWeight: 700, border: '1px solid #fbcfe8' }}>{s}</div>
            ))}
          </div>

          <div style={{ fontSize: 18, fontWeight: 900, textTransform: 'uppercase', color: '#6366f1', letterSpacing: '3px', marginTop: 50, marginBottom: 30 }}>Education</div>
          <div style={{ fontSize: 17, fontWeight: 800, color: '#111827' }}>Rhode Island School of Design</div>
          <div style={{ fontSize: 15, color: '#6b7280', marginTop: 5 }}>BFA in Graphic Design</div>
        </div>
      </div>
    </div>
  )
}

function PreviewInfographic() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', padding: '60px', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 30, marginBottom: 50 }}>
        <div style={{ width: 120, height: 120, borderRadius: '50%', background: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 48, fontWeight: 900, border: '6px solid #d1fae5' }}>OA</div>
        <div>
          <div style={{ fontSize: 48, fontWeight: 900, color: '#064e3b', letterSpacing: '-1px' }}>Olivia Adams</div>
          <div style={{ fontSize: 22, color: '#10b981', fontWeight: 600, marginTop: 4 }}>Senior UX Researcher</div>
        </div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 50 }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 900, color: '#064e3b', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: 20 }}>Core Competencies</div>
          {[
            { s: 'User Interviewing', p: 95 },
            { s: 'Data Analysis', p: 85 },
            { s: 'Usability Testing', p: 90 },
            { s: 'A/B Testing', p: 75 },
            { s: 'Python / R', p: 60 }
          ].map(sk => (
            <div key={sk.s} style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 15, fontWeight: 700, color: '#374151', marginBottom: 8 }}>
                <span>{sk.s}</span>
                <span>{sk.p}%</span>
              </div>
              <div style={{ height: 10, background: '#f0fdf4', borderRadius: 5, overflow: 'hidden', border: '1px solid #d1fae5' }}>
                <div style={{ width: sk.p + '%', height: '100%', background: '#10b981' }} />
              </div>
            </div>
          ))}
        </div>
        
        <div>
          <div style={{ fontSize: 16, fontWeight: 900, color: '#064e3b', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: 25 }}>Career Journey</div>
          {[
            { y: '2020 – Now', t: 'Lead Researcher', c: 'Google', d: 'Architected large-scale surveys reaching 10M+ users.' },
            { y: '2017 – 2020', t: 'UX Analyst', c: 'Meta', d: 'Improved onboarding conversion by 22%.' }
          ].map(e => (
            <div key={e.t} style={{ marginBottom: 30, position: 'relative', paddingLeft: 25, borderLeft: '3px solid #10b981' }}>
              <div style={{ position: 'absolute', top: 0, left: -9, width: 15, height: 15, borderRadius: '50%', background: '#fff', border: '3px solid #10b981' }} />
              <div style={{ fontSize: 18, fontWeight: 800, color: '#111827' }}>{e.t}</div>
              <div style={{ fontSize: 15, color: '#10b981', fontWeight: 700, marginTop: 2 }}>{e.c} <span style={{ color: '#94a3b8', fontWeight: 400 }}>• {e.y}</span></div>
              <div style={{ fontSize: 15, color: '#4b5563', marginTop: 8, lineHeight: 1.5 }}>{e.d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PreviewCreativePortfolio() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', padding: '60px', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }}>
      <div style={{ borderLeft: '15px solid #f43f5e', paddingLeft: 40, marginBottom: 60 }}>
        <div style={{ fontSize: 62, fontWeight: 900, color: '#111827', letterSpacing: '-2px' }}>Aiden Sparks</div>
        <div style={{ fontSize: 24, color: '#f43f5e', fontWeight: 700, marginTop: 10 }}>Motion Designer & 3D Artist</div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 50 }}>
        {['Product Viz', 'Lottie Motion', 'Unreal Engine', 'Fluid Sim', 'Typography', 'Color Theory'].map(s => (
          <div key={s} style={{ background: '#fff1f2', border: '2px solid #fecdd3', borderRadius: 12, padding: '20px', textAlign: 'center', fontSize: 16, color: '#be123c', fontWeight: 800 }}>{s}</div>
        ))}
      </div>

      <div style={{ borderTop: '2px solid #f1f5f9', paddingTop: 40 }}>
        <div style={{ fontSize: 20, fontWeight: 900, color: '#111827', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: 30 }}>Selected Projects</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#f43f5e' }}>Metaverse Avatars</div>
            <div style={{ fontSize: 16, color: '#4b5563', marginTop: 8, lineHeight: 1.5 }}>Designed procedural skin shaders and hair dynamics for the 2023 Meta keynote.</div>
          </div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#f43f5e' }}>Nebula UI Kit</div>
            <div style={{ fontSize: 16, color: '#4b5563', marginTop: 8, lineHeight: 1.5 }}>A futuristic glassmorphism interface library with 500+ animated components.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PreviewExecutive() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', padding: '60px', fontFamily: '"Playfair Display", Georgia, serif', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '10px solid #111827', paddingBottom: 30, marginBottom: 50 }}>
        <div>
          <div style={{ fontSize: 68, fontWeight: 900, color: '#111827', letterSpacing: '-2px', textTransform: 'uppercase' }}>Robert Chen</div>
          <div style={{ fontSize: 26, color: '#475569', fontWeight: 500, marginTop: 10 }}>Global Creative Director</div>
        </div>
        <div style={{ textAlign: 'right', fontSize: 16, color: '#64748b', fontWeight: 500, lineHeight: 1.8 }}>
          r.chen@executive.com<br/>+1 415-555-0120<br/>New York • London
        </div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 50 }}>
        <div>
          <div style={{ fontSize: 18, fontWeight: 900, textTransform: 'uppercase', color: '#111827', letterSpacing: '2px', borderBottom: '2px solid #e5e7eb', paddingBottom: 10, marginBottom: 20 }}>Expertise</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
            {['Brand Strategy', 'Creative Direction', 'Global Operations', 'M&A Advisory', 'Public Speaking'].map(s => (
              <div key={s} style={{ fontSize: 17, color: '#4b5563', fontWeight: 600 }}>{s}</div>
            ))}
          </div>
          
          <div style={{ fontSize: 18, fontWeight: 900, textTransform: 'uppercase', color: '#111827', letterSpacing: '2px', borderBottom: '2px solid #e5e7eb', paddingBottom: 10, marginTop: 50, marginBottom: 25 }}>Board Roles</div>
          <div style={{ fontSize: 16, color: '#4b5563', fontStyle: 'italic', lineHeight: 1.6 }}>Advisory Board Member at TechX Foundation & Creative Alliance Global.</div>
        </div>
        
        <div>
          <div style={{ fontSize: 18, fontWeight: 900, textTransform: 'uppercase', color: '#111827', letterSpacing: '2px', borderBottom: '2px solid #e5e7eb', paddingBottom: 10, marginBottom: 25 }}>Executive Record</div>
          {[
            { t: 'Chief Creative Officer', c: 'Design Lab Global', d: '2019 – Present' },
            { t: 'VP of Design', c: 'Apple Inc.', d: '2014 – 2019' },
            { t: 'Creative Director', c: 'Ogilvy', d: '2008 – 2014' }
          ].map(j => (
            <div key={j.t} style={{ marginBottom: 35 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22, fontWeight: 800, color: '#111827' }}>
                <span>{j.t}</span>
                <span style={{ fontSize: 16, color: '#94a3b8', fontWeight: 500 }}>{j.d}</span>
              </div>
              <div style={{ fontSize: 18, color: '#475569', fontWeight: 700, marginTop: 4 }}>{j.c}</div>
              <div style={{ fontSize: 16, color: '#4b5563', marginTop: 12, lineHeight: 1.7 }}>
                Led global teams of 200+ across 12 countries. Increased annual recurring revenue by $450M through new product launches.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PreviewSidebar() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }}>
      <div style={{ width: '450px', background: '#1e293b', color: '#fff', padding: '60px 40px', boxSizing: 'border-box' }}>
        <div style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 20 }}>Daniel<br/>Morgan</div>
        <div style={{ fontSize: 20, color: '#38bdf8', fontWeight: 700, marginBottom: 50 }}>Full Stack Architect</div>
        
        <div style={{ marginBottom: 50 }}>
          <div style={{ fontSize: 14, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '3px', color: '#94a3b8', borderBottom: '1px solid #334155', paddingBottom: 10, marginBottom: 25 }}>Core Skills</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Next.js', 'GraphQL'].map(sk => (
              <div key={sk} style={{ background: '#334155', color: '#f8fafc', padding: '8px 16px', borderRadius: 6, fontSize: 15, fontWeight: 700 }}>{sk}</div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: 14, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '3px', color: '#94a3b8', borderBottom: '1px solid #334155', paddingBottom: 10, marginBottom: 25 }}>Contact</div>
          <div style={{ fontSize: 16, color: '#cbd5e1', lineHeight: 2 }}>
            dmorgan.dev@pro.com<br/>+1 (555) 123-4567<br/>San Jose, CA
          </div>
        </div>
      </div>
      
      <div style={{ flex: 1, background: '#fff', padding: '60px', boxSizing: 'border-box' }}>
        <div style={{ fontSize: 18, fontWeight: 900, color: '#1e293b', textTransform: 'uppercase', letterSpacing: '2px', borderBottom: '3px solid #f1f5f9', paddingBottom: 10, marginBottom: 35 }}>Professional Experience</div>
        
        {[
          { t: 'Staff Engineer', c: 'Intel Corp', d: '2020 – Now', s: 'Spearheaded the redesign of the internal cloud management console.' },
          { t: 'Senior Developer', c: 'NVIDIA', d: '2017 – 2020', s: 'Optimized real-time graphics rendering pipelines.' },
          { t: 'Web Developer', c: 'Adobe', d: '2015 – 2017', s: 'Built core features for Adobe Creative Cloud.' }
        ].map(e => (
          <div key={e.t} style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20, fontWeight: 800, color: '#1e293b' }}>
              <span>{e.t}</span>
              <span style={{ fontSize: 15, color: '#94a3b8', fontWeight: 500 }}>{e.d}</span>
            </div>
            <div style={{ fontSize: 17, color: '#38bdf8', fontWeight: 700, marginTop: 4 }}>{e.c}</div>
            <div style={{ fontSize: 16, color: '#4b5563', marginTop: 12, lineHeight: 1.6 }}>{e.s} Developed highly performant web architectures used by millions global users.</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PreviewPhoto() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }}>
      <div style={{ width: '480px', background: '#f97316', color: '#fff', padding: '60px 40px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: 180, height: 180, borderRadius: '50%', background: '#ffedd5', border: '8px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ea580c', fontSize: 72, fontWeight: 900, marginBottom: 30, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>JS</div>
        <div style={{ fontSize: 44, fontWeight: 900, textAlign: 'center', lineHeight: 1 }}>Julian Santos</div>
        <div style={{ fontSize: 18, color: '#ffedd5', fontWeight: 700, marginTop: 15, textAlign: 'center', textTransform: 'uppercase', letterSpacing: '2px' }}>Content Strategist</div>
        
        <div style={{ marginTop: 60, width: '100%' }}>
          <div style={{ fontSize: 16, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', color: '#ffedd5', marginBottom: 20 }}>Personal Bio</div>
          <div style={{ fontSize: 16, lineHeight: 1.6, textAlign: 'center', color: '#fff' }}>10+ years shaping the voices of tech giants. Specializing in viral growth and multi-platform narratives.</div>
        </div>
      </div>
      
      <div style={{ flex: 1, background: '#fff', padding: '60px', boxSizing: 'border-box' }}>
        <div style={{ fontSize: 18, fontWeight: 900, color: '#c2410c', textTransform: 'uppercase', letterSpacing: '3px', borderBottom: '3px solid #ffedd5', paddingBottom: 10, marginBottom: 35 }}>Career Portfolio</div>
        
        {[
          { t: 'Head of Content', c: 'TikTok', d: '2020 – Now', s: 'Managing a global team of 50+ creators and strategists.' },
          { t: 'Sr. Copywriter', c: 'Netflix', d: '2017 – 2020', s: 'Lead writer for 15+ original series launch campaigns.' },
          { t: 'Digital Producer', c: 'BuzzFeed', d: '2014 – 2017', s: 'Generated 500M+ views across social media channels.' }
        ].map(e => (
          <div key={e.t} style={{ marginBottom: 40 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20, fontWeight: 800, color: '#111827' }}>
              <span>{e.t}</span>
              <span style={{ fontSize: 15, color: '#94a3b8', fontWeight: 500 }}>{e.d}</span>
            </div>
            <div style={{ fontSize: 17, color: '#f97316', fontWeight: 700, marginTop: 4 }}>{e.c}</div>
            <div style={{ fontSize: 16, color: '#4b5563', marginTop: 12, lineHeight: 1.6 }}>{e.s}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PreviewAcademic() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', padding: '70px', fontFamily: '"Hoefler Text", "Baskerville", Garamond, "Times New Roman", serif', boxSizing: 'border-box' }}>
      <div style={{ textAlign: 'center', borderBottom: '4px double #000', paddingBottom: 30, marginBottom: 50 }}>
        <div style={{ fontSize: 44, fontWeight: 700, color: '#111827' }}>Professor Elena Moretti, Ph.D.</div>
        <div style={{ fontSize: 20, color: '#4b5563', fontStyle: 'italic', marginTop: 10 }}>Department Chair of Theoretical Physics • ETH Zurich</div>
        <div style={{ fontSize: 16, color: '#6b7280', marginTop: 15 }}>elena.moretti@eth.ch • +41 44 632 11 11 • Zurich, Switzerland</div>
      </div>
      
      <div style={{ marginBottom: 45 }}>
        <div style={{ fontSize: 18, fontWeight: 900, textTransform: 'uppercase', color: '#000', letterSpacing: '2px', borderBottom: '1px solid #000', paddingBottom: 8, marginBottom: 25 }}>Education</div>
        <div style={{ fontSize: 18, fontWeight: 800 }}>Harvard University</div>
        <div style={{ fontSize: 16, fontStyle: 'italic' }}>Ph.D. in Physics and Mathematics, 2012</div>
        <div style={{ fontSize: 16, marginTop: 5 }}>Dissertation: "Quantum Entanglement in High-Energy Plasma States"</div>
      </div>

      <div style={{ marginBottom: 45 }}>
        <div style={{ fontSize: 18, fontWeight: 900, textTransform: 'uppercase', color: '#000', letterSpacing: '2px', borderBottom: '1px solid #000', paddingBottom: 8, marginBottom: 25 }}>Selected Publications</div>
        {[
          { t: 'The Nature of Time in M-Theory', v: 'Physical Review Letters', y: '2021' },
          { t: 'Neutrino Oscillations in Dense Matter', v: 'Nature Physics', y: '2019' },
          { t: 'Advanced Calculus for Particle Physics', v: 'Oxford Press', y: '2018' }
        ].map(p => (
          <div key={p.t} style={{ marginBottom: 15, fontSize: 16, color: '#374151', lineHeight: 1.5 }}>
            Moretti, E. ({p.y}). <b>{p.t}</b>. <i>{p.v}</i>. Vol 14(2), pp 45-89.
          </div>
        ))}
      </div>

      <div>
        <div style={{ fontSize: 18, fontWeight: 900, textTransform: 'uppercase', color: '#000', letterSpacing: '2px', borderBottom: '1px solid #000', paddingBottom: 8, marginBottom: 25 }}>Grants / Awards</div>
        <div style={{ fontSize: 16, color: '#374151' }}>• ERC Starting Grant (€1.5M) for "Plasma Dynamics"<br/>• Global Physics Prize (2022) for Contributions to String Theory</div>
      </div>
    </div>
  )
}

function PreviewHealthcare() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', padding: 0, fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }}>
      <div style={{ background: '#0d9488', padding: '60px', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 52, fontWeight: 900 }}>Dr. Samuel Lee, M.D.</div>
          <div style={{ fontSize: 22, color: '#ccfbf1', fontWeight: 600, marginTop: 10 }}>Cardiothoracic Surgeon • Chief of Staff</div>
        </div>
        <div style={{ width: 100, height: 100, borderRadius: '50%', background: '#f0fdfa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, color: '#0d9488' }}>✚</div>
      </div>
      
      <div style={{ padding: '50px 60px', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60 }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 900, color: '#0d9488', textTransform: 'uppercase', letterSpacing: '2px', borderBottom: '2px solid #f0fdfa', paddingBottom: 10, marginBottom: 25 }}>Specializations</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {['Advanced Cardiology', 'Heart Transplant', 'Clinical Research', 'Public Health', 'Surgery'].map(s => (
              <div key={s} style={{ background: '#f0fdfa', color: '#0f766e', padding: '10px 15px', borderRadius: 8, fontSize: 15, fontWeight: 700 }}>{s}</div>
            ))}
          </div>
        </div>
        
        <div>
          <div style={{ fontSize: 16, fontWeight: 900, color: '#0d9488', textTransform: 'uppercase', letterSpacing: '2px', borderBottom: '2px solid #f0fdfa', paddingBottom: 10, marginBottom: 25 }}>Clinical Experience</div>
          {[
            { t: 'Chief of Staff', h: 'Mayo Clinic', d: '2021 – Present' },
            { t: 'Senior Surgeon', h: 'Johns Hopkins', d: '2016 – 2021' },
            { t: 'Medical Resident', h: 'Stanford Med', d: '2012 – 2016' }
          ].map(e => (
            <div key={e.t} style={{ marginBottom: 35 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20, fontWeight: 800, color: '#111827' }}>
                <span>{e.t}</span>
                <span style={{ fontSize: 15, color: '#94a3b8', fontWeight: 500 }}>{e.d}</span>
              </div>
              <div style={{ fontSize: 17, color: '#0d9488', fontWeight: 700, marginTop: 4 }}>{e.h}</div>
              <div style={{ fontSize: 16, color: '#4b5563', marginTop: 12, lineHeight: 1.6 }}>Directing surgical operations for one of the nation's premier cardiac units.</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PreviewTimeline() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', padding: '60px', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }}>
      <div style={{ marginBottom: 50 }}>
        <div style={{ fontSize: 56, fontWeight: 900, color: '#7c3aed', letterSpacing: '-2px' }}>Aria Vance</div>
        <div style={{ fontSize: 22, color: '#4b5563', fontWeight: 600, marginTop: 10 }}>Executive Operations & Strategy</div>
        <div style={{ height: 8, background: 'linear-gradient(90deg, #7c3aed, #c084fc, transparent)', marginTop: 25, borderRadius: 10 }} />
      </div>
      
      {[
        { y: '2021-Now', t: 'VP of Operations', c: 'Salesforce', d: 'Directing $100M+ operational budgets across North America.' },
        { y: '2019-21', t: 'Operations Manager', c: 'Slack', d: 'Masterminded the remote transition for 2,000+ staff.' },
        { y: '2016-19', t: 'Strategic Analyst', c: 'Deloitte', d: 'Consulted for over 15 Fortune 500 clients on efficiency.' }
      ].map((e, idx) => (
        <div key={e.y} style={{ display: 'flex', gap: 40, marginBottom: 45, position: 'relative' }}>
          <div style={{ width: 140 }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: '#7c3aed' }}>{e.y}</div>
            <div style={{ fontSize: 15, color: '#94a3b8', fontWeight: 600, marginTop: 5 }}>Milestone</div>
          </div>
          <div style={{ width: 4, background: '#f5f3ff', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: -6, width: 16, height: 16, borderRadius: '50%', background: '#7c3aed', border: '4px solid #fff' }} />
          </div>
          <div style={{ flex: 1, paddingBottom: 40 }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: '#111827' }}>{e.t}</div>
            <div style={{ fontSize: 17, color: '#c084fc', fontWeight: 700, marginTop: 4 }}>{e.c}</div>
            <div style={{ fontSize: 16, color: '#4b5563', marginTop: 12, lineHeight: 1.6 }}>{e.d}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Preview Registry ─────────────────────────────────────────────────────────

const PREVIEWS: Record<TemplateType, () => JSX.Element> = {
  classic: PreviewClassic,
  minimalist: PreviewMinimalist,
  professional: PreviewProfessional,
  government: PreviewGovernment,
  modern: PreviewModern,
  tech: PreviewTech,
  startup: PreviewStartup,
  creative: PreviewCreative,
  colorful: PreviewColorful,
  infographic: PreviewInfographic,
  'creative-portfolio': PreviewCreativePortfolio,
  executive: PreviewExecutive,
  sidebar: PreviewSidebar,
  photo: PreviewPhoto,
  academic: PreviewAcademic,
  healthcare: PreviewHealthcare,
  timeline: PreviewTimeline,
}

// ─── Template Card ────────────────────────────────────────────────────────────
// Pure CSS container query scaling — no JS needed.
// The thumbnail div uses containerType:'inline-size' so 100cqw = its pixel width.
// The inner preview renders at RENDER_W px wide, then transform:scale(100cqw/RENDER_W px)
// = exactly fills the container width, always. Result: perfect A4 portrait thumbnails.

const RENDER_W = 800
const RENDER_H = 1131

export function TemplateCard({
  template,
  selected,
  onSelect,
}: {
  template: { id: TemplateType; name: string; description: string }
  selected: boolean
  onSelect: () => void
}) {
  const Preview = PREVIEWS[template.id]

  return (
    <button
      onClick={onSelect}
      className={`relative group text-left transition-all duration-300 rounded-xl overflow-hidden flex flex-col w-full border-2 ${
        selected
          ? 'border-primary ring-[3px] ring-primary/20 shadow-xl bg-primary/5'
          : 'border-slate-200 hover:border-primary/50 hover:shadow-2xl bg-white'
      }`}
    >
      {/* ── Thumbnail area ── */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '210 / 297',
          overflow: 'hidden',
          containerType: 'inline-size',
          background: '#f8fafc',
          padding: '0', // Eliminated padding to make thumb fill card
        }}
      >
        <div className="relative h-full w-full overflow-hidden border-b border-slate-200 bg-white group-hover:scale-[1.01] transition-transform duration-500">
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: RENDER_W,
              height: RENDER_H,
              transformOrigin: 'top left',
              transform: `scale(calc(100cqw / ${RENDER_W}px))`,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            <Preview />
          </div>
        </div>

        {/* Selected badge */}
        {selected && (
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full p-1.5 shadow-lg z-10">
            <Check className="w-4 h-4 stroke-[3]" />
          </div>
        )}
      </div>

      {/* ── Footer ── */}
      <div className={`px-4 py-2.5 flex items-center justify-between gap-2 border-t ${selected ? 'bg-primary/5 border-primary/20' : 'bg-white border-slate-100'}`}>
        <div className="min-w-0">
          <h4 className={`font-bold text-sm truncate ${selected ? 'text-primary' : 'text-slate-900'}`}>
            {template.name}
          </h4>
          <p className="text-[11px] font-medium text-slate-500 truncate mt-0.5">{template.description}</p>
        </div>
        {selected && (
          <div className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">
            Active
          </div>
        )}
      </div>
    </button>
  )
}

// ─── Main Selector ────────────────────────────────────────────────────────────

export function TemplateSelector({ selected, onSelect }: TemplateSelectorProps) {
  return (
    <div className="space-y-12">
      {TEMPLATE_CATEGORIES.map((category) => (
        <div key={category.name} className="space-y-5">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">{category.name}</h3>
            <p className="text-sm text-muted-foreground">{category.description}</p>
          </div>

          {/* 1 col on mobile, 2 cols on tablet, max 3 cols on large screens — ensures cards are physically large */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {category.templates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                selected={selected === template.id}
                onSelect={() => onSelect(template.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
