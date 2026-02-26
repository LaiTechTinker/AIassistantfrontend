import React from "react";
import "./Account.css";

const Account = () => {
  return (
    <div className="account-page">
      <div className="account-card">
        <h2>Account Details</h2>

        {/* Profile Upload Section */}
        <div className="profile-row">
          <div className="upload-box">
            <i className="fa-solid fa-cloud-arrow-up upload-icon"></i>
            <p>
              Drop your image here, or <span className="browse">browse</span>
            </p>
            <small>Only formats : PNG, JPEG, JPG, WEBP</small>
          </div>

          <div className="profile-preview">
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="profile"
            />
          </div>
        </div>

        {/* Form Fields */}
        <div className="form-group">
          <label>First Name</label>
          <input type="text" defaultValue="Luke" />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input type="text" defaultValue="Damant" />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" defaultValue="lukedamant24@gmail.com" />
        </div>

        <button className="save-btn">Save Changes</button>

        {/* Change Password Section */}
        <h3 className="password-title">Change Password</h3>

        <div className="form-group">
          <label>Old Password</label>
          <input type="password" placeholder="Enter the old password" />
        </div>

        <div className="form-group">
          <label>Create New Password</label>
          <input type="password" placeholder="Create strong new password" />
        </div>
      </div>
    </div>
  );
};

export default Account;