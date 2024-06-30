import { useState } from "react";

const Todos = ({todos}) => {
    const [render,setRender]=useState([]);
    const markCompleted = async(todo) => {
        try {
            await fetch("http://localhost:3000/completed",{
              method:'PUT',
              body:JSON.stringify({
                id:todo?._id
              }),
              headers:{
                "Content-type":"application/json"
              }
            });
            todo['completed'] = true;
            setRender(Math.random());
          } catch(e) {
            console.log(e);
          }
    }

    return (
        <div style={{margin:'10px'}}>
            {
                todos?.map((todo,i)=>{
                  return (
                    <div key={todo?._id ?? i}>
                        <h1 style={{'marginBottom':'4px'}}>{i + ". " + todo?.title}</h1>
                        <p style={{'marginTop':'0px',marginLeft:'2rem'}}>{todo?.description}</p>
                        {!todo?.completed && <button style={{'marginTop':'0px',marginLeft:'2rem'}} onClick={()=>markCompleted(todo)}>Mark Completed!</button>}
                    </div>
                  )  
                })
            }
        </div>
       
    )
}

export default Todos