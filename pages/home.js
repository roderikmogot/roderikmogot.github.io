import Roderik from "../public/roderik.png";
import Image from "next/image";

import { FaAngleDown, FaArrowDown } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col p-4 lg:flex-row lg:justify-center lg:items-center lg:gap-4">
        <Image src={Roderik} alt="Roderik Mogot" className="rounded-tl-md rounded-tr-md bg-orange-300" />
        <div className="h-50 mt-4 mx-auto text-center lg:flex lg:flex-col lg:text-left lg:mx-0 lg:gap-2">
          <div className="font-bold text-2xl text-black lg:text-6xl">
            Hi! I Am Roderik Mogot!
          </div>
          <div className="text-sm mt-2 text-slate-400 lg:text-xl">Final year computer science student <span className="bg-blue-700 text-red-400 p-1 font-bold w-fit rounded-md transition ease-in-out duration-700 hover:shadow-lg">@BINUS University</span></div>
          <a className="w-fit mx-auto mt-4 px-4 py-3 flex justify-center items-center gap-4 bg-primary text-gray-200 font-bold rounded-md text-lg cursor-pointer transition ease-in-out duration-300 hover:shadow-xl hover:scale-105 lg:mx-0">Projects <span className="inline-block"><FaAngleDown /></span></a>
        </div>

      </section>
    </>
  );
}
