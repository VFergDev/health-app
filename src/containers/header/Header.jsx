import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div>
      <header>
      <nav>
        <ul>
          <li>
            <a href="../pages/Dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/forms">Forms</a>
          </li>
          <li>
            <a href="/visualization">Visualization</a>
          </li>
          <li>
            <a href="/medication-list">Medication List</a>
          </li>
          <li>
            <a href="/doctor-list">Doctor List</a>
          </li>
          <li>
            <a href="/forum">Forum</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/cloud-access">Cloud Access</a>
          </li>
          <li>
            <a href="/account-settings">Account Settings</a>
          </li>
          <li>
            <a href="/data-export">Data Export</a>
          </li>
          <li>
            <a href="/data-import">Data Import</a>
          </li>
          <li>
            <a href="/notes">Notes</a>
          </li>
          <li>
            <a href="/doctor-search">Doctor Search</a>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  )
}

export default Header


// function Header() {
//   return (
    
//   );
// }

// export default Header;
