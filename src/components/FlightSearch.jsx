import { useState } from 'react'
import { airports } from '../data/travelData'
import { Icon } from './Icons'
import { playButtonBeep } from '../utils/sound'

export function FlightSearch({ onSelectFlight }) {
  const [tripType, setTripType] = useState('round') // round, oneway, multicity
  const [cabinClass, setCabinClass] = useState('First Class Suite')
  const [fromAirport, setFromAirport] = useState('JFK')
  const [toAirport, setToAirport] = useState('DPS')
  const [departDate, setDepartDate] = useState('2026-11-20')
  const [returnDate, setReturnDate] = useState('2026-11-28')
  const [travelers, setTravelers] = useState(1)

  const [hasSearched, setHasSearched] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState([])

  function handleSwapAirports() {
    playButtonBeep()
    const temp = fromAirport
    setFromAirport(toAirport)
    setToAirport(temp)
  }

  function handleSearch(e) {
    e.preventDefault()
    playButtonBeep()
    setIsSearching(true)
    setHasSearched(false)

    // Simulate flight API search with realistic flight results
    setTimeout(() => {
      const fromObj = airports.find((a) => a.code === fromAirport) || airports[0]
      const toObj = airports.find((a) => a.code === toAirport) || airports[7]

      const simulatedFlights = [
        {
          id: 'FL-701',
          airline: 'Aeroplane Grand Celestial',
          flightNumber: 'AP-801',
          from: fromObj.city,
          fromCode: fromObj.code,
          to: toObj.city,
          toCode: toObj.code,
          departTime: '08:45 AM',
          arriveTime: '06:15 PM',
          duration: '9h 30m',
          type: 'Direct / Non-stop',
          baggage: '3x 32kg + Ski/Golf bag',
          price: 1489,
          cabin: cabinClass,
          tag: 'Flagship Non-Stop',
        },
        {
          id: 'FL-702',
          airline: 'Emirates First Class SkySuite',
          flightNumber: 'EK-204',
          from: fromObj.city,
          fromCode: fromObj.code,
          to: toObj.city,
          toCode: toObj.code,
          departTime: '11:15 AM',
          arriveTime: '10:50 PM',
          duration: '11h 35m',
          type: '1 Stop via DXB VIP Terminal',
          baggage: '3x 32kg included',
          price: 1850,
          cabin: cabinClass,
          tag: 'Most Popular VIP',
        },
        {
          id: 'FL-703',
          airline: 'Singapore Airlines A380 Suites',
          flightNumber: 'SQ-026',
          from: fromObj.city,
          fromCode: fromObj.code,
          to: toObj.city,
          toCode: toObj.code,
          departTime: '04:30 PM',
          arriveTime: '02:15 PM +1',
          duration: '12h 45m',
          type: '1 Stop via SIN The Private Room',
          baggage: '3x 32kg included',
          price: 1720,
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
      <div className="w-full bg-[#081523]/95 backdrop-blur-2xl rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-white/15 p-6 lg:p-9 hover:border-[#e6caa0]/40 transition-all duration-300 text-white">
        {/* Top Controls: Trip Type & Cabin Class */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
          {/* Trip Type Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#050e17] rounded-full border border-white/10">
            <button
              type="button"
              onClick={() => {
                playButtonBeep()
                setTripType('round')
              }}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                tripType === 'round'
                  ? 'bg-gradient-to-r from-[#e6caa0] to-[#d6b782] text-[#050e17] shadow-[0_0_15px_rgba(230,202,160,0.4)]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Round Trip
            </button>
            <button
              type="button"
              onClick={() => {
                playButtonBeep()
                setTripType('oneway')
              }}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                tripType === 'oneway'
                  ? 'bg-gradient-to-r from-[#e6caa0] to-[#d6b782] text-[#050e17] shadow-[0_0_15px_rgba(230,202,160,0.4)]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              One Way
            </button>
            <button
              type="button"
              onClick={() => {
                playButtonBeep()
                setTripType('multicity')
              }}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                tripType === 'multicity'
                  ? 'bg-gradient-to-r from-[#e6caa0] to-[#d6b782] text-[#050e17] shadow-[0_0_15px_rgba(230,202,160,0.4)]'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              Multi-City Expeditions
            </button>
          </div>

          {/* Cabin Class Selection */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-white/60">Cabin Tier:</span>
            <select
              value={cabinClass}
              onChange={(e) => setCabinClass(e.target.value)}
              className="text-xs font-mono font-bold text-[#e6caa0] bg-[#050e17] border border-white/15 rounded-full px-4 py-2 focus:outline-none cursor-pointer"
            >
              <option>First Class Suite</option>
              <option>Private Jet Charter</option>
              <option>Executive Business</option>
              <option>Premium Economy</option>
            </select>
          </div>
        </div>

        {/* Search Fields Grid */}
        <form onSubmit={handleSearch} className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 items-center">
            {/* Origin Airport */}
            <div className="lg:col-span-3 p-4 rounded-2xl bg-[#050e17]/80 border border-white/10 hover:border-[#e6caa0]/60 transition-all">
              <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-white/50 mb-1">
                Departure City / Airport
              </span>
              <div className="flex items-center gap-2.5">
                <Icon name="pin" size={18} className="text-[#e6caa0] flex-shrink-0" />
                <select
                  value={fromAirport}
                  onChange={(e) => setFromAirport(e.target.value)}
                  className="w-full bg-transparent text-sm font-bold text-white focus:outline-none cursor-pointer"
                >
                  {airports.map((airport) => (
                    <option key={airport.code} value={airport.code} className="bg-[#050e17] text-white">
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
                className="w-10 h-10 rounded-full bg-[#0b1a28] border border-white/20 shadow-md flex items-center justify-center text-[#e6caa0] hover:bg-[#e6caa0] hover:text-[#050e17] transition-all transform hover:rotate-180 cursor-pointer"
                title="Swap origin and destination"
                aria-label="Swap airports"
              >
                <Icon name="swap" size={16} />
              </button>
            </div>

            {/* Destination Airport */}
            <div className="lg:col-span-3 p-4 rounded-2xl bg-[#050e17]/80 border border-white/10 hover:border-[#e6caa0]/60 transition-all">
              <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-white/50 mb-1">
                Arrival Destination
              </span>
              <div className="flex items-center gap-2.5">
                <Icon name="pin" size={18} className="text-[#e6caa0] flex-shrink-0" />
                <select
                  value={toAirport}
                  onChange={(e) => setToAirport(e.target.value)}
                  className="w-full bg-transparent text-sm font-bold text-white focus:outline-none cursor-pointer"
                >
                  {airports.map((airport) => (
                    <option key={airport.code} value={airport.code} className="bg-[#050e17] text-white">
                      {airport.city} ({airport.code}) - {airport.airport}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Departure Date */}
            <div className={`p-4 rounded-2xl bg-[#050e17]/80 border border-white/10 hover:border-[#e6caa0]/60 transition-all ${
              tripType === 'oneway' ? 'lg:col-span-3' : 'lg:col-span-2'
            }`}>
              <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-white/50 mb-1">
                Departure Date
              </span>
              <div className="flex items-center gap-2">
                <Icon name="calendar" size={16} className="text-[#e6caa0] flex-shrink-0" />
                <input
                  type="date"
                  value={departDate}
                  onChange={(e) => setDepartDate(e.target.value)}
                  required
                  className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer"
                />
              </div>
            </div>

            {/* Return Date (if round trip) */}
            {tripType !== 'oneway' && (
              <div className="lg:col-span-2 p-4 rounded-2xl bg-[#050e17]/80 border border-white/10 hover:border-[#e6caa0]/60 transition-all">
                <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-white/50 mb-1">
                  Return Date
                </span>
                <div className="flex items-center gap-2">
                  <Icon name="calendar" size={16} className="text-[#e6caa0] flex-shrink-0" />
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    required
                    className="w-full bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer"
                  />
                </div>
              </div>
            )}

            {/* Travelers & Search Action */}
            <div className="lg:col-span-1 p-4 rounded-2xl bg-[#050e17]/80 border border-white/10 hover:border-[#e6caa0]/60 transition-all">
              <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-white/50 mb-1">
                Guests
              </span>
              <div className="flex items-center gap-1.5">
                <Icon name="users" size={16} className="text-[#e6caa0] flex-shrink-0" />
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="w-full bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer"
                >
                  <option value={1} className="bg-[#050e17]">1</option>
                  <option value={2} className="bg-[#050e17]">2</option>
                  <option value={3} className="bg-[#050e17]">3</option>
                  <option value={4} className="bg-[#050e17]">4</option>
                  <option value={5} className="bg-[#050e17]">5+</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-white/60 font-mono">
              <Icon name="shield" size={15} className="text-[#e6caa0]" />
              <span>IATA Live Fares · VIP Terminal Access Guaranteed · Dedicated Butler Concierge</span>
            </div>

            <button
              type="submit"
              disabled={isSearching}
              className="w-full sm:w-auto px-9 py-4 rounded-2xl bg-gradient-to-r from-[#e6caa0] via-[#eed9bb] to-[#d8b884] text-[#050d14] text-xs sm:text-sm font-bold shadow-[0_0_25px_rgba(230,202,160,0.45)] hover:shadow-[0_0_35px_rgba(230,202,160,0.7)] transition-all flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-75 font-mono uppercase tracking-wider"
            >
              {isSearching ? (
                <>
                  <span className="w-4 h-4 border-2 border-[#050d14]/30 border-t-[#050d14] rounded-full animate-spin" />
                  <span>Scanning Global Airspace...</span>
                </>
              ) : (
                <>
                  <Icon name="planeTakeoff" size={17} />
                  <span>Search Flights & Charters</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Live Search Results View */}
        {hasSearched && (
          <div className="mt-8 pt-8 border-t border-white/10 animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-serif font-bold text-white">
                  Available Flight Routes: {fromObj.city} ({fromObj.code}) ➔ {toObj.city} ({toObj.code})
                </h3>
                <p className="text-xs text-white/60 font-mono">
                  Verified schedules for {departDate} · {cabinClass} · {travelers} VIP Guest(s)
                </p>
              </div>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#e6caa0]/15 text-[#e6caa0] border border-[#e6caa0]/30 shadow-sm">
                3 Premier Departures Ready
              </span>
            </div>

            <div className="space-y-4">
              {searchResults.map((flight) => (
                <div
                  key={flight.id}
                  className="p-6 rounded-2xl bg-[#06111c] border border-white/10 hover:border-[#e6caa0] hover:shadow-[0_0_30px_rgba(230,202,160,0.2)] transition-all flex flex-col md:flex-row md:items-center justify-between gap-5"
                >
                  {/* Airline & Tag */}
                  <div className="space-y-1 min-w-[200px]">
                    <span className="inline-block px-2.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-[#e6caa0] bg-[#e6caa0]/10 rounded-md border border-[#e6caa0]/20">
                      {flight.tag}
                    </span>
                    <h4 className="font-bold text-base text-white">{flight.airline}</h4>
                    <span className="text-xs font-mono text-white/50 block">Flight #{flight.flightNumber}</span>
                  </div>

                  {/* Flight Timeline */}
                  <div className="flex-1 flex items-center justify-between max-w-md gap-4">
                    <div className="text-left">
                      <span className="text-base font-bold text-white block">{flight.departTime}</span>
                      <span className="text-xs font-mono font-bold text-cyan-300">{flight.fromCode}</span>
                    </div>

                    <div className="flex-1 text-center px-2">
                      <span className="text-[11px] font-mono text-white/70 block">{flight.duration}</span>
                      <div className="relative flex items-center justify-center my-1.5">
                        <div className="w-full h-[1.5px] bg-white/20" />
                        <Icon name="plane" size={15} className="text-[#e6caa0] absolute rotate-90" />
                      </div>
                      <span className="text-[10px] text-emerald-400 font-mono block">{flight.type}</span>
                    </div>

                    <div className="text-right">
                      <span className="text-base font-bold text-white block">{flight.arriveTime}</span>
                      <span className="text-xs font-mono font-bold text-cyan-300">{flight.toCode}</span>
                    </div>
                  </div>

                  {/* Baggage & Price */}
                  <div className="flex items-center justify-between md:justify-end gap-6 pt-3 md:pt-0 border-t md:border-t-0 border-white/10">
                    <div className="text-right">
                      <span className="text-xs text-white/70 flex items-center gap-1 justify-end font-mono">
                        <Icon name="luggage" size={14} className="text-[#e6caa0]" />
                        <span>{flight.baggage}</span>
                      </span>
                      <div className="mt-0.5">
                        <span className="text-2xl font-bold font-serif text-[#e6caa0]">${flight.price}</span>
                        <span className="text-[10px] text-white/60 font-mono"> / guest</span>
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
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#e6caa0] to-[#d6b782] text-[#050e17] text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-[0_0_20px_rgba(230,202,160,0.5)] cursor-pointer"
                    >
                      Reserve Suite
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
