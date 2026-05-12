"use client";

import { useState } from "react";
import { apiRequest } from "@/lib/api";
import { toast } from "sonner";

// Hardcode your projects here
const PROJECTS = [
  { _id: "684039f6b4351f7cf9163a84", name: "Project Alpha" },
  { _id: "684039f6b4351f7cf9163a85", name: "Project Beta" },
  { _id: "684039f6b4351f7cf9163a86", name: "Project Gamma" },
];

export default function CreateUpdatePage() {
  const [form, setForm] = useState({
    projectId: "",
    yesterday: "",
    today: "",
    blockers: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.projectId) {
      toast.error("Please select a project");
      return;
    }

    try {
      const res = await apiRequest("/update", "POST", form);

      if (!res || res.message !== "Update created successfully") {
        throw new Error(res?.message || "Unknown error");
      }

      toast.success("Update created successfully!");
      setForm({ projectId: "", yesterday: "", today: "", blockers: "" });
    } catch (err: any) {
      console.error("Error:", err);
      toast.error(err.message || "Failed to create update");
    }
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Create Daily Update</h1>
          <p className="text-gray-600 dark:text-gray-400">Share your progress and blockers with the team</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Project
              </label>
              <select
                name="projectId"
                value={form.projectId}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition"
                required
              >
                <option value="">-- Select a Project --</option>
                {PROJECTS.map((p) => (
                  <option key={p._id} value={p._id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                What did you do yesterday?
              </label>
              <textarea
                name="yesterday"
                placeholder="Describe your work from yesterday..."
                value={form.yesterday}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition resize-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                What are you doing today?
              </label>
              <textarea
                name="today"
                placeholder="Describe your work for today..."
                value={form.today}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition resize-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Any blockers?
              </label>
              <textarea
                name="blockers"
                placeholder="Mention any blockers or challenges..."
                value={form.blockers}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition resize-none"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
            >
              Submit Update
            </button>
          </form>
        </div>
      </div>
    </div>
    </>

  );
}