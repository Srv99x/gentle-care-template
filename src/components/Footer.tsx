const quickLinks = ["About", "Services", "Doctors", "Testimonials", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-3">🦷 DentCare</h3>
            <p className="text-sm opacity-70">Professional dental care for the whole family. Your smile is our priority.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-sm opacity-70 hover:opacity-100 transition-opacity">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Follow Us</h4>
            <div className="flex gap-3">
              {["Facebook", "Instagram", "Twitter"].map((s) => (
                <a key={s} href="#" className="text-sm opacity-70 hover:opacity-100 transition-opacity">{s}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 pt-6 text-center">
          <p className="text-xs opacity-60">© {new Date().getFullYear()} DentCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
