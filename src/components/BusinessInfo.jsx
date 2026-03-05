import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../utils/axiosinstance';
import { API_PATH } from '../utils/apipath';
import toast from 'react-hot-toast';
import './BusinessInfo.css';

const BusinessInfo = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [formData, setFormData] = useState({
    businessName: '',
    address: '',
    phoneNumber: '',
    websiteUrl: '',
    timezone: 'Eastern Time'
  });

  // Load business data on mount
  useEffect(() => {
    fetchBusinessData();
  }, []);

  const fetchBusinessData = async () => {
    try {
      const response = await api.get(API_PATH.BUSINESS.GET);
      if (response.data?.data) {
        const business = response.data.data;
        setFormData({
          businessName: business.businessName || '',
          address: business.address || '',
          phoneNumber: business.phoneNumber || '',
          websiteUrl: business.websiteUrl || '',
          timezone: business.timezone || 'Eastern Time'
        });
      }
    } catch (error) {
      // Business not found is okay - user can create one
      if (error.response?.status !== 404) {
        console.error("Error fetching business:", error.message);
      }
    } finally {
      setInitialLoading(false);
    }
  };

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
      // Try to update first, if not found create new
      await api.put(API_PATH.BUSINESS.UPDATE, formData);
      toast.success("Business information saved successfully!");
    } catch (error) {
      // If update fails (no existing business), try to create
      try {
        await api.post(API_PATH.BUSINESS.CREATE, formData);
        toast.success("Business created successfully!");
      } catch (createError) {
        toast.error(createError.response?.data?.message || "Failed to save business information");
      }
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return (
      <div className="business-page-container">
        <div className="business-header">
          <h1 className="business-title">Business Information</h1>
          <p className="business-subtitle">Manage your core business details used by the assistant.</p>
        </div>
        <div className="business-form-card">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="business-page-container">
      <div className="business-header">
        <h1 className="business-title">Business Information</h1>
        <p className="business-subtitle">Manage your core business details used by the assistant.</p>
      </div>

      <form className="business-form-card" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Business Name</label>
          <input 
            type="text" 
            name="businessName"
            className="form-input" 
            value={formData.businessName}
            onChange={handleChange}
            placeholder="Enter your business name"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Address</label>
          <input 
            type="text" 
            name="address"
            className="form-input" 
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your business address"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            <i className="fa-regular fa-clock icon-left"></i> Timezone
          </label>
          <div className="select-wrapper">
            <select 
              name="timezone"
              className="form-input form-select" 
              value={formData.timezone}
              onChange={handleChange}
            >
              <option value="Eastern Time">Eastern Time</option>
              <option value="Central Time">Central Time</option>
              <option value="Pacific Time">Pacific Time</option>
              <option value="Mountain Time">Mountain Time</option>
              <option value="Arizona Time">Arizona Time</option>
              <option value="Alaska Time">Alaska Time</option>
              <option value="Hawaii Time">Hawaii Time</option>
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
            name="phoneNumber"
            className="form-input" 
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your business phone"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Website URL</label>
          <input 
            type="text" 
            name="websiteUrl"
            className="form-input" 
            value={formData.websiteUrl}
            onChange={handleChange}
            placeholder="https://example.com"
          />
        </div>

        <button type="submit" className="save-btn" disabled={loading}>
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default BusinessInfo;
