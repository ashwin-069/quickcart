import "../styles/ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <div className="card-footer">
        <span>{product.price}</span>
        <span className="category">{product.category}</span>
      </div>
    </div>
  );
}

export default ProductCard;