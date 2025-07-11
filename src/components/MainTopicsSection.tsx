
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Lightbulb, Calendar, Brain, Baby } from "lucide-react";
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
    },
    {
      id: 'womens-health',
      title: "WOMEN'S HEALTH",
      subtitle: "Period Help & Menstrual Care",
      icon: Calendar,
      bgColor: "bg-gradient-to-br from-pink-400 to-rose-500",
      iconColor: "text-white",
      textColor: "text-white",
      route: "/womens-health"
    },
    {
      id: 'mental-health',
      title: "MENTAL HEALTH & SELF-LOVE",
      subtitle: "Wellness, self-care, and emotional support",
      icon: Brain,
      bgColor: "bg-gradient-to-br from-purple-400 to-indigo-500",
      iconColor: "text-white",
      textColor: "text-white",
      route: "/mental-health"
    },
    {
      id: 'pregnancy',
      title: "PREGNANCY & NEW MOTHERHOOD SUPPORT",
      subtitle: "Support through pregnancy and early motherhood",
      icon: Baby,
      bgColor: "bg-gradient-to-br from-green-400 to-teal-500",
      iconColor: "text-white",
      textColor: "text-white",
      route: "/pregnancy"
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
    <section className="section-spacing bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors" data-aos="fade-up">
            How We Support You
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors" data-aos="fade-up" data-aos-delay="200">
            Click on any area below to access comprehensive resources and support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <Card 
              key={topic.id}
              className={`card-hover cursor-pointer transition-all duration-300 hover:scale-105 ${topic.bgColor} border-0 dark:shadow-2xl`}
              onClick={() => handleTopicClick(topic.route)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                <div>
                  <div className={`${topic.bgColor === 'bg-primary' ? 'bg-white' : 'bg-white'} p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-sm`} data-aos="zoom-in" data-aos-delay={index * 100 + 200}>
                    <topic.icon className={`h-10 w-10 ${topic.bgColor === 'bg-primary' ? 'text-primary' : topic.iconColor === 'text-white' ? 'text-primary' : topic.iconColor}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${topic.textColor}`} data-aos="fade-up" data-aos-delay={index * 100 + 300}>
                    {topic.title}
                  </h3>
                  <p className={`leading-relaxed ${topic.textColor === 'text-white' ? 'text-white/90' : 'text-gray-600'}`} data-aos="fade-up" data-aos-delay={index * 100 + 400}>
                    {topic.subtitle}
                  </p>
                </div>
                <div className="mt-6">
                  <button 
                    onClick={(e) => handleLearnMoreClick(e, topic.route)}
                    className="bg-white text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors cursor-pointer shadow-sm border border-gray-200"
                    data-aos="slide-up"
                    data-aos-delay={index * 100 + 500}
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
