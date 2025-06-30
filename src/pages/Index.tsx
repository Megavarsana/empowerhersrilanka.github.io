
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import MainTopicsSection from "@/components/MainTopicsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-0"> {/* Remove extra padding since Header handles spacing */}
        <AboutSection />
        <VisionMissionSection />
        <MainTopicsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
