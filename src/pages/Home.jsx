import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.container}>
      
      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.title}>🛒 Welcome to MyShop</h1>
        <p style={styles.subtitle}>
          Best deals on electronics, fashion & more!
        </p>

        <Link to="/products" style={styles.button}>
          Shop Now
        </Link>
      </div>

      {/* FEATURES */}
      <div style={styles.features}>
       
        <div style={styles.card}>
          <h3>🚀 Fast Delivery</h3>
          <p>Get products delivered quickly at your door.</p>
        </div>

        <div style={styles.card}>
          <h3>💰 Best Prices</h3>
          <p>We offer the lowest prices in the market.</p>
        </div>

        <div style={styles.card}>
          <h3>🔒 Secure Shopping</h3>
          <p>Your data and payments are 100% safe.</p>
        </div>

      </div>

    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
    background: "#0f172a",   // ⭐ FIX: full page background
    minHeight: "100vh",
  },

  hero: {
    background: "linear-gradient(135deg, #111, #1f2937)",
    color: "white",
    textAlign: "center",
    padding: "80px 20px",
  },

  title: {
    fontSize: "42px",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "18px",
    marginBottom: "20px",
    color: "#cbd5e1",
  },

  button: {
    padding: "12px 20px",
    background: "#22c55e",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
    fontSize: "16px",
  },

  features: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    padding: "50px 20px",
  },

  card: {
    width: "260px",
    padding: "20px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.08)",
    color: "white",
    textAlign: "center",
    border: "1px solid rgba(255,255,255,0.15)",
    backdropFilter: "blur(10px)",
    transition: "0.3s",
    cursor: "pointer",
  },
};