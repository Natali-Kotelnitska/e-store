
import { useState, useEffect } from "react";
import { API_URL } from "../constants";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(products)

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
          const json = await response.json();
          setProducts(json);
        } else {
          throw response;
        }
      } catch (e) {
        setError("An error occurred. Awkward...");
        console.log("An error occurred:", e);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();

  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="product-container">
          <h2>{product.product_name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
