export default function UserInfoPage() {
  return (
    <main className="min-h-screen bg-[#f0f2f5] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Left: Profile card */}
          <div className="flex flex-col gap-3">
            <div className="bg-white rounded-xl p-6 flex flex-col items-center text-center gap-2">
              <div className="w-16 h-16 rounded-full bg-amber-300 flex items-center justify-center text-white font-bold text-xl">
                EW
              </div>
              <p className="font-bold text-gray-900 text-lg">Emma Wilson</p>
              <div className="flex gap-2 flex-wrap justify-center">
                <span className="bg-red-500 text-white text-xs font-semibold px-3 py-0.5 rounded-full">Overdue</span>
                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-0.5 rounded-full">FAMILY</span>
              </div>
              <p className="text-gray-500 text-sm italic">Former colleague, great mentor</p>
              <p className="text-gray-400 text-xs">Preferred: email</p>
            </div>

            <button className="bg-white rounded-xl px-4 py-3 flex items-center gap-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors w-full">
              Snooze 2 Weeks
            </button>
            <button className="bg-white rounded-xl px-4 py-3 flex items-center gap-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors w-full">
              Archive
            </button>
            <button className="bg-white rounded-xl px-4 py-3 flex items-center gap-2 text-sm text-red-500 hover:bg-gray-50 transition-colors w-full">
              Delete
            </button>
          </div>

          {/* Right: Stats + Goal + Quick Check-in */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-gray-900">62</p>
                <p className="text-xs text-gray-500 mt-1">Days Since Contact</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <p className="text-3xl font-bold text-gray-900">30</p>
                <p className="text-xs text-gray-500 mt-1">Goal (Days)</p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <p className="text-xl font-bold text-[#1e3a2f]">Feb 27, 2026</p>
                <p className="text-xs text-gray-500 mt-1">Next Due</p>
              </div>
            </div>

            {/* Relationship Goal */}
            <div className="bg-white rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-gray-900">Relationship Goal</p>
                <button className="border border-gray-200 text-gray-600 text-xs px-3 py-1 rounded-md hover:bg-gray-50 transition-colors">
                  Edit
                </button>
              </div>
              <p className="text-gray-600 text-sm">
                Connect every <strong>30 days</strong>
              </p>
            </div>

            {/* Quick Check-In */}
            <div className="bg-white rounded-xl p-5">
              <p className="font-semibold text-gray-900 mb-3">Quick Check-In</p>
              <div className="grid grid-cols-3 gap-3">
                <button className="border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-gray-50 transition-colors">
                  <span className="text-sm text-gray-700">Call</span>
                </button>
                <button className="border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-gray-50 transition-colors">
                  <span className="text-sm text-gray-700">Text</span>
                </button>
                <button className="border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-2 hover:bg-gray-50 transition-colors">
                  <span className="text-sm text-gray-700">Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
