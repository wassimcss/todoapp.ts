import React, { FC, useState } from "react";

import "./App.css";
import AddTask from "./components/AddTask/AddTask";

import TaskList from "./components/TaskList/TaskList";

interface ITaskList  {
  id:number,
  task:string,
  isDone:boolean
}

const App: FC = () => {
  let table:ITaskList[] = [
    { id: 1, task: "Learn HTML and CSS", isDone: true },
    { id: 2, task: "Learn HTML and CSS", isDone: true },
    { id: 3, task: "Learn HTML and CSS", isDone: true },
  ]
  const [taskList, setTaskList] = useState<ITaskList[]>(table);

  const completeTask = (idTask:any) => {
    setTaskList(taskList.map(todo => todo.id === idTask ? {...todo,isDone:!todo.isDone} : todo))
  }

  const handleDelete = (idTask:number) => {
      setTaskList(taskList.filter(todo => todo.id !== idTask))
  }

  const handleAdd = (newTask:string) => {
    setTaskList([...taskList,{id:Math.random(),isDone:false,task:newTask}])
  }
  return (
    <div className="app">
      <h1>Todo App</h1>
      {" "}
      <AddTask handleAdd={handleAdd} />
      <TaskList taskList={taskList} completeTask={completeTask} handleDelete={handleDelete}/>
    </div>
  );
};

export default App;
