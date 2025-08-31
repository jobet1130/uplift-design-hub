import { Target, Eye, Heart, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import heroAbout from "@/assets/hero-about.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every interaction with empathy, understanding, and genuine care for the people we serve."
    },
    {
      icon: Target,
      title: "Impact",
      description: "We focus on creating measurable, sustainable change that addresses root causes and builds long-term solutions."
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "We operate with transparency, accountability, and ethical practices in all aspects of our work."
    }
  ];

  const timeline = [
    {
      year: "2010",
      title: "Foundation Established",
      description: "Hope Foundation was founded with a mission to create positive change in underserved communities."
    },
    {
      year: "2012",
      title: "First Education Program",
      description: "Launched our flagship education support program, providing tutoring and resources to 100 students."
    },
    {
      year: "2015",
      title: "Community Gardens Initiative",
      description: "Started our community gardens program, creating sustainable food sources in urban areas."
    },
    {
      year: "2018",
      title: "Youth Mentorship Launch",
      description: "Introduced comprehensive mentorship programs connecting youth with positive role models."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Adapted programs for virtual delivery during the pandemic, ensuring continued community support."
    },
    {
      year: "2022",
      title: "Senior Care Expansion",
      description: "Expanded our services to include comprehensive senior care and support programs."
    },
    {
      year: "2024",
      title: "15,000 Lives Impacted",
      description: "Reached a milestone of positively impacting over 15,000 lives across all our programs."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Executive Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Leading Hope Foundation with over 15 years of nonprofit leadership experience."
    },
    {
      name: "Michael Chen",
      role: "Program Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Overseeing program development and implementation across all community initiatives."
    },
    {
      name: "Emily Rodriguez",
      role: "Community Outreach Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Building relationships and partnerships that strengthen our community impact."
    },
    {
      name: "David Thompson",
      role: "Volunteer Coordinator",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Managing our amazing volunteer network and creating meaningful opportunities for involvement."
    },
    {
      name: "Lisa Park",
      role: "Development Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Securing resources and funding to sustain and expand our mission-driven work."
    },
    {
      name: "James Wilson",
      role: "Operations Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Ensuring efficient operations and administrative excellence across the organization."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        title="About Hope Foundation"
        subtitle="Our Story"
        description="Learn about our journey, mission, and the dedicated team working to create positive change in communities around the world."
        backgroundImage={heroAbout}
        variant="overlay"
      />

      {/* Mission, Vision, Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-heading font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-lg font-body text-muted-foreground leading-relaxed">
                  To empower communities through education, support, and sustainable development initiatives 
                  that create lasting positive change and improve quality of life for all.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <Eye className="w-8 h-8 text-secondary" />
                  <h3 className="text-2xl font-heading font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-lg font-body text-muted-foreground leading-relaxed">
                  A world where every community has access to the resources, opportunities, and support 
                  needed to thrive, creating a more equitable and compassionate society.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Our Core Values
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              These values guide every decision we make and every action we take in service of our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-smooth">
                <CardContent className="p-8 space-y-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story - Timeline */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Our Journey
            </h2>
            <p className="text-lg font-body text-muted-foreground">
              From humble beginnings to community-wide impact, here's how we've grown over the years.
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={index} className="relative pl-8">
                {/* Timeline line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-3 top-8 w-0.5 h-16 bg-border" />
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-soft" />
                
                {/* Content */}
                <Card className="ml-6 hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <span className="text-sm font-body font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Meet Our Team
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind Hope Foundation, working together to create meaningful change.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-smooth">
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto w-32 h-32 overflow-hidden rounded-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primary font-body font-medium">
                      {member.role}
                    </p>
                    <p className="text-sm font-body text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;