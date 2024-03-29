import backgroundImg from '../../public/home-bg/next-book-store-bg.jpg'
import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
   <div className='flex flex-col justify-center items-center relative h-screen'>
    <Image src={backgroundImg} alt='background-img' className='blur-sm' fill sizes='100vw' style={{objectFit:"cover"}}></Image>
    <div className='flex flex-col justify-center items-center z-10 bg-green-400 p-5 rounded-md lg:w-2/5 h-1/4 space-y-5'>
      <div>
        <p className='text-3xl font-semibold text-white'>Next Book Store</p>
      </div>
      <div className='bg-cyan-500 rounded-md p-2 text-white hover:scale-110 transition-all hover:bg-fuchsia-500 duration-300'>
      <Link href="/allBooks">Explore With Us</Link>
      </div>
    </div>
   </div>
  );
}
