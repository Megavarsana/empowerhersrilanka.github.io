
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MainTopicsSection = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('main-topics');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const topics = [
    {
      id: 'safety',
      title: "WOMEN'S SAFETY",
      subtitle: "Emergency help, safety apps & self-defense tips",
      icon: Shield,
      bgColor: "bg-gradient-to-br from-rose-200 to-pink-300",
      iconColor: "text-rose-600",
      textColor: "text-gray-800",
      route: "/safety"
    },
    {
      id: 'support',
      title: "SUPPORT FOR WOMEN'S PROBLEMS",
      subtitle: "Mental health, abuse, toxic relationships, sexual assault",
      icon: Heart,
      bgColor: "bg-gradient-to-br from-orange-200 to-amber-300",
      iconColor: "text-orange-600",
      textColor: "text-gray-800",
      route: "/support"
    },
    {
      id: 'guidance',
      title: "GUIDANCE & PASSION SUPPORT",
      subtitle: "Free learning, business help, and career coaching",
      icon: Lightbulb,
      bgColor: "bg-gradient-to-br from-yellow-200 to-orange-300",
      iconColor: "text-yellow-600",
      textColor: "text-gray-800",
      route: "/guidance"
    }
  ];

  const handleTopicClick = (route: string) => {
    navigate(route);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleLearnMoreClick = (e: React.MouseEvent, route: string) => {
    e.stopPropagation();
    navigate(route);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section 
      id="main-topics" 
      className="section-spacing"
      style={{
        background: "url('/lovable-uploads/3ff5a7da-2504-4163-889a-f2a783fcabfc.png')",
        backgroundSize: "cover"
      }}
    >
      <div className="container mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How We Support You
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Click on any area below to access comprehensive resources and support tailored for Sri Lankan women
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {topics.map((topic, index) => (
            <Card 
              key={topic.id}
              className={`card-hover cursor-pointer border-0 overflow-hidden ${topic.bgColor} ${
                isVisible ? `animate-fadeInUp stagger-${index + 1}` : 'opacity-0'
              }`}
              onClick={() => handleTopicClick(topic.route)}
            >
              <CardContent className="p-10 text-center h-full flex flex-col justify-between relative">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/20 rounded-full translate-y-8 -translate-x-8"></div>
                
                <div className="relative z-10">
                  <div className="bg-white p-6 rounded-2xl w-24 h-24 mx-auto mb-8 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <topic.icon className={`h-12 w-12 ${topic.iconColor}`} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-6 ${topic.textColor}`}>
                    {topic.title}
                  </h3>
                  <p className={`leading-relaxed text-lg ${topic.textColor} opacity-90 mb-8`}>
                    {topic.subtitle}
                  </p>
                </div>
                
                <div className="relative z-10">
                  <button 
                    onClick={(e) => handleLearnMoreClick(e, topic.route)}
                    className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    Learn More →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainTopicsSection;
