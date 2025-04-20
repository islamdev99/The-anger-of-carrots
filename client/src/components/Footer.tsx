import carrotLogo from "@assets/messi (2).png";

const Footer = () => {
  return (
    <footer className="bg-[#3D2B1F] py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img 
              src={carrotLogo} 
              alt="Carrot Logo" 
              className="h-16 w-auto mx-auto md:mx-0"
            />
            <p className="arabic-text text-sm mt-2 text-center md:text-right">
              © ٢٠٢٥ استوديو كاروت كو. جميع الحقوق محفوظة.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-pixel text-[#FF6B00] mb-3 text-sm">روابط سريعة</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-[#FF6B00] transition-colors arabic-text">الرئيسية</a></li>
                <li><a href="#features" className="hover:text-[#FF6B00] transition-colors arabic-text">المميزات</a></li>
                <li><a href="#screenshots" className="hover:text-[#FF6B00] transition-colors arabic-text">الصور</a></li>
                <li><a href="#download" className="hover:text-[#FF6B00] transition-colors arabic-text">التحميل</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-pixel text-[#FF6B00] mb-3 text-sm">منصات اللعب</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="https://carrots-studio.itch.io/the-anger-of-carrots-demo" 
                    className="hover:text-[#FF6B00] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    itch.io
                  </a>
                </li>
                <li>
                  <a 
                    href="https://gamejolt.com/games/the-anger-of-carrot/963708" 
                    className="hover:text-[#FF6B00] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GameJolt
                  </a>
                </li>
                <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Google Play (قريباً)</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-pixel text-[#FF6B00] mb-3 text-sm">مزيد من المعلومات</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#FF6B00] transition-colors arabic-text">سياسة الخصوصية</a></li>
                <li><a href="#" className="hover:text-[#FF6B00] transition-colors arabic-text">شروط الاستخدام</a></li>
                <li><a href="#" className="hover:text-[#FF6B00] transition-colors arabic-text">عن الاستوديو</a></li>
                <li><a href="#team" className="hover:text-[#FF6B00] transition-colors arabic-text">فريق العمل</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400 arabic-text">
            تم تطوير اللعبة بواسطة فريق كاروت كو. اللعبة متاحة على منصات itch.io و GameJolt وقريباً على Google Play.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
