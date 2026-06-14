'use client'
import { Context } from "@/provider/ContextProvider";
import { useContext } from "react";

export default function TimelinePage() {
  const events = [
    {
      emoji: "🤝",
      type: "Meetup",
      with: "Tom Baker",
      date: "March 29, 2026",
    },
    {
      emoji: "💬",
      type: "Text",
      with: "Sarah Chen",
      date: "March 28, 2026",
    },
    {
      emoji: "📞",
      type: "Call",
      with: "Emma Wilson",
      date: "March 25, 2026",
    },
    {
      emoji: "🎥",
      type: "Video",
      with: "David Kim",
      date: "March 20, 2026",
    },
    {
      emoji: "🤝",
      type: "Meetup",
      with: "Lisa Nakamura",
      date: "March 15, 2026",
    },
  ];

  const {call} = useContext(Context)
  console.log(call);


  return (
    <main className="min-h-screen bg-[#f0f2f5] px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">Timeline</h1>

        {/* Filter dropdown */}
        <div className="relative inline-block mb-6">
          <button className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-500 flex items-center gap-10 hover:bg-gray-50 transition-colors">
            Filter timeline
            Test
          </button>
        </div>

        {/* Events list */}
        <div className="flex flex-col gap-3">
          {events.map((e, i) => (
            <div key={i} className="bg-white rounded-xl px-5 py-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl shrink-0">
                {e.emoji}
              </div>
              <div>
                <p className="text-sm text-gray-900">
                  <span className="font-semibold">{e.type}</span>
                  <span className="text-gray-500"> with {e.with}</span>
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{e.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
