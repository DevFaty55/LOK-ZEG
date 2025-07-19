import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MainLayout from "@/components/layout/MainLayout";

const Home = () => {
  const skills = [
    { name: "Adobe Premiere Pro", level: 90 },
    { name: "After Effects", level: 85 },
    { name: "Photoshop", level: 80 },
    { name: "Illustrator", level: 75 },
    { name: "Social Media Management", level: 90 },
  ];

  const languages = [
    { name: "English", level: "Professional" },
    { name: "Arabic", level: "Native" },
    { name: "French", level: "Intermediate" },
  ];

  const achievements = [
    { number: "5+", text: "Years Experience" },
    { number: "30%", text: "Client Engagement Boost" },
    { number: "100+", text: "Completed Projects" },
    { number: "50+", text: "Satisfied Clients" },
  ];

  return (
    <MainLayout>
      <div className="gradient-bg min-h-screen pb-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column - CV Style */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4"
            >
              <Card className="glass-effect overflow-hidden gold-shadow">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-[#111111] to-[#222222] p-6 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="w-full h-full bg-[radial-gradient(circle_at_center,#FFD700_0%,transparent_70%)]"></div>
                    </div>
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-32 h-32 rounded-full border-4 border-gold mb-4 overflow-hidden bg-gradient-to-br from-[#333] to-[#111]"
                      >
                        <div className="w-full h-full flex items-center justify-center text-4xl text-gold">
                          <span className="font-bold">LZ</span>
                        </div>
                      </motion.div>
                      
                      <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-3xl font-bold text-white mb-1"
                      >
                        Lokmane <span className="text-gold">Zeghina</span>
                      </motion.h1>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-gold/80 font-medium text-sm mb-4"
                      >
                        Video Editor & Social Media Manager
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="flex items-center justify-center gap-3 mb-4"
                      >
                        <a 
                          href="https://www.instagram.com/lokzeg?igsh=MXRjcm0zZG5ocDM4ZQ%3D%3D&utm_source=qr" 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a 
                          href="mailto:lokzeg@gmail.com"
                          className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300"
                        >
                          <i className="fas fa-envelope"></i>
                        </a>
                        <a 
                          href="tel:+213697787734" 
                          className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300"
                        >
                          <i className="fas fa-phone"></i>
                        </a>
                      </motion.div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="p-6 border-t border-gold/10">
                    <h3 className="text-lg font-semibold text-gold mb-4 flex items-center">
                      <i className="fas fa-id-card mr-2"></i> Contact Information
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <div>
                          <div className="text-xs text-gray-400">Email</div>
                          <div className="text-sm text-white">lokzeg@gmail.com</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                          <i className="fas fa-phone"></i>
                        </div>
                        <div>
                          <div className="text-xs text-gray-400">Phone</div>
                          <div className="text-sm text-white">+213 697 787 734</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Languages */}
                  <div className="p-6 border-t border-gold/10">
                    <h3 className="text-lg font-semibold text-gold mb-4 flex items-center">
                      <i className="fas fa-language mr-2"></i> Languages
                    </h3>
                    <div className="space-y-3">
                      {languages.map((language, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-white text-sm">{language.name}</span>
                          <span className="text-xs text-gold">{language.level}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div className="p-6 border-t border-gold/10">
                    <h3 className="text-lg font-semibold text-gold mb-4 flex items-center">
                      <i className="fas fa-star mr-2"></i> Skills
                    </h3>
                    <div className="space-y-4">
                      {skills.map((skill, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-white">{skill.name}</span>
                            <span className="text-gold">{skill.level}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gold"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.1 * index }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6 border-t border-gold/10">
                    <a 
                      href="/assets/pdfs/LokmaneZeghina_VideoEditor_SocialMediaManager_CV.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full"
                    >
                      <Button variant="default" size="lg" className="w-full bg-gold hover:bg-gold/80 text-black">
                        <i className="fas fa-download mr-2"></i> Download Resume
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Right Column - Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Intro Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Card className="glass-effect overflow-hidden gold-shadow">
                  <CardContent className="p-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gold">
                      <i className="fas fa-user mr-2"></i> About Me
                    </h2>
                    <p className="text-gray-300 mb-4">
                      Creative and results-driven Video Editor and Social Media Manager with 5+ years of experience in 
                      producing high-quality visual content, managing media strategies, and driving engagement for 
                      brands.
                    </p>
                    <p className="text-gray-300">
                      Proficient in Adobe Premiere Pro, After Effects, Photoshop, and Illustrator, with a 
                      proven track record of creating engaging videos and managing successful social media campaigns. 
                      Successfully managed sponsored ads and resolved shadow bans for clients like Mega Pizza, 
                      boosting their online presence and engagement by 30%.
                    </p>
                    <div className="mt-4">
                      <Link to="/about">
                        <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black">
                          Learn More <i className="fas fa-arrow-right ml-2"></i>
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <Card className="glass-effect overflow-hidden gold-shadow">
                  <CardContent className="p-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gold">
                      <i className="fas fa-trophy mr-2"></i> Achievements
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {achievements.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="text-center p-4 rounded-lg bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-gold/10"
                        >
                          <div className="text-3xl font-bold text-gold mb-1 animate-pulse-slow">
                            {item.number}
                          </div>
                          <div className="text-xs text-gray-300">{item.text}</div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Card className="glass-effect overflow-hidden gold-shadow">
                  <CardContent className="p-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gold">
                      <i className="fas fa-briefcase mr-2"></i> Services
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div className="p-4 rounded-lg bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-gold/10">
                        <div className="text-gold text-xl mb-2"><i className="fas fa-video"></i></div>
                        <h3 className="text-white font-semibold mb-1">Video Editing</h3>
                        <p className="text-gray-400 text-sm">Professional video editing services for all your content needs</p>
                      </div>
                      <div className="p-4 rounded-lg bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-gold/10">
                        <div className="text-gold text-xl mb-2"><i className="fas fa-share-alt"></i></div>
                        <h3 className="text-white font-semibold mb-1">Social Media Management</h3>
                        <p className="text-gray-400 text-sm">Comprehensive social media strategy and management</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link to="/services">
                        <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black">
                          View All Services <i className="fas fa-arrow-right ml-2"></i>
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Portfolio */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <Card className="glass-effect overflow-hidden gold-shadow">
                  <CardContent className="p-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gold">
                      <i className="fas fa-images mr-2"></i> Portfolio
                    </h2>
                    <p className="text-gray-300 mb-4">
                      Check out some of my latest projects and work samples.
                    </p>
                    <div className="mt-4">
                      <Link to="/portfolio">
                        <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black">
                          View Portfolio <i className="fas fa-arrow-right ml-2"></i>
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <Card className="glass-effect overflow-hidden gold-shadow">
                  <CardContent className="p-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gold">
                      <i className="fas fa-envelope mr-2"></i> Get In Touch
                    </h2>
                    <p className="text-gray-300 mb-4">
                      Have a project in mind? Let's discuss how I can help you achieve your goals.
                    </p>
                    <div className="mt-4">
                      <Link to="/contact">
                        <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black">
                          Contact Me <i className="fas fa-arrow-right ml-2"></i>
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;