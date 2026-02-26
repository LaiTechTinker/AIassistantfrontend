import React from "react";
import "./TrainSection.css";

const features = [
  {
    title: "Appointment Links",
    description: "Text callers a link to schedule an appointment.",
    badge: "PLUS",
    icon: "fa-calendar-days",
  },
  {
    title: "Transfer Calls",
    description:
      "Enable your assistant to seamlessly transfer callers to the right destinations.",
    badge: "PLUS",
    icon: "fa-phone",
  },
  {
    title: "Smart Spam Detection",
    description:
      "Automatically detects and blocks spam and unwanted calls.",
    badge: "ON",
    icon: "fa-shield-halved",
  },
  {
    title: "Frequently Asked Questions",
    description:
      "Give your assistant answers to common questions you receive.",
    icon: "fa-circle-question",
  },
  {
    title: "Notifications",
    description:
      "Configure email and SMS notifications for new incoming calls.",
    icon: "fa-bell",
  },
  {
    title: "Call Logs",
    description:
      "Explore your call logs, where all new calls are organized, details collected, summarized, and more.",
    icon: "fa-clock-rotate-left",
  },
];

const TrainAssistantSection = () => {
  return (
    <div className="train-section">
      <div className="train-header">
        <div className="train-icon">
          <i className="fa-solid fa-wand-magic-sparkles"></i>
        </div>
        <h2>Train Your Assistant</h2>
      </div>

      <p className="train-subtext">
        Give your assistant even more skills. Learn more below.
      </p>

      <div className="train-features">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              <i className={`fa-solid ${item.icon}`}></i>
            </div>

            <div className="feature-content">
              <div className="feature-title-row">
                <h4>{item.title}</h4>

                {item.badge && (
                  <span
                    className={`badge ${
                      item.badge === "PLUS"
                        ? "badge-plus"
                        : "badge-on"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </div>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainAssistantSection;