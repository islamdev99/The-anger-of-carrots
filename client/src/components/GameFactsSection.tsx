import React from 'react';
import { PixelBorder } from "@/components/ui/pixel-border";
import gdevelopLogo from "@assets/GCI1.png";
import brocoImage from "@assets/BrocoI-Sheet (3).png";

const GameFactsSection = () => {
  const facts = [
    {
      icon: <img src={gdevelopLogo} alt="GDevelop" className="w-12 h-12 object-contain" />,
      title: "محرك اللعبة",
      description: "تم تطوير لعبة 'غضب الجزر' باستخدام محرك الألعاب GDevelop، وهو محرك مفتوح المصدر يتيح إنشاء ألعاب 2D بسهولة وكفاءة عالية."
    },
    {
      icon: <img src={brocoImage} alt="Science" className="w-12 h-12 object-contain" />,
      title: "حقيقة علمية",
      description: "تستند قصة اللعبة إلى ظاهرة علمية حقيقية؛ حيث يُسبب نبات الهالوك طفيليات تشبه الزومبي على النباتات الأخرى، بينما يعمل البيتا كاروتين (الموجود في الجزر) كمضاد لهذه الطفيليات!"
    },
    {
      icon: <div className="w-12 h-12 flex items-center justify-center bg-[#E65100] rounded-full text-white font-pixel text-xl">C</div>,
      title: "تصميم فريد",
      description: "تجمع اللعبة بين أسلوب البيكسل آرت الكلاسيكي والقصة العلمية المبتكرة لخلق تجربة لعب فريدة من نوعها وتعليمية في آن واحد."
    },
    {
      icon: <div className="w-12 h-12 flex items-center justify-center bg-[#4CAF50] rounded-full text-white font-pixel text-xl">!</div>,
      title: "المستويات",
      description: "تحتوي اللعبة على مستويات متنوعة تزداد تعقيدًا مع التقدم، وتعتمد على مهارات حل الألغاز وردود الفعل السريعة والتخطيط الاستراتيجي."
    }
  ];

  return (
    <section className="py-16 bg-[#1A120B] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 battle-damage opacity-5"></div>
      <div className="absolute inset-0 carrot-pattern opacity-5"></div>
      
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-[#E65100] z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="mb-12">
          <h2 className="text-center font-pixel text-4xl text-[#FF6B00] mb-4 title-glow">حقائق عن اللعبة</h2>
          <p className="text-center arabic-text text-[#FFF8E1] max-w-2xl mx-auto">تعرف على معلومات تقنية وعلمية مثيرة عن لعبة غضب الجزر!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {facts.map((fact, index) => (
            <div key={index} className="transform transition-all duration-300 hover:scale-105">
              <PixelBorder className="p-1 bg-[#E65100]/10">
                <div className="bg-[#1A120B]/80 p-6 rounded-sm">
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0">
                      {fact.icon}
                    </div>
                    <div>
                      <h3 className="font-pixel text-xl text-[#FF6B00] mb-3">{fact.title}</h3>
                      <p className="arabic-text text-[#FFF8E1] text-sm leading-relaxed">{fact.description}</p>
                    </div>
                  </div>
                </div>
              </PixelBorder>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto p-6 warrior-border bg-[#E65100]/10">
          <h3 className="font-pixel text-2xl text-[#FF6B00] mb-4 text-center">من الطبيعة إلى عالم الألعاب</h3>
          <p className="arabic-text text-[#FFF8E1] mb-4 text-center">
            تجمع لعبة "غضب الجزر" بين المتعة والتعليم من خلال قصة مستوحاة من الطبيعة. فكما تحارب الجزر في لعبتنا نبات الهالوك الزومبي، فإن البيتا كاروتين في العالم الحقيقي يساعد في مكافحة العديد من الأمراض والآفات النباتية.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-[#1A120B]/80 p-4 rounded-lg">
              <h4 className="font-pixel text-lg text-[#FF6B00] mb-2">محرك GDevelop</h4>
              <ul className="text-[#FFF8E1] arabic-text list-disc list-inside text-sm space-y-1">
                <li>محرك مفتوح المصدر</li>
                <li>لا يتطلب خبرة برمجية متقدمة</li>
                <li>يدعم منصات متعددة</li>
                <li>أداء عالي للألعاب ثنائية الأبعاد</li>
              </ul>
            </div>
            <div className="bg-[#1A120B]/80 p-4 rounded-lg">
              <h4 className="font-pixel text-lg text-[#FF6B00] mb-2">القصة العلمية</h4>
              <ul className="text-[#FFF8E1] arabic-text list-disc list-inside text-sm space-y-1">
                <li>مستوحاة من التفاعلات النباتية الحقيقية</li>
                <li>نبات الهالوك يتطفل على النباتات الأخرى</li>
                <li>البيتا كاروتين له خصائص مضادة للطفيليات</li>
                <li>مزج العلم بالخيال لخلق عالم لعبة مميز</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#E65100] z-10"></div>
    </section>
  );
};

export default GameFactsSection;