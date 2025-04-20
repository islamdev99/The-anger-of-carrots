import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrailerSection from "@/components/TrailerSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import DownloadSection from "@/components/DownloadSection";
import TeamSection from "@/components/TeamSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import GameFactsSection from "@/components/GameFactsSection";
import Footer from "@/components/Footer";
import { SettingsMenu } from "@/components/ui/settings-menu";
import { PromoBanner } from "@/components/ui/promo-banner";
import { SocialSidebar } from "@/components/ui/social-sidebar";

const Home = () => {
  return (
    <>
      <SettingsMenu />
      <SocialSidebar />
      <Navbar />
      <HeroSection />
      <TrailerSection />
      <ScreenshotsSection />
      <GameFactsSection />
      <DownloadSection />
      <TeamSection />
      <NewsSection />
      <ContactSection />
      <Footer />
      <PromoBanner />
    </>
  );
};

export default Home;
