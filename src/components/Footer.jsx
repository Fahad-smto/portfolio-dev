import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo / Name */}
        <h2 className="text-lg font-semibold">Fahad Khan</h2>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="text-xl hover:text-blue-300 transition" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub className="text-xl hover:text-blue-300 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-xl hover:text-blue-300 transition" />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-4 text-center text-sm text-blue-100">
        © {new Date().getFullYear()} Fahad Khan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
