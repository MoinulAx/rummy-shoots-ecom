
import { ArrowLeft, Camera, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Navbar } from "@/components/Navbar";

const WeddingPortfolio = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleBackClick = () => {
    navigate('/');
  };

  const weddingImages = [
    {
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Romantic Wedding Ceremony",
      title: "Romantic Ceremony"
    },
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Wedding Reception",
      title: "Reception Celebration"
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Bridal Portrait",
      title: "Bridal Elegance"
    }
  ];

  const handleBookSession = () => {
    navigate('/book-session');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <Navbar />
      <div className="pt-16">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Button 
            onClick={handleBackClick}
            variant="outline"
            className="mb-8 hover:bg-rose-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <div className="text-center mb-12">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-600 rounded-full">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              Wedding Portfolio
            </h1>
            <p className="text-lg text-rose-600 max-w-2xl mx-auto mb-8">
              Capturing your most precious moments with timeless elegance and romantic beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-24">
            {/* Large image taking up left side - matching height of two small images */}
            <div 
              className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-64 md:h-116"
              onClick={() => setSelectedImage(weddingImages[0].src)}
            >
              <div className="relative h-full overflow-hidden">
                <img
                  src={weddingImages[0].src}
                  alt={weddingImages[0].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white w-full">
                    <h3 className="text-xl font-bold">{weddingImages[0].title}</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Two smaller images stacked on the right */}
            <div className="grid grid-rows-2 gap-4">
              {weddingImages.slice(1).map((image, index) => (
                <div 
                  key={index + 1}
                  className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-32 md:h-56"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="relative h-full overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 via-transparent to-transparent flex items-end">
                      <div className="p-4 text-white w-full">
                        <h3 className="text-sm md:text-lg font-bold">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-2xl mx-auto shadow-lg">
              <h2 className="text-xl md:text-2xl font-bold text-rose-900 mb-4">Book Your Dream Wedding</h2>
              <p className="text-rose-600 mb-6 text-sm md:text-base">
                Let us capture every magical moment of your special day with artistic vision and professional expertise.
              </p>
              <Button 
                onClick={handleBookSession}
                size="lg"
                className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold px-6 md:px-8 py-2 md:py-3 text-base md:text-lg transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
              >
                Book Wedding Photography
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
                alt="Wedding photo"
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

export default WeddingPortfolio;
