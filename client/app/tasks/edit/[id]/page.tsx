"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/app/store/store";
import { updateTask } from "@/app/store/taskSlice";
import { useParams, useRouter } from "next/navigation";

export default function EditTaskForm() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const prevTask = useAppSelector((state) =>
    state.tasks.tasks.find((t) => t._id === id)
  );
  const [task, setTask] = useState(
    prevTask ?? { _id: "", title: "", description: "", status: "pending" }
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.title.trim() || !task.description.trim()) {
      alert("Title and description are required.");
      return;
    }

    try {
      await dispatch(updateTask({ id: task._id, updatedTask: task })).unwrap();
      alert("Task updated successfully!");
    } catch (error) {
      alert("Failed to update task. Please try again.");
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="p-6">
      <button
        onClick={() => router.push(`/`)}
        className="bg-yellow-500 text-white p-2 rounded"
      >
        Home
      </button>
      <br />
      <h1 className="text-2xl font-semibold text-gray-800">Edit Task</h1>
      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={task.title}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-gray-700 font-medium">
            Status
          </label>
          <select
            id="status"
            name="status"
            value={task.status}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
