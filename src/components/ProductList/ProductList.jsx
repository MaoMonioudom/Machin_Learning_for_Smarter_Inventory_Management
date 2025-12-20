import ProductCard from "../ProductCard/ProductCard.jsx";

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          id={p.id}
          image={p.image}
          name={p.name}
          brand={p.brand}
          price={p.price}
        />
      ))}
    </div>
  );
}

export default ProductList;
