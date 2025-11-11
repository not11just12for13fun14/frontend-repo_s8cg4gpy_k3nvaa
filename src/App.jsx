import { useState } from 'react'
import Spline from '@splinetool/react-spline'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px] shadow-cyan-500/60" />
            <span className="font-semibold tracking-tight">BluePortfolio</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="/test" className="rounded-md bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 transition-colors">System Test</a>
          </nav>
          <button aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-6 py-4 flex flex-col gap-3 text-slate-300">
              <a onClick={() => setMenuOpen(false)} href="#work" className="hover:text-white">Work</a>
              <a onClick={() => setMenuOpen(false)} href="#about" className="hover:text-white">About</a>
              <a onClick={() => setMenuOpen(false)} href="#contact" className="hover:text-white">Contact</a>
              <a onClick={() => setMenuOpen(false)} href="/test" className="rounded-md bg-white/10 hover:bg-white/20 text-white px-3 py-2 text-center">System Test</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* soft gradient background that doesn't block Spline interaction */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_20%,rgba(56,189,248,0.15),transparent),radial-gradient(600px_300px_at_10%_10%,rgba(168,85,247,0.15),transparent)]" />
        <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-12 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Interactive • Tech • Playful
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              Crafting modern web experiences that feel alive
            </h1>
            <p className="mt-4 md:mt-6 text-slate-300 text-base md:text-lg leading-relaxed">
              Explore a playful, interactive portfolio powered by a real‑time 3D scene. Click, drag, and discover how motion and code come together.
            </p>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#work" className="inline-flex items-center justify-center rounded-md bg-cyan-400 text-slate-950 font-medium px-5 py-3 hover:brightness-110 transition">
                View Work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white/10 text-white font-medium px-5 py-3 hover:bg-white/20 transition">
                Get in Touch
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"/>Real‑time 3D</span>
              <span>Responsive</span>
              <span>Accessible</span>
            </div>
          </div>

          {/* Spline 3D Scene */}
          <div className="relative h-[420px] sm:h-[500px] md:h-[560px] rounded-xl border border-white/10 bg-white/5">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold">Selected Work</h2>
            <p className="mt-2 text-slate-300">A few interactive interfaces and experimental builds.</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Realtime Dashboard', tag: 'Data • Motion' },
              { title: '3D Product Teaser', tag: 'WebGL • UX' },
              { title: 'Playful Onboarding', tag: 'Micro‑interactions' },
            ].map((card, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                <div className="pointer-events-none absolute -inset-20 opacity-0 group-hover:opacity-100 transition duration-500" style={{
                  background: 'radial-gradient(300px 150px at 20% 0%, rgba(56,189,248,.15), transparent), radial-gradient(250px 120px at 100% 100%, rgba(168,85,247,.18), transparent)'
                }} />
                <div className="relative z-10">
                  <div className="h-36 rounded-lg bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20 border border-white/10" />
                  <div className="mt-4">
                    <span className="text-xs text-slate-400">{card.tag}</span>
                    <h3 className="text-lg font-medium mt-1">{card.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I design and build interactive web experiences that balance aesthetics and performance. From playful motion to clean, accessible interfaces, I turn ideas into products people love using.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400"/>React</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400"/>Framer Motion</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400"/>Three/Spline</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400"/>Tailwind</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10" />
            <p className="mt-4 text-slate-300 text-sm">
              Experimenting with motion systems, easing curves, and tactile UI patterns that make interfaces more engaging and intuitive.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold">Let’s build something fun</h2>
            <p className="mt-2 text-slate-300">Have an idea in mind? I’d love to hear it.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid md:grid-cols-3 gap-3">
            <input required placeholder="Your email" className="md:col-span-1 rounded-md bg-white/10 border border-white/10 px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <input required placeholder="What are we building?" className="md:col-span-1 rounded-md bg-white/10 border border-white/10 px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <button className="md:col-span-1 rounded-md bg-cyan-400 text-slate-950 font-medium px-5 py-3 hover:brightness-110 transition">Send</button>
          </form>
          <p className="mt-4 text-xs text-slate-400">This demo form doesn’t send data. Add your backend endpoint to make it live.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} BluePortfolio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#">Twitter</a>
            <a className="hover:text-white" href="#">GitHub</a>
            <a className="hover:text-white" href="#">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
