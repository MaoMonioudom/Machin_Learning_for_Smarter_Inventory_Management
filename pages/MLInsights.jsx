import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import LineChartBox from "../components/charts/LineChartBox";
import BarChartBox from "../components/charts/BarChartBox";

import {
  mlAccuracyData,
  userBehaviorData,
} from "../data/ml";

import "./MLInsights.css"; // <-- CSS file

export default function MLInsights() {
  // Top metric cards
  const mlStats = [
    { title: "Top Viewed Products", value: "10 Products" },
    { title: "Top Purchased Products", value: "10 Products" },
    { title: "Average Purchase Frequency", value: "2.3 Orders / User" },
    { title: "Conversion Rate", value: "4.8%" },
  ];

  return (
    <DashboardLayout>
      <div className="ml-insights-container">

        {/* Page Title */}
        <h1 className="page-title">ML Insights</h1>

        {/* Top Stats */}
        <div className="stats-grid">
          {mlStats.map((item, idx) => (
            <div key={idx} className="stat-card">
              <p className="stat-title">{item.title}</p>
              <h2 className="stat-value">{item.value}</h2>
            </div>
          ))}
        </div>

        {/* ML Accuracy */}
        <div className="chart-card">
          <h3>Product Recommendation Accuracy</h3>
          <LineChartBox data={mlAccuracyData} color="#0ea5e9" />
          <p className="chart-description">
            Line chart represents the monthly accuracy of the ML recommendation system. Higher accuracy indicates better personalized product suggestions for customers.
          </p>
        </div>

        {/* User Behavior Overview */}
        <div className="chart-card">
          <h3>User Behavior Overview</h3>
          <BarChartBox
            data={userBehaviorData}
            colors={["#F87171", "#60A5FA", "#34D399", "#FBBF24"]}
          />
          <p className="chart-description">
            This chart shows the number of user interactions such as views, add-to-cart actions, purchases, and searches.
          </p>
        </div>

      </div>
    </DashboardLayout>
  );
}
