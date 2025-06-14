
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface OutdoorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OutdoorModal = ({ isOpen, onClose }: OutdoorModalProps) => {
  const navigate = useNavigate();

  const handlePortfolioClick = () => {
    navigate('/outdoor-portfolio');
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
          <DialogTitle className="text-2xl text-purple-900">Outdoor Photography</DialogTitle>
          <DialogDescription>
            Beautiful outdoor photography in natural settings
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Outdoor photography"
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="text-gray-600">
            Beautiful outdoor photography sessions in natural settings. 
            Perfect for engagement photos, family sessions, and lifestyle photography.
          </p>
          <div className="flex gap-4">
            <Button 
              onClick={handlePortfolioClick}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Outdoor Portfolio
            </Button>
            <Button 
              variant="outline" 
              onClick={handleBookSession}
            >
              Book Session
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
