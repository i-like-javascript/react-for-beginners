import { useState } from "react"

const Todo=() => {
    const[toDo,setTodo]=useState("")
    const [toDos,setTodos]=useState([])
    const onChange=(e)=>setTodo(e.target.value)
    const onSubmit=(e)=>{
        e.preventDefault()
        if (toDo==="") return
        
        setTodos(currentArray=>{
            return [toDo, ...currentArray]
        })
        setTodo("")
    }
    
    return (
        <div>
            <h1>My To Dos {toDos.length}</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} type="text" placeholder="Wrote" />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((todo,idx)=>{
                    return <li key={idx}>{todo}</li>
                })}
            </ul>
        </div>
    )

}

export default Todo