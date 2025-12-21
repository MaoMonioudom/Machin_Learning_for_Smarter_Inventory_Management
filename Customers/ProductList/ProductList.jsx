// ProductList/ProductList.jsx
import ProductCard from "../ProductCard/ProductCard.jsx";

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            image={p.image}
            name={p.name}
            brand={p.brand}
            price={p.price}
            discount={p.discount}
            onClick={p.onClick} // Pass the onClick from parent
          />
        ))
      ) : (
        <div style={{ 
          gridColumn: '1 / -1', 
          textAlign: 'center', 
          padding: '3rem',
          color: '#666'
        }}>
          <h3>No products found</h3>
          <p>Try a different search term</p>
        </div>
      )}
    </div>
  );
}

export default ProductList;