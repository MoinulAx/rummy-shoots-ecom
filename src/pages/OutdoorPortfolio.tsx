import { ArrowLeft, Camera, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Navbar } from "@/components/Navbar";

const OutdoorPortfolio = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleBackClick = () => {
    navigate('/');
  };

  const outdoorImages = [
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Nature Landscape",
      title: "Natural Beauty"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Mountain Adventure",
      title: "Mountain Adventure"
    },
    {
      src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Outdoor Portrait",
      title: "Natural Portraits"
    }
  ];

  const handleBookSession = () => {
    navigate('/book-session');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <Navbar />
      <div className="pt-16">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Button 
            onClick={handleBackClick}
            variant="outline"
            className="mb-8 hover:bg-green-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <div className="text-center mb-12">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Outdoor Portfolio
            </h1>
            <p className="text-lg text-green-600 max-w-2xl mx-auto mb-8">
              Breathtaking outdoor photography that captures the beauty of nature and adventure.
            </p>
          </div>

          <div className="flex gap-4 max-w-4xl mx-auto mb-12 h-96">
            {/* Large center image */}
            <div className="flex-1">
              <div 
                className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full"
                onClick={() => setSelectedImage(outdoorImages[0].src)}
              >
                <div className="relative h-full overflow-hidden">
                  <img
                    src={outdoorImages[0].src}
                    alt={outdoorImages[0].alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent flex items-end">
                    <div className="p-6 text-white w-full">
                      <h3 className="text-xl font-bold">{outdoorImages[0].title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Two smaller images stacked on the right */}
            <div className="flex-1 grid grid-rows-2 gap-4">
              {outdoorImages.slice(1).map((image, index) => (
                <div 
                  key={index + 1}
                  className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="relative h-full overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent flex items-end">
                      <div className="p-4 text-white w-full">
                        <h3 className="text-lg font-bold">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
              <h2 className="text-2xl font-bold text-green-900 mb-4">Natural Beauty Sessions</h2>
              <p className="text-green-600 mb-6">
                Experience the magic of outdoor photography in stunning natural settings and landscapes.
              </p>
              <Button 
                onClick={handleBookSession}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Outdoor Session
              </Button>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-transparent border-0">
            <div className="relative">
              <img
                src={selectedImage}
                alt="Outdoor photo"
                className="w-full h-full object-contain rounded-lg"
              />
              <Button
                onClick={() => setSelectedImage(null)}
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-white/90 hover:bg-white"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default OutdoorPortfolio;
