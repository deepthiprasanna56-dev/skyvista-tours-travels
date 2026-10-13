import { useState } from 'react'
import { Icon } from './Icons'

const aircraftFleet = [
  {
    id: 'g700',
    name: 'Gulfstream G700 Private Flagship',
    category: 'Ultra-Long Range VIP Jet',
    range: '13,890 km',
    rangePercent: 92,
    speed: 'Mach 0.925 (1,142 km/h)',
    speedPercent: 95,
    altitude: '51,000 ft (Above Weather)',
    capacity: 'Up to 14 VIP Passengers',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=85',
    description: 'The pinnacle of private executive aviation. Features up to five living areas, whisper-quiet cabin acoustics, and 100% fresh air replenishment every two minutes.',
    amenities: ['Grand Master Bedroom Suite', 'Full Shower & Spa Facility', 'Ultra-High-Definition Jet Cinema', 'Direct Runway Chauffeur'],
    hourlyRate: 11500,
  },
  {
    id: 'b787',
    name: 'Boeing 787-9 Dreamliner SkySuite',
    category: 'Wide-Body VIP Celestial Cruiser',
    range: '14,140 km',
    rangePercent: 94,
    speed: 'Mach 0.85 (1,050 km/h)',
    speedPercent: 88,
    altitude: '43,000 ft',
    capacity: '32 Private Lie-Flat Suites',
    image: 'https://images.unsplash.com/photo-1520437358207-323b43b50729?auto=format&fit=crop&w=1200&q=85',
    description: 'Custom-engineered VIP Dreamliner equipped with electrochromic panoramic dimming windows, lower cabin altitude pressurization, and the legendary Celestial SkyBar.',
    amenities: ['Celestial SkyBar Lounge', 'Private Double Bed Suites', 'Starlink 250Mbps WiFi', 'Michelin Star Chef Onboard'],
    hourlyRate: 16800,
  },
  {
    id: 'a350',
    name: 'Airbus A350-1000 Prestige',
    category: 'Next-Generation Long Haul',
    range: '16,100 km (Non-Stop Global)',
    rangePercent: 100,
    speed: 'Mach 0.85 (1,050 km/h)',
    speedPercent: 88,
    altitude: '43,100 ft',
    capacity: '44 First Class Suites',
    image: 'https://images.unsplash.com/photo-1519074069444-1ba4ea16e6f4?auto=format&fit=crop&w=1200&q=85',
    description: 'Carbon-composite quietest widebody aircraft in the skies. Designed for ultra-long haul intercontinental flights without technical stops or refuel delays.',
    amenities: ['Circadian LED Sky Simulation', 'Zero-G Ergonomic Seating', 'Executive Boardroom Layout', 'Dedicated VIP Luggage Hold'],
    hourlyRate: 18200,
  },
]

export function FleetShowcase({ onSelectCharter }) {
  const [selectedFleetId, setSelectedFleetId] = useState('g700')
  const activeFleet = aircraftFleet.find((f) => f.id === selectedFleetId) || aircraftFleet[0]

  return (
    <section id="fleet-showcase" className="py-24 w-full bg-[#050e17] text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#e6caa0]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-[#e6caa0] text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-[0_0_20px_rgba(230,202,160,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#e6caa0] animate-ping" />
            <span>GLOBAL EXECUTIVE FLEET</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-white">
            Engineering Precision. <br />
            <span className="italic text-[#e6caa0]">Aviation Without Compromise</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Our private aircraft fleet adheres to the highest FAA and EASA safety certifications, offering bespoke transcontinental charters and first-class scheduled luxury.
          </p>
        </div>

        {/* Aircraft Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {aircraftFleet.map((aircraft) => (
            <button
              key={aircraft.id}
              onClick={() => setSelectedFleetId(aircraft.id)}
              className={`px-6 py-3 rounded-2xl text-xs font-mono font-bold transition-all cursor-pointer ${
                selectedFleetId === aircraft.id
                  ? 'bg-gradient-to-r from-[#e6caa0] to-[#d6b782] text-[#050e17] shadow-[0_0_25px_rgba(230,202,160,0.45)] scale-105'
                  : 'bg-white/5 text-white/80 border border-white/10 hover:border-white/30'
              }`}
            >
              {aircraft.name.split(' ')[0]} {aircraft.name.split(' ')[1]}
            </button>
          ))}
        </div>

        {/* Featured Aircraft Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#091724]/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl">
          {/* Left: Aircraft Visual with Floating Telemetry */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] group">
            <img
              src={activeFleet.image}
              alt={activeFleet.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-black/60 backdrop-blur-md text-[#e6caa0] border border-[#e6caa0]/30">
                {activeFleet.category}
              </span>
            </div>

            <div className="absolute bottom-4 left-5 right-5 text-white">
              <span className="text-xs font-mono text-cyan-300 block">✦ PASSENGER CAPACITY</span>
              <p className="text-lg font-serif font-bold">{activeFleet.capacity}</p>
            </div>
          </div>

          {/* Right: Technical Telemetry & Specs */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono text-[#e6caa0] uppercase tracking-wider block">
                FLAGSHIP SPECIFICATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                {activeFleet.name}
              </h3>
              <p className="text-xs text-white/70 font-light mt-2 leading-relaxed">
                {activeFleet.description}
              </p>
            </div>

            {/* Visual Performance Gauges */}
            <div className="space-y-4 pt-2">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1 text-white/80">
                  <span>MAXIMUM NON-STOP RANGE:</span>
                  <span className="text-[#e6caa0] font-bold">{activeFleet.range}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-black/40 overflow-hidden border border-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-[#e6caa0]"
                    style={{ width: `${activeFleet.rangePercent}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1 text-white/80">
                  <span>MAX CRUISE SPEED:</span>
                  <span className="text-[#e6caa0] font-bold">{activeFleet.speed}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-black/40 overflow-hidden border border-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400"
                    style={{ width: `${activeFleet.speedPercent}%` }}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center text-xs font-mono text-white/80 pt-1">
                <span>SERVICE CEILING ALTITUDE:</span>
                <span className="text-cyan-300 font-bold">{activeFleet.altitude}</span>
              </div>
            </div>

            {/* In-Flight Amenities Chips */}
            <div className="pt-2">
              <span className="text-[11px] font-mono text-white/50 block mb-2">KEY INCLUSIONS</span>
              <div className="flex flex-wrap gap-2">
                {activeFleet.amenities.map((a, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-[10px] font-mono bg-white/5 border border-white/10 text-white/90"
                  >
                    ✓ {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Charter CTA */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono text-white/50 block">ESTIMATED CHARTER RATE</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold font-serif text-[#e6caa0]">${activeFleet.hourlyRate.toLocaleString()}</span>
                  <span className="text-[10px] text-white/60">/ flight hour</span>
                </div>
              </div>

              <button
                onClick={() =>
                  onSelectCharter({
                    type: 'flight',
                    title: activeFleet.name,
                    route: `${activeFleet.category} · Private Charter`,
                    price: activeFleet.hourlyRate,
                  })
                }
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#e6caa0] to-[#d6b782] text-[#050e17] font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(230,202,160,0.35)] hover:shadow-[0_0_30px_rgba(230,202,160,0.6)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Inquire Private Charter</span>
                <Icon name="arrowRight" size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
