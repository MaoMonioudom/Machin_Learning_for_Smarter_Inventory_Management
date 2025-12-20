import React, { useState } from "react";
import SellerNav from "../SellerNav/SellerNav";
import "./Product.css";

import iPad from "../../assets/images/ipad.jpg";
import Shirt from "../../assets/images/shirt.jpg";
import Book from "../../assets/images/book.jpg";

/* PRODUCT CARD */
const ProductCard = ({ product, onEdit, onDelete, onPromotion }) => (
  <div className="product-card-figma">
    <div className="product-image-container">
      <img src={product.image} alt={product.name} className="product-image-figma" />
    </div>

    <div className="product-info-figma">
      <h3 className="product-name">{product.name}</h3>
      <span className="product-category">{product.category}</span>
      <span className="product-discount">{product.discount}</span>
      <span className="product-meta">
        ${product.price} | Stock: {product.stock} | {product.rating} ⭐
      </span>
    </div>

    <div className="product-actions-figma">
      <button className="edit-btn" onClick={() => onEdit(product)}>Edit</button>
      <button className="delete-btn" onClick={() => onDelete(product.id)}>Delete</button>
      <button className="promo-btn" onClick={() => onPromotion(product.id)}>Add Promotion</button>
    </div>
  </div>
);


/* ADD / EDIT MODAL */
const ProductModal = ({ onClose, onSave, product }) => {
  const [form, setForm] = useState(
    product || {
      name: "",
      category: "",
      price: "",
      stock: "",
      image: "",
    }
  );

  const handleSubmit = () => {
    if (!form.name || !form.price) return;
    onSave(form);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{product ? "Edit Product" : "Add New Product"}</h2>

        <input
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <input
          type="number"
          placeholder="Stock"
          value={form.stock}
          onChange={(e) => setForm({ ...form, stock: e.target.value })}
        />
        <input
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <div className="modal-actions">
          <button className="cancel" onClick={onClose}>Cancel</button>
          <button className="save" onClick={handleSubmit}>
            {product ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

const Product = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPad",
      category: "Apple - Electronic",
      price: 349,
      stock: 500,
      rating: 5,
      discount: "50%",
      image: iPad,
    },
    {
      id: 2,
      name: "Oversized T-Shirt",
      category: "ZARA - Fashion",
      price: 30,
      stock: 2500,
      rating: 4,
      discount: "0%",
      image: Shirt,
    },
    {
      id: 3,
      name: "HTWFAIPPL BOOK",
      category: "Dale Carnegie - Book",
      price: 28,
      stock: 1900,
      rating: 3,
      discount: "0%",
      image: Book,
    },
  ]);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  /* ADD */
  const handleAdd = () => {
    setEditingProduct(null);
    setShowModal(true);
  };

  /* SAVE (ADD OR EDIT) */
  const handleSave = (data) => {
    if (editingProduct) {
      setProducts(products.map(p =>
        p.id === editingProduct.id ? { ...p, ...data } : p
      ));
    } else {
      setProducts([
        ...products,
        {
          id: Date.now(),
          rating: 5,
          discount: "0%",
          ...data,
        },
      ]);
    }
    setShowModal(false);
  };

  /* EDIT */
  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  /* DELETE */
  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  /* PROMOTION */
  const handlePromotion = (id) => {
    const value = prompt("Enter discount (%)");
    if (!value) return;

    setProducts(products.map(p =>
      p.id === id ? { ...p, discount: `${value}%` } : p
    ));
  };

  return (
    <>
      <SellerNav />

      <div className="product-page">
        <div className="product-header">
          <div className="header-left">
            <h1>Product Management</h1>
            <p>Manage your product inventory</p>
          </div>

          <button className="add-product-btn" onClick={handleAdd}>
            + Add Product
          </button>
        </div>

        <input
          className="search"
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="product-grid">
          {products
            .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
            .map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onPromotion={handlePromotion}
              />
            ))}
        </div>
      </div>

      {showModal && (
        <ProductModal
          product={editingProduct}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}
    </>
  );
};

export default Product;
