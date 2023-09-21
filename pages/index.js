import PortfolioBox from "../components/PortfolioBox";
import BCA from "../public/bca.jpeg";
import BOC from "../public/boc.jpeg";
import DesaPecatu from "../public/desa_pecatu.jpeg";
import Jageo from "../public/jageo.png";
import LastFM from "../public/last-fm.png";
import PandaMe from "../public/pandame.png";
import Qiurio from "../public/qiurio.png";
import Roderik from "../public/roderik.png";
import Salabite from "../public/salabite.png";
import Salamoal from "../public/salamoal.jpeg";
import Serviso from "../public/serviso.jpg";
import Sukaido from "../public/sukaido.png";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import {
  FaArrowRight,
  FaLinkedin
} from "react-icons/fa";
import {
  SiDribbble,
  SiFigma,
  SiGmail,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiWhatsapp
} from "react-icons/si";

export default function Home() {
  return (
    <>
      <Head>
        <title>Roderik Mogot</title>
        <meta name="description" content="Roderik Mogot - Portfolio" />
        <link rel="icon" href="/roderik.png" />
        <meta property="og:title" content="Roderik Mogot" />
        <meta property="og:description" content="Portfolio of Roderik Mogot" />
        <meta property="og:image" content="https://roderikmogot.github.io" />
        <meta property="og:url" content="https://roderikmogot.github.io/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`{
              "@context": "https://roderikmogot.github.io/",
              "@type": "website",
              "name": "Roderik Mogot",
              "url": "https://roderikmogot.github.io/",
              "description": "Portfolio of Roderik Mogot"
          } `}
        </script>
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
      <section className="w-auto py-4 items-center bg-black text-white lg:w-auto lg:flex lg:flex-row lg:justify-between lg:px-20 lg:py-8 lg:gap-20">
        <div className="p-4 leading-relaxed italic text-slate-100 lg:text-xl lg:max-w-2xl lg:leading-8 w-full">
          <div className="not-italic font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-700 to-red-400 lg:text-8xl">
            About Me.
          </div>
          Greetings, I&apos;m Roderik. Throughout my academic path,
          I have focused on developing my expertise in data science and web
          development. I have practical knowledge in constructing web design
          portfolios and developing comprehensive progressive web applications.
            
          <div className="mt-5">
            I am always open to explore new opportunities in web development and
            data science projects. If you have any inquiries, feel free to reach
            out to me through my social media or email, which I will be happy to
            provide.
          </div>
        </div>
        <div className="p-8 hidden lg:grid lg:grid-cols-3 lg:gap-16 lg:mx-auto lg:w-full lg:h-full">
          <div className="flex items-center justify-center">
            <SiPython className="text-8xl opacity-25 transition duration-100 hover:opacity-80" />
          </div>
          <div className="flex items-center justify-center">
            <SiReact className="text-8xl opacity-25 transition duration-100 hover:opacity-80" />
          </div>
          <div className="flex items-center justify-center">
            <SiTailwindcss className="text-8xl opacity-25 transition duration-100 hover:opacity-80" />
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="w-auto py-4 bg-black text-white flex flex-col lg:flex-row lg:justify-center lg:w-auto lg:px-20 lg:py-8 lg:h-96 lg:gap-12">
        <div className="section-header">
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

        {/* BCA */}
        <div className="ml-4 mb-4 flex justify-left items-center gap-4 lg:justify-center lg:mx-auto lg:flex-col lg:w-full lg:h-full">
          <div className="w-16 h-16 lg:w-24 lg:h-24 lg:relative">
            <Image
              src={BCA}
              alt="Bank Central Asia"
              className="rounded-3xl lg:object-fill lg:bg-cover"
            />
          </div>
          <div>
            <div className="font-bold text-md lg:text-2xl lg:text-center">
              Bank Central Asia
            </div>
            <div className="lg:text-xl lg:text-center">
              Application Developer - Web
            </div>
            <div className="italic text-slate-200 text-opacity-30 lg:text-xl lg:text-center">
              09/22 - Present
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="w-auto py-4 bg-black text-white flex flex-col lg:justify-center lg:w-auto lg:py-8">
        <div className="section-header-2">
          <div className="not-italic font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-700 to-red-400 lg:text-8xl">
            Portfolio.
          </div>
        </div>
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1">
          <PortfolioBox
            img={DesaPecatu}
            title="Sistem Informasi Desa Pecatu"
            description="Created a website for Desa Pecatu to provide information for the people of Desa Pecatu. The website aims to be a central hub of information for the community, featuring updates and news on local events, government services, community resources, and other relevant information. Through this website, residents of Desa Pecatu can easily access and stay up-to-date on important news and events within their community. I also preprocessed ~9000 population data to adapt to Desa Pecatu's Information System."
            useWhiteBg
          >
            <div className="flex flex-row gap-2 mt-2">
              <Link href="https://desapecatu.id" passHref>
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
            img={Sukaido}
            title="Sukaido"
            link="test"
            useWhiteBg
            description="Developed a comprehensive, full-stack web application utilizing React and Express technologies, which enables seamless creation, storage, and cancellation of orders. The application also provides a user-friendly interface for selecting, editing, viewing, and deleting menu items, making it the primary system for accepting and managing customer orders. The visually appealing design of the application was created by my colleague, Yovanka."
          />
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
            img={Serviso}
            title="serviso.id"
            useWhiteBg
            description="A simple mockup of an Online Electronic Service Booking Platform."
          >
            <div className="flex flex-row gap-2 mt-2">
              <Link
                href="https://www.figma.com/file/c5BMDi69moHsMpJG1EtWue/serviso.id?node-id=1%3A2&t=ux03Bjtsfloez4Ia-0"
                passHref
              >
                <a target="_blank" rel="noopener noreferrer">
                  <button className="flex justify-center items-center gap-2 font-bold text-sm bg-white text-[#167FFC] p-2 rounded-md transition ease-in-out duration-150 hover:shadow-[#167FFC] hover:shadow-md lg:text-md lg:p-3">
                    Figma
                    <span className="inline-block">
                      <SiFigma />
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
          <PortfolioBox
            img={Salamoal}
            title="Salamoal"
            description="A web design project. Designed by Ghulam Rasool."
          >
            <div className="flex flex-row gap-2 mt-2">
              <Link href="https://salamoal.vercel.app" passHref>
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
                href="https://dribbble.com/shots/18968094-Accounting-Dashboard-Design"
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
          <PortfolioBox
            img={Jageo}
            title="Jageo"
            description="A web design project. Designed by Yogie Ismanda."
          >
            <div className="flex flex-row gap-2 mt-2">
              <Link href="https://jageo.vercel.app" passHref>
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
                href="https://dribbble.com/shots/19222711-Beehome-Real-estate-website"
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
