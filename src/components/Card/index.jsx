import react from 'react'
import './style.css'
import { useState } from 'react';


function Card(props){
 const handlerOn = e =>{
  console.log(e.target)
      

  }





  const changeStatus = e => {
    e.preventDefault()
    console.log(e.target)
  
  }


    return(
        <react.Fragment>
       
            <div className='container-note'>
          <h3 className='title-note'> {props?.info.title}</h3>
          <button className={props?.info.status} onClick={changeStatus}></button>
          <button onClick={handlerOn} className='delete-note'>🗑️</button>
           <p className='subtitle-note'>#{props?.info.fecha}</p>
           </div>
        
        </react.Fragment>



    )
    }

    export default Card