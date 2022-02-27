import react from 'react'
import './style.css'


function Card(props){
 const handlerOn = e =>{
      

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
         <p  className='delete-note' onClick={handlerOn} >🗑️ </p>
           <p className='subtitle-note'>#Created on {props?.info.fecha}</p>
           </div>
        
        </react.Fragment>



    )
    }

    export default Card