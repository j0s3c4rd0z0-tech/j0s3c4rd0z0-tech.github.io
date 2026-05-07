// ============================================================
// speaking.jsx — v2 Speaking/Community Page
// Preserved from v1 content, restyled to match new design system
// ============================================================

import Head from 'next/head'
import { Container } from '@/components/Container'

const appearances = [
  {
    href: '#',
    title: 'Infrastructure at Scale: Lessons from Regulated Environments',
    event: 'DevOps Málaga Meetup',
    description:
      'Deep dive into operating biometric identity platforms under regulatory constraints — covering SLA design, incident response automation, and hybrid cloud reliability patterns.',
    cta: 'Watch recording',
  },
  {
    href: '#',
    title: 'Kubernetes in Production: What the Docs Don\'t Tell You',
    event: 'Cloud Native Andalucía',
    description:
      'Practical lessons from running Kubernetes in regulated, multi-environment production deployments — covering observability gaps, upgrade strategies, and GitOps rollout patterns.',
    cta: 'Watch recording',
  },
  {
    href: '#',
    title: 'Teaching Infrastructure Engineering to Non-Technical Students',
    event: 'University Foundation Tech Talk · Málaga',
    description:
      'How abstract concepts like containerization and CI/CD can be made accessible to students with no prior systems background — drawing from hands-on teaching at a university foundation program.',
    cta: 'View slides',
  },
]

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking – Jose Cardozo</title>
        <meta name="description" content="Selected talks and community appearances by Jose Cardozo on infrastructure, SRE, and platform engineering." />
      </Head>

      <div
        style={{
          paddingTop: '120px',
          paddingBottom: '60px',
          borderBottom: '1px solid rgba(0,212,255,0.06)',
        }}
      >
        <Container>
          <div className="section-divider" />
          <span className="mono-tag">Community</span>
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
            Sharing what{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #00ffb3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              actually works.
            </span>
          </h1>
          <p
            style={{
              marginTop: '1rem',
              maxWidth: '480px',
              color: '#64748b',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Talks and community contributions on infrastructure engineering, SRE practices,
            and making technical education accessible.
          </p>
        </Container>
      </div>

      <Container className="py-16">
        <div className="flex flex-col gap-6">
          {appearances.map((item, i) => (
            <div
              key={i}
              className="card-gradient-border"
              style={{
                padding: '1.75rem',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div
                className="mono-tag mb-3"
                style={{ color: '#00ffb3', borderColor: 'rgba(0,255,179,0.2)', background: 'rgba(0,255,179,0.05)' }}
              >
                {item.event}
              </div>
              <h2
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: '#e2e8f0',
                  marginBottom: '0.75rem',
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h2>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#64748b',
                  lineHeight: 1.75,
                  fontWeight: 300,
                  marginBottom: '1rem',
                }}
              >
                {item.description}
              </p>
              <a
                href={item.href}
                className="inline-flex items-center gap-1.5 text-xs transition-colors duration-200"
                style={{
                  fontFamily: 'DM Mono, monospace',
                  color: '#00d4ff',
                  opacity: 0.7,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7' }}
              >
                {item.cta}
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
