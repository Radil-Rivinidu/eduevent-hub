import { motion } from "framer-motion";

function EventCard({title,date,image}) {
  return (
    <motion.div
      whileHover={{scale:1.03}}
      className="glass"
      style={styles.card}
    >
      <img src={image} alt="" style={styles.image}/>

      <div style={styles.content}>
        <h3>{title}</h3>
        <p>{date}</p>

        <button className="btn">
          View Details
        </button>
      </div>
    </motion.div>
  );
}

const styles = {
  card:{
    overflow:"hidden"
  },

  image:{
    width:"100%",
    height:"220px",
    objectFit:"cover"
  },

  content:{
    padding:"20px"
  }
};

export default EventCard;