"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "./store/store";
import { fetchTasks, deleteTask } from "./store/taskSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { tasks, loading, error } = useAppSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="p-6">
      <button
        onClick={() => router.push("/tasks/new")}
        className="bg-blue-500 text-white p-2 rounded"
      >
        New Task
      </button>
      <br />
      <h1 className="text-2xl font-bold">Tasks</h1>
      {loading && <p>Loading tasks...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task._id} className="flex justify-between border-b p-2">
            <span
              onClick={() => router.push(`/tasks/${task._id}`)}
              className="cursor-pointer"
            >
              {task.title} - {task.status}
            </span>
            <button
              onClick={() => dispatch(deleteTask(task._id))}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
