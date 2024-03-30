"use client"
import Link from "next/link"
import { HomeIcon } from "@heroicons/react/24/outline";
import NavLinks from "./NavLinks";

const Sidebar = () => {
    return (
        <div>
         <Link href="/store" className='flex justify-start items-end bg-cyan-500 rounded-md p-4 text-white transition-all hover:bg-fuchsia-500 duration-300  h-20'>Home
        <div className="w-32 md:40">
        <HomeIcon className="h-6 w-6 text-white" />
        </div>
        </Link>
         <NavLinks></NavLinks>
         <form >
            <button>Sign Out</button>
         </form>
        </div>
    );
};

export default Sidebar;