import { useState } from "react";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = () => {
    if (!title || !price) return;

    const newProduct = {
      id: Date.now(),
      title,
      price,
    };

    setProducts([...products, newProduct]);
    setTitle("");
    setPrice("");
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1>🛠 Admin Panel</h1>

      <input
        placeholder="Product Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={addProduct}>Add Product</button>

      <h2>Products</h2>

      {products.map((p) => (
        <div key={p.id} style={styles.card}>
          <p>{p.title}</p>
          <p>{p.price}</p>
          <button onClick={() => deleteProduct(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    background: "#111",
    color: "white",
    minHeight: "100vh",
  },
  card: {
    background: "#222",
    margin: "10px 0",
    padding: "10px",
    borderRadius: "8px",
  },
};