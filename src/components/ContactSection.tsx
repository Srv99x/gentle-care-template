import { useScrollReveal } from "@/components/useScrollReveal";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const info = [
  { icon: MapPin, label: "Address", value: "123 Dental Street, Medical City, HC 12345" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: Mail, label: "Email", value: "hello@dentcare.com" },
  { icon: Clock, label: "Hours", value: "Mon – Sat: 9 AM – 6 PM" },
];

export default function ContactSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="contact" className="py-20 bg-background">
      <div ref={ref} className={`container mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wide">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Get In Touch</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {info.map((i) => (
              <div key={i.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <i.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{i.label}</p>
                  <p className="text-muted-foreground text-sm">{i.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="rounded-2xl bg-secondary/60 border border-border flex items-center justify-center min-h-[280px]">
            <div className="text-center text-muted-foreground">
              <MapPin className="w-10 h-10 mx-auto mb-2 opacity-40" />
              <p className="text-sm">Google Maps Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
