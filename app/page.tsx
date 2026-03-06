'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, FileText, Download, Layout, ShieldCheck, Sparkles, Zap, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { TemplateCard, TEMPLATE_CATEGORIES, TemplateType } from '@/components/template-selector'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  // Select a few attractive templates to showcase
  const featuredTemplates: { id: TemplateType; name: string; description: string }[] = [
    TEMPLATE_CATEGORIES.find(c => c.name.includes('Modern'))?.templates.find(t => t.id === 'modern')!,
    TEMPLATE_CATEGORIES.find(c => c.name.includes('Creative'))?.templates.find(t => t.id === 'creative-portfolio')!,
    TEMPLATE_CATEGORIES.find(c => c.name.includes('Executive'))?.templates.find(t => t.id === 'executive')!,
    TEMPLATE_CATEGORIES.find(c => c.name.includes('Tech'))?.templates.find(t => t.id === 'tech')!,
  ].filter(Boolean)

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
          70% { box-shadow: 0 0 0 20px rgba(59, 130, 246, 0); }
        }
        .animate-fade-up { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-up-1 { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards; opacity: 0; }
        .animate-fade-up-2 { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards; opacity: 0; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 6s ease-in-out 3s infinite; }
        .glass-nav {
          background: rgba(var(--background), 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(var(--border), 0.4);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform duration-300">
              <FileText className="w-5 h-5 fill-white/20" />
            </div>
            <span className="text-2xl font-black tracking-tight text-foreground">
              Resume<span className="text-blue-600">Flow</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-muted-foreground">
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How it Works</a>
            <a href="#templates" className="hover:text-foreground transition-colors">Templates</a>
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/editor">
              <Button className="hidden sm:flex h-11 px-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-300" style={{ animation: 'pulse-glow 2.5s infinite' }}>
                Create Resume
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
          <div className="absolute inset-0 top-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
          
          <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-[1fr_500px] gap-16 lg:gap-24 items-center relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-8 animate-fade-up">
                <Sparkles className="w-4 h-4" />
                <span>The #1 Free Resume Builder</span>
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-[80px] font-black text-foreground leading-[1.1] tracking-tight mb-8 animate-fade-up-1">
                Land your dream job with a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">perfect</span> resume.
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-10 animate-fade-up-2 max-w-xl font-medium">
                Create a professional, ATS-friendly resume in minutes. No sign-up required. Completely free forever.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 animate-fade-up-2" style={{ animationDelay: '0.3s' }}>
                <Link href="/editor">
                  <Button size="lg" className="h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold shadow-xl shadow-blue-600/20 hover:shadow-2xl hover:shadow-blue-600/40 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                    Build My Resume
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="#templates">
                  <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-2 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-foreground text-lg font-bold transition-all duration-300 w-full sm:w-auto">
                    View Templates
                  </Button>
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-4 text-sm font-semibold text-slate-500 dark:text-slate-400 animate-fade-up-2" style={{ animationDelay: '0.4s' }}>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-background bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-500 z-[${10-i}]`}>
                      {String.fromCharCode(64+i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center text-amber-500 mb-0.5">
                    {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                  </div>
                  <p>Trusted by 500k+ users</p>
                </div>
              </div>
            </div>

            {/* Hero Visual: Floating Templates */}
            <div className="relative hidden lg:block h-[700px] perspective-[2000px]">
              {featuredTemplates[0] && (
                <div className="absolute top-0 right-10 w-[420px] transform rotate-y-[-15deg] rotate-z-[2deg] shadow-2xl rounded-xl animate-float" style={{ transformStyle: 'preserve-3d' }}>
                  <TemplateCard template={featuredTemplates[0]} selected={false} onSelect={() => router.push('/editor')} />
                </div>
              )}
              {featuredTemplates[1] && (
                <div className="absolute top-40 right-40 w-[380px] transform rotate-y-[-10deg] rotate-z-[-4deg] shadow-2xl rounded-xl animate-float-delayed opacity-90 hover:opacity-100 transition-opacity" style={{ transformStyle: 'preserve-3d' }}>
                  <TemplateCard template={featuredTemplates[1]} selected={false} onSelect={() => router.push('/editor')} />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Logo Cloud */}
        <section className="border-y border-border/50 bg-slate-50/50 dark:bg-slate-900/20 py-10">
          <div className="max-w-[1400px] mx-auto px-6 text-center">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Resumes built here have hired people at</p>
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {['Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix', 'Apple'].map(company => (
                <span key={company} className="text-2xl font-black text-slate-600 dark:text-slate-300">{company}</span>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-32">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight mb-6">Build your resume in 3 easy steps</h2>
              <p className="text-xl text-muted-foreground font-medium">We've streamlined the entire process. No formatting headaches, just plug in your info and go.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-100 via-blue-500 to-blue-100 dark:from-blue-900 dark:via-blue-500 dark:to-blue-900 opacity-30"></div>
              
              {[
                { step: '01', title: 'Pick a Template', desc: 'Choose from our library of 17+ professional, ATS-friendly templates designed by HR experts.', icon: Layout },
                { step: '02', title: 'Fill in Details', desc: 'Use our powerful editor to quickly add your experience, education, and skills without messing up the layout.', icon: FileText },
                { step: '03', title: 'Download & Apply', desc: 'Export your pixel-perfect resume as a PDF and start applying to your dream jobs immediately.', icon: Download },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                    <div className="w-24 h-24 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 shadow-xl flex items-center justify-center mb-8 relative group-hover:-translate-y-2 transition-transform duration-300">
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center ring-4 ring-background">
                        {item.step}
                      </div>
                      <Icon className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                    <p className="text-lg text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Template Gallery */}
        <section id="templates" className="py-32 bg-slate-50 dark:bg-slate-900/50 border-y border-border/50">
          <div className="max-w-[1600px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 px-4">
              <div className="max-w-2xl">
                <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight mb-6">Stand out with stunning templates</h2>
                <p className="text-xl text-muted-foreground font-medium">Every template is optimized to bypass Applicant Tracking Systems (ATS) while catching the human recruiter's eye.</p>
              </div>
              <Link href="/editor">
                <Button variant="outline" size="lg" className="h-12 px-6 rounded-full border-2 font-bold hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all">
                  Browse All 17 Templates <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredTemplates.map((template) => (
                <div key={template.id} className="transform transition duration-500 hover:-translate-y-2">
                  <TemplateCard 
                    template={template} 
                    selected={false} 
                    onSelect={() => router.push('/editor')} 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-32">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight mb-6">Everything you need to get hired</h2>
              <p className="text-xl text-muted-foreground font-medium">We've built the most powerful, user-friendly resume editor on the market.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'ATS-Friendly Formats', desc: 'Our templates are technically constructed to easily parse through any Applicant Tracking System without failing.', icon: ShieldCheck, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
                { title: 'Real-Time Preview', desc: 'See exactly how your resume looks as you type. No more guessing or blind editing.', icon: Layout, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-500/10' },
                { title: 'Lightning Fast', desc: 'Built on modern technology so the editor never lags, even with massive resumes.', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-500/10' },
                { title: '1-Click Export', desc: 'Instantly generate high-resolution, print-ready PDFs of your resume.', icon: Download, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-500/10' },
                { title: '100% Free Forever', desc: 'No paywalls, no watermarks, no hidden fees. Build your resume entirely for free.', icon: Sparkles, color: 'text-pink-500', bg: 'bg-pink-50 dark:bg-pink-500/10' },
                { title: '17+ Elite Designs', desc: 'Whether you need something traditional or highly creative, we have a template for you.', icon: FileText, color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-500/10' },
              ].map((feature, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-xl transition-shadow group">
                  <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-[1200px] mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-8">Ready to boost your career?</h2>
              <p className="text-xl text-blue-100 font-medium mb-12 max-w-2xl mx-auto">
                Stop struggling with Word documents. Build a beautiful, recruiter-approved resume in 5 minutes.
              </p>
              <Link href="/editor">
                <Button size="lg" className="h-16 px-10 rounded-full bg-white hover:bg-blue-50 text-blue-600 text-xl font-bold shadow-2xl hover:scale-105 transition-all duration-300">
                  Create Resume Now — It's Free
                </Button>
              </Link>
              <p className="mt-6 text-blue-200 font-medium text-sm">No credit card required. No account needed.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-950 border-t border-border pt-20 pb-10 mt-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2 lg:col-span-2 pr-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <FileText className="w-5 h-5 fill-white/20" />
                </div>
                <span className="text-2xl font-black tracking-tight text-foreground">
                  Resume<span className="text-blue-600">Flow</span>
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-8">
                The fastest, most intuitive way to build professional resumes that get you hired. Designed by recruiters, built for you.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Product</h4>
              <ul className="space-y-4 text-slate-500 dark:text-slate-400 font-medium">
                <li><Link href="/editor" className="hover:text-blue-600 transition-colors">Resume Builder</Link></li>
                <li><Link href="#templates" className="hover:text-blue-600 transition-colors">Templates</Link></li>
                <li><Link href="#features" className="hover:text-blue-600 transition-colors">Features</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Resources</h4>
              <ul className="space-y-4 text-slate-500 dark:text-slate-400 font-medium">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Resume Examples</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Cover Letters</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Career Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Legal</h4>
              <ul className="space-y-4 text-slate-500 dark:text-slate-400 font-medium">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 font-medium text-sm">
            <p>© {new Date().getFullYear()} ResumeFlow. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-600 transition-colors">Twitter</a>
              <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Github</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
