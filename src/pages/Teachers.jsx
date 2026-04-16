import { useState } from "react";
import API from "../services/api";

function Teacher() {
  const [activeTab, setActiveTab] = useState("directory");
  const [loading, setLoading] = useState(false);

  // Example data structure for Multi-level Leave Approval
  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 1,
      name: "Sarah Jenkins",
      subject: "Mathematics",
      dates: "Oct 12 - Oct 14",
      coordinatorStatus: "Approved",
      adminStatus: "Pending",
      type: "Sick Leave"
    }
  ]);

  return (
    <div className="min-h-screen bg-black text-zinc-300 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Staff Management</h1>
        <p className="text-zinc-500 text-sm">Profile, Attendance, and Payroll Support</p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-6 border-b border-zinc-800 mb-8">
        {["directory", "leaves", "payroll"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-sm font-medium capitalize transition-colors ${
              activeTab === tab ? "text-white border-b-2 border-white" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Directory Tab */}
      {activeTab === "directory" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add Staff Card */}
          <div className="border-2 border-dashed border-zinc-800 rounded-xl flex flex-col items-center justify-center p-8 hover:border-zinc-600 transition-colors cursor-pointer group">
            <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition-all">
              <span className="text-2xl">+</span>
            </div>
            <p className="text-white font-semibold">Create Staff Profile</p>
            <p className="text-zinc-500 text-xs text-center mt-2">Assign roles, subjects, and basic info</p>
          </div>

          {/* Example Teacher Profile Card */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-white font-bold">SJ</div>
              <span className="bg-zinc-800 text-zinc-400 text-[10px] px-2 py-1 rounded uppercase">Full-Time</span>
            </div>
            <h3 className="text-white font-bold text-lg">Sarah Jenkins</h3>
            <p className="text-zinc-500 text-sm mb-4">Lead Teacher • Mathematics</p>
            <div className="space-y-2 border-t border-zinc-800 pt-4">
              <div className="flex justify-between text-xs">
                <span>Attendance (Month)</span>
                <span className="text-green-500 text-right">98%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span>Subjects</span>
                <span className="text-zinc-400 text-right">Algebra, Calculus</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Leave Management Tab (Multi-level) */}
      {activeTab === "leaves" && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-800 text-zinc-400 text-xs uppercase">
              <tr>
                <th className="px-6 py-4">Teacher</th>
                <th className="px-6 py-4">Reason</th>
                <th className="px-6 py-4 text-center">Coordinator Approval</th>
                <th className="px-6 py-4 text-center">Admin Approval</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {leaveRequests.map((req) => (
                <tr key={req.id} className="text-white">
                  <td className="px-6 py-4">
                    <div className="font-semibold">{req.name}</div>
                    <div className="text-zinc-500 text-xs">{req.dates}</div>
                  </td>
                  <td className="px-6 py-4 text-zinc-400">{req.type}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                    {req.coordinatorStatus}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
                    {req.adminStatus}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="bg-white text-black text-xs font-bold px-3 py-1 rounded hover:bg-zinc-200">Review</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "payroll" && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
          <div className="max-w-md mx-auto">
            <h3 className="text-white font-bold text-xl mb-2">Payroll Data Support</h3>
            <p className="text-zinc-500 text-sm mb-6">
              Monthly salary calculations based on attendance, approved leaves, and role bonuses.
            </p>
            <button className="bg-zinc-800 border border-zinc-700 text-white px-6 py-2 rounded-lg hover:bg-zinc-700 transition">
              Export Monthly Payroll CSV
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Teacher;