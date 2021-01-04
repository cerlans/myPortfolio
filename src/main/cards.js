import React from "react";

function Cards(props){
return (
   <div className = 'container'>
   <div className ='row'>
    <div className='hvr-fade'>
    <img src={props.icon} />  
    </div>
    </div>
       <div className ='row'>
    <div className='hvr-fade'>
    <img src={props.icon} />  
    </div>
    </div>  
    </div>
    )
}

export default Cards 
