
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-empowerher-pink via-empowerher-pink-medium to-empowerher-pink-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            💬 Support for Women's Problems
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white">
            You're not alone. Find comprehensive support, resources, and guidance for every challenge you face.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupportPage;
