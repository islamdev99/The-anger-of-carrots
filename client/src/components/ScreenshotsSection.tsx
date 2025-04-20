import { PixelBorder } from "@/components/ui/pixel-border";

// Import local images
import screenshot1 from "@assets/bandicam_2025-03-24_22-13-59-998.webp";
import screenshot2 from "@assets/bandicam_2025-03-25_23-13-20-686.webp";
import screenshot3 from "@assets/bandicam_2025-03-25_23-13-52-889.webp";
import screenshot4 from "@assets/Sans_titre_485_20250324213200.webp";
import screenshot5 from "@assets/the anger of carrot (3).png";
import screenshot6 from "@assets/9395bd4a-df96-442c-8bbb-9dafde420341.png";

const ScreenshotsSection = () => {
  const screenshots = [
    {
      src: screenshot1,
      alt: "Game Screenshot - Landscape"
    },
    {
      src: screenshot2,
      alt: "Game Screenshot - Gas Station"
    },
    {
      src: screenshot3,
      alt: "Game Screenshot - Building"
    },
    {
      src: screenshot4,
      alt: "Game Screenshot - Characters"
    },
    {
      src: screenshot5,
      alt: "Game Screenshot - Logo"
    },
    {
      src: screenshot6,
      alt: "Game Screenshot - Characters Fighting"
    }
  ];

  return (
    <section id="screenshots" className="py-16 bg-[#3D2B1F]">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-pixel text-3xl text-[#FF6B00] mb-12">لقطات من اللعبة</h2>
        
        {/* Screenshot Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="transition-transform hover:scale-105 duration-300">
              <PixelBorder>
                <img 
                  src={screenshot.src} 
                  alt={screenshot.alt} 
                  className="w-full h-auto"
                  loading={index > 2 ? "lazy" : "eager"}
                />
              </PixelBorder>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
