import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FlightSearch } from './components/FlightSearch'
import { Destinations } from './components/Destinations'
import { PackagesOffers } from './components/PackagesOffers'
import { Services } from './components/Services'
import { AboutUs } from './components/AboutUs'
import { ContactBooking } from './components/ContactBooking'
import { Footer } from './components/Footer'
import { BookingModal } from './components/BookingModal'

export function App() {
  const [selectedItem, setSelectedItem] = useState(null)

  function handleOpenBooking(item) {
    setSelectedItem(item)
  }

  function handleCloseBooking() {
    setSelectedItem(null)
  }

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#202b29] font-sans antialiased selection:bg-[#c9dbc9] selection:text-[#202b29]">
      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Flight Search & Booking Engine */}
        <FlightSearch onSelectFlight={handleOpenBooking} />

        {/* Popular Destinations */}
        <Destinations onSelectDestination={handleOpenBooking} />

        {/* Flight Packages & Offers */}
        <PackagesOffers onSelectPackage={handleOpenBooking} />

        {/* Travel Services */}
        <Services />

        {/* About Us & Testimonials */}
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
