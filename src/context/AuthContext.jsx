import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../utils/axiosinstance";
import { API_PATH } from "../utils/apipath";

// Create Context
export const AuthContext = createContext();
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an Authprovider");
  }
  return context;
};

// Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // store user info
  const [token, setToken] = useState(null); // store auth token
  const [loading, setLoading] = useState(true); // track loading state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load auth state from localStorage on mount and fetch user profile
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("token");

      if (storedUser && storedToken) {
        setToken(storedToken);
        
        // Try to fetch fresh user profile from backend
        try {
          const response = await api.get(API_PATH.AUTH.GET_PROFILE);
          setUser(response.data.user);
          setIsAuthenticated(true);
          // Update localStorage with fresh user data
          localStorage.setItem("user", JSON.stringify(response.data.user));
        } catch (error) {
          // If token is invalid/expired, use stored user but warn
          console.warn("Failed to fetch user profile, using stored data:", error.message);
          setUser(JSON.parse(storedUser));
          // If 401, user is not really authenticated
          if (error.response?.status === 401) {
            setIsAuthenticated(false);
            localStorage.removeItem("token");
            localStorage.removeItem("user");
          } else {
            setIsAuthenticated(true);
          }
        }
      }
    } catch (e) {
      console.error("Auth check failed:", e);
    } finally {
      setLoading(false);
    }
  };

  // Login function
  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    setIsAuthenticated(true);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", authToken);
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  // Update user
  const updateUser = (updatedUserData) => {
    const newUserData = { ...user, ...updatedUserData };
    localStorage.setItem("user", JSON.stringify(newUserData));
    setUser(newUserData);
  };

  // Refresh user profile from backend
  const refreshUser = async () => {
    try {
      const response = await api.get(API_PATH.AUTH.GET_PROFILE);
      setUser(response.data.user);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      return response.data.user;
    } catch (error) {
      console.error("Failed to refresh user:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{ 
        user, 
        token, 
        isAuthenticated, 
        loading, 
        login, 
        logout, 
        updateUser,
        refreshUser 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
