import { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState({});

  const toggleFaq = (index) => {
    setFaqOpen(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const faqData = [
    {
      question: "How long does a typical AI project take to complete?",
      answer: "Project timelines vary based on complexity. A typical AI implementation takes 6-12 weeks from discovery to deployment, with ongoing optimization thereafter."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We work across healthcare, finance, retail, manufacturing, and technology sectors. Our solutions are tailored to meet industry-specific compliance and operational requirements."
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes, we provide comprehensive support packages including 24/7 monitoring, performance optimization, model retraining, and dedicated technical support teams."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing including project-based, retainer, and outcome-based models. Contact us for a customized quote based on your specific requirements."
    },
    {
      question: "How do you ensure data security?",
      answer: "We implement enterprise-grade security protocols, including end-to-end encryption, SOC 2 compliance, GDPR adherence, and regular security audits."
    }
  ];

  return (
    <div className="landing">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-icon">N</div>
            <span>NexGen AI</span>
          </div>
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#insights">Insights</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="nav-cta">Get Started</button>
          <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-badge">AI-POWERED SOLUTIONS</div>
          <h1 className="hero-title">Build Smart AI Solutions That Actually Work</h1>
          <p className="hero-description">
            Transform your business with cutting-edge artificial intelligence. We build, deploy, and scale AI systems that deliver measurable results and drive real growth.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Start Your Project</button>
            <button className="btn-secondary">View Our Work</button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">64K+</span>
              <span className="stat-label">AI Models Deployed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">54+</span>
              <span className="stat-label">Enterprise Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">38K+</span>
              <span className="stat-label">Hours Saved Monthly</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">25+</span>
              <span className="stat-label">Industry Awards</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="who-we-are">
        <div className="section-container">
          <span className="section-label">WHO WE ARE</span>
          <h2 className="section-title">Pioneering the Future of Intelligent Business</h2>
          <div className="cards-grid three-col">
            <div className="info-card">
              <div className="card-icon purple">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>AI-First Approach</h3>
              <p>We architect every solution with artificial intelligence at its core, ensuring your systems learn, adapt, and improve over time.</p>
            </div>
            <div className="info-card">
              <div className="card-icon pink">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3>Rapid Deployment</h3>
              <p>Our streamlined development process gets your AI solutions to market faster without compromising on quality or performance.</p>
            </div>
            <div className="info-card">
              <div className="card-icon gradient">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Proven Results</h3>
              <p>Our track record speaks for itself with measurable ROI, increased efficiency, and transformative outcomes for every client.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="services" className="what-we-offer">
        <div className="section-container">
          <span className="section-label">WHAT WE OFFER</span>
          <h2 className="section-title">Comprehensive AI Services for Modern Enterprises</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M3 9h18M9 21V9"/>
                </svg>
              </div>
              <h4>AI & ML Platforms</h4>
              <p>End-to-end machine learning infrastructure designed for scale, performance, and seamless integration.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h4>Conversational AI</h4>
              <p>Intelligent chatbots and virtual assistants that understand context and deliver human-like interactions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <h4>Smart Help & Optimization</h4>
              <p>AI-powered support systems that predict issues and optimize performance before problems arise.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h4>Ethics and Data Protection</h4>
              <p>Responsible AI frameworks ensuring fairness, transparency, and compliance with global regulations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </div>
              <h4>AI Strategy Consulting</h4>
              <p>Expert guidance to identify opportunities and create roadmaps for successful AI transformation.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h4>ML Automation</h4>
              <p>Automated machine learning pipelines that reduce development time and accelerate innovation cycles.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h4>Agentic Assistants</h4>
              <p>Autonomous AI agents that handle complex workflows and make intelligent decisions independently.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
              </div>
              <h4>Vision Intelligence</h4>
              <p>Computer vision solutions for image recognition, object detection, and visual data analysis.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9M12 20V4M12 20H3M12 4h9M12 4H3"/>
                </svg>
              </div>
              <h4>Data Engineering</h4>
              <p>Robust data pipelines and infrastructure to fuel your AI systems with clean, reliable information.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="section-container">
          <span className="section-label">WHY CHOOSE US</span>
          <h2 className="section-title">The NexGen AI Advantage</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h4>Proven Expertise</h4>
              <p>Deep technical knowledge combined with industry experience across multiple verticals.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h4>Enterprise-Grade Quality</h4>
              <p>Production-ready solutions built with security, scalability, and reliability in mind.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h4>Speed & Agility</h4>
              <p>Rapid iteration and deployment cycles that keep you ahead of the competition.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h4>Dedicated Partnership</h4>
              <p>We work as an extension of your team, invested in your long-term success.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h4>Impact & Outcomes</h4>
              <p>Measurable results that directly impact your bottom line and operational efficiency.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h4>End-to-End Delivery</h4>
              <p>Complete solutions from strategy to deployment, with ongoing optimization and support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="how-we-work">
        <div className="section-container">
          <span className="section-label">HOW WE WORK</span>
          <h2 className="section-title">Our Proven Process for AI Success</h2>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
              </div>
              <h4>Discovery & Analysis</h4>
              <p>Deep dive into your business challenges, data landscape, and AI opportunities.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
              </div>
              <h4>Strategy & Roadmap</h4>
              <p>Define clear objectives, success metrics, and a phased implementation plan.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"/>
                  <polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <h4>Build & Iterate</h4>
              <p>Agile development with continuous testing, feedback, and refinement cycles.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h4>Deploy & Launch</h4>
              <p>Seamless production deployment with monitoring and performance optimization.</p>
            </div>
            <div className="process-step">
              <div className="step-number">05</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9M12 20V4M12 20H3M12 4h9M12 4H3"/>
                </svg>
              </div>
              <h4>Scale & Optimize</h4>
              <p>Continuous improvement, model retraining, and feature expansion for growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="section-container">
          <span className="section-label">OUR WORK</span>
          <h2 className="section-title">Examples of Our Work</h2>
          <div className="portfolio-grid">
            <div className="portfolio-card">
              <div className="portfolio-image">
                <div className="portfolio-placeholder purple-gradient">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M3 9h18M9 21V9"/>
                  </svg>
                </div>
              </div>
              <div className="portfolio-content">
                <span className="portfolio-tag">Healthcare</span>
                <h4>Predictive Diagnostics Platform</h4>
                <p>AI-powered early detection system reducing diagnostic time by 73% for a leading hospital network.</p>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="portfolio-image">
                <div className="portfolio-placeholder pink-gradient">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <div className="portfolio-content">
                <span className="portfolio-tag">Finance</span>
                <h4>Intelligent Fraud Detection</h4>
                <p>Real-time transaction monitoring system preventing $2.4M in fraudulent activities monthly.</p>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="portfolio-image">
                <div className="portfolio-gradient">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
              </div>
              <div className="portfolio-content">
                <span className="portfolio-tag">Retail</span>
                <h4>Smart Customer Assistant</h4>
                <p>Conversational AI handling 85% of customer inquiries with 94% satisfaction rating.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="section-container">
          <span className="section-label">TESTIMONIALS</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="testimonial-text">"NexGen AI transformed our customer service operations. The AI solution they built handles thousands of inquiries daily with remarkable accuracy."</p>
              <div className="testimonial-author">
                <div className="author-avatar">SK</div>
                <div className="author-info">
                  <span className="author-name">Sarah Kim</span>
                  <span className="author-title">CTO, TechVentures Inc.</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="testimonial-text">"The team's expertise in machine learning is unmatched. They delivered a predictive analytics platform that exceeded all our expectations."</p>
              <div className="testimonial-author">
                <div className="author-avatar">MR</div>
                <div className="author-info">
                  <span className="author-name">Michael Rodriguez</span>
                  <span className="author-title">VP of Data, FinanceHub</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="testimonial-text">"Working with NexGen AI was a game-changer. Their computer vision solution improved our quality control efficiency by 340%."</p>
              <div className="testimonial-author">
                <div className="author-avatar">JC</div>
                <div className="author-info">
                  <span className="author-name">Jennifer Chen</span>
                  <span className="author-title">Operations Director, ManufacturePro</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="testimonial-text">"The ROI we've seen from NexGen AI's recommendation engine has been incredible. Customer engagement is up 156% since implementation."</p>
              <div className="testimonial-author">
                <div className="author-avatar">DP</div>
                <div className="author-info">
                  <span className="author-name">David Park</span>
                  <span className="author-title">CEO, ShopSmart</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="testimonial-text">"Their approach to responsible AI gave us confidence. The solution is not only powerful but also transparent and fair."</p>
              <div className="testimonial-author">
                <div className="author-avatar">EW</div>
                <div className="author-info">
                  <span className="author-name">Emily Watson</span>
                  <span className="author-title">Chief Ethics Officer, HealthFirst</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="testimonial-text">"From concept to deployment, NexGen AI delivered flawlessly. Their team's dedication and technical skill are truly exceptional."</p>
              <div className="testimonial-author">
                <div className="author-avatar">AL</div>
                <div className="author-info">
                  <span className="author-name">Andrew Liu</span>
                  <span className="author-title">Head of Innovation, GlobalTech</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="insights">
        <div className="section-container">
          <span className="section-label">INSIGHTS</span>
          <h2 className="section-title">Insights & Case Studies</h2>
          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-image">
                <div className="insight-placeholder gradient-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <div className="insight-content">
                <span className="insight-category">Case Study</span>
                <h4>Scaling Personalization at Enterprise Level</h4>
                <p>How we helped a Fortune 500 company implement AI-driven personalization across 12 million users.</p>
                <a href="#" className="insight-link">Read More →</a>
              </div>
            </div>
            <div className="insight-card">
              <div className="insight-image">
                <div className="insight-placeholder gradient-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
              </div>
              <div className="insight-content">
                <span className="insight-category">Whitepaper</span>
                <h4>The Future of Agentic AI in Business</h4>
                <p>Exploring how autonomous AI agents are reshaping workflows and decision-making processes.</p>
                <a href="#" className="insight-link">Read More →</a>
              </div>
            </div>
            <div className="insight-card">
              <div className="insight-image">
                <div className="insight-placeholder gradient-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
              </div>
              <div className="insight-content">
                <span className="insight-category">Blog</span>
                <h4>Building Ethical AI: A Practical Guide</h4>
                <p>Best practices for implementing fairness, transparency, and accountability in AI systems.</p>
                <a href="#" className="insight-link">Read More →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="cta-banner">
        <div className="cta-container">
          <h2>Ready to Build Something Smart?</h2>
          <p>Let's discuss how AI can transform your business and create competitive advantage.</p>
          <button className="btn-primary large">Schedule a Consultation</button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-container">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div key={index} className={`faq-item ${faqOpen[index] ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq(index)}>
                  <span>{faq.question}</span>
                  <span className="faq-icon">{faqOpen[index] ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="section-label">CONTACT US</span>
              <h2 className="section-title">Let's Build Something Amazing Together</h2>
              <p>Ready to transform your business with AI? Get in touch and let's discuss your vision.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <span className="contact-label">Email</span>
                    <span className="contact-value">hello@nexgenai.com</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <span className="contact-label">Location</span>
                    <span className="contact-value">San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="John" />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Doe" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="john@company.com" />
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <input type="text" placeholder="Your Company" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea rows="4" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="btn-primary full">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">N</div>
                <span>NexGen AI</span>
              </div>
              <p>Building intelligent solutions that transform businesses and drive innovation.</p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-links">
              <h4>Services</h4>
              <ul>
                <li><a href="#">AI Strategy</a></li>
                <li><a href="#">Machine Learning</a></li>
                <li><a href="#">Conversational AI</a></li>
                <li><a href="#">Computer Vision</a></li>
                <li><a href="#">Data Engineering</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">API Reference</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 NexGen AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;