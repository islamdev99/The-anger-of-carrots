import { FeatureCard } from "@/components/ui/feature-card";
import { BoltIcon, GamepadIcon, SmileyIcon, BookOpenIcon, MusicIcon, LayersIcon } from "@/assets/icons";

const FeaturesSection = () => {
  const features = [
    {
      icon: <GamepadIcon className="h-8 w-8 text-white" />,
      title: "أسلوب بيكسل آرت",
      description: "تصميم بيكسل آرت أصيل يعيدك لعصر الألعاب الكلاسيكية مع لمسة عصرية مميزة."
    },
    {
      icon: <LayersIcon className="h-8 w-8 text-white" />,
      title: "تحديات متنوعة",
      description: "مستويات متعددة ومتنوعة مع تحديات مختلفة تختبر مهاراتك وسرعة بديهتك."
    },
    {
      icon: <SmileyIcon className="h-8 w-8 text-white" />,
      title: "شخصيات فريدة",
      description: "شخصيات كرتونية مميزة من عالم الخضروات ستأخذك في مغامرة فريدة من نوعها."
    },
    {
      icon: <BookOpenIcon className="h-8 w-8 text-white" />,
      title: "قصة مشوقة",
      description: "قصة مشوقة تتبع مغامرات الجزر في مواجهة التحديات وإنقاذ عالمه من الخطر."
    },
    {
      icon: <MusicIcon className="h-8 w-8 text-white" />,
      title: "موسيقى حماسية",
      description: "موسيقى تصويرية مميزة تضيف أجواء حماسية للعبة وتعزز من تجربة اللعب."
    },
    {
      icon: <BoltIcon className="h-8 w-8 text-white" />,
      title: "ترقيات وقدرات",
      description: "جمع القدرات وترقية شخصيتك لمواجهة التحديات المتزايدة خلال اللعب."
    }
  ];

  return (
    <section id="features" className="py-16 bg-[#FFF8E1]">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-pixel text-3xl text-[#FF6B00] mb-12">مميزات اللعبة</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
