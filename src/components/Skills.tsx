import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, TestTube, Wrench, Zap, Star, BarChart3, Cloud, Shield } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: [
        { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
        { name: "Python", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "Java", level: 80, color: "from-red-400 to-red-600" },
        { name: "SQL", level: 85, color: "from-green-400 to-green-600" },
        { name: "TypeScript", level: 75, color: "from-blue-500 to-blue-700" }
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web Technologies & Frameworks",
      icon: <Zap size={24} />,
      skills: [
        { name: "React.js", level: 90, color: "from-cyan-400 to-cyan-600" },
        { name: "Node.js", level: 85, color: "from-green-400 to-green-600" },
        { name: "Express.js", level: 85, color: "from-gray-400 to-gray-600" },
        { name: "HTML/CSS", level: 95, color: "from-orange-400 to-orange-600" },
        { name: "Tailwind CSS", level: 85, color: "from-teal-400 to-teal-600" },
        { name: "Bootstrap", level: 80, color: "from-purple-400 to-purple-600" }
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Analysis & Libraries",
      icon: <BarChart3 size={24} />,
      skills: [
        { name: "Pandas", level: 80, color: "from-blue-400 to-blue-600" },
        { name: "NumPy", level: 75, color: "from-orange-400 to-orange-600" },
        { name: "Matplotlib", level: 75, color: "from-red-400 to-red-600" },
        { name: "Seaborn", level: 70, color: "from-purple-400 to-purple-600" },
        { name: "TensorFlow", level: 65, color: "from-yellow-400 to-yellow-600" },
        { name: "Power BI", level: 75, color: "from-blue-500 to-blue-700" }
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Databases & Cloud",
      icon: <Database size={24} />,
      skills: [
        { name: "MySQL", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "MongoDB", level: 80, color: "from-green-400 to-green-600" },
        { name: "PostgreSQL", level: 70, color: "from-blue-500 to-blue-700" },
        { name: "Firebase", level: 75, color: "from-orange-400 to-orange-600" },
        { name: "AWS Basics", level: 65, color: "from-yellow-400 to-yellow-600" }
      ],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Testing & Automation",
      icon: <TestTube size={24} />,
      skills: [
        { name: "Selenium WebDriver", level: 85, color: "from-green-400 to-green-600" },
        { name: "TestNG", level: 80, color: "from-red-400 to-red-600" },
        { name: "JUnit", level: 75, color: "from-blue-400 to-blue-600" },
        { name: "Postman", level: 90, color: "from-orange-400 to-orange-600" },
        { name: "API Testing", level: 85, color: "from-purple-400 to-purple-600" }
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Development Tools & DevOps",
      icon: <Wrench size={24} />,
      skills: [
        { name: "Git & GitHub", level: 90, color: "from-gray-400 to-gray-600" },
        { name: "VS Code", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "Jupyter Notebook", level: 85, color: "from-orange-400 to-orange-600" },
        { name: "Docker", level: 70, color: "from-blue-500 to-blue-700" },
        { name: "Excel", level: 80, color: "from-green-400 to-green-600" },
        { name: "Linux/Ubuntu", level: 75, color: "from-purple-400 to-purple-600" }
      ],
      gradient: "from-gray-500 to-slate-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium flex items-center">
                <Star size={16} className="mr-2" />
                Technical Expertise
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Technologies
            </h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-8"
              initial={{ width: 0 }}
              animate={inView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive technical expertise spanning full-stack development, data analysis, automation testing, and modern development tools for professional IT solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Card glow effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-1000`}
                  whileHover={{ scale: 1.05 }}
                />
                
                <div className="relative bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  {/* Header */}
                  <motion.div
                    className="flex items-center mb-8"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className={`p-3 bg-gradient-to-r ${category.gradient} rounded-xl mr-4 text-white shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </motion.div>
                  
                  {/* Skills */}
                  <div className="space-y-6">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: (index * 0.2) + (idx * 0.1) }}
                      >
                        <div className="flex justify-between items-center mb-3">
                          <motion.span
                            className="text-gray-700 dark:text-gray-300 font-medium"
                            whileHover={{ scale: 1.05 }}
                          >
                            {skill.name}
                          </motion.span>
                          <motion.span
                            className="text-gray-600 dark:text-gray-400 text-sm font-semibold"
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.6, delay: (index * 0.2) + (idx * 0.1) + 0.3 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        
                        {/* Progress bar container */}
                        <div className="relative">
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                            {/* Progress bar fill */}
                            <motion.div
                              className={`h-3 rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ 
                                duration: 1.5, 
                                delay: (index * 0.2) + (idx * 0.1) + 0.5,
                                ease: "easeOut"
                              }}
                            >
                              {/* Shimmer effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: (index * 0.2) + (idx * 0.1) + 1,
                                }}
                              />
                            </motion.div>
                          </div>
                          
                          {/* Skill level indicator */}
                          <motion.div
                            className="absolute top-0 h-3 w-1 bg-white rounded-full shadow-lg"
                            initial={{ left: 0 }}
                            animate={inView ? { left: `${skill.level}%` } : { left: 0 }}
                            transition={{ 
                              duration: 1.5, 
                              delay: (index * 0.2) + (idx * 0.1) + 0.5,
                              ease: "easeOut"
                            }}
                            style={{ transform: 'translateX(-50%)' }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <motion.div
              className="inline-block p-8 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Wrench className="text-blue-600 dark:text-blue-400" size={32} />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Continuous Professional Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                Committed to staying current with emerging technologies in full-stack development, data science, 
                cloud computing, and automation testing to deliver cutting-edge IT solutions.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;