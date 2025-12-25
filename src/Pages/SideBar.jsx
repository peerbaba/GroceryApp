import React from "react";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();
  return (
    <div>
      <aside id="sidebar">
        <div class="sidebar-header">
          <span class="logo">CodzSword</span>
          <button id="toggleBtn" class="btn btn-sm btn-dark">
            <i class="bx bx-menu"></i>
          </button>
        </div>

        <ul class="menu">
          <li class="active">
            <a href="#">
              <i class="bx bx-home"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <li onClick={() => navigate("/user")}>
            <i class="bx bx-user"></i>
            <span>Users</span>
          </li>

          <li onClick={() => navigate("/orders")}>
            <i class="bx bx-user"></i>
            <span>Orders</span>
          </li>

          <li onClick={() => navigate("/analytics")}>
            <i class="bx bx-user"></i>
            <span>Analytics</span>
          </li>

          <li>
            <a href="#">
              <i class="bx bx-cog"></i>
              <span>Settings</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i class="bx bx-help-circle"></i>
              <span>Help</span>
            </a>
          </li>

          <li>
            <a href="#">
              <i class="bx bx-info-circle"></i>
              <span>About Us</span>
            </a>
          </li>
        </ul>

        <div class="logout">
          <i class="bx bx-log-out"></i> Logout
        </div>
      </aside>
    </div>
  );
}

export default SideBar;
