import Image from 'next/image'
import HomePage from './pages/homePage'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <main className="">
      <div>
        <div className=''>
          <HomePage></HomePage>
        </div>
      </div>
    </main>
  )
}
