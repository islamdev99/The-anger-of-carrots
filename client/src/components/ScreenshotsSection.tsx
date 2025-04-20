import { PixelBorder } from "@/components/ui/pixel-border";
import { useState } from 'react';

// Import local images
import screenshot1 from "@assets/bandicam_2025-03-24_22-13-59-998.webp";
import screenshot2 from "@assets/bandicam_2025-03-25_23-13-20-686.webp";
import screenshot3 from "@assets/bandicam_2025-03-25_23-13-52-889.webp";
import screenshot4 from "@assets/Sans_titre_485_20250324213200.webp";
import screenshot5 from "@assets/the anger of carrot (3).png";
import screenshot6 from "@assets/9395bd4a-df96-442c-8bbb-9dafde420341.png";
import islamImage from "@assets/Islam-Ibrahim1.webp";

const ScreenshotsSection = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  const screenshots = [
    {
      src: screenshot1,
      alt: "Game Screenshot - Landscape",
      caption: "عالم مليء بالمغامرات والتحديات"
    },
    {
      src: screenshot2,
      alt: "Game Screenshot - Gas Station",
      caption: "استكشف المدينة والمواقع المختلفة"
    },
    {
      src: screenshot3,
      alt: "Game Screenshot - Building",
      caption: "قم ببناء قدراتك القتالية"
    },
    {
      src: screenshot4,
      alt: "Game Screenshot - Characters",
      caption: "اختر شخصيتك المفضلة"
    },
    {
      src: screenshot5,
      alt: "Game Screenshot - Logo",
      caption: "غضب الجزر - مغامرة لا تنسى"
    },
    {
      src: screenshot6,
      alt: "Game Screenshot - Characters Fighting",
      caption: "معارك حماسية وملحمية"
    }
  ];

  const handleImageClick = (src: string) => {
    setActiveImage(src);
  };

  const closeModal = () => {
    setActiveImage(null);
  };

  return (
    <section id="screenshots" className="py-16 bg-[#1A120B] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 battle-damage opacity-5"></div>
      <div className="absolute inset-0 carrot-pattern opacity-5"></div>
      
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-[#E65100] z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="mb-12">
          <h2 className="text-center font-pixel text-4xl text-[#FF6B00] mb-4 title-glow">لقطات من اللعبة</h2>
          <p className="text-center arabic-text text-[#FFF8E1] max-w-2xl mx-auto">استكشف عالم غضب الجزر من خلال هذه اللقطات من اللعبة، واستعد للمعارك الملحمية والمغامرات المشوقة!</p>
        </div>
        
        {/* Screenshot Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index} 
              className="transform transition-all duration-300 hover:scale-105 hover:-rotate-1 battle-animation cursor-pointer"
              onClick={() => handleImageClick(screenshot.src)}
            >
              <div className="warrior-border bg-[#E65100]/10 p-2">
                <div className="relative overflow-hidden rounded-sm">
                  <img 
                    src={screenshot.src} 
                    alt={screenshot.alt} 
                    className="w-full h-64 object-cover"
                    loading={index > 2 ? "lazy" : "eager"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000]/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                    <p className="arabic-text text-sm font-bold text-right">{screenshot.caption}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Character decoration */}
        <div className="absolute bottom-0 left-10 w-32 h-32 opacity-50 hidden lg:block">
          <img 
            src={islamImage} 
            alt="Character" 
            className="w-full h-full object-contain" 
          />
        </div>
      </div>
      
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#E65100] z-10"></div>
      
      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-5xl max-h-[90vh]">
            <img 
              src={activeImage} 
              className="max-w-full max-h-[85vh] object-contain border-4 border-[#E65100]" 
              alt="Screenshot Fullsize" 
            />
            <button 
              className="absolute top-2 right-2 bg-[#E65100] text-white w-8 h-8 rounded-full font-bold"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ScreenshotsSection;
