
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import BookSession from "./pages/BookSession";
import PortraitPortfolio from "./pages/PortraitPortfolio";
import WeddingPortfolio from "./pages/WeddingPortfolio";
import EventPortfolio from "./pages/EventPortfolio";
import OutdoorPortfolio from "./pages/OutdoorPortfolio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/book-session" element={<BookSession />} />
            <Route path="/portrait-portfolio" element={<PortraitPortfolio />} />
            <Route path="/wedding-portfolio" element={<WeddingPortfolio />} />
            <Route path="/event-portfolio" element={<EventPortfolio />} />
            <Route path="/outdoor-portfolio" element={<OutdoorPortfolio />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
