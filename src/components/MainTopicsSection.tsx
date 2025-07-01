
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Lightbulb, Calendar, Brain, Baby } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const MainTopicsSection = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation();

  const topics = [
    {
      id: 'safety',
      title: "Women's Safety",
      subtitle: "Emergency help, safety apps & self-defense tips",
      icon: Shield,
      route: "/safety"
    },
    {
      id: 'support',
      title: "Support for Women's Problems",
      subtitle: "Mental health, abuse, toxic relationships, sexual assault",
      icon: Heart,
      route: "/support"
    },
    {
      id: 'guidance',
      title: "Guidance & Passion Support",
      subtitle: "Free learning, business help, and career coaching",
      icon: Lightbulb,
      route: "/guidance"
    },
    {
      id: 'womens-health',
      title: "Women's Health",
      subtitle: "Period Help & Menstrual Care",
      icon: Calendar,
      route: "/womens-health"
    },
    {
      id: 'mental-health',
      title: "Mental Health & Self-Love",
      subtitle: "Wellness, self-care, and emotional support",
      icon: Brain,
      route: "/mental-health"
    },
    {
      id: 'pregnancy',
      title: "Pregnancy & New Motherhood Support",
      subtitle: "Support through pregnancy and early motherhood",
      icon: Baby,
      route: "/pregnancy"
    }
  ];

  const handleTopicClick = (route: string) => {
    navigate(route);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="modern-container py-16">
      <div ref={ref} className={`fade-up ${isVisible ? 'visible' : ''}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We Support You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on any area below to access comprehensive resources and support
          </p>
        </div>

        <div className="topic-grid">
          {topics.map((topic, index) => (
            <Card 
              key={topic.id}
              className="modern-card cursor-pointer group hover:scale-105"
              onClick={() => handleTopicClick(topic.route)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <topic.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {topic.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {topic.subtitle}
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="inline-flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                    Learn More →
                  </div>
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
