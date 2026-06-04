"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const cars = [
  {
    id: 1,
    name: "Ferrari 488 Spider",
    category: "Supercar",
    price: "€1,200",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2670&auto=format&fit=crop",
    specs: {
      power: "670 HP",
      speed: "330 km/h",
      acceleration: "3.0s",
    },
  },
  {
    id: 2,
    name: "Lamborghini Huracán",
    category: "Supercar",
    price: "€1,400",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2574&auto=format&fit=crop",
    specs: {
      power: "640 HP",
      speed: "325 km/h",
      acceleration: "2.9s",
    },
  },
  {
    id: 3,
    name: "Maserati GranTurismo",
    category: "Grand Tourer",
    price: "€650",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2670&auto=format&fit=crop",
    specs: {
      power: "460 HP",
      speed: "299 km/h",
      acceleration: "4.7s",
    },
  },
  {
    id: 4,
    name: "Porsche 911 Turbo S",
    category: "Sports Car",
    price: "€850",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2670&auto=format&fit=crop",
    specs: {
      power: "650 HP",
      speed: "330 km/h",
      acceleration: "2.7s",
    },
  },
  {
    id: 5,
    name: "Rolls-Royce Ghost",
    category: "Ultra Luxury",
    price: "€1,800",
    image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=2574&auto=format&fit=crop",
    specs: {
      power: "571 HP",
      speed: "250 km/h",
      acceleration: "4.8s",
    },
  },
  {
    id: 6,
    name: "Bentley Continental GT",
    category: "Grand Tourer",
    price: "€950",
    image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=2564&auto=format&fit=crop",
    specs: {
      power: "659 HP",
      speed: "333 km/h",
      acceleration: "3.6s",
    },
  },
]

const categories = ["All", "Supercar", "Grand Tourer", "Sports Car", "Ultra Luxury"]

export function Fleet() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredCars = activeCategory === "All" 
    ? cars 
    : cars.filter(car => car.category === activeCategory)

  return (
    <section id="fleet" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Our Collection
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
            Exceptional Vehicles for Exceptional Journeys
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Curated selection of the world&apos;s most prestigious automobiles, each meticulously maintained and ready to deliver an unforgettable driving experience.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div key={car.id} className="group bg-card border border-border overflow-hidden hover:shadow-xl transition-shadow">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${car.image}')` }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gold text-primary text-xs font-medium px-3 py-1">
                    {car.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-card-foreground mb-2">{car.name}</h3>
                
                {/* Specs */}
                <div className="flex gap-6 mb-4 text-sm text-muted-foreground">
                  <div>
                    <span className="block text-xs uppercase tracking-wider">Power</span>
                    <span className="font-medium text-foreground">{car.specs.power}</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider">Top Speed</span>
                    <span className="font-medium text-foreground">{car.specs.speed}</span>
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider">0-100</span>
                    <span className="font-medium text-foreground">{car.specs.acceleration}</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-xs text-muted-foreground">From</span>
                    <p className="font-serif text-2xl text-gold">{car.price}<span className="text-sm text-muted-foreground">/day</span></p>
                  </div>
                  <Link 
                    href="#booking"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-gold transition-colors"
                  >
                    Reserve
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
