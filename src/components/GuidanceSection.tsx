
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, BookOpen, Users, Lightbulb, Award, ArrowRight } from "lucide-react";

const GuidanceSection = () => {
  const learningPlatforms = [
    { name: "Coursera", description: "University courses & certificates", type: "Academic", free: true },
    { name: "Skillshare", description: "Creative skills & business", type: "Creative", free: true },
    { name: "Udemy", description: "Technical & professional skills", type: "Professional", free: false },
    { name: "Khan Academy", description: "Free education for everyone", type: "Academic", free: true }
  ];

  const governmentPrograms = [
    {
      name: "Divineguma Development Program",
      description: "Microfinance and livelihood development for women",
      eligibility: "Low-income women",
      contact: "Ministry of Women & Child Affairs"
    },
    {
      name: "Women's Bureau Programs",
      description: "Skills training and entrepreneurship support",
      eligibility: "All women",
      contact: "011-232-3616"
    },
    {
      name: "Small Enterprise Development Program",
      description: "Business loans and training for women entrepreneurs",
      eligibility: "Women business owners",
      contact: "Development Finance Corporation"
    }
  ];

  const successStories = [
    {
      name: "Niluka Perera",
      achievement: "Tech Entrepreneur",
      quote: "Started coding at 25, now runs a successful software company",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      name: "Chamari Silva",
      achievement: "Social Worker",
      quote: "From domestic abuse survivor to helping other women find their voice",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      name: "Rashini Fernando",
      achievement: "Artist & Activist",
      quote: "Using art to raise awareness about women's rights in Sri Lanka",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
    }
  ];

  return (
    <section id="guidance" className="section-spacing bg-pastel-pearl">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Guidance & Support for Women's Passion
          </h2>
          <p className="text-xl text-pastel-khaki font-medium mb-6">
            Powering Her Passion
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover educational resources, mentorship opportunities, and government programs 
            designed to help Sri Lankan women pursue their dreams and build successful careers.
          </p>
        </div>

        {/* Free Learning Platforms */}
        <Card className="card-hover bg-white border-pastel-sand mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <BookOpen className="h-6 w-6 text-pastel-khaki" />
              <span>Free Learning Platforms</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningPlatforms.map((platform, index) => (
                <div key={index} className="bg-pastel-sand p-6 rounded-lg text-center">
                  <div className="bg-pastel-flesh p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-pastel-khaki" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{platform.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{platform.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-pastel-khaki text-white px-2 py-1 rounded">
                      {platform.type}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${platform.free ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {platform.free ? 'Free' : 'Paid'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Government Programs */}
        <Card className="card-hover bg-white border-pastel-sand mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <Award className="h-6 w-6 text-pastel-khaki" />
              <span>Government & NGO Programs for Women in Sri Lanka</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {governmentPrograms.map((program, index) => (
                <div key={index} className="bg-pastel-flesh p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-2">{program.name}</h4>
                      <p className="text-gray-600 mb-3">{program.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-pastel-khaki text-white px-3 py-1 rounded-full">
                          Eligibility: {program.eligibility}
                        </span>
                        <span className="text-xs bg-white text-gray-600 px-3 py-1 rounded-full">
                          {program.contact}
                        </span>
                      </div>
                    </div>
                    <Button className="bg-pastel-khaki hover:bg-pastel-sand text-gray-800 whitespace-nowrap">
                      Apply Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Find a Mentor */}
          <Card className="card-hover bg-white border-pastel-sand">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-800">
                <Users className="h-6 w-6 text-pastel-khaki" />
                <span>Find a Mentor</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pastel-flesh to-pastel-sand p-6 rounded-lg text-center">
                  <h4 className="font-semibold text-gray-800 mb-3">Connect with Experienced Women</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Get matched with successful Sri Lankan women who can guide you in your 
                    career, business, or personal development journey.
                  </p>
                  <Button className="bg-white text-pastel-khaki hover:bg-gray-50">
                    Request a Mentor
                  </Button>
                </div>
                
                <div className="bg-pastel-sand p-4 rounded-lg">
                  <h5 className="font-medium text-gray-800 mb-2">Mentorship Areas:</h5>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div>• Technology & IT</div>
                    <div>• Business & Finance</div>
                    <div>• Healthcare</div>
                    <div>• Education</div>
                    <div>• Arts & Media</div>
                    <div>• Social Work</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* I Want to Start Guides */}
          <Card className="card-hover bg-white border-pastel-sand">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-800">
                <Lightbulb className="h-6 w-6 text-pastel-khaki" />
                <span>"I Want to Start..." Guides</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  "I want to start a business",
                  "I want to start freelancing",
                  "I want to start learning tech",
                  "I want to start social work",
                  "I want to start creative work",
                  "I want to start investing"
                ].map((guide, index) => (
                  <div key={index} className="bg-pastel-sand p-4 rounded-lg flex items-center justify-between hover:bg-pastel-flesh transition-colors cursor-pointer">
                    <span className="text-gray-800 font-medium">{guide}</span>
                    <ArrowRight className="h-4 w-4 text-pastel-khaki" />
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-pastel-khaki hover:bg-pastel-sand text-gray-800">
                Explore All Guides
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Featured Women Carousel */}
        <Card className="card-hover bg-white border-pastel-sand">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <Star className="h-6 w-6 text-pastel-khaki" />
              <span>Featured Women Stories</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <div key={index} className="text-center">
                  <div className="bg-pastel-flesh p-1 rounded-full w-24 h-24 mx-auto mb-4">
                    <img 
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">{story.name}</h4>
                  <p className="text-pastel-khaki font-medium text-sm mb-3">{story.achievement}</p>
                  <p className="text-gray-600 text-sm italic">"{story.quote}"</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button className="bg-pastel-khaki hover:bg-pastel-sand text-gray-800">
                Read More Success Stories
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GuidanceSection;
