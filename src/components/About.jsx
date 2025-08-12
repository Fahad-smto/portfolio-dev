import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/banner.jpg"
            alt="About Me"
            className="rounded-lg shadow-lg w-80 h-80 object-cover border-4 border-blue-100"
          />
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hi! I’m <span className="font-semibold">Fahad Khan</span>, a passionate web developer who loves
            creating interactive, modern, and responsive web applications.
            With skills in HTML, CSS, JavaScript, React, TailwindCSS, Express.js, and MongoDB,
            I build both frontend and backend solutions that bring ideas to life.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            My mission is to deliver clean, optimized, and user-friendly websites that provide
            real value to clients and users alike.
          </p>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
