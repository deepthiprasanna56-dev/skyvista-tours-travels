import { useState } from 'react'
import { Icon } from './Icons'

const suites = [
  {
    id: '1A',
    name: 'Presidential SkySuite 1A',
    tier: 'First Class Grand Suite',
    side: 'Port Window (Left)',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
    features: [
      '82" Fully Lie-Flat Double Bed with Egyptian Cotton Linens',
      'Sliding Privacy Partitions with Do-Not-Disturb Indicator',
      '32-inch 4K HDR Touchscreen Cinema with Bang & Olufsen Audio',
      'Personal Chilled Mini-Bar & Caviar Service on Demand',
      'Direct Aisle Access & Personal Wardrobe Closet',
    ],
    price: 3450,
    status: 'Available',
  },
  {
    id: '1D',
    name: 'Honeymoon Center Suite 1D',
    tier: 'First Class Dual Suite',
    side: 'Center (Pairs with 1G)',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
    features: [
      'Converts into Double Bed with Retractable Privacy Divider',
      'Bespoke Fine Dining for Couples with Michelin Star Menus',
      'Ambient Starry Night Mood Lighting & Individual Air Controls',
      'Complimentary Dom Pérignon & Bulgari Amenity Kit',
      'Wireless Fast Charging & Global High-Speed Starlink WiFi',
    ],
    price: 3200,
    status: 'Available',
  },
  {
    id: '1K',
    name: 'Executive Celestial Suite 1K',
    tier: 'First Class Grand Suite',
    side: 'Starboard Window (Right)',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
    features: [
      'Triple Electrochromic Dimming Windows with Horizon View',
      'Ergonomic Leather Seat with 8-Point In-Seat Massage',
      'Private Turndown Service with Cashmere Travel Robe',
      'Exclusive Access to SkyBar Lounge & Chauffeur Airport Transfer',
      'Dedicated In-Flight Butler Service throughout the Flight',
    ],
    price: 3450,
    status: 'Available',
  },
  {
    id: '2A',
    name: 'Ambassador Suite 2A',
    tier: 'Executive First Class',
    side: 'Port Window (Left)',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85',
    features: [
      '79" Lie-Flat Bed with Memory Foam Mattress',
      'Acoustic Noise-Cancelling Enclosure with Direct Aisle Access',
      'Multi-Port Universal AC & 100W USB-C Power Stations',
      'À La Carte In-Flight Dining Prepared by Dedicated Chef',
      'Priority Fast-Track Baggage Handling upon Arrival',
    ],
    price: 2890,
    status: 'Available',
  },
]

