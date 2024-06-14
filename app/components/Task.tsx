"use client";

import { ITask } from "@/types/tasks";
import React, { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";
import Modal from "./Modal";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();

  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);

  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);

  const [isChecked, setIsChecked] = useState<boolean>(task.completed);

  const handleCheckboxChange = async () => {
    await editTodo({
      ...task,
      completed: !isChecked,
    });
    setIsChecked(!isChecked);
    router.refresh();
  };

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit.trim(),
      completed: isChecked,
    });
    setOpenModalEdit(false);
    router.refresh();
  };

  const isInputValid = taskToEdit.trim().length > 0;
  const isTextChanged = taskToEdit !== task.text;

  const handleDeletTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDelete(false);
    router.refresh();
  };

  return (
    <tr key={task.id}>
      <th>
        <input
          type="checkbox"
          className="checkbox checkbox-success checkbox-xs"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </th>
      <td className={isChecked ? "line-through" : ""}>{task.text}</td>
      <th></th>
      <th className="flex justify-center">
        <div className="flex gap-3">
          <div
            className={isChecked ? "tooltip" : ""}
            data-tip={isChecked ? "Uncheck the task to edit." : ""}
          >
            <button
              onClick={() => {
                setTaskToEdit(task.text);
                setOpenModalEdit(true);
              }}
              className="btn btn-ghost btn-xs"
              disabled={isChecked}
            >
              <AiTwotoneEdit className="text-xl" />
            </button>
          </div>
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
                <button
                  type="submit"
                  className="btn"
                  disabled={!isInputValid || !isTextChanged}
                >
                  Change
                </button>
              </div>
            </form>
          </Modal>
          <button
            onClick={() => setOpenModalDelete(true)}
            className="btn btn-ghost btn-xs"
          >
            <MdDeleteForever className="text-xl" />
          </button>
          <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-lg text-bold">
                Do you want to delete this task?
              </h3>
              <div className="modal-action">
                <button
                  onClick={() => handleDeletTask(task.id)}
                  className="btn btn-outline btn-error btn-circle"
                >
                  <FaCheck />
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </th>
    </tr>
  );
};

export default Task;
