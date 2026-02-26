import {BrowserRouter, Route, Routes } from "react-router-dom";
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

// import Support from "./pages/Support";

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* dasboard section */}
       <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
         
          <Route index element={<Calls />} />
          <Route  path="setup" element={<SetUp />} />
          <Route path="calls" element={<Calls />} />
          <Route path="account/settings" element={<Account />} />
           <Route path="account/subscription" element={<Subscription />} />
          <Route path="assistant/business-info" element={<Assistant />} />
           <Route path="assistant/notifications" element={<Notifications />} />
            <Route path="assistant/profile" element={<Profile />} />
          {/* <Route path="support" element={<Support />} /> */}
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;