import { useScrollReveal } from "@/components/useScrollReveal";
import { Target, Award, Users } from "lucide-react";

const highlights = [
  { icon: Target, title: "Our Mission", desc: "Providing accessible, high-quality dental care for every patient in a comfortable environment." },
  { icon: Award, title: "15+ Years Experience", desc: "A proven track record of excellence in dental treatments and patient satisfaction." },
  { icon: Users, title: "Patient-First", desc: "Your comfort and health are always our top priority from consultation to recovery." },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "10K+", label: "Happy Patients" },
  { value: "8", label: "Expert Doctors" },
  { value: "20+", label: "Awards Won" },
];

export default function AboutSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-20 bg-background">
      <div ref={ref} className={`container mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wide">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Your Trusted Dental Partner</h2>
          <p className="text-muted-foreground">We combine modern technology with compassionate care to deliver the best dental experience for you and your family.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {highlights.map((h) => (
            <div key={h.title} className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <h.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
