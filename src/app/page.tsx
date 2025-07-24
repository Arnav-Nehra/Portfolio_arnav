'use client'
import Intro from "@/components/Intro";
import { Projects } from "@/components/Projects";
import ThemeToggle from "@/components/Toggledark";

export default function Home() {    
  return (
    <div className="min-h-screen bg-white dark:bg-black px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60">
      <div className="flex flex-row items-start justify-end mt-6 mb-4 w-full">
        
      </div>
      <Intro className="" />
      <Projects />
    </div>
  );
}