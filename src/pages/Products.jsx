import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function Products() {
  const { addToCart } = useCart();
  const [popup, setPopup] = useState("");

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🛍️ Premium Store</h1>

      {/* POPUP */}
      {popup && <div style={styles.popup}>{popup}</div>}

      <div style={styles.grid}>
        {products.map((item) => (
          <div
            key={item.id}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
            }}
          >
            <img src={item.image} alt={item.name} style={styles.image} />

            <h3 style={styles.name}>
              <Link to={`/product/${item.id}`} style={styles.link}>
                {item.name}
              </Link>
            </h3>

            <p style={styles.price}>Rs {item.price}</p>

            <button
              style={styles.button}
              onClick={() => {
                addToCart(item);
                setPopup("✔ Added to Cart");
                setTimeout(() => setPopup(""), 1500);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "30px",
    background: "#0f172a",
    color: "white",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "32px",
  },

  popup: {
    position: "fixed",
    top: "20px",
    right: "20px",
    background: "#22c55e",
    padding: "10px 15px",
    borderRadius: "8px",
    zIndex: 1000,
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "#1e293b",
    padding: "15px",
    borderRadius: "15px",
    textAlign: "center",
    transition: "0.3s",
    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "contain",
  },

  name: {
    marginTop: "10px",
  },

  link: {
    color: "white",
    textDecoration: "none",
  },

  price: {
    color: "#22c55e",
    fontWeight: "bold",
  },

  button: {
    marginTop: "10px",
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    background: "#f97316",
    color: "white",
    cursor: "pointer",
  },
};