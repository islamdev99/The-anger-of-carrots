import { PixelBorder } from "@/components/ui/pixel-border";

const TrailerSection = () => {
  return (
    <section id="trailer" className="py-16 bg-[#3D2B1F] relative">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-pixel text-3xl text-[#FF6B00] mb-12">تريلر اللعبة</h2>
        <div className="max-w-4xl mx-auto overflow-hidden rounded-lg">
          <PixelBorder>
            {/* YouTube iframe */}
            <div className="relative pb-[56.25%] h-0">
              <iframe 
                className="absolute top-0 left-0 w-full h-full" 
                src="https://www.youtube.com/embed/VoAwI7hFr6I" 
                title="The Anger of Carrots - Official Trailer" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </PixelBorder>
        </div>
      </div>
    </section>
  );
};

export default TrailerSection;
