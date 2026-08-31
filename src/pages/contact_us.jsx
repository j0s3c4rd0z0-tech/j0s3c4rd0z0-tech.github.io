// ============================================================
// contact_us.jsx — Contact / CONNECT_NODE Page
//
// Design reference: terminal-style contact page with network
// node cards (EMAIL ENDPOINT, DIRECT SECURE LINE, CORPORATE
// NODE, PERSONAL HOST) + CTA banner "INITIATE HANDSHAKE"
//
// Integrated with v2 design system:
//   - DM Mono for all labels and data (same as rest of portfolio)
//   - Neon cyan (#00d4ff) primary accent
//   - Neon emerald (#00ffb3) secondary accent
//   - card-gradient-border component class
//   - Ambient SVG grid background (same as home.jsx)
//
// DROP-IN USAGE:
//   1. Copy this file to src/pages/contact_us.jsx
//   2. Add nav entry to src/components/Header.jsx navLinks array:
//        { href: '/contact_us', label: 'Contact' }
//   3. npm run dev — compiles immediately, no other changes needed
// ============================================================

import Head from 'next/head'
import { useState } from 'react'
import { Container } from '@/components/Container'

// ── Icons ────────────────────────────────────────────────────

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.98 5.98l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00ffb3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

function NetworkIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2"/>
      <circle cx="5" cy="19" r="2"/>
      <circle cx="19" cy="19" r="2"/>
      <line x1="12" y1="7" x2="5" y2="17"/>
      <line x1="12" y1="7" x2="19" y2="17"/>
      <line x1="5" y1="19" x2="19" y2="19"/>
    </svg>
  )
}

// ── Ambient Grid (same as home.jsx) ──────────────────────────
function AmbientGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true" style={{ opacity: 0.035 }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="contact-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#00d4ff" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contact-grid)"/>
      </svg>
    </div>
  )
}

// ── Copy-to-clipboard mini hook ──────────────────────────────
function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard not available
    }
  }
  return (
    <button
      onClick={handleCopy}
      aria-label="Copy to clipboard"
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: copied ? '#00ffb3' : '#475569',
        transition: 'color 0.2s',
        padding: '4px',
        display: 'flex',
        alignItems: 'center',
      }}
      onMouseEnter={(e) => { if (!copied) e.currentTarget.style.color = '#00d4ff' }}
      onMouseLeave={(e) => { if (!copied) e.currentTarget.style.color = '#475569' }}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </button>
  )
}

// ── Node Card (clickable external link) ──────────────────────
function NodeCard({ label, title, subtitle, icon, iconBg, href, accentColor = '#00d4ff' }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="card-gradient-border flex items-center gap-5 p-5 group"
      style={{ textDecoration: 'none', transition: 'transform 0.25s ease' }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)' }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}
    >
      {/* Icon bubble */}
      <div
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '12px',
          background: iconBg || 'rgba(0,212,255,0.08)',
          border: `1px solid ${accentColor}33`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: accentColor,
          flexShrink: 0,
          transition: 'box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 18px ${accentColor}33` }}
        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}
      >
        {icon}
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '0.62rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#475569',
            marginBottom: '6px',
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontFamily: 'DM Mono, monospace',
            fontWeight: 500,
            fontSize: '0.9rem',
            color: accentColor,
            letterSpacing: '0.04em',
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.65rem',
              color: '#475569',
              marginTop: '3px',
              letterSpacing: '0.06em',
            }}
          >
            {subtitle}
          </div>
        )}
      </div>

      {/* External link arrow */}
      <div style={{ color: '#2d3f55', flexShrink: 0, transition: 'color 0.2s' }}
        className="group-hover:text-neon-cyan">
        <ExternalLinkIcon />
      </div>
    </a>
  )
}

