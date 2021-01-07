import React from 'react';
import projectData from './projectdata.js'
console.log(projectData)
function Projects(props) {
return(
 <section className='projects'>
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
        <button className="modal-btn" onClick = {test}>View More</button>
      </div>
    </div>

{/* Below this line is a modal that will appear when the 'view more' button is clicked */}
  <div className="modal">
     <div className="modal-content">
        <div className="modal-header">
           <span className="close-btn">&times;</span>
           <h1>{props.title}</h1>
        </div>
        <div className ='modal-inner'>
           <img src = {props.image}/>
           <p>{props.description}</p>
           <h3>Tech Stacks</h3>
           <ul>
              <li>
                 React
              </li>
              <li>
                 React
              </li>
              <li>
                 React
              </li>
              <li>
                 React
              </li>
           </ul>
        </div>
        <div className="modal-footer">
           <button>Live Demo</button>
        </div>
     </div>
  </div>
  </section>
)
}

export default Projects
