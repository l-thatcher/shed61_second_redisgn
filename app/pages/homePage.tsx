'use client'
//a home page for the website with a large hero image at the top and a grey blue background

import Image from 'next/image'
import Link from 'next/link';
import React, { useRef } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Parallax, ParallaxLayer, IParallax} from '@react-spring/parallax';
import ContactForm from '../components/contactForm';
import { motion } from "framer-motion"

import heroPNG from "/public/heroImage.png";

import background from "/public/layers/Background.png";
import bottom from "/public/layers/bottom.png";
import fish_planet from "/public/layers/fish_planet.png";
import man from "/public/layers/shed.png";
import moon from "/public/layers/moon.png";
import sky from "/public/layers/sky.png";
import underwaterdot from "/public/layers/underwaterdot.png";

import logo from "/public/logo-white.png";


import planets from "/public/planets.png";


import codeFree from "/public/codefreeimg.png";
import mobile from "/public/mobileimg.png";
import bespoke from "/public/bespokeimg.png";
import ai from "/public/aiimg.png";

import projectsbg from "/public/projectsbg4.png";

import paintingByNumbers from "/public/paintingByNumbersHome.png";
import forestPilates from "/public/forestPilatesHome.png";




import Navbar from '../components/navbar';
import Services from '../components/services'
import { start } from 'repl';
import Project from '../components/project';
import { link } from 'fs';


import layer1 from "/public/about-layers/layer1.png";
import layer2 from "/public/about-layers/layer2.png";
import layer3 from "/public/about-layers/layer3.png";
import layer4 from "/public/about-layers/layer4.png";
import layer5 from "/public/about-layers/layer5.png";

import portrait from "/public/portrait.jpg";

import contactBG from "/public/00003.png";



const paintingByNumbersData = {
  imageSrc: paintingByNumbers,
  title: 'painting by numbers',
  platform: 'wix',
  owner: 'paul',
  quoteText: 'Louis has done a great job of bringing my old business website out of the dark ages, I am so pleased with the results. He has provided me with clear advice throughout without ever confusing me with technical jargon. I cannot recommend his services highly enough.',
  aboutText: "Developing a painting and decorating site using Wix has was an efficient and rewarding experience. In around 10 hours, I was created a visually stunning website that perfectly showcased the client's expertise and past projects. With Wix's user-friendly interface and intuitive drag-and-drop tools, the client is able to upload new projects as and when they like without my help. The platform has pre-built templates, and Wix's seamless integration with various third-party applications and plugins further enhanced the functionality of the website, providing a seamless browsing experience for visitors. Overall, I was able to deliver a remarkable painting and decorating site efficiently and effectively that the client was very happy with.",
  link: 'https://www.lymingtondecorating.com'
};

const forestPilatesData = {
  imageSrc: forestPilates,
  title: 'forest pilates',
  platform: 'squarespace',
  owner: 'lynda',
  quoteText: "I would highly recommend Shed61 - I run a small business in the New Forest and needed to update and tweak my website. Louis was able to take my mind map of ideas and form them into a cohesive website solution. His patient and consultative manner made what I had avoided for far to long into a painless and dare I say it enjoyable experience! He took my old outdated looking website and modernised its appearance and functionality.",
  aboutText: "I recently had the pleasure of using SquareSpace to redesign a Pilates website for a client, and the outcome exceeded expectations. By harnessing the platform's intuitive interface and a wide range of customizable templates, I transformed their outdated site into a visually captivating and user-friendly platform. The new design not only enhanced the aesthetics but also improved functionality, making it easier for visitors to navigate and explore the various Pilates offerings. The client was thrilled with the result as the revamped website attracted more visitors and ultimately led to an increase in client inquiries and business growth. SquareSpace proved to be an invaluable tool in helping me deliver exceptional results for my client's Pilates business.",
  link: 'https://www.forestpilates.co.uk/'
};

