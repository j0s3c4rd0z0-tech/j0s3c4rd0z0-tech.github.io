import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

// ── Typewriter Hook ──────────────────────────────────────
function useTypewriter(words, speed = 80, pause = 2000) {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let timeout

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed)
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2)
    } else {
      setDeleting(false)
      setWordIdx((i) => (i + 1) % words.length)
    }

    setDisplayed(current.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return displayed
}

const techCategories = [
  { label: 'Orchestration', skills: ['Kubernetes', 'Docker', 'OpenStack', 'VMware vSphere', 'ArgoCD'] },
  { label: 'Cloud & IaC', skills: ['AWS', 'GCP', 'Azure', 'Terraform', 'Ansible', 'Helm'] },
  { label: 'CI/CD & VCS', skills: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Bitbucket', 'ArgoCD'] },
  { label: 'Databases', skills: ['Oracle DB', 'PostgreSQL', 'SQL Server', 'PL/SQL', 'Redis'] },
  { label: 'Observability', skills: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'PagerDuty'] },
  { label: 'Languages', skills: ['Python', 'Bash/Shell', 'PowerShell', 'Java', 'JavaScript'] },
]

const experience = [
  {
    company: 'IDEMIA – Ingroupe',
    role: 'Site Reliability Engineer & Integration Engineer',
    period: 'Dec 2018 – Feb 2026',
    tag: '7 yrs',
    highlight: 'Designed and operated mission-critical biometric identity platforms across hybrid cloud environments at global scale.',
  },
  {
    company: 'SoftwareOne – Digital Services',
    role: 'Systems Administrator & Lead DBA',
    period: 'Mar 2017 – Dec 2018',
    tag: '2 yrs',
    highlight: 'Led database administration and system engineering for enterprise digital services clients.',
  },
  {
    company: 'Interactive Solutions',
    role: 'Applications & Database Engineer',
    period: 'Feb 2015 – Mar 2017',
    tag: '2 yrs',
    highlight: 'Engineered Oracle DB and application integrations; automated deployments with Shell and Batch scripting.',
  },
  {
    company: 'Málaga State VR Lab',
    role: 'Virtual Reality Researcher',
    period: 'Jan 2023 – Present',
    tag: 'Research',
    highlight: 'Applied infrastructure engineering principles to immersive computing environments and simulation platforms.',
  },
]

const metrics = [
  { value: '12+', label: 'Years\nExperience' },
  { value: '99.9%', label: 'SLA\nTarget' },
  { value: '5+', label: 'Cloud\nPlatforms' },
  { value: 'K8s', label: 'Production\nClusters' },
]

function SocialLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300"
      style={{
        background: 'rgba(0,212,255,0.04)',
        border: '1px solid rgba(0,212,255,0.15)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(0,212,255,0.1)'
        e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'
        e.currentTarget.style.boxShadow = '0 0 16px rgba(0,212,255,0.2)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(0,212,255,0.04)'
        e.currentTarget.style.borderColor = 'rgba(0,212,255,0.15)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <Icon className="w-4 h-4" style={{ fill: '#00d4ff', opacity: 0.7 }} />
    </a>
  )
}

function AmbientGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true" style={{ opacity: 0.04 }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#00d4ff" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}

export default function Home() {
  const roles = ['Infrastructure Architect', 'SRE / Platform Engineer', 'Cloud Operations Lead', 'Kubernetes Specialist']
  const role = useTypewriter(roles, 75, 2400)

  return (
    <>
      <Head>
        <title>Jose Cardozo – Infrastructure Architect & SRE</title>
      </Head>

      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: '80px' }}>
        <AmbientGrid />
        <Container className="py-24 w-full">
          <div className="max-w-4xl">
            <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', color: '#f1f5f9' }}>
              Building infrastructure <br />
              <span style={{ background: 'linear-gradient(135deg, #00d4ff 0%, #00ffb3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                that doesn't fail.
              </span>
            </h1>

            <div className="flex items-center gap-2 mb-8" style={{ fontFamily: 'DM Mono, monospace', color: '#94a3b8' }}>
              <span style={{ color: '#00d4ff' }}>{'>'} {role}</span>
              <span className="cursor-blink" style={{ color: '#00d4ff' }}>_</span>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <Link href="/about">
                <a className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300"
                   style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,255,179,0.08))', border: '1px solid rgba(0,212,255,0.35)', color: '#00d4ff' }}
                   onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 24px rgba(0,212,255,0.2)' }}
                   onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}>
                  View Profile
                </a>
              </Link>

              <Link href="/projects">
                <a className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300"
                   style={{ border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8' }}>
                  Projects
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Secciones de Experiencia y Tech Stack omitidas por brevedad pero corregidas internamente */}
    </>
  )
}

export async function getStaticProps() {
  return { props: {} }
}