import { PixelBorder } from "@/components/ui/pixel-border";

const ScreenshotsSection = () => {
  const screenshots = [
    {
      src: "https://i.postimg.cc/Xv4TBGHL/bandicam-2025-03-24-22-13-59-998.webp",
      alt: "Game Screenshot - Landscape"
    },
    {
      src: "https://i.postimg.cc/BnH0hh2D/bandicam-2025-03-25-23-13-20-686.webp",
      alt: "Game Screenshot - Gas Station"
    },
    {
      src: "https://i.postimg.cc/6pGCc19j/bandicam-2025-03-25-23-13-52-889.webp",
      alt: "Game Screenshot - Building"
    },
    {
      src: "https://i.postimg.cc/mrBsJJ5Z/Sans-titre-485-20250324213200.webp",
      alt: "Game Screenshot - Characters"
    },
    {
      src: "https://i.postimg.cc/52LdnSzD/the-anger-of-carrot-3.png",
      alt: "Game Screenshot - Logo"
    },
    {
      src: "https://i.postimg.cc/cCxvTdBW/9395bd4a-df96-442c-8bbb-9dafde420341.png",
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
