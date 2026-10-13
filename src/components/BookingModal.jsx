import { useState } from 'react'
import { Icon } from './Icons'
import { playCabinChime } from '../utils/sound'

export function BookingModal({ item, onClose, onConfirm }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    passengers: 1,
    travelDate: item?.date || '2026-11-15',
    cabinClass: 'First Class Private Suite',
    specialNotes: '',
  })

  const [confirmedBooking, setConfirmedBooking] = useState(null)

  if (!item) return null

  const isFlight = item.type === 'flight'
  const isPackage = item.type === 'package'

  const totalPrice = (item.price || 950) * formData.passengers

  function handleSubmit(e) {
    e.preventDefault()
    playCabinChime()
    const bookingRef = 'SKV-' + Math.floor(100000 + Math.random() * 900000)
    const booking = {
      ref: bookingRef,
      item,
      formData,
      totalPrice,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    }
    setConfirmedBooking(booking)
    if (onConfirm) onConfirm(booking)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#091724] text-white rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.9)] border border-white/20">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#050e17] text-white border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-[#e6caa0] border border-[#e6caa0]/30 shadow-sm">
              <Icon name="plane" size={17} />
            </span>
            <div>
              <h3 className="text-base font-serif font-bold tracking-tight text-white">
                {confirmedBooking ? 'Reservation Confirmed' : 'Reserve VIP Flight & Suite'}
              </h3>
              <p className="text-[11px] text-white/60 font-mono">
                {confirmedBooking ? 'E-Ticket Issued · IATA Guaranteed' : 'Aeroplane Luxury Aviation Desk'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        {confirmedBooking ? (
          /* Confirmation Ticket View */
          <div className="p-6 space-y-6">
            <div className="p-5 text-center bg-emerald-950/40 rounded-2xl border border-emerald-500/30">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-3 bg-[#e6caa0] text-[#050e17] rounded-full shadow-lg">
                <Icon name="check" size={24} />
              </div>
              <h4 className="text-lg font-serif font-bold text-white">VIP Reservation Confirmed!</h4>
              <p className="mt-1 text-xs text-white/75 font-light">
                Your flight itinerary and electronic boarding voucher have been transmitted to{' '}
                <strong className="text-[#e6caa0] font-mono">{confirmedBooking.formData.email}</strong>.
              </p>
            </div>

            {/* Simulated Luxury Boarding Pass */}
            <div className="overflow-hidden bg-[#06111c] rounded-2xl border border-white/15 shadow-xl">
              <div className="flex items-center justify-between px-6 py-3.5 bg-gradient-to-r from-[#0b1f30] via-[#102d45] to-[#0b1f30] text-white text-xs border-b border-white/15 font-mono">
                <span className="font-bold tracking-wider uppercase text-[#e6caa0]">FIRST CLASS ELECTRONIC BOARDING PASS</span>
                <span className="font-mono font-bold text-cyan-300">{confirmedBooking.ref}</span>
              </div>
              <div className="p-6 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold text-white/50 tracking-wider">Itinerary / Experience</span>
                    <h5 className="text-lg font-serif font-bold text-white">{item.title || item.name}</h5>
                    <p className="text-xs text-white/70 font-mono">{item.subtitle || item.country || item.route}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-mono font-bold text-white/50 tracking-wider">Cabin Tier</span>
                    <p className="text-sm font-mono font-bold text-[#e6caa0]">{confirmedBooking.formData.cabinClass}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs border-b border-white/10 pb-4 font-mono">
                  <div>
                    <span className="text-[10px] text-white/50 uppercase">Passenger</span>
                    <p className="font-bold text-white truncate">{confirmedBooking.formData.fullName}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 uppercase">Travel Date</span>
                    <p className="font-bold text-white">{confirmedBooking.formData.travelDate}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 uppercase">Party</span>
                    <p className="font-bold text-white">{confirmedBooking.formData.passengers} Guest(s)</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 uppercase">Total Fare</span>
                    <p className="font-bold text-[#e6caa0] text-base">${confirmedBooking.totalPrice}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-white/60 pt-1 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Icon name="shield" size={14} className="text-[#e6caa0]" />
                    <span>24/7 Global Air Concierge & Chauffeur Included</span>
                  </div>
                  <span className="tracking-widest text-[#e6caa0]">IATA VERIFIED</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="flex-1 py-3 px-4 text-xs font-mono font-bold rounded-xl border border-white/20 text-[#e6caa0] bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                Print Voucher / PDF
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3 px-4 text-xs font-mono font-bold rounded-xl bg-gradient-to-r from-[#e6caa0] to-[#d6b782] text-[#050e17] hover:shadow-[0_0_20px_rgba(230,202,160,0.5)] transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Selected Item Summary Card */}
            <div className="flex items-center gap-4 p-4 bg-[#050e17] rounded-2xl border border-white/10 shadow-sm">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title || item.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
              )}
              <div className="flex-1 min-w-0">
                <span className="inline-block px-2.5 py-0.5 mb-1 text-[9px] font-mono font-bold tracking-wider uppercase text-[#e6caa0] bg-[#e6caa0]/10 rounded border border-[#e6caa0]/20">
                  {isFlight ? 'Scheduled Flight' : isPackage ? 'Holiday Expedition' : 'Curated Destination'}
                </span>
                <h4 className="font-bold text-sm text-white truncate">{item.title || item.name}</h4>
                <p className="text-xs text-white/60 font-mono">
                  {item.airline || item.country || item.route || 'VIP transfers included'}
                </p>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-white/50 block font-mono">From</span>
                <span className="text-lg font-bold font-serif text-[#e6caa0]">${item.price}</span>
                <span className="text-[10px] text-white/50 block font-mono">/ guest</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-white/80 mb-1.5">
                  Full Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Johnathan Davis"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#050e17] text-white border border-white/15 rounded-xl focus:outline-none focus:border-[#e6caa0]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-white/80 mb-1.5">
                  Email Address <span className="text-amber-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#050e17] text-white border border-white/15 rounded-xl focus:outline-none focus:border-[#e6caa0]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-white/80 mb-1.5">
                  Contact Phone <span className="text-amber-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#050e17] text-white border border-white/15 rounded-xl focus:outline-none focus:border-[#e6caa0]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-white/80 mb-1.5">
                  Travel Date
                </label>
                <input
                  type="date"
                  value={formData.travelDate}
                  onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#050e17] text-white border border-white/15 rounded-xl focus:outline-none focus:border-[#e6caa0] cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-white/80 mb-1.5">
                  Guests / Travelers
                </label>
                <select
                  value={formData.passengers}
                  onChange={(e) => setFormData({ ...formData, passengers: Number(e.target.value) })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#050e17] text-white border border-white/15 rounded-xl focus:outline-none focus:border-[#e6caa0] cursor-pointer"
                >
                  <option value={1} className="bg-[#050e17]">1 VIP Guest</option>
                  <option value={2} className="bg-[#050e17]">2 Guests (Couple Suite)</option>
                  <option value={3} className="bg-[#050e17]">3 Guests</option>
                  <option value={4} className="bg-[#050e17]">4 Guests</option>
                  <option value={5} className="bg-[#050e17]">5+ Private Delegation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-white/80 mb-1.5">
                  Cabin Tier
                </label>
                <select
                  value={formData.cabinClass}
                  onChange={(e) => setFormData({ ...formData, cabinClass: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#050e17] text-white border border-white/15 rounded-xl focus:outline-none focus:border-[#e6caa0] cursor-pointer"
                >
                  <option className="bg-[#050e17]">First Class Private Suite</option>
                  <option className="bg-[#050e17]">Private Jet Charter</option>
                  <option className="bg-[#050e17]">Executive Business Pod</option>
                  <option className="bg-[#050e17]">Premium Economy</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-white/80 mb-1.5">
                Special Requests & Catering Preferences (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Window seat, Dom Pérignon champagne, Kosher/Halal/Vegan menu, runway chauffeur, anniversary, etc."
                value={formData.specialNotes}
                onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                className="w-full px-3.5 py-2 text-xs bg-[#050e17] text-white border border-white/15 rounded-xl focus:outline-none focus:border-[#e6caa0] resize-none"
              />
            </div>

            {/* Total and Guarantee */}
            <div className="flex items-center justify-between p-4 bg-[#050e17] rounded-2xl border border-white/10">
              <div>
                <span className="text-[11px] font-mono text-white/50 block">Total Estimated Fare</span>
                <span className="text-2xl font-serif font-bold text-[#e6caa0]">${totalPrice}</span>
                <span className="text-[10px] font-mono text-white/60 ml-2">({formData.passengers} guest{formData.passengers > 1 ? 's' : ''}, all taxes included)</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-cyan-300 font-mono font-semibold">
                <Icon name="checkCircle" size={16} />
                <span>Zero Hidden Fees</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 text-xs font-mono font-bold text-white/70 hover:text-white bg-white/5 border border-white/15 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-2 py-3 px-6 text-xs font-mono font-bold text-[#050e17] bg-gradient-to-r from-[#e6caa0] to-[#d6b782] rounded-xl shadow-[0_0_20px_rgba(230,202,160,0.4)] hover:shadow-[0_0_30px_rgba(230,202,160,0.7)] transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
              >
                <span>Confirm & Issue E-Ticket</span>
                <Icon name="arrowRight" size={15} />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
