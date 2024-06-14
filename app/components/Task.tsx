import { ITask } from "@/types/tasks";
import React from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  return (
    <tr key={task.id}>
      <th>
        <input
          type="checkbox"
          className="checkbox checkbox-success checkbox-xs"
        />
      </th>
      <td>{task.text}</td>
      <th></th>
      <th className="text-center">
        <button className="btn btn-ghost btn-xs"><AiTwotoneEdit  className="text-xl hover:text-green/50"/></button>
        <button className="btn btn-ghost btn-xs"><MdDeleteForever  className="text-xl hover:text-red/50"/></button>
      </th>
    </tr>
  );
};

export default Task;
