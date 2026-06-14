import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  

  const res = await fetch("https://salman-b13-a7.netlify.app/friends.json");
  const friends = await res.json();

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
              <Link href={`/fraind-details/${f.id}`} key={f.name} className="bg-white rounded-xl p-5 flex flex-col items-center gap-2">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                  <Image className=" rounded-full"
                    src={f.picture}
                    alt={`Picture of the ${f.name}`}
                    width={500}
                    height={500}
                  />
                </div>
                <p className="font-semibold text-gray-900 text-sm text-center">{f.name}</p>
                <p className="text-xs text-gray-400">{f.days_since_contact}d ago</p>
                <ul className="flex flex-wrap gap-1 justify-center">
                  {f.tags.map((t) => (
                    <li key={t} className="bg-green-100 text-green-700 first-letter:uppercase text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      {t}
                    </li>
                  ))}
                </ul>
                <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${f.status == "On-Track" && "bg-[#244D3F]"} ${f.status == "Overdue" && "bg-[#EF4444]"} ${f.status == "Almost Due" && "bg-[#EFAD44]"}`}>
                  {f.status}
                </span>
              </Link>
            ))}



          </div>
        </div>
      </div>
    </main>
  );
}
