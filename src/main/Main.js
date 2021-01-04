import React from 'react';
import Aboutme from './Aboutme.js'
import Projects from './Projects.js'
import projectData from './projectdata.js';
function Main (){
const projects = projectData.map(function(value){
return (
  <Projects 
  key ={value.id} 
  image={value.image} 
  title={value.title} 
  description={value.description}/>
)
})
  return(
    <>
    <Aboutme />
    {projects}
    </>
  )
}


export default Main
