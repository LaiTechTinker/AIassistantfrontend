import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../utils/axiosinstance";
import { API_PATH } from "../utils/apipath";
import toast from "react-hot-toast";
import "./Account.css";

const Account = () => {
  const { user, refreshUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  // Load user data on mount
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || ""
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post(API_PATH.AUTH.UPDATE_PROFILE, formData);
      
      // Refresh user data in context
      await refreshUser();
      
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

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
              src={user?.profileImage || "https://i.pravatar.cc/150?img=3"}
              alt="profile"
            />
          </div>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input 
              type="text" 
              name="firstName"
              value={formData.firstName} 
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input 
              type="text" 
              name="lastName"
              value={formData.lastName} 
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email} 
              onChange={handleChange}
              disabled
            />
          </div>

          <button type="submit" className="save-btn" disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>

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
