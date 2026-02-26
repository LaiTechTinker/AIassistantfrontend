import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../images/logo.png';

export default function Sidebar() {
  const [accountOpen, setAccountOpen] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon gradient-bg">
          <img src={Logo} alt="Zuba AI Logo" className="logo-icon" />
        </div>
        <span className="logo-text">Zuba AI</span>
      </div>

      <nav className="sidebar-nav">
        
        <NavLink
          to="/dashboard/calls"
          end
          className={({ isActive }) =>
            isActive ? 'nav-item active' : 'nav-item'
          }
        >
          <i className="fa-solid fa-phone"></i>
          <span>Calls</span>
        </NavLink>

        <NavLink
          to="/dashboard/setup"
          end
          className={({ isActive }) =>
            isActive ? 'nav-item active' : 'nav-item'
          }
        >
          <i className="fa-solid fa-gear"></i>
          <span>SetUp assistant</span>
        </NavLink>

        {/* ACCOUNT DROPDOWN */}
        <div className="nav-dropdown">
          <div
            className="nav-item dropdown-toggle"
            onClick={() => setAccountOpen(!accountOpen)}
          >
            <i className="fa-solid fa-user"></i>
            <span>Account</span>
            <i
              className={`fa-solid fa-chevron-down dropdown-arrow ${
                accountOpen ? 'rotate' : ''
              }`}
            ></i>
          </div>

          {accountOpen && (
            <div className="dropdown-menu">
              <NavLink
                to="/dashboard/account/settings"
                className="dropdown-item"
              >
                Account Settings
              </NavLink>

              <NavLink
                to="/dashboard/account/subscription"
                className="dropdown-item"
              >
                Subscription
              </NavLink>
            </div>
          )}
        </div>

        {/* ASSISTANT DROPDOWN */}
        <div className="nav-dropdown">
          <div
            className="nav-item dropdown-toggle"
            onClick={() => setAssistantOpen(!assistantOpen)}
          >
            <i className="fa-solid fa-robot"></i>
            <span>Assistant</span>
            <i
              className={`fa-solid fa-chevron-down dropdown-arrow ${
                assistantOpen ? 'rotate' : ''
              }`}
            ></i>
          </div>

          {assistantOpen && (
            <div className="dropdown-menu">
              <NavLink
                to="/dashboard/assistant/business-info"
                className="dropdown-item"
              >
                Business Information
              </NavLink>

              <NavLink
                to="/dashboard/assistant/notifications"
                className="dropdown-item"
              >
                Notification
              </NavLink>

              <NavLink
                to="/dashboard/assistant/profile"
                className="dropdown-item"
              >
                Agent Profile
              </NavLink>

              <NavLink
                to="/dashboard/assistant/greetings"
                className="dropdown-item"
              >
                Greetings
              </NavLink>
            </div>
          )}
        </div>

        <NavLink
          to="/dashboard/support"
          className={({ isActive }) =>
            isActive ? 'nav-item active' : 'nav-item'
          }
        >
          <i className="fa-solid fa-headset"></i>
          <span>Support</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}