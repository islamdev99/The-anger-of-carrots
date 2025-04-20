import newsImage1 from "@assets/the anger of carrot (3).png";
import newsImage2 from "@assets/Sans_titre_485_20250324213200.webp";
import newsImage3 from "@assets/bandicam_2025-03-25_23-13-20-686.webp";
import zombieImage from "@assets/BrocoI-Sheet (3).png";
import eggplantImage from "@assets/EPI-Sheet (1).png";
import carotsImage from "@assets/carot (7) RUN.png";

const NewsSection = () => {
  const newsItems = [
    {
      title: "النسخة التجريبية قريباً",
      content: "انتظروا النسخة التجريبية من لعبة غضب الجزر على منصات itch.io و GameJolt، ستتضمن ثلاثة أطوار: اللعب السريع، طور القصة، وطور القصة المتعدد!",
      date: "قريباً، ٢٠٢٥",
      imageUrl: newsImage2,
      category: "تحديث",
      categoryColor: "bg-[#FF6B00]"
    },
    {
      title: "أعداء زومبي جدد",
      content: "تعرف على الأعداء الجدد: البروكلي والباذنجان الزومبي! استعد لمواجهة هذه الخضروات المصابة في عالم اللعبة.",
      date: "٢٥ فبراير، ٢٠٢٥",
      imageUrl: zombieImage,
      category: "أعداء",
      categoryColor: "bg-[#E91E63]"
    },
    {
      title: "شخصيات اللعبة الرئيسية",
      content: "كاروتو وكاريتا وسايبر كارو وكاروتين (كوك)، أبطال اللعبة يسعون للنجاة وإنقاذ العالم بقوة البيتا كاروتين الخاصة بهم!",
      date: "١٥ يناير، ٢٠٢٥",
      imageUrl: carotsImage,
      category: "شخصيات",
      categoryColor: "bg-[#4CAF50]"
    },
    {
      title: "الكشف عن قصة اللعبة",
      content: "جماعة من الجزر استيقظوا على نهاية العالم بعد تحول الخضروات الأخرى إلى زومبي، ويحاولون النجاة والبحث عن علاج باستخدام قوة البيتا كاروتين.",
      date: "١٠ ديسمبر، ٢٠٢٤",
      imageUrl: eggplantImage,
      category: "قصة",
      categoryColor: "bg-[#9C27B0]"
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
          <h2 className="text-center font-pixel text-4xl text-[#FF6B00] mb-4 title-glow">آخر الأخبار</h2>
          <p className="text-center arabic-text text-[#FFF8E1] max-w-2xl mx-auto">تابع آخر تطورات لعبة غضب الجزر والأخبار الجديدة عن اللعبة وشخصياتها ومراحلها!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#E65100]/10 rounded-lg shadow-lg overflow-hidden border-2 border-[#E65100] transform transition-all duration-300 hover:scale-105 hover:-rotate-1"
            >
              <div className="h-32 bg-[#1A120B] relative">
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="max-h-28 max-w-32 object-contain opacity-90"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 rtl:right-0 rtl:left-auto">
                  <span className={`text-xs font-pixel text-white ${item.categoryColor} px-2 py-1 rounded`}>
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6 bg-[#FFF8E1]/90">
                <h3 className="font-pixel text-lg text-[#E65100] mb-3 title-glow">{item.title}</h3>
                <p className="arabic-text text-[#1A120B] mb-4 text-sm leading-relaxed">{item.content}</p>
                <div className="flex items-center justify-between text-sm border-t border-[#E65100]/30 pt-3">
                  <span className="text-[#1A120B]/70 arabic-text font-bold">{item.date}</span>
                  <a href="#" className="text-[#E65100] font-pixel hover:text-[#3D2B1F] transition-colors battle-animation">
                    قراءة المزيد
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="warrior-border inline-block p-1 bg-[#E65100]/20">
            <a href="#" className="font-pixel text-[#FF6B00] block px-6 py-3 hover:text-white transition-colors battle-animation">
              عرض جميع الأخبار
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#E65100] z-10"></div>
    </section>
  );
};

export default NewsSection;
