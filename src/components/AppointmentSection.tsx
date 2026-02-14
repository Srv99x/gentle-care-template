import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/components/useScrollReveal";
import { useToast } from "@/hooks/use-toast";

export default function AppointmentSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState<Date>();
  const [service, setService] = useState("");
  const { toast } = useToast();
  const { ref, visible } = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Appointment Requested!", description: `Thank you ${name}, we'll confirm your booking soon.` });
    setName(""); setPhone(""); setDate(undefined); setService("");
  };

  return (
    <section id="appointment" className="py-20 bg-background">
      <div ref={ref} className={`container mx-auto px-4 max-w-xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="text-center mb-8">
          <span className="text-primary text-sm font-semibold uppercase tracking-wide">Book Now</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Schedule an Appointment</h2>
          <p className="text-muted-foreground">Fill in the form below and we'll get back to you shortly.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4 shadow-sm">
          <Input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required className="rounded-xl" />
          <Input placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required className="rounded-xl" />

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className={cn("w-full justify-start text-left font-normal rounded-xl", !date && "text-muted-foreground")}>
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Select Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={date} onSelect={setDate} disabled={(d) => d < new Date()} initialFocus className="p-3 pointer-events-auto" />
            </PopoverContent>
          </Popover>

          <Select value={service} onValueChange={setService}>
            <SelectTrigger className="rounded-xl">
              <SelectValue placeholder="Select Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="checkup">General Checkup</SelectItem>
              <SelectItem value="cleaning">Teeth Cleaning</SelectItem>
              <SelectItem value="implants">Dental Implants</SelectItem>
              <SelectItem value="orthodontics">Orthodontics</SelectItem>
              <SelectItem value="emergency">Emergency Care</SelectItem>
            </SelectContent>
          </Select>

          <Button type="submit" className="w-full rounded-xl" size="lg">
            <CheckCircle className="mr-2 h-4 w-4" /> Request Appointment
          </Button>
        </form>
      </div>
    </section>
  );
}
