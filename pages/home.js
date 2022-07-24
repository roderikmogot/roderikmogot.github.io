import Roderik from "../public/roderik.png";
import Image from "next/image";

import { FaAngleDown, FaArrowDown } from "react-icons/fa";
import {
  SiTensorflow,
  SiNumpy,
  SiReact,
  SiScikitlearn,
  SiPandas,
  SiNextdotjs,
} from "react-icons/si";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="h-screen w-screen p-4 flex flex-col
      justify-center items-center lg:flex-row lg:gap-4 lg:w-auto lg:h-auto"
      >
        <Image
          src={Roderik}
          alt="Roderik Mogot"
          className="rounded-tl-md rounded-tr-md"
        />
        <div className="h-50 mt-4 mx-auto text-center lg:flex lg:flex-col lg:text-left lg:mx-0 lg:gap-2">
          <div className="font-bold text-2xl text-black lg:text-6xl">
            Hi! I Am Roderik Mogot!
          </div>
          <div className="text-sm mt-2 text-slate-400 lg:text-xl">
            Final year computer science student{" "}
            <span className="bg-blue-700 text-red-400 p-1 font-bold w-fit rounded-md transition ease-in-out duration-700 hover:shadow-lg">
              @BINUS University
            </span>
          </div>
          <a className="w-fit mx-auto mt-4 px-4 py-3 flex justify-center items-center gap-4 bg-primary text-gray-200 font-bold rounded-md text-lg cursor-pointer transition ease-in-out duration-300 hover:shadow-xl hover:scale-105 lg:mx-0">
            Projects{" "}
            <span className="inline-block">
              <FaAngleDown />
            </span>
          </a>
        </div>
      </section>
      {/* About */}
      <section className="w-auto mx-4 py-4 items-center bg-black text-white lg:w-auto lg:flex lg:flex-row lg:justify-between lg:px-20 lg:py-8 lg:mx-12 lg:gap-12">
        <div className="p-4 leading-relaxed italic text-slate-100 lg:text-xl lg:max-w-2xl lg:leading-8">
          <div className="not-italic font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue-700 to-red-400 lg:text-8xl">
            About Me.
          </div>
          Hi! I&#39;m currently a final year student{" "}
          <span className="bg-blue-700 text-red-400 p-1 font-bold w-fit rounded-md transition ease-in-out duration-700 hover:shadow-lg">
            @BINUS University
          </span>{" "}
          majoring the computer science field. I&#39;m also familiar with
          Python&#39;s known data science libraries like NumPy, pandas,
          TensorFlow, and scikit-learn. I also do web development using React or
          Next.
        </div>
        <div className="p-8 hidden lg:grid lg:grid-cols-3 lg:gap-20 lg:mx-auto lg:w-full lg:h-full">
          <div className="flex items-center justify-center">
            <SiTensorflow className="text-8xl text-slate-400" />
          </div>
          <div className="flex items-center justify-center">
            <SiNumpy className="text-8xl text-slate-400" />
          </div>
          <div className="flex items-center justify-center">
            <SiScikitlearn className="text-8xl text-slate-400" />
          </div>
          <div className="flex items-center justify-center">
            <SiPandas className="text-8xl text-slate-400" />
          </div>
          <div className="flex items-center justify-center">
            <SiReact className="text-8xl text-slate-400" />
          </div>
          <div className="flex items-center justify-center">
            <SiNextdotjs className="text-8xl text-slate-400" />
          </div>
        </div>
      </section>
    </>
  );
}
