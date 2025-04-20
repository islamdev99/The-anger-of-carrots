import React from 'react';

interface SocialSidebarProps {
  className?: string;
}

export const SocialSidebar: React.FC<SocialSidebarProps> = ({ className = "" }) => {
  return (
    <div className={`fixed right-4 top-1/2 -translate-y-1/2 z-40 ${className}`}>
      <div className="flex flex-col space-y-3">
        <a 
          href="https://carrot-co.odoo.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-auto px-3 py-2 bg-[#1A120B]/80 backdrop-blur-md border border-[#E65100] rounded-lg flex items-center justify-center text-white hover:bg-[#E65100] transition-colors duration-300"
          aria-label="الموقع الرسمي"
        >
          <span className="font-cairo text-sm whitespace-nowrap">carrot-co.com</span>
        </a>
      </div>
    </div>
  );
};