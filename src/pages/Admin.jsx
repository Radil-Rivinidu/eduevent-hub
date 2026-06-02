import { useState } from "react";
import { eventsData, galleryData } from "../data/data";
import { Navigate } from "react-router-dom";

function Admin() {
  const logout = () => {
    localStorage.removeItem("adminLoggedIn");
    window.location.href = "/";
  };

  const [events, setEvents] = useState(() => {
  return JSON.parse(localStorage.getItem("events")) || [];
  });
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    category: "",
    organizer: "",
    image: "",
    details: "",
  });

 const [gallery, setGallery] = useState(() => {
  return JSON.parse(localStorage.getItem("gallery")) || [];
  });
  const [image, setImage] = useState("");
  const [galleryCategory, setGalleryCategory] = useState("");

  const [editIndex, setEditIndex] = useState(null);

  const saveEvent = () => {
  if (!newEvent.title || !newEvent.date) {
    alert("Please fill required fields");
    return;
  }

  let updatedEvents;

  localStorage.setItem(
  "events",
  JSON.stringify(updatedEvents)
  );

  if (editIndex !== null) {
    updatedEvents = [...events];
    updatedEvents[editIndex] = newEvent;
    setEditIndex(null);
  } else {
    updatedEvents = [...events, newEvent];
  }

  setEvents(updatedEvents);

  localStorage.setItem(
    "events",
    JSON.stringify(updatedEvents)
  );

  setNewEvent({
    title: "",
    date: "",
    time: "",
    location: "",
    category: "",
    organizer: "",
    image: "",
    details: "",
  });
};

  const deleteEvent = (index) => {
  const updatedEvents = events.filter(
    (_, i) => i !== index
  );

  setEvents(updatedEvents);

  localStorage.setItem(
    "events",
    JSON.stringify(updatedEvents)
  );
};

  const editEvent = (index) => {
    setNewEvent(events[index]);
    setEditIndex(index);
  };

  const addImage = () => {
  if (!image.trim()) {
    alert("Please enter an image URL");
    return;
  }

  const newImage = {
    image,
    category: galleryCategory,
  };

  const updatedGallery = [...gallery, newImage];

  setGallery(updatedGallery);

  localStorage.setItem(
    "gallery",
    JSON.stringify(updatedGallery)
  );

  setImage("");
  setGalleryCategory("");
};

 const deleteImage = (index) => {
  const updatedGallery = gallery.filter(
    (_, i) => i !== index
  );

  setGallery(updatedGallery);

  localStorage.setItem(
    "gallery",
    JSON.stringify(updatedGallery)
  );
  };

  if (localStorage.getItem("adminLoggedIn") !== "true") {
    return <Navigate to="/admin-login" />;
  }

  return (
    <div className="container">
      <div style={{ height: "20px" }}></div>

      <button
        onClick={logout}
        style={{
          background: "#ef4444",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>

      <h1 style={styles.heading}>Admin Dashboard</h1>

      <div className="glass" style={styles.box}>
        <h2>
          {editIndex !== null ? "Edit Event" : "Add Event"}
        </h2>

        <input
          type="text"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={(e) =>
            setNewEvent({
              ...newEvent,
              title: e.target.value,
            })
          }
          style={styles.input}
        />

        <input
          type="date"
          value={newEvent.date}
          onChange={(e) =>
            setNewEvent({
              ...newEvent,
              date: e.target.value,
            })
          }
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Time"
          value={newEvent.time}
          onChange={(e) =>
            setNewEvent({
              ...newEvent,
              time: e.target.value,
            })
          }
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Location"
          value={newEvent.location}
          onChange={(e) =>
            setNewEvent({
              ...newEvent,
              location: e.target.value,
            })
          }
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Category"
          value={newEvent.category}
          onChange={(e) =>
            setNewEvent({
              ...newEvent,
              category: e.target.value,
            })
          }
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Organizer"
          value={newEvent.organizer}
          onChange={(e) =>
            setNewEvent({
              ...newEvent,
              organizer: e.target.value,
            })
          }
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Image URL"
          value={newEvent.image}
          onChange={(e) =>
            setNewEvent({
              ...newEvent,
              image: e.target.value,
            })
          }
          style={styles.input}
        />

        <textarea
          placeholder="Event Details"
          value={newEvent.details}
          onChange={(e) =>
            setNewEvent({
              ...newEvent,
              details: e.target.value,
            })
          }
          style={styles.textarea}
        />

        <button className="btn" onClick={saveEvent}>
          {editIndex !== null ? "Update Event" : "Add Event"}
        </button>
      </div>
      {/* EVENTS LIST */}
      <h2 style={styles.sectionTitle}>
        Manage Events
      </h2>

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
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "15px",
                }}
              />
            )}

            <h3>{event.title}</h3>

            <p>
              <strong>Date:</strong> {event.date}
            </p>

            <p>
              <strong>Time:</strong> {event.time}
            </p>

            <p>
              <strong>Location:</strong> {event.location}
            </p>

            <p>
              <strong>Category:</strong> {event.category}
            </p>

            <p>
              <strong>Organizer:</strong> {event.organizer}
            </p>

            <p>{event.details}</p>

            <div style={styles.buttonGroup}>
              <button
                style={styles.editBtn}
                onClick={() => editEvent(index)}
              >
                Edit
              </button>

              <button
                style={styles.deleteBtn}
                onClick={() => deleteEvent(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* GALLERY FORM */}
      <div className="glass" style={styles.galleryForm}>
        <h2>Update Gallery</h2>

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Gallery Category"
          value={galleryCategory}
          onChange={(e) => setGalleryCategory(e.target.value)}
          style={styles.input}
        />

        <button
          className="btn"
          onClick={addImage}
        >
          Add Image
        </button>
      </div>

      {/* GALLERY LIST */}
      <h2 style={styles.sectionTitle}>
        Gallery Images
      </h2>

      <div style={styles.galleryGrid}>
        {gallery
          .filter(item => item.image && item.image.trim() !== "")
          .map((item, index) => (
          <div
            key={index}
            className="glass"
            style={styles.imageCard}
          >
            <img
              src={item.image}
              alt=""
              style={styles.image}
            />

            <p style={{ marginTop: "10px" }}>
              {item.category}
            </p>

            <button
              style={styles.deleteBtn}
              onClick={() => deleteImage(index)}
            >
              Delete Image
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  heading: {
    margin: "40px 0",
  },

  sectionTitle: {
    margin: "40px 0 20px",
  },

  box: {
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  galleryForm: {
    padding: "30px",
    marginTop: "60px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: "20px",
  },

  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "20px",
    marginBottom: "50px",
  },

  card: {
    padding: "25px",
    lineHeight: "1.8",
  },

  imageCard: {
    padding: "20px",
    textAlign: "center",
  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "12px",
  },

  buttonGroup: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  },

  editBtn: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    background: "#3b82f6",
    color: "white",
    cursor: "pointer",
  },

  deleteBtn: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    background: "#ef4444",
    color: "white",
    cursor: "pointer",
  },

  input: {
    width: "100%",
    padding: "14px 16px",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    fontSize: "15px",
    outline: "none",
    boxSizing: "border-box",
  },

  textarea: {
    width: "100%",
    minHeight: "120px",
    padding: "14px 16px",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    fontSize: "15px",
    outline: "none",
    resize: "vertical",
    boxSizing: "border-box",
  },
};

export default Admin;