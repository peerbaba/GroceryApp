import React from 'react'

const Analytics = () => {
  return (
   <div class="glass-card">
      <h5>Latest Projects</h5>
      <table class="table table-dark table-hover mt-3">
        <thead>
          <tr><th>Project</th><th>Status</th><th>Date</th></tr>
        </thead>
        <tbody>
          <tr><td>User Name</td><td><span class="badge bg-success">Done</span></td><td>12 Feb</td></tr>
          <tr><td>Address</td><td><span class="badge bg-success">Done</span></td><td>11 Feb</td></tr>
          <tr><td>Email</td><td><span class="badge bg-success">Done</span></td><td>13 Feb</td></tr>
          <tr><td>Mobile App</td><td><span class="badge bg-warning">Pending</span></td><td>18 Feb</td></tr>
        </tbody>
      </table>
    </div>
    
  )
}

export default Analytics