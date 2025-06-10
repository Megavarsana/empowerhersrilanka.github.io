
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import MainTopicsSection from "@/components/MainTopicsSection";
import SafetySection from "@/components/SafetySection";
import SupportSection from "@/components/SupportSection";
import GuidanceSection from "@/components/GuidanceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutSection />
      <VisionMissionSection />
      <MainTopicsSection />
      <SafetySection />
      <SupportSection />
      <GuidanceSection />
      <Footer />
    </div>
  );
};

export default Index;
