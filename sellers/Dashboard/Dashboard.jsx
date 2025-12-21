import React from "react";
import SellerNav from "../SellerNav/SellerNav";
import "./Dashboard.css";
import { Line, Bar } from "react-chartjs-2";
import Sock from "../../assets/images/socks.jpg";
import Noodles from "../../assets/images/noodles.jpg";
import Milk from "../../assets/images/milk.jpg";
import Banana from "../../assets/images/banana.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Mock Data
const kpis = [
  { title: "Total Sales", value: "$12,340" },
  { title: "Revenue", value: "$145,000" },
  { title: "Quantity Sold", value: "145,000 Items" },
  { title: "Monthly Orders", value: "1,250" },
];

const products = [
  {
    name: "Socks",
    category: "Fashion & Clothing",
    price: "$450.00",
    status: "Active",
    image: Sock,
  },
  {
    name: "Dried White Noodles Egg",
    category: "Food & Drinks",
    price: "$400.00",
    status: "Active",
    image: Noodles,
  },
  {
    name: "Kirisu Milk Full Cream",
    category: "Food & Drinks",
    price: "$380.00",
    status: "Active",
    image: Milk,
  },
  {
    name: "Khmer Banana",
    category: "Food & Drinks",
    price: "$0.00",
    status: "Active",
    image: Banana,
  },
];

const restockAlerts = [
  { product: "Socks", category: "Clothing", stockLeft: 2, status: "Low" },
  { product: "Dried White Noodles Egg", category: "Food & Drink", stockLeft: 0, status: "Critical" },
  { product: "Kirisu Milk Full Cream", category: "Food & Drink", stockLeft: 5, status: "Low" },
];

// Chart Data
const salesTrendData = {
  labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  datasets: [
    {
      label: "Revenue ($)",
      data: [1200,1500,1300,1800,2000,2200,2100,2300,2400,2500,2600,2800],
      borderColor: "#5DCFE6",
      backgroundColor: "rgba(93,207,230,0.2)",
      tension: 0.4,
    },
  ],
};

const quantityData = {
  labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  datasets: [
    {
      label: "Units Sold",
      data: [200,250,230,300,320,280,350,400,380,420,450,480],
      backgroundColor: "#03045E",
    },
  ],
};

const comparisonData = {
  labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  datasets: [
    {
      label: "This Year",
      data: [120,150,130,180,200,220,210,230,240,250,260,280],
      backgroundColor: "#5DCFE6",
    },
    {
      label: "Last Year",
      data: [100,140,120,160,180,200,190,210,220,230,240,260],
      backgroundColor: "#03045E",
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <SellerNav />
      <div className="dashboard-content">
        {/* Header */}
        <div className="dashboard-header">
          <h1>Seller Dashboard</h1>
          <p>Performance Overview - October 2025</p>
          <select className="year-selector">
            <option>2025</option>
            <option>2024</option>
          </select>
        </div>

        {/* KPI Cards */}
        <div className="kpi-cards">
          {kpis.map((kpi, index) => (
            <div className="kpi-card" key={index}>
              <p className="kpi-title">{kpi.title}</p>
              <p className="kpi-value">{kpi.value}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="charts-section">
          <div className="chart-card">
            <h3>Sales Trend (Revenue $)</h3>
            <Line data={salesTrendData} />
          </div>
          <div className="chart-card">
            <h3>Quantity Sold (Monthly Units)</h3>
            <Bar data={quantityData} />
          </div>
        </div>

        {/* Restock Alerts & Popular Products Side by Side */}
        <div className="side-tables">
          {/* Restock Alerts */}
          <div className="restock-alerts">
            <h2>Restock Alerts</h2>

            {/* Header row */}
            <div className="restock-row header">
              <div className="cell product">Product</div>
              <div className="cell category">Category</div>
              <div className="cell stock">Stock Left</div>
              <div className="cell status">Status</div>
            </div>

            {/* Data rows */}
            <div className="restock-list">
              {restockAlerts.map((item, index) => (
                <div className="restock-row" key={index}>
                  <div className="cell product">{item.product}</div>
                  <div className="cell category">{item.category}</div>
                  <div className="cell stock">{item.stockLeft}</div>
                  <div className={`cell status ${item.status.toLowerCase()}`}>
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
          </div>



          {/* Popular Products */}
          <div className="popular-products">
            <h2>Popular Products</h2>
            <div className="product-list">
              {products.map((p, index) => (
              <div className="product-card" key={index}>
                <img src={p.image} alt={p.name} />
                <div className="product-info">
                  <p className="product-name">{p.name}</p>
                  <p className="product-category">{p.category}</p>
                </div>
                <p className="product-price">{p.price}</p>
                <p className="product-status">{p.status}</p>
              </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monthly Product Comparison */}
        <div className="comparison-chart">
          <h2>Monthly Product Comparison (This Year vs Last Year)</h2>
          <Bar data={comparisonData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
