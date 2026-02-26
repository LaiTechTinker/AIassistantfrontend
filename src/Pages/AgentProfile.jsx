import React from 'react';
import './AgentProfile.css';

const Profile = () => {
  return (
    <div className="profile-page-container">
      <div className="profile-header">
        <h1 className="profile-title">Assistant Profile</h1>
        <p className="profile-subtitle">Define your assistant's persona.</p>
      </div>

      <div className="profile-card">
        {/* Assistant Name Section */}
        <div className="form-section">
          <label className="input-label">Assistant First Name</label>
          <input 
            type="text" 
            className="text-input" 
            defaultValue="Lily" 
          />
          <p className="helper-text">
            The name your customers will hear (e.g., "Hello, this is [Name]..."). Leave blank if you don't want the assistant to use a name.
          </p>
        </div>

        {/* Background Sound Toggle */}
        <div className="toggle-box">
          <div className="toggle-info">
            <span className="toggle-title">Add Background Sound</span>
            <p className="toggle-desc">Play subtle office background sounds during the assistant's speech.</p>
          </div>
          <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider round"></span>
          </label>
        </div>

        {/* Language Support Section */}
        <div className="language-section">
          <div className="language-header-info">
            <span className="language-label">Language Support</span>
            <p className="language-desc">Your assistant speaks English, Spanish, and many other languages fluently!</p>
          </div>
          <div className="select-container">
            <select className="language-select" defaultValue="view-supported">
              <option value="view-supported">View Supported Languages</option>
              <option value="en">English</option>
              <option value="es">Spanish</option>
            </select>
            <i className="fa-solid fa-chevron-down select-arrow"></i>
          </div>
        </div>

        {/* Action Button */}
        <div className="profile-actions">
          <button className="save-btn">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;