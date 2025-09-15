import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold mb-4"
            >
              Mohammed Azam
            </motion.h3>
            <p className="text-gray-400 mb-4">
              QA & Automation Tester | Full Stack Developer passionate about creating robust software solutions, automated testing frameworks, 
              and delivering high-quality user experiences.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/MohammedAzam-08"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mohammed-azam-6b1726232/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:mdazam2722001@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Resume', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.button
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 mdazam2722001@gmail.com</p>
              <p>📍 Bengaluru, India</p>
              <p>💼 Open to QA Automation, Software Testing & Full Stack Development opportunities</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-400 text-sm flex items-center"
            >
              © {currentYear} Mohammed Azam. Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mx-1 text-red-500"
              >
                <Heart size={16} fill="currentColor" />
              </motion.span>
              using React, TypeScript & QA Automation Tools
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-sm mt-4 md:mt-0"
            >
              Designed & Developed by Mohammed Azam | QA & Automation Enthusiast
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
