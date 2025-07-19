import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import MainLayout from "@/components/layout/MainLayout";

const About = () => {
  const experiences = [
    {
      title: "Marketing Manager & Video Editor",
      company: "E Makers",
      period: "2025 - Present",
      description: "Managing marketing strategies and creating video content for the company.",
      achievements: [
        "Leading marketing initiatives and video production",
        "Developing and implementing strategic content calendar",
        "Creating compelling video content for digital platforms",
        "Optimizing marketing campaigns for better ROI"
      ]
    },
    {
      title: "Social Media Manager",
      company: "Mega Pizza",
      period: "2023 - 2024",
      description: "Managed sponsored ads and resolved shadow bans, boosting online presence and engagement by 30%.",
      achievements: [
        "Increased social media engagement by 30%",
        "Developed and implemented strategic content calendar",
        "Resolved platform issues including shadow bans",
        "Optimized ad campaigns for better ROI"
      ]
    },
    {
      title: "Call Center Founder",
      company: "El Ihssaniet Clinic",
      period: "2022 - 2024",
      description: "Founded and led a call center, bringing in clients through targeted ad campaigns.",
      achievements: [
        "Established complete call center operations",
        "Implemented targeted advertising campaigns",
        "Increased client acquisition",
        "Optimized customer service protocols"
      ]
    },
    {
      title: "Video Editor",
      company: "Freelance",
      period: "2019 - Present",
      description: "Creating high-quality visual content for various clients across different industries.",
      achievements: [
        "Edited 100+ professional videos across multiple platforms",
        "Specialized in motion graphics and visual effects",
        "Developed unique visual identities for brands",
        "Optimized content for various social media platforms"
      ]
    }
  ];

  const skills = [
    {
      category: "Video Editing",
      items: ["Adobe Premiere Pro", "After Effects", "Blender", "DaVinci Resolve", "Motion Graphics"]
    },
    {
      category: "Design",
      items: ["Photoshop", "Illustrator", "InDesign", "UI/UX Basics", "Brand Identity"]
    },
    {
      category: "Marketing",
      items: ["Social Media Management", "Content Strategy", "Meta Advertising", "TikTok Advertising", "Analytics"]
    },
    {
      category: "AI Tools",
      items: ["AI Workflow Development", "Custom AI Agent Creation", "Prompt Engineering", "Automation Solutions"]
    }
  ];

  const education = [
    {
      degree: "Licentiate Degree in Financial Management",
      institution: "Université Hadj Lakhdar, Batna",
      period: "Jun 2022",
      description: "Specialized in financial management and business strategies."
    },
    {
      degree: "Baccalaureate Degree in Sciences",
      institution: "Benflis Tahar High School, Batna",
      period: "Jun 2019",
      description: "Focused on scientific disciplines and analytical skills."
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
              <span className="text-white">About </span>
              <span className="text-gold">Me</span>
            </h1>
            <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Creative and results-driven professional with a passion for visual storytelling and digital marketing excellence.
            </p>
          </motion.div>

          {/* Professional Profile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-12"
          >
            <Card className="glass-effect overflow-hidden gold-shadow">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gold">Professional Profile</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Creative and results-driven Video Editor and Social Media Manager with 5+ years of experience in 
                    producing high-quality visual content, managing media strategies, and driving engagement for 
                    brands.
                  </p>
                  <p>
                    Proficient in Adobe Premiere Pro, After Effects, Photoshop, and Illustrator, with a 
                    proven track record of creating engaging videos and managing successful social media campaigns. 
                    Successfully managed sponsored ads and resolved shadow bans for clients like Mega Pizza, 
                    boosting their online presence and engagement by 30%.
                  </p>
                  <p>
                    Founded and led a call center at El Ihssaniet Clinic, bringing in clients through targeted ad campaigns. 
                    Passionate about leveraging visual storytelling and data-driven strategies to deliver impactful results.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="glass-effect overflow-hidden gold-shadow">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gold">
                  <i className="fas fa-briefcase mr-2"></i> Work Experience
                </h2>
                
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative pl-6 border-l border-gold/30"
                    >
                      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gold"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mb-2">
                          <span className="text-gold">{exp.company}</span>
                          <span className="hidden md:block text-gray-400">•</span>
                          <span className="text-gray-400 text-sm">{exp.period}</span>
                        </div>
                        <p className="text-gray-300 mb-3">{exp.description}</p>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-gray-400 flex items-start">
                              <i className="fas fa-check text-gold mt-1 mr-2"></i>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-12"
          >
            <Card className="glass-effect overflow-hidden gold-shadow">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gold">
                  <i className="fas fa-star mr-2"></i> Professional Skills
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skillGroup, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-4 rounded-lg bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-gold/10"
                    >
                      <h3 className="text-lg font-semibold text-gold mb-3">{skillGroup.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 text-xs bg-black/50 border border-gold/20 rounded-full text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Card className="glass-effect overflow-hidden gold-shadow">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gold">
                  <i className="fas fa-graduation-cap mr-2"></i> Education
                </h2>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative pl-6 border-l border-gold/30"
                    >
                      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gold"></div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mb-2">
                          <span className="text-gold">{edu.institution}</span>
                          <span className="hidden md:block text-gray-400">•</span>
                          <span className="text-gray-400 text-sm">{edu.period}</span>
                        </div>
                        <p className="text-gray-300">{edu.description}</p>
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

export default About;