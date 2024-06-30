import { useRef } from "react"

const CreateTodo = ({setTodo}) => {
  const inputStyle = {
    padding:'10px',
    margin:'10px'
  }
  const title = useRef();
  const description = useRef();
  const onSubmit = async() => {
    console.log(title.current.value, description);
    try {
      await fetch("http://localhost:3000/todo",{
        method:'POST',
        body:JSON.stringify({
          title:title.current.value,
          description: description.current.value
        }),
        headers:{
          "Content-type":"application/json"
        }
      },)

      setTodo((val)=>[...val, {title:title.current.value,
          description: description.current.value,completed:false}])
          // console.log
    } catch(e) {
      console.log(e);
    }
  }
  return (
    <div>
      <input style={inputStyle} type='text' placeholder='title' ref={title} /><br/>
      <input style={inputStyle} type='text' placeholder='description' ref={description} /><br />
      <button style={inputStyle} onClick={onSubmit}>Add Todo</button>
    </div>
  )
}

export default CreateTodo