import {
  Search,
  Bell,
  User,
  Globe,
  ChevronDown,
  MessageCircle,
  FileText,
  Eye,
  Filter,
  Download,
  Menu,
  X,
  CalendarDays,
} from "lucide-react";
import { useState } from "react";

const medicalRecords = [
  {
    sn: 1,
    date: "July 8, 2025",
    department: "Dermatology",
    hospital: "Bir Hospital",
    type: "Regular Checkup",
  },
  {
    sn: 2,
    date: "June 15, 2025",
    department: "Cardiology",
    hospital: "Civil Hospital",
    type: "Follow-Up",
  },
  {
    sn: 3,
    date: "May 22, 2025",
    department: "Orthopedics",
    hospital: "Bir Hospital",
    type: "Regular Checkup",
  },
  {
    sn: 4,
    date: "April 10, 2025",
    department: "Neurology",
    hospital: "Teaching Hospital",
    type: "Follow-Up",
  },
  {
    sn: 5,
    date: "March 18, 2025",
    department: "Cardiology",
    hospital: "Civil Hospital",
    type: "Regular Checkup",
  },
  {
    sn: 6,
    date: "February 25, 2025",
    department: "Dermatology",
    hospital: "Bir Hospital",
    type: "Follow-Up",
  },
  {
    sn: 7,
    date: "January 12, 2025",
    department: "General Medicine",
    hospital: "Civil Hospital",
    type: "Regular Checkup",
  },
  {
    sn: 8,
    date: "December 8, 2024",
    department: "Ophthalmology",
    hospital: "Eye Care Center",
    type: "Follow-Up",
  },
];

function RecordPage() {
  const departments = [
    "All Departments",
    "Dermatology",
    "Cardiology",
    "Orthopedics",
    "Neurology",
    "General Medicine",
    "Ophthalmology",
  ];
  const dateRanges = [
    "All Time",
    "Last 30 Days",
    "Last 3 Months",
    "Last 6 Months",
    "Last Year",
  ];
  const [selectedDepartment, setSelectedDepartment] =
    useState("All Departments");
  const [selectedDateRange, setSelectedDateRange] = useState("All Time");
  return (
    <div className="flex w-full">
      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Medical Records
                </h1>
                <p className="text-gray-600">
                  View and manage your complete medical visit history
                </p>
              </div>
              <div className="mt-4 sm:mt-0">
                <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export Records
                </button>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center mb-4">
              <Filter className="w-5 h-5 text-gray-500 mr-2" />
              <h3 className="text-lg font-medium text-gray-900">Filters</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Department Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Department
                </label>
                <div className="relative">
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 appearance-none"
                  >
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Date Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date Range
                </label>
                <div className="relative">
                  <select
                    value={selectedDateRange}
                    onChange={(e) => setSelectedDateRange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 appearance-none"
                  >
                    {dateRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search records..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Medical Records Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Visit History
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Total {medicalRecords.length} records found
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      S.N.
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Department
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Hospital
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {medicalRecords.map((record, index) => (
                    <tr
                      key={record.sn}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {record.sn}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex items-center">
                          <CalendarDays className="w-4 h-4 text-gray-400 mr-2" />
                          {record.date}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {record.department}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {record.hospital}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            record.type === "Regular Checkup"
                              ? "bg-green-100 text-green-800"
                              : "bg-teal-100 text-teal-800"
                          }`}
                        >
                          {record.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <button className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-md hover:bg-blue-100 transition-colors">
                          <Eye className="w-4 h-4 mr-1" />
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to{" "}
                  <span className="font-medium">8</span> of{" "}
                  <span className="font-medium">{medicalRecords.length}</span>{" "}
                  results
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                    Previous
                  </button>
                  <button className="px-3 py-1 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-md hover:bg-blue-700">
                    1
                  </button>
                  <button className="px-3 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    Next
                  </button>
                </div>
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

export default RecordPage;
