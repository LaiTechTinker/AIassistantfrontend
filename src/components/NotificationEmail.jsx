import React from 'react';
import './NotificationEmail.css';

const NotificationsSection = () => {
  const emails = [
    "ibrahimalaaya7@gmail.com",
    "ibrahimalaaya7@gmail.com"
  ];

  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <h1 className="notifications-title">Notifications</h1>
        <p className="notifications-subtitle">Manage how this assistant sends email and SMS notifications.</p>
      </div>

      <div className="notification-card">
        <div className="card-top-row">
          <div className="info-block">
            <div className="icon-circle email-blue">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="text-block">
              <h2 className="section-name">Email Notifications</h2>
              <p className="section-desc">Choose who should receive email alerts and summaries for this assistant's calls.</p>
            </div>
          </div>
        </div>

        <div className="toggle-row">
          <span className="toggle-label">Enable Email Notifications</span>
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider round"></span>
          </label>
        </div>

        <div className="email-management">
          <div className="management-header">
            <span className="label-bold">Email Addresses</span>
            <button className="add-email-btn">
              <i className="fa-solid fa-plus"></i> Add Email
            </button>
          </div>

          <div className="email-list">
            {emails.map((email, index) => (
              <div key={index} className="email-item">
                <div className="email-address-group">
                  <i className="fa-regular fa-envelope email-icon-small"></i>
                  <span>{email}</span>
                </div>
                <div className="action-buttons">
                  <button className="icon-btn-gray">
                    <i className="fa-solid fa-pen"></i>
                  </button>
                  <button className="icon-btn-gray">
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsSection;