
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PortraitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortraitModal = ({ isOpen, onClose }: PortraitModalProps) => {
  const navigate = useNavigate();

  const handlePortfolioClick = () => {
    navigate('/portrait-portfolio');
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
          <DialogTitle className="text-2xl text-purple-900">Portrait Photography</DialogTitle>
          <DialogDescription>
            Professional portrait photography sessions
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Professional portrait session"
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="text-gray-600">
            Professional portrait photography sessions that capture your personality and style. 
            Perfect for headshots, family portraits, and personal branding.
          </p>
          <div className="flex gap-4">
            <Button 
              onClick={handlePortfolioClick}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Portrait Portfolio
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
