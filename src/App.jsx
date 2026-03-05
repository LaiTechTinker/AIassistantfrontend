import { Route, Routes } from "react-router-dom";
import Signup from '../src/Pages/SignUp';
import Login from '../src/Pages/Login';
import LandingPage from '../src/Pages/LandingPage';
import Dashboard from "./Pages/Dashboard";
import Calls from "./Pages/Calls";
import Account from "./Pages/AccountSetting";
import Assistant from "./Pages/AssistantBusiness";
import SetUp from "./Pages/SetUp";
import Subscription from "./Pages/Subscription";
import Notifications from "./Pages/Notifications";
import Profile from "./Pages/AgentProfile";
import EmailVerification from "./Pages/Verify";
import Protected from "./components/auth/Protected";

import './App.css';

function App() {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<EmailVerification />} />

        {/* Protected Routes - Require Authentication */}
        <Route path="/dashboard" element={
          <Protected>
            <Dashboard />
          </Protected>
        }>
          <Route index element={<Calls />} />
          <Route path="setup" element={<SetUp />} />
          <Route path="calls" element={<Calls />} />
          <Route path="account/settings" element={<Account />} />
          <Route path="account/subscription" element={<Subscription />} />
          <Route path="assistant/business-info" element={<Assistant />} />
          <Route path="assistant/notifications" element={<Notifications />} />
          <Route path="assistant/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
