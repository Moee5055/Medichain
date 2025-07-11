import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  CreditCard,
  Check,
  X,
  ChevronDown,
  Building2,
  Stethoscope,
} from "lucide-react";

interface Hospital {
  id: string;
  name: string;
  location: string;
  departments: string[];
}

interface PastVisit {
  id: string;
  date: string;
  department: string;
  doctor: string;
  diagnosis: string;
}

interface InsurancePlan {
  type: "Basic" | "Premium";
  eligible: boolean;
}

const hospitals: Hospital[] = [
  {
    id: "1",
    name: "City General Hospital",
    location: "123 Medical Center Dr, Downtown",
    departments: [
      "Cardiology",
      "Neurology",
      "Orthopedics",
      "Pediatrics",
      "General Medicine",
    ],
  },
  {
    id: "2",
    name: "Regional Medical Center",
    location: "456 Health Plaza, Westside",
    departments: [
      "Emergency Medicine",
      "Surgery",
      "Radiology",
      "Oncology",
      "Psychiatry",
    ],
  },
  {
    id: "3",
    name: "University Hospital",
    location: "789 Campus Ave, University District",
    departments: [
      "Internal Medicine",
      "Dermatology",
      "Ophthalmology",
      "ENT",
      "Gynecology",
    ],
  },
];

const pastVisits: PastVisit[] = [
  {
    id: "APT001",
    date: "2024-01-15",
    department: "Cardiology",
    doctor: "Dr. Sarah Johnson",
    diagnosis: "Routine cardiac screening - Normal results",
  },
  {
    id: "APT002",
    date: "2024-02-20",
    department: "General Medicine",
    doctor: "Dr. Michael Chen",
    diagnosis: "Annual physical examination - Follow-up required",
  },
];

const timeSlots = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
];

const unavailableSlots = ["10:30", "15:00", "16:30"];

