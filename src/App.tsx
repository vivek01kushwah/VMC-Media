import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import { PageTransition } from "@/components/animations";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import PortfolioDetail from "./pages/PortfolioDetail";
import NotFound from "./pages/NotFound";
import Consultation from "./pages/Consultation";
import CaseStudiesPage from "./pages/CaseStudies";

// Service Pages
import SEOService from "./pages/services/SEO";
import SMMService from "./pages/services/SMM";
import GoogleAdsService from "./pages/services/GoogleAds";
import WebDevelopmentService from "./pages/services/WebDevelopment";
import BrandingService from "./pages/services/Branding";
import LeadGenerationService from "./pages/services/LeadGeneration";

// Branding Sub-Services
import LogoDesign from "./pages/services/branding/LogoDesign";
import BrandIdentity from "./pages/services/branding/BrandIdentity";
import CorporateDesign from "./pages/services/branding/CorporateDesign";

// Additional Services
import EmailMarketing from "./pages/services/EmailMarketing";
import CRO from "./pages/services/CRO";
import EcommerceMarketing from "./pages/services/EcommerceMarketing";
import LocalSEO from "./pages/services/LocalSEO";
import InfluencerMarketing from "./pages/services/InfluencerMarketing";
import ORM from "./pages/services/ORM";

// Portfolio Pages
import CaseStudies from "./pages/portfolio/CaseStudies";

// Info Pages
import About from "./pages/info/About";
import Team from "./pages/info/Team";
import Careers from "./pages/info/Careers";
import Pricing from "./pages/info/Pricing";
import FAQ from "./pages/info/FAQ";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <PageTransition key={location.pathname}>
        <Routes location={location}>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              
              {/* Service Routes */}
              <Route path="/services/seo" element={<SEOService />} />
              <Route path="/services/smm" element={<SMMService />} />
              <Route path="/services/google-ads" element={<GoogleAdsService />} />
              <Route path="/services/web-development" element={<WebDevelopmentService />} />
              <Route path="/services/branding" element={<BrandingService />} />
              <Route path="/services/lead-generation" element={<LeadGenerationService />} />
              
              {/* Branding Sub-Services */}
              <Route path="/services/branding/logo-design" element={<LogoDesign />} />
              <Route path="/services/branding/brand-identity" element={<BrandIdentity />} />
              <Route path="/services/branding/corporate-design" element={<CorporateDesign />} />
              
              {/* Additional Services */}
              <Route path="/services/email-marketing" element={<EmailMarketing />} />
              <Route path="/services/cro" element={<CRO />} />
              <Route path="/services/ecommerce" element={<EcommerceMarketing />} />
              <Route path="/services/local-seo" element={<LocalSEO />} />
              <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
              <Route path="/services/orm" element={<ORM />} />
              
              {/* Portfolio Routes */}
              <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
              <Route path="/portfolio/case-studies" element={<CaseStudies />} />
              <Route path="/portfolio/projects" element={<CaseStudies />} />
              <Route path="/portfolio/success-stories" element={<CaseStudies />} />
              <Route path="/portfolio/branding" element={<CaseStudies />} />
              <Route path="/portfolio/websites" element={<CaseStudies />} />
              <Route path="/portfolio/campaigns" element={<CaseStudies />} />
              
              {/* Info/Pages Routes */}
              <Route path="/pages/about" element={<About />} />
              <Route path="/pages/team" element={<Team />} />
              <Route path="/pages/careers" element={<Careers />} />
              <Route path="/pages/pricing" element={<Pricing />} />
              <Route path="/pages/testimonials" element={<Index />} />
              <Route path="/pages/faq" element={<FAQ />} />
              <Route path="/pages/terms" element={<FAQ />} />
              <Route path="/pages/privacy" element={<FAQ />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </AnimatePresence>
      );
    };

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <AnimatedRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
