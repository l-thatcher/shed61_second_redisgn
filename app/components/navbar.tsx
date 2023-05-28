import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <nav className="sticky -top-1 bg-[#232E4D] flex flex-col">
        <div className="container mx-auto h-20">
          <ul className="flex items-center justify-around h-full">
            <li>
              <Link href="/">
                <p className="text-white text-md font-w200">home</p>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <p className="text-white text-md font-w300">services</p>
              </Link>
            </li>

            <li>
              <h1 className='text-2xl text-white'>shed61</h1>
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
  );
}
