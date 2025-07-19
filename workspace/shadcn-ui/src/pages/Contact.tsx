import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import MainLayout from "@/components/layout/MainLayout";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

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
              <span className="text-white">Get in </span>
              <span className="text-gold">Touch</span>
            </h1>
            <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? I'm always open to discussing new opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <Card className="glass-effect overflow-hidden gold-shadow h-full">
                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                  <h2 className="text-2xl md:text-3xl font-bold text-gold mb-6">
                    <i className="fas fa-map-marker-alt mr-2"></i> Contact Information
                  </h2>
                  
                  <div className="space-y-8 mb-auto">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                        <i className="fas fa-envelope text-lg"></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                        <a href="mailto:lokzeg@gmail.com" className="text-gray-300 hover:text-gold transition-colors">
                          lokzeg@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                        <i className="fas fa-phone text-lg"></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                        <a href="tel:+213697787734" className="text-gray-300 hover:text-gold transition-colors">
                          +213 697 787 734
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                        <i className="fab fa-instagram text-lg"></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Instagram</h3>
                        <a 
                          href="https://www.instagram.com/lokzeg?igsh=MXRjcm0zZG5ocDM4ZQ%3D%3D&utm_source=qr" 
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-300 hover:text-gold transition-colors"
                        >
                          @lokzeg
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
                    <div className="flex gap-4">
                      <a 
                        href="https://www.instagram.com/lokzeg?igsh=MXRjcm0zZG5ocDM4ZQ%3D%3D&utm_source=qr" 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all"
                      >
                        <i className="fab fa-behance"></i>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <Card className="glass-effect overflow-hidden gold-shadow">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gold mb-6">
                    <i className="fas fa-paper-plane mr-2"></i> Send a Message
                  </h2>
                  
                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-green-900/30 border border-green-500/30 rounded-lg p-4 text-center"
                    >
                      <div className="text-green-400 text-2xl mb-2">
                        <i className="fas fa-check-circle"></i>
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-1">Message Sent Successfully</h3>
                      <p className="text-gray-300">Thank you for your message. I'll get back to you soon!</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-white">Your Name</Label>
                          <Input 
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            className="bg-[#111] border-gold/20 focus:border-gold text-white"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-white">Your Email</Label>
                          <Input 
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            className="bg-[#111] border-gold/20 focus:border-gold text-white"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-white">Subject</Label>
                        <Input 
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          placeholder="How can I help you?"
                          required
                          className="bg-[#111] border-gold/20 focus:border-gold text-white"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-white">Your Message</Label>
                        <Textarea 
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Write your message here..."
                          required
                          className="min-h-[150px] bg-[#111] border-gold/20 focus:border-gold text-white"
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gold hover:bg-gold/80 text-black font-medium"
                      >
                        {isSubmitting ? (
                          <><i className="fas fa-spinner fa-spin mr-2"></i> Sending...</>
                        ) : (
                          <>Send Message <i className="fas fa-paper-plane ml-2"></i></>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16"
          >
            <Card className="glass-effect overflow-hidden gold-shadow">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gold mb-8 text-center">
                  Frequently Asked Questions
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-lg bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-gold/10">
                    <h3 className="text-lg font-semibold text-white mb-2">How quickly can you deliver a project?</h3>
                    <p className="text-gray-300 text-sm">
                      Delivery times vary based on project complexity. Standard video edits typically take 2-5 days, while comprehensive marketing campaigns or AI solutions may require 1-2 weeks for optimal results.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-gold/10">
                    <h3 className="text-lg font-semibold text-white mb-2">Do you offer revisions on your work?</h3>
                    <p className="text-gray-300 text-sm">
                      Yes, all projects include 2-3 rounds of revisions to ensure your complete satisfaction. Additional revisions can be arranged as needed.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-gold/10">
                    <h3 className="text-lg font-semibold text-white mb-2">What information do you need to start a project?</h3>
                    <p className="text-gray-300 text-sm">
                      For most projects, I'll need a clear brief outlining your objectives, target audience, preferred style, and any specific requirements. We'll discuss all details during the initial consultation.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-gold/10">
                    <h3 className="text-lg font-semibold text-white mb-2">Do you work with international clients?</h3>
                    <p className="text-gray-300 text-sm">
                      Absolutely! I work with clients worldwide and can accommodate different time zones for meetings and communication.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;