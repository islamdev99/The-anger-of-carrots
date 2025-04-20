import { useState } from 'react';
import { PixelButton } from "@/components/ui/pixel-button";
import { EnvelopeIcon, InfoIcon, FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from "@/assets/icons";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    console.log('Form submitted:', formData);
    alert('تم إرسال رسالتك بنجاح!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-16 bg-[#FFF8E1]">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-pixel text-3xl text-[#FF6B00] mb-12">تواصل معنا</h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h3 className="font-pixel text-xl text-[#FF6B00] mb-4">أرسل رسالة</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-1 arabic-text text-gray-700">الاسم</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-[#FF6B00] rounded-md focus:outline-none arabic-text text-right"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 arabic-text text-gray-700">البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-[#FF6B00] rounded-md focus:outline-none arabic-text text-right"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 arabic-text text-gray-700">الرسالة</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-[#FF6B00] rounded-md focus:outline-none arabic-text text-right h-32"
                    required
                  ></textarea>
                </div>
                <PixelButton type="submit" variant="primary">
                  إرسال
                </PixelButton>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="font-pixel text-xl text-[#FF6B00] mb-4">معلومات التواصل</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <EnvelopeIcon className="h-6 w-6 text-[#FF6B00]" />
                  <div>
                    <h4 className="font-pixel text-sm text-[#3D2B1F]">البريد الإلكتروني</h4>
                    <p className="text-gray-600">contact@carrot-co.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <InfoIcon className="h-6 w-6 text-[#FF6B00]" />
                  <div>
                    <h4 className="font-pixel text-sm text-[#3D2B1F]">الدعم الفني</h4>
                    <p className="text-gray-600">support@carrot-co.com</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <h4 className="font-pixel text-sm text-[#3D2B1F] mb-2">تابعنا على وسائل التواصل</h4>
                  <div className="flex space-x-4 rtl:space-x-reverse">
                    <a href="#" className="text-[#FF6B00] hover:text-[#3D2B1F] transition-colors">
                      <FacebookIcon className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-[#FF6B00] hover:text-[#3D2B1F] transition-colors">
                      <TwitterIcon className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-[#FF6B00] hover:text-[#3D2B1F] transition-colors">
                      <InstagramIcon className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-[#FF6B00] hover:text-[#3D2B1F] transition-colors">
                      <YoutubeIcon className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
