
import { Camera } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-6 md:mb-0">
            <Camera className="w-8 h-8 text-amber-400 dark:text-amber-300 mr-3" />
            <span className="text-2xl font-bold text-white">Rummy Shoots</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-slate-400 dark:text-slate-300 mb-2">
              Capturing moments, creating memories
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © 2024 Rummy Shoots. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 dark:border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 dark:text-slate-300">
            Professional photography services for weddings, portraits, and events
          </p>
        </div>
      </div>
    </footer>
  );
};
