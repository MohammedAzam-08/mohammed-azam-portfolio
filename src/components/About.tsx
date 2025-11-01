import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, TestTube, GraduationCap, Award, Target, Briefcase, Users, Coffee, Heart } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

 const stats = [
  { number: "1+", label: "Years Experience", icon: Award, color: "from-blue-500 to-blue-600" },
  { number: "92%", label: "ML Model Accuracy", icon: Code, color: "from-purple-500 to-purple-600" },
  { number: "10K+", label: "Images Processed", icon: Target, color: "from-green-500 to-green-600" },
  { number: "50+", label: "Test Cases Created", icon: TestTube, color: "from-orange-500 to-orange-600" },
  { number: "30+", label: "Automated Scripts", icon: Briefcase, color: "from-red-500 to-red-600" },
];

const skills = [
  { name: "Manual Testing", level: 95, icon: TestTube },
  { name: "Automation Testing", level: 90, icon: Code },
  { name: "Frontend Development (React.js)", level: 85, icon: Code },
  { name: "Backend Development (Node.js & SQL)", level: 80, icon: Database },
  { name: "AI/ML Development", level: 88, icon: Target },
  { name: "Team Collaboration & Agile", level: 95, icon: Users },
];


  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                Get to know me
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
              initial={{ width: 0 }}
              animate={inView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="text-white" size={24} />
                </motion.div>
                <motion.div
                  className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
  <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl">
    <motion.p
      className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      MCA Graduate and <span className="font-semibold text-blue-600 dark:text-blue-400">Software Engineer </span> 
      with strong expertise in <span className="font-semibold text-purple-600 dark:text-purple-400">automation testing frameworks </span> 
      like Selenium, TestNG, BDD, and API testing using Postman. Skilled in Agile SDLC/STLC processes, regression, smoke, and UAT cycles, 
      ensuring high-quality software releases. Experienced in integrating automated tests into 
      <span className="font-semibold text-green-600 dark:text-green-400"> CI/CD pipelines</span> with Jenkins and Git workflows.
    </motion.p>
    <motion.p
      className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      Completed MCA with hands-on <span className="font-semibold text-purple-600 dark:text-purple-400">ML internship in Human Pose Estimation</span>, 
      achieving 92% model accuracy. Passionate about taking on challenging roles in <span className="font-semibold text-blue-600 dark:text-blue-400">
      Software Testing, QA Automation,</span> and <span className="font-semibold text-green-600 dark:text-green-400">AI/ML</span> development, 
      with practical experience in building intelligent systems, REST APIs, and robust automation frameworks.
    </motion.p>
  </div>
</motion.div>


          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-12">
  {/* Development & AI Card */}
  <motion.div
    variants={cardVariants}
    className="group bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
    whileHover={{ y: -5 }}
  >
    <motion.div
      className="flex items-center mb-6"
      whileHover={{ x: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mr-4"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Code className="text-white" size={24} />
      </motion.div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Development & AI</h3>
    </motion.div>
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
      Skilled in full-stack development using <span className="font-semibold text-blue-600 dark:text-blue-400">MERN Stack</span>, 
      <span className="font-semibold text-orange-600 dark:text-orange-400">Java with Spring Boot</span>, and proficient in 
      <span className="font-semibold text-green-600 dark:text-green-400">Python with frameworks like Flask and Django</span>. 
      Experienced in <span className="font-semibold text-purple-600 dark:text-purple-400">AI/ML-powered applications</span> 
      and computer vision projects. Implemented intelligent solutions using TensorFlow, OpenCV, and Python libraries, building scalable and data-driven web applications.
    </p>
  </motion.div>

  {/* Software Testing & QA Card */}
  <motion.div
    variants={cardVariants}
    className="group bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
    whileHover={{ y: -5 }}
  >
    <motion.div
      className="flex items-center mb-6"
      whileHover={{ x: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-lg mr-4"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <TestTube className="text-white" size={24} />
      </motion.div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Software Testing & QA</h3>
    </motion.div>
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
      Proficient in <span className="font-semibold text-green-600 dark:text-green-400">manual and automated testing</span> using 
      Selenium WebDriver, TestNG, and BDD frameworks. Experienced in API testing with Postman, regression, smoke, and UAT cycles, 
      and integrating automated tests into <span className="font-semibold text-blue-600 dark:text-blue-400">CI/CD pipelines</span> 
      to ensure robust, high-quality software releases.
    </p>
  </motion.div>
</motion.div>


          <motion.div variants={itemVariants}>
  <motion.div
    className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl shadow-xl"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.h3
      className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
      whileHover={{ x: 10 }}
    >
      <motion.div
        className="p-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg mr-4"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <GraduationCap className="text-white" size={28} />
      </motion.div>
      Education
    </motion.h3>
    <div className="space-y-6">
      <motion.div
        className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
        whileHover={{ 
          x: 10,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Master of Computer Applications (MCA)
        </h4>
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">Yenepoya University</p>
        <p className="text-gray-600 dark:text-gray-300 mb-1">2023 – 2025 | CGPA: 8.5/10</p>
        <p className="text-gray-600 dark:text-gray-300 font-medium">Specialization: AI, Machine Learning, Data Science</p>
      </motion.div>
      <motion.div
        className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
        whileHover={{ 
          x: 10,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Bachelor of Computer Applications (BCA)
        </h4>
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">Kuvempu University</p>
        <p className="text-gray-600 dark:text-gray-300 mb-1">2019 – 2022 | CGPA: 7.1/10</p>
      </motion.div>
    </div>
  </motion.div>
</motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;