import { useState } from 'react';
import '../Container/style.css'

import Card from '../Card';

import TextArea from '../textarea';

import { DataContext } from "../../components/context/dataContext";
import { useContext } from 'react';




function ContainerTask(prop) {
    console.log(prop.prop.id)
    

    const [dataState] = useContext(DataContext);
    
    const [newTask, uploadNewTask] = useState(false);
    const [deletetask,uploaddelete] =useState([DataContext]);


    const todo = dataState?.filter(e=> e.status === 'to_do');
    const progress = dataState?.filter(e=> e.status === 'in_progress');
    const done = dataState?.filter(e=> e.status === 'done');
   

    const handleNewTask = e => {
        if(newTask === false){
            uploadNewTask(true)
          
        } else {
            uploadNewTask(false)
           
        }
    }


  
        
    
     const handlerdelete = () =>{
         console.log(deletetask)
         uploaddelete(deletetask.splice(dataState.length,1)
           
         )
         
         console.log(deletetask)

     }
 
    
 

    return (

        <section className='ContTask'>
            
            <div className="headerContTask">

                <div className='numberTaskTodo'>
                <p>{todo.length}</p>
                </div>

                <div className='numberTaskProgress'>
                <p>{progress.length}</p>
                </div>
                <div className='numberTaskdone'>
                <p>{done.length}</p>
                </div>
                   <div className='numberContTask'>
                    <p>{prop?.prop.task.length}</p> 
                    </div>
               
                <p className='titleContTask'>{prop?.prop.name}</p>
                <button className='plusContTask' onClick={handleNewTask}>+</button>
            </div>
            <div className="ContainerTask">
                {
                   newTask ? <div className='task'><TextArea cancel={uploadNewTask} prop={prop.prop.id}></TextArea></div> : <></>
                }
                {
                    prop?.prop.id === 1 ? dataState?.filter(e=> e.status === 'to_do').map((e,i) => <Card handlerOn={handlerdelete} key={i} info={e}></Card> ): <></>
                }
                {
                    prop?.prop.id === 2 ? dataState?.filter(e=> e.status === "in_progress").map((e,i) => <Card key={i} info={e}></Card> ): <></>
                }
                {
                    prop?.prop.id === 3 ? dataState?.filter(e=> e.status === "done").map((e,i) => <Card key={i} info={e}></Card> ): <></>
                }
             

            </div>
        
        </section>

    )
}

export default ContainerTask;
