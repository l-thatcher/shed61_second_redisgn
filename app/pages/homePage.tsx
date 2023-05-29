'use client'
//a home page for the website with a large hero image at the top and a grey blue background

import Image from 'next/image'

import heroPNG from "/public/heroImage.png";

import background from "/public/layers/Background.png";
import bottom from "/public/layers/bottom.png";
import fish_planet from "/public/layers/fish_planet.png";
import man from "/public/layers/man.png";
import moon from "/public/layers/moon.png";
import sky from "/public/layers/sky.png";
import underwaterdot from "/public/layers/underwaterdot.png";

import logo from "/public/logo.png";


import {Parallax, ParallaxLayer} from '@react-spring/parallax';


import Navbar from '../components/navbar';
import Services from '../components/services'
import { start } from 'repl';


export default function HomePage() {

  type StickyConfig = { start?: number; end?: number } | undefined

  return (
    <main className="bg-[#272B4A]">
      <div className="flex justify-center h-screen">
        <Parallax pages={2}>
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

          <ParallaxLayer offset={0.05} sticky={{start: 0, end: 0.05}}>
            <div className='flex-col justify-center'>
              <p className='text-center text-3xl p-4'>web and sotware development</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={0.9} speed={0.1}>
          <div>
              <div className="text-center px-[30vw]">
                <h2 className="text-2xl text-white">professional website</h2>
                <h2 className="text-2xl text-white">and software development</h2>
                <p className="text-md text-white p-4">As a web developer, my mission is to create captivating, user-friendly websites that leave a 
                lasting impression. With a focus on stunning design and seamless functionality, I aim to exceed client expectations and eliminate any 
                worries they may have. By blending technical expertise with a keen eye for aesthetics, I deliver worry-free experiences, empowering 
                clients to focus on their core objectives while I craft their exceptional online presence.</p>
                <button className="rounded-full bg-slate-50 text-[#272B4A] p-2 text-md hover:bg-slate-300">get in touch</button>
              </div>
              <Services></Services>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </main>
  )
}