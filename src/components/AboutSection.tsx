
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing bg-white dark:bg-black transition-colors">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8 transition-colors" data-aos="fade-up">
            ABOUT US
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="slide-right" data-aos-delay="100">
            <p className="text-lg text-gray-600 dark:text-white leading-relaxed mb-6 transition-colors">
              EmpowerHer is a dedicated platform created specifically for Sri Lankan women 
              to provide comprehensive support in safety, mental health, and personal development. 
              We understand the unique challenges faced by women in our community and strive to 
              create a safe digital space where every woman can access the resources she needs.
            </p>
            <p className="text-lg text-gray-600 dark:text-white leading-relaxed transition-colors">
              Our platform combines emergency safety tools, professional counseling resources, 
              educational opportunities, and mentorship programs all in one trusted location. 
              Whether you're seeking immediate help, career guidance, or personal growth resources, 
              EmpowerHer is here to support your journey.
            </p>
          </div>
          
          <div className="flex justify-center" data-aos="slide-left" data-aos-delay="200">
            <div className="bg-empowerher-pink-light p-8 rounded-2xl">
              <img 
                src="/lovable-uploads/051fdfd8-c00a-44a6-a88f-1b8189d9f108.png" 
                alt="Professional woman working - About EmpowerHer"
                className="w-full h-64 object-cover rounded-lg"
                data-aos="zoom-in"
                data-aos-delay="400"
              />
              <p className="text-center text-gray-600 dark:text-gray-800 text-sm mt-4 italic">
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
