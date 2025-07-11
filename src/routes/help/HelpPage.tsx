import {
  Search,
  MessageCircle,
  Calendar,
  FileText,
  Shield,
  HelpCircle,
  Phone,
  Eye,
  Plus,
  ClipboardList,
  UserCheck,
} from "lucide-react";

function App() {
  const quickActionCards = [
    {
      title: "FAQs",
      description: "Browse frequently asked questions",
      icon: HelpCircle,
      color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      title: "Raise a Ticket",
      description: "Submit a new support request",
      icon: Plus,
      color: "bg-teal-50 hover:bg-teal-100 border-teal-200",
      iconColor: "text-teal-600",
    },
    {
      title: "Live Chat",
      description: "Chat with our support team",
      icon: MessageCircle,
      color: "bg-green-50 hover:bg-green-100 border-green-200",
      iconColor: "text-green-600",
    },
    {
      title: "Track My Tickets",
      description: "View your support ticket status",
      icon: ClipboardList,
      color: "bg-purple-50 hover:bg-purple-100 border-purple-200",
      iconColor: "text-purple-600",
    },
  ];

  const helpTopics = [
    {
      title: "Booking Appointments",
      description: "Schedule and manage your medical appointments",
      icon: Calendar,
      color: "text-blue-600",
    },
    {
      title: "Accessing Records",
      description: "View and download your medical records",
      icon: Eye,
      color: "text-teal-600",
    },
    {
      title: "Insurance Queries",
      description: "Insurance claims and coverage questions",
      icon: Shield,
      color: "text-green-600",
    },
    {
      title: "Login & Account Help",
      description: "Password reset and account access issues",
      icon: UserCheck,
      color: "text-purple-600",
    },
    {
      title: "Medical Reports",
      description: "Download lab results and diagnostic reports",
      icon: FileText,
      color: "text-orange-600",
    },
    {
      title: "Emergency Contacts",
      description: "Find emergency services and procedures",
      icon: Phone,
      color: "text-red-600",
    },
  ];

  return (
    <div className="w-full h-full">
      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0 h-full">
        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search help topics..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-gray-900 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Quick Action Cards */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActionCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={index}
                    className={`${card.color} border-2 rounded-lg p-6 cursor-pointer transition-all hover:shadow-md`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`w-12 h-12 rounded-lg ${card.color.replace("bg-", "bg-").replace("hover:bg-", "bg-")} flex items-center justify-center mb-3`}
                      >
                        <Icon className={`w-6 h-6 ${card.iconColor}`} />
                      </div>
                      <h4 className="font-medium text-gray-800 mb-2">
                        {card.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Help Topics */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Help Topics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {helpTopics.map((topic, index) => {
                const Icon = topic.icon;
                return (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className={`w-5 h-5 ${topic.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 mb-1">
                          {topic.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {topic.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional Resources */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Additional Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-gray-800">Documentation</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      User Guide
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-gray-800">
                  Contact Information
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Emergency: 911</li>
                  <li>Support: 1-800-MEDICHAIN</li>
                  <li>Email: support@medichain.com</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Live Chat Bubble */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="w-14 h-14 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center">
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}

export default App;
