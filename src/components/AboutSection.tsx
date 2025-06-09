
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            ABOUT US
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              EmpowerHer is a dedicated platform created specifically for Sri Lankan women 
              to provide comprehensive support in safety, mental health, and personal development. 
              We understand the unique challenges faced by women in our community and strive to 
              create a safe digital space where every woman can access the resources she needs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our platform combines emergency safety tools, professional counseling resources, 
              educational opportunities, and mentorship programs all in one trusted location. 
              Whether you're seeking immediate help, career guidance, or personal growth resources, 
              EmpowerHer is here to support your journey.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-pastel-rose-light p-8 rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Sri Lankan women empowerment"
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-center text-gray-600 text-sm mt-4 italic">
                Supporting Sri Lankan women in their journey towards empowerment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
