export default function HomePage() {
  const friends = [
    {
      name: "David Kim",
      ago: "62d ago",
      tags: ["WORK"],
      status: "Almost Due",
      statusColor: "bg-yellow-400 text-yellow-900",
      avatar: "DK",
      avatarBg: "bg-red-400",
    },
    {
      name: "Emma Wilson",
      ago: "62d ago",
      tags: ["FAMILY"],
      status: "Overdue",
      statusColor: "bg-red-500 text-white",
      avatar: "EW",
      avatarBg: "bg-amber-300",
    },
    {
      name: "Lisa Nakamura",
      ago: "62d ago",
      tags: ["WORK"],
      status: "Overdue",
      statusColor: "bg-red-500 text-white",
      avatar: "LN",
      avatarBg: "bg-purple-400",
    },
    {
      name: "James Wright",
      ago: "62d ago",
      tags: ["HOBBY", "TRAVEL"],
      status: "Overdue",
      statusColor: "bg-red-500 text-white",
      avatar: "JW",
      avatarBg: "bg-gray-500",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f0f2f5] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-gray-900 mb-3 tracking-tight">
            Friends to keep close in your life
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <button className="bg-[#1e3a2f] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#2d5240] transition-colors">
            + Add a Friend
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { value: "10", label: "Total Friends" },
            { value: "3", label: "On Track" },
            { value: "6", label: "Need Attention" },
            { value: "12", label: "Interactions This Month" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-5 text-center">
              <p className="text-3xl font-bold text-gray-900">{s.value}</p>
              <p className="text-xs text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Friends Grid */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Your Friends</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {friends.map((f) => (
              <div key={f.name} className="bg-white rounded-xl p-5 flex flex-col items-center gap-2">
                <div className={`w-14 h-14 rounded-full ${f.avatarBg} flex items-center justify-center text-white font-bold text-sm`}>
                  {f.avatar}
                </div>
                <p className="font-semibold text-gray-900 text-sm text-center">{f.name}</p>
                <p className="text-xs text-gray-400">{f.ago}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {f.tags.map((t) => (
                    <span key={t} className="bg-green-100 text-green-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${f.statusColor}`}>
                  {f.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
