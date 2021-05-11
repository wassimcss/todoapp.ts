import React from "react";
import TaskItem from "../TaskItem/TaskItem";

interface ITable {
  id: number;
  task: string;
  isDone: boolean;
}
interface ITaskList {
  taskList: ITable[];
  completeTask: (idTask: number) => void;
  handleDelete: (idTask: number) => void;
}

const TaskList = ({ taskList, completeTask,handleDelete }: ITaskList) => {
  return (
    <div>
      {taskList.map((todo) => (
        <TaskItem
          todo={todo}
          key={todo.id}
          completeTask={completeTask}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
