import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Employee Tracker
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Track daily updates and manage team productivity effortlessly
        </p>
        
        <div className="space-y-4 mb-12">
          <p className="text-gray-600 dark:text-gray-400">
            Keep your team organized with daily updates, progress tracking, and blocker management.
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link 
            href="/login" 
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-200 shadow-lg"
          >
            Login
          </Link>
          <Link 
            href="/signup" 
            className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold rounded-lg border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition duration-200 shadow-lg"
          >
            Sign Up
          </Link>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Track Progress</h3>
            <p className="text-gray-600 dark:text-gray-400">Monitor daily updates and team productivity</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Manage Updates</h3>
            <p className="text-gray-600 dark:text-gray-400">Easy-to-use interface for creating daily updates</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Identify Blockers</h3>
            <p className="text-gray-600 dark:text-gray-400">Track and resolve team blockers quickly</p>
          </div>
        </div>
      </div>
    </div>
  );
}
  