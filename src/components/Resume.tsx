import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, Eye } from 'lucide-react';

const Resume: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Mohammed Azam.pdf';
    link.download = 'Mohammed_Azam_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open('/Mohammed Azam.pdf', '_blank');
  };

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

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Resume
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-700 p-12 rounded-2xl shadow-xl"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-8"
            >
              <FileText className="text-blue-600 mx-auto mb-6" size={80} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Download My Resume
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Get a comprehensive overview of my experience, skills, and achievements. 
                My resume includes detailed information about my projects, technical expertise, 
                and professional journey in software development and testing.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="mr-3" size={20} />
                Download PDF
              </motion.button>

              <motion.button
                onClick={handleView}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
              >
                <Eye className="mr-3" size={20} />
                View Online
              </motion.button>
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-12 grid md:grid-cols-3 gap-6 text-center"
            >
              <div className="p-4">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">1+</div>
                <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-300">Technologies</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-300">Major Projects</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;