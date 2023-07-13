import { getAllTodos } from "@/api";
import CURD from "./components/CURD";
import ToDo from "./components/ToDo";


export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);

  return (
    <main className='max-w-4xl mx-auto mt-4'>
      <div className="text-center my-5 flex-col gap-4">
        <h1 className="text-2xl font-bold"> Task Mangement </h1>
        <CURD />
      </div>
      <ToDo tasks = {tasks} />
    </main>
  )
}
