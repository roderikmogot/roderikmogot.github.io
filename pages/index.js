import Roderik from "../public/roderik.png";
import BOC from "../public/boc.jpeg";
import Sukaido from "../public/sukaido.png";

import Image from "next/image";
import Head from "next/head";

import {
  FaAngleDown,
  FaArrowDown,
  FaDiscord,
  FaGithub,
  FaKaggle,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiNumpy,
  SiReact,
  SiScikitlearn,
  SiPandas,
  SiNextdotjs,
  SiGithub,
  SiFigma,
  SiLinkedin,
  SiKaggle,
  SiDiscord,
} from "react-icons/si";

export default function Home() {
  return (
    <>
      <Head>
        <title>Roderik Mogot</title>
        <meta
          name="description"
          content="Roderik Mogot - Portfolio"
        />
        <link rel="icon" href="/jug.jpeg" />
      </Head>
      {/* Hero */}
      <section
        className="h-screen w-screen p-4 flex flex-col
      justify-center items-center lg:flex-row lg:gap-4 lg:w-auto"
      >
        <Image src={Roderik} alt="Roderik Mogot" />
        <div className="h-50 mt-4 mx-auto text-center lg:flex lg:flex-col lg:text-left lg:mx-0 lg:gap-2">
          <div className="font-bold text-2xl text-black lg:text-6xl">
            Hi! I Am Roderik Mogot!
          </div>
          <div className="text-sm mt-2 text-slate-400 lg:text-xl">
            Computer science student{" "}
            <span className="bg-blue-700 text-red-400 p-1 font-bold w-fit rounded-md transition ease-in-out duration-700 hover:shadow-lg">
              @BINUS University
            </span>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="w-auto py-4 items-center bg-black text-white lg:w-auto lg:flex lg:flex-row lg:justify-between lg:px-20 lg:py-8 lg:gap-12">
        <div className="p-4 leading-relaxed italic text-slate-100 lg:text-xl lg:max-w-2xl lg:leading-8">
          <div className="not-italic font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-700 to-red-400 lg:text-8xl">
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
            <SiTensorflow className="text-8xl opacity-25 transition duration-100 hover:opacity-80" />
          </div>
          <div className="flex items-center justify-center">
            <SiNumpy className="text-8xl opacity-25 transition duration-100 hover:opacity-80" />
          </div>
          <div className="flex items-center justify-center">
            <SiScikitlearn className="text-8xl opacity-25 transition duration-100 hover:opacity-80" />
          </div>
          <div className="flex items-center justify-center">
            <SiPandas className="text-8xl opacity-25 transition duration-100 hover:opacity-80" />
          </div>
          <div className="flex items-center justify-center">
            <SiReact className="text-8xl opacity-25 transition duration-100 hover:opacity-80" />
          </div>
          <div className="flex items-center justify-center">
            <SiNextdotjs className="text-8xl opacity-25 transition duration-100 hover:opacity-80" />
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="w-auto py-4 bg-experiences text-black flex flex-col lg:flex-row lg:justify-center lg:w-auto lg:px-20 lg:py-8 lg:h-96 lg:gap-12">
        <div className="p-4 leading-relaxed font-bold text-4xl lg:text-8xl lg:max-w-2xl lg:leading-8 lg:flex lg:justify-center lg:items-center">
          Experiences.
        </div>
        {/* BOC Indonesia */}
        <div className="ml-4 mb-4 flex justify-left items-center gap-4 lg:justify-center lg:mx-auto lg:flex-col lg:w-full lg:h-full">
          <div className="w-16 h-16 lg:w-24 lg:h-24 lg:relative">
            <Image
              src={BOC}
              alt="BOC Indonesia"
              className="rounded-full lg:object-fill lg:bg-cover"
            />
          </div>
          <div>
            <div className="font-bold text-md lg:text-2xl lg:text-center">
              BOC Indonesia
            </div>
            <div className="lg:text-xl lg:text-center">
              Front-End Web Developer Intern
            </div>
            <div className="italic text-black text-opacity-30 lg:text-xl lg:text-center">
              03/18 - 05/18
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="w-auto py-4 text-white bg-black flex flex-col lg:flex-row lg:justify-between lg:items-center lg:w-auto lg:px-20 lg:py-8 lg:h-96 lg:gap-24">
        <div className="p-4 leading-relaxed font-bold text-4xl lg:text-8xl lg:max-w-2xl lg:leading-8 lg:flex lg:justify-center lg:items-center">
          Projects.
        </div>
        <div className="mb-4 lg:grid lg:grid-cols-3 lg:gap-4 lg:w-full">
          <div></div>
          <div className="flex flex-row items-center mx-4 gap-4 lg:flex-col lg:justify-center">
            <div className="flex w-36 h-auto lg:w-48 lg:h-20 lg:relative">
              <Image
                src={Sukaido}
                className="bg-white rounded-sm lg:object-fill lg:bg-cover"
                alt="Sukaido"
              />
            </div>
            <div className="flex flex-col lg:justify-center lg:items-center">
              <div className="font-bold text-xl lg:text-2xl">Sukaido</div>
              <div className="text-sm italic text-slate-400 md:text-md">
                A Mini Restaurant App
              </div>
              <div className="flex flex-row gap-2 mt-2">
                <button className="flex justify-center items-center gap-2 font-bold text-sm bg-primary text-blue-400 p-2 rounded-md transition ease-in-out duration-150 hover:shadow-blue-400 hover:shadow-md lg:text-md lg:p-3">
                  Github
                  <span className="inline-block">
                    <SiGithub />
                  </span>
                </button>
                <button className="flex justify-center items-center gap-2 font-bold text-sm bg-blue-700 text-red-400 p-2 rounded-md transition ease-in-out duration-150 hover:shadow-red-400 hover:shadow-md lg:text-md lg:p-3">
                  Figma
                  <span className="inline-block">
                    <SiFigma />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      {/* Reach Me Out */}
      <section className="w-auto py-4 bg-contact text-black flex flex-col lg:flex-row lg:justify-between lg:w-auto lg:px-20 lg:py-8 lg:h-96 lg:gap-12">
        <div className="p-4 font-bold text-4xl lg:text-8xl lg:flex lg:justify-center lg:items-center">
          Reach Me.
        </div>
        <div className="mx-4 mb-2 flex flex-row justify-left items-center gap-4  lg:mx-auto lg:justify-evenly md:w-1/2">
          <div className="text-4xl lg:text-8xl">
            <FaDiscord className="rounded-lg p-1 opacity-25 cursor-pointer transition duration-100 hover:border-4 hover:border-black hover:opacity-80 hover:border-opacity-80 hover:shadow-lg" />
          </div>
          <div className="text-4xl lg:text-8xl">
            <FaLinkedin className="rounded-lg p-1 opacity-25 cursor-pointer transition duration-100 hover:border-4 hover:border-black hover:opacity-80 hover:border-opacity-80 hover:shadow-lg" />
          </div>
          <div className="text-4xl lg:text-8xl">
            <FaGithub className="rounded-lg p-1 opacity-25 cursor-pointer transition duration-100 hover:border-4 hover:border-black hover:opacity-80 hover:border-opacity-80 hover:shadow-lg" />
          </div>
          <div className="text-4xl lg:text-8xl">
            <FaKaggle className="rounded-lg p-1 opacity-25 cursor-pointer transition duration-100 hover:border-4 hover:border-black hover:opacity-80 hover:border-opacity-80 hover:shadow-lg" />
          </div>
        </div>
      </section>
    </>
  );
}
