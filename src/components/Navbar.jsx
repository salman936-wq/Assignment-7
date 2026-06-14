"use client";
import HomePage from "@/app/page";
import StatsPage from "@/app/stats/page";
import TimelinePage from "@/app/timeline/page";
TimelinePage
import Link from "next/link";
HomePage
StatsPage
import { usePathname } from "next/navigation";
import Image from 'next/image'
import Logo from "../../public/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faClock, faChartLine } from "@fortawesome/free-solid-svg-icons";


export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-white border-b border-gray-100 px-32 py-3 flex items-center justify-between sticky top-0 z-50">

      <Link href="/">
        <Image
          src={Logo}
          alt="KinKeeper Logo"
          width={141}
          height={31}
        />
      </Link>



      <div className="flex items-center gap-2">

        <Link
          href="/"
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
          ${pathname === "/"
              ? "bg-[#1e3a2f] text-white"
              : "text-gray-600 hover:text-gray-900"
            }`}
        >
          <FontAwesomeIcon icon={faHouse}/>
          Home
        </Link>

        <Link
          href="/timeline"
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
          ${pathname === "/timeline"
              ? "bg-[#1e3a2f] text-white"
              : "text-gray-600 hover:text-gray-900"
            }`}
        >
          <FontAwesomeIcon icon={faClock}/>
          Timeline
        </Link>

        <Link
          href="/stats"
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
          ${pathname === "/stats"
              ? "bg-[#1e3a2f] text-white"
              : "text-gray-600 hover:text-gray-900"
            }`}
        >
          <FontAwesomeIcon icon={faChartLine}/>
          Stats
        </Link>

      </div>


    </nav>
  );
}
