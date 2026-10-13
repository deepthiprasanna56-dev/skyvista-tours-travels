import { useState, useEffect } from 'react'
import { Icon } from './Icons'

const featuredSlides = [
  {
    id: 'slide-1',
    title: 'Maldives Overwater Paradise',
    route: 'New York (JFK) ➔ Maldives (MLE)',
    airline: 'Emirates · SkyVista First Class',
    price: 1299,
    oldPrice: 1850,
    tag: 'ULTRA LUXURY',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85',
    highlight: 'Private Seaplane + Overwater Pool Villa',
  },
  {
    id: 'slide-2',
    title: 'Swiss Alps & Glacier Rail',
    route: 'London (LHR) ➔ Zurich (ZRH)',
    airline: 'Swiss Air · Panoramic Scenic Express',
    price: 1450,
    oldPrice: 1980,
    tag: 'ALPINE ODYSSEY',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=85',
    highlight: '5★ Chalet Resort + 1st Class Rail Pass',
  },
  {
    id: 'slide-3',
    title: 'Tokyo & Kyoto Cherry Blossom',
    route: 'San Francisco (SFO) ➔ Tokyo (HND)',
    airline: 'Japan Airlines · Shinkansen Included',
    price: 1390,
    oldPrice: 1850,
    tag: 'CULTURAL ESCAPE',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85',
    highlight: 'Luxury Ryokan Onsen + Private City Guide',
  },
  {
    id: 'slide-4',
    title: 'Santorini Sunset Caldera',
    route: 'Paris (CDG) ➔ Santorini (JTR)',
    airline: 'Aegean Airlines · Sea Plane Connection',
    price: 940,
    oldPrice: 1320,
    tag: 'ROMANTIC GETAWAY',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85',
    highlight: 'Cliffside Plunge Pool + Sunset Catamaran',
  },
  {
    id: 'slide-5',
    title: 'Dubai Sky & Dune Safari',
    route: 'London (LHR) ➔ Dubai (DXB)',
    airline: 'Emirates Airways · A380 Upper Deck',
    price: 780,
    oldPrice: 1100,
    tag: 'DESERT LUXURY',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85',
    highlight: 'Burj Khalifa Sky Pass + Private Desert Dune Camp',
  },
]

export function ThreeDSlider({ onSelectPackage }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  function handlePrev() {
    setCurrentIndex((prev) => (prev - 1 + featuredSlides.length) % featuredSlides.length)
  }

  function handleNext() {
    setCurrentIndex((prev) => (prev + 1) % featuredSlides.length)
  }

  return (
    <section className="py-20 w-full overflow-hidden bg-gradient-to-b from-[#1b342c] via-[#162a24] to-[#12221d] text-white relative">
      {/* 3D Atmospheric Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-12 left-10 w-72 h-72 bg-[#e4c99b]/10 blur-[90px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#e4c99b] text-xs font-bold tracking-widest uppercase mb-3 shadow-[0_0_20px_rgba(228,201,155,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#e4c99b] animate-ping" />
            <span>3D INTERACTIVE FLIGHT SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-white">
            Experience Travel <br />
            <span className="italic text-[#e4c99b]">In A New Dimension</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Slide through our highest-rated VIP flight packages with 3D perspective cards, guaranteed lowest group rates, and all-inclusive luxury accommodations.
          </p>
        </div>

        {/* 3D Carousel Stage */}
        <div className="relative w-full max-w-5xl mx-auto h-[440px] sm:h-[480px] flex items-center justify-center [perspective:1200px]">
          {featuredSlides.map((slide, index) => {
            const total = featuredSlides.length
            // Calculate distance relative to current index
            let offset = index - currentIndex
            if (offset > total / 2) offset -= total
            if (offset < -total / 2) offset += total

            const isActive = offset === 0
            const isPrev = offset === -1 || (currentIndex === 0 && index === total - 1)
            const isNext = offset === 1 || (currentIndex === total - 1 && index === 0)
            const isVisible = isActive || isPrev || isNext

            if (!isVisible) return null

            let transformStyle
            let zIndex
            let opacity
            let filter

            if (isActive) {
              transformStyle = 'translateX(0%) translateZ(80px) rotateY(0deg) scale(1)'
              zIndex = 30
              opacity = 1
              filter = 'none'
            } else if (offset < 0) {
              transformStyle = 'translateX(-58%) translateZ(-90px) rotateY(28deg) scale(0.85)'
              zIndex = 20
              opacity = 0.65
              filter = 'blur(1px)'
            } else {
              transformStyle = 'translateX(58%) translateZ(-90px) rotateY(-28deg) scale(0.85)'
              zIndex = 20
              opacity = 0.65
              filter = 'blur(1px)'
            }

            return (
              <div
                key={slide.id}
                onClick={() => setCurrentIndex(index)}
                style={{
                  transform: transformStyle,
                  zIndex,
                  opacity,
                  filter,
                }}
                className={`absolute w-[85%] sm:w-[500px] h-[380px] sm:h-[420px] rounded-3xl overflow-hidden transition-all duration-700 ease-out cursor-pointer [transform-style:preserve-3d] select-none ${
                  isActive
                    ? 'ring-2 ring-[#e4c99b]/80 shadow-[0_20px_50px_rgba(0,0,0,0.8),_0_0_40px_rgba(228,201,155,0.35)]'
                    : 'shadow-2xl hover:opacity-90'
                }`}
              >
                {/* Background Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#31594f] text-[#e4c99b] border border-[#e4c99b]/40 shadow-md">
                    {slide.tag}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-black/50 backdrop-blur-md text-white border border-white/20">
                    {slide.airline}
                  </span>
                </div>

                {/* Card Bottom Content */}
                <div className="absolute bottom-5 left-5 right-5 z-10 space-y-3">
                  <div>
                    <span className="text-[11px] text-[#e4c99b] font-mono tracking-wider block">
                      ✈ {slide.route}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                      {slide.title}
                    </h3>
                    <p className="text-xs text-white/80 mt-1 line-clamp-1">
                      ✦ {slide.highlight}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/20">
                    <div>
                      <span className="text-[10px] text-white/50 block line-through">
                        ${slide.oldPrice}
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-[#e4c99b]">${slide.price}</span>
                        <span className="text-[10px] text-white/70">/ person</span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        onSelectPackage({
                          type: 'package',
                          title: slide.title,
                          subtitle: slide.route,
                          image: slide.image,
                          price: slide.price,
                        })
                      }}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#e4c99b] to-[#d6b782] text-[#12221d] font-bold text-xs shadow-[0_0_20px_rgba(228,201,155,0.4)] hover:shadow-[0_0_25px_rgba(228,201,155,0.7)] transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Instant Book</span>
                      <Icon name="arrowRight" size={14} />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 sm:left-4 z-40 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 text-white flex items-center justify-center transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous 3D slide"
          >
            <span className="transform rotate-180 inline-block">
              <Icon name="arrowRight" size={18} />
            </span>
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-2 sm:right-4 z-40 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 text-white flex items-center justify-center transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next 3D slide"
          >
            <Icon name="arrowRight" size={18} />
          </button>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {featuredSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === i
                  ? 'w-8 bg-[#e4c99b] shadow-[0_0_12px_#e4c99b]'
                  : 'w-2.5 bg-white/25 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
