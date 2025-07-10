import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#resume', label: 'Resume' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20'
          : 'bg-transparent'
      }`}
    >
      <motion.nav 
        className="container mx-auto px-8 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="relative"
          >
            <motion.h1
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer relative"
              onClick={() => scrollToSection('#home')}
              whileHover={{ 
                scale: 1.02,
                background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              style={{
                backgroundSize: '200% 100%',
                animation: 'gradient 3s ease infinite',
              }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Mohammed Azam
              </motion.span>
            </motion.h1>
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ width: 0, opacity: 0 }}
              whileHover={{ width: '100%', opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            {/* Floating dots animation */}
            <motion.div
              className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-3 text-base font-medium transition-colors duration-200 ${
                  activeSection === item.href.substring(1)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.7 + index * 0.1, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 300
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  whileHover={{ 
                    textShadow: "0 0 8px rgba(59, 130, 246, 0.6)"
                  }}
                >
                  {item.label}
                </motion.span>
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                    layoutId="activeSection"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 30,
                      duration: 0.6
                    }}
                  />
                )}
                {/* Hover effect background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg -z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.2 }
                  }}
                />
              </motion.button>
            ))}
            
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 180,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { duration: 0.3 }
                }}
              />
              <motion.div
                initial={false}
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="relative z-10"
              >
                {isDark ? <Sun size={24} /> : <Moon size={24} />}
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden flex items-center space-x-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.4 }}
              >
                {isDark ? <Sun size={22} /> : <Moon size={22} />}
              </motion.div>
            </motion.button>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="p-3 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3, type: "spring" }}
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </motion.div>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ 
            duration: 0.4,
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          className="md:hidden overflow-hidden"
        >
          <motion.div
            className="py-6 space-y-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg mt-4 shadow-xl border border-gray-200/20 dark:border-gray-700/20"
            initial={{ y: -20, scale: 0.95 }}
            animate={{ 
              y: isMenuOpen ? 0 : -20,
              scale: isMenuOpen ? 1 : 0.95
            }}
            transition={{ duration: 0.4, type: "spring" }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`group relative block w-full text-left px-8 py-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-lg mx-3 text-base font-medium ${
                  activeSection === item.href.substring(1) 
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0, 
                  x: isMenuOpen ? 0 : -30 
                }}
                transition={{ 
                  duration: 0.4, 
                  delay: isMenuOpen ? index * 0.1 : 0,
                  type: "spring",
                  stiffness: 300
                }}
                whileHover={{ 
                  x: 10,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="flex items-center justify-between"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="font-medium text-base">{item.label}</span>
                  <motion.div
                    className="w-3 h-3 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
                {/* Active indicator */}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-r"
                    layoutId="mobileActiveSection"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
            
            {/* Mobile menu footer with social links animation */}
            <motion.div
              className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700 px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0,
                y: isMenuOpen ? 0 : 20
              }}
              transition={{ 
                delay: isMenuOpen ? navItems.length * 0.1 + 0.2 : 0,
                duration: 0.4
              }}
            >
              <motion.div
                className="text-center text-sm text-gray-500 dark:text-gray-400"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  animate={{ 
                    background: ['linear-gradient(90deg, #3b82f6, #8b5cf6)', 'linear-gradient(90deg, #8b5cf6, #3b82f6)'],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold"
                >
                  Made with ❤️ by Mohammed Azam
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;