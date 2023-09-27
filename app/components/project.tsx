import Image from 'next/image'

import quote from "/public/quote.png";
import Link from 'next/link';

import { StaticImageData } from "next/image"


interface ProjectProps {
  imageSrc: StaticImageData;
  title: string;
  platform: string;
  owner: string;
  quoteText: string;
  aboutText: string;
  link: string;
}

export default function Project({ imageSrc, title, platform, owner, quoteText, aboutText, link } : ProjectProps) {
  return (
    <div className='w-full md:h-[70vh] flex flex-row items-center'>

      {/* <div className='w-1/3 h-full flex-col justify-between px-10  bg-slate-600'>
        // <div className='flex-auto'>
        //   <p className='pb-3 shrink mb-2 text-3xl font-bold tracking-tight text-white'>{title}</p>
        //   <p className='py-1 shrink mb-2 text-md tracking-tight text-gray-400'>platform: {platform}</p>
        //   <p className='shrink mb-2 text-md tracking-tight text-gray-400'>owner: {owner}</p>
        // </div>
        
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col'>
            <div className='pt-14 mx-auto'>
              <Image
                className='py-6'
                height={80}
                src={quote}
                alt={'quote'}
              />
            </div>
            <p className='shrink mb-2 text-lg font- tracking-tight text-white text-center'>{quoteText}</p>
          </div>
        </div>

        <div className='flex justify-center'>
          <button type="button" className="w-2/3 mx-auto mt-20 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center">view site</button>
        </div>
      </div> */}

      <div className='w-1/3 h-full hidden md:flex flex-col justify-around bg-slate-600 bg-opacity-50 backdrop-blur-sm p-10 rounded-e-xl'>
        <div className='flex-auto'>
          <p className='pb-3 shrink mb-2 text-3xl font-bold tracking-tight text-white'>{title}</p>
          <p className='py-1 shrink mb-2 text-md tracking-tight text-orange-500'>platform: {platform}</p>
          <p className='shrink mb-2 text-md tracking-tight text-orange-500'>owner: {owner}</p>
        </div>

        <div className='flex flex-col justify-between'>
          <div className='flex flex-col'>
            <div className='pt-14 mx-auto'>
              <Image
                className='py-6'
                height={60}
                src={quote}
                alt={'quote'}
              />
            </div>
          <p className='pl-5 mb-2 text-lg font- tracking-tight text-white text-center'>{quoteText}</p>
        </div>
        </div> 

        <div className='flex justify-center'>
        <Link href="https://www.lymingtondecorating.com" target="_blank" rel="noopener noreferrer" className='w-full flex justify-center'>
            <button
              type="button"
              className="w-3/4 mt-5 mx-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center"> click here to view site
            </button>
          </Link>
        </div> 
    
      </div>

      <div className='w-full md:w-1/2 md:h-[70vh] flex-col justify-center items-center'>
        <div className='px-12 md:px-5 h-full flex justify-center items-center'>
          <Image
            className='shadow-[0_0_50px_0_#202020]'
            src={imageSrc}
            alt={title}
          />
        </div>
        <Link href="https://www.lymingtondecorating.com" target="_blank" rel="noopener noreferrer" className='w-full flex justify-center'>
            <button
              type="button"
              className="w-3/4 mb-8 mx-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-b-lg text-lg px-5 py-2.5 text-center"> click here to view site
            </button>
          </Link>
      </div>

      <div className='w-1/3 h-full hidden md:flex flex-col justify-around text-center bg-slate-600 bg-opacity-50 backdrop-blur-sm p-10 rounded-s-xl'>
        <p className='p-3 text-3xl font-bold tracking-tight text-white'>about</p>
        <p className='py-1 pr-5 mb-4 text-lg font- tracking-tight text-white'>{aboutText}</p>
      </div>
    </div>
    
  );
}
