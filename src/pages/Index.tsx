import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import MainTopicsSection from "@/components/MainTopicsSection";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen bg-gradient-to-b from-empowerher-pink to-empowerher-pink-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[800px] md:min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/e4206dc1-e912-40a6-96af-c3be97ff47b1.png" 
            alt="Sri Lankan women activists united for gender justice"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            WE FUND BOLD, FEMINIST MOVEMENTS
          </h1>
          <p className="text-xl mb-8 leading-relaxed max-w-4xl mx-auto drop-shadow-md">
            EmpowerHer supports gender justice movements in Sri Lanka to{" "}
            <span className="bg-yellow-400 text-black px-2 py-1 rounded">create meaningful change</span>{" "}
            that will last beyond our lifetimes.
          </p>
          <p className="text-lg mb-8 drop-shadow-md">
            Made by Sri Lankan women for Sri Lankan women 💖
          </p>
        </div>
      </section>

      <AboutSection />
      <VisionMissionSection />
      <MainTopicsSection />
      <Footer />
    </div>;
};
export default Index;