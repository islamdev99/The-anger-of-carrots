import { PixelButton } from "@/components/ui/pixel-button";
import gameLogo from "@assets/the anger of carrot (3).png";
import carrotChar from "@assets/messi (2).png";
import bgTexture from "@assets/صورة يوتيوب مصغرة جبال بحيرة سفر رخيص.png";
import nadhirImage from "@assets/3_20250308055924.webp";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pixel-bg" style={{ backgroundColor: "#E65100" }}>
      {/* Battle damage pattern */}
      <div className="absolute inset-0 battle-damage"></div>
      
      {/* Carrot pattern */}
      <div className="absolute inset-0 carrot-pattern"></div>
      
      {/* Background grid */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="w-full h-full bg-repeat bg-[length:200px_200px]" style={{ backgroundImage: `url(${bgTexture})` }}></div>
      </div>
      
      {/* Top border effect */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-[#1A120B] z-10"></div>
      
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 text-center md:text-right mb-8 md:mb-0">
          <h1 className="font-pixel text-4xl md:text-6xl mb-8 text-white leading-tight title-glow">
            <span className="block transform -rotate-2 mb-2">غضب الجزر</span>
            <span className="block text-[#FFF8E1] mt-4 transform rotate-1">THE ANGER OF CARROTS</span>
          </h1>
          
          <div className="warrior-border p-4 mb-8 bg-[#1A120B]/60 backdrop-blur-sm">
            <p className="arabic-text text-xl mb-4 text-white">مغامرة جديدة في عالم الجزر! اختبر قدراتك في مواجهة خصومك واستعد للتحدي الكبير في لعبة بيكسل آرت مميزة!</p>
            <p className="arabic-text text-lg text-[#FFC107]">انضم إلى المعركة الملحمية وأنقذ عالم الجزر من الشر المحدق!</p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 rtl:space-x-reverse">
            <PixelButton 
              variant="secondary" 
              href="#download"
              className="mb-4 battle-animation"
            >
              تحميل اللعبة
            </PixelButton>
            <PixelButton 
              variant="light" 
              href="#trailer"
              className="mb-4 battle-animation"
            >
              شاهد التريلر
            </PixelButton>
          </div>
          
          {/* Character side decoration */}
          <div className="hidden md:block absolute -bottom-16 -right-8 w-32 h-32 z-20">
            <img 
              src={nadhirImage} 
              alt="Warrior Character" 
              className="w-full h-full transform rotate-12"
            />
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="absolute -top-8 -left-8 w-16 h-16 bg-[#4CAF50] rounded-full shadow-lg z-10"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#FF6B00] rounded-full shadow-lg z-10"></div>
          
          <div className="float-animation relative z-20">
            <div className="pixel-border rounded-lg overflow-hidden">
              <img 
                src={gameLogo} 
                alt="The Anger of Carrots Game" 
                className="max-w-full h-auto shadow-2xl rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A120B]/50 to-transparent"></div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 w-28 h-28 animate-bounce z-30">
            <img 
              src={carrotChar} 
              alt="Carrot Character" 
              className="w-full h-full drop-shadow-lg"
            />
          </div>
          
          {/* Pixel dust effect */}
          <div className="absolute -bottom-4 left-1/2 w-full h-12 transform -translate-x-1/2 bg-[url('/battle-damage.png')] bg-repeat-x bg-contain opacity-60"></div>
        </div>
      </div>
      
      {/* Bottom border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#1A120B] z-10"></div>
    </section>
  );
};

export default HeroSection;
