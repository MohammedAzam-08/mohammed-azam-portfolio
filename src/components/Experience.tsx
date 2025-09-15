import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "CDAC, Bengaluru",
      period: "Apr 2025 – Jun 2025",
      location: "Bengaluru, India",
      description: [
        "Automated 120+ regression and functional test cases using Selenium + TestNG, improving test efficiency by 30%.",
        "Performed end-to-end validation aligned with SDLC & STLC, ensuring zero critical defects in release.",
        "Integrated test automation into CI/CD pipeline with Jenkins, enhancing build verification cycles.",
        "Collaborated with cross-functional teams to ensure high-quality software delivery."
      ],
      color: "blue"
    },
    {
      title: "Intern",
      company: "Edunet Foundation (TechSaksham: Microsoft & SAP)",
      period: "Dec 2024 – Jan 2025",
      location: "Remote",
      description: [
        "Built a Human Pose Estimation project integrating computer vision to detect and analyze human body movements.",
        "Executed manual and automated test cases for ML-driven workflows, reducing user-reported errors by 20%.",
        "Validated UI and backend modules against requirements using functional and API testing.",
        "Ensured smooth deployment and testing of AI-based workflows."
      ],
      color: "green"
    },
    {
      title: "QA Trainee",
      company: "QSpiders, Bengaluru",
      period: "Nov 2022 – Jul 2023",
      location: "Bengaluru, India",
      description: [
        "Authored and executed 100+ requirement-based test cases across regression, smoke, and UAT cycles.",
        "Built reusable Selenium automation scripts with Git version control, ensuring maintainable testing assets.",
        "Logged and tracked defects in defect management tools, achieving 95% on-time closure rate.",
        "Collaborated in Agile sprints to enhance product quality and accelerate release cycles."
      ],
      color: "purple"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative mb-12 md:ml-16"
              >
                {/* Timeline dot */}
                <div className={`absolute -left-20 top-6 w-4 h-4 bg-${exp.color}-600 rounded-full border-4 border-white dark:border-gray-900 hidden md:block`}></div>
                
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <p className={`text-${exp.color}-600 dark:text-${exp.color}-400 font-semibold text-lg mb-2`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end space-y-2">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                        <div className={`w-2 h-2 bg-${exp.color}-600 rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
