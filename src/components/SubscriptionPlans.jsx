import React from 'react';
import './SubscriptionPlans.css';

const SubscriptionPlans = () => {
  const plans = [
    {
      name: "Core",
      price: "$47",
      features: [
        "200 minutes/month included (then 25¢/min)",
        "24/7 availability",
        "Latest AI voice technology in English, Spanish, & over 30 other languages",
        "Call recordings, summaries, and transcripts",
        "Instant email & text notifications",
        "Intelligent spam filtering",
        "FAQ handling",
        "Seamless business phone - assistant connection"
      ],
      buttonVariant: "outline"
    },
    {
      name: "Plus",
      price: "$137",
      popular: true,
      features: [
        "All Core features",
        "500 minutes/month included (then 25¢/min)",
        "Unlimited custom link creation & sending via text",
        "Instant appointment bookings via text",
        "Custom call transfer destinations"
      ],
      buttonVariant: "solid"
    },
    {
      name: "Pro",
      price: "$297",
      features: [
        "All Core features",
        "All Plus features",
        "1,000 minutes/month included (then 25¢/min)",
        "Unlimited custom knowledge bases to train assistant on every facet of your business",
        "Priority support"
      ],
      buttonVariant: "outline"
    }
  ];

  return (
    <div className="plans-outer-container">
      <div className="plans-card-wrapper">
        <div className="plans-header">
          <div className="plans-icon-title">
            <div className="plans-blue-icon">
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <div className="plans-title-stack">
              <h2 className="plans-main-title">Choose Your Plan</h2>
              <p className="plans-sub-title">Select the plan that best fits your needs.</p>
            </div>
          </div>
        </div>

        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`plan-column ${plan.popular ? 'popular-border' : ''}`}>
              {plan.popular && <div className="popular-badge">MOST POPULAR</div>}
              
              <h3 className="plan-name">{plan.name}</h3>
              
              <div className="price-section">
                <span className="original-price">{plan.price}</span>
                <span className="price-period">/month</span>
              </div>

              <div className="trial-promo">
                <div className="trial-price">$0 during trial</div>
                <div className="trial-limit">(30 minutes usage or 14 days)</div>
              </div>

              <ul className="feature-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <i className="fa-solid fa-check"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`upgrade-btn ${plan.buttonVariant}`}>
                Upgrade Trial
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;