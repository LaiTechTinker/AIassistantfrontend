import React from 'react';
import './NotificationEmail.css';

const NotificationsSms = () => {
  const phoneNumbers = [
    "+2348034567890",
     "+2348034567890",
  ];

  return (
    <div className="notifications-container">
     
      <div className="notification-card">
        <div className="card-top-row">
          <div className="info-block">
            <div className="icon-circle sms-blue">
              <i className="fa-solid fa-mobile"></i>
            </div>
            <div className="text-block">
              <h2 className="section-name">SMS Notifications</h2>
              <p className="section-desc">Choose who should receive SMS alerts and summaries for this assistant's calls.</p>
            </div>
          </div>
        </div>

        <div className="toggle-row">
          <span className="toggle-label">Enable SMS Notifications</span>
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider round"></span>
          </label>
        </div>

        <div className="email-management">
          <div className="management-header">
            <span className="label-bold">Phone Numbers</span>
            <button className="add-email-btn">
              <i className="fa-solid fa-plus"></i> Add Phone Number
            </button>
          </div>

          <div className="email-list">
            {phoneNumbers.map((number, index) => (
              <div key={index} className="email-item">
                <div className="email-address-group">
                  <i className="fa-solid fa-phone"></i>
                  <span>{number}</span>
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

export default NotificationsSms;