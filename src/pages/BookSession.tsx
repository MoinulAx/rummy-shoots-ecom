
import { ArrowLeft, Calendar, Camera, Clock, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const BookSession = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Artistic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-800">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Artistic geometric patterns */}
        <div className="absolute top-16 right-16 w-32 h-32 border border-white/10 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 border border-purple-300/20 rotate-12 animate-bounce"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
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
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-purple-500/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-blue-600/20 via-transparent to-transparent"></div>
        
        {/* Additional gradient overlay for content readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/10 to-blue-50/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-8">
        <Button 
          onClick={handleBackClick}
          variant="outline"
          className="mb-8 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 shadow-2xl">
              <Calendar className="w-8 h-8 text-white drop-shadow-lg" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
              Book Your Session
            </h1>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto drop-shadow-lg">
              Ready to capture your special moments? Choose your session type and get in touch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Camera className="w-5 h-5 mr-2" />
                  Session Types
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-purple-400 pl-4">
                  <h3 className="font-semibold text-white">Portrait Sessions</h3>
                  <p className="text-purple-100">Individual, couple, family, and corporate headshots</p>
                  <p className="text-sm text-purple-200">Starting at $300</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h3 className="font-semibold text-white">Wedding Photography</h3>
                  <p className="text-purple-100">Complete wedding day coverage</p>
                  <p className="text-sm text-purple-200">Starting at $1,200</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <h3 className="font-semibold text-white">Event Photography</h3>
                  <p className="text-purple-100">Corporate events and special celebrations</p>
                  <p className="text-sm text-purple-200">Starting at $500</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <p className="text-purple-100">Consultation to discuss your vision and requirements</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <p className="text-purple-100">Professional photography session at your preferred location</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <p className="text-purple-100">Expert editing and post-processing</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <p className="text-purple-100">Digital gallery with high-resolution images</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-purple-900/90 to-blue-900/90 text-white backdrop-blur-sm border-white/20 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">Ready to Book?</CardTitle>
              <CardDescription className="text-purple-100">
                Contact me to discuss your session and check availability
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6 text-center">
                <div className="space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-purple-500/80 rounded-full backdrop-blur-sm">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Call Me</h3>
                    <p className="text-purple-100">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-purple-500/80 rounded-full backdrop-blur-sm">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email Me</h3>
                    <p className="text-purple-100">hello@rummyshoots.com</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-white text-purple-900 hover:bg-purple-50 font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookSession;
