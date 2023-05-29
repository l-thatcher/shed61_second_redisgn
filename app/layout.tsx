import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-Poppins'
})


export const metadata = {
  title: 'shed61',
  description: 'website and software development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
