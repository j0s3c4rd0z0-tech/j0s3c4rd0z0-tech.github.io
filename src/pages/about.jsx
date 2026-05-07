// ============================================================
// about.jsx — v2 Authority-Driven Profile Page
//
// CHANGES FROM v1:
//   - Rewritten copy: "I'm Jose. A leader, artist" → removed (no positioning value)
//   - Paragraphs restructured: competency-first narrative instead of task lists
//   - Photo: removed rotate-3 class (too casual); clean squared portrait instead
//   - Added: Skills/competency pills sidebar section
//   - Added: Education card in monospace format
//   - Added: Personal note kept (rock climbing, cockatiels) — human signal matters
//   - Removed: commented-out Twitter/Instagram links (clean code rule)
//   - Color system: full dark theme, neon accents
// ============================================================

import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

const coreCompetencies = [
  'Hybrid Cloud Architecture',
  'Kubernetes / Container Orchestration',
  'VMware vSphere / OpenStack',
  'CI/CD Pipeline Design',
  'Oracle DBA / PostgreSQL',
  'Ansible / Terraform Automation',
  'SRE Practices & SLA Management',
  'Incident Management & RCA',
  'API Integration Engineering',
  'Python / Bash / PowerShell',
  'Security & Business Continuity',
  'AWS / GCP / Azure Operations',
]

function SocialLink({ href, icon: Icon, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 text-sm transition-colors duration-200"
      style={{ color: '#64748b' }}
      onMouseEnter={(e) => { e.currentTarget.style.color = '#00d4ff' }}
      onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b' }}
    >
      <Icon className="w-5 h-5 flex-none" style={{ fill: 'currentColor' }} />
      <span>{children}</span>
    </a>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z" />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About – Jose Cardozo · SRE & Infrastructure Architect</title>
        <meta
          name="description"
          content="Infrastructure Engineer with 12+ years in hybrid cloud, Kubernetes, VMware, and CI/CD. Based in Málaga, Spain."
        />
      </Head>

      {/* Page header */}
      <div
        style={{
          paddingTop: '120px',
          paddingBottom: '60px',
          borderBottom: '1px solid rgba(0,212,255,0.06)',
        }}
      >
        <Container>
          <div className="section-divider" />
          <span className="mono-tag">Profile</span>
          <h1
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#f1f5f9',
              marginTop: '0.75rem',
              lineHeight: 1.1,
            }}
          >
            The infrastructure that{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #00ffb3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              holds it together.
            </span>
          </h1>
        </Container>
      </div>

      <Container className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ── Main content (2/3) ── */}
          <div className="lg:col-span-2 space-y-8">
            <div
              style={{
                fontSize: '1rem',
                lineHeight: 1.9,
                color: '#94a3b8',
                fontWeight: 300,
              }}
            >
              <p style={{ marginBottom: '1.5rem' }}>
                I'm Jose Cardozo — an Infrastructure Engineer with over 12 years designing,
                operating, and automating backend systems and hybrid cloud platforms that serve
                at scale. My work sits at the intersection of reliability engineering,
                platform architecture, and security — making sure the systems beneath
                critical applications never become the bottleneck.
              </p>

              <p style={{ marginBottom: '1.5rem' }}>
                My deepest expertise is in containerization and orchestration (Kubernetes,
                Docker, OpenStack, VMware vSphere), database administration at the
                enterprise level (Oracle, PostgreSQL, SQL Server), and building automation
                layers that eliminate manual operations — using Ansible, Python, Bash,
                and PowerShell to encode operational knowledge into repeatable processes.
              </p>

              <p style={{ marginBottom: '1.5rem' }}>
                For seven years at IDEMIA–Ingroupe, I operated mission-critical biometric
                identity platforms within a regulated international environment — designing
                hybrid cloud architectures, maintaining CI/CD workflows with Jenkins and
                ArgoCD, and owning incident response and business continuity for services
                that operate without downtime tolerance.
              </p>

              <p style={{ marginBottom: '1.5rem' }}>
                I hold a Bachelor's degree in Software Engineering from UNINPAHU University
                Foundation (2016). Outside of engineering, you'll find me rock climbing,
                working out, dancing, or at home with my two cockatiels — which, for the
                record, are also zero-downtime systems.
              </p>
            </div>

            {/* Education card */}
            <div
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: '12px',
                background: 'rgba(17,24,39,0.7)',
                border: '1px solid rgba(0,212,255,0.1)',
              }}
            >
              <div className="mono-tag mb-3">Education</div>
              <div
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 600,
                  color: '#e2e8f0',
                  fontSize: '0.95rem',
                }}
              >
                Bachelor's Degree in Software Engineering
              </div>
              <div
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '0.7rem',
                  color: '#00d4ff',
                  opacity: 0.7,
                  marginTop: '4px',
                }}
              >
                UNINPAHU University Foundation · 2016
              </div>
            </div>

            {/* Contact links */}
            <div
              className="flex flex-col gap-4"
              style={{
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <SocialLink href="https://github.com/j0s3c4rd0z0-tech" icon={GitHubIcon}>
                github.com/j0s3c4rd0z0-tech
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/jose-cardozo-calderon-597650b3/"
                icon={LinkedInIcon}
              >
                linkedin.com/in/jose-cardozo-calderon
              </SocialLink>
              <a
                href="mailto:j0s3c4rd0z0@gmail.com"
                className="flex items-center gap-3 text-sm transition-colors duration-200"
                style={{ color: '#64748b' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#00d4ff' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b' }}
              >
                <MailIcon className="w-5 h-5 flex-none" />
                j0s3c4rd0z0@gmail.com
              </a>
            </div>
          </div>

          {/* ── Sidebar (1/3) ── */}
          <div className="space-y-8">
            {/* Portrait */}
            <div
              className="overflow-hidden rounded-xl"
              style={{
                border: '1px solid rgba(0,212,255,0.12)',
                boxShadow: '0 0 40px rgba(0,212,255,0.06)',
              }}
            >
              <Image
                src={portraitImage}
                alt="Jose Cardozo"
                sizes="(min-width: 1024px) 20rem, 100vw"
                className="w-full object-cover"
                style={{ aspectRatio: '4/5', display: 'block' }}
              />
            </div>

            {/* Core competencies */}
            <div>
              <div className="mono-tag mb-4">Core Competencies</div>
              <div className="flex flex-wrap gap-2">
                {coreCompetencies.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>

            {/* Location card */}
            <div
              style={{
                padding: '1rem 1.25rem',
                borderRadius: '10px',
                background: 'rgba(17,24,39,0.6)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <div className="mono-tag mb-2">Location</div>
              <div
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 600,
                  color: '#e2e8f0',
                  fontSize: '0.9rem',
                }}
              >
                Málaga, Andalusia
              </div>
              <div
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '0.68rem',
                  color: '#475569',
                  marginTop: '4px',
                }}
              >
                Spain · UTC+1 · Remote-first open
              </div>
            </div>
          </div>

        </div>
      </Container>
    </>
  )
}
