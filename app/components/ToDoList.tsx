import { ITask } from "@/types/tasks";
import React from "react";
import Task from "./Task";

interface ToDoListProps {
  tasks: ITask[];
}

const ToDoList: React.FC<ToDoListProps> = ({ tasks }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full'>
      <thead>
          <tr>
            <th></th>
            <th>Tasks</th>
            <th></th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
