
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Target, Users } from "lucide-react";

const AboutMissionVisionSection = () => {
  return (
    <section className="section-spacing bg-primary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About EmpowerHer
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Learn more about our mission, vision, and the impact we're making for Sri Lankan women
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* About Us */}
          <Card className="card-hover bg-white border-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-800">
                <Users className="h-6 w-6 text-primary" />
                <span>About Us</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* About Us Image */}
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
                  alt="About EmpowerHer - Supporting Sri Lankan women"
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                EmpowerHer is a digital platform dedicated to supporting Sri Lankan women through 
                comprehensive resources, safety tools, and educational opportunities. Founded in 2025, 
                we believe every woman deserves access to the support and resources needed to thrive.
              </p>
            </CardContent>
          </Card>

          {/* Our Mission */}
          <Card className="card-hover bg-white border-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-800">
                <Target className="h-6 w-6 text-primary" />
                <span>Our Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Mission Image */}
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop"
                  alt="Our mission to empower women"
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                To create a safer, more supportive environment for women across Sri Lanka by providing 
                accessible resources, emergency support, mental health services, and educational 
                opportunities that enable women to overcome challenges and achieve their full potential.
              </p>
            </CardContent>
          </Card>

          {/* Our Vision */}
          <Card className="card-hover bg-white border-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-800">
                <Eye className="h-6 w-6 text-primary" />
                <span>Our Vision</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Vision Image */}
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=400&h=300&fit=crop"
                  alt="Our vision for women's empowerment"
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                A Sri Lanka where every woman feels safe, supported, and empowered to pursue her 
                dreams without fear or limitation. We envision a society where gender equality is 
                not just an aspiration but a lived reality for all women.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionVisionSection;
