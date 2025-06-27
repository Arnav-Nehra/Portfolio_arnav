import { socials } from "@/lib/data";
import { Github, Linkedin, Twitter, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Intro({ className }: { className: string }) {
  return (
    <div className={`flex flex-col ml-96  ${className}`}>
      <Image
        className="rounded-full "
        width={150}
        height={150}
        src="/image.png"
        alt="profile"
      ></Image>
      <h1 className="font-raleway mt-10 text-5xl dark:text-white text-black font-semibold">
        Hi, I'm Arnav
      </h1>
      <div className="flex items-center mt-3">
        <h2 className="text-2xl font-normal italic">
          I &nbsp;
          <span className="text-red-400 ">love&nbsp;</span>
          building products that people
        </h2>
        <span className="text-2xl text-red-400 italic ">&nbsp;love</span>
        <Image
          src={"/heart2.svg"}
          width={10}
          height={10}
          className="ml-2 size-8"
          alt="heart"
        ></Image>
      </div>
      <div className="flex mt-10 items-center gap-4 cursor-pointer ">
        <Link href={socials.github}>
          <Github className=" "></Github>
        </Link>
        <Link href={socials.linkedin}>
          <Linkedin className=""></Linkedin>
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
      <h1 className="mt-28 font-bold text-3xl">Education</h1>
      <div className="flex justify-start items-center">
        <Image
          src="/jecrc.png"
          className="rounded-md mt-10"
          width={50}
          height={60}
          alt="college logo"
        ></Image>
        <div className="mt-10 ml-6">
          <h3 className="font-raleway font-semibold text-lg">
            B.Tech Computer Science & Engineering
          </h3>
          <h3 className="font-mono text-sm">JECRC University — (2022-2026)</h3>
        </div>
      </div>
    </div>
  );
}
