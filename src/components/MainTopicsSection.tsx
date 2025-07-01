
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MainTopicsSection = () => {
  const navigate = useNavigate();

  const topics = [
    {
      id: 'safety',
      title: "WOMEN'S SAFETY",
      subtitle: "Emergency help, safety apps & self-defense tips",
      icon: Shield,
      bgColor: "bg-primary",
      iconColor: "text-white",
      textColor: "text-white",
      route: "/safety"
    },
    {
      id: 'support',
      title: "SUPPORT FOR WOMEN'S PROBLEMS",
      subtitle: "Mental health, abuse, toxic relationships, sexual assault",
      icon: Heart,
      bgColor: "bg-gradient-to-br from-empowerher-pink-light to-empowerher-pink-medium",
      iconColor: "text-empowerher-pink-dark",
      textColor: "text-gray-800",
      route: "/support"
    },
    {
      id: 'guidance',
      title: "GUIDANCE & PASSION SUPPORT",
      subtitle: "Free learning, business help, and career coaching",
      icon: Lightbulb,
      bgColor: "bg-primary",
      iconColor: "text-white",
      textColor: "text-white",
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
    <section className="section-spacing bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How We Support You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click on any area below to access comprehensive resources and support
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <Card 
              key={topic.id}
              className={`card-hover cursor-pointer transition-all duration-300 hover:scale-105 ${topic.bgColor} border-0`}
              onClick={() => handleTopicClick(topic.route)}
            >
              <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                <div>
                  <div className={`${topic.bgColor === 'bg-primary' ? 'bg-white' : 'bg-white'} p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm`}>
                    <topic.icon className={`h-10 w-10 ${topic.bgColor === 'bg-primary' ? 'text-primary' : topic.iconColor}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${topic.textColor}`}>
                    {topic.title}
                  </h3>
                  <p className={`leading-relaxed ${topic.textColor === 'text-white' ? 'text-white/90' : 'text-gray-600'}`}>
                    {topic.subtitle}
                  </p>
                </div>
                <div className="mt-6">
                  <button 
                    onClick={(e) => handleLearnMoreClick(e, topic.route)}
                    className="bg-white text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors cursor-pointer shadow-sm border border-gray-200"
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
