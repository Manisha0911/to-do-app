import { ITask } from "@/types/tasks"
import React from "react"
import Task from "./Task"

interface ToDoProps {
  tasks: ITask[]
}

const ToDo: React.FC<ToDoProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task =>(
            <Task key={task.id} task={task} />
            ) 
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ToDo