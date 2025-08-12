import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Get In <span className="text-blue-600">Touch</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Side: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-blue-600 text-2xl" />
                            <span className="text-gray-700">simanto.smto.prog@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaPhoneAlt className="text-blue-600 text-2xl" />
                            <span className="text-gray-700">+880 17 4000 50 43</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                            <span className="text-gray-700">Dhaka, Bangladesh</span>
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white shadow-md rounded-lg p-6 space-y-4"
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Message sent successfully!");
                        }}
                    >
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
