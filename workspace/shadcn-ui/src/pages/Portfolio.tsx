import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MainLayout from "@/components/layout/MainLayout";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Placeholder for portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: "Prestige Meubles Social Media",
      category: "marketing",
      description: "Current Instagram management and content creation for furniture retailer.",
      image: "/assets/images/portfolio-placeholder-1.jpg", // Placeholder image
      tags: ["Social Media", "Content Creation", "Furniture Industry"]
    },
    {
      id: 2,
      title: "Social Media Campaign - Mega Pizza",
      category: "marketing",
      description: "Comprehensive social media campaign that increased engagement by 30%.",
      image: "/assets/images/portfolio-placeholder-2.jpg", // Placeholder image
      tags: ["Social Media", "Campaign Management", "Content Strategy"]
    },
    {
      id: 3,
      title: "Brand Video - TechCorp",
      category: "video",
      description: "Corporate brand video showcasing company values and mission.",
      image: "/assets/images/portfolio-placeholder-3.jpg", // Placeholder image
      tags: ["Video Production", "Motion Graphics", "Branding"]
    },
    {
      id: 4,
      title: "AI Workflow - DataDrive Inc.",
      category: "ai",
      description: "Custom AI workflow that automated data processing and analytics.",
      image: "/assets/images/portfolio-placeholder-4.jpg", // Placeholder image
      tags: ["AI Development", "Automation", "Workflow Optimization"]
    },
    {
      id: 5,
      title: "Product Showcase - Fashion Brand",
      category: "video",
      description: "Dynamic product video highlighting seasonal collection.",
      image: "/assets/images/portfolio-placeholder-5.jpg", // Placeholder image
      tags: ["Product Video", "Visual Effects", "Color Grading"]
    },
    {
      id: 6,
      title: "AI Assistant - Customer Service",
      category: "ai",
      description: "Intelligent AI assistant for handling customer inquiries.",
      image: "/assets/images/portfolio-placeholder-6.jpg", // Placeholder image
      tags: ["AI Agent", "Customer Service", "NLP"]
    }
  ];

  const filteredItems = activeTab === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

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
              <span className="text-gold">Portfolio</span>
            </h1>
            <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Explore my recent projects and see how I can bring value to your business.
            </p>
          </motion.div>

          {/* Portfolio Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-12"
          >
            <Card className="glass-effect overflow-hidden gold-shadow">
              <CardContent className="p-6 md:p-8">
                <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <div className="flex justify-center mb-8">
                    <TabsList className="grid grid-cols-4">
                      <TabsTrigger 
                        value="all" 
                        className={`data-[state=active]:text-black data-[state=active]:bg-gold ${activeTab === "all" ? "text-black bg-gold" : "text-gray-300"}`}
                      >
                        All Works
                      </TabsTrigger>
                      <TabsTrigger 
                        value="video" 
                        className={`data-[state=active]:text-black data-[state=active]:bg-gold ${activeTab === "video" ? "text-black bg-gold" : "text-gray-300"}`}
                      >
                        Video
                      </TabsTrigger>
                      <TabsTrigger 
                        value="marketing" 
                        className={`data-[state=active]:text-black data-[state=active]:bg-gold ${activeTab === "marketing" ? "text-black bg-gold" : "text-gray-300"}`}
                      >
                        Marketing
                      </TabsTrigger>
                      <TabsTrigger 
                        value="ai" 
                        className={`data-[state=active]:text-black data-[state=active]:bg-gold ${activeTab === "ai" ? "text-black bg-gold" : "text-gray-300"}`}
                      >
                        AI Solutions
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                        className="group relative overflow-hidden rounded-lg"
                      >
                        <div className="aspect-video bg-gray-900 w-full relative overflow-hidden">
                          {/* Placeholder colored gradient since we don't have actual images */}
                          <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${
                            item.category === 'video' ? 'from-blue-900 to-purple-900' : 
                            item.category === 'marketing' ? 'from-red-900 to-orange-900' : 
                            'from-green-900 to-teal-900'
                          }`}>
                            <i className={`text-4xl text-white/50 ${
                              item.category === 'video' ? 'fas fa-video' : 
                              item.category === 'marketing' ? 'fas fa-bullhorn' : 
                              'fas fa-robot'
                            }`}></i>
                          </div>
                          
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                            <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                              <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                              <div className="flex flex-wrap gap-2 justify-center">
                                {item.tags.map((tag, i) => (
                                  <span key={i} className="text-xs bg-gold/20 text-gold px-2 py-1 rounded-full">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Instagram Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="glass-effect overflow-hidden gold-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gold mb-4">Follow My Work on Instagram</h2>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Check out my latest projects and behind-the-scenes content on Instagram.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a 
                    href="https://www.instagram.com/lokzeg?igsh=MXRjcm0zZG5ocDM4ZQ%3D%3D&utm_source=qr" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
                  >
                    <i className="fab fa-instagram text-xl"></i>
                    <span>@lokzeg</span>
                  </a>
                  
                  <a 
                    href="https://www.instagram.com/prestige_meubles_05/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
                  >
                    <i className="fab fa-instagram text-xl"></i>
                    <span>@prestige_meubles_05</span>
                  </a>
                </div>

                {/* Instagram Grid Preview - Placeholder */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[...Array(6)].map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="aspect-square bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg overflow-hidden flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                      <i className="fab fa-instagram text-white/30 text-4xl"></i>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Card className="glass-effect overflow-hidden gold-shadow bg-gradient-to-r from-[#111111] to-black">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gold mb-4">Ready to Start Your Project?</h2>
                <p className="text-gray-300 max-w-xl mx-auto mb-6">
                  Let's work together to bring your vision to life with professional video editing, effective marketing strategies, or custom AI solutions.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href="/contact" 
                    className="inline-flex items-center gap-2 bg-gold hover:bg-gold/80 text-black font-medium px-8 py-3 rounded-lg transition-all"
                  >
                    <span>Contact Me</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Portfolio;