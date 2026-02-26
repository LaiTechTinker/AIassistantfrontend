import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import "./Dashboard.css"

export default function Dashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
}