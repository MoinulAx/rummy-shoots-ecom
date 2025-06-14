
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EventModal = ({ isOpen, onClose }: EventModalProps) => {
  const navigate = useNavigate();

  const handlePortfolioClick = () => {
    navigate('/event-portfolio');
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
          <DialogTitle className="text-2xl text-purple-900">Event Photography</DialogTitle>
          <DialogDescription>
            Professional event photography for all your special occasions
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Event photography"
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="text-gray-600">
            Professional event photography for corporate events, parties, and special occasions. 
            We'll document your event with style and attention to detail.
          </p>
          <div className="flex gap-4">
            <Button 
              onClick={handlePortfolioClick}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Event Portfolio
            </Button>
            <Button 
              variant="outline" 
              onClick={handleBookSession}
            >
              Book Event
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
