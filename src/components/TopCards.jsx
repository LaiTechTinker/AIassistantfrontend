import React, { useState, useEffect } from 'react';
import api from '../utils/axiosinstance';
import { API_PATH } from '../utils/apipath';

export default function TopCards() {
  const [stats, setStats] = useState({
    totalCalls: 0,
    avgDuration: '0 min 0 sec',
    latestCall: 'None'
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await api.get(API_PATH.CALLS.GET_LOGS);
      const calls = response.data?.call || [];
      
      if (calls.length === 0) {
        setLoading(false);
        return;
      }

      // Calculate total calls
      const totalCalls = calls.length;

      // Calculate average duration
      const totalDuration = calls.reduce((acc, call) => acc + (call.duration || 0), 0);
      const avgSeconds = Math.round(totalDuration / totalCalls);
      const avgMins = Math.floor(avgSeconds / 60);
      const avgSecs = avgSeconds % 60;
      const avgDuration = `${avgMins} min ${avgSecs} sec`;

      // Get latest call
      const latestCallDate = calls[0]?.endedAt;
      const latestCall = latestCallDate 
        ? new Date(latestCallDate).toLocaleDateString() 
        : 'None';

      setStats({
        totalCalls,
        avgDuration,
        latestCall
      });
    } catch (error) {
      console.error("Error fetching stats:", error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="top-cards-container">
        <div className="stat-card">
          <h3>Total Calls</h3>
          <p className="stat-value gradient-text">...</p>
        </div>
        <div className="stat-card">
          <h3>Average Duration</h3>
          <p className="stat-value gradient-text">...</p>
        </div>
        <div className="stat-card">
          <h3>Latest Call</h3>
          <p className="stat-value gradient-text">...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="top-cards-container">
      <div className="stat-card">
        <h3>Total Calls</h3>
        <p className="stat-value gradient-text">{stats.totalCalls}</p>
        <p className="stat-label">Calls handled by your assistant</p>
      </div>
      <div className="stat-card">
        <h3>Average Duration</h3>
        <p className="stat-value gradient-text">{stats.avgDuration}</p>
        <p className="stat-label">Average call handling time</p>
      </div>
      <div className="stat-card">
        <h3>Latest Call</h3>
        <p className="stat-value gradient-text">{stats.latestCall}</p>
        <p className="stat-label">Most recent call received</p>
      </div>
    </div>
  );
}
