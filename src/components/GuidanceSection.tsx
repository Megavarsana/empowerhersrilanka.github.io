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
    <section id="guidance" className="section-spacing bg-primary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Guidance & Support for Women's Passion
          </h2>
          <p className="text-xl text-white/90 font-medium mb-6">
            Powering Her Passion
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Discover educational resources, mentorship opportunities, and government programs 
            designed to help Sri Lankan women pursue their dreams and build successful careers.
          </p>
        </div>

        {/* Free Learning Platforms */}
        <Card className="card-hover bg-white border-white mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <BookOpen className="h-6 w-6 text-primary" />
              <span>Free Learning Platforms</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Free Learning Platform Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop"
                alt="Online learning platforms and education for women"
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningPlatforms.map((platform, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="bg-primary/10 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{platform.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{platform.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-primary text-white px-2 py-1 rounded">
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
        <Card className="card-hover bg-white border-white mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <Award className="h-6 w-6 text-primary" />
              <span>Government & NGO Programs for Women in Sri Lanka</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Government Programs Image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=400&fit=crop"
                alt="Government programs and support for women's development"
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="space-y-6">
              {governmentPrograms.map((program, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-2">{program.name}</h4>
                      <p className="text-gray-600 mb-3">{program.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-primary text-white px-3 py-1 rounded-full">
                          Eligibility: {program.eligibility}
                        </span>
                        <span className="text-xs bg-white text-gray-600 px-3 py-1 rounded-full">
                          {program.contact}
                        </span>
                      </div>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-white whitespace-nowrap">
                      Apply Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* YouTube Video */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">🎥 Government Programs for Women</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/CUmFFCd_9zI"
                  title="Government Programs for Women"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Find a Mentor */}
          <Card className="card-hover bg-white border-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-800">
                <Users className="h-6 w-6 text-primary" />
                <span>Find a Mentor</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Find Mentor Image */}
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=300&fit=crop"
                  alt="Mentorship and guidance for women's career development"
                  className="w-full h-48 object-cover"
                />
              </div>
              
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
          <Card className="card-hover bg-white border-white">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-800">
                <Lightbulb className="h-6 w-6 text-primary" />
                <span>"I Want to Start..." Guides</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* I Want to Start Image */}
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=300&fit=crop"
                  alt="Starting new ventures and pursuing dreams"
                  className="w-full h-48 object-cover"
                />
              </div>
              
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
        <Card className="card-hover bg-white border-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-800">
              <Star className="h-6 w-6 text-primary" />
              <span>Featured Women Stories</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Featured Women Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop"
                alt="Successful women stories and achievements"
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-50 p-1 rounded-full w-24 h-24 mx-auto mb-4">
                    <img 
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">{story.name}</h4>
                  <p className="text-primary font-medium text-sm mb-3">{story.achievement}</p>
                  <p className="text-gray-600 text-sm italic">"{story.quote}"</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Read More Success Stories
              </Button>
            </div>

            {/* YouTube Video */}
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-2">🎥 Inspiring Women Stories</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/gbCYzTnNErs"
                  title="Inspiring Women Stories"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GuidanceSection;
