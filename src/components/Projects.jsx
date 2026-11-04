import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Food sharing website",
    description: " A food sharing platform that connects people to share surplus meals and reduce food waste. Join the community to give, receive, and enjoy delicious home-cooked food together..",
    image: "/a11.png",
    link: " https://food-share-c6d9f.web.app/",
  },
  {
    id: 2,
    title: "Building Management System",
    description: " A comprehensive platform to efficiently manage building operations, including tenant management, maintenance requests, and payment tracking. Simplify property administration with real-time data and easy-to-use tools.",
    image: "/a12.png",
    link: "https://building-mgt.web.app/",
  },
  {
    id: 3,
    title: "Recipe Book App",
    description: "A user-friendly app to discover, save, and share your favorite recipes with detailed instructions and ingredient lists. Organize your cooking journey and explore new dishes every day!",
    image: "/a10.png",
    link: "https://recipe-book-app-8c65c.web.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-blue-600">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map(({ id, title, description, image, link }) => (
            <motion.a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-700">{description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
