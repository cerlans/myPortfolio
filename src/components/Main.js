import React from 'react'
import AboutMe from './AboutMe.js'
import projectData from './data.js'
import Projects from './Projects.js'


function Main(){
 const pro = projectData.map(function(value){
   return (
     <Projects key = {value.id} image = {value.image} title={value.title} desc={value.description}/>
   )
 })
return(
  <>
  <AboutMe />
  {pro}
  </>
)
}



export default Main
