import { Calendar, User, ArrowRight, Search, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  const featuredPost = {
    title: "Building Stronger Communities Through Education",
    excerpt: "Discover how our education support programs are transforming lives and creating opportunities for children and adults in underserved communities.",
    image: "/placeholder.svg?height=400&width=800",
    author: "Sarah Johnson",
    date: "March 20, 2024",
    category: "Education",
    readTime: "5 min read"
  };

  const blogPosts = [
    {
      title: "New Community Garden Opens in Downtown",
      excerpt: "Our latest community garden project brings fresh produce and community spirit to the heart of the city, providing sustainable food sources for local families.",
      image: "/placeholder.svg?height=250&width=400",
      author: "Michael Chen",
      date: "March 15, 2024",
      category: "Community",
      readTime: "3 min read"
    },
    {
      title: "100 Students Receive Scholarships This Year",
      excerpt: "Through generous donations and partnerships, we're proud to support 100 students in their educational journey with comprehensive scholarship programs.",
      image: "/placeholder.svg?height=250&width=400",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      category: "Education",
      readTime: "4 min read"
    },
    {
      title: "Volunteer Appreciation Event: A Huge Success",
      excerpt: "Celebrating our incredible volunteers who make our mission possible with dedication, passion, and countless hours of service to the community.",
      image: "/placeholder.svg?height=250&width=400",
      author: "David Thompson",
      date: "March 5, 2024",
      category: "Volunteers",
      readTime: "3 min read"
    },
    {
      title: "Youth Mentorship Program Expands to Three New Cities",
      excerpt: "Our successful youth mentorship program is growing, bringing positive role models and guidance to young people in new communities.",
      image: "/placeholder.svg?height=250&width=400",
      author: "Lisa Park",
      date: "February 28, 2024",
      category: "Youth",
      readTime: "6 min read"
    },
    {
      title: "Senior Care Program: Making a Difference for Elderly",
      excerpt: "Learn about our comprehensive senior care initiatives that provide companionship, support, and resources for healthy aging in our community.",
      image: "/placeholder.svg?height=250&width=400",
      author: "James Wilson",
      date: "February 22, 2024",
      category: "Senior Care",
      readTime: "5 min read"
    },
    {
      title: "Partnership with Local Schools Boosts Education Support",
      excerpt: "New collaborations with area schools are expanding our reach and impact, bringing educational resources directly to students who need them most.",
      image: "/placeholder.svg?height=250&width=400",
      author: "Sarah Johnson",
      date: "February 18, 2024",
      category: "Education",
      readTime: "4 min read"
    }
  ];

  const categories = [
    "All Posts",
    "Education",
    "Community",
    "Volunteers",
    "Youth",
    "Senior Care",
    "Programs"
  ];

  const recentPosts = [
    { title: "How to Get Started as a Volunteer", date: "March 18, 2024" },
    { title: "Community Impact Report 2024", date: "March 12, 2024" },
    { title: "Sustainable Gardening Tips", date: "March 8, 2024" },
    { title: "Youth Leadership Workshop Recap", date: "March 3, 2024" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        title="Latest News & Updates"
        subtitle="Hope Foundation Blog"
        description="Stay informed about our latest initiatives, success stories, community impact, and ways to get involved in creating positive change."
        backgroundImage="/placeholder.svg?height=600&width=1200"
        variant="simple"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Featured Post */}
            <Card className="overflow-hidden shadow-medium hover:shadow-strong transition-smooth">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-video md:aspect-square overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover hover:scale-105 transition-smooth"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center space-y-4">
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      Featured
                    </span>
                    <span className="text-muted-foreground">{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground hover:text-primary transition-smooth">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                  <Button variant="default" className="self-start">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Blog Posts Grid */}
            <div className="space-y-8">
              <h3 className="text-2xl font-heading font-bold text-foreground">
                Recent Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="group hover:shadow-medium transition-smooth">
                    <div className="aspect-video overflow-hidden rounded-t-xl">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {post.readTime}
                        </span>
                      </div>
                      <h4 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-smooth line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <Button variant="link" size="sm" className="p-0 h-auto">
                          Read More
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h4 className="font-heading font-semibold text-foreground">
                  Search Articles
                </h4>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-6 space-y-4 text-center">
                <h4 className="font-heading font-semibold text-foreground">
                  Stay Updated
                </h4>
                <p className="text-sm font-body text-muted-foreground">
                  Subscribe to our newsletter for the latest updates and stories.
                </p>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-background"
                  />
                  <Button variant="default" size="sm" className="w-full">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h4 className="font-heading font-semibold text-foreground">
                  Categories
                </h4>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="flex items-center justify-between w-full text-left px-3 py-2 rounded-lg text-sm font-body text-muted-foreground hover:bg-muted hover:text-foreground transition-smooth"
                    >
                      <span>{category}</span>
                      <Tag className="w-3 h-3" />
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h4 className="font-heading font-semibold text-foreground">
                  Recent Posts
                </h4>
                <div className="space-y-3">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="space-y-1">
                      <button className="text-sm font-body text-foreground hover:text-primary transition-smooth text-left line-clamp-2">
                        {post.title}
                      </button>
                      <div className="text-xs text-muted-foreground flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;