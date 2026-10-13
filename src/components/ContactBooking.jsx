import { useState } from 'react'
import { faqs } from '../data/travelData'
import { Icon } from './Icons'

export function ContactBooking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    travelers: '1-2 Travelers',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-[#233f37] text-white relative overflow-hidden">
      {/* Decorative background visual elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#31594f]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1a2f29]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Contact Info & Desk */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e4c99b] mb-3">
                <span className="w-6 h-[1.5px] bg-[#e4c99b]" />
                <span>CONNECT WITH OUR AVIATION DESK</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white tracking-tight leading-tight">
                Shall we get <br />
                <span className="italic text-[#e4c99b]">you flying?</span>
              </h2>
              <p className="mt-4 text-sm text-white/80 font-light leading-relaxed">
                Whether you need assistance with an intricate multi-city route, group ticketing, or want an expert to tailor a private holiday escape, our concierge is ready 24/7.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href="tel:+18005550194"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e4c99b] text-[#233f37] flex items-center justify-center font-bold">
                  <Icon name="phone" size={20} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-white/60 tracking-wider block">
                    24/7 Flight Support Line
                  </span>
                  <span className="text-base font-bold text-white group-hover:text-[#e4c99b] transition-colors">
                    +1 (800) 555-0194
                  </span>
                </div>
              </a>

              <a
                href="mailto:concierge@aeroplanetours.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e4c99b] text-[#233f37] flex items-center justify-center font-bold">
                  <Icon name="mail" size={20} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-white/60 tracking-wider block">
                    Dedicated Booking Desk
                  </span>
                  <span className="text-base font-bold text-white group-hover:text-[#e4c99b] transition-colors">
                    concierge@aeroplanetours.com
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl bg-white/10 text-[#e4c99b] flex items-center justify-center">
                  <Icon name="pin" size={20} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-white/60 tracking-wider block">
                    Headquarters
                  </span>
                  <span className="text-xs text-white/90">
                    Skyline Aviation Tower, 500 Madison Ave, New York, NY
                  </span>
                </div>
              </div>
            </div>

            {/* Hours Banner */}
            <div className="p-4 rounded-2xl bg-black/20 border border-white/10 text-xs text-white/70 flex items-center justify-between">
              <span>Customer Desk: Mon–Sun, 24/7 Live Support</span>
              <span className="text-[#e4c99b] font-semibold">● Live Now</span>
            </div>
          </div>

          {/* Right Column: Interactive Booking / Inquiry Form */}
          <div className="lg:col-span-7 bg-white text-[#202b29] p-8 sm:p-10 rounded-3xl shadow-2xl border border-white/20">
            {submitted ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#eef4ee] text-[#31594f] flex items-center justify-center">
                  <Icon name="checkCircle" size={36} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#233f37]">
                  Thank You, {formData.name || 'Traveler'}!
                </h3>
                <p className="text-sm text-[#616e66] max-w-md mx-auto leading-relaxed">
                  Your travel inquiry for <strong className="text-[#233f37]">{formData.destination || 'your dream destination'}</strong> has been received. Our senior air travel consultant will reach out via email and phone within 15 minutes with customized route options.
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
                        travelers: '1-2 Travelers',
                        message: '',
                      })
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-bold text-[#31594f] bg-[#eef3ee] hover:bg-[#dfe7e0] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#233f37]">
                    Plan Your Journey With An Expert
                  </h3>
                  <p className="text-xs text-[#727f77] mt-1">
                    Fill out your preferences below and receive tailored flight options & package quotes.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#48564f] mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#fbfaf7] border border-[#d6dad2] rounded-xl focus:outline-none focus:border-[#31594f] focus:ring-1 focus:ring-[#31594f]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#48564f] mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="eleanor@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#fbfaf7] border border-[#d6dad2] rounded-xl focus:outline-none focus:border-[#31594f] focus:ring-1 focus:ring-[#31594f]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#48564f] mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#fbfaf7] border border-[#d6dad2] rounded-xl focus:outline-none focus:border-[#31594f] focus:ring-1 focus:ring-[#31594f]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#48564f] mb-1.5">
                      Dream Destination
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#fbfaf7] border border-[#d6dad2] rounded-xl focus:outline-none focus:border-[#31594f] focus:ring-1 focus:ring-[#31594f] cursor-pointer"
                    >
                      <option value="">Select a destination</option>
                      <option>Bali, Indonesia</option>
                      <option>Santorini, Greece</option>
                      <option>Kyoto, Japan</option>
                      <option>Swiss Alps, Switzerland</option>
                      <option>Maldives Island Escape</option>
                      <option>Paris, France</option>
                      <option>Dubai, United Arab Emirates</option>
                      <option>Other / Multi-destination</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#48564f] mb-1.5">
                      Approximate Travel Date
                    </label>
                    <input
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#fbfaf7] border border-[#d6dad2] rounded-xl focus:outline-none focus:border-[#31594f] focus:ring-1 focus:ring-[#31594f]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#48564f] mb-1.5">
                      Travel Party
                    </label>
                    <select
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#fbfaf7] border border-[#d6dad2] rounded-xl focus:outline-none focus:border-[#31594f] focus:ring-1 focus:ring-[#31594f] cursor-pointer"
                    >
                      <option>Solo Traveler</option>
                      <option>Couple (2 Travelers)</option>
                      <option>Family (3-4 Travelers)</option>
                      <option>Large Group (5+ Travelers)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#48564f] mb-1.5">
                    Specific Requirements or Questions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Preferred flight class (Economy/Business), special hotel requests, anniversary celebration, etc."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#fbfaf7] border border-[#d6dad2] rounded-xl focus:outline-none focus:border-[#31594f] focus:ring-1 focus:ring-[#31594f] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#31594f] hover:bg-[#233f37] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Custom Flight Quote</span>
                  <Icon name="arrowRight" size={15} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQs Accordion Section */}
        <div className="border-t border-white/15 pt-16">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-[#e4c99b] block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-white">
              Everything you need to know about flying with us
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-sm font-semibold text-white hover:text-[#e4c99b] transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-lg font-mono text-[#e4c99b]">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-4 text-xs text-white/75 font-light leading-relaxed border-t border-white/5 pt-3">
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
