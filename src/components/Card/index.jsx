import react from 'react'
import './style.css'
import { useState } from 'react';
import { DataContext } from "../../components/context/dataContext";
import { useContext } from 'react';


function Card(props) {

  const { dataState, uploadDataState } = useContext(DataContext);
  const [deletetask, uploaddelete] = useState([DataContext]);

  const handlerdelete = (e) => {
      // dataState.splice(dataState.lenght, 1);
      // uploadDataState([...dataState]);
      uploaddelete(deletetask.splice(deletetask.length,1));
      uploadDataState([...dataState])
      console.log(deletetask)  
}


  const changeStatus = e => {
      e.preventDefault()
      console.log(e.target)

    }


    return (
      <react.Fragment>

        <div className='container-note'>
          <h3 className='title-note'> {props?.info.title}</h3>
          <button className={props?.info.status} onClick={changeStatus}></button>
          <button onClick={handlerdelete} className='delete-note'>🗑️</button>
          <p className='subtitle-note'>#{props?.info.fecha}</p>
        </div>

      </react.Fragment>



    )
  }

  export default Card