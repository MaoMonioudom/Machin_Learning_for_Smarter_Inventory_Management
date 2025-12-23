import React from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import DataTable from "../components/table/DataTable";
import CustomerAreaChart from "../components/charts/CustomerAreaChart";

import {
  customerStats,
  customerOverview,
  customersTable,
} from "../data/customer";

import "./CustomerManagement.css"; // <-- your CSS file

export default function CustomerManagement() {
  const customerColumns = [
    { label: "Customer ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Phone", key: "phone" },
    { label: "Order Count", key: "orders" },
    {
      label: "Total Spend",
      key: "totalSpend",
      render: (row) => `$${row.totalSpend.toLocaleString()}`,
    },
    {
      label: "Status",
      key: "status",
      render: (row) => (
        <span className={row.status === "Active" ? "status-active" : "status-inactive"}>
          ● {row.status}
        </span>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <div className="customer-management-container">
        <h1 className="page-title">Customer Management</h1>

        {/* Top Stats */}
        <div className="stats-grid">
          {customerStats.map((item) => (
            <div key={item.title} className="stat-card">
              <p className="stat-title">{item.title}</p>
              <h2 className="stat-value">{item.value}</h2>
              <span className="stat-change">↑ {item.change}</span>
            </div>
          ))}
        </div>

        {/* Overview */}
        <div className="overview-card">
          <div className="overview-header">
            <h3>Customer Overview</h3>
            <div className="overview-buttons">
              <button>This week</button>
              <button>Last week</button>
            </div>
          </div>

          <div className="overview-stats">
            <p><strong>25k</strong> Active Customers</p>
            <p><strong>5.6k</strong> Repeat Customers</p>
            <p><strong>250k</strong> Shop Visitors</p>
            <p><strong>5.5%</strong> Conversion Rate</p>
          </div>

          <CustomerAreaChart data={customerOverview} />
        </div>

        {/* Customer Table */}
        <div className="table-card">
          <DataTable columns={customerColumns} data={customersTable} />
        </div>
      </div>
    </DashboardLayout>
  );
}
