"use client";

import { ITask } from "@/types/tasks";
import React, { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { editTodo } from "@/api";
import Modal from "./Modal";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();

  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);

  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
    });
    setOpenModalEdit(false);
    router.refresh();
  };
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
        <button
          onClick={() => {
            setTaskToEdit(task.text);
            setOpenModalEdit(true);
          }}
          className="btn btn-ghost btn-xs"
        >
          <AiTwotoneEdit className="text-xl hover:text-green/50" />
        </button>
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="text-bold text-lg">Edit task</h3>
            <div className="modal-action">
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-full font-normal"
              />
              <button type="submit" className="btn">
                Change
              </button>
            </div>
          </form>
        </Modal>
        <button className="btn btn-ghost btn-xs">
          <MdDeleteForever className="text-xl hover:text-red/50" />
        </button>
      </th>
    </tr>
  );
};

export default Task;
