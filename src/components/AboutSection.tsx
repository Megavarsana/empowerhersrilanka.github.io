
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing bg-soft-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About Empowerlter
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Built by women, for women. We understand the unique challenges faced by Sri Lankan women 
            and are committed to creating a safe digital space for growth and empowerment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="card-hover bg-white border-pastel-sand">
            <CardContent className="p-8 text-center">
              <div className="bg-pastel-flesh p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="h-8 w-8 text-pastel-khaki" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To uplift women across Sri Lanka by providing access to safety tools, 
                emotional support, and educational guidance.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover bg-white border-pastel-sand">
            <CardContent className="p-8 text-center">
              <div className="bg-pastel-flesh p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Eye className="h-8 w-8 text-pastel-khaki" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                A future where every Sri Lankan woman can live with dignity, 
                courage, and independence — online and offline.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover bg-white border-pastel-sand">
            <CardContent className="p-8 text-center">
              <div className="bg-pastel-flesh p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-pastel-khaki" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Community</h3>
              <p className="text-gray-600">
                Created by a team of passionate advocates who believe in the power 
                of women supporting women through technology.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-pastel-flesh to-pastel-sand p-8 rounded-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Why We Built This Platform
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Every woman deserves to feel safe, supported, and empowered to pursue her dreams. 
              We recognized the need for a centralized platform that addresses the unique challenges 
              faced by Sri Lankan women, from safety concerns to career guidance. Empowerlter bridges 
              this gap by combining emergency resources, mental health support, and professional 
              development tools in one trusted space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
