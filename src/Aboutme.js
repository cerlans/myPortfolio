import React from 'react';
import data from './skillsData.js';
import Cards from'./cards.js';
console.log(data)
function AboutMe(){
  const map = data.map(function(value){
 return (<Cards  key ={value.id}icon = {value.icon} />)
  }) 
  return(
    <section className='aboutme'>
    <div className= 'first'>
    <h1>About Me</h1>
    <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet
    lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.
    lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.
    </p>
    </div>
     {map}
    </section>
  
  )
}

export default AboutMe;
