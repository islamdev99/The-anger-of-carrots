import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from "@/assets/icons";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "أحمد",
      role: "مطور رئيسي",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200",
      socialLinks: [
        { icon: <GithubIcon className="w-5 h-5" />, url: "#" },
        { icon: <LinkedinIcon className="w-5 h-5" />, url: "#" }
      ]
    },
    {
      name: "سارة",
      role: "مصممة جرافيك",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200",
      socialLinks: [
        { icon: <InstagramIcon className="w-5 h-5" />, url: "#" },
        { icon: <TwitterIcon className="w-5 h-5" />, url: "#" }
      ]
    },
    {
      name: "محمد",
      role: "مطور ألعاب",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80&w=200",
      socialLinks: [
        { icon: <GithubIcon className="w-5 h-5" />, url: "#" },
        { icon: <LinkedinIcon className="w-5 h-5" />, url: "#" }
      ]
    }
  ];

  return (
    <section id="team" className="py-16 bg-[#FFF8E1]">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-pixel text-3xl text-[#FF6B00] mb-12">فريق كاروت كو</h2>
        
        <div className="text-center mb-10">
          <img 
            src="https://i.postimg.cc/C5D74dVG/HyRwgvHQxwnDtxn-Y.jpg" 
            alt="Carrot Co Team" 
            className="h-32 w-auto mx-auto mb-6 rounded-full pixel-border"
          />
          <p className="arabic-text text-xl text-gray-800 max-w-3xl mx-auto">
            نحن فريق مبدع من المطورين والفنانين المتحمسين لصناعة الألعاب. نسعى لتقديم تجارب ألعاب فريدة ومميزة تمزج بين الأسلوب الكلاسيكي والمحتوى العصري.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-4 border-[#FF6B00]">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#FF6B00] mx-auto mb-4">
                <img 
                  src={member.image} 
                  alt={`Team Member - ${member.name}`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-pixel text-lg text-center text-[#3D2B1F] mb-2">{member.name}</h3>
              <p className="arabic-text text-center text-gray-600 mb-2">{member.role}</p>
              <div className="flex justify-center space-x-2 rtl:space-x-reverse">
                {member.socialLinks.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.url} 
                    className="text-[#FF6B00] hover:text-[#3D2B1F] transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
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
