import { Link } from "react-router-dom";
import { Users, Target, Heart, ArrowRight, Calendar, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProgramCard from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroHome from "@/assets/hero-home.jpg";
import communityWork from "@/assets/community-work.jpg";

const Home = () => {
  const programs = [
    {
      title: "Education Support",
      description: "Providing educational resources and tutoring to underserved communities, helping children and adults achieve their academic goals.",
      image: "/placeholder.svg?height=300&width=400",
      buttonLink: "/programs"
    },
    {
      title: "Community Gardens",
      description: "Creating sustainable food sources and teaching valuable gardening skills while bringing neighborhoods together.",
      image: "/placeholder.svg?height=300&width=400",
      buttonLink: "/programs"
    },
    {
      title: "Youth Mentorship",
      description: "Connecting young people with positive role models to guide them towards successful futures and personal growth.",
      image: "/placeholder.svg?height=300&width=400",
      buttonLink: "/programs"
    },
    {
      title: "Senior Care",
      description: "Supporting elderly community members with companionship, assistance, and resources for healthy aging.",
      image: "/placeholder.svg?height=300&width=400",
      buttonLink: "/programs"
    }
  ];

  const newsArticles = [
    {
      title: "New Community Garden Opens in Downtown",
      excerpt: "Our latest community garden project brings fresh produce and community spirit to the heart of the city.",
      image: "/placeholder.svg?height=200&width=300",
      date: "March 15, 2024",
      link: "/blog"
    },
    {
      title: "100 Students Receive Scholarships",
      excerpt: "Through generous donations and partnerships, we're proud to support 100 students in their educational journey.",
      image: "/placeholder.svg?height=200&width=300",
      date: "March 10, 2024",
      link: "/blog"
    },
    {
      title: "Volunteer Appreciation Event Success",
      excerpt: "Celebrating our incredible volunteers who make our mission possible with dedication and passion.",
      image: "/placeholder.svg?height=200&width=300",
      date: "March 5, 2024",
      link: "/blog"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        title="Building Hope, Creating Change"
        subtitle="Hope Foundation"
        description="Join us in making a lasting impact on communities through education, support, and empowerment. Together, we can create positive change that transforms lives."
        backgroundImage={heroHome}
        ctaText="Learn More"
        ctaLink="#about-snapshot"
        variant="overlay"
      />

      {/* About Snapshot */}
      <section id="about-snapshot" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-body font-medium text-primary uppercase tracking-wide">
                  About Hope Foundation
                </p>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  Making a Difference Since 2010
                </h2>
              </div>
              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                For over a decade, Hope Foundation has been at the forefront of community development, 
                education, and social empowerment. Our mission is simple yet powerful: to create 
                sustainable positive change that transforms lives and strengthens communities.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-primary">15K+</div>
                  <div className="text-sm font-body text-muted-foreground">Lives Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-secondary">50+</div>
                  <div className="text-sm font-body text-muted-foreground">Programs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-heading font-bold text-accent">500+</div>
                  <div className="text-sm font-body text-muted-foreground">Volunteers</div>
                </div>
              </div>
              <Button variant="default" asChild>
                <Link to="/about">
                  Learn Our Story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <img
                src={communityWork}
                alt="Community members working together"
                className="rounded-xl shadow-medium w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <p className="text-sm font-body font-medium text-primary uppercase tracking-wide">
              Our Impact
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Programs That Make a Difference
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              Discover how our comprehensive programs address community needs and create 
              lasting positive change through education, support, and empowerment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                title={program.title}
                description={program.description}
                image={program.image}
                buttonLink={program.buttonLink}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="cta" size="lg" asChild>
              <Link to="/programs">
                View All Programs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <p className="text-sm font-body font-medium text-primary uppercase tracking-wide">
              Latest Updates
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              News & Stories
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              Stay informed about our latest initiatives, success stories, and community impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <Card key={index} className="group hover:shadow-medium transition-smooth">
                <div className="aspect-video overflow-hidden rounded-t-xl">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link to={article.link}>
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">
                View All News
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="py-16 lg:py-24 bg-gradient-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl font-body leading-relaxed opacity-90">
              Join our community of dedicated volunteers and help us create positive change. 
              Every contribution, big or small, makes a meaningful impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/volunteer">
                  <Users className="w-5 h-5 mr-2" />
                  Become a Volunteer
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;