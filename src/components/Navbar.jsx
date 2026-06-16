import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav style={styles.nav}>
      {/* LOGO */}
      <h2 style={styles.logo}>🛒 MyShop</h2>

      {/* LINKS */}
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/cart" style={styles.cartLink}>
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 25px",
    background: "linear-gradient(90deg, #111, #333)",
    color: "white",
    position: "sticky",
    top: "0",
    zIndex: "1000",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
  },

  logo: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  links: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },

  link: {
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
    textDecoration: "none",
    transition: "0.2s",
  },

  cartLink: {
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    background: "#28a745",
    padding: "6px 10px",
    borderRadius: "6px",
    transition: "0.2s",
  },
};