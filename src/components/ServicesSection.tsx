import { useScrollReveal } from "@/components/useScrollReveal";
import { Stethoscope, Sparkles, Wrench, SmilePlus, Siren } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "General Checkup", desc: "Comprehensive oral examinations and preventive care for lasting dental health." },
  { icon: Sparkles, title: "Teeth Cleaning", desc: "Professional cleaning to remove plaque, tartar and stains for a brighter smile." },
  { icon: Wrench, title: "Dental Implants", desc: "Permanent tooth replacement solutions that look and feel completely natural." },
  { icon: SmilePlus, title: "Orthodontics", desc: "Braces and aligners to straighten teeth and correct bite for all ages." },
  { icon: Siren, title: "Emergency Care", desc: "Immediate dental treatment for urgent issues like pain, trauma and infections." },
];

export default function ServicesSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div ref={ref} className={`container mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wide">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">What We Offer</h2>
          <p className="text-muted-foreground">From routine checkups to advanced procedures, we provide a full range of dental services.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-4 transition-colors">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
