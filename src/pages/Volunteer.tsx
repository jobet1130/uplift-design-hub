import { useState } from "react";
import { Users, Heart, Clock, CheckCircle, Calendar, MapPin, Mail, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroVolunteer from "@/assets/hero-volunteer.jpg";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    availability: "",
    interests: [],
    experience: "",
    message: ""
  });

  const benefits = [
    {
      icon: Heart,
      title: "Make a Real Impact",
      description: "See the direct results of your efforts in improving lives and strengthening communities."
    },
    {
      icon: Users,
      title: "Build Connections",
      description: "Meet like-minded people and build lasting relationships with fellow volunteers and community members."
    },
    {
      icon: CheckCircle,
      title: "Develop Skills",
      description: "Gain valuable experience and develop new skills while contributing to meaningful causes."
    }
  ];

  const process = [
    {
      step: 1,
      title: "Sign Up",
      description: "Complete our volunteer application form and tell us about your interests and availability."
    },
    {
      step: 2,
      title: "Training",
      description: "Attend orientation and training sessions to prepare you for your volunteer role."
    },
    {
      step: 3,
      title: "Start Volunteering",
      description: "Begin making a difference in your community through meaningful volunteer work."
    }
  ];

  const opportunities = [
    {
      title: "Community Garden Coordinator",
      description: "Help manage our downtown community garden and teach sustainable farming techniques to volunteers and community members.",
      location: "Downtown Community Garden",
      time: "Saturdays, 9:00 AM - 1:00 PM",
      commitment: "Ongoing",
      skills: ["Gardening experience", "Leadership skills", "Communication"]
    },
    {
      title: "Youth Mentor",
      description: "Provide guidance and support to young people through our mentorship program, helping them develop life skills and achieve their goals.",
      location: "Various School Locations",
      time: "Flexible weekday evenings",
      commitment: "6-month minimum",
      skills: ["Working with youth", "Patience", "Active listening"]
    },
    {
      title: "Senior Companion",
      description: "Spend time with elderly community members, providing companionship and assistance with daily activities.",
      location: "Senior Center & Home Visits",
      time: "Flexible daytime hours",
      commitment: "2-3 hours per week",
      skills: ["Compassion", "Good communication", "Reliability"]
    },
    {
      title: "Education Support Volunteer",
      description: "Assist with tutoring sessions and educational workshops, helping students of all ages improve their academic skills.",
      location: "Community Learning Center",
      time: "Weekday evenings, 5:00 PM - 7:00 PM",
      commitment: "Ongoing",
      skills: ["Teaching/tutoring experience", "Subject expertise", "Patience"]
    },
    {
      title: "Event Support Team",
      description: "Help organize and run community events, fundraisers, and awareness campaigns throughout the year.",
      location: "Various Event Venues",
      time: "Flexible, event-based",
      commitment: "Project-based",
      skills: ["Organization", "Teamwork", "Flexibility"]
    },
    {
      title: "Food Distribution Assistant",
      description: "Support our food security program by helping with food sorting, packaging, and distribution to families in need.",
      location: "Food Distribution Center",
      time: "Wednesdays & Saturdays, 8:00 AM - 12:00 PM",
      commitment: "Weekly or bi-weekly",
      skills: ["Physical stamina", "Attention to detail", "Team collaboration"]
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        title="Get Involved & Make a Difference"
        subtitle="Volunteer with Hope Foundation"
        description="Join our community of dedicated volunteers and help us create positive change. Every contribution, big or small, makes a meaningful impact in the lives of others."
        backgroundImage={heroVolunteer}
        ctaText="Sign Up Today"
        ctaLink="#volunteer-form"
        variant="overlay"
      />

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Why Volunteer with Us?
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              Volunteering with Hope Foundation offers meaningful opportunities to create positive change 
              while developing personally and professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-smooth">
                <CardContent className="p-8 space-y-6">
                  <div className="mx-auto w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              How to Get Started
            </h2>
            <p className="text-lg font-body text-muted-foreground">
              Begin your volunteer journey in just three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border transform translate-x-1/2 z-0" />
                )}
                
                {/* Step Content */}
                <Card className="relative z-10 hover:shadow-medium transition-smooth">
                  <CardContent className="p-8 space-y-4">
                    <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-heading font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form Section */}
      <section id="volunteer-form" className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Volunteer Application
            </h2>
            <p className="text-lg font-body text-muted-foreground">
              Fill out the form below to start your volunteer journey with us.
            </p>
          </div>

          <Card className="shadow-medium">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                </div>

                {/* Availability */}
                <div className="space-y-2">
                  <Label htmlFor="availability">Availability</Label>
                  <Select onValueChange={(value) => handleInputChange("availability", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekday-mornings">Weekday Mornings</SelectItem>
                      <SelectItem value="weekday-afternoons">Weekday Afternoons</SelectItem>
                      <SelectItem value="weekday-evenings">Weekday Evenings</SelectItem>
                      <SelectItem value="weekend-mornings">Weekend Mornings</SelectItem>
                      <SelectItem value="weekend-afternoons">Weekend Afternoons</SelectItem>
                      <SelectItem value="flexible">Flexible Schedule</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Interests */}
                <div className="space-y-4">
                  <Label>Areas of Interest (check all that apply)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {["Education Support", "Community Gardens", "Youth Mentorship", "Senior Care", "Event Support", "Food Distribution"].map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest}
                          onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                        />
                        <Label htmlFor={interest} className="text-sm">
                          {interest}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div className="space-y-2">
                  <Label htmlFor="experience">Relevant Experience or Skills</Label>
                  <Textarea
                    id="experience"
                    placeholder="Tell us about any relevant experience, skills, or qualifications..."
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    rows={3}
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Comments</Label>
                  <Textarea
                    id="message"
                    placeholder="Is there anything else you'd like us to know?"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={3}
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="cta" size="lg" className="w-full">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Current Volunteer Opportunities
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              Explore our current volunteer openings and find the perfect opportunity to make a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="hover:shadow-medium transition-smooth">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {opportunity.title}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    {opportunity.description}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{opportunity.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{opportunity.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{opportunity.commitment}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Required Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {opportunity.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Apply Now
                  </Button>
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

export default Volunteer;