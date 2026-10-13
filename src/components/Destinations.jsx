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
    <section id="destinations" className="py-24 bg-[#fbfaf7] w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#31594f] mb-3">
              <span className="w-6 h-[1.5px] bg-[#31594f]" />
              <span>A WORLD OF POSSIBILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-medium text-[#202b29] tracking-tight">
              Places that stay <br />
              <span className="italic text-[#657d71]">with you forever.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#616c65] max-w-md font-light leading-relaxed">
            Hand-curated global destinations with top-rated flight connectivity, exceptional local stays, and verified unforgettable experiences.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-2 border-b border-[#eeeee6]">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#31594f] text-white shadow-[0_4px_12px_rgba(49,89,79,0.3)]'
                  : 'bg-white text-[#5b6760] hover:bg-[#eef3ee] border border-[#e2e5de]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Destination Cards Grid with 3D Card Hover & Glowing Lift */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filtered.map((place) => (
            <div
              key={place.id}
              className="group relative rounded-3xl overflow-hidden bg-white border border-[#e8ece3] shadow-sm hover:shadow-[0_20px_45px_rgba(49,89,79,0.18)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col hover:border-[#31594f]/50"
            >
              {/* Image Container with 3D Depth */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                {/* Badge Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#233f37] shadow-sm">
                    {place.tag}
                  </span>
                </div>

                {/* Flight Duration Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold bg-black/50 backdrop-blur-md text-white/95 border border-white/20">
                  <Icon name="clock" size={12} className="text-[#e4c99b]" />
                  <span>{place.flightTime}</span>
                </div>

                {/* Name & Country at base of photo */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-xs text-white/80 font-medium block">{place.country}</span>
                  <h3 className="text-2xl font-serif font-bold leading-tight drop-shadow-sm">{place.name}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-[#626e67] leading-relaxed line-clamp-2">
                  {place.description}
                </p>

                <div className="pt-3 border-t border-[#f0f0ea] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#87928b] block font-medium">Flights starting at</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-extrabold text-[#31594f]">${place.price}</span>
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
                    className="p-3 rounded-full bg-[#eef3ee] text-[#31594f] hover:bg-[#31594f] hover:text-white transition-all transform group-hover:scale-105 shadow-sm hover:shadow-[0_0_15px_rgba(49,89,79,0.4)] cursor-pointer"
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
