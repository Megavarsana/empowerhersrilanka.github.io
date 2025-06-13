
import { Target, Eye } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section id="vision-mission" className="section-spacing bg-empowerher-pink-light">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Our Vision */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-empowerher-pink-medium p-3 rounded-full">
                <Eye className="h-6 w-6 text-empowerher-pink-dark" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              To create a future where every Sri Lankan woman can live with dignity, 
              courage, and independence. We envision a society where women have equal 
              access to opportunities, resources, and support systems that enable them 
              to thrive both online and offline.
            </p>
            <div className="bg-empowerher-pink-light p-4 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                alt="Sri Lankan women's empowerment vision"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Our Mission */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-empowerher-pink-medium p-3 rounded-full">
                <Target className="h-6 w-6 text-empowerher-pink-dark" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              To uplift women across Sri Lanka by providing comprehensive access to 
              safety tools, emotional support, educational guidance, and professional 
              development resources. We are committed to breaking barriers and creating 
              pathways for women to achieve their full potential.
            </p>
            <div className="bg-empowerher-pink-medium p-6 rounded-lg text-center">
              <Target className="h-16 w-16 text-empowerher-pink-dark mx-auto mb-4" />
              <p className="text-gray-700 font-medium">
                Empowering Through Action
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
