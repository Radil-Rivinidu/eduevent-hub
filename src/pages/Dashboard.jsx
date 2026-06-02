function Dashboard() {
  return (
    <div className="container">

      <h1 style={{margin:"40px 0"}}>
        Dashboard
      </h1>

      <div style={styles.grid}>

        <div className="glass" style={styles.card}>
          <h2>25</h2>
          <p>Total Events</p>
        </div>

        <div className="glass" style={styles.card}>
          <h2>1200</h2>
          <p>Total Students</p>
        </div>

        <div className="glass" style={styles.card}>
          <h2>14</h2>
          <p>Active Clubs</p>
        </div>

        <div className="glass" style={styles.card}>
          <h2>8</h2>
          <p>Upcoming Activities</p>
        </div>

      </div>

    </div>
  );
}

const styles = {
  grid:{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
    gap:"25px"
  },

  card:{
    padding:"40px",
    textAlign:"center"
  }
};

export default Dashboard;