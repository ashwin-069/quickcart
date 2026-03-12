import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductList from "./ProductList";

function CategoryPage() {

  const { category } = useParams();

  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div>
      <h2>{category} Products</h2>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
}

export default CategoryPage;