export default function HomePage() {
  const parallax = useRef<IParallax>(null!)

  return (
    <main className="bg-[#272B4A]">
      <div className='z-10 fixed w-full'>
        <div>
          <nav className="hidden sticky -top-1 bg-[#232E4D] md:flex flex-col">
            <div className="container mx-auto h-20">
              <ul className="flex items-center justify-around h-full">
                {/* <li>
                  <p className="text-white text-md font-w200"  onClick={() => parallax.current.scrollTo(0.9)}>home</p>
                </li> */}
                <li >
                  <p className="text-white text-md font-w300" onClick={() => parallax.current.scrollTo(1.4)}>services</p>
                </li>
                <li >
                  <p className="text-white text-md font-w300" onClick={() => parallax.current.scrollTo(4.4)}>portfolio</p>
                </li>

                <li>
                  <div onClick={() => parallax.current.scrollTo(0.9)}>
                    <Image className=''
                      priority
                      src={logo}
                      alt="logo"
                      height={120}
                    />
                  </div>
                </li>

                <li>
                  <p className="text-white text-md font-w400" onClick={() => parallax.current.scrollTo(5.4)}>about</p>
                </li>
                <li>
                  <p className="text-white text-md font-w400" onClick={() => parallax.current.scrollTo(6.5)}>contact</p>
                </li>
                {/* <li>
                  <Link href="/portfolio">
                    <p className="text-white text-md font-w500">h47</p>
                  </Link>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="flex justify-center h-screen">
        <Parallax ref={parallax} pages={window.innerWidth < 768 ? 7.3 : 7.45}>
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

          <ParallaxLayer offset={window.innerWidth < 768 ? 0.3 : 1} speed={0.1}>
          <div className='flex justify-center'>
              <Image className=''
                  priority
                  src={logo}
                  alt="logo"
                  height={200}
                />
          </div>
          <div>
              <div className="text-center md:px-[30vw]">
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

          <ParallaxLayer offset={window.innerWidth < 768 ? 1.4 : 2} speed={0}>
            <Image className='hidden md:flex'
              priority
              src={planets}
              alt="planets"
            />
          </ParallaxLayer>

                  
          <ParallaxLayer speed={0} sticky={{start: 2.25, end:3.55}}>
            <div className="w-full hidden md:flex justify-start h-screen items-center">
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
            <div className="hidden w-full md:flex justify-end">
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

          <ParallaxLayer offset={window.innerWidth < 768 ? 3.9 : 4.5} speed={0} id='projects'> 
          <Image className='w-full'
                priority
                src={projectsbg}
                alt="projectsBG"
              />
          </ParallaxLayer>

          <ParallaxLayer offset={window.innerWidth < 768 ? 3.7 : 4.6} speed={0.2}>
            <div className='w-full text-center'>
                <h1 className='text-5xl text-white py-10'>what we&apos;ve done</h1>
            </div>
            
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false}
            renderArrowPrev={(clickHandler, hasPrev) => {
              return (
                <div
                  className={`${
                    hasPrev ? "absolute" : "hidden"
                  } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20 text-white text-2xl`}
                  onClick={clickHandler}
                >
                  <FaArrowCircleLeft/>
                </div>
              );
            }}

            
            
            renderArrowNext={(clickHandler, hasNext) => {
              return (
                <div
                  className={`${
                    hasNext ? "absolute" : "hidden"
                  } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20 text-white text-2xl`}
                  onClick={clickHandler}
                >
                  <FaArrowCircleRight/>
                </div>
              );
            }}>
                <div>
                  <Project {...paintingByNumbersData}></Project>
                </div>
                <div>
                  <Project {...forestPilatesData}></Project>
                </div>
            </Carousel>

            <Link href={'#contact'} className='w-full flex justify-center md:mt-10'>
              <button type="button" className="w-[95%] md:w-1/3 mx-auto text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center">get in touch</button>
            </Link>

          </ParallaxLayer>

          {/* <ParallaxLayer offset={5.5} speed={0}>
            <Image className=''
                priority
                src={aboutBG}
                alt="bg"
              />
          </ParallaxLayer> */}

          <ParallaxLayer offset={5.5} speed={0.01}>
            <Image className=''
                src={layer1}
                alt="layer1"
              />
          </ParallaxLayer>

          <ParallaxLayer offset={5.5} speed={0.02}>
            <Image className=''
              src={layer2}
              alt="layer2"
            />
          </ParallaxLayer>

          <ParallaxLayer offset={5.5} speed={0.08}>
            <Image className=''
              src={layer3}
              alt="layer3"
            />
          </ParallaxLayer>

          <ParallaxLayer offset={5.5} speed={0.04}>
            <Image className=''
              src={layer4}
              alt="layer4"
            />
          </ParallaxLayer>

          <ParallaxLayer offset={5.5} speed={0.07}>
            <Image className=''
              src={layer5}
              alt="layer5"
            />
          </ParallaxLayer>

          <ParallaxLayer offset={4.4} speed={0}>
            <div className='w-full text-center'>
                <h1 className='text-5xl text-white py-10'>about me</h1>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={4.6} speed={0}>
            <div className='pl-[5vw]'>
              <Image className='rounded-full'
              height={window.innerWidth < 768 ? 150 : 400}
                src={portrait}
                alt="portrait"
              />
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={window.innerWidth < 768 ? 5.65 : 5.65} speed={0}>
            <div className='w-full flex justify-end md:pr-[15vw] md:m-20'>
              <div className='md:w-1/2 text-center bg-gray-800 rounded-xl'>
                  <h2 className='text-2xl text-white pt-2 md:pt-10'>Skills</h2>
                  <p className='text-white p-2 md:p-10 text-start'>
                    <ul className='list-disc'>
                      <li>CMS development (content managment systems) - Wix, Squarspace, Wordpress and more</li>
                      <li>Code devepment - HTML, Javascript, CSS, Python, Java, Dart</li>
                      <li>Website development frameworks - React, Next.js, Flask, Spring</li>
                      <li>Mobile development frameworks - React Native, Flutter</li>
                      <li>AI developement for image creation, copywrite, and code assistance</li>
                    </ul>
                  </p>
              </div>
            </div>
          </ParallaxLayer>
          
          <ParallaxLayer offset={window.innerWidth < 768 ? 4.85 : 6.1} speed={0}>
            <div className='w-full flex justify-center'>
              <div className='md:w-2/3 text-center'>
                  <p className='text-md text-white md:py-10'>
                    I&apos;m a web developer based on the beautiful south coast of the U.K. I absolutely love creating websites with user-friendly interfaces that are visually stunning. I graduated from Cardiff University with a degree in Software Engineering, where I learned the ins and outs of website and app development.
                    <br/><br/>

                    I&apos;ve got experience working with various technologies like HTML, CSS, SQL, and JavaScript for websites, as well as different frameworks for app development. Currently, I also work alongside a local company that specializes in web design and digital marketing.
                    <br/><br/>

                    My goal is to make websites that not only look great but also make it easy for people to find what they need and have a positive experience. Let&apos;s work together to create an awesome online presence for your clients!
                  </p>
              </div>
            </div>
          </ParallaxLayer>

          {/* <ParallaxLayer offset={6.5} speed={0}>
            <motion.div
            className=''>
              <Image className=''
                src={contactBG}
                alt="background"
              />
            </motion.div>
          </ParallaxLayer> */}

          <ParallaxLayer offset={window.innerWidth < 768 ? 6.1 : 6.55} speed={0.1}>
            <div className='w-full text-center'>
                <h1 className='text-5xl text-white py-10'>get in touch</h1>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={window.innerWidth < 768 ? 6.3 : 6.75} speed={0.2}>
            <div className='flex justify-center'>
            <ContactForm></ContactForm>
            </div>
          </ParallaxLayer>

        </Parallax>
      </div>
    </main>
  )
}