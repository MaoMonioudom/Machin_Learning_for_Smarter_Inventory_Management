import React, { useState } from "react";
import SellerNav from "../SellerNav/SellerNav";
import "./MLPrediction.css";
import iPad from "../../assets/images/ipad.jpg";
import Banana from "../../assets/images/banana.png";

// Stock Bar Component
const StockBar = ({ current, max }) => {
  const percentage = Math.min((current / max) * 100, 100);

  return (
    <div style={{ width: "100%" }}>
      {/* Label above the bar, right-aligned */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
        <div>Current Stock Level</div>
        <div>{`${current} / ${max} units`}</div>
      </div>

      {/* Stock Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            flex: 1,
            height: "20px",
            backgroundColor: "#eee",
            borderRadius: "5px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${percentage}%`,
              height: "100%",
              backgroundColor: percentage > 80 ? "red" : "green",
              transition: "width 0.3s",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};


// Item Card Component
const PredictionItemCard = ({ item, index, onUpdateStock }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStock, setNewStock] = useState(item.currentStock);

  const handleUpdate = () => {
    onUpdateStock(index, newStock);
    setIsModalOpen(false);
  };

  return (
    <div className="item-card">
      <div className="item-header">
        <div>
          <div className="item-title">{item.name}</div>
          <div className="item-category">{item.category}</div>
        </div>
        <img src={item.image} alt={item.name} className="item-image" />
      </div>

      {/* Stock Level */}

      <StockBar current={item.currentStock} max={item.recommendedStock} />

      {/* Predicted & Recommended Stock */}
      <div className="prediction-boxes">
        <div className="prediction-box">
          <div className="box-title">Predicted Demand</div>
          <div className="box-value">{item.predictedDemand} units (next 30 days)</div>
        </div>
        <div className="prediction-box">
          <div className="box-title">Recommended Stock</div>
          <div className="box-value">{item.recommendedStock} units (with safety buffer)</div>
        </div>
      </div>

      {/* Prediction Factors */}
      <div className="prediction-factors-table">
        <div className="column">
          <div className="factor">
            <div className="factor-title">Seasonality</div>
            <div className="factor-value">{item.seasonality}</div>
          </div>
          <div className="factor">
            <div className="factor-title">Upcoming Events</div>
            <div className="factor-value">{item.events}</div>
          </div>
        </div>
        <div className="column">
          <div className="factor">
            <div className="factor-title">Sales Trend</div>
            <div className="factor-value">{item.salesTrend}</div>
          </div>
          <div className="factor">
            <div className="factor-title">Weather Impact</div>
            <div className="factor-value">{item.weatherImpact}</div>
          </div>
        </div>
      </div>

      <button className="update-stock-btn" onClick={() => setIsModalOpen(true)}>
        Update Stock Now
      </button>

      {/* Modal for updating stock */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Update Stock for {item.name}</h3>
            <input
              type="number"
              min="0"
              value={newStock}
              onChange={(e) => setNewStock(parseInt(e.target.value))}
            />
            <button className="modal-update-btn" onClick={handleUpdate}>
              Save
            </button>
            <button className="modal-cancel-btn" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Main Page
const MLPrediction = () => {
  const [items, setItems] = useState([
    {
      name: "iPad",
      category: "Electronics",
      currentStock: 5,
      recommendedStock: 10,
      predictedDemand: 5,
      image: iPad,
      seasonality: "Normal Season",
      events: "None",
      salesTrend: "Stable",
      weatherImpact: "Neutral",
    },
    {
      name: "Organic Banana Pack",
      category: "Food & Drink",
      currentStock: 5,
      recommendedStock: 10,
      predictedDemand: 5,
      image: Banana,
      seasonality: "High Season",
      events: "Festival",
      salesTrend: "Rising",
      weatherImpact: "Neutral",
    },
  ]);

  const handleUpdateStock = (index, newStock) => {
    const updatedItems = [...items];
    updatedItems[index].currentStock = newStock;
    setItems(updatedItems);
  };

  return (
    <div className="ml-prediction-page">
      <SellerNav />
      <div className="description">
        <div className="title">ML Demand Predictions</div>
        <div className="subtitle">
          AI-powered insights to optimize your inventory and maximize sales
        </div>
      </div>

      <div className="items-container">
        {items.map((item, index) => (
          <PredictionItemCard
            key={index}
            item={item}
            index={index}
            onUpdateStock={handleUpdateStock}
          />
        ))}
      </div>
    </div>
  );
};

export default MLPrediction;
