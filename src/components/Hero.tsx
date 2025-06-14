
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden">
      {/* Artistic Background - same as BookSession */}
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
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 bg-white/10 dark:bg-white/20 rounded-full backdrop-blur-sm border border-white/20 dark:border-white/30 shadow-2xl">
          <Camera className="w-10 h-10 text-purple-400 dark:text-purple-300 drop-shadow-lg" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 dark:from-white dark:via-purple-100 dark:to-blue-100 bg-clip-text text-transparent drop-shadow-2xl">
          Rummy Shoots
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-purple-100 dark:text-purple-50 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
          Professional Photography Services - Capturing Your Most Important Moments
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToServices}
            size="lg" 
            className="bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl backdrop-blur-sm"
          >
            View Services
          </Button>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl backdrop-blur-sm"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};
