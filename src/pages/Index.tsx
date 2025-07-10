import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import MainTopicsSection from "@/components/MainTopicsSection";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen bg-gradient-to-b from-empowerher-pink to-empowerher-pink-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-empowerher-pink to-empowerher-pink-dark text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
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
            
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm w-full max-w-md">
                <img alt="Four diverse Sri Lankan women representing unity and empowerment - showcasing traditional and modern styles in a beautiful outdoor setting" className="w-full h-80 rounded-2xl shadow-2xl object-scale-down" src="/lovable-uploads/6df103d0-2c68-4a1d-98fb-44634ab9e480.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <VisionMissionSection />
      <MainTopicsSection />
      <Footer />
    </div>;
};
export default Index;