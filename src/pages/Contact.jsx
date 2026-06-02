function Contact() {
  return (
    <div className="container">

      <div className="glass" style={styles.formBox}>
        <h1>Contact Us</h1>

        <form style={styles.form}>
          <input type="text" placeholder="Your Name" style={styles.input}/>
          <input type="email" placeholder="Your Email" style={styles.input}/>
          <textarea placeholder="Message" rows="6" style={styles.input}></textarea>

          <button className="btn">
            Send Message
          </button>
        </form>
      </div>

    </div>
  );
}

const styles = {
  formBox:{
    padding:"40px",
    marginTop:"50px"
  },

  form:{
    display:"flex",
    flexDirection:"column",
    gap:"20px",
    marginTop:"30px"
  },

  input:{
    padding:"15px",
    borderRadius:"12px",
    border:"none",
    background:"rgba(255,255,255,0.08)",
    color:"white"
  }
};

export default Contact;