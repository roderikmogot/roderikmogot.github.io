import Image from "next/image";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

const PortfolioBox = ({ img, title, description, children }) => {
  return (
    <div className="relative">
      <a className="absolute inset-0 z-10 bg-black text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-80 duration-300">
        <div className="font-bold text-white text-md lg:text-2xl">{title}</div>
        <p className="p-4 mx-auto text-slate-400 text-xs lg:text-sm">{description}</p>
        {children}
      </a>
      <a href="#" className="relative max-w-full">
        <div className="h-full flex flex-wrap content-center">
          <Image src={img} className="object-fill" alt={title} />
        </div>
      </a>
    </div>
  );
};

export default PortfolioBox;
