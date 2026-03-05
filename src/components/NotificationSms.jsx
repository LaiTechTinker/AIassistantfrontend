import React, { useState, useEffect } from 'react';
import api from '../utils/axiosinstance';
import { API_PATH } from '../utils/apipath';
import toast from 'react-hot-toast';
import './NotificationEmail.css';

const NotificationsSms = () => {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [smsEnabled, setSmsEnabled] = useState(true);
  const [loading, setLoading] = useState(true);
  const [newPhone, setNewPhone] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await api.get(API_PATH.NOTIFICATION.GET);
      if (response.data) {
        setPhoneNumbers(response.data.phoneNumbers || []);
        setSmsEnabled(response.data.smsEnabled !== false);
      }
    } catch (error) {
      console.error("Error fetching notifications:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = async (e) => {
    const enabled = e.target.checked;
    setSmsEnabled(enabled);
    
    try {
      await api.put(API_PATH.NOTIFICATION.TOGGLE_SMS, { smsEnabled: enabled });
      toast.success(enabled ? "SMS notifications enabled" : "SMS notifications disabled");
    } catch (error) {
      setSmsEnabled(!enabled); // Revert on error
      toast.error("Failed to update settings");
    }
  };

  const handleAddPhone = async (e) => {
    e.preventDefault();
    
    if (!newPhone || newPhone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }

    try {
      const response = await api.post(API_PATH.NOTIFICATION.ADD_PHONE, { number: newPhone });
      setPhoneNumbers(response.data.phoneNumbers || []);
      setNewPhone("");
      setShowAddForm(false);
      toast.success("Phone number added successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add phone number");
    }
  };

  const handleDeletePhone = async (phoneId) => {
    try {
      const response = await api.delete(`${API_PATH.NOTIFICATION.DELETE_PHONE}/${phoneId}`);
      setPhoneNumbers(response.data.phoneNumbers || []);
      toast.success("Phone number removed successfully!");
    } catch (error) {
      toast.error("Failed to remove phone number");
    }
  };

  if (loading) {
    return (
      <div className="notifications-container">
        <div className="notification-card">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

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
            <input 
              type="checkbox" 
              checked={smsEnabled}
              onChange={handleToggle}
            />
            <span className="slider round"></span>
          </label>
        </div>

        <div className="email-management">
          <div className="management-header">
            <span className="label-bold">Phone Numbers</span>
            <button className="add-email-btn" onClick={() => setShowAddForm(!showAddForm)}>
              <i className="fa-solid fa-plus"></i> Add Phone Number
            </button>
          </div>

          {showAddForm && (
            <form onSubmit={handleAddPhone} className="add-email-form">
              <input
                type="tel"
                placeholder="Enter phone number"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                className="form-input"
              />
              <button type="submit" className="save-btn">Add</button>
              <button type="button" className="cancel-btn" onClick={() => setShowAddForm(false)}>Cancel</button>
            </form>
          )}

          <div className="email-list">
            {phoneNumbers.length === 0 ? (
              <p className="no-emails">No phone numbers added yet.</p>
            ) : (
              phoneNumbers.map((phoneItem, index) => (
                <div key={phoneItem._id || index} className="email-item">
                  <div className="email-address-group">
                    <i className="fa-solid fa-phone"></i>
                    <span>{phoneItem.number}</span>
                  </div>
                  <div className="action-buttons">
                    <button className="icon-btn-gray" onClick={() => handleDeletePhone(phoneItem._id)}>
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

export default NotificationsSms;
