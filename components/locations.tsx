import { MapPin } from "lucide-react"

const locations = [
  {
    city: "Milano",
    address: "Via Monte Napoleone, 8",
    image: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?q=80&w=2670&auto=format&fit=crop",
  },
  {
    city: "Roma",
    address: "Via Veneto, 125",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2696&auto=format&fit=crop",
  },
  {
    city: "Firenze",
    address: "Piazza della Signoria, 5",
    image: "https://images.unsplash.com/photo-1543429257-3eb0b65d9c58?q=80&w=2670&auto=format&fit=crop",
  },
  {
    city: "Venezia",
    address: "Piazzale Roma, 496",
    image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=2670&auto=format&fit=crop",
  },
]

export function Locations() {
  return (
    <section id="locations" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Our Presence
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
            Strategically Located Across Italy
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            With premium showrooms in Italy&apos;s most iconic cities, your dream car is always within reach.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location) => (
            <div key={location.city} className="group relative h-80 overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${location.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl text-primary-foreground mb-2">{location.city}</h3>
                <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                  <MapPin className="w-4 h-4" />
                  {location.address}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
