import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../utils/axiosinstance';
import { API_PATH } from '../utils/apipath';
import toast from 'react-hot-toast';
import './AgentProfile.css';

const Profile = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    assistantFirstName: '',
    backgroundSound: true,
    language: 'en'
  });

  // Load existing receptionist data on mount
  useEffect(() => {
    fetchReceptionistData();
  }, []);

  const fetchReceptionistData = async () => {
    try {
      const response = await api.get(API_PATH.RECEPTIONIST.GET_ALL);
      if (response.data?.data && response.data.data.length > 0) {
        const receptionist = response.data.data[0];
        setFormData({
          assistantFirstName: receptionist.voiceType || '',
          backgroundSound: receptionist.backgroundSound !== false,
          language: receptionist.language || 'en'
        });
      }
    } catch (error) {
      console.error("Error fetching receptionist:", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleToggle = (e) => {
    setFormData(prev => ({
      ...prev,
      backgroundSound: e.target.checked
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Try to update existing receptionist
      const response = await api.put(API_PATH.RECEPTIONIST.UPDATE, {
        voiceType: formData.assistantFirstName,
        backgroundSound: formData.backgroundSound,
        language: formData.language
      });
      
      toast.success("Assistant profile saved successfully!");
    } catch (error) {
      // If no receptionist exists, try to create one
      try {
        await api.post(API_PATH.RECEPTIONIST.CREATE, {
          voiceType: formData.assistantFirstName,
          backgroundSound: formData.backgroundSound,
          language: formData.language
        });
        toast.success("Assistant profile created successfully!");
      } catch (createError) {
        toast.error(createError.response?.data?.message || "Failed to save assistant profile");
      }
    } finally {
      setLoading(false);
    }
  };

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
            name="assistantFirstName"
            className="text-input" 
            value={formData.assistantFirstName}
            onChange={handleChange}
            placeholder="Enter assistant name (e.g., Lily)" 
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
            <input 
              type="checkbox" 
              checked={formData.backgroundSound}
              onChange={handleToggle}
            />
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
            <select 
              name="language"
              className="language-select" 
              value={formData.language}
              onChange={handleChange}
            >
              <option value="view-supported">View Supported Languages</option>
              <option value="en">English</option>
              <option value="es">Spanish</option>
            </select>
            <i className="fa-solid fa-chevron-down select-arrow"></i>
          </div>
        </div>

        {/* Action Button */}
        <div className="profile-actions">
          <button className="save-btn" onClick={handleSubmit} disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
