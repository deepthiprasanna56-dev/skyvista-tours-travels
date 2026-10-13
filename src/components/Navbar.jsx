import { useState, useEffect } from 'react'
import { Icon } from './Icons'

export function Navbar({ onOpenBooking }) {
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
      className={`site-header sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fbfaf7]/95 backdrop-blur-md shadow-sm py-3.5'
          : 'bg-[#fbfaf7] py-5'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="brand group flex items-center gap-3">
          <span className="brand-mark w-10 h-10 rounded-full bg-[#31594f] text-white flex items-center justify-center -rotate-12 transition-transform group-hover:rotate-0 duration-300 shadow-sm">
            <Icon name="plane" size={20} />
          </span>
          <div>
            <span className="text-xl font-bold tracking-tight text-[#202b29] block leading-tight">
              Aeroplane
            </span>
            <span className="brand-small text-[9px] tracking-[0.22em] font-bold text-[#62776c] block">
              TOURS & TRAVELS
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-[#495650]">
          <a href="#home" className="hover:text-[#31594f] transition-colors py-1">
            Home
          </a>
          <a href="#booking" className="hover:text-[#31594f] transition-colors py-1">
            Search Flights
          </a>
          <a href="#destinations" className="hover:text-[#31594f] transition-colors py-1">
            Destinations
          </a>
          <a href="#offers" className="hover:text-[#31594f] transition-colors py-1">
            Flight Packages
          </a>
          <a href="#services" className="hover:text-[#31594f] transition-colors py-1">
            Travel Services
          </a>
          <a href="#about" className="hover:text-[#31594f] transition-colors py-1">
            About Us
          </a>
          <a href="#contact" className="hover:text-[#31594f] transition-colors py-1">
            Contact
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+18005550194"
            className="flex items-center gap-2 text-xs font-semibold text-[#31594f] hover:text-[#233f37] px-3 py-2 rounded-full hover:bg-[#ebf0ea] transition-all"
            title="Call 24/7 Travel Desk"
          >
            <span className="w-7 h-7 rounded-full bg-[#e3eae3] flex items-center justify-center text-[#31594f]">
              <Icon name="phone" size={14} />
            </span>
            <span className="hidden xl:inline">+1 (800) 555-0194</span>
          </a>

          <button
            onClick={() => onOpenBooking({ type: 'general', title: 'Flight & Holiday Booking', price: 499 })}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#31594f] hover:bg-[#233f37] shadow-sm hover:shadow transition-all"
          >
            <span>Book Trip</span>
            <Icon name="arrowRight" size={14} />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#202b29] hover:bg-[#eeeee7] transition-colors"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="lg:hidden px-6 pt-4 pb-6 bg-[#fbfaf7] border-b border-[#e7e6df] shadow-lg animate-fadeIn">
          <div className="flex flex-col gap-4 text-sm font-medium text-[#38433e]">
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
              className="py-2 hover:text-[#31594f]"
            >
              Contact Us
            </a>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMenuOpen(false)
                  onOpenBooking({ type: 'general', title: 'Flight & Holiday Booking', price: 499 })
                }}
                className="w-full py-3 rounded-xl text-center text-xs font-bold text-white bg-[#31594f]"
              >
                Book Your Trip Now
              </button>
              <a
                href="tel:+18005550194"
                className="w-full py-2.5 text-center text-xs font-semibold text-[#31594f] bg-[#eef3ee] rounded-xl"
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
