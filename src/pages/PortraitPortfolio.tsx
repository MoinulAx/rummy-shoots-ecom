
import { ArrowLeft, Camera, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Navbar } from "@/components/Navbar";

const PortraitPortfolio = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleBackClick = () => {
    navigate('/');
  };

  const portraitImages = [
    {
      src: "public/imgs/c46d26c2-e6d1-4e2f-8292-72d52eeda405.png",
      alt: "Creative portrait with feathers",
      title: "Artistic Expression"
    },
    {
      src: "public/imgs/32a17cc2-c2e6-425c-885c-106fb0be22d7.png",
      alt: "Portrait with blue turban and glitter",
      title: "Cultural Beauty"
    },
    {
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Creative portrait",
      title: "Creative Vision"
    }
  ];

  const handleBookSession = () => {
    navigate('/book-session');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navbar />
      <div className="pt-16">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Button 
            onClick={handleBackClick}
            variant="outline"
            className="mb-8 hover:bg-purple-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <div className="text-center mb-12">
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-600 rounded-full">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
              Portrait Portfolio
            </h1>
            <p className="text-lg text-purple-600 max-w-2xl mx-auto mb-8">
              Professional portrait photography that captures your personality and style. 
              Perfect for headshots, personal branding, and memorable portraits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
            {/* Two images stacked on the left */}
            <div className="grid grid-rows-2 gap-4">
              {portraitImages.slice(0, 2).map((image, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-40 md:h-56"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="relative h-full overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent flex items-end">
                      <div className="p-4 text-white w-full">
                        <h3 className="text-sm md:text-lg font-bold">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Large image taking up right side - matching height of two small images */}
            <div 
              className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-80 md:h-116"
              onClick={() => setSelectedImage(portraitImages[2].src)}
            >
              <div className="relative h-full overflow-hidden">
                <img
                  src={portraitImages[2].src}
                  alt={portraitImages[2].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent flex items-end">
                  <div className="p-6 text-white w-full">
                    <h3 className="text-xl font-bold">{portraitImages[2].title}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-2xl mx-auto shadow-lg">
              <h2 className="text-xl md:text-2xl font-bold text-purple-900 mb-4">Ready for Your Portrait Session?</h2>
              <p className="text-purple-600 mb-6 text-sm md:text-base">
                Book your professional portrait session today and capture your best self with expert lighting and composition.
              </p>
              <Button 
                onClick={handleBookSession}
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-semibold px-6 md:px-8 py-2 md:py-3 text-base md:text-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Portrait Session
              </Button>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-4 bg-black/90 border-0 [&>button]:hidden">
            <div className="relative flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Portrait photo"
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <Button
                onClick={() => setSelectedImage(null)}
                variant="outline"
                size="icon"
                className="absolute top-2 right-2 bg-white/90 hover:bg-white text-black"
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

export default PortraitPortfolio;
