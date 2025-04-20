import { useState } from "react";
import { Link } from "wouter";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="px-4 py-2 bg-[#FF6B00] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="ml-4 rtl:mr-4 rtl:ml-0">
            <span className="font-pixel text-xl block">CARROT CO</span>
            <span className="arabic-text text-sm block font-cairo">استوديو كاروت</span>
          </div>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md text-[#FFF8E1] hover:bg-[#3D2B1F]"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        
        {/* Navigation links */}
        <div 
          className={`${
            mobileMenuOpen 
              ? "absolute top-16 left-0 right-0 bg-[#FF6B00] p-4 shadow-lg z-50" 
              : "hidden"
          } md:flex w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse">
            <li>
              <a 
                href="#home" 
                onClick={handleNavLinkClick}
                className="block py-2 px-4 font-pixel text-sm hover:bg-[#3D2B1F] rounded transition duration-200"
              >
                الرئيسية
              </a>
            </li>
            <li>
              <a 
                href="#features" 
                onClick={handleNavLinkClick}
                className="block py-2 px-4 font-pixel text-sm hover:bg-[#3D2B1F] rounded transition duration-200"
              >
                المميزات
              </a>
            </li>
            <li>
              <a 
                href="#screenshots" 
                onClick={handleNavLinkClick}
                className="block py-2 px-4 font-pixel text-sm hover:bg-[#3D2B1F] rounded transition duration-200"
              >
                الصور
              </a>
            </li>
            <li>
              <a 
                href="#download" 
                onClick={handleNavLinkClick}
                className="block py-2 px-4 font-pixel text-sm hover:bg-[#3D2B1F] rounded transition duration-200"
              >
                التحميل
              </a>
            </li>
            <li>
              <a 
                href="#team" 
                onClick={handleNavLinkClick}
                className="block py-2 px-4 font-pixel text-sm hover:bg-[#3D2B1F] rounded transition duration-200"
              >
                فريق العمل
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
