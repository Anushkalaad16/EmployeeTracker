"use client";

import { useState, useEffect } from "react";
import { apiRequest } from "@/lib/api";

export default function DashboardPage() {
    const [updates,setUpdates] = useState([]);

    useEffect(()=>{
        const fetchUpdates = async ()=>{
            const data = await apiRequest("/update","GET");
             console.log("API DATA", data); 
            setUpdates(data.updates || []);
        }
        fetchUpdates();
    },[]);

   return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">View all team updates and progress</p>
        </div>

        {updates.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-600 dark:text-gray-400">No updates yet</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {updates.map((u: any) => (
              <div 
                key={u._id} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition p-6 border-l-4 border-blue-500"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      {u.userId?.name || "Unknown User"}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {u.createdAt ? new Date(u.createdAt).toLocaleDateString() : "No date"}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                      Yesterday
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-gray-700 rounded p-3">
                      {u.yesterday || "N/A"}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                      Today
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 bg-green-50 dark:bg-gray-700 rounded p-3">
                      {u.today || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}