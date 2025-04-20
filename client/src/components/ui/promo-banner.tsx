import React, { useState, useEffect } from 'react';

interface PromoBannerProps {
  className?: string;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ className = "" }) => {
  const [isVisible, setIsVisible] = useState(true);
  
  // Array of promotional messages
  const messages = [
    "النسخة التجريبية قادمة قريبًا! سجل اهتمامك الآن",
    "متوفر قريبًا على itch.io و GameJolt",
    "اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات",
    "تم تطويرها بمحرك GDevelop الرائع"
  ];
  
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  useEffect(() => {
    // Change the message every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, [messages.length]);
  
  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 bg-[#E65100] text-white py-2 px-4 ${className}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="inline-block h-2 w-2 rounded-full bg-white animate-pulse mr-2"></span>
          <p className="arabic-text text-sm font-medium">{messages[currentMessageIndex]}</p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 text-white hover:text-[#1A120B] transition-colors text-sm"
          aria-label="إغلاق"
        >
          ✕
        </button>
      </div>
    </div>
  );
};