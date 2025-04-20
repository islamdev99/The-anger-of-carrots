import React from 'react';
import { YoutubeIcon, InstagramIcon, GithubIcon, TwitterIcon } from '@/assets/icons';

interface SocialSidebarProps {
  className?: string;
}

export const SocialSidebar: React.FC<SocialSidebarProps> = ({ className = "" }) => {
  const socialLinks = [
    {
      icon: <YoutubeIcon className="w-5 h-5" />,
      url: "https://youtube.com/@carrot-studio",
      label: "YouTube"
    },
    {
      icon: <InstagramIcon className="w-5 h-5" />,
      url: "https://instagram.com/carrot_studio",
      label: "Instagram"
    },
    {
      icon: <TwitterIcon className="w-5 h-5" />,
      url: "https://twitter.com/CarrotStudio",
      label: "Twitter"
    },
    {
      icon: <GithubIcon className="w-5 h-5" />,
      url: "https://github.com/carrot-studio",
      label: "GitHub"
    }
  ];

  return (
    <div className={`fixed right-4 top-1/2 -translate-y-1/2 z-40 ${className}`}>
      <div className="flex flex-col space-y-3">
        {socialLinks.map((link, index) => (
          <a 
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#1A120B]/80 backdrop-blur-md border border-[#E65100] rounded-full flex items-center justify-center text-white hover:bg-[#E65100] transition-colors duration-300"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};