import React from 'react';
import { PixelBorder } from './pixel-border';
import carotRunImage from "@assets/carot (7) RUN.png";

export const LogoCorner: React.FC = () => {
  return (
    <div className="fixed top-4 right-4 z-40">
      <PixelBorder className="p-0.5 bg-[#E65100]/20">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-[#1A120B]/80 backdrop-blur-md flex items-center justify-center p-1 rounded-sm">
          <img 
            src={carotRunImage} 
            alt="Carrot Studio" 
            className="w-full h-full object-contain" 
          />
        </div>
      </PixelBorder>
    </div>
  );
};