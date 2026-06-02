function About() {
  return (
    <div className="container">

      <div className="glass" style={styles.box}>
        <h1>About EduEvent Hub</h1>

        <p>
          EduEvent Hub is a modern school event management platform
          designed to help students, teachers, and parents stay
          updated with all school activities.
        </p>

        <p>
          From sports meets to science exhibitions, this platform
          helps organize and showcase every important event in one place.
        </p>
      </div>

    </div>
  );
}

const styles = {
  box:{
    padding:"40px",
    marginTop:"50px",
    lineHeight:"2"
  }
};

export default About;