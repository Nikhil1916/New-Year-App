import { useRef } from "react"

const CreateTodo = ({setTodo}) => {
  const inputStyle = {
    padding:'10px',
    margin:'10px'
  }
  const title = useRef();
  const description = useRef();
  const onSubmit = async() => {
    // console.log(title.current.value, description);
    if(!title.current.value) {
      alert("title is mandatory");
      return;
    }
    try {
     const res =  await fetch("http://localhost:3000/todo",{
        method:'POST',
        body:JSON.stringify({
          title:title.current.value,
          description: description.current.value
        }),
        headers:{
          "Content-type":"application/json"
        }
      },(d) =>{
        console.log(d);
      })
      const data = await res.json();
      setTodo((val)=>[...val, data.todo])
          // console.log
    } catch(e) {
      console.log(e);
    }
  }
  return (
    <div>
      <input style={inputStyle} type='text' placeholder='title' ref={title} required /><br/>
      <input style={inputStyle} type='text' placeholder='description' ref={description} required /><br />
      <button style={inputStyle} onClick={onSubmit}>Add Todo</button>
    </div>
  )
}

export default CreateTodo