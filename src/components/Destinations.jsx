import { useState } from 'react'
import { destinations } from '../data/travelData'
import { Icon } from './Icons'

export function Destinations({ onSelectDestination }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { key: 'all', label: 'All Destinations' },
    { key: 'beach', label: 'Tropical Beaches' },
    { key: 'mountain', label: 'Mountain & Nature' },
    { key: 'cultural', label: 'Cultural Heritage' },
    { key: 'urban', label: 'Urban Wonders' },
  ]

  const filtered =
    activeCategory === 'all'
      ? destinations
      : destinations.filter((d) => d.category === activeCategory)

  return (
    <section id="destinations" className="py-20 bg-[#fbfaf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#31594f] mb-3">
              <span className="w-6 h-[1.5px] bg-[#31594f]" />
              <span>A WORLD OF POSSIBILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#202b29] tracking-tight">
              Places that stay <br />
              <span className="italic text-[#728b7e]">with you forever.</span>
            </h2>
          </div>

          <p className="text-sm text-[#616c65] max-w-md font-light leading-relaxed">
            Hand-curated global destinations with top-rated flight connectivity, exceptional local stays, and verified unforgettable experiences.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#eeeee6]">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat.key
                  ? 'bg-[#31594f] text-white shadow-sm'
                  : 'bg-white text-[#5b6760] hover:bg-[#eef3ee] border border-[#e2e5de]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((place) => (
            <div
              key={place.id}
              className="group relative rounded-3xl overflow-hidden bg-white border border-[#e8ece3] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image Container with Visual Overlays */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Badge Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#233f37] shadow-sm">
                    {place.tag}
                  </span>
                </div>

                {/* Flight Duration Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium bg-black/40 backdrop-blur-md text-white/90">
                  <Icon name="clock" size={12} className="text-[#e4c99b]" />
                  <span>{place.flightTime}</span>
                </div>

                {/* Name & Country at base of photo */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] text-white/80 font-medium block">{place.country}</span>
                  <h3 className="text-2xl font-serif font-bold leading-tight">{place.name}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-[#626e67] leading-relaxed line-clamp-2">
                  {place.description}
                </p>

                <div className="pt-3 border-t border-[#f0f0ea] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#87928b] block">Flight starting at</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-bold text-[#31594f]">${place.price}</span>
                      <span className="text-[10px] text-[#87928b]">/ person</span>
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
                    className="p-2.5 rounded-full bg-[#eef3ee] text-[#31594f] hover:bg-[#31594f] hover:text-white transition-all transform group-hover:scale-105"
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
