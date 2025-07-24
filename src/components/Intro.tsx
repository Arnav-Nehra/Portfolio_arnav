import { socials } from "@/lib/data";
import { Github, Linkedin, Twitter, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./Toggledark";

export default function Intro({ className }: { className: string }) {
  return (
    <div className={`flex flex-col items-start md:ml-10 lg:ml-20 ${className} px-2 sm:px-4 w-full`}>
      <div className="w-full flex flex-row items-start justify-between">
        <Image
          className="rounded-full"
          width={140}
          height={140}
          src="/image.png"
          alt="profile"
          sizes="(max-width: 768px) 100px, 140px"
        />
        <div className="flex items-start justify-end sm:mr-60 w-full">
          <ThemeToggle />
        </div>
      </div>
      <h1 className="font-raleway mt-8 sm:mt-10 text-3xl sm:text-4xl md:text-5xl dark:text-white text-black font-semibold text-left">
        Hi, I'm Arnav
      </h1>
      <div className="flex flex-col sm:flex-row items-center mt-3 w-full">
        <h2 className="text-xl sm:text-2xl font-normal italic text-left w-full flex flex-wrap items-center">
          I <span className="text-red-400 mx-1">love</span> building products that people&nbsp; <span className="text-red-400 flex items-center">love
            <Image
              src={"/heart2.svg"}
              width={30}
              height={30}
              className="inline-block ml-2 mt-1"
              alt="heart"
            />
          </span>
        </h2>
      </div>
      <div className="flex mt-8 sm:mt-10 items-center gap-4 cursor-pointer">
        <Link href={socials.github}>
          <Github />
        </Link>
        <Link href={socials.linkedin}>
          <Linkedin />
        </Link>
        <Link href={socials.X}>
          <span className="text-black dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 50 50"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
            </svg>
          </span>
        </Link>
      </div>
      <h1 className="mt-16 sm:mt-20 font-bold text-2xl sm:text-3xl text-left">Education</h1>
      <div className="flex flex-row justify-start items-center w-full mt-6">
        <Image
          src="/jecrc.png"
          className="rounded-md mt-4 sm:mt-10"
          width={50}
          height={40}
          alt="college logo"
        />
        <div className="mt-4 sm:mt-10 ml-4 text-left">
          <h3 className="font-raleway font-semibold text-base sm:text-lg">
            B.Tech Computer Science & Engineering
          </h3>
          <h3 className="font-mono text-xs sm:text-sm">JECRC University — (2022-2026)</h3>
        </div>
      </div>
    </div>
  );
}
