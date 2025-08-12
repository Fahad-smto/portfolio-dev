import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    year: "Completed",
    title: "Higher Secondary Certificate (HSC)",
    place: "Dhaka commerce college",
    description: "Successfully completed HSC with strong academic performance.",
  },
  {
    year: "Ongoing (3rd Year)",
    title: "Bachelor’s Degree",
    place: "Dhaka college",
    description: "Currently pursuing a Bachelor's degree with a focus on technology and development.",
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-blue-600">Education</span>
        </h2>

        <div className="relative border-l-4 border-blue-600 pl-6 space-y-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Icon */}
              <div className="absolute -left-9 flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full">
                <FaGraduationCap />
              </div>

              <h3 className="text-xl font-semibold text-gray-800">{edu.title}</h3>
              <p className="text-gray-600 italic">{edu.place}</p>
              <span className="text-sm text-gray-500">{edu.year}</span>
              <p className="mt-2 text-gray-700">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