function AppointmentPage() {
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(
    null,
  );
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [appointmentType, setAppointmentType] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [selectedPastVisit, setSelectedPastVisit] = useState<PastVisit | null>(
    null,
  );
  const [showPastVisits, setShowPastVisits] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [insurancePlan] = useState<InsurancePlan>({
    type: "Premium",
    eligible: true,
  });
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const isFormValid =
    selectedHospital &&
    selectedDepartment &&
    appointmentType &&
    selectedDate &&
    selectedTime &&
    (appointmentType === "regular" ||
      (appointmentType === "followup" && (tokenId || selectedPastVisit)));

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const isCurrentMonth = date.getMonth() === month;
      const isPast = date < today;
      const isToday = date.toDateString() === today.toDateString();

      days.push({
        date: date.getDate(),
        fullDate: date.toISOString().split("T")[0],
        isCurrentMonth,
        isPast,
        isToday,
        isUnavailable: Math.random() < 0.3 && !isPast && isCurrentMonth,
      });
    }

    return days;
  };

  const handleDateSelect = (dateString: string) => {
    setSelectedDate(dateString);
    setSelectedTime("");
  };

  const handleTimeSelect = (time: string) => {
    if (!unavailableSlots.includes(time)) {
      setSelectedTime(time);
    }
  };

  const handlePastVisitSelect = (visit: PastVisit) => {
    setSelectedPastVisit(visit);
    setTokenId(visit.id);
    setShowPastVisits(false);
  };

  const handleConfirmAppointment = () => {
    setShowSuccessModal(true);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const navigateMonth = (direction: "prev" | "next") => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(
      currentMonth.getMonth() + (direction === "next" ? 1 : -1),
    );
    setCurrentMonth(newMonth);
  };

  const calendarDays = generateCalendarDays();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Book Appointment
          </h1>
          <p className="text-lg text-gray-600">
            Schedule your next hospital visit securely
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hospital & Department Selection */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Building2 className="w-5 h-5 mr-2 text-teal-600" />
                Hospital & Department
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Hospital
                  </label>
                  <div className="relative">
                    <select
                      value={selectedHospital?.id || ""}
                      onChange={(e) => {
                        const hospital = hospitals.find(
                          (h) => h.id === e.target.value,
                        );
                        setSelectedHospital(hospital || null);
                        setSelectedDepartment("");
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white"
                    >
                      <option value="">Choose a hospital...</option>
                      {hospitals.map((hospital) => (
                        <option key={hospital.id} value={hospital.id}>
                          {hospital.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                  {selectedHospital && (
                    <div className="mt-2 flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      {selectedHospital.location}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Department
                  </label>
                  <div className="relative">
                    <select
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      disabled={!selectedHospital}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white disabled:bg-gray-50 disabled:text-gray-500"
                    >
                      <option value="">Choose a department...</option>
                      {selectedHospital?.departments.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Type */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Stethoscope className="w-5 h-5 mr-2 text-teal-600" />
                Appointment Type
              </h2>

              <div className="space-y-3">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="appointmentType"
                    value="regular"
                    checked={appointmentType === "regular"}
                    onChange={(e) => setAppointmentType(e.target.value)}
                    className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                  />
                  <span className="ml-3 text-gray-700">Regular Checkup</span>
                </label>

                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="appointmentType"
                    value="followup"
                    checked={appointmentType === "followup"}
                    onChange={(e) => setAppointmentType(e.target.value)}
                    className="w-4 h-4 text-teal-600 border-gray-300 focus:ring-teal-500"
                  />
                  <span className="ml-3 text-gray-700">
                    Follow-Up Appointment
                  </span>
                </label>
              </div>

              {appointmentType === "followup" && (
                <div className="mt-4 space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Previous Appointment Token ID
                    </label>
                    <input
                      type="text"
                      value={tokenId}
                      onChange={(e) => setTokenId(e.target.value)}
                      placeholder="Enter token ID (e.g., APT001)"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>

                  <div className="text-center">
                    <span className="text-gray-500">or</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowPastVisits(!showPastVisits)}
                    className="w-full px-4 py-3 bg-[#0077F9] text-white rounded-lg hover:bg-[#0066E0] transition-colors"
                  >
                    Select from Past Visits
                  </button>

                  {showPastVisits && (
                    <div className="mt-3 space-y-2">
                      {pastVisits.map((visit) => (
                        <div
                          key={visit.id}
                          onClick={() => handlePastVisitSelect(visit)}
                          className="p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-medium text-gray-900">
                                {visit.id}
                              </div>
                              <div className="text-sm text-gray-600">
                                {formatDate(visit.date)}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium text-gray-900">
                                {visit.department}
                              </div>
                              <div className="text-sm text-gray-600">
                                {visit.doctor}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {selectedPastVisit && (
                    <div className="mt-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-2">
                        Selected Past Visit
                      </h4>
                      <div className="text-sm text-blue-800">
                        <p>
                          <strong>Date:</strong>{" "}
                          {formatDate(selectedPastVisit.date)}
                        </p>
                        <p>
                          <strong>Department:</strong>{" "}
                          {selectedPastVisit.department}
                        </p>
                        <p>
                          <strong>Doctor:</strong> {selectedPastVisit.doctor}
                        </p>
                        <p>
                          <strong>Diagnosis:</strong>{" "}
                          {selectedPastVisit.diagnosis}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Date Selection */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-teal-600" />
                Select Date
              </h2>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {currentMonth.toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => navigateMonth("prev")}
                      className="p-2 rounded-lg hover:bg-[#0077F9] hover:text-white transition-colors"
                    >
                      <ChevronDown className="w-4 h-4 rotate-90" />
                    </button>
                    <button
                      onClick={() => navigateMonth("next")}
                      className="p-2 rounded-lg hover:bg-[#0077F9] hover:text-white transition-colors"
                    >
                      <ChevronDown className="w-4 h-4 -rotate-90" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="text-center text-sm font-medium text-gray-500 py-2"
                      >
                        {day}
                      </div>
                    ),
                  )}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        day.isCurrentMonth &&
                        !day.isPast &&
                        !day.isUnavailable &&
                        handleDateSelect(day.fullDate)
                      }
                      disabled={
                        day.isPast || day.isUnavailable || !day.isCurrentMonth
                      }
                      className={`
                        aspect-square p-2 text-sm rounded-lg transition-colors
                        ${
                          day.isCurrentMonth
                            ? day.isPast || day.isUnavailable
                              ? "text-gray-400 cursor-not-allowed"
                              : selectedDate === day.fullDate
                                ? "bg-[#0077F9] text-white"
                                : day.isToday
                                  ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                                  : "text-gray-700 hover:bg-gray-200"
                            : "text-gray-300 cursor-not-allowed"
                        }
                      `}
                    >
                      {day.date}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Time Selection */}
            {selectedDate && (
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-teal-600" />
                  Select Time
                </h2>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      disabled={unavailableSlots.includes(time)}
                      className={`
                        py-3 px-4 rounded-lg border transition-colors
                        ${
                          unavailableSlots.includes(time)
                            ? "border-gray-200 text-gray-400 cursor-not-allowed"
                            : selectedTime === time
                              ? "border-[#0077F9] bg-[#0077F9] text-white"
                              : "border-gray-300 text-gray-700 hover:border-[#0077F9] hover:bg-blue-50"
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Insurance Info */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-teal-600" />
                Insurance Info
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Current Plan</span>
                  <span className="font-medium text-gray-900">
                    {insurancePlan.type}
                  </span>
                </div>

                <div
                  className={`p-3 rounded-lg ${insurancePlan.eligible ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
                >
                  <div className="flex items-center">
                    {insurancePlan.eligible ? (
                      <Check className="w-4 h-4 text-green-600 mr-2" />
                    ) : (
                      <X className="w-4 h-4 text-red-600 mr-2" />
                    )}
                    <span
                      className={`text-sm ${insurancePlan.eligible ? "text-green-700" : "text-red-700"}`}
                    >
                      {insurancePlan.eligible
                        ? "Eligible for claim"
                        : "Not eligible for claim"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Summary */}
            {(selectedHospital ||
              selectedDepartment ||
              selectedDate ||
              selectedTime) && (
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Appointment Summary
                </h3>

                <div className="space-y-3 text-sm">
                  {selectedHospital && (
                    <div>
                      <span className="text-gray-600">Hospital:</span>
                      <span className="ml-2 font-medium text-gray-900">
                        {selectedHospital.name}
                      </span>
                    </div>
                  )}

                  {selectedDepartment && (
                    <div>
                      <span className="text-gray-600">Department:</span>
                      <span className="ml-2 font-medium text-gray-900">
                        {selectedDepartment}
                      </span>
                    </div>
                  )}

                  {appointmentType && (
                    <div>
                      <span className="text-gray-600">Type:</span>
                      <span className="ml-2 font-medium text-gray-900">
                        {appointmentType === "regular"
                          ? "Regular Checkup"
                          : "Follow-Up"}
                      </span>
                    </div>
                  )}

                  {selectedDate && (
                    <div>
                      <span className="text-gray-600">Date:</span>
                      <span className="ml-2 font-medium text-gray-900">
                        {formatDate(selectedDate)}
                      </span>
                    </div>
                  )}

                  {selectedTime && (
                    <div>
                      <span className="text-gray-600">Time:</span>
                      <span className="ml-2 font-medium text-gray-900">
                        {selectedTime}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Confirm Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleConfirmAppointment}
            disabled={!isFormValid}
            className={`
              px-8 py-4 rounded-xl font-medium text-lg transition-colors
              ${
                isFormValid
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }
            `}
          >
            Confirm Appointment
          </button>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Appointment Confirmed!
              </h3>

              <div className="text-gray-600 mb-6">
                <p className="mb-2">Your appointment has been confirmed for:</p>
                <p className="font-medium text-gray-900">
                  {formatDate(selectedDate)} at {selectedTime}
                </p>
                <p className="font-medium text-gray-900">
                  {selectedDepartment} - {selectedHospital?.name}
                </p>
              </div>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppointmentPage;
