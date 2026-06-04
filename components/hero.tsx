"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

const CarScene = dynamic(() => import("./car-scene").then(mod => ({ default: mod.CarScene })), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-primary" />
  )
})

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background Scene */}
      <CarScene />
      
      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-24 z-20">
        <div className="max-w-2xl">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Premium French Experience
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-primary-foreground leading-tight mb-6 text-balance">
            Discover Italy in Unparalleled Luxury
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
            From the winding roads of the Amalfi Coast to the historic streets of Rome, experience Italy behind the wheel of the world&apos;s most prestigious automobiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#fleet"
              className="inline-flex items-center justify-center gap-2 bg-gold text-primary px-8 py-4 font-medium hover:bg-gold/90 transition-colors"
            >
              Explore Our Fleet
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="#booking"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 font-medium hover:bg-primary-foreground/10 transition-colors backdrop-blur-sm"
            >
              Book Your Journey
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-12 mt-16 pt-8 border-t border-primary-foreground/20">
            <div>
              <p className="font-serif text-4xl text-gold">50+</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Luxury Vehicles</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-gold">15+</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Italian Locations</p>
            </div>
            <div>
              <p className="font-serif text-4xl text-gold">10k+</p>
              <p className="text-primary-foreground/70 text-sm mt-1">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
