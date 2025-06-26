import Intro from "@/components/Intro";
import { Projects } from "@/components/Projects";

export default function Home() {    
  return (
    <div className="min-h-screen bg-black text-white">
        <Intro className="" />
        <Projects></Projects>
    </div>
  );
}