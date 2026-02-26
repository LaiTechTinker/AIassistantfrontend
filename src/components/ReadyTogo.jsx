import "./ReadyToGo.css";
export default function ReadyToGoSection() {
  return (
    <div className="ready-card">

      {/* Header */}
      <div className="ready-header">
        <div className="ready-icon gradient-bg">
          <i className="fa-solid fa-rocket"></i>
        </div>
        <div>
          <h2>Ready to go!</h2>
          <p>Choose a plan, set up forwarding, and you're all set.</p>
        </div>
      </div>

      <div className="ready-divider"></div>

      {/* Step 1 */}
      <div className="ready-step">
        <div className="step-number">1</div>
        <div className="step-content">
          <h3>View pricing & add payment method</h3>
          <p>
            Add your payment info now to make sure your assistant keeps
            working after the trial. You will only be charged after your
            free minutes have been used or two weeks have passed,
            whichever comes first.
          </p>

          <button className="primary-btn">
            <i className="fa-solid fa-credit-card"></i>
            View Pricing & Add Credit Card
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <div className="section-divider"></div>

      {/* Step 2 */}
      <div className="ready-step">
        <div className="step-number">2</div>
        <div className="step-content">
          <h3>Forward your business number to MyVoiceAssistant</h3>

          <div className="forward-box">
            <div className="forward-option">
              <span className="mini-number">1</span>
              Forward all calls to MyVoiceAssistant.
            </div>

            <div className="forward-option">
              <span className="mini-number">2</span>
              Conditionally forward calls so it only answers when you can't.
            </div>
          </div>

          <div className="assistant-number-box">
            <div>
              <p className="number-label">
                Your MyVoiceAssistant Number
              </p>
              <h2 className="assistant-number">
                (231) 447-2601
              </h2>
            </div>

            <button className="copy-btn">
              <i className="fa-regular fa-copy"></i>
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}