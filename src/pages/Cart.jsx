import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <p style={styles.empty}>Your cart is empty 😢</p>
      ) : (
        <div style={styles.wrapper}>
        
          {/* ITEMS */}
          <div style={styles.itemsBox}>
            {cart.map((item, index) => (
              <div key={index} style={styles.card}>
                
                <div>
                  <h3 style={styles.name}>{item.name}</h3>
                  <p style={styles.price}>Rs {item.price}</p>

                  <div style={styles.qtyBox}>
                    <button style={styles.qtyBtn}>-</button>
                    <span>1</span>
                    <button style={styles.qtyBtn}>+</button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  style={styles.removeBtn}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div style={styles.summary}>
            <h2>Order Summary</h2>
            <hr style={{ opacity: 0.3 }} />

            <p>Total Items: {cart.length}</p>
            <h3>Total: Rs {total}</h3>

            <button onClick={clearCart} style={styles.checkoutBtn}>
              Checkout
            </button>
          </div>

        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "30px",

    // ⭐ MODERN DARK BLUE GRADIENT (NOT WHITE)
    background: "linear-gradient(135deg, #0f172a, #1e293b, #0ea5e9)",
    color: "#fff",
  },

  title: {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "20px",
  },

  empty: {
    textAlign: "center",
    fontSize: "18px",
    color: "#cbd5e1",
  },

  wrapper: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  itemsBox: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  card: {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    padding: "15px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid rgba(255,255,255,0.15)",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
  },

  name: {
    margin: 0,
    color: "#fff",
  },

  price: {
    color: "#22c55e",
    fontWeight: "bold",
  },

  qtyBox: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginTop: "8px",
  },
            
  qtyBtn: {
    background: "#0ea5e9",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  removeBtn: {
    background: "#ef4444",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  summary: {
    flex: 1,
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    padding: "20px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.15)",
    height: "fit-content",
  },

  checkoutBtn: {
    marginTop: "15px",
    width: "100%",
    background: "#f97316",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};