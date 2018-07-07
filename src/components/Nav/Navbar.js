import React from "react";
import Flexbox from 'flexbox-react';
import "./Navbar.css";

const Navbar = () => (
<Flexbox element="navbar">
  
  <nav>
  <ul class="container">
    <li class="goHome">Home</li>
    <li>Profile</li>
    <li class="search">
      <input type="text" class="search-input" placeholder="Search" />
    </li>
    <li>Logout</li>
  </ul>
</nav>

</Flexbox>

  );

  export default Navbar;