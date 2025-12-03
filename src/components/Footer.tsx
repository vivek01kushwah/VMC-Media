import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // If already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold">VMC Media</span>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              VMC Media Pvt. Ltd. - Your trusted partner for digital growth. We help brands unlock their full online potential through strategic digital marketing, advanced SEO, and performance-driven campaigns.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-primary-foreground/80 hover:text-white transition-colors text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-primary-foreground/80 hover:text-white transition-colors text-left">
                  Services
                </button>
              </li>
              <li>
                <NavLink to="/blog" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-primary-foreground/80 hover:text-white transition-colors text-left">
                  SEO Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-primary-foreground/80 hover:text-white transition-colors text-left">
                  Social Media Marketing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-primary-foreground/80 hover:text-white transition-colors text-left">
                  Google Ads & PPC
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-primary-foreground/80 hover:text-white transition-colors text-left">
                  Website Development
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-primary-foreground/80 hover:text-white transition-colors text-left">
                  Lead Generation
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-white transition-colors"
                >
                  VMC Media Pvt. Ltd.<br />Head Office Location
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:+91XXXXXXXXXX" className="text-primary-foreground/80 hover:text-white transition-colors">
                  +91 XXXXXXXXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:info@vmcmedia.com" className="text-primary-foreground/80 hover:text-white transition-colors">
                  info@vmcmedia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 VMC Media Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <NavLink to="/privacy-policy" className="text-primary-foreground/60 hover:text-white transition-colors">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms-of-service" className="text-primary-foreground/60 hover:text-white transition-colors">
              Terms of Service
            </NavLink>
            <NavLink to="/cookie-policy" className="text-primary-foreground/60 hover:text-white transition-colors">
              Cookie Policy
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
