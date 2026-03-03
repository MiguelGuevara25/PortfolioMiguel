import { useState } from "react";
import { MdDownload } from "react-icons/md";

const Header = () => {
  const [activeSection, setActiveSection] = useState("fullstack");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 transition-all duration-300">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="h-8 w-8 rounded bg-gradient-to-r from-blue-500 to-blue-600 animate-pulse-slow"></div>
            <span className="text-xl font-semibold text-white">
              Miguel Guevara
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setActiveSection("fullstack")}
              className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 hover:scale-105 ${
                activeSection === "fullstack"
                  ? "text-blue-400 scale-105"
                  : "text-slate-300"
              }`}
            >
              Full Stack Development
            </button>
            <button
              onClick={() => setActiveSection("data")}
              className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 hover:scale-105 ${
                activeSection === "data"
                  ? "text-blue-400 scale-105"
                  : "text-slate-300"
              }`}
            >
              Data Analytics
            </button>
            <a
              href="/pdf/CV-Miguel-Guevara.pdf"
              download="CV-Miguel-Guevara.pdf"
              className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 flex items-center gap-2 rounded px-4 py-2 border"
            >
              <MdDownload />
              CV
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
