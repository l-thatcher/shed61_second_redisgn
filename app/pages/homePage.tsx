'use client'
//a home page for the website with a large hero image at the top and a grey blue background

import Image from 'next/image'
import Link from 'next/link';
import React, { useRef } from 'react'


import heroPNG from "/public/heroImage.png";

import background from "/public/layers/Background.png";
import bottom from "/public/layers/bottom.png";
import fish_planet from "/public/layers/fish_planet.png";
import man from "/public/layers/man.png";
import moon from "/public/layers/moon.png";
import sky from "/public/layers/sky.png";
import underwaterdot from "/public/layers/underwaterdot.png";

import logo from "/public/logo-white.png";


import planets from "/public/planets.png";


import codeFree from "/public/codefreeimg.png";
import mobile from "/public/mobileimg.png";
import bespoke from "/public/bespokeimg.png";
import ai from "/public/aiimg.png";



import {Parallax, ParallaxLayer, IParallax} from '@react-spring/parallax';


import Navbar from '../components/navbar';
import Services from '../components/services'
import { start } from 'repl';


export default function HomePage() {
  const parallax = useRef<IParallax>(null!)


  return (
    <main className="bg-[#272B4A]">
      <div className='z-10 fixed w-full'>
        <div>
          <nav className="sticky -top-1 bg-[#232E4D] flex flex-col">
            <div className="container mx-auto h-20">
              <ul className="flex items-center justify-around h-full">
                <li>
                  <p className="text-white text-md font-w200"  onClick={() => parallax.current.scrollTo(0.9)}>home</p>
                </li>
                <li >
                  <p className="text-white text-md font-w300" onClick={() => parallax.current.scrollTo(1.4)}>services</p>
                </li>

                <li>
                  <div>
                  <Image className=''
                      priority
                      src={logo}
                      alt="logo"
                      height={120}
                    />
                  </div>
                </li>

                <li>
                  <Link href="/about">
                    <p className="text-white text-md font-w400">about</p>
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio">
                    <p className="text-white text-md font-w500">portfolio</p>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="flex justify-center h-screen">
        <Parallax ref={parallax} pages={5}>
          <ParallaxLayer offset={0} speed={0.1}>
            <Image className=''
                priority
                src={sky}
                alt="Sky"
              />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.4}>
            <Image className=''
              priority
              src={moon}
              alt="Moon"
            />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.2}>
            <Image className=''
            priority
            src={man}
            alt="man"
            />
          </ParallaxLayer>
          
          <ParallaxLayer offset={0} speed={0.4}>
            <Image className=''
            priority
            src={bottom}
            alt="bottom"
            />
          </ParallaxLayer>
          
          <ParallaxLayer offset={0} speed={0.6}>
            <Image className=''
              priority
              src={fish_planet}
              alt="=fish planet"
            />
          </ParallaxLayer>
          
          <ParallaxLayer offset={0} speed={1}>
            <Image className=''
              priority
              src={underwaterdot}
              alt="water dots"
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.1}>
          <div className='flex justify-center'>
              <Image className=''
                  priority
                  src={logo}
                  alt="logo"
                  height={200}
                />
          </div>
          <div>
              <div className="text-center px-[30vw]">
                <h2 className="text-3xl text-white">professional website</h2>
                <h2 className="text-3xl text-white">and software development</h2>
                <p className="text-md text-white p-4">As a web developer, my mission is to create captivating, user-friendly websites that leave a 
                lasting impression. With a focus on stunning design and seamless functionality, I aim to exceed client expectations and eliminate any 
                worries they may have. By blending technical expertise with a keen eye for aesthetics, I deliver worry-free experiences, empowering 
                clients to focus on their core objectives while I craft their exceptional online presence.</p>
                <button className="rounded-full bg-slate-50 text-[#272B4A] p-2 text-md hover:bg-slate-300">get in touch</button>
              </div>
              <div>
                <Services></Services>
              </div>
              
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0}>
            <Image className=''
              priority
              src={planets}
              alt="planets"
            />
          </ParallaxLayer>

          <ParallaxLayer speed={0} sticky={{start: 2.25, end:3.55}}>
            <div className="w-full flex justify-start h-screen items-center">
              <div className=' w-[40vw] h-[85vh] flex flex-col justify-around items-center'>

                <div className='p-1'>
                  <div onClick={() => parallax.current.scrollTo(2.25)} className="flex flex-col items-center bg-white rounded-xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={codeFree} alt="code free development"></Image>
                      <div className="flex flex-col justify-between p-4 leading-normal">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">code free website design</h5>
                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      </div>
                  </div>
                </div>

                <div className='p-1'>
                  <div onClick={() => parallax.current.scrollTo(2.65)} className=" flex flex-col items-center bg-white rounded-xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={mobile} alt="code free development"></Image>
                      <div className="flex flex-col justify-between p-4 leading-normal">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">mobile app development</h5>
                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      </div>
                  </div>
                </div>

                <div className='p-1'>
                  <div onClick={() => parallax.current.scrollTo(3.1)} className=" flex flex-col items-center bg-white rounded-xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={bespoke} alt="code free development"></Image>
                      <div className="flex flex-col justify-between p-4 leading-normal">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">bespoke coded websits</h5>
                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      </div>
                  </div>
                </div>

                <div className='p-1'>
                  <div onClick={() => parallax.current.scrollTo(3.55)} className=" flex flex-col items-center bg-white rounded-xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={ai} alt="ai assisted workflows"></Image>
                      <div className="flex flex-col justify-between p-4 leading-normal">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ai assisted workflows</h5>
                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2.4} speed={0.2} id='services'>
            <div className="w-full flex justify-end">
              <div className='w-[60vw] p-20'>
                <div className=" mb-10 h-[50vh] block p-6 bg-white rounded-lg  shadow-[#ED4395] hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>

                <div className=" mb-10 h-[50vh] block p-6 bg-white  shadow-[#FDC6D6] rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>

                <div className=" mb-10 h-[50vh] block p-6 bg-white  shadow-[#2F1246] rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>

                <div className="h-[50vh] block p-6 bg-white  shadow-[#F95A39] rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
              </div>
            </div>
          </ParallaxLayer>

        </Parallax>
      </div>
    </main>
  )
}