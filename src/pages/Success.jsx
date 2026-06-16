import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    // generate simple order id
    const id = "ORD-" + Math.floor(Math.random() * 1000000);
    setOrderId(id);

    // auto redirect after 5 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.page}>
      
      {/* simple confetti animation */}
      <div style={styles.confetti}></div>

      <div style={styles.card}>
        <h1 style={styles.title}>🎉 Order Placed!</h1>

        <p style={styles.text}>
          Thank you for your purchase.
        </p>

        <p style={styles.orderId}>
          Order ID: <b>{orderId}</b>
        </p>

        <p style={styles.subtext}>
          You will be redirected to home in 5 seconds...
        </p>

        <button style={styles.button} onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",
    position: "relative",
    overflow: "hidden",
  },

  card: {
    textAlign: "center",
    background: "rgba(255,255,255,0.08)",
    padding: "40px",
    borderRadius: "15px",
    border: "1px solid rgba(255,255,255,0.2)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    zIndex: 2,
  },

  title: {
    fontSize: "36px",
    marginBottom: "10px",
  },

  text: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#cbd5e1",
  },

  orderId: {
    fontSize: "16px",
    marginBottom: "10px",
    color: "#22c55e",
  },

  subtext: {
    fontSize: "14px",
    color: "#94a3b8",
    marginBottom: "20px",
  },

  button: {
    padding: "10px 20px",
    background: "#22c55e",
    border: "none",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },

  confetti: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage:
      "radial-gradient(circle, #22c55e 10%, transparent 10%), radial-gradient(circle, #0ea5e9 10%, transparent 10%), radial-gradient(circle, #f97316 10%, transparent 10%)",
    backgroundSize: "50px 50px",
    animation: "move 3s linear infinite",
    opacity: 0.2,
  },
};