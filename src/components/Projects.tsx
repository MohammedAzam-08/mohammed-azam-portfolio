import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code, Database, Shield, Sparkles, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
  {
    title: "AI-Driven NLP to SQL Query and Visualization",
    description: "An AI-powered system that converts natural language queries into SQL statements and visualizes the results. Users can interact with databases without writing SQL manually.",
    features: [
      "Converts natural language to SQL queries",
      "Visualizes query results with interactive charts",
      "Admin panel for managing configurations and viewing analytics",
      "Built with Flask, MySQL, and modern front-end libraries"
    ],
    technologies: ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript"],
    icon: <Code className="text-blue-600" size={24} />,
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
    githubUrl: "https://github.com/MohammedAzam-08/AI-Driven-NLP-to-SQL-Query-and-Visualization",
    liveUrl: ""
  },
  {
    title: "Examify – Tablet Exam Portal",
    description: "A React.js + Node.js portal with timer-based auto-submission, real-time result analytics, and question bank management. Successfully used by 100+ users across multiple exam sessions with tablet optimization.",
    features: [
      "Timer-based auto-submission system",
      "Advanced question bank management",
      "Real-time result analytics and reporting",
      "Tablet-optimized responsive design"
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Socket.io"],
    icon: <Database className="text-green-600" size={24} />,
    color: "green",
    gradient: "from-green-500 to-emerald-500",
    githubUrl: "https://github.com/MohammedAzam-08/Examify",
    liveUrl: ""
  },
  {
    title: "Human Pose Estimation System",
    description: "A Machine Learning project developed during internship using TensorFlow and OpenCV for real-time human pose detection and analysis. Achieved 92% accuracy in pose estimation.",
    features: [
      "Real-time human pose detection using TensorFlow",
      "Computer vision implementation with OpenCV",
      "92% model accuracy with optimized performance",
      "Processed 10K+ images for training and validation"
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "NumPy", "Pandas", "Matplotlib"],
    icon: <Sparkles className="text-purple-600" size={24} />,
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
    githubUrl: "https://github.com/MohammedAzam-08/Human-Pose-Estimation",
    liveUrl: ""
  },
  {
    title: "Smart Waste Management System",
    description: "A scalable full-featured application that digitizes municipal waste complaint management — from citizen reporting to worker verification.",
    features: [
      "Complaint reporting with photos & Google Maps location",
      "JWT-based authentication and role-based access control",
      "Worker assignment system managed by agents",
      "Real-time notifications and analytics dashboard"
    ],
    technologies: ["React.js", "TypeScript", "Node.js", "Spring Boot", "MySQL", "SQLite", "Tailwind CSS"],
    icon: <Shield className="text-yellow-600" size={24} />,
    color: "yellow",
    gradient: "from-yellow-400 to-yellow-600",
    githubUrl: "https://github.com/MohammedAzam-08/Smart-Waste-Management-System",
    liveUrl: ""
  },
  {
    title: "Expense Tracker – Smart Finance App",
    description: "A full-stack personal finance management system enabling users to track expenses, manage bills, and gain insights using ML predictions.",
    features: [
      "User authentication and account management (JWT-secured)",
      "Add, categorize, and update personal expenses",
      "Recurring bill management with reminders",
      "Visualize spending trends and ML-based predictions"
    ],
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Python", "JavaScript", "Firebase"],
    icon: <Code className="text-indigo-600" size={24} />,
    color: "indigo",
    gradient: "from-indigo-500 to-purple-500",
    githubUrl: "https://github.com/MohammedAzam-08/Expense-Tracker",
    liveUrl: ""
  },
  {
    title: "Crowd-Funding Web3 dApp",
    description: "A decentralized crowdfunding platform using Next.js, TypeScript, Thirdweb SDK, and Solidity, enabling blockchain-backed fundraising campaigns.",
    features: [
      "Wallet authentication via MetaMask",
      "Create & view campaigns with metadata stored on IPFS",
      "Crypto contributions using smart contracts",
      "Next.js + Tailwind responsive frontend"
    ],
    technologies: ["Next.js", "TypeScript", "Thirdweb SDK", "Solidity", "Tailwind CSS", "React.js"],
    icon: <Sparkles className="text-pink-600" size={24} />,
    color: "pink",
    gradient: "from-pink-500 to-rose-500",
    githubUrl: "https://github.com/MohammedAzam-08/Crowd-Funding-Web3",
    liveUrl: ""
  },
  {
    title: "EduMate – Course Management System",
    description: "A comprehensive MERN stack platform for online learning with user authentication, instructor dashboard, and student progress tracking.",
    features: [
      "Secure JWT-based authentication and authorization",
      "Real-time data visualization using Chart.js",
      "Dynamic course modules with progress tracking",
      "Responsive design with modern UI/UX"
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Chart.js", "JWT"],
    icon: <Code className="text-blue-600" size={24} />,
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
    githubUrl: "https://github.com/MohammedAzam-08/EduMate",
    liveUrl: ""
  },
  {
    title: "Digital Asset Management System",
    description: "A secure web application for uploading, categorizing, and managing digital files with role-based access and previews.",
    features: [
      "JWT-based authentication system",
      "Role-based access control (RBAC)",
      "File upload with categorization",
      "Real-time file previews and management"
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Multer"],
    icon: <Shield className="text-purple-600" size={24} />,
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
    githubUrl: "https://github.com/MohammedAzam-08/Digital-Asset-Management",
    liveUrl: ""
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
    hidden: { opacity: 0, scale: 0.8, rotateX: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
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
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium flex items-center">
                <Sparkles size={16} className="mr-2" />
                My Work
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"
              initial={{ width: 0 }}
              animate={inView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in AI/ML, full-stack development, and modern web technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Card glow effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-1000`}
                  whileHover={{ scale: 1.05 }}
                />
                
                <div className="relative bg-white dark:bg-gray-700 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Header with gradient */}
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  
                  <div className="p-8">
                    {/* Project icon and title */}
                    <motion.div
                      className="flex items-center mb-6"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className={`p-3 bg-gradient-to-r ${project.gradient} rounded-xl mr-4 shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        {project.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                    </motion.div>
                    
                    <motion.p
                      className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide flex items-center">
                        <motion.div
                          className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.1) }}
                          >
                            <motion.div
                              className={`w-1.5 h-1.5 bg-gradient-to-r ${project.gradient} rounded-full mt-2 mr-3 flex-shrink-0`}
                              whileHover={{ scale: 1.5 }}
                            />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-10 text-${project.color}-800 dark:text-${project.color}-300 text-xs rounded-full font-medium border border-${project.color}-200 dark:border-${project.color}-700`}
                            whileHover={{ 
                              scale: 1.05,
                              boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ duration: 0.3, delay: (index * 0.1) + (idx * 0.05) }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex space-x-4">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                          <Github size={16} className="mr-2" />
                          View Code
                        </motion.a>
                      )}
                      {project.liveUrl ? (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center px-4 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </motion.a>
                      ) : (
                        <motion.span
                          className="flex items-center justify-center px-4 py-3 border-2 border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-500 rounded-xl font-medium cursor-not-allowed"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Coming Soon
                        </motion.span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.div
              className="inline-block p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Interested in working together?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm always open to discussing new opportunities and exciting projects.
              </p>
              <motion.button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;