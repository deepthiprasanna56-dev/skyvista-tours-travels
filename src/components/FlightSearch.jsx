import { useState } from 'react'
import { airports } from '../data/travelData'
import { Icon } from './Icons'

export function FlightSearch({ onSelectFlight }) {
  const [tripType, setTripType] = useState('round') // round, oneway, multicity
  const [cabinClass, setCabinClass] = useState('Economy')
  const [fromAirport, setFromAirport] = useState('JFK')
  const [toAirport, setToAirport] = useState('DPS')
  const [departDate, setDepartDate] = useState('2026-11-20')
  const [returnDate, setReturnDate] = useState('2026-11-28')
  const [travelers, setTravelers] = useState(1)

  const [hasSearched, setHasSearched] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState([])

  function handleSwapAirports() {
    const temp = fromAirport
    setFromAirport(toAirport)
    setToAirport(temp)
  }

  function handleSearch(e) {
    e.preventDefault()
    setIsSearching(true)
    setHasSearched(false)

    // Simulate flight API search with realistic flight results
    setTimeout(() => {
      const fromObj = airports.find((a) => a.code === fromAirport) || airports[0]
      const toObj = airports.find((a) => a.code === toAirport) || airports[7]

      const simulatedFlights = [
        {
          id: 'FL-701',
          airline: 'SkyVista Premier Air',
          flightNumber: 'SV-342',
          from: fromObj.city,
          fromCode: fromObj.code,
          to: toObj.city,
          toCode: toObj.code,
          departTime: '08:45 AM',
          arriveTime: '06:15 PM',
          duration: '9h 30m',
          type: 'Direct / Non-stop',
          baggage: '2x 23kg included',
          price: 489,
          cabin: cabinClass,
          tag: 'Fastest Route',
        },
        {
          id: 'FL-702',
          airline: 'Emirates Airways',
          flightNumber: 'EK-204',
          from: fromObj.city,
          fromCode: fromObj.code,
          to: toObj.city,
          toCode: toObj.code,
          departTime: '11:15 AM',
          arriveTime: '10:50 PM',
          duration: '11h 35m',
          type: '1 Stop via DXB',
          baggage: '2x 32kg included',
          price: 540,
          cabin: cabinClass,
          tag: 'Most Popular',
        },
        {
          id: 'FL-703',
          airline: 'Singapore Airlines',
          flightNumber: 'SQ-026',
          from: fromObj.city,
          fromCode: fromObj.code,
          to: toObj.city,
          toCode: toObj.code,
          departTime: '04:30 PM',
          arriveTime: '02:15 PM +1',
          duration: '12h 45m',
          type: '1 Stop via SIN',
          baggage: '2x 23kg included',
          price: 512,
          cabin: cabinClass,
          tag: 'Best In-Flight Service',
        },
      ]

      setSearchResults(simulatedFlights)
      setIsSearching(false)
      setHasSearched(true)
    }, 450)
  }

  const fromObj = airports.find((a) => a.code === fromAirport) || airports[0]
  const toObj = airports.find((a) => a.code === toAirport) || airports[7]

  return (
    <section id="booking" className="relative z-20 -mt-12 w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-20">
      <div className="w-full bg-white rounded-3xl shadow-[0_20px_60px_rgba(30,50,40,0.12)] border border-[#e2e5dc] p-6 lg:p-9 hover:border-[#31594f]/40 transition-all duration-300">
        {/* Top Controls: Trip Type & Cabin Class */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#f0f0ea]">
          {/* Trip Type Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#f4f5ee] rounded-full">
            <button
              type="button"
              onClick={() => setTripType('round')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                tripType === 'round'
                  ? 'bg-white text-[#31594f] shadow-[0_2px_8px_rgba(0,0,0,0.08)]'
                  : 'text-[#647169] hover:text-[#202b29]'
              }`}
            >
              Round Trip
            </button>
            <button
              type="button"
              onClick={() => setTripType('oneway')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                tripType === 'oneway'
                  ? 'bg-white text-[#31594f] shadow-[0_2px_8px_rgba(0,0,0,0.08)]'
                  : 'text-[#647169] hover:text-[#202b29]'
              }`}
            >
              One Way
            </button>
            <button
              type="button"
              onClick={() => setTripType('multicity')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                tripType === 'multicity'
                  ? 'bg-white text-[#31594f] shadow-[0_2px_8px_rgba(0,0,0,0.08)]'
                  : 'text-[#647169] hover:text-[#202b29]'
              }`}
            >
              Multi-City
            </button>
          </div>

          {/* Cabin Class Selection */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-[#7d8781]">Cabin Class:</span>
            <select
              value={cabinClass}
              onChange={(e) => setCabinClass(e.target.value)}
              className="text-xs font-semibold text-[#31594f] bg-[#f4f5ee] border-0 rounded-full px-4 py-1.5 focus:outline-none cursor-pointer"
            >
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business Class</option>
              <option>First Class</option>
            </select>
          </div>
        </div>

        {/* Search Fields Grid */}
        <form onSubmit={handleSearch} className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 items-center">
            {/* Origin Airport */}
            <div className="lg:col-span-3 p-4 rounded-2xl bg-[#fbfaf7] border border-[#e5e8e0] hover:border-[#31594f] hover:shadow-sm transition-all">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-[#8b948d] mb-1">
                Departure From
              </span>
              <div className="flex items-center gap-2.5">
                <Icon name="pin" size={18} className="text-[#31594f] flex-shrink-0" />
                <select
                  value={fromAirport}
                  onChange={(e) => setFromAirport(e.target.value)}
                  className="w-full bg-transparent text-sm font-bold text-[#202b29] focus:outline-none cursor-pointer"
                >
                  {airports.map((airport) => (
                    <option key={airport.code} value={airport.code}>
                      {airport.city} ({airport.code}) - {airport.airport}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Airport Swap Button */}
            <div className="hidden lg:flex lg:col-span-1 justify-center -mx-3 z-10">
              <button
                type="button"
                onClick={handleSwapAirports}
                className="w-10 h-10 rounded-full bg-white border border-[#dce0d8] shadow-md flex items-center justify-center text-[#31594f] hover:bg-[#31594f] hover:text-white transition-all transform hover:rotate-180 cursor-pointer"
                title="Swap origin and destination"
                aria-label="Swap airports"
              >
                <Icon name="swap" size={16} />
              </button>
            </div>

            {/* Destination Airport */}
            <div className="lg:col-span-3 p-4 rounded-2xl bg-[#fbfaf7] border border-[#e5e8e0] hover:border-[#31594f] hover:shadow-sm transition-all">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-[#8b948d] mb-1">
                Fly Destination To
              </span>
              <div className="flex items-center gap-2.5">
                <Icon name="pin" size={18} className="text-[#31594f] flex-shrink-0" />
                <select
                  value={toAirport}
                  onChange={(e) => setToAirport(e.target.value)}
                  className="w-full bg-transparent text-sm font-bold text-[#202b29] focus:outline-none cursor-pointer"
                >
                  {airports.map((airport) => (
                    <option key={airport.code} value={airport.code}>
                      {airport.city} ({airport.code}) - {airport.airport}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Departure Date */}
            <div className={`p-4 rounded-2xl bg-[#fbfaf7] border border-[#e5e8e0] hover:border-[#31594f] hover:shadow-sm transition-all ${
              tripType === 'oneway' ? 'lg:col-span-3' : 'lg:col-span-2'
            }`}>
              <span className="block text-[10px] font-bold uppercase tracking-wider text-[#8b948d] mb-1">
                Departure Date
              </span>
              <div className="flex items-center gap-2">
                <Icon name="calendar" size={16} className="text-[#31594f] flex-shrink-0" />
                <input
                  type="date"
                  value={departDate}
                  onChange={(e) => setDepartDate(e.target.value)}
                  required
                  className="w-full bg-transparent text-xs font-semibold text-[#202b29] focus:outline-none cursor-pointer"
                />
              </div>
            </div>

            {/* Return Date (if round trip) */}
            {tripType !== 'oneway' && (
              <div className="lg:col-span-2 p-4 rounded-2xl bg-[#fbfaf7] border border-[#e5e8e0] hover:border-[#31594f] hover:shadow-sm transition-all">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-[#8b948d] mb-1">
                  Return Date
                </span>
                <div className="flex items-center gap-2">
                  <Icon name="calendar" size={16} className="text-[#31594f] flex-shrink-0" />
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    required
                    className="w-full bg-transparent text-xs font-semibold text-[#202b29] focus:outline-none cursor-pointer"
                  />
                </div>
              </div>
            )}

            {/* Travelers & Search Action */}
            <div className="lg:col-span-1 p-4 rounded-2xl bg-[#fbfaf7] border border-[#e5e8e0] hover:border-[#31594f] hover:shadow-sm transition-all">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-[#8b948d] mb-1">
                Travelers
              </span>
              <div className="flex items-center gap-1.5">
                <Icon name="users" size={16} className="text-[#31594f] flex-shrink-0" />
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="w-full bg-transparent text-xs font-bold text-[#202b29] focus:outline-none cursor-pointer"
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5+</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#6a756f]">
              <Icon name="shield" size={15} className="text-[#31594f]" />
              <span>Real-time IATA fares · Zero hidden transaction fees · Instant Confirmation</span>
            </div>

            <button
              type="submit"
              disabled={isSearching}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-[#31594f] to-[#24473e] hover:from-[#24473e] hover:to-[#1a332d] text-white text-xs sm:text-sm font-bold shadow-[0_4px_16px_rgba(49,89,79,0.35)] hover:shadow-[0_0_25px_rgba(49,89,79,0.55)] transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-75"
            >
              {isSearching ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Searching Live Flights...</span>
                </>
              ) : (
                <>
                  <Icon name="planeTakeoff" size={17} />
                  <span>Find Best Flights</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Live Search Results View */}
        {hasSearched && (
          <div className="mt-8 pt-8 border-t border-[#eeeee6] animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#202b29]">
                  Available Flights: {fromObj.city} ({fromObj.code}) ➔ {toObj.city} ({toObj.code})
                </h3>
                <p className="text-xs text-[#717b75]">
                  Showing 3 verified departures for {departDate} · {cabinClass} · {travelers} Traveler(s)
                </p>
              </div>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#eef4ee] text-[#31594f] shadow-sm">
                3 Direct & Fast Routes Found
              </span>
            </div>

            <div className="space-y-4">
              {searchResults.map((flight) => (
                <div
                  key={flight.id}
                  className="p-6 rounded-2xl bg-[#fcfbfa] border border-[#e7eae2] hover:border-[#31594f] hover:shadow-[0_8px_30px_rgba(49,89,79,0.12)] transition-all flex flex-col md:flex-row md:items-center justify-between gap-5"
                >
                  {/* Airline & Tag */}
                  <div className="space-y-1 min-w-[200px]">
                    <span className="inline-block px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#31594f] bg-[#eef4ee] rounded-md">
                      {flight.tag}
                    </span>
                    <h4 className="font-bold text-base text-[#202b29]">{flight.airline}</h4>
                    <span className="text-xs text-[#808a83] block">Flight #{flight.flightNumber}</span>
                  </div>

                  {/* Flight Timeline */}
                  <div className="flex-1 flex items-center justify-between max-w-md gap-4">
                    <div className="text-left">
                      <span className="text-base font-bold text-[#202b29] block">{flight.departTime}</span>
                      <span className="text-xs font-semibold text-[#31594f]">{flight.fromCode}</span>
                    </div>

                    <div className="flex-1 text-center px-2">
                      <span className="text-[11px] text-[#78827b] block font-medium">{flight.duration}</span>
                      <div className="relative flex items-center justify-center my-1.5">
                        <div className="w-full h-[1.5px] bg-[#cfd5cc]" />
                        <Icon name="plane" size={15} className="text-[#31594f] absolute rotate-90" />
                      </div>
                      <span className="text-[10px] text-[#31594f] font-semibold block">{flight.type}</span>
                    </div>

                    <div className="text-right">
                      <span className="text-base font-bold text-[#202b29] block">{flight.arriveTime}</span>
                      <span className="text-xs font-semibold text-[#31594f]">{flight.toCode}</span>
                    </div>
                  </div>

                  {/* Baggage & Price */}
                  <div className="flex items-center justify-between md:justify-end gap-6 pt-3 md:pt-0 border-t md:border-t-0 border-[#eeeee6]">
                    <div className="text-right">
                      <span className="text-xs text-[#7b857f] flex items-center gap-1 justify-end">
                        <Icon name="luggage" size={14} className="text-[#31594f]" />
                        <span>{flight.baggage}</span>
                      </span>
                      <div className="mt-0.5">
                        <span className="text-2xl font-bold text-[#31594f]">${flight.price}</span>
                        <span className="text-[10px] text-[#868f89]"> / person</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        onSelectFlight({
                          type: 'flight',
                          title: `${flight.from} (${flight.fromCode}) to ${flight.to} (${flight.toCode})`,
                          route: `${flight.airline} · ${flight.flightNumber}`,
                          price: flight.price,
                          date: departDate,
                        })
                      }
                      className="px-6 py-3 rounded-xl bg-[#31594f] hover:bg-[#233f37] text-white text-xs font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
                    >
                      Book Flight
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
