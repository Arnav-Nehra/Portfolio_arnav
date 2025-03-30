import { DockDemo } from "@/components/Navbar2";
import ThemeToggler from "@/components/ThemeToggler";
import Intoduction from "@/components/Introduction";

import ProjectHeading from "@/components/ProjectHeading";
import { BoxRevealDemo } from "@/components/MyProjects";
import { DemoCard } from "@/components/DemoCard";
import { AnimatedBeamDemo } from "@/components/Tools";


export default function Home() {    
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 ">
      <div className="mt-28  justify-items-center"><Intoduction ></Intoduction></div>
      <div><ProjectHeading className="mt-20 mb-8 sm:mt-40" headingtitle="Skills" description={`I have a expertise in multiple libraries and frameworks,\n Here are some of them.`}/></div>
      <div><AnimatedBeamDemo/></div>
      <div><ProjectHeading className="mt-10 sm:mt-28 " headingtitle="My Projects" /></div>
      <div className="flex justify-center flex-row mt-20">
        <BoxRevealDemo></BoxRevealDemo>
        <DemoCard></DemoCard>
      </div>
    </div>
  );
}
