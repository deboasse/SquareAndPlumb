import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "figma:asset/377615791661856a94e397e84071cd5348e26e93.png";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      } py-4`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className={`transition-opacity duration-300 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={logo} alt="Square & Plumb Builders" className="h-12" />
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/work"
            className={`transition-colors ${
              scrolled ? "text-[#1a1a1a]" : "text-white"
            } hover:text-[#ED1C24]`}
          >
            Our Work
          </Link>
          <Link
            to="/about"
            className={`transition-colors ${
              scrolled ? "text-[#1a1a1a]" : "text-white"
            } hover:text-[#ED1C24]`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`px-6 py-2 border transition-colors ${
              scrolled
                ? "border-[#ED1C24] text-[#ED1C24] hover:bg-[#ED1C24] hover:text-white"
                : "border-white text-white hover:bg-white hover:text-[#ED1C24]"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
