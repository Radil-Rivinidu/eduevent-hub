import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "demo123") {
      localStorage.setItem("adminLoggedIn", "true");
      navigate("/admin");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="container">
      <div className="glass" style={styles.box}>
        <h1>Admin Login</h1>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            style={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button className="btn" type="submit">
            Login
          </button>
        </form>

        <p style={{ marginTop: "20px", color: "#94a3b8" }}>
          Demo Access: admin / demo123
        </p>
      </div>
    </div>
  );
}

const styles = {
  box: {
    maxWidth: "500px",
    margin: "80px auto",
    padding: "40px",
  },
  input: {
    width: "100%",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "none",
    background: "rgba(255,255,255,0.08)",
    color: "white",
  },
};

export default AdminLogin;