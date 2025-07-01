
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
      bgGradient: "bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600",
      iconBg: "bg-gradient-to-br from-white to-emerald-50",
      iconColor: "text-emerald-600",
      textColor: "text-white",
      route: "/safety"
    },
    {
      id: 'support',
      title: "SUPPORT FOR WOMEN'S PROBLEMS",
      subtitle: "Mental health, abuse, toxic relationships, sexual assault",
      icon: Heart,
      bgGradient: "bg-gradient-to-br from-rose-400 via-pink-500 to-fuchsia-600",
      iconBg: "bg-gradient-to-br from-white to-rose-50",
      iconColor: "text-rose-600",
      textColor: "text-white",
      route: "/support"
    },
    {
      id: 'guidance',
      title: "GUIDANCE & PASSION SUPPORT",
      subtitle: "Free learning, business help, and career coaching",
      icon: Lightbulb,
      bgGradient: "bg-gradient-to-br from-amber-400 via-orange-500 to-red-500",
      iconBg: "bg-gradient-to-br from-white to-amber-50",
      iconColor: "text-amber-600",
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
    <section className="section-spacing bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-700 bg-clip-text text-transparent mb-6">
            How We Support You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Click on any area below to access comprehensive resources and support designed specifically for Sri Lankan women
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {topics.map((topic) => (
            <Card 
              key={topic.id}
              className={`card-hover cursor-pointer transition-all duration-500 hover:scale-105 ${topic.bgGradient} border-0 shadow-2xl group relative overflow-hidden`}
              onClick={() => handleTopicClick(topic.route)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-10 text-center h-full flex flex-col justify-between relative z-10">
                <div>
                  <div className={`${topic.iconBg} p-6 rounded-3xl w-24 h-24 mx-auto mb-8 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 ring-4 ring-white/30`}>
                    <topic.icon className={`h-12 w-12 ${topic.iconColor}`} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-6 ${topic.textColor} leading-tight`}>
                    {topic.title}
                  </h3>
                  <p className={`leading-relaxed text-lg ${topic.textColor === 'text-white' ? 'text-white/95' : 'text-gray-600'} font-medium`}>
                    {topic.subtitle}
                  </p>
                </div>
                <div className="mt-8">
                  <button 
                    onClick={(e) => handleLearnMoreClick(e, topic.route)}
                    className="bg-white/95 backdrop-blur-sm text-gray-800 px-10 py-4 rounded-xl font-semibold hover:bg-white hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg border border-white/50 text-lg"
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
