import React from 'react'

const Stat = () => {
  return (
   <div>
    <div class="my-3">
      <button class="glow-btn blue">Add User</button>
      <button class="glow-btn green">Add Order</button>
      <button class="glow-btn orange">Export</button>
      <button class="glow-btn red">Refresh</button>
    </div>
     <div class="row g-4">
      <div class="col-md-3"><div class="stat-card blue">👤 Users <h2>1240</h2></div></div>
      <div class="col-md-3"><div class="stat-card green">💰 Revenue <h2>$42K</h2></div></div>
      <div class="col-md-3"><div class="stat-card orange">📦 Orders <h2>320</h2></div></div>
      <div class="col-md-3"><div class="stat-card purple">📈 Growth <h2>18%</h2></div></div>
    </div>

</div>

  )
}

export default Stat