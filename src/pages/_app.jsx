// ============================================================
// _app.jsx — v2 Application Shell
// Changes from v1:
//   - Removed dark/light toggle (portfolio is dark-only — intentional brand signal)
//   - Added global CSS import with new design system
//   - Header and Footer now shared across all routes via layout wrapper
// ============================================================
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
