import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="gradient-bg py-10 border-t border-gold/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gold">LOK<span className="text-white">ZEG</span></h3>
            <p className="text-gray-300 text-sm max-w-xs">
              Creative and results-driven Video Editor and Social Media Manager with 5+ years of experience in producing high-quality visual content.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-gold transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold transition-colors text-sm">About</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-gold transition-colors text-sm">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-gold transition-colors text-sm">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors text-sm">Contact</Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <i className="fas fa-envelope text-gold"></i>
                <a href="mailto:lokzeg@gmail.com" className="hover:text-gold transition-colors">
                  lokzeg@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <i className="fas fa-phone text-gold"></i>
                <a href="tel:+213697787734" className="hover:text-gold transition-colors">
                  +213 697 787 734
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-sm mt-4">
                <a 
                  href="https://www.instagram.com/lokzeg?igsh=MXRjcm0zZG5ocDM4ZQ%3D%3D&utm_source=qr" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xl text-gold hover:text-white transition-colors"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="mt-10 pt-5 border-t border-gold/10 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} <span className="text-gold">LOKZEG</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;