import { useState } from 'react'
import { IntroScreen } from './components/IntroScreen'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FlightSearch } from './components/FlightSearch'
import { CabinExperience } from './components/CabinExperience'
import { FleetShowcase } from './components/FleetShowcase'
import { ThreeDSlider } from './components/ThreeDSlider'
import { Destinations } from './components/Destinations'
import { PackagesOffers } from './components/PackagesOffers'
import { Services } from './components/Services'
import { AboutUs } from './components/AboutUs'
import { ContactBooking } from './components/ContactBooking'
import { Footer } from './components/Footer'
import { BookingModal } from './components/BookingModal'

export function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null)

  function handleOpenBooking(item) {
    setSelectedItem(item)
  }

  function handleCloseBooking() {
    setSelectedItem(null)
  }

  return (
    <div className="min-h-screen w-full bg-[#060e18] text-white font-sans antialiased selection:bg-[#e6caa0] selection:text-[#060e18] overflow-x-hidden">
      {/* 3D Executive Aviation Intro Splash Screen */}
      {showIntro && <IntroScreen onFinish={() => setShowIntro(false)} />}

      {/* Navigation Header */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onShowIntro={() => setShowIntro(true)}
      />

      {/* Main Content Sections - Full Bleed, Edge-to-Edge & Fluid */}
      <main className="w-full overflow-x-hidden">
        {/* Cinematic Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Executive Flight Search & Booking Engine */}
        <FlightSearch onSelectFlight={handleOpenBooking} />

        {/* Interactive Boeing 787-9 Cabin Blueprint & Suite Selector */}
        <CabinExperience onSelectSuite={handleOpenBooking} />

        {/* Global Executive Aircraft Fleet Showcase */}
        <FleetShowcase onSelectCharter={handleOpenBooking} />

        {/* 3D Interactive Slide Carousel Showcase */}
        <ThreeDSlider onSelectPackage={handleOpenBooking} />

        {/* Curated Luxury Destinations */}
        <Destinations onSelectDestination={handleOpenBooking} />

        {/* Flight Packages & Expeditions */}
        <PackagesOffers onSelectPackage={handleOpenBooking} />

        {/* Aviation & Bespoke Concierge Services */}
        <Services />

        {/* About Us, Milestones & Verified Traveler Reviews */}
        <AboutUs />

        {/* Contact & Inquiry Form + FAQs */}
        <ContactBooking />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking & Boarding Pass Modal */}
      {selectedItem && (
        <BookingModal
          item={selectedItem}
          onClose={handleCloseBooking}
        />
      )}
    </div>
  )
}

export default App
