import React from "react";

const ProfileDropdown = () => {
  return (
    <div className="dropdown text-end">
      <a
        href="#"
        className="d-block link-dark text-decoration-none dropdown-toggle"
        id="dropdownUser1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        
      </a>
      <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
        <li>
          <a className="dropdown-item" href="/profile">My Profile</a>
        </li>
        <li>
          <a className="dropdown-item" href="/dashboard">Dashboard</a>
        </li>
        <li><hr className="dropdown-divider" /></li>
        <li>
          <button className="dropdown-item" onClick={() => alert("Logged out")}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;




 