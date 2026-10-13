import { useState } from 'react'
import { Icon } from './Icons'

export function BookingModal({ item, onClose, onConfirm }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    passengers: 1,
    travelDate: item?.date || '2026-11-15',
    cabinClass: 'Economy Class',
    specialNotes: '',
  })

  const [confirmedBooking, setConfirmedBooking] = useState(null)

  if (!item) return null

  const isFlight = item.type === 'flight'
  const isPackage = item.type === 'package'

  const totalPrice = (item.price || 499) * formData.passengers

  function handleSubmit(e) {
    e.preventDefault()
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#fbfaf7] text-[#202b29] rounded-2xl shadow-2xl border border-[#e5e4dc]">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#233f37] text-white">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#35564a] text-[#e4c99b]">
              <Icon name="plane" size={18} />
            </span>
            <div>
              <h3 className="text-base font-bold tracking-tight">
                {confirmedBooking ? 'Booking Confirmed!' : 'Complete Your Reservation'}
              </h3>
              <p className="text-xs text-white/70">
                {confirmedBooking ? 'Your e-ticket has been generated' : 'Aeroplane Tours & Travels Guaranteed Fare'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        {confirmedBooking ? (
          /* Confirmation Ticket View */
          <div className="p-6 space-y-6">
            <div className="p-5 text-center bg-[#eef4ee] rounded-xl border border-[#c6dec7]">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-3 bg-[#31594f] text-white rounded-full">
                <Icon name="check" size={24} />
              </div>
              <h4 className="text-lg font-bold text-[#233f37]">Reservation Successful!</h4>
              <p className="mt-1 text-xs text-[#535d58]">
                A copy of this electronic boarding pass & itinerary has been sent to{' '}
                <strong className="text-[#233f37]">{confirmedBooking.formData.email}</strong>.
              </p>
            </div>

            {/* Simulated Boarding Pass */}
            <div className="overflow-hidden bg-white rounded-xl border border-[#e1e3dc] shadow-sm">
              <div className="flex items-center justify-between px-5 py-3 bg-[#31594f] text-white text-xs">
                <span className="font-semibold tracking-wider uppercase">ELECTRONIC BOARDING PASS</span>
                <span className="font-mono font-bold text-[#e4c99b]">{confirmedBooking.ref}</span>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-[#f0f0ea] pb-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#8c948e] tracking-wider">Itinerary / Tour</span>
                    <h5 className="text-base font-bold text-[#202b29]">{item.title || item.name}</h5>
                    <p className="text-xs text-[#606963]">{item.subtitle || item.country || item.route}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-[#8c948e] tracking-wider">Cabin Class</span>
                    <p className="text-sm font-semibold text-[#31594f]">{confirmedBooking.formData.cabinClass}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs border-b border-[#f0f0ea] pb-3">
                  <div>
                    <span className="text-[10px] text-[#8c948e] uppercase font-medium">Passenger</span>
                    <p className="font-semibold text-[#202b29] truncate">{confirmedBooking.formData.fullName}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8c948e] uppercase font-medium">Travel Date</span>
                    <p className="font-semibold text-[#202b29]">{confirmedBooking.formData.travelDate}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8c948e] uppercase font-medium">Seats / Guests</span>
                    <p className="font-semibold text-[#202b29]">{confirmedBooking.formData.passengers} Passenger(s)</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8c948e] uppercase font-medium">Total Paid</span>
                    <p className="font-bold text-[#31594f]">${confirmedBooking.totalPrice}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#707973] pt-1">
                  <div className="flex items-center gap-1.5">
                    <Icon name="shield" size={14} className="text-[#31594f]" />
                    <span>24/7 Flight Monitoring & Free Baggage Included</span>
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-[#a1a79f]">VERIFIED · IATA</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => window.print()}
                className="flex-1 py-3 px-4 text-xs font-semibold rounded-lg border border-[#c9cec6] text-[#31594f] bg-white hover:bg-[#f3f5f1] transition-colors"
              >
                Print Voucher / PDF
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3 px-4 text-xs font-semibold rounded-lg bg-[#31594f] text-white hover:bg-[#233f37] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Selected Item Summary Card */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#e5e6de] shadow-sm">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title || item.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              )}
              <div className="flex-1 min-w-0">
                <span className="inline-block px-2 py-0.5 mb-1 text-[10px] font-bold tracking-wider uppercase text-[#31594f] bg-[#e8ede7] rounded">
                  {isFlight ? 'Scheduled Flight' : isPackage ? 'Holiday Package' : 'Destination Booking'}
                </span>
                <h4 className="font-bold text-sm text-[#202b29] truncate">{item.title || item.name}</h4>
                <p className="text-xs text-[#6f7771]">
                  {item.airline || item.country || item.route || 'All transfers included'}
                </p>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-[#868d87] block">From</span>
                <span className="text-lg font-bold text-[#31594f]">${item.price}</span>
                <span className="text-[10px] text-[#868d87] block">/ person</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#48534e] mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Johnathan Davis"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#d6d9d2] rounded-lg focus:outline-none focus:border-[#31594f] focus:ring-1 focus:ring-[#31594f]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#48534e] mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#d6d9d2] rounded-lg focus:outline-none focus:border-[#31594f] focus:ring-1 focus:ring-[#31594f]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#48534e] mb-1.5">
                  Contact Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#d6d9d2] rounded-lg focus:outline-none focus:border-[#31594f] focus:ring-1 focus:ring-[#31594f]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#48534e] mb-1.5">
                  Travel Date
                </label>
                <input
                  type="date"
                  value={formData.travelDate}
                  onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#d6d9d2] rounded-lg focus:outline-none focus:border-[#31594f] focus:ring-1 focus:ring-[#31594f]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#48534e] mb-1.5">
                  Passengers / Guests
                </label>
                <select
                  value={formData.passengers}
                  onChange={(e) => setFormData({ ...formData, passengers: Number(e.target.value) })}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#d6d9d2] rounded-lg focus:outline-none focus:border-[#31594f] focus:ring-1 focus:ring-[#31594f]"
                >
                  <option value={1}>1 Traveler</option>
                  <option value={2}>2 Travelers (Couple)</option>
                  <option value={3}>3 Travelers</option>
                  <option value={4}>4 Travelers (Family)</option>
                  <option value={5}>5+ Group Travelers</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#48534e] mb-1.5">
                  Cabin Class
                </label>
                <select
                  value={formData.cabinClass}
                  onChange={(e) => setFormData({ ...formData, cabinClass: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-[#d6d9d2] rounded-lg focus:outline-none focus:border-[#31594f] focus:ring-1 focus:ring-[#31594f]"
                >
                  <option>Economy Class</option>
                  <option>Premium Economy</option>
                  <option>Business Class</option>
                  <option>First Class Suite</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#48534e] mb-1.5">
                Special Requests or Dietary Requirements (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Window seat, vegetarian meals, airport wheelchair assistance, anniversary surprise, etc."
                value={formData.specialNotes}
                onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                className="w-full px-3.5 py-2 text-xs bg-white border border-[#d6d9d2] rounded-lg focus:outline-none focus:border-[#31594f] focus:ring-1 focus:ring-[#31594f] resize-none"
              />
            </div>

            {/* Total and Guarantee */}
            <div className="flex items-center justify-between p-3.5 bg-[#edf1ec] rounded-xl border border-[#d5ded4]">
              <div>
                <span className="text-[11px] text-[#55635b] block">Total Estimated Cost</span>
                <span className="text-xl font-extrabold text-[#233f37]">${totalPrice}</span>
                <span className="text-[10px] text-[#717d76] ml-1.5">({formData.passengers} traveler{formData.passengers > 1 ? 's' : ''}, taxes included)</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-[#31594f] font-semibold">
                <Icon name="checkCircle" size={16} />
                <span>Zero Hidden Fees</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 text-xs font-semibold text-[#5a645f] hover:text-[#233f37] bg-white border border-[#d8dbd4] rounded-lg hover:bg-[#f6f7f3] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-2 py-3 px-6 text-xs font-semibold text-white bg-[#31594f] hover:bg-[#233f37] rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
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
