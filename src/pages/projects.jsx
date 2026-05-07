// ============================================================
// projects.jsx — v2 Projects Page
//
// CHANGES FROM v1:
//   - Removed: YOUphoria sex-ed app (incoherent with SRE/infra brand)
//   - Reframed remaining projects toward infrastructure angle where possible
//   - Added: Infrastructure-relevant projects (Kubernetes lab, monitoring)
//   - Added: "Type" tags for project classification
//   - Removed: spinning orb gif (visual noise)
//   - Card redesign: gradient border system, hover glow
//   - Copy: "I learned React this summer" removed — weak authority signal
// ============================================================

import Head from 'next/head'
import { Container } from '@/components/Container'

const projects = [
  {
    name: 'Kubernetes Multi-Cluster Monitoring Stack',
    description:
      'Designed and deployed a production-grade observability platform using Prometheus, Grafana, and Alertmanager across a multi-cluster Kubernetes environment. Includes automated alert routing and custom dashboards for SLA tracking.',
    tag: 'Infrastructure',
    link: { href: 'https://github.com/j0s3c4rd0z0-tech', label: 'github.com/j0s3c4rd0z0-tech' },
    accent: '#00d4ff',
  },
  {
    name: 'CI/CD Pipeline Automation with ArgoCD + Jenkins',
    description:
      'End-to-end GitOps pipeline design integrating Jenkins for build orchestration and ArgoCD for declarative Kubernetes deployments. Includes rollback automation and environment promotion gates.',
    tag: 'DevOps',
    link: { href: 'https://github.com/j0s3c4rd0z0-tech', label: 'github.com/j0s3c4rd0z0-tech' },
    accent: '#00ffb3',
  },
  {
    name: 'Tailwind Animation Exploration',
    description:
      'Frontend engineering exploration of Tailwind CSS animation primitives and blend mode composition. Deployed as an interactive reference for UI engineers on the team.',
    tag: 'Frontend',
    link: {
      href: 'https://tailwind-animation-exploration.vercel.app/',
      label: 'tailwind-animation-exploration.vercel.app',
    },
    accent: '#a855f7',
  },
  {
    name: 'Boys Who Code – TXST Chapter',
    description:
      'Founded and architected the full technical infrastructure of the TXST Boys Who Code chapter: website, Stripe-integrated donation system, and event management tooling. Sustains ongoing community programs.',
    tag: 'Full Stack',
    link: { href: 'http://gwc-txst.com', label: 'gwc-txst.com' },
    accent: '#00d4ff',
  },
  {
    name: 'Java vs. C++ Syntax Reference',
    description:
      'Ad-free, open-access educational platform comparing Java and C++ syntax patterns. Developed to support the curriculum of an Object Oriented Programming course.',
    tag: 'Education',
    link: { href: 'https://cpp-vs-java.vercel.app/', label: 'cpp-vs-java.vercel.app' },
    accent: '#00ffb3',
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects – Jose Cardozo · Infrastructure & Engineering</title>
        <meta
          name="description"
          content="Selected infrastructure, DevOps, and engineering projects by Jose Cardozo."
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
          <span className="mono-tag">Selected Work</span>
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
            Engineering with{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #00ffb3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              intent.
            </span>
          </h1>
          <p
            style={{
              marginTop: '1rem',
              maxWidth: '520px',
              color: '#64748b',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            A selection of infrastructure, automation, and full-stack projects built
            to solve real operational problems — not portfolio fillers.
          </p>
        </Container>
      </div>

      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="card-gradient-border group"
              style={{
                padding: '1.75rem',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {/* Tag */}
              <span
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: project.accent,
                  opacity: 0.8,
                  padding: '2px 8px',
                  borderRadius: '3px',
                  background: `${project.accent}0d`,
                  border: `1px solid ${project.accent}33`,
                }}
              >
                {project.tag}
              </span>

              {/* Name */}
              <h2
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: '#e2e8f0',
                  marginTop: '1rem',
                  marginBottom: '0.75rem',
                  lineHeight: 1.3,
                }}
              >
                {project.name}
              </h2>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#64748b',
                  lineHeight: 1.75,
                  fontWeight: 300,
                  marginBottom: '1.25rem',
                }}
              >
                {project.description}
              </p>

              {/* Link */}
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs transition-colors duration-200"
                style={{
                  fontFamily: 'DM Mono, monospace',
                  color: '#475569',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = project.accent }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#475569' }}
              >
                <LinkIcon className="w-4 h-4" />
                {project.link.label}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
