
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='h-screen w-screen bgLanding flex justify-center items-center flex-wrap flex-col md:flex-row content-center gap-y-4 md:gap-y-8 gap-x-10'>
        <h1 className='md:order-1 bg-red md:text-6xl text-4xl w-full text-center uppercase md:mb-20 mb-0'>Pauline Häfner</h1>
        <button className="order-3 outline outline-1 text-xl px-3 py-1 w-52 hover:bg-white hover:bg-opacity-50">Atelier</button>
        <button className="order-3 outline outline-1 text-xl px-3 py-1 w-52 hover:bg-white hover:bg-opacity-50">Zweiter </button>
        <button className="order-3 outline outline-1 text-xl px-3 py-1 w-52 hover:bg-white hover:bg-opacity-50">Siebdruck</button>

        <button className="
        w-full text-lg md:mt-16 mt-0
        after:content-[''] after:border-t-2 after:border-t-black after:w-14 after:block after:relative
        after:transform after:-rotate-3 after:left-1/2 after:-translate-x-1/2
        hover:after:border-white
        order-2
        md:order-4
        ">About Me</button>
      </div>
    </>
  )
}

