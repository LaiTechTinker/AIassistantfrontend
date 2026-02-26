import React from 'react';
import './BusinessInfo.css';

const BusinessInfo = () => {
  return (
    <div className="business-page-container">
      <div className="business-header">
        <h1 className="business-title">Business Information</h1>
        <p className="business-subtitle">Manage your core business details used by the assistant.</p>
      </div>

      <div className="business-form-card">
        <div className="form-group">
          <label className="form-label">Business Name</label>
          <input 
            type="text" 
            className="form-input" 
            defaultValue="Laiwola barbing salon" 
          />
        </div>

        <div className="form-group">
          <label className="form-label">Address</label>
          <input 
            type="text" 
            className="form-input" 
            defaultValue="No4 solicitors Quarters oloje Housing Estate" 
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <i className="fa-regular fa-clock icon-left"></i> Timezone
          </label>
          <div className="select-wrapper">
            <select className="form-input form-select" defaultValue="Eastern Time">
              <option value="Eastern Time">Eastern Time</option>
              <option value="Central Time">Central Time</option>
              <option value="Pacific Time">Pacific Time</option>
            </select>
          </div>
          <div className="timezone-warning">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <span>No timezone from Google - please select one for accurate call notifications</span>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Business Phone</label>
          <input 
            type="text" 
            className="form-input" 
            defaultValue="+2349016079882" 
          />
        </div>

        <div className="form-group">
          <label className="form-label">Website URL</label>
          <input 
            type="text" 
            className="form-input" 
            defaultValue="https://github.com/LaiTechTinker" 
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;