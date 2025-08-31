import { Link } from "react-router-dom";
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Volunteer", href: "/volunteer" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-heading font-bold text-foreground">
                Hope Foundation
              </span>
            </Link>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              Creating positive change in communities through education, support, and empowerment. 
              Together, we build a better future for all.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>123 Community St, Hope City, HC 12345</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@hopefoundation.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-heading font-semibold text-foreground uppercase tracking-wide">
              Quick Links
            </h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm font-body text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="text-sm font-heading font-semibold text-foreground uppercase tracking-wide">
              Our Programs
            </h3>
            <div className="space-y-2">
              <Link to="/programs" className="block text-sm font-body text-muted-foreground hover:text-primary transition-smooth">
                Education Support
              </Link>
              <Link to="/programs" className="block text-sm font-body text-muted-foreground hover:text-primary transition-smooth">
                Community Gardens
              </Link>
              <Link to="/programs" className="block text-sm font-body text-muted-foreground hover:text-primary transition-smooth">
                Youth Mentorship
              </Link>
              <Link to="/programs" className="block text-sm font-body text-muted-foreground hover:text-primary transition-smooth">
                Senior Care
              </Link>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-sm font-heading font-semibold text-foreground uppercase tracking-wide">
              Stay Connected
            </h3>
            <p className="text-sm font-body text-muted-foreground">
              Get the latest updates on our programs and impact.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-background border-border"
              />
              <Button variant="default" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm font-body text-muted-foreground">
              © 2024 Hope Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-sm font-body text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm font-body text-muted-foreground hover:text-primary transition-smooth">
                Terms of Service
              </Link>
              <Link to="#" className="text-sm font-body text-muted-foreground hover:text-primary transition-smooth">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;