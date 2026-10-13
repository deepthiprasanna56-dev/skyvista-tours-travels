import { useState, useEffect } from 'react'
import { Icon } from './Icons'

export function Navbar({ onOpenBooking, onShowIntro }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#fbfaf7]/95 backdrop-blur-md shadow-md py-3.5 border-b border-[#e7e6df]/80'
          : 'bg-[#fbfaf7] py-4'
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 flex items-center justify-between">
        {/* Brand Logo with 3D Floating Insignia & Glowing Halo */}
        <a href="#home" className="group flex items-center gap-3">
          <span className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#233f37] to-[#3f6d61] text-white flex items-center justify-center -rotate-12 group-hover:rotate-0 transition-transform duration-300 shadow-[0_0_15px_rgba(49,89,79,0.35)] group-hover:shadow-[0_0_25px_rgba(228,201,155,0.6)] animate-float">
            <span className="transform -rotate-45">
              <Icon name="plane" size={21} />
            </span>
          </span>
          <div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#202b29] block leading-tight">
              Aeroplane
            </span>
            <span className="text-[9px] tracking-[0.24em] font-extrabold text-[#527063] block">
              TOURS & TRAVELS
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[13px] font-semibold text-[#48554f]">
          <a href="#home" className="hover:text-[#31594f] transition-colors py-1">
            Home
          </a>
          <a href="#booking" className="hover:text-[#31594f] transition-colors py-1">
            Flight Search
          </a>
          <a href="#destinations" className="hover:text-[#31594f] transition-colors py-1">
            Destinations
          </a>
          <a href="#offers" className="hover:text-[#31594f] transition-colors py-1">
            Packages & Offers
          </a>
          <a href="#services" className="hover:text-[#31594f] transition-colors py-1">
            Services
          </a>
          <a href="#about" className="hover:text-[#31594f] transition-colors py-1">
            About Us
          </a>
          <a href="#contact" className="hover:text-[#31594f] transition-colors py-1">
            Contact
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3.5">
          {/* Replay Intro Screen Button */}
          {onShowIntro && (
            <button
              onClick={onShowIntro}
              title="Watch 3D Intro Experience"
              className="p-2 rounded-full text-[#31594f] hover:bg-[#eaf1e9] transition-all flex items-center justify-center"
              aria-label="Replay intro animation"
            >
              <Icon name="sparkles" size={17} />
            </button>
          )}

          <a
            href="tel:+18005550194"
            className="flex items-center gap-2 text-xs font-semibold text-[#31594f] hover:text-[#233f37] px-3.5 py-2 rounded-full hover:bg-[#eef3ee] transition-all"
            title="Call 24/7 Aviation Desk"
          >
            <span className="w-7 h-7 rounded-full bg-[#e3eae3] flex items-center justify-center text-[#31594f]">
              <Icon name="phone" size={13} />
            </span>
            <span className="hidden xl:inline font-mono">+1 (800) 555-0194</span>
          </a>

          <button
            onClick={() => onOpenBooking({ type: 'general', title: 'Flight & Holiday Booking', price: 499 })}
            className="relative group overflow-hidden px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#31594f] to-[#25463e] shadow-[0_4px_14px_rgba(49,89,79,0.3)] hover:shadow-[0_0_20px_rgba(49,89,79,0.5)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Book Trip</span>
              <Icon name="arrowRight" size={14} />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-xl text-[#202b29] hover:bg-[#eeeee7] transition-colors cursor-pointer"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="lg:hidden w-full px-6 pt-4 pb-6 bg-[#fbfaf7] border-b border-[#e7e6df] shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-3.5 text-sm font-semibold text-[#38433e]">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="py-2 border-b border-[#eef0ea] hover:text-[#31594f]"
            >
              Home
            </a>
            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="py-2 border-b border-[#eef0ea] hover:text-[#31594f]"
            >
              Search Flights
            </a>
            <a
              href="#destinations"
              onClick={() => setMenuOpen(false)}
              className="py-2 border-b border-[#eef0ea] hover:text-[#31594f]"
            >
              Popular Destinations
            </a>
            <a
              href="#offers"
              onClick={() => setMenuOpen(false)}
              className="py-2 border-b border-[#eef0ea] hover:text-[#31594f]"
            >
              Flight Packages & Offers
            </a>
            <a
              href="#services"
              onClick={() => setMenuOpen(false)}
              className="py-2 border-b border-[#eef0ea] hover:text-[#31594f]"
            >
              Travel Services
            </a>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="py-2 border-b border-[#eef0ea] hover:text-[#31594f]"
            >
              About Us
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="py-2 border-b border-[#eef0ea] hover:text-[#31594f]"
            >
              Contact Us
            </a>

            <div className="pt-2 flex flex-col gap-2.5">
              {onShowIntro && (
                <button
                  onClick={() => {
                    setMenuOpen(false)
                    onShowIntro()
                  }}
                  className="w-full py-2.5 rounded-xl text-center text-xs font-bold text-[#31594f] bg-[#eef3ee] flex items-center justify-center gap-2"
                >
                  <Icon name="sparkles" size={15} />
                  <span>Replay 3D Intro Experience</span>
                </button>
              )}

              <button
                onClick={() => {
                  setMenuOpen(false)
                  onOpenBooking({ type: 'general', title: 'Flight & Holiday Booking', price: 499 })
                }}
                className="w-full py-3 rounded-xl text-center text-xs font-bold text-white bg-[#31594f] shadow-md"
              >
                Book Your Trip Now
              </button>
              <a
                href="tel:+18005550194"
                className="w-full py-2.5 text-center text-xs font-semibold text-[#31594f] bg-[#eef3ee] rounded-xl font-mono"
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
