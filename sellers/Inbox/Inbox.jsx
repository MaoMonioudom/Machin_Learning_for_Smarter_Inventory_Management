import React, { useState } from "react";
import SellerNav from "../SellerNav/SellerNav";
import "./Inbox.css";

const messagesMock = [
  {
    id: 1,
    sender: "John Doe",
    subject: "Order Update",
    preview: "Your order #1234 has been shipped...",
    time: "10:45 AM",
    read: false,
  },
  {
    id: 2,
    sender: "Jane Smith",
    subject: "New Message",
    preview: "Hi! I wanted to check about your product...",
    time: "9:30 AM",
    read: true,
  },
  {
    id: 3,
    sender: "Michael Brown",
    subject: "Invoice Received",
    preview: "Please find attached your invoice...",
    time: "Yesterday",
    read: false,
  },
  {
    id: 4,
    sender: "Alice Johnson",
    subject: "Product Inquiry",
    preview: "Can you provide more details about...",
    time: "Dec 20",
    read: true,
  },
];

const Inbox = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  return (
    <div className="inbox-page">
      <SellerNav />

      <div className="inbox-container">
        {/* Messages List */}
        <div className="messages-list">
          {messagesMock.map((msg) => (
            <div
              key={msg.id}
              className={`message-item ${msg.read ? "read" : "unread"} ${
                selectedMessage?.id === msg.id ? "selected" : ""
              }`}
              onClick={() => setSelectedMessage(msg)}
            >
              <div className="message-sender">{msg.sender}</div>
              <div className="message-subject">{msg.subject}</div>
              <div className="message-preview">{msg.preview}</div>
              <div className="message-time">{msg.time}</div>
            </div>
          ))}
        </div>

        {/* Message Detail */}
        <div className="message-detail">
          {selectedMessage ? (
            <>
              <h2>{selectedMessage.subject}</h2>
              <p><strong>From:</strong> {selectedMessage.sender}</p>
              <p>{selectedMessage.preview}</p>
              <p><em>Full message content goes here...</em></p>
            </>
          ) : (
            <p className="no-message">Select a message to view details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
