import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import BarChartBox from "../components/charts/BarChartBox";
import PieChartBox from "../components/charts/PieChartBox";
import DataTable from "../components/table/DataTable";

import {
  commissionChart,
  commissionByCategory,
  sellerStatusData,
  sellerRegistrationChart,
  topSellers,
} from "../data/seller";

import "./SellerManagement.css";

export default function SellerManagement() {

  // Top 5 KPI cards
  const sellerStats = [
    { title: "Total Commission Earned", value: "$20,000" },
    { title: "Total Sellers", value: "474" },
    { title: "Active Sellers", value: "392" },
    { title: "Inactive Sellers", value: "70" },
    { title: "Suspended Sellers", value: "12" },
  ];

  // Table columns
  const sellerColumns = [
    { label: "Seller Name", key: "name" },
    { label: "Store", key: "store" },
    {
      label: "Total Sale",
      key: "totalSale",
      render: (row) => `$${Number(row.totalSale).toLocaleString()}`
    },
    {
      label: "Commission Earned",
      key: "commission",
      render: (row) => `$${Number(row.commission).toLocaleString()}`
    },
    {
      label: "Status",
      key: "status",
      render: (row) => (
        <span className={row.status === "Active" ? "status-active" : "status-inactive"}>
          ● {row.status}
        </span>
      )
    }
  ];

  return (
    <DashboardLayout>
      <div className="seller-management-container">

        {/* Page Title */}
        <h1 className="page-title">Seller Management</h1>

        {/* Top KPI Cards */}
        <div className="stats-row">
          {sellerStats.map((item, idx) => (
            <div key={idx} className="stat-card">
              <p className="stat-title">{item.title}</p>
              <h2 className="stat-value">{item.value}</h2>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="charts-grid">
          <div className="chart-card">
            <div className="chart-header">
              <h3>Commission Trends</h3>
              <button>Year</button>
            </div>
            <BarChartBox data={commissionChart} />
          </div>

          <div className="chart-card">
            <div className="chart-header">
              <h3>Commission Earn by Categories</h3>
              <button>Monthly</button>
            </div>
            <PieChartBox data={commissionByCategory} />
          </div>
        </div>

        {/* Seller Registration + Status */}
        <div className="charts-grid">
          <div className="chart-card">
            <h3>Seller Registration Trend</h3>
            <BarChartBox data={sellerRegistrationChart} color="#10B981" />
          </div>

          <div className="chart-card">
            <h3>Sellers Status Overview</h3>
            <PieChartBox data={sellerStatusData} />
          </div>
        </div>

        {/* Top Seller Table */}
        <div className="table-card">
          <h3>Top Seller Table</h3>
          <DataTable columns={sellerColumns} data={topSellers} />
        </div>

      </div>
    </DashboardLayout>
  );
}
