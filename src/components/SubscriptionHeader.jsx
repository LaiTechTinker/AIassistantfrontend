import React from 'react';
import './SubscriptionHeader.css';

const SubscriptionHeader = () => {
  return (
    <div className="subscription-container">
      <div className="subscription-header">
        <h1 className="subscription-title">Subscription</h1>
        <p className="subscription-subtitle">Manage your billing and subscription details.</p>
      </div>

      <div className="current-plan-card">
        <div className="plan-info-row">
          <div className="plan-icon-wrapper">
            <i className="fa-solid fa-circle-check"></i>
          </div>
          <div className="plan-text-content">
            <div className="plan-title-row">
              <h2 className="plan-label">Current Plan</h2>
              <span className="badge-free-trial">Free Trial</span>
            </div>
            <p className="plan-description">Your current subscription details</p>
          </div>
        </div>

        <div className="upgrade-alert">
          <i className="fa-solid fa-circle-info"></i>
          <span>Upgrade before your free trial usage runs out for uninterrupted service.</span>
        </div>

        <div className="usage-section">
          <div className="usage-labels">
            <span className="usage-name">Free Trial Usage</span>
            <span className="usage-stats">0 sec / 30 mins used</span>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: '0%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionHeader;