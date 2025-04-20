import { useState } from 'react';
import { PixelButton } from "@/components/ui/pixel-button";
import { PixelBorder } from "@/components/ui/pixel-border";
import carotRunImage from "@assets/carot (7) RUN.png";
import GCImage from "@assets/GCI1.png";

const DownloadSection = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the email to a backend
    console.log('Email subscribed:', email);
    alert('شكراً للاشتراك في نشرتنا الإخبارية!');
    setEmail('');
  };

  return (
    <section id="download" className="py-16 bg-[#1A120B] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 battle-damage opacity-5"></div>
      <div className="absolute inset-0 carrot-pattern opacity-5"></div>
      
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-[#E65100] z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="mb-12">
          <h2 className="text-center font-pixel text-4xl text-[#FF6B00] mb-4 title-glow">تحميل اللعبة</h2>
          <p className="text-center arabic-text text-[#FFF8E1] max-w-2xl mx-auto">انتظر إصدار اللعبة قريباً على المنصات المفضلة لديك! سجل اهتمامك الآن للحصول على إشعار فور إطلاق اللعبة.</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#E65100]/10 border-2 border-[#E65100] p-8 text-center relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 hidden md:block">
              <img src={GCImage} alt="Carrot Character" className="w-full h-full object-contain" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-24 h-24 hidden md:block">
              <img src={carotRunImage} alt="Running Carrot" className="w-full h-full object-contain" />
            </div>
            
            <h3 className="font-pixel text-2xl mb-8 text-[#FF6B00] title-glow">سيتوفر قريباً!</h3>
            
            <PixelBorder className="mb-8 p-1 bg-[#E65100]/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-[#1A120B]/80">
                {/* itch.io */}
                <a 
                  href="https://carrots-studio.itch.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-[#FA5C5C] text-white p-4 rounded-lg hover:bg-[#FF4141] transition-colors transform hover:scale-105 duration-300"
                >
                  <img src="https://static.itch.io/images/logo-white.svg" alt="itch.io" className="h-10 mx-auto mb-2" />
                  <div className="font-pixel text-sm flex flex-col items-center">
                    <span>itch.io</span>
                    <span className="text-yellow-200 mt-2">انتظرونا قريباً</span>
                  </div>
                </a>
                
                {/* GameJolt */}
                <a 
                  href="https://gamejolt.com/@carrot-studio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-[#2F7F6F] text-white p-4 rounded-lg hover:bg-[#206F5F] transition-colors transform hover:scale-105 duration-300"
                >
                  <div className="h-10 flex items-center justify-center mb-2">
                    <span className="font-bold text-xl">GameJolt</span>
                  </div>
                  <div className="font-pixel text-sm flex flex-col items-center">
                    <span>GameJolt</span>
                    <span className="text-yellow-200 mt-2">انتظرونا قريباً</span>
                  </div>
                </a>
                
                {/* Google Play Store */}
                <div className="block bg-[#414141] text-white p-4 rounded-lg transform hover:scale-105 duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-10 mx-auto mb-2 fill-current">
                    <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.423-.29.693 0 .271.109.513.29.695.181.181.423.29.695.29.271 0 .514-.109.695-.29l10.897-10.898c.181-.181.29-.424.29-.695s-.109-.514-.29-.695L4.999.828c-.181-.181-.424-.29-.695-.29-.272 0-.514.109-.695.29-.181.181-.29.424-.29.695 0 .272.109.514.29.695z"/>
                  </svg>
                  <div className="font-pixel text-sm flex flex-col items-center">
                    <span>Google Play</span>
                    <span className="text-yellow-200 mt-2">قريباً</span>
                  </div>
                </div>
              </div>
            </PixelBorder>
            
            <div className="warrior-border p-4 bg-[#E65100]/10 mb-8">
              <p className="arabic-text text-[#FFF8E1] mb-2">
                <span className="text-yellow-300 font-bold">الإصدار التجريبي:</span> سيتضمن ثلاثة أطوار من اللعب:
              </p>
              <ul className="text-[#FFF8E1] arabic-text list-disc list-inside text-right space-y-2 max-w-2xl mx-auto">
                <li>طور اللعب السريع - استمتع بمباريات سريعة ضد الخضروات الزومبي</li>
                <li>طور القصة - اكتشف القصة الكاملة للعبة واستكشف العالم</li>
                <li>طور القصة المتعدد - العب مع أصدقائك في مغامرة مشتركة</li>
              </ul>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-10 bg-[#1A120B]/80 p-6 rounded-lg battle-animation">
              <h4 className="font-pixel text-lg mb-4 text-[#FF6B00] title-glow">اشترك في نشرتنا الإخبارية</h4>
              <p className="arabic-text text-[#FFF8E1] mb-6">كن أول من يعلم عند إطلاق اللعبة واحصل على مكافآت خاصة!</p>
              
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="البريد الإلكتروني" 
                  className="flex-1 px-4 py-2 border-2 border-[#FF6B00] rounded-md focus:outline-none arabic-text text-right bg-[#FFF8E1]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <PixelButton type="submit" variant="primary" className="py-2 px-4 battle-animation">
                  اشتراك
                </PixelButton>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#E65100] z-10"></div>
    </section>
  );
};

export default DownloadSection;