export function CabinExperience({ onSelectSuite }) {
  const [selectedSuiteId, setSelectedSuiteId] = useState('1A')
  const activeSuite = suites.find((s) => s.id === selectedSuiteId) || suites[0]

  return (
    <section id="cabin-experience" className="py-24 w-full bg-[#07131e] text-white relative overflow-hidden border-t border-b border-white/10">
      {/* Background Aeronautic Grid & Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#e6caa0]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-[#e6caa0] text-xs font-mono font-bold tracking-widest uppercase mb-3 shadow-[0_0_20px_rgba(230,202,160,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#e6caa0] animate-ping" />
            <span>BOEING 787-9 VIP CABIN BLUEPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-white">
            Excellence in Flight. <br />
            <span className="italic text-[#e6caa0]">Inside Your Private Suite</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Discover a sanctuary in the clouds. Select an interactive suite below to explore dedicated lie-flat double beds, Michelin-starred fine dining, and personalized butler concierge.
          </p>
        </div>

        {/* Blueprint & Suite Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Aircraft Blueprint Seatmap */}
          <div className="lg:col-span-5 bg-[#0b1a28]/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs">
              <span className="text-[#e6caa0] font-bold">AIRCRAFT SEATMAP · DECK 1</span>
              <span className="text-white/50 text-[11px]">1-2-1 CONFIGURATION</span>
            </div>

            {/* Aircraft Nose & Cockpit Visual Indicator */}
            <div className="relative flex flex-col items-center py-2">
              <div className="w-28 h-10 border-t-2 border-l-2 border-r-2 border-cyan-400/40 rounded-t-full flex items-center justify-center text-[10px] font-mono text-cyan-300">
                ▲ COCKPIT
              </div>
              <div className="w-full h-[1px] bg-white/10 my-3" />
            </div>

            {/* Interactive Seat Rows */}
            <div className="space-y-4">
              {/* Row 1 */}
              <div>
                <span className="block text-[10px] font-mono text-white/40 mb-2">ROW 01 · ULTRA FIRST CLASS</span>
                <div className="grid grid-cols-4 gap-3">
                  <button
                    onClick={() => setSelectedSuiteId('1A')}
                    className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                      selectedSuiteId === '1A'
                        ? 'bg-[#e6caa0] text-[#07131e] font-bold border-[#e6caa0] shadow-[0_0_25px_rgba(230,202,160,0.5)] scale-105'
                        : 'bg-white/5 text-white border-white/15 hover:border-[#e6caa0]/60'
                    }`}
                  >
                    <span className="block text-xs font-mono font-bold">1A</span>
                    <span className="text-[9px] block opacity-80">Window</span>
                  </button>

                  <button
                    onClick={() => setSelectedSuiteId('1D')}
                    className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                      selectedSuiteId === '1D'
                        ? 'bg-[#e6caa0] text-[#07131e] font-bold border-[#e6caa0] shadow-[0_0_25px_rgba(230,202,160,0.5)] scale-105'
                        : 'bg-white/5 text-white border-white/15 hover:border-[#e6caa0]/60'
                    }`}
                  >
                    <span className="block text-xs font-mono font-bold">1D</span>
                    <span className="text-[9px] block opacity-80">Center</span>
                  </button>

                  <button
                    onClick={() => setSelectedSuiteId('1D')}
                    className="p-3.5 rounded-2xl border text-center bg-white/5 text-white border-white/15 hover:border-[#e6caa0]/60 transition-all cursor-pointer"
                  >
                    <span className="block text-xs font-mono font-bold">1G</span>
                    <span className="text-[9px] block opacity-80">Center</span>
                  </button>

                  <button
                    onClick={() => setSelectedSuiteId('1K')}
                    className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                      selectedSuiteId === '1K'
                        ? 'bg-[#e6caa0] text-[#07131e] font-bold border-[#e6caa0] shadow-[0_0_25px_rgba(230,202,160,0.5)] scale-105'
                        : 'bg-white/5 text-white border-white/15 hover:border-[#e6caa0]/60'
                    }`}
                  >
                    <span className="block text-xs font-mono font-bold">1K</span>
                    <span className="text-[9px] block opacity-80">Window</span>
                  </button>
                </div>
              </div>

              {/* Row 2 */}
              <div>
                <span className="block text-[10px] font-mono text-white/40 mb-2">ROW 02 · EXECUTIVE SUITES</span>
                <div className="grid grid-cols-4 gap-3">
                  <button
                    onClick={() => setSelectedSuiteId('2A')}
                    className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                      selectedSuiteId === '2A'
                        ? 'bg-[#e6caa0] text-[#07131e] font-bold border-[#e6caa0] shadow-[0_0_25px_rgba(230,202,160,0.5)] scale-105'
                        : 'bg-white/5 text-white border-white/15 hover:border-[#e6caa0]/60'
                    }`}
                  >
                    <span className="block text-xs font-mono font-bold">2A</span>
                    <span className="text-[9px] block opacity-80">Window</span>
                  </button>

                  <div className="p-3.5 rounded-2xl border border-white/10 bg-black/20 text-center opacity-40 select-none">
                    <span className="block text-xs font-mono">2D</span>
                    <span className="text-[9px] block">Booked</span>
                  </div>

                  <div className="p-3.5 rounded-2xl border border-white/10 bg-black/20 text-center opacity-40 select-none">
                    <span className="block text-xs font-mono">2G</span>
                    <span className="text-[9px] block">Booked</span>
                  </div>

                  <div className="p-3.5 rounded-2xl border border-white/10 bg-black/20 text-center opacity-40 select-none">
                    <span className="block text-xs font-mono">2K</span>
                    <span className="text-[9px] block">Booked</span>
                  </div>
                </div>
              </div>

              {/* Aft SkyBar indicator */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-cyan-900/40 to-cyan-950/40 border border-cyan-500/20 text-center">
                <span className="text-xs font-mono font-bold text-cyan-300 block">✦ CELESTIAL SKYBAR & LOUNGE ✦</span>
                <span className="text-[10px] text-white/60">Socialize, fine wine tasting & cocktail lounge</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-white/60 pt-2 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e6caa0]" />
                <span>Selected</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span>Available</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/5 opacity-50" />
                <span>Reserved</span>
              </span>
            </div>
          </div>

          {/* Right Column: Selected Suite Visual & Amenities */}
          <div className="lg:col-span-7 bg-[#0b1a28]/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/15 shadow-2xl flex flex-col justify-between">
            {/* Suite Visual */}
            <div className="relative h-72 sm:h-80 overflow-hidden">
              <img
                src={activeSuite.image}
                alt={activeSuite.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a28] via-transparent to-transparent" />

              <div className="absolute top-5 left-5">
                <span className="px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#07131e]/80 backdrop-blur-md text-[#e6caa0] border border-[#e6caa0]/40">
                  {activeSuite.tier}
                </span>
              </div>

              <div className="absolute top-5 right-5">
                <span className="px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  ● {activeSuite.status}
                </span>
              </div>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-mono text-[#e6caa0] block">{activeSuite.side}</span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">{activeSuite.name}</h3>
              </div>
            </div>

            {/* Suite Features List */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-white/50 uppercase tracking-widest block">
                  SUITE AMENITIES & IN-FLIGHT COMFORTS
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/80">
                  {activeSuite.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#e6caa0] mt-0.5 font-bold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Action */}
              <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono text-white/50 block">EXCLUSIVE SUITE FARE</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-extrabold text-[#e6caa0] font-serif">${activeSuite.price}</span>
                    <span className="text-xs text-white/60">/ segment (taxes & catering incl.)</span>
                  </div>
                </div>

                <button
                  onClick={() =>
                    onSelectSuite({
                      type: 'flight',
                      title: activeSuite.name,
                      route: `${activeSuite.tier} · Suite ${activeSuite.id}`,
                      price: activeSuite.price,
                    })
                  }
                  className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#e6caa0] to-[#d6b782] text-[#07131e] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(230,202,160,0.4)] hover:shadow-[0_0_35px_rgba(230,202,160,0.7)] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Select Suite {activeSuite.id}</span>
                  <Icon name="arrowRight" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
