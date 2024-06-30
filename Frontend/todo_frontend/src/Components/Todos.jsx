const Todos = ({todos}) => {
    return (
        <div style={{margin:'10px'}}>
            {
                todos?.map((todo,i)=>{
                  return (
                    <div key={todo?._id ?? i}>
                        <h1 style={{'marginBottom':'4px'}}>{i + ". " + todo?.title}</h1>
                        <p style={{'marginTop':'0px',marginLeft:'2rem'}}>{todo?.description}</p>
                        <button style={{'marginTop':'0px',marginLeft:'2rem'}}>Completed</button>
                    </div>
                  )  
                })
            }
        </div>
       
    )
}

export default Todos