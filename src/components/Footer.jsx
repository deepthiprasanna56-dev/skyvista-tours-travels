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
    <footer className="w-full bg-[#12221d] text-white/80 pt-16 pb-12 border-t border-white/10">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-[#31594f] text-[#e4c99b] flex items-center justify-center -rotate-12 shadow-[0_0_15px_rgba(49,89,79,0.5)]">
                <Icon name="plane" size={21} />
              </span>
              <div>
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white block leading-tight">
                  Aeroplane
                </span>
                <span className="text-[9px] tracking-[0.24em] font-extrabold text-[#e4c99b] block">
                  TOURS & TRAVELS
                </span>
              </div>
            </a>

            <p className="text-xs text-white/70 font-light leading-relaxed max-w-sm">
              Certified IATA travel agency delivering effortless flight ticketing, bespoke luxury vacation packages, and 24/7 dedicated air concierge worldwide.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#e4c99b]">
              <span className="flex items-center gap-1">
                <Icon name="shield" size={14} /> IATA Accredited
              </span>
              <span>·</span>
              <span>PCI-DSS Secured</span>
              <span>·</span>
              <span>24/7 Hotline</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#e4c99b] transition-colors">Home</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#e4c99b] transition-colors">Search Flights</a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-[#e4c99b] transition-colors">Popular Destinations</a>
              </li>
              <li>
                <a href="#offers" className="hover:text-[#e4c99b] transition-colors">Flight Packages</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#e4c99b] transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#e4c99b] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#e4c99b] transition-colors">Contact Concierge</a>
              </li>
            </ul>
          </div>

          {/* Popular Flight Routes */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Top Flight Routes
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#booking" className="hover:text-[#e4c99b] transition-colors">New York (JFK) ➔ London (LHR)</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#e4c99b] transition-colors">London (LHR) ➔ Dubai (DXB)</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#e4c99b] transition-colors">Singapore (SIN) ➔ Bali (DPS)</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#e4c99b] transition-colors">Paris (CDG) ➔ Tokyo (HND)</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#e4c99b] transition-colors">Dubai (DXB) ➔ Maldives (MLE)</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#e4c99b] transition-colors">Zurich (ZRH) ➔ Santorini (JTR)</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Flight Fare Drop Alerts
            </h4>
            <p className="text-xs text-white/70 leading-relaxed font-light">
              Subscribe to get secret airline seat sales and weekend getaway deals directly in your inbox.
            </p>

            {subscribed ? (
              <div className="p-3.5 bg-[#31594f] rounded-xl text-xs text-[#e4c99b] font-semibold text-center shadow-[0_0_20px_rgba(49,89,79,0.4)] animate-fadeIn">
                ✓ You're subscribed to private flight deals!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex rounded-xl overflow-hidden border border-white/20 bg-white/[0.06] focus-within:border-[#e4c99b]">
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
                    className="px-5 py-3 bg-[#e4c99b] text-[#12221d] font-bold text-xs hover:bg-white transition-colors cursor-pointer shadow-sm"
                  >
                    Join
                  </button>
                </div>
                <span className="text-[10px] text-white/50 block">No spam. Unsubscribe anytime.</span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
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
