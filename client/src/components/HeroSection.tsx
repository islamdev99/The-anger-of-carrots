import { PixelButton } from "@/components/ui/pixel-button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pixel-bg" style={{ backgroundColor: "#FF6B00" }}>
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1608010986688-f0872a9220f0?auto=format&fit=crop&q=80&w=1000')] bg-repeat bg-[length:200px_200px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 text-center md:text-right mb-8 md:mb-0">
          <h1 className="font-pixel text-4xl md:text-5xl mb-6 text-white leading-tight">
            <span className="block">غضب الجزر</span>
            <span className="block text-[#FFF8E1] mt-2">THE ANGER OF CARROTS</span>
          </h1>
          <p className="arabic-text text-xl mb-8 text-white">مغامرة جديدة في عالم الجزر! اختبر قدراتك في مواجهة خصومك واستعد للتحدي الكبير في لعبة بيكسل آرت مميزة!</p>
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 rtl:space-x-reverse">
            <PixelButton 
              variant="secondary" 
              href="#download"
              className="mb-4"
            >
              تحميل اللعبة
            </PixelButton>
            <PixelButton 
              variant="light" 
              href="#trailer"
              className="mb-4"
            >
              شاهد التريلر
            </PixelButton>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="float-animation">
            <div className="pixel-border rounded-lg overflow-hidden">
              <img 
                src="https://i.postimg.cc/52LdnSzD/the-anger-of-carrot-3.png" 
                alt="The Anger of Carrots Game" 
                className="max-w-full h-auto shadow-2xl rounded-lg"
              />
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 animate-bounce">
            <img 
              src="https://i.postimg.cc/wMtMWJhb/messi-2.png" 
              alt="Carrot Character" 
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
