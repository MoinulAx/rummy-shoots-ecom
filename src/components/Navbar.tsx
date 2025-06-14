
import { useState } from 'react';
import { Camera, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { ThemeToggle } from '@/components/ThemeToggle';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Portrait', path: '/portrait-portfolio' },
    { name: 'Wedding', path: '/wedding-portfolio' },
    { name: 'Events', path: '/event-portfolio' },
    { name: 'Outdoor', path: '/outdoor-portfolio' },
    { name: 'Contact', path: '/#contact' },
    { name: 'Book Session', path: '/book-session' },
  ];

  const handleNavigation = (path: string) => {
    if (path === '/#contact') {
      // If we're on the home page, scroll to contact section
      if (location.pathname === '/') {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
          contactElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If we're on another page, navigate to home and then scroll
        navigate('/');
        setTimeout(() => {
          const contactElement = document.getElementById('contact');
          if (contactElement) {
            contactElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/#contact') {
      return false; // Contact is a section, not a separate page
    }
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => handleNavigation('/')}
          >
            <Camera className="w-8 h-8 text-purple-600 mr-2" />
            <span className="text-xl font-bold text-slate-900 dark:text-white">Rummy Shoots</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                  isActive(item.path) 
                    ? 'text-purple-600 border-b-2 border-purple-600 pb-1' 
                    : 'text-slate-700 dark:text-slate-200'
                }`}
              >
                {item.name}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <Camera className="w-6 h-6 text-purple-600 mr-2" />
                      <span className="text-lg font-bold text-slate-900 dark:text-white">Rummy Shoots</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="w-6 h-6" />
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {navItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavigation(item.path)}
                        className={`block w-full text-left py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                          isActive(item.path)
                            ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                            : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};
