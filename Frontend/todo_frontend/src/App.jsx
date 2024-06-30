import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTodo from './Components/CreateTodo';
import Todos from './Components/Todos';

function App() {
  const [todo,setTodo] = useState([]);
  useEffect(()=>{
   const fetchTodos = async() => {
    fetch("http://localhost:3000/todos").then((res)=>{
      res.json().then((data)=>{
        console.log(data);
        setTodo(data?.todo);
      })
    })
   }
   fetchTodos()
  },[])
  return (
    <>
      <CreateTodo setTodo={setTodo} />
      <Todos todos={todo} />
    </>
  );
}

export default App
