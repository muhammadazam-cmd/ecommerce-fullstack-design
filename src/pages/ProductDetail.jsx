import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.name}</h1>

      <img
        src={product.image}
        alt={product.name}
        width="250"
      />

      <h2>Price: Rs {product.price}</h2>

      <p>
        This is a sample product description for
        {product.name}.
      </p>
    </div>
  );
}