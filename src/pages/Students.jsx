import { useState, useEffect } from "react";
import API from "../services/api";

function Students() {

  const [students, setStudents] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2023-24");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {

    const fetchStudents = async () => {
      try {

        const res = await API.get(`/students?year=${selectedYear}`);
        setStudents(res.data || []);

      } catch (err) {
        console.error("Error fetching student data");
      }
    };

    fetchStudents();

  }, [selectedYear]);

  const filteredStudents = students.filter((s) =>
    s.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.rollNo?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <div className="min-h-screen bg-black text-zinc-300 p-6">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">

        <div>
          <h1 className="text-3xl font-bold text-white">Student Directory</h1>
          <p className="text-zinc-500 text-sm">Academic Year: {selectedYear}</p>
        </div>

        <div className="flex gap-3">

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="bg-zinc-900 border border-zinc-700 text-white rounded-lg px-4 py-2 outline-none"
          >
            <option value="2024-25">2024-25</option>
            <option value="2023-24">2023-24</option>
            <option value="2022-23">2022-23</option>
          </select>

          <button className="bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-zinc-200">
            + Add Student
          </button>

        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">

        <div className="p-4 border-b border-zinc-800">

          <input
            type="text"
            placeholder="Search by name or roll number..."
            className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-2 focus:outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

        </div>

        <div className="overflow-x-auto">

          <table className="w-full text-left text-sm">

            <thead className="bg-zinc-800/50 text-zinc-400 uppercase text-[10px]">

              <tr>
                <th className="px-6 py-4">Student</th>
                <th className="px-6 py-4">Parent</th>
                <th className="px-6 py-4">Grade</th>
                <th className="px-6 py-4">Attendance</th>
                <th className="px-6 py-4">Fee Status</th>
              </tr>

            </thead>

            <tbody className="divide-y divide-zinc-800">

              {filteredStudents.length > 0 ? (

                filteredStudents.map((student) => (

                  <tr key={student._id} className="hover:bg-zinc-800/30">

                    <td className="px-6 py-4">
                      <div className="font-bold text-white">{student.name}</div>
                      <div className="text-zinc-500 text-xs">{student.rollNo}</div>
                    </td>

                    <td className="px-6 py-4">
                      <div>{student.parentName || "N/A"}</div>
                      <div className="text-zinc-500 text-xs">{student.parentContact}</div>
                    </td>

                    <td className="px-6 py-4">Grade {student.grade}</td>

                    <td className="px-6 py-4 text-green-500">
                      {student.attendance || 0}%
                    </td>

                    <td className="px-6 py-4">

                      <span className={`px-2 py-1 rounded-full text-xs ${
                        student.feePaid ? "bg-green-900/20 text-green-500" : "bg-red-900/20 text-red-500"
                      }`}>

                        {student.feePaid ? "Paid" : "Pending"}

                      </span>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td colSpan="5" className="text-center py-10 text-zinc-500">
                    No students found
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>
    </div>

  );

}

export default Students;