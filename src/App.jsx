import { useState } from 'react'
import { IntroScreen } from './components/IntroScreen'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FlightSearch } from './components/FlightSearch'
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
    <div className="min-h-screen w-full bg-[#fbfaf7] text-[#202b29] font-sans antialiased selection:bg-[#c9dbc9] selection:text-[#202b29] overflow-x-hidden">
      {/* 3D Intro Splash Screen */}
      {showIntro && <IntroScreen onFinish={() => setShowIntro(false)} />}

      {/* Navigation Header */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onShowIntro={() => setShowIntro(true)}
      />

      {/* Main Content Sections - Full Bleed & Fluid */}
      <main className="w-full overflow-x-hidden">
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Flight Search & Booking Engine */}
        <FlightSearch onSelectFlight={handleOpenBooking} />

        {/* 3D Interactive Slide Carousel Showcase */}
        <ThreeDSlider onSelectPackage={handleOpenBooking} />

        {/* Popular Destinations with 3D Card Hover */}
        <Destinations onSelectDestination={handleOpenBooking} />

        {/* Flight Packages & Special Offers */}
        <PackagesOffers onSelectPackage={handleOpenBooking} />

        {/* Aviation & Travel Services */}
        <Services />

        {/* About Us, Milestones & Verified Traveler Reviews */}
        <AboutUs />

        {/* Contact & Inquiry Form + FAQs */}
        <ContactBooking />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking & E-Ticket Modal */}
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
