
import { Camera } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 dark:bg-slate-950 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-amber-500 dark:bg-amber-600 rounded-xl">
                <Camera className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 dark:from-white dark:to-blue-100 bg-clip-text text-transparent">
                About Rummy Shoots
              </h2>
              
              <p className="text-lg text-slate-300 dark:text-slate-200 mb-6 leading-relaxed">
                With over a decade of experience in professional photography, Rummy Shoots specializes in 
                capturing the authentic emotions and genuine moments that make each story unique.
              </p>
              
              <p className="text-lg text-slate-300 dark:text-slate-200 mb-8 leading-relaxed">
                Our approach combines technical expertise with artistic vision, ensuring that every image 
                we create becomes a treasured memory that stands the test of time.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 dark:text-amber-300 mb-2">500+</div>
                  <div className="text-slate-400 dark:text-slate-300">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 dark:text-amber-300 mb-2">10+</div>
                  <div className="text-slate-400 dark:text-slate-300">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-700 p-1">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Photographer at work"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-500 dark:bg-amber-600 rounded-full blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
