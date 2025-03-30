import Image from "next/image";
import Link from "next/link";

interface IntroductionProps {
  className?: string;
}

export default function Introduction({ className = "" }: IntroductionProps) {
  return (
    <section className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 mb-4 sm:mb-6 ${className}`}>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
        <div className="text-center sm:text-left space-y-4">
          <p className="font-main font-light text-xl sm:text-2xl">
            Hi I'm <span className="text-violet-800 font-medium dark:text-violet-400">Arnav Nehra</span>
          </p>
          <div className="text-3xl sm:text-4xl">
            <span>A </span>
            <span className="font-inter font-bold text-green-400">
              full-stack
            </span>
            <span> engineer</span>
          </div>
          <div className="hidden sm:block dark:text-gray-200 text-gray-800 font-main font-normal text-lg sm:text-xl space-y-2">
            <p>Developer, OSS contributor, Always building</p>
            <p>and learning, I travel and play guitar for fun.</p>
            <p className="mt-10">Currently a cs undergrad <Link href="https://jecrcuniversity.edu.in" className="text-violet-800 dark:text-violet-400 hover:underline">@JU</Link></p>
          </div>
          <div className=" sm:hidden dark:text-gray-200 text-gray-800 font-main font-normal text-lg sm:text-xl space-y-2">
            <p>Developer, OSS contributor</p>
             <p>
            Currently a cs undergrad <Link href="https://jecrcuniversity.edu.in" className="text-violet-800 dark:text-violet-400 hover:underline">@JU</Link></p>
          </div>
        </div>
        <div className="relative w-30 h-30 sm:w-48 sm:h-48 sm:block">
          <Image
            className="rounded-full object-cover"
            fill
            alt="Arnav Nehra"
            src="/arnav2.jpg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
