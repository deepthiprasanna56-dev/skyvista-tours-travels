import { useState } from 'react'
import { Icon } from './Icons'

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e) {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="w-full bg-[#040a12] text-white/80 pt-16 pb-12 border-t border-white/10">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-[#0e2133] text-[#e6caa0] flex items-center justify-center -rotate-12 shadow-[0_0_20px_rgba(230,202,160,0.35)] border border-[#e6caa0]/30">
                <Icon name="plane" size={21} />
              </span>
              <div>
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white block leading-tight font-serif">
                  Aeroplane
                </span>
                <span className="text-[9px] tracking-[0.24em] font-extrabold text-[#e6caa0] block font-mono">
                  LUXURY TOURS & TRAVELS
                </span>
              </div>
            </a>

            <p className="text-xs text-white/70 font-light leading-relaxed max-w-sm">
              Certified IATA travel agency delivering effortless private charters, Boeing 787 First Class suite bookings, and 24/7 dedicated air concierge worldwide.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#e6caa0] font-mono">
              <span className="flex items-center gap-1">
                <Icon name="shield" size={14} /> IATA Accredited
              </span>
              <span>·</span>
              <span>PCI-DSS Secured</span>
              <span>·</span>
              <span>24/7 Diplomatic Desk</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#e6caa0] transition-colors">Home</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#e6caa0] transition-colors">Search Flights</a>
              </li>
              <li>
                <a href="#cabin-experience" className="hover:text-[#e6caa0] transition-colors">Boeing 787 Blueprint</a>
              </li>
              <li>
                <a href="#fleet-showcase" className="hover:text-[#e6caa0] transition-colors">Executive Fleet</a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-[#e6caa0] transition-colors">Popular Destinations</a>
              </li>
              <li>
                <a href="#offers" className="hover:text-[#e6caa0] transition-colors">Flight Packages</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#e6caa0] transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#e6caa0] transition-colors">Contact Concierge</a>
              </li>
            </ul>
          </div>

          {/* Popular Flight Routes */}
          <div className="lg:col-span-3 space-y-3 font-mono">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              VIP Flight Routes
            </h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li>
                <a href="#booking" className="hover:text-[#e6caa0] transition-colors">New York (JFK) ➔ London (LHR)</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#e6caa0] transition-colors">London (LHR) ➔ Dubai (DXB)</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#e6caa0] transition-colors">Singapore (SIN) ➔ Bali (DPS)</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#e6caa0] transition-colors">Paris (CDG) ➔ Tokyo (HND)</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#e6caa0] transition-colors">Dubai (DXB) ➔ Maldives (MLE)</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#e6caa0] transition-colors">Zurich (ZRH) ➔ Santorini (JTR)</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              VIP Empty Leg & Fare Alerts
            </h4>
            <p className="text-xs text-white/70 leading-relaxed font-light">
              Subscribe to get secret empty-leg private jet flights and First Class seat drops directly in your inbox.
            </p>

            {subscribed ? (
              <div className="p-3.5 bg-[#0e2133] border border-[#e6caa0]/30 rounded-xl text-xs text-[#e6caa0] font-mono font-semibold text-center shadow-[0_0_20px_rgba(230,202,160,0.3)] animate-fadeIn">
                ✓ You're subscribed to VIP flight notifications!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex rounded-xl overflow-hidden border border-white/20 bg-white/[0.04] focus-within:border-[#e6caa0]">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-3.5 py-3 text-xs bg-transparent text-white placeholder-white/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 bg-gradient-to-r from-[#e6caa0] to-[#d6b782] text-[#050d14] font-mono font-bold text-xs hover:bg-white transition-colors cursor-pointer shadow-sm uppercase tracking-wider"
                  >
                    Join
                  </button>
                </div>
                <span className="text-[10px] text-white/50 block font-mono">No spam. Private invitations only.</span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-mono">
          <p>© {new Date().getFullYear()} Aeroplane Tours & Travels. All rights reserved.</p>

          <div className="flex items-center gap-6 text-[11px]">
            <a href="#contact" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#contact" className="hover:text-white transition-colors">Terms of Carriage</a>
            <a href="#contact" className="hover:text-white transition-colors">Cookie Settings</a>
            <a href="#contact" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
