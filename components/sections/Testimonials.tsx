import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const TESTIMONIALS = [
  {
    name: "{{TESTIMONIAL_1_NAME_PLACEHOLDER}}",
    location: "{{TESTIMONIAL_1_LOCATION_PLACEHOLDER}}",
    rating: 5,
    text: "{{TESTIMONIAL_1_TEXT_PLACEHOLDER}}",
    insuranceType: "Auto Insurance",
  },
  {
    name: "{{TESTIMONIAL_2_NAME_PLACEHOLDER}}",
    location: "{{TESTIMONIAL_2_LOCATION_PLACEHOLDER}}",
    rating: 5,
    text: "{{TESTIMONIAL_2_TEXT_PLACEHOLDER}}",
    insuranceType: "Home Insurance",
  },
  {
    name: "{{TESTIMONIAL_3_NAME_PLACEHOLDER}}",
    location: "{{TESTIMONIAL_3_LOCATION_PLACEHOLDER}}",
    rating: 5,
    text: "{{TESTIMONIAL_3_TEXT_PLACEHOLDER}}",
    insuranceType: "Life Insurance",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-navy/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mb-4 text-balance">
            {"{{TESTIMONIALS_HEADLINE_PLACEHOLDER}}"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {"{{TESTIMONIALS_SUBHEADLINE_PLACEHOLDER}}"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={index} className="bg-surface border-border">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-gold/40 mb-4" />
                
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-foreground mb-6 leading-relaxed">
                  {testimonial.text}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <span className="text-xs bg-navy/10 text-navy px-2 py-1 rounded-full">
                    {testimonial.insuranceType}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
