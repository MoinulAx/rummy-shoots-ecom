
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface WeddingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WeddingModal = ({ isOpen, onClose }: WeddingModalProps) => {
  const navigate = useNavigate();

  const handlePortfolioClick = () => {
    navigate('/wedding-portfolio');
    onClose();
  };

  const handleBookSession = () => {
    navigate('/book-session');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-purple-900">Wedding Photography</DialogTitle>
          <DialogDescription>
            Beautiful wedding photography services for your special day
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <img
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Wedding photography"
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="text-gray-600">
            Capture your special day with beautiful, timeless wedding photography. 
            From intimate ceremonies to grand celebrations, we'll preserve every precious moment.
          </p>
          <div className="flex gap-4">
            <Button 
              onClick={handlePortfolioClick}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Wedding Portfolio
            </Button>
            <Button 
              variant="outline" 
              onClick={handleBookSession}
            >
              Book Wedding
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
