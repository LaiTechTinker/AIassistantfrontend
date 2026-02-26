import React from 'react';
import './BusinessHour.css';

const BusinessHours = () => {
  const days = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  return (
    <div className="hours-container">
      <div className="hours-card">
        <div className="hours-header">
          <i className="fa-regular fa-clock"></i>
          <span className="hours-header-text">Business Hours</span>
        </div>

        <div className="quick-selectors-section">
          <p className="selectors-label">Quick selectors</p>
          <div className="selectors-btn-group">
            <button className="selector-btn">Weekdays 9am-5pm</button>
            <button className="selector-btn">Weekdays 8am-6pm</button>
            <button className="selector-btn">Close Weekends</button>
          </div>
        </div>

        <div className="days-list">
          {days.map((day) => (
            <div key={day} className="day-row">
              <div className="day-label-group">
                <span className="day-name">{day}</span>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>

              <div className="time-inputs-group">
                <div className="time-input-wrapper">
                  <input type="text" className="time-input" defaultValue="09:00 am" />
                  <i className="fa-regular fa-clock time-icon"></i>
                </div>
                
                <span className="time-separator">to</span>

                <div className="time-input-wrapper">
                  <input type="text" className="time-input" defaultValue="05:00 pm" />
                  <i className="fa-regular fa-clock time-icon"></i>
                </div>

                <button className="copy-btn">
                  <i className="fa-regular fa-copy"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessHours;