import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
    className=' h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'
    >
        <Spotlight
        className="left-0 -top-40 md:left-60 md:-top-20"
        fill="white"
      />
      <div className='relative z-10 w-full p-4 text-center'>
        <h1
        className='mt-20 text-4xl font-bold text-transparent md:mt-0 md:text-7xl bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-50'
        >Master the art of music</h1>
        <p
        className='max-w-lg mx-auto mt-4 text-base font-normal md:text-lg text-neutral-300'
        > Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque enim est neque aliquid ab, veritatis reiciendis mollitia aliquam maiores nobis cum, dignissimos iusto earum quod eos cupiditate optio similique itaque.</p>
        <div className="mt-4">
            <Link href={"/courses"}>
               <Button borderRadius='1.5rem' className='bg-transparent border-2 '> Explore courses</Button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
