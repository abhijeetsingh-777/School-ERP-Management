

# 🏰 Hogwarts School Management System
> "Because even magic needs a spreadsheet."

A comprehensive **MERN Stack** application designed to manage school operations, including student profiles, teacher assignments, attendance tracking, and multi-level leave approvals.

---

## ⚡ Features

### 👤 User Portals
- **Admin:** Full control over staff and student records.
- **Teacher:** Manage class attendance and submit leave requests.
- **Student:** View academic year-wise data and profiles.

### 🛠️ Functional Modules
- **Attendance Registry:** Daily presence tracking for both students and staff.
- **Leave Management:** Multi-level approval workflow (Coordinator -> Admin).
- **Academic Archive:** Historical data preservation with year-wise storage.
- **Parent Mapping:** Seamless linkage between student and parent profiles.

---

## 🚀 Tech Stack

- **Frontend:** React.js, Tailwind CSS, React Router, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Security:** JWT Authentication, Bcrypt.js (Password Hashing)

---
📂 Project Structure

├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI (Nav, Footer)
│   │   ├── pages/         # Home, Login, Register, Students...
│   │   └── services/      # Axios API configuration
├── backend/
│   ├── controllers/       # Auth and Data logic
│   ├── models/            # MongoDB Schemas (User, Student, Leave)
│   ├── routes/            # Express API endpoints
│   └── server.js          # Entry point


## 🛠️ Installation & Setup

### 1. Clone the repository
### 2.Backend Setup
--- Bash
      cd backend
      npm install
👉Create a .env file in the backend folder:
---Start the backend server:
       npm run dev
### 3.Frontend Setup
       cd ../frontend
       npm install



Developed with ❤️
       
       
