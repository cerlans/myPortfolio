import React from 'react';

function Projects(props) {
  
return(
  <section className='projects'>
  
  <div className='container'>
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
        <button class="view">View More</button>
      </div>
    </div>
  </div>
  </section>
)
}

export default Projects
