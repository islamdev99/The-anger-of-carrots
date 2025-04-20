import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrailerSection from "@/components/TrailerSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import DownloadSection from "@/components/DownloadSection";
import TeamSection from "@/components/TeamSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { SettingsMenu } from "@/components/ui/settings-menu";

const Home = () => {
  return (
    <>
      <SettingsMenu />
      <Navbar />
      <HeroSection />
      <TrailerSection />
      <ScreenshotsSection />
      <DownloadSection />
      <TeamSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
