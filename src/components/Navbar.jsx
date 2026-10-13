import { useState, useEffect } from 'react'
import { Icon } from './Icons'
import { playCabinChime, playButtonBeep } from '../utils/sound'

export function Navbar({ onOpenBooking, onShowIntro }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [soundOn, setSoundOn] = useState(true)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function toggleSound() {
    if (!soundOn) {
      playCabinChime()
      setSoundOn(true)
    } else {
      setSoundOn(false)
    }
  }

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#060e18]/95 backdrop-blur-md shadow-2xl py-3 border-b border-white/10'
          : 'bg-[#060e18]/80 backdrop-blur-sm py-4 border-b border-white/5'
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 flex items-center justify-between">
        {/* Brand Logo with 3D Floating Insignia & Glowing Halo */}
        <a href="#home" className="group flex items-center gap-3">
          <span className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#0f283d] via-[#1b4366] to-[#e6caa0] text-white flex items-center justify-center -rotate-12 group-hover:rotate-0 transition-transform duration-300 shadow-[0_0_20px_rgba(230,202,160,0.35)] group-hover:shadow-[0_0_30px_rgba(230,202,160,0.7)] animate-float">
            <span className="transform -rotate-45 text-[#050d14]">
              <Icon name="plane" size={21} />
            </span>
          </span>
          <div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white block leading-tight font-serif">
              Aeroplane
            </span>
            <span className="text-[9px] tracking-[0.26em] font-extrabold text-[#e6caa0] block font-mono">
              LUXURY TOURS & TRAVELS
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[12.5px] font-medium tracking-wide text-white/80">
          <a href="#home" className="hover:text-[#e6caa0] transition-colors py-1">
            Home
          </a>
          <a href="#booking" className="hover:text-[#e6caa0] transition-colors py-1">
            Search Flights
          </a>
          <a href="#cabin-experience" className="hover:text-[#e6caa0] transition-colors py-1 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>Cabin Suite</span>
          </a>
          <a href="#fleet-showcase" className="hover:text-[#e6caa0] transition-colors py-1">
            Fleet
          </a>
          <a href="#destinations" className="hover:text-[#e6caa0] transition-colors py-1">
            Destinations
          </a>
          <a href="#offers" className="hover:text-[#e6caa0] transition-colors py-1">
            Packages
          </a>
          <a href="#services" className="hover:text-[#e6caa0] transition-colors py-1">
            Services
          </a>
          <a href="#contact" className="hover:text-[#e6caa0] transition-colors py-1">
            Concierge
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={soundOn ? 'Mute cabin chime' : 'Enable cabin chime'}
            className="p-2 rounded-full text-white/70 hover:text-[#e6caa0] hover:bg-white/5 transition-all text-xs font-mono"
            aria-label="Toggle audio"
          >
            <span>{soundOn ? '🔔 Chime On' : '🔕 Muted'}</span>
          </button>

          {/* Replay Intro Screen Button */}
          {onShowIntro && (
            <button
              onClick={() => {
                playButtonBeep()
                onShowIntro()
              }}
              title="Watch 3D Intro Experience"
              className="p-2 rounded-full text-white/70 hover:text-[#e6caa0] hover:bg-white/5 transition-all flex items-center justify-center cursor-pointer"
              aria-label="Replay intro animation"
            >
              <Icon name="sparkles" size={17} />
            </button>
          )}

          <a
            href="tel:+18005550194"
            className="flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-[#e6caa0] px-3.5 py-2 rounded-full hover:bg-white/5 transition-all"
            title="Call 24/7 Aviation Desk"
          >
            <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#e6caa0]">
              <Icon name="phone" size={13} />
            </span>
            <span className="hidden xl:inline font-mono">+1 (800) 555-0194</span>
          </a>

          <button
            onClick={() => {
              if (soundOn) playCabinChime()
              onOpenBooking({ type: 'general', title: 'Luxury Flight & Expedition Booking', price: 950 })
            }}
            className="relative group overflow-hidden px-6 py-2.5 rounded-full text-xs font-bold text-[#050d14] bg-gradient-to-r from-[#e6caa0] via-[#eed9bb] to-[#d8b884] shadow-[0_0_20px_rgba(230,202,160,0.35)] hover:shadow-[0_0_30px_rgba(230,202,160,0.65)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2 font-mono uppercase tracking-wider text-[11px]">
              <span>Book Flight</span>
              <Icon name="arrowRight" size={14} />
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="lg:hidden w-full px-6 pt-4 pb-6 bg-[#060e18] border-b border-white/15 shadow-2xl animate-fadeIn text-white">
          <div className="flex flex-col gap-3.5 text-sm font-semibold text-white/90">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#e6caa0]"
            >
              Home
            </a>
            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#e6caa0]"
            >
              Search Flights
            </a>
            <a
              href="#cabin-experience"
              onClick={() => setMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#e6caa0]"
            >
              Boeing 787 Cabin Blueprint
            </a>
            <a
              href="#fleet-showcase"
              onClick={() => setMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#e6caa0]"
            >
              Executive Fleet
            </a>
            <a
              href="#destinations"
              onClick={() => setMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#e6caa0]"
            >
              Popular Destinations
            </a>
            <a
              href="#offers"
              onClick={() => setMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#e6caa0]"
            >
              Flight Packages & Offers
            </a>
            <a
              href="#services"
              onClick={() => setMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#e6caa0]"
            >
              Travel Services
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="py-2 border-b border-white/10 hover:text-[#e6caa0]"
            >
              Contact & Concierge
            </a>

            <div className="pt-2 flex flex-col gap-2.5">
              {onShowIntro && (
                <button
                  onClick={() => {
                    setMenuOpen(false)
                    onShowIntro()
                  }}
                  className="w-full py-2.5 rounded-xl text-center text-xs font-bold text-[#e6caa0] bg-white/5 border border-white/10 flex items-center justify-center gap-2"
                >
                  <Icon name="sparkles" size={15} />
                  <span>Replay 3D Intro Experience</span>
                </button>
              )}

              <button
                onClick={() => {
                  setMenuOpen(false)
                  onOpenBooking({ type: 'general', title: 'Luxury Flight & Expedition Booking', price: 950 })
                }}
                className="w-full py-3 rounded-xl text-center text-xs font-bold text-[#050d14] bg-[#e6caa0] shadow-md"
              >
                Book Your Trip Now
              </button>
              <a
                href="tel:+18005550194"
                className="w-full py-2.5 text-center text-xs font-semibold text-white/80 bg-white/5 rounded-xl font-mono"
              >
                Call Concierge: +1 (800) 555-0194
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
