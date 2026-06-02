import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <Link to="/" style={styles.logoContainer}>
        <img src="/logo.png" alt="EduEvent Hub Logo" style={styles.logo} />
        <span style={styles.logoText}>EduEvent Hub</span>
      </Link>

      {/* Menu button (mobile only) */}
      {isMobile && (
        <button style={styles.menuBtn} onClick={() => setOpen(!open)}>
          ☰
        </button>
      )}

      {/* Links */}
      <div
        style={{
          ...styles.links,
          ...(isMobile
            ? open
              ? styles.mobileOpen
              : styles.mobileClosed
            : styles.desktop),
        }}
      >
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/events" onClick={() => setOpen(false)}>Events</Link>
        <Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
        <Link to="/clubs" onClick={() => setOpen(false)}>Clubs</Link>
        <Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 5%",
    background: "rgba(0,0,0,0.4)",
    backdropFilter: "blur(10px)",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textDecoration: "none",
  },

  logo: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
  },

  logoText: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "white",
  },

  menuBtn: {
    fontSize: "28px",
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
  },

  links: {
    display: "flex",
    gap: "20px",
  },

  desktop: {
    display: "flex",
  },

  mobileOpen: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "80px",
    left: "0",
    right: "0",
    background: "rgba(0,0,0,0.9)",
    padding: "20px",
    gap: "15px",
    zIndex: 1000,
  },

  mobileClosed: {
    display: "none",
  },
};

export default Navbar;