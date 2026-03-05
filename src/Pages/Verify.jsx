import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../utils/axiosinstance";
import { API_PATH } from "../utils/apipath";
import { useAuth } from "../context/AuthContext";
import Logo from "../images/logo.png";
import "./verify.css";

const EmailVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const inputsRef = useRef([]);
  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  const { login } = useAuth();

  /* ---------------- Countdown Timer ---------------- */
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  /* ---------------- Handle Input Change ---------------- */
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Move to next input
    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }

    // Auto submit when last digit entered
    if (index === 3 && value) {
      const fullCode = [...updatedOtp].join("");
      if (fullCode.length === 4) {
        handleVerify(fullCode);
      }
    }
  };

  /* ---------------- Handle Backspace ---------------- */
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  /* ---------------- Handle Paste ---------------- */
  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("text");
    if (!/^\d{4}$/.test(pasteData)) return;

    const splitOtp = pasteData.split("");
    setOtp(splitOtp);

    inputsRef.current[3].focus();
    handleVerify(pasteData);
  };

  /* ---------------- Verify OTP ---------------- */
  const handleVerify = async (codeParam) => {
    const fullCode = codeParam || otp.join("");

    if (fullCode.length !== 4) {
      toast.error("Enter complete 4-digit code");
      return;
    }

    if (!email) {
      toast.error("Email not found. Please sign up again.");
      return;
    }

    setLoading(true);
    console.log(fullCode)

    try {
      const response = await api.post(API_PATH.AUTH.VERIFY_EMAIL, {
        email,
        code: fullCode,
      });

      const { token, user } = response.data;
      
      // Login the user after successful verification
      login(user, token);
      
      toast.success("Email verified successfully!");
      localStorage.removeItem("email");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid verification code");
      console.error("Verification error:", error);

      // Clear OTP on failure
      setOtp(["", "", "", ""]);
      inputsRef.current[0].focus();
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- Resend OTP ---------------- */
  const handleResend = async () => {
    if (timer > 0) return;

    try {
      await api.post(API_PATH.AUTH.RESEND_OTP, { email });
      toast.success("OTP resent successfully");
      setTimer(60);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to resend OTP");
       console.error("Verification error:", error);
    }
  };

  return (
    <div className="verify-container">
      {/* Left Panel */}
      <div className="left-panel">
        <div className="curved-lines">
          <svg viewBox="0 0 400 400" fill="none">
            <path d="M50 200C50 117.157 117.157 50 200 50C282.843 50 350 117.157 350 200" stroke="#2A2A2A" strokeWidth="1"/>
            <path d="M30 200C30 106.112 106.112 30 200 30C293.888 30 370 106.112 370 200" stroke="#252525" strokeWidth="1"/>
            <path d="M10 200C10 95.067 95.067 10 200 10C304.933 10 390 95.067 390 200" stroke="#202020" strokeWidth="1"/>
            <path d="M-10 200C-10 84.022 84.022 -10 200 -10C315.978 -10 410 84.022 410 200" stroke="#1A1A1A" strokeWidth="1"/>
          </svg>
        </div>

        <div className="left-content">
          <h1 className="headline">
            <span className="gradient-text">We answer every call. </span>
            <span>So you never miss an opportunity.</span>
          </h1>
          <p className="subtitle">
            ZubaAI powers the next generation of business communication.
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        <div className="logo">
          <img src={Logo} alt="ZubaAI Logo" className="logo-icon" />
          <span className="logo-text">ZubaAI</span>
        </div>

        <h2 className="form-title">Verify Your Email</h2>
        <p className="verify-subtitle">
          Enter the 4-digit code sent to your email address.
        </p>

        <div className="otp-container" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              ref={(el) => (inputsRef.current[index] = el)}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="otp-input"
            />
          ))}
        </div>

        <button
          type="button"
          className="button button-primary"
          onClick={() => handleVerify()}
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify Email"}
        </button>

        <button
          className="resend-btn"
          onClick={handleResend}
          disabled={timer > 0}
        >
          {timer > 0 ? `Resend in ${timer}s` : "Resend OTP"}
        </button>

        <div className="form-footer">
          <p className="footer-text">
            Back to{" "}
            <Link to="/login" className="footer-link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
