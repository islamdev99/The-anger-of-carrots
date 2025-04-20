import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrailerSection from "@/components/TrailerSection";
import FeaturesSection from "@/components/FeaturesSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import DownloadSection from "@/components/DownloadSection";
import TeamSection from "@/components/TeamSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrailerSection />
      <FeaturesSection />
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
