import React from 'react';
import './BusinessSummary.css';

const BusinessSummary = () => {
  const services = [
    "End", "to", "end recommendation system development", 
    "Backend development for applications", "Data science projects", 
    "Web application development", "AI and machine learning solutions"
  ];

  return (
    <div className="summary-outer-container">
      <div className="summary-card">
        {/* Business Summary Section */}
        <div className="summary-group">
          <label className="summary-label">Business Summary</label>
          <textarea 
            className="summary-textarea"
            defaultValue="LaiTechTinker specializes in developing machine learning and data science projects, including recommendation systems and web applications, targeting businesses and developers seeking advanced data-driven solutions."
          />
        </div>

        {/* Services Summary Section */}
        <div className="summary-group">
          <label className="summary-label">Services Summary</label>
          <p className="summary-instruction">
            List the main services you offer. Type each service and press Enter or comma to add.
          </p>
          
          <div className="tags-container">
            {services.map((service, index) => (
              <div key={index} className="service-tag">
                <span className="tag-text">{service}</span>
                <button className="tag-remove-btn">
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            ))}
            <input 
              type="text" 
              className="tag-input-placeholder" 
              placeholder="Add another..." 
            />
          </div>
          
          <p className="summary-footer-note">
            Type services and press Enter or comma to add. Click × to remove.
          </p>
        </div>

        {/* Action Button */}
        <div className="summary-actions">
          <button className="save-changes-btn">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;