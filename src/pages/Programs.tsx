import { GraduationCap, Leaf, Users, Heart, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroPrograms from "@/assets/hero-programs.jpg";

const Programs = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "Comprehensive educational assistance including tutoring, scholarships, and learning resources for students of all ages.",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "One-on-one tutoring sessions",
        "Scholarship opportunities",
        "Learning materials and resources",
        "College preparation workshops",
        "Adult literacy programs"
      ],
      impact: "Over 2,500 students supported annually",
      bgColor: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Leaf,
      title: "Community Gardens",
      description: "Creating sustainable food sources and teaching valuable gardening skills while fostering community connections.",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Organic vegetable gardens",
        "Composting workshops",
        "Sustainable farming techniques",
        "Community harvest events",
        "Nutrition education"
      ],
      impact: "12 active gardens serving 800+ families",
      bgColor: "from-green-50 to-emerald-50",
      iconColor: "text-green-600"
    },
    {
      icon: Users,
      title: "Youth Mentorship",
      description: "Connecting young people with positive role models to guide them towards successful futures and personal growth.",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "One-on-one mentoring relationships",
        "Group activities and workshops",
        "Leadership development programs",
        "Career exploration opportunities",
        "Life skills training"
      ],
      impact: "350+ youth mentored each year",
      bgColor: "from-purple-50 to-violet-50",
      iconColor: "text-purple-600"
    },
    {
      icon: Heart,
      title: "Senior Care",
      description: "Supporting elderly community members with companionship, assistance, and resources for healthy aging.",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Companion services",
        "Transportation assistance",
        "Health and wellness programs",
        "Social activities and events",
        "Technology training"
      ],
      impact: "500+ seniors receive regular support",
      bgColor: "from-rose-50 to-pink-50",
      iconColor: "text-rose-600"
    },
    {
      icon: Users,
      title: "Food Security Initiative",
      description: "Addressing hunger and food insecurity through food banks, nutrition programs, and community meals.",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Weekly food distribution",
        "Emergency food assistance",
        "Nutrition education workshops",
        "Community meal programs",
        "Cooking classes"
      ],
      impact: "1,200+ families receive food assistance monthly",
      bgColor: "from-orange-50 to-amber-50",
      iconColor: "text-orange-600"
    },
    {
      icon: GraduationCap,
      title: "Job Training & Skills",
      description: "Providing vocational training and skill development programs to help community members achieve economic stability.",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Computer literacy training",
        "Job placement assistance",
        "Resume and interview workshops",
        "Entrepreneurship support",
        "Financial literacy programs"
      ],
      impact: "85% job placement rate for program graduates",
      bgColor: "from-teal-50 to-cyan-50",
      iconColor: "text-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        title="Our Programs & Initiatives"
        subtitle="Making Impact"
        description="Discover our comprehensive programs designed to address community needs and create sustainable positive change through education, support, and empowerment."
        backgroundImage={heroPrograms}
        variant="overlay"
      />

      {/* Programs Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Comprehensive Community Support
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-3xl mx-auto">
              Our programs are designed to address root causes and create lasting change. Each initiative 
              focuses on empowerment, sustainability, and building stronger communities together.
            </p>
          </div>

          <div className="space-y-16">
            {programs.map((program, index) => (
              <div key={index} className={`relative ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <Card className="overflow-hidden shadow-medium hover:shadow-strong transition-smooth">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image */}
                    <div className={`aspect-video lg:aspect-square overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover hover:scale-105 transition-smooth"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className={`p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br ${program.bgColor} ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="space-y-6">
                        {/* Icon & Title */}
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center ${program.iconColor}`}>
                            <program.icon className="w-6 h-6" />
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground">
                            {program.title}
                          </h3>
                        </div>
                        
                        {/* Description */}
                        <p className="text-lg font-body text-muted-foreground leading-relaxed">
                          {program.description}
                        </p>
                        
                        {/* Features */}
                        <div className="space-y-3">
                          <h4 className="text-lg font-heading font-semibold text-foreground">
                            Program Features:
                          </h4>
                          <ul className="space-y-2">
                            {program.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                <span className="font-body text-muted-foreground">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Impact */}
                        <div className="bg-white/70 rounded-lg p-4">
                          <div className="text-sm font-body font-semibold text-primary uppercase tracking-wide mb-1">
                            Impact
                          </div>
                          <div className="text-lg font-heading font-semibold text-foreground">
                            {program.impact}
                          </div>
                        </div>
                        
                        {/* CTA Button */}
                        <Button variant="default" className="self-start">
                          Get Involved
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gradient-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              Want to Support Our Programs?
            </h2>
            <p className="text-xl font-body leading-relaxed opacity-90">
              There are many ways to get involved and make a difference. Whether through volunteering, 
              donations, or partnerships, your support helps us expand our reach and impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="/volunteer">
                  Become a Volunteer
                </a>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary" asChild>
                <a href="/contact">
                  Make a Donation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;