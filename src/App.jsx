import {BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from '../src/Pages/SignUp';
import Login from '../src/Pages/Login';
import LandingPage from '../src/Pages/LandingPage';
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
      </BrowserRouter>
    </div>
  );
}

export default App;