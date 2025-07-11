
import { Target, Eye } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section id="vision-mission" className="section-spacing bg-empowerher-pink-light dark:bg-black transition-colors">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Our Vision */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm transition-colors" data-aos="slide-right" data-aos-delay="100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-empowerher-pink-medium p-3 rounded-full" data-aos="zoom-in" data-aos-delay="300">
                <Eye className="h-6 w-6 text-empowerher-pink-dark" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white transition-colors" data-aos="fade-up" data-aos-delay="200">Our Vision</h3>
            </div>
            <p className="text-gray-600 dark:text-white leading-relaxed mb-6 transition-colors" data-aos="fade-up" data-aos-delay="400">
              To create a future where every Sri Lankan woman can live with dignity, 
              courage, and independence. We envision a society where women have equal 
              access to opportunities, resources, and support systems that enable them 
              to thrive both online and offline.
            </p>
            <div>
              <img 
                src="/lovable-uploads/31319238-8cf3-43de-81d1-26933266978f.png" 
                alt="Our vision - We are powerful"
                className="w-full h-80 object-contain rounded-lg"
                data-aos="zoom-in"
                data-aos-delay="600"
              />
            </div>
          </div>

          {/* Our Mission */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm transition-colors" data-aos="slide-left" data-aos-delay="200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-empowerher-pink-medium p-3 rounded-full" data-aos="zoom-in" data-aos-delay="400">
                <Target className="h-6 w-6 text-empowerher-pink-dark" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white transition-colors" data-aos="fade-up" data-aos-delay="300">Our Mission</h3>
            </div>
            <p className="text-gray-600 dark:text-white leading-relaxed mb-6 transition-colors" data-aos="fade-up" data-aos-delay="500">
              To uplift women across Sri Lanka by providing comprehensive access to 
              safety tools, emotional support, educational guidance, and professional 
              development resources. We are committed to breaking barriers and creating 
              pathways for women to achieve their full potential.
            </p>
            <div>
              <img 
                src="/lovable-uploads/f59659b1-dc75-4c9f-bc5d-4e50c0d56230.png" 
                alt="Our mission - Women empowerment"
                className="w-full h-80 object-contain rounded-lg"
                data-aos="zoom-in"
                data-aos-delay="700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
