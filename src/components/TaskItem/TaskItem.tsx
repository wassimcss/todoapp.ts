import React from 'react'
import "./TaskItem.css"


interface ITodo {
    id:number,
    task:string,
    isDone:boolean
}
interface IProps{
    todo:ITodo,
    completeTask:(idTask:number) => void;
    handleDelete:(idTask:number) => void;
    
}


const TaskItem = ({todo,completeTask,handleDelete}:IProps) => {
    return (
        <div className="task">
            <p className={todo.isDone ? "done" : "not"}>{todo.task}</p>
            <div>
                <button onClick={() => completeTask(todo.id)}>{todo.isDone ? "Undo" : "Complete" }</button>
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
        </div>
    )
}

export default TaskItem
