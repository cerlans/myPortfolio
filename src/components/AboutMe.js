import React from 'react'
import Cards from './Cards.js'
import data from './data.js'
function AboutMe(){
  const map = data.map(function(value){
 return (<Cards  icon = {value.icon} />)
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

export default AboutMe
