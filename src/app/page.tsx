'use client'
import Intro from "@/components/Intro";
import { Projects } from "@/components/Projects";
import ThemeToggle from "@/components/Toggledark";
export default function Home() {    
  return (
    
<div className="min-h-screen bg-white dark:bg-black">
        <div className="flex justify-end mt-14 mr-60"><ThemeToggle/></div>
        <Intro className="" />
        <Projects></Projects>
    </div>
  );
}