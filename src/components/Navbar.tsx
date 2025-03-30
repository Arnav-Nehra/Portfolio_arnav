import ThemeToggler from "./ThemeToggler";
import { Button } from "./ui/button";
export default function Navbar(){
    return <div className="flex">
        <div className="sizecursor-pointer mr-100 w-fit flex rounded-full px-3 text-sm font-medium"><ThemeToggler></ThemeToggler></div>
    <div className="w-fit flex rounded-lg bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10">
        <Button variant="link" className="text-md text-black dark:hover:text-blue-500 dark:text-white hover:text-blue-500 cursor-pointer">Home</Button>
        <Button variant="link" className="text-md text-black  dark:hover:text-blue-500 dark:text-white hover:text-blue-500 cursor-pointer">Projects</Button>
        <Button  variant="link" className="text-md text-black  dark:hover:text-blue-500 dark:text-white hover:text-blue-500 cursor-pointer">Blogs</Button>
    </div>
    </div>
}