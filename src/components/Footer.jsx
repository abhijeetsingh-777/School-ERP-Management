function Footer() {
  return (
    <footer className="bg-[#16213e] text-gray-300 mt-10">

      <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8">

        {/* Project Info */}
        <div>
          <h2 className="text-lg font-semibold text-yellow-400">
            School Management System
          </h2>
          <p className="text-sm mt-2">
            A simple platform to manage students, teachers and attendance
            efficiently.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-yellow-400">
            Quick Links
          </h2>

          <ul className="mt-2 space-y-1 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">About</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
            <li className="hover:text-yellow-400 cursor-pointer">Login</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-yellow-400">
            Contact
          </h2>

          <p className="text-sm mt-2">Email: school@example.com</p>
          <p className="text-sm">Phone: +91 9876543210</p>
          <p className="text-sm">Address: Lucknow, India</p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm border-t border-gray-600 py-3">
        © 2026 School Management System. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;