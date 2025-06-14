
import { useState } from "react";
import { ExternalLink, Camera, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PortraitModal } from "./photography/PortraitModal";
import { WeddingModal } from "./photography/WeddingModal";
import { EventModal } from "./photography/EventModal";
import { OutdoorModal } from "./photography/OutdoorModal";
import { useNavigate } from "react-router-dom";

const portfolioImages = [
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Professional Portrait Session",
    title: "Professional Portrait",
    subtitle: "Headshots & Personal Branding",
    type: "portrait"
  },
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Wedding Photography",
    title: "Wedding Photography",
    subtitle: "Capturing Your Special Day",
    type: "wedding"
  },
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Event Photography",
    title: "Event Photography",
    subtitle: "Corporate & Special Events",
    type: "event"
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Outdoor Photography",
    title: "Outdoor Photography",
    subtitle: "Natural & Lifestyle Sessions",
    type: "outdoor"
  }
];

export const Photography = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const navigate = useNavigate();

  const handlePortfolioClick = () => {
    navigate('/portrait-portfolio');
  };

  const openModal = (type: string) => {
    console.log("Opening modal for type:", type);
    setActiveModal(type);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setActiveModal(null);
  };

  return (
    <section id="photography" className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-600 dark:from-purple-500 dark:to-blue-700 rounded-full">
            <Camera className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-900 dark:text-purple-100 mb-4">
            Our Photography
          </h2>
          <p className="text-lg md:text-xl text-purple-600 dark:text-purple-300 max-w-2xl mx-auto mb-8 px-4">
            Take a look at some of our recent work and captured moments. Click on any image to learn more!
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mb-8 md:mb-12">
          {portfolioImages.map((image, index) => (
            <div 
              key={index}
              className="group cursor-pointer overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onClick={() => openModal(image.type)}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90 mb-3">{image.subtitle}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Eye className="w-8 h-8 mx-auto mb-2" />
                    <span className="font-medium text-sm">Click to View Details</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={handlePortfolioClick}
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 dark:from-purple-600 dark:to-blue-700 dark:hover:from-purple-700 dark:hover:to-blue-800 text-white font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            <ExternalLink className="w-4 md:w-5 h-4 md:h-5 mr-2" />
            View Portrait Portfolio
          </Button>
        </div>
      </div>

      {/* Modals */}
      {activeModal === "portrait" && <PortraitModal isOpen={true} onClose={closeModal} />}
      {activeModal === "wedding" && <WeddingModal isOpen={true} onClose={closeModal} />}
      {activeModal === "event" && <EventModal isOpen={true} onClose={closeModal} />}
      {activeModal === "outdoor" && <OutdoorModal isOpen={true} onClose={closeModal} />}
    </section>
  );
};
