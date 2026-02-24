import { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Logo from "../images/logo.png"
const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState({});

  const toggleFaq = (index) => {
    setFaqOpen(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const faqData = [
  {
    question: "How does the AI voice receptionist work?",
    answer: "Our AI receptionist automatically answers incoming calls, understands what the caller needs, responds naturally, books appointments, captures lead details, or routes calls to the right person based on your custom setup."
  },
  {
    question: "Can it book appointments directly into my calendar?",
    answer: "Yes. The AI integrates with your calendar system to check availability, schedule appointments in real time, and send confirmations to customers instantly."
  },
  {
    question: "What happens if the AI cannot handle a request?",
    answer: "If a request is complex or requires human assistance, the system seamlessly transfers the call to your team or takes a detailed message for follow-up."
  },
  {
    question: "Is it available 24/7?",
    answer: "Absolutely. Your AI receptionist works around the clock, ensuring you never miss important customer calls — even outside business hours."
  },
  {
    question: "Can I customize the greeting and call flow?",
    answer: "Yes. You can fully customize greetings, scripts, call routing rules, booking preferences, and responses to match your brand voice and business process."
  },
  {
    question: "Is my business data secure?",
    answer: "We use secure, enterprise-grade infrastructure to protect your call data and customer information, ensuring privacy and reliability at all times."
  },
  {
    question: "How long does setup take?",
    answer: "Most businesses can get their AI receptionist live within minutes. Our setup process is simple, guided, and requires no technical expertise."
  },
  {
    question: "Will this replace my human staff?",
    answer: "The AI receptionist is designed to support your team, not replace them. It handles repetitive calls and inquiries so your staff can focus on higher-value tasks."
  }
];
  return (
    <div className="landing">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
           
               <img src={Logo} alt="ZubaAI Logo" className="logo-icon" />
            
            <span>Zuba AI</span>
          </div>
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            {/* <li><a href="#portfolio">Portfolio</a></li> */}
            <li><a href="#about">About</a></li>
            <li><a href="#FAQ">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        <Link to="/signup">
        <button className="nav-cta">Get Started</button>
        </Link>  
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
          <h1 className="hero-title">Never Miss a Call Again — Your AI Receptionist Works 24/7</h1>
          <p className="hero-description">
            Transform how your business handles calls with an intelligent AI voice receptionist that answers, qualifies, books, and routes calls automatically — so you never lose customers again.
          </p>
          <div className="hero-buttons">
           <Link to="/signup"><button className="btn-primary">Get Started </button></Link> 
             <Link to="/Login"><button className="btn-secondary">Login</button></Link>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10,000+ </span>
              <span className="stat-label">Calls Handled Monthly</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+ </span>
              <span className="stat-label">Businesses Automated</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">35,000+ 
</span>
              <span className="stat-label">Minutes of Staff Time Saved</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99.9% </span>
              <span className="stat-label">Uptime & Reliable Performance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="about" className="who-we-are">
        <div className="section-container">
          <span className="section-label">WHO WE ARE</span>
          <h2 className="section-title">Powering the Future of Smart Call Management</h2>
          <div className="cards-grid three-col">
            <div className="info-card">
              <div className="card-icon purple">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>AI-Driven From Day One</h3>
              <p>Our AI voice receptionist is built with intelligence at its core — answering calls naturally, understanding customer intent, capturing key details, and improving with every interaction</p>
            </div>
            <div className="info-card">
              <div className="card-icon pink">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3>Instant Setup, Zero Complexity</h3>
              <p>Launch your AI receptionist in minutes. No hardware, no complicated installation — just configure your greeting, call routing, and booking rules, and you're live</p>
            </div>
            <div className="info-card">
              <div className="card-icon gradient">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3>Built for Real Business Results</h3>
              <p>Reduce missed calls, increase booked appointments, capture more qualified leads, and free up your team’s time with a system designed to deliver measurable growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
     <section id="services" className="what-we-offer">
  <div className="section-container">
    <span className="section-label">WHAT WE OFFER</span>
    <h2 className="section-title">Complete AI Voice Receptionist Solutions for Modern Businesses</h2>
    <div className="features-grid">
      <div className="feature-card">
        <div className="feature-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="M3 9h18M9 21V9"/>
          </svg>
        </div>
        <h4>AI Call Handling</h4>
        <p>Intelligent voice AI that answers every call instantly, understands caller intent, and responds naturally — 24/7 without breaks.</p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <h4>Smart Call Routing</h4>
        <p>Automatically direct calls to the right department, team member, or voicemail based on caller needs and custom rules.</p>
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
        <h4>Appointment Booking</h4>
        <p>Let customers schedule appointments automatically during calls, with real-time calendar integration and confirmations.</p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <h4>Secure & Reliable Infrastructure</h4>
        <p>Enterprise-grade security and uptime to ensure your business calls are protected, compliant, and always available.</p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        </div>
        <h4>Custom Call Flows</h4>
        <p>Create personalized greetings, scripts, and decision trees that match your brand voice and business processes.</p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <h4>Lead Capture & Qualification</h4>
        <p>Automatically collect caller information, qualify leads, and send structured summaries directly to your team.</p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <h4>Human Handoff</h4>
        <p>Seamlessly transfer calls to a human agent when needed, ensuring complex requests are handled smoothly.</p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
            <circle cx="12" cy="13" r="4"/>
          </svg>
        </div>
        <h4>Call Analytics & Insights</h4>
        <p>Track call volume, response rates, bookings, and performance metrics to continuously improve customer experience.</p>
      </div>

      <div className="feature-card">
        <div className="feature-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 20h9M12 20V4M12 20H3M12 4h9M12 4H3"/>
          </svg>
        </div>
        <h4>CRM & Tool Integrations</h4>
        <p>Connect seamlessly with your CRM, booking software, and business tools to keep all customer data synchronized.</p>
      </div>
    </div>
  </div>
</section>

      {/* Why Choose Us Section */}
     <section className="why-choose-us">
  <div className="section-container">
    <span className="section-label">WHY CHOOSE US</span>
    <h2 className="section-title">The Smart AI Receptionist Advantage</h2>
    <div className="benefits-grid">
      <div className="benefit-card">
        <div className="benefit-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <h4>Built for Real Businesses</h4>
        <p>Designed specifically to handle real customer calls, bookings, inquiries, and lead capture across multiple industries.</p>
      </div>

      <div className="benefit-card">
        <div className="benefit-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </div>
        <h4>Enterprise-Level Reliability</h4>
        <p>Secure, scalable, and always available — ensuring your business never misses important customer calls.</p>
      </div>

      <div className="benefit-card">
        <div className="benefit-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
        </div>
        <h4>Instant Deployment</h4>
        <p>Get your AI receptionist live in minutes with simple configuration — no technical complexity required.</p>
      </div>

      <div className="benefit-card">
        <div className="benefit-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <h4>Seamless Human Handoff</h4>
        <p>When needed, calls are smoothly transferred to your team, ensuring customers always receive the right level of support.</p>
      </div>

      <div className="benefit-card">
        <div className="benefit-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <h4>Measurable Growth Impact</h4>
        <p>Increase booked appointments, capture more leads, and reduce staffing costs with trackable performance insights.</p>
      </div>

      <div className="benefit-card">
        <div className="benefit-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <h4>Continuous Optimization</h4>
        <p>Your AI receptionist learns and improves over time, adapting to customer behavior and refining responses for better outcomes.</p>
      </div>
    </div>
  </div>
</section>
      {/* How We Work Section */}
      <section className="how-we-work">
  <div className="section-container">
    <span className="section-label">HOW WE WORK</span>
    <h2 className="section-title">Our Simple Process to Automate Your Business Calls</h2>
    <div className="process-timeline">
      <div className="process-step">
        <div className="step-number">01</div>
        <div className="step-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
        </div>
        <h4>Business Assessment</h4>
        <p>We understand your call volume, customer needs, booking process, and routing requirements.</p>
      </div>

      <div className="process-step">
        <div className="step-number">02</div>
        <div className="step-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
        </div>
        <h4>Custom Call Setup</h4>
        <p>Configure greetings, scripts, booking rules, lead capture forms, and call routing logic to match your brand.</p>
      </div>

      <div className="process-step">
        <div className="step-number">03</div>
        <div className="step-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
          </svg>
        </div>
        <h4>AI Training & Testing</h4>
        <p>We test real-world call scenarios to ensure accurate responses, smooth handoffs, and reliable performance.</p>
      </div>

      <div className="process-step">
        <div className="step-number">04</div>
        <div className="step-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <h4>Go Live</h4>
        <p>Your AI receptionist starts answering calls instantly, booking appointments, routing inquiries, and capturing leads.</p>
      </div>

      <div className="process-step">
        <div className="step-number">05</div>
        <div className="step-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 20h9M12 20V4M12 20H3M12 4h9M12 4H3"/>
          </svg>
        </div>
        <h4>Monitor & Improve</h4>
        <p>Track call analytics, refine responses, and continuously optimize performance as your business grows.</p>
      </div>
    </div>
  </div>
</section>

      

      {/* Testimonials Section */}
      <section className="testimonials">
  <div className="section-container">
    <span className="section-label">TESTIMONIALS</span>
    <h2 className="section-title">What Businesses Are Saying</h2>
    <div className="testimonials-grid">
      <div className="testimonial-card">
        <div className="testimonial-rating">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <p className="testimonial-text">"Since launching the AI receptionist, we haven’t missed a single call. It handles bookings and customer inquiries better than we imagined."</p>
        <div className="testimonial-author">
          <div className="author-avatar">SK</div>
          <div className="author-info">
            <span className="author-name">Sarah Kim</span>
            <span className="author-title">Operations Manager, UrbanCare Clinic</span>
          </div>
        </div>
      </div>

      <div className="testimonial-card">
        <div className="testimonial-rating">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <p className="testimonial-text">"Our call volume doubled, but we didn’t need to hire more staff. The AI receptionist answers instantly and routes calls perfectly."</p>
        <div className="testimonial-author">
          <div className="author-avatar">MR</div>
          <div className="author-info">
            <span className="author-name">Michael Rodriguez</span>
            <span className="author-title">Founder, Prime Realty Group</span>
          </div>
        </div>
      </div>

      <div className="testimonial-card">
        <div className="testimonial-rating">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <p className="testimonial-text">"Appointment scheduling is now fully automated. Our customers love the quick responses, and our team saves hours every week."</p>
        <div className="testimonial-author">
          <div className="author-avatar">JC</div>
          <div className="author-info">
            <span className="author-name">Jennifer Chen</span>
            <span className="author-title">Director, Elite Beauty Studio</span>
          </div>
        </div>
      </div>

      <div className="testimonial-card">
        <div className="testimonial-rating">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <p className="testimonial-text">"We’ve seen a clear increase in qualified leads. Every caller’s information is captured accurately and sent directly to our CRM."</p>
        <div className="testimonial-author">
          <div className="author-avatar">DP</div>
          <div className="author-info">
            <span className="author-name">David Park</span>
            <span className="author-title">CEO, Growth Marketing Co.</span>
          </div>
        </div>
      </div>

      <div className="testimonial-card">
        <div className="testimonial-rating">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <p className="testimonial-text">"The setup was incredibly simple. Within minutes, our AI receptionist was live and professionally handling customer calls."</p>
        <div className="testimonial-author">
          <div className="author-avatar">EW</div>
          <div className="author-info">
            <span className="author-name">Emily Watson</span>
            <span className="author-title">Co-Founder, FitLife Wellness</span>
          </div>
        </div>
      </div>

      <div className="testimonial-card">
        <div className="testimonial-rating">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <p className="testimonial-text">"It feels like we hired a full-time receptionist without the overhead costs. Reliable, professional, and always available."</p>
        <div className="testimonial-author">
          <div className="author-avatar">AL</div>
          <div className="author-info">
            <span className="author-name">Andrew Liu</span>
            <span className="author-title">Head of Operations, Swift Logistics</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

     

    {/* CTA Banner Section */}
<section className="cta-banner">
  <div className="cta-container">
    <h2>Ready to Never Miss Another Call?</h2>
    <p>Launch your AI voice receptionist today and start capturing more leads, booking more appointments, and serving customers 24/7.</p>
   <Link to="/signup"><button className="btn-primary large">Start Your Free Trial</button></Link> 
  </div>
</section>

      {/* FAQ Section */}
      <section className="faq-section" id='FAQ'>
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
                    <span className="contact-value">ibrahimalaaya7@gmail.com</span>
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
                    <span className="contact-value">+2349016079882</span>
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
                    <span className="contact-value">Ilorin Kwara</span>
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
                 <img src={Logo} alt="ZubaAI Logo" className="logo-icon" />
                <span>Zuba AI</span>
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
                <li><a href="#">AI Voice Receptionist</a></li>
                <li><a href="#">Automated Calls</a></li>
                <li><a href="#">Conversational AI</a></li>
                
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
            <p>© 2025   Zuba AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;