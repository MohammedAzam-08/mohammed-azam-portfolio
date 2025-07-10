import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Code, Database, TestTube, Download, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const floatingIcons = [
    { Icon: Code, delay: 0, x: 100, y: 50 },
    { Icon: Database, delay: 0.5, x: -80, y: 80 },
    { Icon: TestTube, delay: 1, x: 120, y: -60 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900" />
        
        {/* Floating geometric shapes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <div className={`w-${Math.random() > 0.5 ? '4' : '6'} h-${Math.random() > 0.5 ? '4' : '6'} bg-gradient-to-r from-blue-400/20 to-purple-400/20 ${Math.random() > 0.5 ? 'rounded-full' : 'rounded-lg rotate-45'}`} />
          </motion.div>
        ))}

        {/* Floating tech icons */}
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-400/30 dark:text-blue-300/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
              x: [0, x, 0],
              y: [0, y, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + index * 30}%`,
              top: `${30 + index * 20}%`,
            }}
          >
            <Icon size={40} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 pt-8 lg:pt-1"
          >
            {/* Animated greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 sm:mb-8 mt-8 sm:mt-12 lg:mt-16"
            >
              <motion.span 
                className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-blue-600 dark:text-blue-400 font-semibold text-base sm:text-lg border border-blue-200 dark:border-blue-700 shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="mr-2 sm:mr-3 text-2xl sm:text-3xl"
                >
                  👋
                </motion.span>
                <span className="text-sm sm:text-base lg:text-lg">Hello, I'm Mohammed Azam</span>
              </motion.span>
            </motion.div>

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span
                className="block mb-2"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                IT Professional &
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient"
                style={{
                  backgroundSize: '200% 100%',
                  animation: 'gradient 3s ease infinite',
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Full Stack Developer
              </motion.span>
            </motion.h1>
            
            <motion.div
              className="flex items-center mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="flex items-center bg-green-50 dark:bg-green-900/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-green-200 dark:border-green-700"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-1.5 sm:mr-2" />
                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">
                  <span className="hidden sm:inline">Shivamogga, Karnataka, India</span>
                  <span className="sm:hidden">Shivamogga, India</span>
                </span>
              </motion.div>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Full-Stack Developer and Automation Tester with practical experience in{' '}
              <motion.span
                className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                MERN stack applications
              </motion.span>
              , REST APIs, and Selenium-based testing frameworks. Seeking challenging roles in backend development using Java or full-stack technologies.
            </motion.p>

            {/* Tech Stack Badges */}
            <motion.div
              className="mb-8 sm:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.h3 
                className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 uppercase tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                Tech Stack
              </motion.h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                {['JavaScript', 'React.js', 'Node.js', 'Python', 'MongoDB', 'MySQL', 'Selenium', 'TestNG'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs sm:text-sm font-medium border border-gray-200 dark:border-gray-700 text-center shadow-sm hover:shadow-md transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: '#3b82f6',
                      color: '#ffffff',
                      borderColor: '#3b82f6'
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ transitionDelay: `${1.2 + index * 0.1}s` }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.button
                onClick={scrollToAbout}
                className="group relative inline-flex items-center justify-center px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Explore My Work</span>
                <motion.div
                  className="ml-2 sm:ml-3 relative z-10 text-lg sm:text-xl"
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.button>

              <motion.a
                href="/Mohammed Azam.pdf"
                download
                className="group relative inline-flex items-center justify-center px-8 py-3 sm:px-10 sm:py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold text-base sm:text-lg hover:border-blue-500 hover:text-blue-500 transition-all duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                  borderColor: '#3b82f6',
                  color: '#3b82f6',
                  backgroundColor: '#ffffff',
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.a
                href="https://github.com/MohammedAzam-08"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  rotate: 5
                }}
                whileTap={{ scale: 0.9 }}
                className="group relative p-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Github size={20} />
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full opacity-0 group-hover:opacity-20"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/mohammed-azam-6b1726232/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  rotate: -5
                }}
                whileTap={{ scale: 0.9 }}
                className="group relative p-3 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Linkedin size={20} />
                <motion.div
                  className="absolute -inset-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-30"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.a>
              
              <motion.a
                href="mailto:mdazam2722001@gmail.com"
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  rotate: 5
                }}
                whileTap={{ scale: 0.9 }}
                className="group relative p-3 bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail size={20} />
                <motion.div
                  className="absolute -inset-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-30"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Photo */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Animated background circles */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -inset-8 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full opacity-10"
                animate={{ 
                  scale: [1.1, 1, 1.1],
                  rotate: [360, 180, 0]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Profile Image - Made Responsive */}
              <motion.div
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/Photo.jpg"
                  alt="Mohammed Azam - IT Professional"
                  className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-800"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
                  }}
                />
                
                {/* Floating status indicator - Made Responsive */}
                <motion.div
                  className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 bg-green-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex items-center">
                    <motion.div
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-1.5 sm:mr-2"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="hidden sm:inline">Available for work</span>
                    <span className="sm:hidden">Available</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          onClick={scrollToAbout}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
          <motion.div
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
            whileHover={{ borderColor: "#3b82f6" }}
          >
            <motion.div
              className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;