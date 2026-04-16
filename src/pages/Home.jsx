import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col font-sans">

      <nav className="bg-zinc-900 border-b border-zinc-800 w-full h-[70px] text-white sticky top-0 z-50 flex justify-between items-center px-8 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-black font-black">H</div>
          <h1 className="font-bold text-xl tracking-tight hidden md:block">
            Hogwarts <span className="text-yellow-500">SMS</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-6 font-medium text-sm">
          <span className="hover:text-yellow-500 cursor-pointer transition-colors">About</span>
          <span className="hover:text-yellow-500 cursor-pointer transition-colors">Contact</span>
          <Link to="/login" className="bg-zinc-800 hover:bg-zinc-700 px-5 py-2 rounded-full transition-all">
            Login
          </Link>
          <Link to="/Register" className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-full font-bold transition-all">
            Register
          </Link>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
    
        <aside className="hidden lg:flex flex-col w-[280px] bg-zinc-950 border-r border-zinc-900 overflow-y-auto p-4 space-y-2">
          <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest px-4 mb-2 mt-4">Profile Portals</div>
          
          {[
            { name: "Admin", icon: "🛠️", color: "text-yellow-500", path: "#" },
            { name: "Student", icon: "👤", color: "text-white", path: "/students" },
            { name: "Teacher", icon: "👤", color: "text-yellow-500", path: "/teachers" },
            { name: "Parent", icon: "👥", color: "text-white", path: "#" },
            { name: "Principal", icon: "👤", color: "text-yellow-500", path: "#" },
            { name: "Vice-Principal", icon: "👤", color: "text-white", path: "#" },
            { name: "Librarian", icon: "📚", color: "text-yellow-500", path: "#" },
            { name: "Accountant", icon: "💳", color: "text-white", path: "#" },
            { name: "Transport", icon: "🚌", color: "text-yellow-500", path: "#" },
            { name: "Exam-Cell", icon: "📃", color: "text-white", path: "#" },
          ].map((item, idx) => (
            <Link 
              key={idx}
              to={item.path} 
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-zinc-900 group ${item.color}`}
            >
              <span className="text-lg group-hover:scale-125 transition-transform">{item.icon}</span>
              <span className="font-semibold text-sm">{item.name}</span>
            </Link>
          ))}
        </aside>

        
        <main className="flex-1 overflow-y-auto bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black p-8">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center py-10">
            <h1 className="text-6xl font-black text-white mb-6">
              Hogwarts <span className="text-yellow-500">School</span>
            </h1>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-900 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src="src/assets/image.png" 
                alt="School Logo" 
                className="relative h-[220px] object-contain rounded-lg shadow-2xl bg-black border border-zinc-800"
              />
            </div>

            <div className="mt-10 space-y-4">
              <p className="text-2xl font-light text-zinc-300 italic">
                "Because even magic needs a spreadsheet"
              </p>
              <p className="text-zinc-500 max-w-2xl leading-relaxed">
                A unified platform for the next generation of wizardry management. 
                Track attendance, manage house points, and streamline academic records 
                with the flick of a wand (and a few clicks).
              </p>
            </div>

        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 w-full text-left">
              {[
                { title: "Admission Panel", desc: "Manage enrollment & queries.", path: "#" },
                { title: "Staff Module", desc: "Teacher & class allocation.", path: "/teachers" },
                { title: "Attendance", desc: "Real-time presence tracking.", path: "/attendance" },
                { title: "Examination", desc: "Structure and flow management.", path: "#" },
              ].map((feature, i) => (
                <Link 
                  to={feature.path} 
                  key={i} 
                  className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-yellow-500/50 transition-all group"
                >
                  <h3 className="text-yellow-500 font-bold mb-1 group-hover:text-yellow-400">{feature.title}</h3>
                  <p className="text-zinc-500 text-sm">{feature.desc}</p>
                </Link>
              ))}
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default Home;