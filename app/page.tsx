import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import ToDoList from "./components/ToDoList";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Your ToDo list</h1>
        <AddTask />
        <ToDoList tasks={tasks} />
      </div>
    </main>
  );
}
