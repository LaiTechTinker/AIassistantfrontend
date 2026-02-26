import TopCards from '../components/TopCards';
import CallTable from '../components/CallTable';

export default function Calls() {
  return (
    <div className="page-container">
      <header className="page-header">
        <div className="header-icon gradient-bg">
          <i className="fa-solid fa-phone"></i>
        </div>
        <div className="header-text">
          <h1 className="page-title">Call History</h1>
          <p className="page-subtitle">View your call logs, recordings, and conversation transcripts</p>
        </div>
      </header>
      
      <TopCards />
      <CallTable />
    </div>
  );
}