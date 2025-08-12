const Banner = () => {
  return (
    <section
      id="home"
      className="bg-gray-50 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side Text */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Hi, I’m <span className="text-blue-600">Fahad Khan</span>  
            <br /> A Passionate Web Developer
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            I create modern, responsive, and user-friendly websites using the latest
            web technologies. Let’s work together to bring your ideas to life!
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg shadow hover:bg-blue-50 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/banner.jpg"
            alt="Profile"
            className="rounded-full shadow-lg w-64 h-64 object-cover border-4 border-blue-100"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
