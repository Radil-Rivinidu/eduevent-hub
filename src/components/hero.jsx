import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section style={styles.hero}>
      <div style={styles.overlay}></div>

      <div style={styles.card}>
        <h1 style={styles.title}>EduEvent Hub</h1>

        <p style={styles.subtitle}>
          Stay connected with school events, competitions, clubs, and activities
          — all in one modern platform.
        </p>

        <div style={styles.buttons}>
          <button
            style={styles.primaryBtn}
            onClick={() => navigate("/events")}
          >
            Explore Events
          </button>

          <button
            style={styles.secondaryBtn}
            onClick={() => navigate("/about")}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: "90vh",
    width: "100%",
    backgroundImage:
      "url('/hero.avif')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    padding: "20px",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(10, 15, 30, 0.75)",
  },

  card: {
    position: "relative",
    zIndex: 2,
    maxWidth: "700px",
    textAlign: "center",
    padding: "40px",
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(15px)",
    border: "1px solid rgba(255,255,255,0.15)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
  },

  title: {
    fontSize: "3.2rem",
    fontWeight: "bold",
    color: "white",
    marginBottom: "15px",
  },

  subtitle: {
    fontSize: "1.1rem",
    color: "rgba(255,255,255,0.85)",
    lineHeight: "1.6",
    marginBottom: "25px",
  },

  buttons: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  primaryBtn: {
    padding: "12px 25px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    background: "#00c6ff",
    color: "white",
    fontWeight: "bold",
    fontSize: "15px",
  },

  secondaryBtn: {
    padding: "12px 25px",
    borderRadius: "10px",
    border: "1px solid white",
    cursor: "pointer",
    background: "transparent",
    color: "white",
    fontWeight: "bold",
    fontSize: "15px",
  },
};