import { useState } from 'react'
import { destinations } from '../data/travelData'
import { Icon } from './Icons'

export function Destinations({ onSelectDestination }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { key: 'all', label: 'All Destinations' },
    { key: 'beach', label: 'Tropical Islands' },
    { key: 'mountain', label: 'Alpine & Nature' },
    { key: 'cultural', label: 'Cultural Heritage' },
    { key: 'urban', label: 'Global Metropolises' },
  ]

  const filtered =
    activeCategory === 'all'
      ? destinations
      : destinations.filter((d) => d.category === activeCategory)

  return (
    <section id="destinations" className="py-24 bg-[#050e17] text-white w-full relative">
      {/* Background Subtle Glows */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#e6caa0] mb-3">
              <span className="w-6 h-[1.5px] bg-[#e6caa0]" />
              <span>CURATED WORLD EXPEDITIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-white tracking-tight">
              Destinations That Stay <br />
              <span className="italic text-[#e6caa0]">With You Forever</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-white/70 max-w-md font-light leading-relaxed">
            Handpicked global destinations connected by direct First Class routes, private airport transfers, and verified ultra-luxury boutique stays.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-2 border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-[#e6caa0] to-[#d6b782] text-[#050e17] shadow-[0_0_20px_rgba(230,202,160,0.4)]'
                  : 'bg-white/5 text-white/80 hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Destination Cards Grid with 3D Depth */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filtered.map((place) => (
            <div
              key={place.id}
              className="group relative rounded-3xl overflow-hidden bg-[#091724] border border-white/15 shadow-xl hover:shadow-[0_20px_50px_rgba(230,202,160,0.2)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col hover:border-[#e6caa0]/60"
            >
              {/* Image Container with 3D Depth */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091724] via-black/30 to-transparent" />

                {/* Badge Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#e6caa0] border border-[#e6caa0]/40 shadow-sm">
                    {place.tag}
                  </span>
                </div>

                {/* Flight Duration Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono bg-black/60 backdrop-blur-md text-white/90 border border-white/20">
                  <Icon name="clock" size={12} className="text-[#e6caa0]" />
                  <span>{place.flightTime}</span>
                </div>

                {/* Name & Country at base of photo */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-xs font-mono text-cyan-300 block">{place.country}</span>
                  <h3 className="text-2xl font-serif font-bold leading-tight">{place.name}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-white/70 leading-relaxed line-clamp-2">
                  {place.description}
                </p>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-white/50 block">First Class from</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold font-serif text-[#e6caa0]">${place.price}</span>
                      <span className="text-[10px] text-white/50 font-mono">/ guest</span>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      onSelectDestination({
                        type: 'destination',
                        title: `${place.name}, ${place.country}`,
                        country: place.country,
                        image: place.image,
                        price: place.price,
                      })
                    }
                    className="p-3 rounded-full bg-white/5 border border-white/15 text-[#e6caa0] hover:bg-[#e6caa0] hover:text-[#050e17] transition-all transform group-hover:scale-105 shadow-sm hover:shadow-[0_0_20px_rgba(230,202,160,0.5)] cursor-pointer"
                    aria-label={`Book trip to ${place.name}`}
                    title={`Book trip to ${place.name}`}
                  >
                    <Icon name="arrowRight" size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
