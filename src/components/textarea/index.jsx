
import { useState } from 'react';
import React from 'react';



import './style.css';
import { useContext, useState } from 'react';
import { DataContext } from '../context/dataContext';


function TextArea(prop) {

  const [dataState, uploadDataState] = useContext(DataContext);

  // console.log(dataState)
  
  let [clas, upldateClas] = useState('to_do')

  const handlerAddTask = e => {
    e.preventDefault()
   
    
    let date = new Date();
    
    
    

    const newTask = {
      title: e.target.text.value,
      fecha: 'Created  on ' + date.toLocaleDateString()
    }
    console.log(prop.prop)
    if(prop.prop === 1){

      const newTask = {
        title: e.target.text.value,
        fecha: 'Created  on ' + date.toLocaleDateString(),
        status: clas,
        changestatus: upldateClas
      }

      dataState.push(newTask);
      uploadDataState(dataState)   // aqui actualiza la parte 1 //
      prop.cancel(false)
    } else if(prop.prop === 2){
      const newTask1 = {
        title: e.target.text.value,
        fecha: 'Created  on ' + date.toLocaleDateString(),
        status: 'in_progress'
      }
      dataState.push(newTask1);
      uploadDataState(dataState);
      prop.cancel(false)
    } else if(prop.prop === 3){
      const newTask2 = {
        title: e.target.text.value,
        fecha: 'Created  on ' + date.toLocaleDateString(),
        status: 'done'
      }
      dataState.push(newTask2);
      uploadDataState(dataState);
      prop.cancel(false)
    }
  
  }

  
  const handlerCancelTask = e => {
    e.preventDefault()
    prop.cancel(false)
    console.log(prop.cancel)
  
  }



    return (

      <React.Fragment>
        <div className="ContTextarea">

          <textarea name="textValue" className='textareainput' rows="10" cols="50"></textarea>

  return (
    <form onSubmit={handlerAddTask}className="ContTextarea">

      <input name="text" className='textareainput' rows="10" cols="50"></input>

      <div className="buttoncontainer">
        <button className='buttonadd'type="submit" >Add</button>
        <button className='buttoncancel'onClick={handlerCancelTask}>Cancel</button>

      </div>
    </form>
  );
}


          <div className="buttoncontainer">
            <button className='buttonadd'>Add</button>
            <button className='buttoncancel' >Cancel</button>

          </div>
        </div >
        </React.Fragment>
        )
        }
        


          export default TextArea