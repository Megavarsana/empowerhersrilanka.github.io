
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
      <section className="bg-gradient-to-r from-empowerher-pink to-empowerher-pink-dark text-white py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
              <div className="bg-white/10 p-12 rounded-3xl backdrop-blur-sm">
                <img 
                  src="/lovable-uploads/3bb74ec0-2341-40ab-9fd8-a8318e99eb64.png" 
                  alt="Four professional women representing different career paths - business, education, healthcare, and construction - showcasing women's empowerment across various fields"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
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
