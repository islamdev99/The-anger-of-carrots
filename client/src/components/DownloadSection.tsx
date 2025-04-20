import { useState } from 'react';
import { PixelButton } from "@/components/ui/pixel-button";

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
    <section id="download" className="py-16 bg-[#4CAF50] relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center font-pixel text-3xl text-white mb-12">تحميل اللعبة</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="font-pixel text-2xl mb-6 text-[#FF6B00]">متوفر قريباً على المنصات التالية</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* itch.io */}
              <a 
                href="https://carrots-studio.itch.io/the-anger-of-carrots-demo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-[#FA5C5C] text-white p-4 rounded-lg hover:bg-[#FF4141] transition-colors"
              >
                <img src="https://static.itch.io/images/logo-white.svg" alt="itch.io" className="h-10 mx-auto mb-2" />
                <span className="font-pixel text-sm">itch.io</span>
              </a>
              
              {/* GameJolt */}
              <a 
                href="https://gamejolt.com/games/the-anger-of-carrot/963708" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-[#2F7F6F] text-white p-4 rounded-lg hover:bg-[#206F5F] transition-colors"
              >
                <div className="h-10 flex items-center justify-center mb-2">
                  <span className="font-bold text-xl">GameJolt</span>
                </div>
                <span className="font-pixel text-sm">GameJolt</span>
              </a>
              
              {/* Google Play Store */}
              <div className="block bg-[#414141] text-white p-4 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-10 mx-auto mb-2 fill-current">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.423-.29.693 0 .271.109.513.29.695.181.181.423.29.695.29.271 0 .514-.109.695-.29l10.897-10.898c.181-.181.29-.424.29-.695s-.109-.514-.29-.695L4.999.828c-.181-.181-.424-.29-.695-.29-.272 0-.514.109-.695.29-.181.181-.29.424-.29.695 0 .272.109.514.29.695z"/>
                </svg>
                <span className="font-pixel text-sm">Google Play (قريباً)</span>
              </div>
            </div>
            
            <p className="arabic-text text-gray-600 mb-6">احصل على تجربة لعب فريدة من نوعها الآن عبر تحميل اللعبة على منصتك المفضلة.</p>
            
            {/* Newsletter Signup */}
            <div className="mt-8 bg-[#FFF8E1] p-6 rounded-lg">
              <h4 className="font-pixel text-lg mb-4 text-[#FF6B00]">اشترك في نشرتنا الإخبارية</h4>
              <p className="arabic-text text-gray-600 mb-4">كن أول من يعلم عن تحديثات اللعبة والإصدارات الجديدة.</p>
              
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="البريد الإلكتروني" 
                  className="flex-1 px-4 py-2 border-2 border-[#FF6B00] rounded-md focus:outline-none arabic-text text-right"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <PixelButton type="submit" variant="primary" className="py-2 px-4">
                  اشتراك
                </PixelButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
