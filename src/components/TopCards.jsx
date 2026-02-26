export default function TopCards() {
  return (
    <div className="top-cards-container">
      <div className="stat-card">
        <h3>Total Calls</h3>
        <p className="stat-value gradient-text">0</p>
        <p className="stat-label">Calls handled by your assistant</p>
      </div>
      <div className="stat-card">
        <h3>Average Duration</h3>
        <p className="stat-value gradient-text">0 min 0 sec</p>
        <p className="stat-label">Average call handling time</p>
      </div>
      <div className="stat-card">
        <h3>Latest Call</h3>
        <p className="stat-value gradient-text">None</p>
        <p className="stat-label">Most recent call received</p>
      </div>
    </div>
  );
}