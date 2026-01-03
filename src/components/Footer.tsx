import { Instagram, Facebook, Podcast } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white py-16 border-t border-gray-200">
      <div className="container mx-auto px-6">
        {/* Mobile: stacked centered, Desktop: 3-column grid */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '2.5rem',
          }}
          className="footer-wrapper"
        >
          <style>{`
            @media (min-width: 768px) {
              .footer-wrapper {
                display: grid !important;
                grid-template-columns: 1fr 1fr 1fr !important;
                align-items: center !important;
                text-align: center !important;
              }
            }
          `}</style>

          {/* Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem' }}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#5a5a5a', transition: 'color 0.3s' }}
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#5a5a5a', transition: 'color 0.3s' }}
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              style={{ color: '#5a5a5a', transition: 'color 0.3s' }}
            >
              <Podcast size={24} />
            </a>
          </div>

          {/* Address - stacked vertically */}
          <div style={{
            color: '#5a5a5a',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
            fontSize: '0.95rem',
            lineHeight: '1.6',
          }}>
            <p style={{ margin: 0 }}>978-855-8208</p>
            <p style={{ margin: 0 }}>rita@squareandplumb.com</p>
            <p style={{ margin: 0 }}>PO Box 6077</p>
            <p style={{ margin: 0 }}>Gloucester, MA 01930</p>
          </div>

          {/* Contact Button */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link
              to="/contact"
              style={{
                padding: '0.75rem 2rem',
                border: '1px solid #ED1C24',
                color: '#ED1C24',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'all 0.3s',
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
