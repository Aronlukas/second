
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

import Link from "next/link"

const buttons = ["Atelier", "Siebdruck", "Requisitenbau"]; // Has to be three buttons



// How do I use Google Fonts with Next.js?

export default function Home() {
  return (
    <>
      <div className='h-screen w-screen bgLanding flex basis-1/3 justify-center items-center flex-wrap flex-col md:flex-row content-center gap-y-4 md:gap-y-8 gap-x-10'>
        <h1 className='tracking-widest md:order-1 bg-red md:text-6xl text-4xl w-full text-center uppercase md:mb-10 m-0'>Pauline Häfner</h1>
        {buttons.map((button) => {
          return (
            <Link key={button} href={`/${button}`} className="text-center order-3 outline outline-2 text-xl px-3 py-1 w-52 hover:bg-white hover:bg-opacity-50">{button}</Link>
          )
        })}

        {/* How do I make the Link full width, without being clickable on the full width? */}
        <div className="flex basis-full order-4 md:block hidden"></div>
        <Link href="/aboutMe" className="
        text-center
        text-lg md:mt-16 mt-0
        tiltedUnderline
        order-2
        md:order-4
        ">About Me</Link>
      </div>
    </>
  )
}

