import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart, clearCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill all fields!");
      return;
    }

    alert("🎉 Order Placed Successfully!");
    clearCart();
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🧾 Checkout</h1>

      <div style={styles.container}>
        
        {/* FORM */}
        <div style={styles.formBox}>
          <h2 style={styles.sectionTitle}>Shipping Details</h2>

          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            name="address"
            placeholder="Full Address"
            value={form.address}
            onChange={handleChange}
            style={styles.input}
          />

          <button onClick={placeOrder} style={styles.button}>
            Place Order
          </button>
        </div>

        {/* SUMMARY */}
        <div style={styles.summary}>
          <h2 style={styles.sectionTitle}>Order Summary</h2>

          <p>Total Items: {cart.length}</p>
          <h3>Total Price: Rs {total}</h3>

          <div style={styles.itemsList}>
            {cart.map((item, index) => (
              <p key={index}>• {item.name}</p>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "30px",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",
  },

  title: {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "20px",
  },

  container: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  formBox: {
    flex: 1,
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.2)",
  },

  summary: {
    flex: 1,
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.2)",
  },

  sectionTitle: {
    marginBottom: "10px",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "#22c55e",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  itemsList: {
    marginTop: "10px",
    color: "#cbd5e1",
  },
};