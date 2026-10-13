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
    <section id="booking" className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="bg-white rounded-3xl shadow-xl border border-[#e8e9e1] p-6 lg:p-8">
        {/* Top Controls: Trip Type & Cabin Class */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#f0f0ea]">
          {/* Trip Type Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#f4f5ee] rounded-full">
            <button
              type="button"
              onClick={() => setTripType('round')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                tripType === 'round'
                  ? 'bg-white text-[#31594f] shadow-sm'
                  : 'text-[#647169] hover:text-[#202b29]'
              }`}
            >
              Round Trip
            </button>
            <button
              type="button"
              onClick={() => setTripType('oneway')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                tripType === 'oneway'
                  ? 'bg-white text-[#31594f] shadow-sm'
                  : 'text-[#647169] hover:text-[#202b29]'
              }`}
            >
              One Way
            </button>
            <button
              type="button"
              onClick={() => setTripType('multicity')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                tripType === 'multicity'
                  ? 'bg-white text-[#31594f] shadow-sm'
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
            <div className="lg:col-span-3 p-3.5 rounded-2xl bg-[#fbfaf7] border border-[#e8ebe3] hover:border-[#31594f] transition-colors">
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
                className="w-9 h-9 rounded-full bg-white border border-[#dce0d8] shadow-sm flex items-center justify-center text-[#31594f] hover:bg-[#31594f] hover:text-white transition-all transform hover:rotate-180"
                title="Swap origin and destination"
                aria-label="Swap airports"
              >
                <Icon name="swap" size={15} />
              </button>
            </div>

            {/* Destination Airport */}
            <div className="lg:col-span-3 p-3.5 rounded-2xl bg-[#fbfaf7] border border-[#e8ebe3] hover:border-[#31594f] transition-colors">
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
            <div className={`p-3.5 rounded-2xl bg-[#fbfaf7] border border-[#e8ebe3] hover:border-[#31594f] transition-colors ${
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
                  className="w-full bg-transparent text-xs font-semibold text-[#202b29] focus:outline-none"
                />
              </div>
            </div>

            {/* Return Date (if round trip) */}
            {tripType !== 'oneway' && (
              <div className="lg:col-span-2 p-3.5 rounded-2xl bg-[#fbfaf7] border border-[#e8ebe3] hover:border-[#31594f] transition-colors">
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
                    className="w-full bg-transparent text-xs font-semibold text-[#202b29] focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* Travelers & Search Action */}
            <div className="lg:col-span-1 p-3.5 rounded-2xl bg-[#fbfaf7] border border-[#e8ebe3] hover:border-[#31594f] transition-colors">
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

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#6a756f]">
              <Icon name="shield" size={15} className="text-[#31594f]" />
              <span>Real-time IATA fares · Zero hidden transaction fees</span>
            </div>

            <button
              type="submit"
              disabled={isSearching}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#31594f] hover:bg-[#233f37] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-75"
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
                <h3 className="text-lg font-serif font-bold text-[#202b29]">
                  Available Flights: {fromObj.city} ({fromObj.code}) ➔ {toObj.city} ({toObj.code})
                </h3>
                <p className="text-xs text-[#717b75]">
                  Showing 3 verified departures for {departDate} · {cabinClass} · {travelers} Traveler(s)
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#eef4ee] text-[#31594f]">
                3 Options Found
              </span>
            </div>

            <div className="space-y-3.5">
              {searchResults.map((flight) => (
                <div
                  key={flight.id}
                  className="p-5 rounded-2xl bg-[#fcfbfa] border border-[#e7eae2] hover:border-[#31594f] hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  {/* Airline & Tag */}
                  <div className="space-y-1 min-w-[180px]">
                    <span className="inline-block px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#31594f] bg-[#eef4ee] rounded">
                      {flight.tag}
                    </span>
                    <h4 className="font-bold text-sm text-[#202b29]">{flight.airline}</h4>
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
                      <div className="relative flex items-center justify-center my-1">
                        <div className="w-full h-[1px] bg-[#cfd5cc]" />
                        <Icon name="plane" size={14} className="text-[#31594f] absolute rotate-90" />
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
                        <span className="text-xl font-bold text-[#31594f]">${flight.price}</span>
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
                      className="px-5 py-2.5 rounded-xl bg-[#31594f] hover:bg-[#233f37] text-white text-xs font-bold transition-all shadow-sm hover:shadow"
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
