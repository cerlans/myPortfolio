import React from 'react';

function Footer(){
  return(
    <>
    <div className='fcontainer'>
   <div className='text'>
      <h1>If not now? when? lets work together!</h1>
      <p>Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra.</p>
   </div>
   <form className='form'>
      <input type='text' placeholder='First Name'/>
      <input type='text' placeholder='Last Name'/>
      <input type='text' placeholder='Email Address'/>
      <textarea form='contact'></textarea>
      <button>Send Message</button>
   </form>
   <div className='ending'>
   
   </div>
</div>
<footer className='yo'>
  <div className='inner'>
    <h1>
hireme@portfolio.com
    </h1>
    <p>221B Baker Street, Post office Box 353</p>
    <p>Park Road, USA - 215431</p>
  </div>  
  <div className='social'>
  <i class="fab fa-github"></i>
  <p>Designed and built by Kevin.G</p>
  </div>
</footer>
    </>
  )
}

export default Footer
