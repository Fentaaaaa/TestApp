"use client"

import { useState } from "react"
import { Calendar, MapPin, Car } from "lucide-react"

export function Booking() {
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    dropoffDate: "",
    vehicleType: "",
    name: "",
    email: "",
    phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="booking" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
              Start Your Journey
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-6 text-balance">
              Reserve Your Dream Car Today
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed mb-8">
              Complete the form to request a reservation. Our concierge team will 
              contact you within 2 hours to confirm availability and finalize your booking.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-primary-foreground/80">
                <div className="w-10 h-10 border border-primary-foreground/30 flex items-center justify-center">
                  <span className="font-serif text-gold">1</span>
                </div>
                <p>Submit your reservation request</p>
              </div>
              <div className="flex items-center gap-4 text-primary-foreground/80">
                <div className="w-10 h-10 border border-primary-foreground/30 flex items-center justify-center">
                  <span className="font-serif text-gold">2</span>
                </div>
                <p>Receive confirmation within 2 hours</p>
              </div>
              <div className="flex items-center gap-4 text-primary-foreground/80">
                <div className="w-10 h-10 border border-primary-foreground/30 flex items-center justify-center">
                  <span className="font-serif text-gold">3</span>
                </div>
                <p>Pick up your car and enjoy Italy</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Location Fields */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <select
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                      required
                    >
                      <option value="">Select location</option>
                      <option value="milano">Milano</option>
                      <option value="roma">Roma</option>
                      <option value="firenze">Firenze</option>
                      <option value="venezia">Venezia</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Dropoff Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <select
                      name="dropoffLocation"
                      value={formData.dropoffLocation}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                      required
                    >
                      <option value="">Select location</option>
                      <option value="milano">Milano</option>
                      <option value="roma">Roma</option>
                      <option value="firenze">Firenze</option>
                      <option value="venezia">Venezia</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Date Fields */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Pickup Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="date"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Dropoff Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="date"
                      name="dropoffDate"
                      value={formData.dropoffDate}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Type */}
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Vehicle Preference
                </label>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <select
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                    required
                  >
                    <option value="">Select category</option>
                    <option value="supercar">Supercar</option>
                    <option value="grand-tourer">Grand Tourer</option>
                    <option value="sports-car">Sports Car</option>
                    <option value="ultra-luxury">Ultra Luxury</option>
                  </select>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-input border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-input border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+39 000 000 0000"
                    className="w-full px-4 py-3 bg-input border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 font-medium hover:bg-primary/90 transition-colors"
              >
                Request Reservation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
