import Roderik from "../public/roderik.png";
import BOC from "../public/boc.jpeg";
import Sukaido from "../public/sukaido.png";
import Qiurio from "../public/qiurio.png";
import Salabite from "../public/salabite.png";
import PandaMe from "../public/pandame.png";
import LastFM from "../public/last-fm.png";
import PortfolioBox from "../components/PortfolioBox";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import {
  FaAngleDown,
  FaArrowDown,
  FaArrowRight,
  FaDiscord,
  FaGithub,
  FaKaggle,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiPython,
  SiTypescript,
  SiGithub,
  SiFigma,
  SiDribbble,
  SiJavascript,
  SiWhatsapp,
  SiGmail,
  SiLinkedin,
  SiKaggle,
  SiDiscord,
  SiVercel,
} from "react-icons/si";

export default function Home() {
  return (
    <>
      <Head>
        <title>Roderik Mogot</title>
        <meta name="description" content="Roderik Mogot - Portfolio" />
        <link rel="icon" href="/jug.jpeg" />
      </Head>
      {/* Hero */}
      <section
        className="h-screen w-screen bg-black text-white p-4 flex flex-col
      justify-center items-center lg:flex-row lg:gap-4 lg:w-auto"
      >
        <Image src={Roderik} alt="Roderik Mogot" />
        <div className="h-50 mt-4 mx-auto text-center lg:flex lg:flex-col lg:text-left lg:mx-0 lg:gap-2">
          <div className="font-bold text-2xl text-white lg:text-8xl">
            Hi! I Am <br />
            <span className="font-black text-red-400 p-1 w-fit rounded-md transition ease-in-out duration-700">
              Roderik Mogot!
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
          majoring the computer science field. I&apos;m currently having an
          internship{" "}
          <span className="bg-blue-700 text-red-400 p-1 font-bold w-fit rounded-md transition ease-in-out duration-700 hover:shadow-lg">
            <Link href="https://bca.co.id" passHref>
              <a target="_blank" rel="noopener noreferrer">
                @BCA
              </a>
            </Link>
          </span>{" "}
          as an Application Developer. I&#39;m also familiar with Python&#39;s
          known data science libraries like NumPy, pandas, TensorFlow, and
          scikit-learn. I also do web development using React and web design as
          well.
        </div>
        <div className="p-8 hidden lg:grid lg:grid-cols-2 lg:gap-20 lg:mx-auto lg:w-full lg:h-full">
          <div className="flex items-center justify-center">
            <SiPython className="text-8xl opacity-25 transition duration-100 hover:opacity-80" />
          </div>
          <div className="flex items-center justify-center">
            <SiJavascript className="text-8xl opacity-25 transition duration-100 hover:opacity-80" />
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="w-auto py-4 bg-black text-white flex flex-col lg:flex-row lg:justify-center lg:w-auto lg:px-20 lg:py-8 lg:h-96 lg:gap-12">
        <div className="p-4 leading-relaxed text-white font-bold text-4xl lg:text-8xl lg:max-w-2xl lg:leading-8 lg:flex lg:justify-center lg:items-center">
          <div className="not-italic font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-700 to-red-400 lg:text-8xl">
            Experiences.
          </div>
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
            <div className="italic text-slate-200 text-opacity-30 lg:text-xl lg:text-center">
              03/18 - 05/18
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="w-auto text-white bg-black flex flex-col lg:w-full lg:px-20 lg:py-8">
        <div className="p-4 leading-relaxed font-bold text-4xl lg:text-8xl lg:max-w-2xl text-black">
          <div className="not-italic font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-700 to-red-400 lg:text-8xl">
            Portfolio.
          </div>
        </div>
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1">
          <PortfolioBox
            img={Sukaido}
            title="Sukaido"
            link="test"
            useWhiteBg
            description="Created a full-stack React and Express web application that could
            create, store and cancel orders, also the ability to select, edit,
            view and delete menu items. This application is being used as a
            primary system to accept and view orders from customers. The
            design was created by a friend of mine, Yovanka."
          ></PortfolioBox>
          <PortfolioBox
            img={Qiurio}
            title="Qiurio Visuals"
            description="Created a portfolio website for an agency based in Bali."
            useWhiteBg
          >
            <div className="flex flex-row gap-2 mt-2">
              <Link href="https://qiurio.vercel.app" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <button className="flex justify-center items-center gap-2 font-bold text-sm bg-primary text-whites p-2 rounded-md transition ease-in-out duration-150 hover:shadow-white hover:shadow-md lg:text-md lg:p-3">
                    See site
                    <span className="inline-block">
                      <FaArrowRight />
                    </span>
                  </button>
                </a>
              </Link>
            </div>
          </PortfolioBox>
          <PortfolioBox
            img={Salabite}
            title="Salabite"
            useWhiteBg
            description="A side project of mine to see the growth of COVID-19 globally."
          >
            <div className="flex flex-row gap-2 mt-2">
              <Link href="https://salabite.vercel.app" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <button className="flex justify-center items-center gap-2 font-bold text-sm bg-primary text-whites p-2 rounded-md transition ease-in-out duration-150 hover:shadow-white hover:shadow-md lg:text-md lg:p-3">
                    See site
                    <span className="inline-block">
                      <FaArrowRight />
                    </span>
                  </button>
                </a>
              </Link>
            </div>
          </PortfolioBox>
          <PortfolioBox
            img={LastFM}
            title="Last FM"
            useWhiteBg
            description="A fun project of mine to display top musicians and songs as well as a search feature to search for artists and songs."
          >
            <div className="flex flex-row gap-2 mt-2">
              <Link href="https://last-fm-two.vercel.app" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <button className="flex justify-center items-center gap-2 font-bold text-sm bg-primary text-whites p-2 rounded-md transition ease-in-out duration-150 hover:shadow-white hover:shadow-md lg:text-md lg:p-3">
                    See site
                    <span className="inline-block">
                      <FaArrowRight />
                    </span>
                  </button>
                </a>
              </Link>
            </div>
          </PortfolioBox>
          <PortfolioBox
            img={PandaMe}
            title="PandaMe"
            description="A web design project. Designed by Masud Rana."
          >
            <div className="flex flex-row gap-2 mt-2">
              <Link href="https://pandame.vercel.app" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <button className="flex justify-center items-center gap-2 font-bold text-sm bg-primary text-whites p-2 rounded-md transition ease-in-out duration-150 hover:shadow-white hover:shadow-md lg:text-md lg:p-3">
                    See site
                    <span className="inline-block">
                      <FaArrowRight />
                    </span>
                  </button>
                </a>
              </Link>
              <Link
                href="https://dribbble.com/shots/17351286-Fruit-Food-Delivery-Landing-Page"
                passHref
              >
                <a target="_blank" rel="noopener noreferrer">
                  <button className="flex justify-center items-center gap-2 font-bold text-sm bg-[#EA4492] text-whites p-2 rounded-md transition ease-in-out duration-150 hover:shadow-white hover:shadow-md lg:text-md lg:p-3">
                    Dribbble
                    <span className="inline-block">
                      <SiDribbble />
                    </span>
                  </button>
                </a>
              </Link>
            </div>
          </PortfolioBox>
        </div>
      </section>

      {/* Reach Me Out */}
      <section className="w-auto py-4 bg-black text-white flex flex-col lg:flex-row lg:justify-between lg:w-auto lg:px-20 lg:py-8 lg:h-96 lg:gap-12">
        <div className="p-4 font-bold text-4xl lg:text-8xl lg:flex lg:justify-center lg:items-center">
          <div className="not-italic font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-700 to-red-400 lg:text-8xl">
            Reach Me.
          </div>
        </div>
        <div className="mx-4 mb-2 flex flex-row justify-left items-center gap-4  lg:mx-auto lg:justify-evenly md:w-1/2">
          <div className="text-6xl lg:text-8xl">
            <Link href="mailto:roderikmogot17@gmail.com" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <SiGmail className="rounded-lg p-1 opacity-25 cursor-pointer transition duration-100 hover:opacity-80 hover:border-opacity-80 hover:shadow-lg" />
              </a>
            </Link>
          </div>
          <div className="text-6xl lg:text-8xl">
            <Link href="https://www.linkedin.com/in/roderikmogot/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="rounded-lg p-1 opacity-25 cursor-pointer transition duration-100 hover:opacity-80 hover:border-opacity-80 hover:shadow-lg" />
              </a>
            </Link>
          </div>
          <div className="text-6xl lg:text-8xl">
            <Link href="https://wa.me/6281246591979" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="rounded-lg p-1 opacity-25 cursor-pointer transition duration-100 hover:opacity-80 hover:border-opacity-80 hover:shadow-lg" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
