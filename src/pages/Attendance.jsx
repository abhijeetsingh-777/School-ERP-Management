import { useState,useEffect } from "react";
import API from "../services/api";

function Attendance() {

  const [view, setView] = useState("Students"); 
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedYear, setSelectedYear] = useState("2023-24");
  const [attendance,setAttendance] = useState([])

  
  const [records, setRecords] = useState([]);

  const presentCount = records.filter(r => r.status === "Present").length;
  const absentCount = records.filter(r => r.status === "Absent").length;
  const leaveCount = records.filter(r => r.status === "Leave").length;

  const submitAttendance = async () => {
    try {

      await API.post("/attendance", {
        date: selectedDate,
        records
      });

      alert("Attendance saved successfully");

    } catch (err) {
      console.log(err);
      alert("Error saving attendance");
    }
  };

  const toggleStatus = (id) => {
    setRecords(prev =>
      prev.map(r =>
        r.id === id
          ? { ...r, status: r.status === "Present" ? "Absent" : "Present" }
          : r
      )
    );
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {

      const res = await API.get("/students");

      const formatted = res.data.map((s) => ({
        id: s._id,
        name: s.name,
        rollNo: s.rollNumber,
        status: "Present",
        type: "Student"
      }));

      setRecords(formatted);

    } catch (err) {
      console.log(err);
    }
  };

  return (

    <div className="min-h-screen bg-black text-zinc-300 p-6">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Attendance Registry</h1>
          <p className="text-zinc-500 text-sm">Manage daily presence for {view}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <input 
            type="date" 
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-white outline-none focus:ring-1 focus:ring-zinc-600"
          />
          <select 
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-white outline-none"
          >
            <option>2023-24</option>
            <option>2024-25</option>
          </select>
          <div className="flex bg-zinc-900 rounded-lg p-1 border border-zinc-800">
            <button 
              onClick={() => setView("Students")}
              className={`px-4 py-1 rounded-md text-sm transition ${view === "Students" ? "bg-zinc-700 text-white" : "text-zinc-500"}`}
            >Students</button>
            <button 
              onClick={() => setView("Staff")}
              className={`px-4 py-1 rounded-md text-sm transition ${view === "Staff" ? "bg-zinc-700 text-white" : "text-zinc-500"}`}
            >Staff</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl">
          <span className="text-zinc-500 text-xs block uppercase">Present</span>
          <span className="text-2xl font-bold text-green-500">{presentCount}</span>
        </div>
        <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl">
          <span className="text-zinc-500 text-xs block uppercase">Absent</span>
          <span className="text-2xl font-bold text-red-500">{absentCount}</span>
        </div>
        <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-xl">
          <span className="text-zinc-500 text-xs block uppercase">On Leave</span>
          <span className="text-2xl font-bold text-yellow-500">{leaveCount}</span>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-zinc-800/50 text-zinc-500 text-[11px] uppercase tracking-widest">
            <tr>
              <th className="px-6 py-4">ID / Roll No</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4 text-center">Status</th>
              <th className="px-6 py-4 text-right">Quick Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {records.map((person) => (
              <tr key={person.id} className="hover:bg-zinc-800/20">
                <td className="px-6 py-4 font-mono text-xs">{person.rollNo}</td>
                <td className="px-6 py-4 text-white font-medium">{person.name}</td>
                <td className="px-6 py-4 text-center">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                    person.status === "Present" ? "bg-green-900/20 text-green-400" : 
                    person.status === "Leave" ? "bg-yellow-900/20 text-yellow-400" : "bg-red-900/20 text-red-400"
                  }`}>
                    {person.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  {person.status !== "Leave" ? (
                    <button 
                      onClick={() => toggleStatus(person.id)}
                      className="text-xs bg-zinc-800 hover:bg-white hover:text-black px-3 py-1.5 rounded transition"
                    >
                      Mark {person.status === "Present" ? "Absent" : "Present"}
                    </button>
                  ) : (
                    <span className="text-xs text-zinc-600 italic">Leave Approved</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex justify-end">
        <button 
          onClick={submitAttendance}
          className="bg-white text-black font-bold px-10 py-3 rounded-lg hover:bg-zinc-200 transition-all shadow-lg shadow-white/5"
        >
          Submit Attendance
        </button>
      </div>

    </div>
  );
}

export default Attendance;