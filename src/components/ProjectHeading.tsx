import { SrvRecord } from "dns";
import { title } from "process";

interface ProjectHeadingProps {
    className?: string;
    headingtitle:string;
    description?:string;
  }
  
  export default function ProjectHeading({ className = "" , headingtitle,description}: ProjectHeadingProps) {
    return (
      <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white">
            {headingtitle}
          </h2>
          
          <div className="mt-2 h-1 w-20 bg-purple-500 rounded-full" />
          <p className="mt-7 text-lg whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>
    );
  }