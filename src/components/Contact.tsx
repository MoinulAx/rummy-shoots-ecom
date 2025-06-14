
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();

  const handleBookSession = () => {
    navigate('/book-session');
  };

  return (
    <section id="contact" className="relative py-20 text-white overflow-hidden">
      {/* Artistic Background - same as Hero and BookSession */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-800 dark:from-purple-950 dark:via-blue-950 dark:to-indigo-900">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-400/10 dark:bg-indigo-300/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Artistic geometric patterns */}
        <div className="absolute top-16 right-16 w-32 h-32 border border-white/10 dark:border-white/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 border border-purple-300/20 dark:border-purple-200/30 rotate-12 animate-bounce"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 dark:bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Radial gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-purple-500/20 dark:from-purple-400/30 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-blue-600/20 dark:from-blue-500/30 via-transparent to-transparent"></div>
        
        {/* Additional gradient overlay for content readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/10 dark:from-purple-50/20 to-blue-50/10 dark:to-blue-50/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 dark:from-white dark:to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
            Let's Capture Your Moments
          </h2>
          <p className="text-xl text-purple-100 dark:text-purple-50 max-w-2xl mx-auto drop-shadow-lg">
            Ready to book your photography session? Get in touch and let's discuss your vision.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border-white/20 dark:border-white/10 text-white shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
              <CardDescription className="text-purple-100 dark:text-purple-50">
                Reach out to discuss your photography needs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/80 dark:bg-purple-600/80 rounded-full backdrop-blur-sm shadow-xl">
                    <Phone className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-purple-100 dark:text-purple-50">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/80 dark:bg-purple-600/80 rounded-full backdrop-blur-sm shadow-xl">
                    <Mail className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-purple-100 dark:text-purple-50">hello@rummyshoots.com</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/80 dark:bg-purple-600/80 rounded-full backdrop-blur-sm shadow-xl">
                    <MapPin className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Location</h3>
                    <p className="text-purple-100 dark:text-purple-50">Your City, State</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center pt-8 border-t border-white/20 dark:border-white/10">
                <Button 
                  onClick={handleBookSession}
                  size="lg"
                  className="bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl backdrop-blur-sm"
                >
                  Book Your Session Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