// ── Inline Data Card (email, phone — with copy) ──────────────
function DataCard({ label, value, icon, copyable = false, sublabel }) {
  return (
    <div
      className="card-gradient-border p-5"
      style={{ minHeight: '110px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
        <span style={{ color: '#00d4ff' }}>{icon}</span>
        <span
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '0.62rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#00d4ff',
            opacity: 0.75,
          }}
        >
          {label}
        </span>
      </div>

      {/* Value + copy */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div
            style={{
              fontFamily: 'DM Mono, monospace',
              fontWeight: 500,
              fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
              color: '#f1f5f9',
              letterSpacing: '0.02em',
            }}
          >
            {value}
          </div>
          {sublabel && (
            <div
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '0.62rem',
                color: '#475569',
                marginTop: '5px',
                letterSpacing: '0.08em',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <span>◎</span>
              {sublabel}
            </div>
          )}
        </div>
        {copyable && <CopyButton text={value} />}
      </div>
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────
export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact – Jose Cardozo · CONNECT_NODE</title>
        <meta
          name="description"
          content="Contact Jose Cardozo — SRE & Infrastructure Architect based in Málaga, Spain. Available for senior infrastructure, platform engineering, and hybrid cloud roles."
        />
      </Head>

      {/* ── HERO HEADER ──────────────────────────────────── */}
      <div
        className="relative overflow-hidden"
        style={{
          paddingTop: '120px',
          paddingBottom: '60px',
          borderBottom: '1px solid rgba(0,212,255,0.07)',
        }}
      >
        <AmbientGrid />

        {/* Glow blob */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-20%', left: '-5%',
            width: '500px', height: '400px',
            background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)',
          }}
        />

        <Container className="relative z-10">
          <div
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2.2rem, 6vw, 4rem)',
              color: '#f1f5f9',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginBottom: '1rem',
            }}
          >
            CONNECT
            <span
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #00ffb3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              _NODE
            </span>
          </div>

          <div
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              color: '#475569',
              textTransform: 'uppercase',
            }}
          >
            Establishing peer-to-peer encrypted link...
          </div>
        </Container>
      </div>

      {/* ── CONTACT CARDS GRID ───────────────────────────── */}
      <Container className="py-14">
        {/* Email — Full Width */}
        <div style={{ marginBottom: '1.25rem' }}>
          <DataCard
            label="Email Endpoint"
            value="j0s3c4rd0z0@gmail.com"
            icon={<MailIcon />}
            copyable
          />
        </div>

        {/* Grid: 3 Phones + 3 Links — symmetrical rows */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {/* ── DIRECT SECURE LINES (3 phones) ─────────── */}
          <DataCard
            label="Direct Secure Line"
            value="+34 742 098 040"
            icon={<PhoneIcon />}
            copyable
            sublabel="Málaga, Spain (ES)"
          />

          <DataCard
            label="Direct Secure Line"
            value="+34 605 019 481"
            icon={<PhoneIcon />}
            copyable
            sublabel="Granada, Spain (ES)"
          />

          <DataCard
            label="Direct Secure Line"
            value="+57 318 4414445"
            icon={<PhoneIcon />}
            copyable
            sublabel="Bogotá, Colombia (CO)"
          />

          {/* ── NETWORK NODES (3 links) ────────────────── */}
          <NodeCard
            label="Corporate Node"
            title="LinkedIn Profile"
            subtitle="linkedin.com/in/jose-cardozo-calderon"
            icon={<LinkedInIcon />}
            iconBg="rgba(0,119,181,0.12)"
            href="https://www.linkedin.com/in/jose-cardozo-calderon-597650b3/"
            accentColor="#00d4ff"
          />

          <NodeCard
            label="Personal Host"
            title="Personal Portfolio"
            subtitle="josecardozo-github-io.vercel.app"
            icon={<GlobeIcon />}
            iconBg="rgba(168,85,247,0.1)"
            href="https://josecardozo-github-io.vercel.app/home"
            accentColor="#a855f7"
          />

          <NodeCard
            label="Consultant Mode"
            title="DARKROOT_STUDIO"
            subtitle="darkrootstudio.vercel.app"
            icon={<GlobeIcon />}
            iconBg="rgba(168,85,247,0.1)"
            href="https://darkrootstudio.vercel.app/"
            accentColor="#a855f7"
          />
        </div>

        {/* ── CTA BANNER ─────────────────────────────────── */}
        <div
          style={{
            marginTop: '1.5rem',
            padding: '1.75rem 2rem',
            borderRadius: '14px',
            background: 'rgba(13,20,36,0.6)',
            border: '1px solid rgba(0,212,255,0.1)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
          }}
        >
          {/* Left */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
            <div
              style={{
                color: '#00d4ff',
                opacity: 0.7,
                marginTop: '2px',
                flexShrink: 0,
                animation: 'float 3s ease-in-out infinite',
              }}
            >
              <NetworkIcon />
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: '#e2e8f0',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginBottom: '4px',
                }}
              >
                Ready to scale?
              </div>
              <div
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '0.68rem',
                  letterSpacing: '0.1em',
                  color: '#475569',
                  textTransform: 'uppercase',
                }}
              >
                Guaranteed response within 2 business hours.
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="mailto:j0s3c4rd0z0@gmail.com?subject=Let's%20work%20together"
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#00d4ff',
              padding: '0.75rem 1.75rem',
              borderRadius: '6px',
              border: '1px solid rgba(0,212,255,0.45)',
              background: 'transparent',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0,212,255,0.08)'
              e.currentTarget.style.borderColor = 'rgba(0,212,255,0.8)'
              e.currentTarget.style.boxShadow = '0 0 24px rgba(0,212,255,0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(0,212,255,0.45)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Initiate Handshake
          </a>
        </div>

        {/* ── SYSTEM STATUS FOOTER ───────────────────────── */}
        <div
          style={{
            marginTop: '3rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255,255,255,0.04)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '0.75rem',
          }}
        >
          <div
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.62rem',
              letterSpacing: '0.14em',
              color: '#2d3f55',
              textTransform: 'uppercase',
            }}
          >
            __STABLE
          </div>
          <div
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.62rem',
              letterSpacing: '0.14em',
              color: '#2d3f55',
              textTransform: 'uppercase',
            }}
          >
            Infrastructure // Security // Automation
          </div>
          <div
            style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '0.62rem',
              letterSpacing: '0.1em',
              color: '#2d3f55',
            }}
          >
            © {new Date().getFullYear()} Jose Cardozo · Málaga, ES
          </div>
        </div>
      </Container>
    </>
  )
}