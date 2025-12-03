import { TrendingUp, Users, Award, Briefcase } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "250+",
    label: "Projects Delivered",
    color: "text-accent",
  },
  {
    icon: Users,
    value: "120+",
    label: "Happy Clients",
    color: "text-secondary",
  },
  {
    icon: Award,
    value: "5+",
    label: "Years Industry Experience",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Client Retention",
    color: "text-accent",
  },
];

const Stats = () => {
  return (
    <section className="pt-12 pb-4 lg:pt-16 lg:pb-6 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</h3>
              <p className="text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
