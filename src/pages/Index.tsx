
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import MainTopicsSection from "@/components/MainTopicsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutSection />
      <VisionMissionSection />
      <MainTopicsSection />
      <Footer />
    </div>
  );
};

export default Index;
