🩺 MediChain – User Portal (React.js)

A secure, centralized digital healthcare portal that allows citizens to manage medical records, book hospital appointments, view prescriptions, and access insurance plans — all through a unique Medical ID.
🌐 About the Project

MediChain User Portal is a modern, responsive web application built with React.js that empowers patients to manage their healthcare journey seamlessly. From appointment booking and record viewing to insurance tracking and support, the system ensures medical data remains secure, transparent, and easily accessible. This portal is part of a nationwide digital health infrastructure, where patients control access via Medical IDs while hospitals contribute verified medical data.
🚀 Features

✅ Login with unique Medical ID & password
✅ Book appointments at registered hospitals by selecting department and date
✅ Choose consultation type: Regular Checkup or Follow-up (linked to token ID)
✅ View all past medical records (non-editable) in a tabular format
✅ Track prescriptions and diagnosis history
✅ Submit correction requests via Helpdesk
✅ View and upgrade insurance plans
✅ Real-time notifications & seasonal health alerts (e.g., Dengue awareness)
✅ Multi-language support (e.g., English, Nepali)
✅ Mobile-responsive & user-friendly dashboard
🛠️ Tech Stack

    Frontend: React.js

    Styling: TailwindCSS

    State Management: Context API / Redux (optional)

    Routing: React Router DOM

    Icons/UI: Lucide React, HeroIcons

    Backend: (Connected via REST API, built in Node.js or Express – handled separately)

📁 Project Structure

medichain-user-portal/
│
├── public/
├── src/
│   ├── components/         # Reusable UI components (Navbar, Sidebar, TableRow, etc.)
│   ├── pages/              # Page components (Dashboard, Records, Appointments, Helpdesk)
│   ├── routes/             # Protected routing configuration
│   ├── assets/             # Images, icons, banners
│   ├── context/            # Global user state or auth context
│   ├── services/           # API services and helpers
│   └── App.jsx
│
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md

🧪 Getting Started (Development)

    Clone the repository:

git clone https://github.com/your-username/medichain-user-portal.git
cd medichain-user-portal

    Install dependencies:

npm install

    Run the development server:

npm run dev

    Open in browser:

http://localhost:5173

⚙️ Environment Variables (if applicable)

Create a .env file:

VITE_API_BASE_URL=https://your-backend-api.com/api
VITE_APP_NAME=MediChain

📸 UI Previews (Optional)

Add screenshots/gifs of:

    Dashboard

    Appointment Booking

    Medical Record Table

    Helpdesk Ticket Form

    Insurance Plan Cards

🤝 Team & Acknowledgments

Built with ❤️ during a national health hackathon.
Thanks to open-source contributors, government digital health initiatives, and our mentors.
