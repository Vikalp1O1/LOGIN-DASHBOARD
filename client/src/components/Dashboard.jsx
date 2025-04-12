import React from 'react';
import './dashboard.css'; // Assuming you have a CSS file for styling

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login'; // Redirect to login
  };

  return (
    <div className="dashboard">
    <div className="dashboard-header">
      <h2>Welcome, {user.name}</h2>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  
    <table className="styled-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Date Created</th>
          <th>Role</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Michael" className="avatar-img" /> Michael Holz</td>
          <td>04/10/2013</td>
          <td>Admin</td>
          <td><span className="status active"></span> Active</td>
          <td>
            <span className="action-icons">⚙️ ❌</span>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td><img src="https://randomuser.me/api/portraits/women/2.jpg" alt="Paula" className="avatar-img" /> Paula Wilson</td>
          <td>05/08/2014</td>
          <td>Publisher</td>
          <td><span className="status active"></span> Active</td>
          <td><span className="action-icons">⚙️ ❌</span></td>
        </tr>
        <tr>
          <td>3</td>
          <td><img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Antonio" className="avatar-img" /> Antonio Moreno</td>
          <td>11/05/2015</td>
          <td>Publisher</td>
          <td><span className="status suspended"></span> Suspended</td>
          <td><span className="action-icons">⚙️ ❌</span></td>
        </tr>
        <tr>
          <td>4</td>
          <td><img src="https://randomuser.me/api/portraits/women/4.jpg" alt="Mary" className="avatar-img" /> Mary Saveley</td>
          <td>06/09/2016</td>
          <td>Reviewer</td>
          <td><span className="status active"></span> Active</td>
          <td><span className="action-icons">⚙️ ❌</span></td>
        </tr>
        <tr>
          <td>5</td>
          <td><img src="https://randomuser.me/api/portraits/men/5.jpg" alt="Martin" className="avatar-img" /> Martin Sommer</td>
          <td>12/08/2017</td>
          <td>Moderator</td>
          <td><span className="status inactive"></span> Inactive</td>
          <td><span className="action-icons">⚙️ ❌</span></td>
        </tr>
      </tbody>
    </table>
  </div>
  
  );
};

export default Dashboard;
