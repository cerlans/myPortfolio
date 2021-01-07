import React from 'react';

function Navbar () {
 const [currentClass,setClass] = useState('sidenav');
 function Click(){
   if(currentClass === 'sidenav'){
     setClass('repnav')
        document.body.style.overflow = 'hidden'

   }else {
     setClass('sidenav')
     document.body.style.overflow = 'visible'

   }
 }
  return (
    <>
  <nav className='nav-cont'>
    <div>
    <h1>K.G</h1>
    </div>
      <div className='bars' onClick={Click}>
      <i className="fas fa-bars"></i>
      </div>
   </nav>
   <nav className={currentClass}>
    <div className='items'>
    <ul>
      <span><i className="fas fa-times" onClick={Click}></i></span>
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
