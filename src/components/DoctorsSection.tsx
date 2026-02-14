import { useScrollReveal } from "@/components/useScrollReveal";
import { User } from "lucide-react";

const doctors = [
  { name: "Dr. Sarah Johnson", role: "General Dentist", exp: "12 Years" },
  { name: "Dr. Michael Chen", role: "Orthodontist", exp: "10 Years" },
  { name: "Dr. Emily Davis", role: "Oral Surgeon", exp: "15 Years" },
  { name: "Dr. James Wilson", role: "Periodontist", exp: "8 Years" },
];

export default function DoctorsSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="doctors" className="py-20 bg-background">
      <div ref={ref} className={`container mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wide">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Meet Our Doctors</h2>
          <p className="text-muted-foreground">Experienced professionals dedicated to your dental health and comfort.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((d) => (
            <div key={d.name} className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow group">
              <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                <User className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground">{d.name}</h3>
              <p className="text-sm text-primary mt-1">{d.role}</p>
              <p className="text-xs text-muted-foreground mt-1">{d.exp} Experience</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
