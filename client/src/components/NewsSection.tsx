const NewsSection = () => {
  const newsItems = [
    {
      title: "إطلاق النسخة التجريبية",
      content: "تم إطلاق النسخة التجريبية من لعبة غضب الجزر على منصات itch.io و GameJolt!",
      date: "١٠ مارس، ٢٠٢٥",
      imageUrl: "https://i.postimg.cc/52LdnSzD/the-anger-of-carrot-3.png",
      category: "تحديث",
      categoryColor: "bg-[#FF6B00]"
    },
    {
      title: "شخصيات جديدة قادمة",
      content: "تعرف على الشخصيات الجديدة التي ستنضم للعبة في الإصدار النهائي!",
      date: "٢٥ فبراير، ٢٠٢٥",
      imageUrl: "https://i.postimg.cc/mrBsJJ5Z/Sans-titre-485-20250324213200.webp",
      category: "شخصيات",
      categoryColor: "bg-[#4CAF50]"
    },
    {
      title: "مستويات جديدة",
      content: "اكتشف تفاصيل المستويات الجديدة وتحدياتها المميزة في التحديث القادم.",
      date: "١٥ يناير، ٢٠٢٥",
      imageUrl: "https://i.postimg.cc/BnH0hh2D/bandicam-2025-03-25-23-13-20-686.webp",
      category: "مستويات",
      categoryColor: "bg-[#FFC107]"
    }
  ];

  return (
    <section className="py-16 bg-[#3D2B1F]">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-pixel text-3xl text-[#FF6B00] mb-12">آخر الأخبار</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-[#FF6B00] relative">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 rtl:right-0 rtl:left-auto">
                  <span className={`text-xs font-pixel text-white ${item.categoryColor} px-2 py-1 rounded`}>
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-pixel text-lg text-[#FF6B00] mb-2">{item.title}</h3>
                <p className="arabic-text text-gray-600 mb-4">{item.content}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 arabic-text">{item.date}</span>
                  <a href="#" className="text-[#FF6B00] font-pixel hover:text-[#3D2B1F] transition-colors">
                    قراءة المزيد
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="#" className="font-pixel text-[#FF6B00] underline hover:text-white transition-colors">
            عرض جميع الأخبار
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
