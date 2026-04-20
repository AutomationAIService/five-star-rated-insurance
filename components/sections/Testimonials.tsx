import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const TESTIMONIALS = [
  {
    headline: "Constant Protection From Rate Hikes",
    name: "Kat Palmer",
    location: "Verified Google Review",
    rating: 5,
    text: "I know this company to be a watch dog for my insurance needs and rates. I feel comfortable with their evaluation of the companies they obtain quotes from and know that I am protected well. They notify me, not the other way around, when rates have increased and have already investigated other options.",
  },
  {
    headline: "Solved My Insurance Concerns Immediately",
    name: "Layton Holcombe",
    location: "Verified Google Review",
    rating: 5,
    text: "Asked for assistance when hit with an enormous, surprise increase in home insurance rates. Ryan's team at Protegrity immediately solved my concerns with a solution that surpassed my expectations!",
  },
  {
    headline: "A Seamless Process And Incredible Deal",
    name: "Sarah Pelton",
    location: "Verified Google Review",
    rating: 5,
    text: "Michael made the entire process of getting insurance seamless and got me an incredible deal. Amazing group of people to work with, highly recommend!",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-navy/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mb-4 text-balance">
            Rated 5.0 Stars From 465+ Google Reviews
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from Protegrity Insurance Brokerage clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={index} className="bg-surface border-border">
              <CardContent className="pt-6">
                <div className="relative mb-4">
                  <Quote
                    className="absolute right-0 top-0 h-7 w-7 text-gold/25 pointer-events-none"
                    aria-hidden
                  />
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground pr-10 text-balance leading-tight mb-2">
                    {testimonial.headline}
                  </h3>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                </div>

                <p className="text-foreground mb-6 leading-relaxed">
                  {testimonial.text}
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-sm text-gray-500 text-center mt-8">
          All reviews sourced from Protegrity Insurance Brokerage's Google Business Profile
        </p>
      </div>
    </section>
  )
}
