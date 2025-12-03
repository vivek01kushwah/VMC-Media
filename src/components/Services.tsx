import { Search, BarChart3, Target, TrendingUp, FileText, Share2, Globe, PenTool, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description: "Boost your visibility and reach the top of search results. On-page & Off-page SEO, Technical SEO, Local SEO, Keyword Strategy, SEO Audits.",
    color: "bg-accent",
    link: "/services/seo",
  },
  {
    icon: Share2,
    title: "Social Media Marketing (SMM)",
    description: "Build a strong social presence that drives engagement and conversions. Facebook, Instagram, LinkedIn, YouTube, Content Creation, Campaign Management.",
    color: "bg-secondary",
    link: "/services/smm",
  },
  {
    icon: Target,
    title: "Google Ads & PPC Campaigns",
    description: "Get instant visibility and high-quality leads through targeted paid campaigns. Search Ads, Display Ads, Remarketing, Performance Tracking.",
    color: "bg-primary",
    link: "/services/google-ads",
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description: "Create stunning, modern, and responsive websites. Corporate Websites, Ecommerce Stores, Landing Pages, Custom Development, UI/UX Design.",
    color: "bg-accent",
    link: "/services/web-development",
  },
  {
    icon: PenTool,
    title: "Branding & Creative Services",
    description: "Build a memorable brand identity. Logo & Branding Kits, Corporate Design, Creative Campaigns, Copywriting & Content Marketing.",
    color: "bg-secondary",
    link: "/services/branding",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation & Performance Marketing",
    description: "Fuel your sales team with qualified leads. B2B & B2C Lead Generation, Funnel Creation, Marketing Automation, CRM Integration.",
    color: "bg-primary",
    link: "/services/lead-generation",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="pt-4 pb-16 lg:pt-6 lg:pb-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-6 sm:mb-8 lg:mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 border border-accent/20 rounded-full animate-fade-in">
            <span className="text-xs sm:text-sm font-semibold text-accent">Our Services</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground tracking-tight animate-fade-in-up">
            Comprehensive Digital{" "}
            <span className="bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
              Marketing Solutions
            </span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up px-4" style={{ animationDelay: "0.1s" }}>
            We deliver measurable growth through data-driven strategies, cutting-edge tools, 
            and transparent reporting—backed by industry specialists dedicated to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-border/50 hover:border-accent/50 shadow-lg hover:shadow-premium-lg transition-all duration-500 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <button 
                  onClick={() => navigate(service.link)}
                  className="inline-flex items-center text-sm font-semibold text-accent group-hover:gap-2 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
