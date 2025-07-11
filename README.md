# 🩺 MediChain – User Portal (React.js)

MediChain is a secure and centralized web-based healthcare platform built with React.js that empowers patients to manage their health journey using a unique Medical ID. It allows users to book appointments, view non-editable medical records, request revisions, track insurance coverage, and receive health alerts — all through a modern, user-friendly dashboard.

---

## 🌐 Features

- 🔐 Secure login with Medical ID and password
- 🗓️ Book appointments with hospitals and departments (Regular or Follow-up)
- 📄 View past medical records in a structured, read-only table
- 🧾 Track prescriptions and diagnosis history
- 🆘 Submit record revision requests via the Helpdesk
- 💳 View and upgrade insurance plans with partner info
- 🛎️ Real-time health alerts (e.g., Dengue awareness)
- 🌍 Multilingual support (e.g., English, Nepali)
- 📱 Fully responsive UI for desktop and mobile devices

---

## 🛠️ Tech Stack

- Frontend: React.js
- Styling: TailwindCSS
- Routing: React Router DOM
- State Management: Context API (or Redux optional)
- Iconography: Lucide-react, Heroicons
- Backend: Connects to REST API (Node.js/Express)

---

## 📁 Project Structure
medichain-user-portal/
├── public/
├── src/
│ ├── assets/ # Images, logos, icons
│ ├── components/ # Reusable UI components
│ ├── context/ # Auth/User context
│ ├── pages/ # Page components (Dashboard, Records, Appointments, etc.)
│ ├── routes/ # Protected/private routes
│ ├── services/ # API calls
│ └── App.jsx # Main app component
├── .env # Environment variables
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md

