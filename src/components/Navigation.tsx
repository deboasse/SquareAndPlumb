import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "figma:asset/377615791661856a94e397e84071cd5348e26e93.png";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const location = useLocation();

  // Check if we're on a page that should show the logo
  const isHomePage = location.pathname === '/';
  const showLogoAlways = !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setMobileMenuOpen(false);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: '1rem 0',
          backgroundColor: scrolled ? 'white' : 'transparent',
          boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link
            to="/"
            style={{
              opacity: scrolled || showLogoAlways ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
          >
            <img
              src={logo}
              alt="Square & Plumb Builders"
              style={{
                height: isMobile ? '38px' : '48px',
                maxWidth: 'none',
                filter: (!scrolled && showLogoAlways)
                  ? 'brightness(0) invert(1) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4))'
                  : 'none',
                transition: 'filter 0.3s ease',
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <Link
                to="/about"
                style={{
                  color: scrolled ? '#1a1a1a' : 'white',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
              >
                About Us
              </Link>
              <Link
                to="/work"
                style={{
                  color: scrolled ? '#1a1a1a' : 'white',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
              >
                Our Work
              </Link>
              <Link
                to="/contact"
                style={{
                  padding: '0.5rem 1.5rem',
                  border: `1px solid ${scrolled ? '#ED1C24' : 'white'}`,
                  color: scrolled ? '#ED1C24' : 'white',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                Contact
              </Link>
            </div>
          )}

          {/* Mobile Hamburger Button */}
          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '32px',
                height: '32px',
                gap: '6px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              aria-label="Toggle menu"
            >
              <span
                style={{
                  display: 'block',
                  width: '24px',
                  height: '2px',
                  backgroundColor: scrolled ? '#1a1a1a' : 'white',
                  transition: 'all 0.3s ease',
                  transform: mobileMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '24px',
                  height: '2px',
                  backgroundColor: scrolled ? '#1a1a1a' : 'white',
                  transition: 'all 0.3s ease',
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '24px',
                  height: '2px',
                  backgroundColor: scrolled ? '#1a1a1a' : 'white',
                  transition: 'all 0.3s ease',
                  transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
                }}
              />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 55,
            opacity: mobileMenuOpen ? 1 : 0,
            pointerEvents: mobileMenuOpen ? 'auto' : 'none',
            transition: 'opacity 0.3s ease',
          }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      {isMobile && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            height: '100%',
            width: '256px',
            backgroundColor: 'white',
            zIndex: 60,
            boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.15)',
            transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease',
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#1a1a1a',
            }}
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" style={{ width: '24px', height: '24px' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div style={{ padding: '4rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Link
              to="/about"
              style={{ color: '#1a1a1a', fontSize: '1.125rem', textDecoration: 'none' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/work"
              style={{ color: '#1a1a1a', fontSize: '1.125rem', textDecoration: 'none' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Work
            </Link>
            <Link
              to="/contact"
              style={{
                padding: '0.75rem 1.5rem',
                border: '1px solid #ED1C24',
                color: '#ED1C24',
                textAlign: 'center',
                textDecoration: 'none',
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
