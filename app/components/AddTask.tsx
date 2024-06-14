"use client";

import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "@/api";
import Modal from "./Modal";
import { FaPlus } from "react-icons/fa6";

const AddTask = () => {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [newTaskValue, setNewTaskValue] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
    });
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-accent w-full"
      >
        ADD NEW TASK <FaPlus />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="text-bold text-lg">Add new task</h3>
          <div className="modal-action">
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-full"
            />
            <button type="submit" className="btn">
              Add
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
