import { useState, useEffect } from "react";

function Events() {
  const [events, setEvents] = useState(() => {
  return JSON.parse(localStorage.getItem("events")) || [];
});

  useEffect(() => {
    const savedEvents =
      JSON.parse(localStorage.getItem("events")) || [];

    setEvents(savedEvents);
  }, []);

  return (
    <div className="container">
      <h1 style={{ margin: "40px 0", textAlign: "center" }}>
        Upcoming Events
      </h1>

      {events.length === 0 ? (
        <div
          className="glass"
          style={{
            padding: "30px",
            textAlign: "center",
            borderRadius: "15px",
          }}
        >
          <h2>No Events Available</h2>
          <p>Add events from the Admin Dashboard.</p>
        </div>
      ) : (
        <div style={styles.grid}>
          {events.map((event, index) => (
            <div
              key={index}
              className="glass"
              style={styles.card}
            >
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  style={styles.image}
                />
              )}

              <h2>{event.title}</h2>

              <p>
                📅 <strong>Date:</strong> {event.date}
              </p>

              <p>
                ⏰ <strong>Time:</strong> {event.time}
              </p>

              <p>
                📍 <strong>Location:</strong> {event.location}
              </p>

              <p>
                🏷️ <strong>Category:</strong> {event.category}
              </p>

              <p>
                👤 <strong>Organizer:</strong> {event.organizer}
              </p>

              <p style={{ marginTop: "10px" }}>
                {event.details}
              </p>

              <button style={styles.button}>
                Register Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: "25px",
  },

  card: {
    padding: "20px",
    lineHeight: "1.7",
    borderRadius: "15px",
    transition: "0.3s",
  },

  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "15px",
  },

  button: {
    marginTop: "15px",
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "#00c6ff",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Events;