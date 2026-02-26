import { useState } from "react";
import "./AssistHeader.css"

export default function SetupHeader() {
  // Later this can come from API
  const [currentStep] = useState(3);

  const steps = [
    { id: 1, label: "Confirm Details" },
    { id: 2, label: "Say Hello" },
    { id: 3, label: "Set Up Forwarding" }
  ];

  return (
    <div className="setup-header-card">
      <h1 className="setup-title">Set Up Your Assistant</h1>
      <p className="setup-subtitle">
        Follow these steps to get your voice assistant ready.
      </p>

      <div className="progress-container">
        {steps.map((step, index) => {
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;

          return (
            <div key={step.id} className="step-wrapper">
              <div
                className={`step-circle 
                  ${isCompleted ? "completed" : ""} 
                  ${isActive ? "active" : ""}`}
              >
                {isCompleted ? (
                  <i className="fa-solid fa-check"></i>
                ) : (
                  step.id
                )}
              </div>

              <span
                className={`step-label 
                  ${isCompleted ? "completed-text" : ""} 
                  ${isActive ? "active-text" : ""}`}
              >
                {step.label}
              </span>

              {index !== steps.length - 1 && (
                <div
                  className={`step-line 
                    ${step.id < currentStep ? "line-completed" : ""}`}
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}