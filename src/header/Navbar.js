import React from 'react';

function Navbar () {
  return (
    <>
  <nav className='nav-cont'>
    <div>
    <h1>K.G</h1>
    </div>
      <div className='bars'>
      <i className="fas fa-bars"></i>
      </div>
   </nav>
    <nav className='sidenav'>
    <div className='items'>
    <ul>
      <li><i class="fas fa-times"></i></li>
      <li>Home</li>
      <li>About</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>
    </div>
   </nav>
   </>
  )
}

export default Navbar
