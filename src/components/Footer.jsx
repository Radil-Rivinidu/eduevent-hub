import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="glass" style={styles.footer}>
      <div style={styles.grid}>
        {/* Logo & Description */}
        <div>
          <h2>EduEvent Hub</h2>

          <p style={styles.text}>
            EduEvent Hub is a modern platform designed to help
            students, teachers, and parents stay informed about
            school events, competitions, exhibitions, clubs, and
            activities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>

          <ul style={styles.list}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/clubs">Clubs</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Activities */}
        <div>
          <h3>Event Categories</h3>

          <ul style={styles.list}>
            <li>🏆 Sports Meets</li>
            <li>🔬 Science Exhibitions</li>
            <li>💻 ICT Competitions</li>
            <li>🎭 Cultural Events</li>
            <li>🎵 Music Festivals</li>
            <li>🎤 Debates</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3>Contact Information</h3>

          <p>Email: edueventhub@gmail.com</p>
          <p>Phone: +94 77 123 4567</p>
          <p>Sri Lanka</p>

          <div style={styles.icons}>
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
            <FaEnvelope />
          </div>
        </div>
      </div>

      <hr style={styles.hr} />

      {/* Competition Access */}
      <div style={styles.adminSection}>
        <h3>Competition Evaluation Portal</h3>

        <p style={styles.adminText}>
          Admins can access the administrative dashboard to test
          event management, gallery management, announcements,
          and platform features.
        </p>

        <Link to="/admin">
          <button className="btn">
            Open Admin Dashboard
          </button>
        </Link>
      </div>

      <hr style={styles.hr} />

      <p style={styles.copy}>
        © 2026 EduEvent Hub | Designed for School Event Management
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    margin: "50px 20px 20px",
    padding: "40px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "40px",
  },

  text: {
    marginTop: "15px",
    lineHeight: "1.8",
    color: "#cbd5e1",
  },

  list: {
    listStyle: "none",
    marginTop: "15px",
    lineHeight: "2",
  },

  icons: {
    display: "flex",
    gap: "15px",
    marginTop: "20px",
    fontSize: "1.5rem",
    cursor: "pointer",
  },

  hr: {
    margin: "30px 0",
    border: "1px solid rgba(255,255,255,0.1)",
  },

  adminSection: {
    textAlign: "center",
    padding: "20px",
  },

  adminText: {
    maxWidth: "700px",
    margin: "15px auto 25px",
    color: "#cbd5e1",
    lineHeight: "1.8",
  },

  copy: {
    textAlign: "center",
    color: "#94a3b8",
  },
};

export default Footer;