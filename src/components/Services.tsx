
import { Camera, Heart, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    price: "Starting at $1,200",
    description: "Complete wedding day coverage with professional editing and digital gallery",
    features: ["8-10 hours coverage", "300+ edited photos", "Online gallery", "USB with high-res images"]
  },
  {
    icon: Users,
    title: "Portrait Sessions",
    price: "Starting at $300",
    description: "Professional portraits for individuals, families, couples, and corporate headshots",
    features: ["1-2 hour session", "25+ edited photos", "Multiple outfit changes", "Location of choice"]
  },
  {
    icon: Calendar,
    title: "Event Photography",
    price: "Starting at $500",
    description: "Corporate events, parties, graduations, and special celebrations",
    features: ["Event coverage", "100+ edited photos", "Same-day highlights", "Professional delivery"]
  }
];

export const Services = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 dark:text-purple-100 mb-4">
            Photography Services
          </h2>
          <p className="text-xl text-purple-600 dark:text-purple-300 max-w-2xl mx-auto">
            Professional photography packages designed to capture your special moments
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white dark:bg-slate-800"
            >
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-600 dark:from-purple-500 dark:to-blue-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-purple-900 dark:text-purple-100 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  {service.title}
                </CardTitle>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {service.price}
                </div>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <CardDescription className="text-purple-600 dark:text-purple-300 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-purple-500 dark:text-purple-400 flex items-center justify-center">
                      <span className="w-2 h-2 bg-purple-400 dark:bg-purple-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-semibold"
                >
                  Book This Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
