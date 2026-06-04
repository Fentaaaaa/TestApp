import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alessandro Rossi",
    role: "Business Executive",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
    text: "An absolutely flawless experience from start to finish. The Ferrari was delivered to my hotel in perfect condition, and the concierge service was impeccable.",
    rating: 5,
  },
  {
    name: "Sophie Laurent",
    role: "Travel Blogger",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
    text: "Driving a Lamborghini along the Amalfi Coast was a dream come true. Lusso Auto Italia made it happen with exceptional professionalism.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop",
    text: "The attention to detail is remarkable. From the car selection process to the flexible pickup options, everything exceeded my expectations.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Client Stories
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
            Trusted by Discerning Travelers
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-card p-8 border border-border">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed mb-8">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${testimonial.image}')` }}
                />
                <div>
                  <p className="font-medium text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
