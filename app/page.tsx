import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Fleet } from "@/components/fleet"
import { Experience } from "@/components/experience"
import { Locations } from "@/components/locations"
import { Testimonials } from "@/components/testimonials"
import { Booking } from "@/components/booking"
import { Footer } from "@/components/footer"
import { LuxuryDividerWrapper } from "@/components/luxury-divider-wrapper"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Fleet />
        <LuxuryDividerWrapper />
        <Experience />
        <Locations />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
