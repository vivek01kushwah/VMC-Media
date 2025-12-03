import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-woman.png";
import GetStartedModal from "@/components/GetStartedModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { StaggerContainer, StaggerItem, ParallaxWrapper } from "@/components/animations";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -30]);

  return (
    <>
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Premium Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" 
        />
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl" 
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <StaggerContainer className="space-y-8 lg:space-y-10">
            <StaggerItem>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                Digital Growth{" "}
                <span className="bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
                  Starts Here
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Transform your brand with data-driven digital marketing strategies. 
                We deliver measurable growth through SEO, paid ads, and performance campaigns.
              </p>
            </StaggerItem>

            {/* Social Proof */}
            <StaggerItem>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-5 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-premium w-fit"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="w-11 h-11 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 border-2 border-card flex items-center justify-center text-xs font-bold text-accent"
                    >
                      {i}
                    </motion.div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-foreground">4.9/5</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">250+ projects</span> delivered
                  </p>
                </div>
              </motion.div>
            </StaggerItem>

            {/* CTA Buttons */}
            <StaggerItem>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  size="lg" 
                  onClick={() => navigate("/consultation")}
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 group h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold rounded-xl"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate("/case-studies")}
                  className="w-full sm:w-auto border-2 border-border hover:border-accent hover:text-accent hover:bg-accent/5 group h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300"
                >
                  View Case Studies
                  <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
            </StaggerItem>

            {/* Stats */}
            <StaggerItem>
              <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:items-center sm:gap-6 lg:gap-8 pt-4">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">250+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-border" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">120+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Clients</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-border" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-foreground">95%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Retention</div>
              </div>
            </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Right Visual */}
          <ParallaxWrapper offset={30} className="relative lg:pl-8 mt-8 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60" />
              
              <div className="relative bg-gradient-to-br from-card to-muted/30 rounded-3xl p-4 sm:p-6 lg:p-8 border border-border/50 shadow-premium-lg backdrop-blur-sm">
                <img
                  src={heroImage}
                  alt="Professional marketing expert"
                  className="w-full h-auto max-h-[350px] sm:max-h-[450px] lg:max-h-[550px] object-contain rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Floating Stat Card 1 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="hidden sm:flex absolute -top-4 sm:-top-6 -left-4 sm:-left-6 bg-card/90 backdrop-blur-md p-3 sm:p-5 rounded-2xl shadow-premium-lg border border-border/50"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg shadow-accent/20">
                    <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-foreground">+220%</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Traffic Growth</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stat Card 2 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-card/90 backdrop-blur-md p-3 sm:p-5 rounded-2xl shadow-premium-lg border border-border/50 w-52 sm:w-64"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-foreground">Campaign ROI</span>
                  <span className="text-xs text-muted-foreground">This Month</span>
                </div>
                <div className="flex items-end gap-1 h-12 mb-2">
                  {[40, 60, 45, 75, 55, 85, 95].map((height, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-accent to-secondary rounded-t" style={{ height: `${height}%` }} />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-foreground">$45.2K</span>
                  <span className="text-xs font-semibold text-green-500 flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 rotate-[-45deg]" />
                    +32.5%
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </ParallaxWrapper>

          {/* Background Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl -z-10" />
        </div>
      </div>

      {/* Get Started Modal */}
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
    </>
  );
};

export default Hero;
