import { useState } from 'react'
import { faqs } from '../data/travelData'
import { Icon } from './Icons'
import { playCabinChime, playButtonBeep } from '../utils/sound'

export function ContactBooking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    travelers: '1-2 VIP Guests',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  function handleSubmit(e) {
    e.preventDefault()
    playCabinChime()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-[#050e17] text-white relative overflow-hidden w-full">
      {/* Decorative background visual elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#e6caa0]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Contact Info & Desk */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#e6caa0] mb-3">
                <span className="w-6 h-[1.5px] bg-[#e6caa0]" />
                <span>24/7 DIPLOMATIC & PRIVATE DESK</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-medium text-white tracking-tight leading-tight">
                Shall We Get <br />
                <span className="italic text-[#e6caa0]">You Flying?</span>
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Whether you need assistance with an intricate multi-city route, private charter quote, or want an expert to tailor a private holiday escape, our concierge is ready 24/7.
              </p>
            </div>

            {/* Direct Contact Cards with Glowing Hover Effect */}
            <div className="space-y-4">
              <a
                href="tel:+18005550194"
                className="flex items-center gap-4 p-5 rounded-2xl bg-[#091724] hover:bg-[#0c1f30] border border-white/10 backdrop-blur-md transition-all group hover:shadow-[0_0_25px_rgba(230,202,160,0.25)] hover:border-[#e6caa0]/50"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#163854] to-[#e6caa0] text-[#050e17] flex items-center justify-center font-bold shadow-md">
                  <Icon name="phone" size={20} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-white/50 tracking-wider block">
                    24/7 Flight Support Line
                  </span>
                  <span className="text-base font-bold text-white group-hover:text-[#e6caa0] transition-colors font-mono">
                    +1 (800) 555-0194
                  </span>
                </div>
              </a>

              <a
                href="mailto:concierge@aeroplanetours.com"
                className="flex items-center gap-4 p-5 rounded-2xl bg-[#091724] hover:bg-[#0c1f30] border border-white/10 backdrop-blur-md transition-all group hover:shadow-[0_0_25px_rgba(230,202,160,0.25)] hover:border-[#e6caa0]/50"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#163854] to-[#e6caa0] text-[#050e17] flex items-center justify-center font-bold shadow-md">
                  <Icon name="mail" size={20} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-white/50 tracking-wider block">
                    Dedicated Booking Desk
                  </span>
                  <span className="text-base font-bold text-white group-hover:text-[#e6caa0] transition-colors font-mono">
                    concierge@aeroplanetours.com
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#091724] border border-white/10 backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl bg-white/5 text-[#e6caa0] flex items-center justify-center border border-white/10">
                  <Icon name="pin" size={20} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold text-white/50 tracking-wider block">
                    Headquarters
                  </span>
                  <span className="text-xs text-white/80 font-mono">
                    Skyline Aviation Tower, 500 Madison Ave, New York, NY
                  </span>
                </div>
              </div>
            </div>

            {/* Hours Banner */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs text-white/80 flex items-center justify-between font-mono">
              <span>Customer Operations: 24/7 Global Live Support</span>
              <span className="text-cyan-300 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Active</span>
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Booking / Inquiry Form with 3D Depth */}
          <div className="lg:col-span-7 bg-[#091724] text-white p-8 sm:p-11 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.8)] border border-white/15">
            {submitted ? (
              <div className="p-8 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#e6caa0] text-[#050e17] flex items-center justify-center shadow-lg">
                  <Icon name="checkCircle" size={38} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Thank You, {formData.name || 'VIP Traveler'}!
                </h3>
                <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed font-light">
                  Your travel inquiry for <strong className="text-[#e6caa0]">{formData.destination || 'your dream destination'}</strong> has been received. Our senior air travel consultant will reach out via email and phone within 15 minutes with customized route options.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        destination: '',
                        travelDate: '',
                        travelers: '1-2 VIP Guests',
                        message: '',
                      })
                    }}
                    className="px-7 py-3 rounded-full text-xs font-mono font-bold text-[#050e17] bg-[#e6caa0] hover:bg-white transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    Plan Your Journey With An Aviation Specialist
                  </h3>
                  <p className="text-xs text-white/60 mt-1 font-mono">
                    Receive tailored flight route options, private charter estimates, and bespoke villa bookings.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-white/70 mb-1.5">
                      Your Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-[#050e17] text-white border border-white/15 rounded-xl focus:outline-none focus:border-[#e6caa0]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-white/70 mb-1.5">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="eleanor@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-[#050e17] text-white border border-white/15 rounded-xl focus:outline-none focus:border-[#e6caa0]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-white/70 mb-1.5">
                      Phone Number <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-[#050e17] text-white border border-white/15 rounded-xl focus:outline-none focus:border-[#e6caa0]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-white/70 mb-1.5">
                      Dream Destination
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-[#050e17] text-white border border-white/15 rounded-xl focus:outline-none focus:border-[#e6caa0] cursor-pointer"
                    >
                      <option value="" className="bg-[#050e17]">Select a destination</option>
                      <option className="bg-[#050e17]">Bali, Indonesia</option>
                      <option className="bg-[#050e17]">Santorini, Greece</option>
                      <option className="bg-[#050e17]">Kyoto, Japan</option>
                      <option className="bg-[#050e17]">Swiss Alps, Switzerland</option>
                      <option className="bg-[#050e17]">Maldives Island Escape</option>
                      <option className="bg-[#050e17]">Paris, France</option>
                      <option className="bg-[#050e17]">Dubai, United Arab Emirates</option>
                      <option className="bg-[#050e17]">Other / Multi-destination Charter</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-white/70 mb-1.5">
                      Approximate Travel Date
                    </label>
                    <input
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-[#050e17] text-white border border-white/15 rounded-xl focus:outline-none focus:border-[#e6caa0] cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-white/70 mb-1.5">
                      Travel Party
                    </label>
                    <select
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-[#050e17] text-white border border-white/15 rounded-xl focus:outline-none focus:border-[#e6caa0] cursor-pointer"
                    >
                      <option className="bg-[#050e17]">Solo Traveler</option>
                      <option className="bg-[#050e17]">Couple (2 Guests)</option>
                      <option className="bg-[#050e17]">Family (3-4 Guests)</option>
                      <option className="bg-[#050e17]">Large Delegation (5+ Guests)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-white/70 mb-1.5">
                    Specific Requirements or Charter Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Preferred flight class (First Class/Private Jet), special hotel requests, private jet range, etc."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-xs bg-[#050e17] text-white border border-white/15 rounded-xl focus:outline-none focus:border-[#e6caa0] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#e6caa0] to-[#d6b782] text-[#050e17] text-xs sm:text-sm font-mono font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(230,202,160,0.35)] hover:shadow-[0_0_30px_rgba(230,202,160,0.65)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Custom Flight Quote</span>
                  <Icon name="arrowRight" size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQs Accordion Section */}
        <div className="border-t border-white/10 pt-16">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#e6caa0] block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-medium text-white">
              Everything you need to know about flying with us
            </h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-3.5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl bg-[#091724] border border-white/10 overflow-hidden backdrop-blur-md hover:border-[#e6caa0]/40 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => {
                    playButtonBeep()
                    setOpenFaq(openFaq === index ? -1 : index)
                  }}
                  className="w-full px-6 py-4 sm:py-5 text-left flex items-center justify-between text-sm sm:text-base font-semibold text-white hover:text-[#e6caa0] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-xl font-mono text-[#e6caa0]">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-5 text-xs sm:text-sm text-white/70 font-light leading-relaxed border-t border-white/10 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
