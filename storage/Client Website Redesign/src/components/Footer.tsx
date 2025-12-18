import { Instagram, Facebook, Podcast } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white py-16 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5a5a5a] hover:text-[#ED1C24] transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5a5a5a] hover:text-[#ED1C24] transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-[#5a5a5a] hover:text-[#ED1C24] transition-colors"
            >
              <Podcast size={20} />
            </a>
          </div>

          <div className="text-[#5a5a5a] space-y-1">
            <p>123 Main Street, Suite 100</p>
            <p>Your City, State 12345</p>
            <p>info@squareandplumb.com</p>
          </div>

          <Link
            to="/contact"
            className="px-8 py-3 border border-[#ED1C24] text-[#ED1C24] hover:bg-[#ED1C24] hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
