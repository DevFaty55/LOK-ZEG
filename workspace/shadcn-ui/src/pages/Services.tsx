import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainLayout from "@/components/layout/MainLayout";

const Services = () => {
  const [activeTab, setActiveTab] = useState("video");

  const services = {
    video: [
      {
        title: "Professional Video Editing",
        icon: "fas fa-film",
        description: "High-quality video editing services for various platforms including social media, YouTube, and corporate presentations.",
        features: [
          "Advanced color grading",
          "Motion graphics integration",
          "Sound design and mixing",
          "Visual effects and compositing",
          "Format optimization for different platforms"
        ]
      },
      {
        title: "Motion Graphics",
        icon: "fas fa-vector-square",
        description: "Eye-catching motion graphics and animations to enhance your visual content and brand messaging.",
        features: [
          "2D and 3D animations",
          "Animated logos and intros",
          "Kinetic typography",
          "Explainer videos",
          "Animated infographics"
        ]
      },
      {
        title: "Commercial Video Production",
        icon: "fas fa-ad",
        description: "Engaging commercial videos designed to showcase your products or services and drive conversions.",
        features: [
          "Product showcase videos",
          "Promotional content",
          "Brand story videos",
          "Testimonial video production",
          "Ad campaign content"
        ]
      }
    ],
    marketing: [
      {
        title: "Social Media Management",
        icon: "fas fa-share-alt",
        description: "Comprehensive social media management services to boost your online presence and engagement.",
        features: [
          "Content calendar development",
          "Community management",
          "Performance analytics and reporting",
          "Platform-specific optimization",
          "Trend research and implementation"
        ]
      },
      {
        title: "Paid Advertising",
        icon: "fas fa-bullhorn",
        description: "Strategic paid advertising campaigns on Meta platforms and TikTok to reach your target audience effectively.",
        features: [
          "Ad campaign strategy",
          "Audience targeting",
          "A/B testing",
          "Budget optimization",
          "Performance tracking and optimization"
        ]
      },
      {
        title: "Content Creation",
        icon: "fas fa-pencil-alt",
        description: "Creative content development tailored to your brand identity and marketing goals.",
        features: [
          "Visual content creation",
          "Copywriting",
          "Storytelling",
          "Brand voice development",
          "Content strategy planning"
        ]
      }
    ],
    ai: [
      {
        title: "AI Workflow Development",
        icon: "fas fa-robot",
        description: "Custom AI workflow solutions to streamline your business processes and increase efficiency.",
        features: [
          "Process automation",
          "AI integration with existing systems",
          "Workflow optimization",
          "Training and implementation support",
          "Performance monitoring"
        ]
      },
      {
        title: "AI Agent Creation",
        icon: "fas fa-microchip",
        description: "Development of specialized AI agents to handle specific tasks and improve customer interactions.",
        features: [
          "Custom AI assistant development",
          "Task-specific AI agents",
          "Natural language processing",
          "Continuous learning implementation",
          "Integration with business tools"
        ]
      },
      {
        title: "AI Strategy Consulting",
        icon: "fas fa-lightbulb",
        description: "Expert guidance on implementing AI solutions to solve business challenges and drive growth.",
        features: [
          "AI readiness assessment",
          "Strategic planning for AI implementation",
          "Use case identification",
          "ROI projection and tracking",
          "Ongoing optimization recommendations"
        ]
      }
    ]
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Mega Pizza",
      text: "Lokmane's social media management services completely transformed our online presence. We saw a 30% boost in engagement within just two months!",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      company: "El Ihssaniet Clinic",
      text: "The call center Lokmane set up for us significantly improved our customer acquisition. His targeted campaigns brought in consistent new clients.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "TechStart Inc.",
      text: "The AI workflow Lokmane developed for us saved us countless hours of manual work. His understanding of both AI technology and business needs is impressive.",
      rating: 5
    }
  ];

  return (
    <MainLayout>
      <div className="gradient-bg min-h-screen pb-20">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">My </span>
              <span className="text-gold">Services</span>
            </h1>
            <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Professional solutions tailored to help your business stand out and achieve its goals.
            </p>
          </motion.div>

          {/* Services Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-12"
          >
            <Card className="glass-effect overflow-hidden gold-shadow">
              <CardContent className="p-6 md:p-8">
                <Tabs defaultValue="video" value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid grid-cols-3 mb-8">
                    <TabsTrigger 
                      value="video" 
                      className={`data-[state=active]:text-black data-[state=active]:bg-gold ${activeTab === "video" ? "text-black bg-gold" : "text-gray-300"}`}
                    >
                      <i className="fas fa-video mr-2"></i> Video Production
                    </TabsTrigger>
                    <TabsTrigger 
                      value="marketing" 
                      className={`data-[state=active]:text-black data-[state=active]:bg-gold ${activeTab === "marketing" ? "text-black bg-gold" : "text-gray-300"}`}
                    >
                      <i className="fas fa-bullhorn mr-2"></i> Marketing
                    </TabsTrigger>
                    <TabsTrigger 
                      value="ai" 
                      className={`data-[state=active]:text-black data-[state=active]:bg-gold ${activeTab === "ai" ? "text-black bg-gold" : "text-gray-300"}`}
                    >
                      <i className="fas fa-robot mr-2"></i> AI Solutions
                    </TabsTrigger>
                  </TabsList>
                  
                  {Object.entries(services).map(([category, categoryServices]) => (
                    <TabsContent key={category} value={category} className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {categoryServices.map((service, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gradient-to-b from-[#111111] to-[#0A0A0A] rounded-lg p-6 border border-gold/10 hover:border-gold/30 transition-all group"
                          >
                            <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-black transition-all">
                              <i className={`${service.icon} text-xl`}></i>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                            <ul className="space-y-2">
                              {service.features.map((feature, i) => (
                                <li key={i} className="text-xs text-gray-300 flex items-start">
                                  <i className="fas fa-check text-gold mt-1 mr-2"></i>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="glass-effect overflow-hidden gold-shadow">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gold text-center">
                  My Work Process
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto mb-4 relative">
                      <i className="fas fa-comments text-xl"></i>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-black text-xs flex items-center justify-center font-bold">1</div>
                    </div>
                    <h3 className="text-white font-semibold mb-2">Consultation</h3>
                    <p className="text-gray-400 text-sm">Understanding your needs, goals, and vision for the project.</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto mb-4 relative">
                      <i className="fas fa-sitemap text-xl"></i>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-black text-xs flex items-center justify-center font-bold">2</div>
                    </div>
                    <h3 className="text-white font-semibold mb-2">Planning</h3>
                    <p className="text-gray-400 text-sm">Creating a comprehensive strategy and timeline for execution.</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto mb-4 relative">
                      <i className="fas fa-code text-xl"></i>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-black text-xs flex items-center justify-center font-bold">3</div>
                    </div>
                    <h3 className="text-white font-semibold mb-2">Execution</h3>
                    <p className="text-gray-400 text-sm">Bringing ideas to life with expert skills and attention to detail.</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto mb-4 relative">
                      <i className="fas fa-chart-line text-xl"></i>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-black text-xs flex items-center justify-center font-bold">4</div>
                    </div>
                    <h3 className="text-white font-semibold mb-2">Evaluation</h3>
                    <p className="text-gray-400 text-sm">Measuring results and making adjustments for optimal outcomes.</p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Card className="glass-effect overflow-hidden gold-shadow">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gold text-center">
                  Client Testimonials
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gradient-to-b from-[#111111] to-[#0A0A0A] rounded-lg p-6 border border-gold/10"
                    >
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="fas fa-star text-gold"></i>
                        ))}
                      </div>
                      <p className="text-gray-300 italic mb-4">"{testimonial.text}"</p>
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-gold text-sm">{testimonial.company}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Services;