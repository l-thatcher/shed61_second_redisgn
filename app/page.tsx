import Image from 'next/image'
import HomePage from './pages/homePage'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <main className="">
      <div>
        <div className='z-10 fixed w-full'>
          <Navbar/> 
        </div>
        <div className='pt-20'>
          <HomePage></HomePage>
        </div>
      </div>
    </main>
  )
}
