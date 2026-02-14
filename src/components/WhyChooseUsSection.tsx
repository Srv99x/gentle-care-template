import { useScrollReveal } from "@/components/useScrollReveal";
import { Monitor, GraduationCap, DollarSign, Smile } from "lucide-react";

const reasons = [
  { icon: Monitor, title: "Modern Equipment", desc: "State-of-the-art technology for precise diagnostics and comfortable treatments." },
  { icon: GraduationCap, title: "Experienced Doctors", desc: "Board-certified specialists with decades of combined dental expertise." },
  { icon: DollarSign, title: "Affordable Care", desc: "Transparent pricing and flexible payment plans to fit every budget." },
  { icon: Smile, title: "Friendly Environment", desc: "A warm, welcoming clinic designed to put patients of all ages at ease." },
];

export default function WhyChooseUsSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20 bg-secondary/30">
      <div ref={ref} className={`container mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wide">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">The DentCare Difference</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <r.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
