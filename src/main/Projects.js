import React, { useState } from 'react';

import projectData from './projectdata.js'
console.log(projectData)
function Projects(props) {
    const [className, setClass] = useState('dummy');
    
   function popUpModal(){
    setClass('modal');
    document.body.style.overflow = 'hidden'
     
  } 
  function test(){
    setClass('dummy');
    document.body.style.overflow ='visible';
  }
 
return(
   <>
    <div className='col'>
      <div className='imgcontainer'>
      <img src={props.image}/>
      </div>
      <div className='content'>
      <h2>{props.title}</h2>
       <p>{props.description}</p>
      </div>
      <div className='footer'>
        <button>Live Demo</button>
        <button className="modal-btn" onClick = {popUpModal}>View More</button>
      </div>
    </div>

{/* Below this line is a modal that will appear when the 'view more' button is clicked */}
  <div className= {className} onClick = {test}>
     <div className="modal-content">
        <div className="modal-header">
           <h1>{props.title}</h1>
        </div>
        <div className ='modal-inner'>
           <img src = {props.image}/>
           <p>{props.description}</p>
        </div>
        <div className="modal-footer">
           <button>Live Demo</button>
           <button>Source Code</button>
        </div>
     </div>
  </div>
</>
)
}

export default Projects
