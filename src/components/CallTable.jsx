export default function CallTable() {
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
              No call logs found.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}