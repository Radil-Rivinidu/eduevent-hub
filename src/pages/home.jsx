import Hero from "../components/Hero";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">

      {/* HERO SECTION */}
      <Hero />
      <section style={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 style={styles.title}>
            EduEvent Hub
          </h1>

          <p style={styles.subtitle}>
            A smart digital platform for managing school events,
            clubs, competitions, exhibitions, and student activities in one place.
          </p>

          <div style={styles.buttons}>
            <button className="btn" onClick={() => navigate("/events")}>
              Explore Events
            </button>

            <button style={styles.secondaryBtn} onClick={() => navigate("/dashboard")}>
              Dashboard
            </button>
          </div>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section style={styles.stats}>
        <div className="glass" style={styles.statBox}>
          <h2>25+</h2>
          <p>Events Organized</p>
        </div>

        <div className="glass" style={styles.statBox}>
          <h2>1200+</h2>
          <p>Students Participating</p>
        </div>

        <div className="glass" style={styles.statBox}>
          <h2>14</h2>
          <p>Active Clubs</p>
        </div>

        <div className="glass" style={styles.statBox}>
          <h2>50+</h2>
          <p>Teachers Involved</p>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Upcoming Events</h2>

        <div style={styles.grid}>
          <div className="glass" style={styles.card}>
            <h3>🏆 Annual Sports Meet</h3>
            <p>Date: June 15</p>
            <p>Location: School Ground</p>
          </div>

          <div className="glass" style={styles.card}>
            <h3>🔬 Science Exhibition</h3>
            <p>Date: July 2</p>
            <p>Location: Main Hall</p>
          </div>

          <div className="glass" style={styles.card}>
            <h3>🎤 Inter School Debate</h3>
            <p>Date: July 10</p>
            <p>Location: Auditorium</p>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Announcements</h2>

        <div className="glass" style={styles.announce}>
          <p>📢 Registration for the Sports Meet is now open!</p>
        </div>

        <div className="glass" style={styles.announce}>
          <p>📢 Science Exhibition project submissions deadline: June 25</p>
        </div>

        <div className="glass" style={styles.announce}>
          <p>📢 New ICT Club members recruitment started!</p>
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Use EduEvent Hub?</h2>

        <div style={styles.grid}>
          <div className="glass" style={styles.card}>
            <h3>📅 Event Management</h3>
            <p>Organize and track all school events easily in one place.</p>
          </div>

          <div className="glass" style={styles.card}>
            <h3>📸 Media Gallery</h3>
            <p>Showcase photos and memories from every school event.</p>
          </div>

          <div className="glass" style={styles.card}>
            <h3>👥 Club System</h3>
            <p>Manage school clubs, memberships and activities efficiently.</p>
          </div>

          <div className="glass" style={styles.card}>
            <h3>📊 Admin Dashboard</h3>
            <p>Monitor all activities and manage system data easily.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={styles.cta}>
        <div className="glass" style={styles.ctaBox}>
          <h2>Ready to Manage Your School Events?</h2>
          <p>Join EduEvent Hub and bring your school activities to life.</p>

          <button className="btn" onClick={() => navigate("/events")}>
            Get Started
          </button>
        </div>
      </section>

    </div>
  );
}

const styles = {
  hero: {
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
  },

  title: {
    fontSize: "4rem",
    background: "linear-gradient(90deg,#7c3aed,#3b82f6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    maxWidth: "750px",
    color: "#cbd5e1",
    lineHeight: "1.8",
    marginTop: "20px",
    fontSize: "1.1rem",
  },

  buttons: {
    display: "flex",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap",
  },

  secondaryBtn: {
    padding: "12px 25px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "transparent",
    color: "white",
    cursor: "pointer",
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap: "20px",
    margin: "50px 0",
  },

  statBox: {
    padding: "30px",
    textAlign: "center",
  },

  section: {
    margin: "80px 0",
  },

  sectionTitle: {
    fontSize: "2rem",
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "20px",
  },

  card: {
    padding: "25px",
    lineHeight: "1.6",
  },

  announce: {
    padding: "20px",
    marginBottom: "15px",
  },

  cta: {
    margin: "80px 0",
    textAlign: "center",
  },

  ctaBox: {
    padding: "50px",
  },
};

export default Home;