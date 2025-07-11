import {
  MessageCircle,
  Shield,
  CheckCircle,
  ArrowUpRight,
  Heart,
  Activity,
  Stethoscope,
  Building2,
  Users,
  Pill,
} from "lucide-react";

function InsurancePage() {
  return (
    <div className="flex h-full pb-3">
      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0 h-full">
        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Insurance Coverage
            </h1>
            <p className="text-gray-600">
              Manage your health insurance plans and explore available options
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Section - Current Insurance Plan */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Your Current Insurance Plan
              </h2>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Basic Health Plan
                      </h3>
                      <p className="text-sm text-gray-500">Mandatory</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-700">
                      Active
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">
                    Coverage Includes:
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Stethoscope className="w-4 h-4 text-teal-600" />
                      <span className="text-sm text-gray-700">
                        Outpatient visits
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-4 h-4 text-teal-600" />
                      <span className="text-sm text-gray-700">
                        General checkups
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Activity className="w-4 h-4 text-teal-600" />
                      <span className="text-sm text-gray-700">
                        Diagnostics (limited)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <button className="cursor-pointer w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                    <ArrowUpRight className="w-4 h-4" />
                    <span>View Plan</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section - Insurance Partners */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Our Insurance Partners
              </h2>

              <div className="space-y-6">
                {/* EverCare Insurance */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          EverCare Insurance
                        </h3>
                        <div className="flex items-center space-x-1 mt-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-gray-500">
                            Premium Partner
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    Covers hospitalizations, diagnostics, and follow-ups with
                    digital claim tracking.
                  </p>

                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Building2 className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-500">
                        Hospital Coverage
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Activity className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-500">
                        Digital Claims
                      </span>
                    </div>
                  </div>

                  <button className="cursor-pointer w-full bg-teal-50 text-teal-700 px-4 py-2 rounded-lg font-medium hover:bg-teal-100 transition-colors">
                    View Details
                  </button>
                </div>

                {/* MediSecure Nepal */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          MediSecure Nepal
                        </h3>
                        <div className="flex items-center space-x-1 mt-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-xs text-gray-500">
                            Family Plans Available
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    Affordable plans for families and chronic care support.
                    Includes pharmacy coverage.
                  </p>

                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-500">
                        Family Plans
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Pill className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-500">
                        Pharmacy Coverage
                      </span>
                    </div>
                  </div>

                  <button className="w-full bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-100 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Need Help Choosing?
                </h3>
                <p className="text-gray-600 mb-4">
                  Our insurance specialists are available to help you understand
                  your options and choose the best plan for your healthcare
                  needs.
                </p>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors border border-blue-200">
                  Schedule Consultation
                </button>
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

export default InsurancePage;
