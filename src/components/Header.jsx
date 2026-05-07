// ============================================================
// Header.jsx — v2 Tech-Premium Navigation (FIXED & SYNCED)
// ============================================================
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import clsx from 'clsx'

const navLinks = [
  { href: '/home', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/contact_us', label: 'Contact' },   // ← feat. Contactenos
]

function StatusDot() {
  return (
    <span className="flex items-center gap-1.5">
      <span className="relative flex h-2 w-2">
        <span
          className="absolute inline-flex h-full w-full rounded-full opacity-75"
          style={{ background: '#00ffb3', animation: 'pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite' }}
        />
        <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#00ffb3' }} />
      </span>
      <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: '#00ffb3', opacity: 0.8 }}>
        AVAILABLE
      </span>
    </span>
  )
}

function NavLink({ href, label }) {
  const router = useRouter()
  const isActive = router.pathname === href || (href === '/home' && router.pathname === '/')

  return (
    // passHref es vital en Next 12 cuando el hijo es un <a> personalizado
    <Link href={href} passHref>
      <a
        className={clsx(
          'relative text-sm font-medium tracking-wide transition-colors duration-200 group block',
          isActive ? 'text-white' : 'text-slate-400 hover:text-white'
        )}
      >
        {label}
        <span
          className={clsx(
            'absolute -bottom-0.5 left-0 h-px transition-all duration-300',
            isActive ? 'w-full' : 'w-0 group-hover:w-full'
          )}
          style={{
            background: 'linear-gradient(90deg, #00d4ff, #00ffb3)',
            boxShadow: isActive ? '0 0 8px rgba(0,212,255,0.6)' : 'none',
          }}
        />
      </a>
    </Link>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <header
        className={clsx('fixed top-0 left-0 right-0 z-50 transition-all duration-500', scrolled ? 'py-3' : 'py-5')}
        style={{
          background: scrolled ? 'rgba(8, 12, 20, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,212,255,0.08)' : 'none',
        }}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">

          {/* Logo con passHref para compatibilidad total */}
          <Link href="/home" passHref>
            <a className="flex items-center gap-3 group" style={{ cursor: 'pointer', textDecoration: 'none' }}>
              <div
                className="flex items-center justify-center w-8 h-8 rounded-md text-xs font-bold"
                style={{
                  fontFamily: 'DM Mono, monospace',
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,255,179,0.08))',
                  border: '1px solid rgba(0,212,255,0.3)',
                  color: '#00d4ff',
                  boxShadow: '0 0 12px rgba(0,212,255,0.15)',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                JC
              </div>
              <div className="hidden sm:block">
                <div
                  className="text-xs font-semibold tracking-widest uppercase text-white opacity-90"
                  style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '0.2em' }}
                >
                  Jose Cardozo
                </div>
                <div style={{ 
                  marginTop: '1px', 
                  fontFamily: 'DM Mono, monospace', 
                  fontSize: '0.6rem', 
                  color: '#00d4ff', 
                  opacity: 0.6 
                }}>
                  SRE · Cloud Architect
                </div>
              </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <NavLink key={l.href} {...l} />
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <StatusDot />
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={clsx('block h-px w-6 transition-all duration-300', mobileOpen ? 'rotate-45 translate-y-2' : '')}
                style={{ background: '#00d4ff' }}
              />
              <span
                className={clsx('block h-px transition-all duration-300', mobileOpen ? 'opacity-0 w-0' : 'w-6')}
                style={{ background: '#00d4ff', opacity: mobileOpen ? 0 : 0.6 }}
              />
              <span
                className={clsx('block h-px w-6 transition-all duration-300', mobileOpen ? '-rotate-45 -translate-y-2' : '')}
                style={{ background: '#00d4ff' }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-20 px-6 pb-8 md:hidden"
          style={{ background: 'rgba(8,12,20,0.97)', backdropFilter: 'blur(20px)' }}
        >
          <nav className="flex flex-col gap-6 mt-8">
            {navLinks.map((l, i) => (
              <Link key={l.href} href={l.href} passHref>
                <a
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-semibold text-white block"
                  style={{ fontFamily: 'Syne, sans-serif', animationDelay: `${i * 0.05}s` }}
                >
                  {l.label}
                </a>
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <StatusDot />
          </div>
        </div>
      )}
    </>
  )
}