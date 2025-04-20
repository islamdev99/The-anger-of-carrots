import carrotLogo from "@assets/AOTC2.png";

// إضافة صور فريق العمل الجديدة
import islamImage from "@assets/Islam-Ibrahim1.webp";
import marwanImage from "@assets/InShot__.webp";
import nadhirImage from "@assets/3_20250308055924.webp";
import ziadImage from "@assets/channels4_profile_2.webp";
import mustafaImage from "@assets/channels4_profile_1.webp";
import ayadImage from "/attached_assets/channels4_profile_1.webp"; // Added Ayad's image import


const TeamSection = () => {
  const teamMembers = [
    {
      name: "إسلام إبراهيم",
      role: "مدير كاروت كو",
      image: islamImage
    },
    {
      name: "مروان خادمي",
      role: "مدير كاروت كو وكاتب القصة",
      image: marwanImage
    },
    {
      name: "نذير سان",
      role: "مطور ألعاب ومن الإدارة",
      image: nadhirImage
    },
    {
      name: "زياد زيدو",
      role: "رسام محترف",
      image: ziadImage
    },
    {
      name: "اياد عباس",
      role: " مطور ألعاب و مصمم مراحل اساسي",
      image: ayadImage // Added Ayad's image
    },
  ];

  return (
    <section id="team" className="py-16 bg-[#FFF8E1]">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-pixel text-3xl text-[#FF6B00] mb-12">فريق كاروت كو</h2>

        <div className="text-center mb-10">
          <div className="h-32 w-32 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#FF6B00]">
            <span className="font-pixel text-4xl text-white">C C</span>
          </div>
          <p className="arabic-text text-xl text-gray-800 max-w-3xl mx-auto">
            نحن فريق مبدع من المطورين والفنانين المتحمسين لصناعة الألعاب. نسعى لتقديم تجارب ألعاب فريدة ومميزة تمزج بين الأسلوب الكلاسيكي والمحتوى العصري.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg border-4 border-[#FF6B00] hover:transform hover:scale-105 transition-transform">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#FF6B00] mx-auto mb-3">
                <img 
                  src={member.image} 
                  alt={`Team Member - ${member.name}`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-pixel text-md text-center text-[#3D2B1F] mb-1">{member.name}</h3>
              <p className="arabic-text text-center text-gray-600 mb-2 text-sm">{member.role}</p>
              <div className="bg-[#FFF2D8] rounded-md p-2 text-center mt-2">
                <span className="text-xs text-[#FF6B00] font-pixel">carrot-co.com</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://carrot-co.odoo.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pixel-button inline-block bg-[#FF6B00] text-white font-pixel py-3 px-6 rounded-md text-sm hover:bg-[#E66000] transition-all"
          >
            زيارة موقع الاستوديو
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;