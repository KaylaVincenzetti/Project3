import React from "react";
import Flexbox from 'flexbox-react';
import "./Navbar.css";

const Navbar = () => (
<Flexbox element="navbar">
  
  <nav class="navbar">
  <ul class="container">
    <li class="goHome">Home<a href=""></a></li>
    <li><a href="/depression">Depression</a></li>
    <li><a href="/anxiety">Anxiety</a></li>
    <li><a href="/alternative">Altrenative</a></li>
    <li><a href="">Login</a></li>
    </ul>
</nav>

</Flexbox>

  );

  export default Navbar;