import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import MainTopicsSection from "@/components/MainTopicsSection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-empowerher-pink to-empowerher-pink-dark text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                WE FUND BOLD, FEMINIST MOVEMENTS
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                EmpowerHer supports gender justice movements in Sri Lanka to{" "}
                <span className="bg-yellow-400 text-black px-2 py-1 rounded">create meaningful change</span>{" "}
                that will last beyond our lifetimes.
              </p>
              <p className="text-lg mb-8">
                Made by Sri Lankan women for Sri Lankan women 💖
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <img 
                  src="/lovable-uploads/560a6658-7920-4e6d-9cf6-6190132b85be.png" 
                  alt="Four Sri Lankan women standing together, representing unity and empowerment"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <VisionMissionSection />
      <MainTopicsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
