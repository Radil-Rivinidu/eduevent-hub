function Clubs() {

  const clubs = [
    {
      title:"ICT Society",
      desc:"Programming, robotics and technology activities."
    },

    {
      title:"Media Club",
      desc:"Photography, video editing and content creation."
    },

    {
      title:"Science Club",
      desc:"Experiments, innovations and exhibitions."
    },

    {
      title:"Sports Club",
      desc:"Sports activities and competitions."
    }
  ];

  return (
    <div className="container">

      <h1 style={{margin:"40px 0"}}>School Clubs</h1>

      <div style={styles.grid}>
        {clubs.map((club,index)=>(
          <div key={index} className="glass" style={styles.card}>
            <h2>{club.title}</h2>
            <p>{club.desc}</p>
          </div>
        ))}
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
    padding:"30px",
    lineHeight:"1.8"
  }
};

export default Clubs;