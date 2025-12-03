import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "SEO Success for E-commerce Brand",
    category: "SEO Optimization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    result: "+220% Organic Traffic in 6 Months",
    color: "bg-accent",
    slug: "ecommerce-seo",
  },
  {
    title: "Lead Generation for Real Estate Client",
    category: "Lead Generation",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    result: "450+ Qualified Leads | 4.3% Conversion",
    color: "bg-secondary",
    slug: "real-estate-leads",
  },
  {
    title: "Social Media Growth for Lifestyle Brand",
    category: "Social Media Marketing",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    result: "+300% Follower Growth",
    color: "bg-primary",
    slug: "lifestyle-social",
  },
  {
    title: "Website Revamp for Corporate Business",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    result: "+40% Conversion Rate Improvement",
    color: "bg-accent",
    slug: "corporate-website",
  },
];

const Portfolio = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            Our Work Speaks for Itself
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've helped businesses across industries grow through innovative strategies and measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:shadow-2xl transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/portfolio/${project.slug}`)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 max-h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex items-center gap-2 text-white">
                    <span className="font-medium">View Case Study</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3" variant="secondary">{project.category}</Badge>
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className={`text-lg font-bold ${project.color === 'bg-accent' ? 'text-accent' : project.color === 'bg-secondary' ? 'text-secondary' : 'text-primary'}`}>
                  {project.result}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
