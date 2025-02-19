"use client";
import { useParams, useRouter } from "next/navigation";
import { useAppSelector } from "@/app/store/store";

export default function TaskDetail() {
    const { id } = useParams();
  const task = useAppSelector((state) =>
      state.tasks.tasks.find((t) => t._id === id)
    );
    const router = useRouter();
    if (!task) return <p>Task not found</p>;
    return (
      <div className="p-6">
        <button
          onClick={() => router.push(`/`)}
          className="bg-yellow-500 text-white p-2 rounded"
        >
          Home
        </button>
        <br />
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <p>{task.description}</p>
        <p>Status: {task.status}</p>
        <button
          onClick={() => router.push(`/tasks/edit/${task._id}`)}
          className="bg-yellow-500 text-white p-2 rounded"
        >
          Edit
        </button>
      </div>
    );
}
