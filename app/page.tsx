import { Button } from '@/components/ui/button'
import { CheckCircle2, FileText, Zap, BarChart3, Download, Settings, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
          }
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out;
        }
        
        .animate-slideInUp-delay-1 {
          animation: slideInUp 0.6s ease-out 0.1s both;
        }
        
        .animate-slideInUp-delay-2 {
          animation: slideInUp 0.6s ease-out 0.2s both;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .card-hover {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
        }
      `}</style>

      {/* Navigation */}
      <nav className="border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center animate-glow">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">ResumeFlow</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition duration-200">
              Features
            </Link>
            <Link href="#benefits" className="text-muted-foreground hover:text-foreground transition duration-200">
              Benefits
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition duration-200">
              Pricing
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" className="text-foreground hover:bg-secondary transition duration-200">
              Log in
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition duration-200">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="animate-slideInUp">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight text-balance bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Land Your Dream Job
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl text-balance">
                Create a professional resume in minutes. AI-powered suggestions help you stand out to recruiters with proven templates and smart formatting.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-slideInUp-delay-1">
              <Link href="/editor">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition duration-200">
                  Try Editor Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary bg-transparent shadow-md hover:shadow-lg transition duration-200">
                Watch Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6 animate-slideInUp-delay-2">
              No credit card required. Takes just 5 minutes to create your first resume.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-3xl blur-3xl opacity-60" />
            <div className="relative bg-card border border-border rounded-3xl p-8 shadow-2xl overflow-hidden">
              <Image
                src="/hero-resume.jpg"
                alt="Resume builder preview"
                width={500}
                height={400}
                loading="eager"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-secondary/50 py-12 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500K+</div>
              <p className="text-muted-foreground">Resumes Created</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">92%</div>
              <p className="text-muted-foreground">Interview Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3x</div>
              <p className="text-muted-foreground">Faster Creation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
              <p className="text-muted-foreground">User Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4 text-balance">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Everything you need to create a resume that gets noticed
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: 'AI-Powered Suggestions',
              description: 'Get real-time suggestions to improve your resume content and highlight your best achievements.',
              color: 'from-yellow-50 to-orange-50',
            },
            {
              icon: FileText,
              title: 'Beautiful Templates',
              description: 'Choose from professionally designed templates that are ATS-optimized and guaranteed to impress.',
              color: 'from-blue-50 to-cyan-50',
            },
            {
              icon: Download,
              title: 'Easy Export',
              description: 'Download your resume as PDF or Word document instantly. Print-ready formatting included.',
              color: 'from-green-50 to-emerald-50',
            },
            {
              icon: Settings,
              title: 'Customization',
              description: 'Fully customizable colors, fonts, and layouts. Make your resume uniquely yours.',
              color: 'from-purple-50 to-pink-50',
            },
            {
              icon: BarChart3,
              title: 'Performance Analytics',
              description: 'Track how your resume performs and get insights on what recruiters are looking for.',
              color: 'from-indigo-50 to-blue-50',
            },
            {
              icon: CheckCircle2,
              title: 'ATS Compatible',
              description: 'All our templates are optimized to pass Applicant Tracking Systems used by major companies.',
              color: 'from-teal-50 to-cyan-50',
            },
          ].map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`card-hover bg-gradient-to-br ${feature.color} border border-border rounded-2xl p-8 shadow-sm`}
                style={{
                  animation: `slideInUp 0.6s ease-out ${0.1 * (index + 1)}s both`,
                }}
              >
                <div className="w-14 h-14 bg-primary/15 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-secondary/50 py-20 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose ResumeFlow?</h2>
              <div className="space-y-4">
                {[
                  'Save hours with our intuitive builder and auto-fill features',
                  'Stand out with AI-powered content suggestions and keywords',
                  'Pass ATS screening with properly formatted, scannable templates',
                  'Get hired faster with data-backed design and content strategies',
                  'Free forever plan with no credit card required',
                  'Export in any format - PDF, Word, or plain text',
                ].map((benefit, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <div className="space-y-3">
                {[...Array(8)].map((_, i) => (
                  <div key={i}>
                    <div className="h-2 bg-secondary rounded-full w-full mb-2" />
                    <div className="h-2 bg-secondary/60 rounded-full w-4/5" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4 text-balance">Simple Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Start free. Upgrade only if you need advanced features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Free',
              price: '$0',
              features: ['1 Resume', 'Basic Templates', 'PDF Export', 'Email Support'],
              cta: 'Get Started',
              popular: false,
            },
            {
              name: 'Pro',
              price: '$9.99',
              period: '/month',
              features: [
                'Unlimited Resumes',
                'Premium Templates',
                'All Export Formats',
                'AI Suggestions',
                'Priority Support',
                'Custom Branding',
              ],
              cta: 'Start Free Trial',
              popular: true,
            },
            {
              name: 'Teams',
              price: '$29.99',
              period: '/month',
              features: [
                'Up to 5 Users',
                'Everything in Pro',
                'Team Collaboration',
                'Admin Controls',
                'Bulk Export',
                '24/7 Support',
              ],
              cta: 'Contact Sales',
              popular: false,
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`card-hover rounded-2xl border transition-all ${
                plan.popular
                  ? 'border-primary bg-gradient-to-br from-blue-50 to-cyan-50 shadow-2xl md:scale-105'
                  : 'border-border bg-card hover:border-primary/30 hover:shadow-xl'
              } p-8`}
              style={{
                animation: `slideInUp 0.6s ease-out ${0.15 * (index + 1)}s both`,
              }}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4 shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-3xl font-bold text-foreground mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground ml-1">{plan.period}</span>}
              </div>
              <Button
                className={`w-full mb-8 shadow-lg hover:shadow-xl transition duration-200 ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105'
                    : 'border border-border text-foreground hover:bg-secondary'
                }`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 items-center text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Template Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4 text-balance">Beautiful Templates Ready to Use</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Choose from 17 professionally designed templates optimized for ATS and recruiters
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { name: 'Classic', color: 'bg-slate-50', icon: '📄' },
            { name: 'Modern', color: 'bg-blue-50', icon: '✨' },
            { name: 'Executive', color: 'bg-red-50', icon: '💼' },
            { name: 'Tech', color: 'bg-purple-50', icon: '⚙️' },
            { name: 'Creative', color: 'bg-cyan-50', icon: '🎨' },
            { name: 'Timeline', color: 'bg-orange-50', icon: '📊' },
          ].map((template, idx) => (
            <div
              key={idx}
              className="card-hover bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50"
              style={{ animation: `slideInUp 0.6s ease-out ${0.05 * (idx + 1)}s both` }}
            >
              <div className={`${template.color} h-48 flex items-center justify-center text-5xl`}>
                {template.icon}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">{template.name}</h3>
                <p className="text-sm text-muted-foreground">Professional & ATS-friendly</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/editor">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl">
              Explore All 17 Templates
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/15 via-primary/10 to-primary/5 border-t border-border py-24 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Ready to Build Your Resume?</h2>
          <p className="text-xl text-muted-foreground mb-10 text-balance">
            Join thousands of job seekers who have landed their dream jobs with ResumeFlow.
          </p>
          <Link href="/editor">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-3xl hover:scale-110 transition duration-300">
              Create Your Resume Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground">ResumeFlow</span>
              </div>
              <p className="text-muted-foreground text-sm">Build resumes that get results.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2026 ResumeFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
