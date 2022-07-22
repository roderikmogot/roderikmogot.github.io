import Link from "next/link";

import { FaFacebookMessenger, FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-4 mx-4 lg:mx-0">
      <div className="bg-teal-700 p-6 max-w-sm mx-auto rounded-xl shadow-md flex items-center gap-4 cursor-pointer transition ease-in-out duration-0 hover:scale-105 hover:duration-150">
        <div className="shrink-0">
          <FaFacebookMessenger size={20} className="h-12 w-12 text-slate-100" />
        </div>
        <div>
          <div className="text-xl font-medium text-white">User</div>
          <p className="text-slate-200">You have a new message!</p>
        </div>
      </div>
      <div className="bg-white max-w-lg">
        <div className="text-4xl font-bold">Roderik Mogot</div>
        <p className="text-slate-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
          elit vehicula, mattis magna ut, porttitor turpis.
        </p>
        <div className="text-slate-300 italic">
          Nullam dignissim magna vitae sollicitudin facilisis.
        </div>
      </div>
      <div className="bg-cyan-700 mx-auto font-medium cursor-pointer shadow-md text-white p-4 rounded-md transition ease-in-out duration-0 hover:duration-300 hover:scale-105 hover:shadow-lg">
        <Link href="/home">
          <div className="flex flex-row justify-between items-center text-lg gap-4">
            <div>Home</div>
            <FaArrowRight className="text-xl" />
          </div>
        </Link>
      </div>
    </div>
  );
}
