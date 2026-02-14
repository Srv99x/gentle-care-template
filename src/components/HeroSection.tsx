import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary/50 py-20 md:py-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left animate-fade-up">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            Welcome to DentCare
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
            Caring for Your <br className="hidden md:block" />
            <span className="text-primary">Healthy Smile</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto md:mx-0 mb-8">
            Professional dental care you can trust. We make your smile brighter with gentle, modern treatments.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Button asChild size="lg" className="rounded-full text-base">
              <a href="#appointment">Book Appointment</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full text-base">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>

        {/* Illustration placeholder */}
        <div className="flex-1 flex justify-center animate-fade-up-delay-2">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-lg">
            <Heart className="w-24 h-24 text-primary/40" strokeWidth={1} />
          </div>
        </div>
      </div>
    </section>
  );
}
