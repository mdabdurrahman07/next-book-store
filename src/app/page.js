import backgroundImg from '../../public/home-bg/next-book-store-bg.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { BookOpenIcon } from "@heroicons/react/24/outline";
export default function Home() {
  return (
   <div className='flex flex-col justify-center items-center relative h-screen'>
    <Image src={backgroundImg} alt='background-img' className='blur-sm' fill sizes='100vw' style={{objectFit:"cover"}} ></Image>
    <div className='flex flex-col justify-center items-center z-10 bg-transparent border-4 border-teal-500  p-5 rounded-md lg:w-2/5 h-1/4 space-y-5'>
      <div className='flex items-center gap-3'>
      <BookOpenIcon class="h-8 w-8 text-white"/>
        <p className='text-4xl font-semibold text-white'>
         Next Book Store</p>
      </div>
      <div className='bg-cyan-500 rounded-md p-2 text-white hover:scale-110 transition-all hover:bg-fuchsia-500 duration-300'>
      <Link href="/store">Explore With Us</Link>
      </div>
    </div>
    
   </div>
  );
}
