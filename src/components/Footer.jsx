// ============================================================
// Footer.jsx — v2 Minimal Technical Footer (Fixed)
// ============================================================
import Link from 'next/link'

const footerLinks = [
  { href: '/home', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/speaking', label: 'Speaking' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative mt-24 py-10 px-6"
      style={{
        borderTop: '1px solid rgba(0,212,255,0.08)',
        background: 'rgba(13,20,36,0.6)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Nav links — Ajustado con etiqueta <a> interna */}
          <nav className="flex gap-6">
            {footerLinks.map((l) => (
              <Link key={l.href} href={l.href}>
                <a className="text-xs text-slate-500 hover:text-slate-300 transition-colors tracking-wide">
                  {l.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* System attribution */}
          <div
            className="flex items-center gap-2 text-xs opacity-40"
            style={{ fontFamily: 'DM Mono, monospace' }}
          >
            <span style={{ color: '#00d4ff' }}>©{year}</span>
            <span className="text-slate-500">Jose Cardozo · Málaga, ES · Built with Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  )
}