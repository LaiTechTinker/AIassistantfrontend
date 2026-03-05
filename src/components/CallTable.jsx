import React, { useState, useEffect } from 'react';
import api from '../utils/axiosinstance';
import { API_PATH } from '../utils/apipath';

export default function CallTable() {
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCallLogs();
  }, []);

  const fetchCallLogs = async () => {
    try {
      setLoading(true);
      const response = await api.get(API_PATH.CALLS.GET_LOGS);
      setCalls(response.data?.call || []);
    } catch (err) {
      console.error("Error fetching call logs:", err.message);
      setError("Failed to load call logs");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const formatDuration = (seconds) => {
    if (!seconds) return '-';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  if (loading) {
    return (
      <div className="table-wrapper">
        <table className="call-table">
          <thead>
            <tr>
              <th>Date/Time Ended</th>
              <th>Caller Name</th>
              <th>Caller Number</th>
              <th>Summary</th>
              <th>
                Recording <br />
                <span className="th-sub">for 2 weeks</span>
              </th>
              <th>Duration</th>
              <th>Transcript</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="7" className="empty-state">
                Loading...
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="table-wrapper">
      <table className="call-table">
        <thead>
          <tr>
            <th>Date/Time Ended</th>
            <th>Caller Name</th>
            <th>Caller Number</th>
            <th>Summary</th>
            <th>
              Recording <br />
              <span className="th-sub">for 2 weeks</span>
            </th>
            <th>Duration</th>
            <th>Transcript</th>
          </tr>
        </thead>
        <tbody>
          {calls.length === 0 ? (
            <tr>
              <td colSpan="7" className="empty-state">
                No call logs found.
              </td>
            </tr>
          ) : (
            calls.map((call, index) => (
              <tr key={call._id || index}>
                <td>{formatDate(call.endedAt)}</td>
                <td>{call.callerName || '-'}</td>
                <td>{call.phoneNumber || '-'}</td>
                <td>{call.summary || '-'}</td>
                <td>
                  {call.recordingUrl ? (
                    <a href={call.recordingUrl} target="_blank" rel="noopener noreferrer">
                      <i className="fa-solid fa-play"></i> Play
                    </a>
                  ) : (
                    '-'
                  )}
                </td>
                <td>{formatDuration(call.duration)}</td>
                <td>
                  {call.transcript ? (
                    <button className="transcript-btn">
                      <i className="fa-solid fa-file-lines"></i> View
                    </button>
                  ) : (
                    '-'
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
