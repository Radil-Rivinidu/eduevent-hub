import { useState, useEffect } from "react";

function Gallery() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const savedGallery =
      JSON.parse(localStorage.getItem("gallery")) || [];

    setGallery(savedGallery);
  }, []);

  return (
    <div className="container">
      <h1 style={{ margin: "40px 0" }}>
        Event Gallery
      </h1>

      {gallery.length === 0 ? (
        <div
          className="glass"
          style={{
            padding: "30px",
            textAlign: "center",
            borderRadius: "15px",
          }}
        >
          <h2>No Images Available</h2>
          <p>Add images from the Admin Dashboard.</p>
        </div>
      ) : (
        <div style={styles.grid}>
          {gallery.map((item, index) => (
            <div
              key={index}
              className="glass"
              style={styles.card}
            >
              <img
                src={item.image}
                alt={item.category}
                style={styles.image}
              />

              <p style={{ marginTop: "10px" }}>
                {item.category}
              </p>
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
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "20px",
  },

  card: {
    padding: "20px",
  },

  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "12px",
  },
};

export default Gallery;