import { useScrollReveal } from "@/components/useScrollReveal";
import { Star, User } from "lucide-react";

const testimonials = [
  { name: "Anna Smith", rating: 5, quote: "The best dental experience I've ever had! The staff is incredibly professional and caring." },
  { name: "Robert Lee", rating: 5, quote: "I was nervous about my implant but Dr. Davis made it painless. Highly recommend DentCare!" },
  { name: "Maria Garcia", rating: 4, quote: "Clean facility, friendly team, and great results. My whole family comes here now." },
];

export default function TestimonialsSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div ref={ref} className={`container mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wide">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">What Patients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < t.rating ? "text-yellow-400 fill-yellow-400" : "text-border"}`} />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-4 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <User className="w-5 h-5 text-muted-foreground" />
                </div>
                <span className="font-medium text-foreground text-sm">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
