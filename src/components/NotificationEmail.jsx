import React, { useState, useEffect } from 'react';
import api from '../utils/axiosinstance';
import { API_PATH } from '../utils/apipath';
import toast from 'react-hot-toast';
import './NotificationEmail.css';

const NotificationsSection = () => {
  const [emails, setEmails] = useState([]);
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [loading, setLoading] = useState(true);
  const [newEmail, setNewEmail] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await api.get(API_PATH.NOTIFICATION.GET);
      if (response.data) {
        setEmails(response.data.emails || []);
        setEmailEnabled(response.data.emailEnabled !== false);
      }
    } catch (error) {
      console.error("Error fetching notifications:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = async (e) => {
    const enabled = e.target.checked;
    setEmailEnabled(enabled);
    
    try {
      await api.put(API_PATH.NOTIFICATION.TOGGLE_EMAIL, { emailEnabled: enabled });
      toast.success(enabled ? "Email notifications enabled" : "Email notifications disabled");
    } catch (error) {
      setEmailEnabled(!enabled); // Revert on error
      toast.error("Failed to update settings");
    }
  };

  const handleAddEmail = async (e) => {
    e.preventDefault();
    
    if (!newEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      const response = await api.post(API_PATH.NOTIFICATION.ADD_EMAIL, { email: newEmail });
      setEmails(response.data.emails || []);
      setNewEmail("");
      setShowAddForm(false);
      toast.success("Email added successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add email");
    }
  };

  const handleDeleteEmail = async (emailId) => {
    try {
      const response = await api.delete(`${API_PATH.NOTIFICATION.DELETE_EMAIL}/${emailId}`);
      setEmails(response.data.emails || []);
      toast.success("Email removed successfully!");
    } catch (error) {
      toast.error("Failed to remove email");
    }
  };

  if (loading) {
    return (
      <div className="notifications-container">
        <div className="notifications-header">
          <h1 className="notifications-title">Notifications</h1>
          <p className="notifications-subtitle">Manage how this assistant sends email and SMS notifications.</p>
        </div>
        <div className="notification-card">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

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
            <input 
              type="checkbox" 
              checked={emailEnabled}
              onChange={handleToggle}
            />
            <span className="slider round"></span>
          </label>
        </div>

        <div className="email-management">
          <div className="management-header">
            <span className="label-bold">Email Addresses</span>
            <button className="add-email-btn" onClick={() => setShowAddForm(!showAddForm)}>
              <i className="fa-solid fa-plus"></i> Add Email
            </button>
          </div>

          {showAddForm && (
            <form onSubmit={handleAddEmail} className="add-email-form">
              <input
                type="email"
                placeholder="Enter email address"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="form-input"
              />
              <button type="submit" className="save-btn">Add</button>
              <button type="button" className="cancel-btn" onClick={() => setShowAddForm(false)}>Cancel</button>
            </form>
          )}

          <div className="email-list">
            {emails.length === 0 ? (
              <p className="no-emails">No email addresses added yet.</p>
            ) : (
              emails.map((emailItem, index) => (
                <div key={emailItem._id || index} className="email-item">
                  <div className="email-address-group">
                    <i className="fa-regular fa-envelope email-icon-small"></i>
                    <span>{emailItem.email}</span>
                  </div>
                  <div className="action-buttons">
                    <button className="icon-btn-gray" onClick={() => handleDeleteEmail(emailItem._id)}>
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsSection;
