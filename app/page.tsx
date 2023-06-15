'use client'

import Image from 'next/image'
import { Ibarra_Real_Nova } from 'next/font/google'
import { PopupButton } from '@typeform/embed-react'
const ibarra_real_nova = Ibarra_Real_Nova({ weight: '500', subsets: ['latin'] })
export default function Home() {
  return (
    <main className="md:grid snap-y md:gap-y-4 space-y-4 md:space-y-0 overflow-y-auto snap-mandatory max-h-screen grid-rows-1 p-4 py-8  md:p-8 relative  bg-[#003929]">
      <div className=' md:hidden w-full snap-start    pt-8'>
        <div className=' h-16 w-32 mt-8 mb-8'>
          <Image style={{ objectFit: 'cover' }} alt='logo.png' height={164} width={360} src={'/logo.png'} />
        </div>
        <div className='bg-gray-200 py-2 px-4 mb-4  rounded-full flex w-fit'>
          <PopupButton className='bg-yellow-400 cursor-pointer text-black rounded-full  py-2 px-4 font-bold text-center text-xs' id='K3NgNN31'>Book demo</PopupButton>
          <PopupButton className=' rounded-full  py-2 px-4 text-black font-bold text-center ml-2 cursor-pointer text-xs' id='WIWjg02L'>Join the commuinity</PopupButton>

        </div>

        <div className={` p-2  mt-4 mb-4 text-white text-5xl ${ibarra_real_nova.className}`}>
          A better way to test products?... Of course!
        </div>
      </div>
      <div className='bg-transparent w-1/2 h-[0] snap-start rounded-lg'>

      </div>
      <div className='bg-[#124E3C] opacity-100 relative md:w-1/2 h-[70vh] md:min-h-[90vh] md:h-[90vh] snap-start rounded-xl py-4 px-8'>
        <div className=' md:h-5/6 h-4/6 w-full relative '>
          <Image fill className='md:object-fill object-fit-cover' alt='bubble' src={'/bubble.png'} />
        </div>
        <div className='text-white mt-4'>
          Get feedback & reviews from domain experts for product and feature launch
        </div>
      </div>
      <div className='bg-[#124E3C] opacity-100 relative md:w-1/2 h-[70vh] md:min-h-[90vh] md:h-[90vh] snap-start rounded-xl py-4 px-8'>
        <div className='text-white mb-4'>
          From indie-makers to big corps. Get feedback private or public.
        </div>
        <div className=' md:h-5/6   h-4/6 w-full relative '>
          <Image fill className='md:object-fill object-fit-cover'  alt='lady' src={'/lady.png'} />
        </div>
      </div>
      <div className='bg-[#124E3C] opacity-100 relative md:w-1/2 h-[70vh] md:min-h-[90vh] md:h-[90vh] snap-start rounded-xl py-4 px-8'>
        <div className='text-white mb-4'>
          Test with vetted personas for your product.
        </div>
        <div className=' md:h-5/6 h-4/6 w-full relative '>
          <Image  fill className='md:object-fill object-fit-cover' alt='carrer' src={'/carrer.png'} />
        </div>
      </div>
      <div className='bg-[#124E3C] opacity-100 relative md:w-1/2 h-[70vh] md:min-h-[90vh] md:h-[90vh] snap-start rounded-xl py-4 px-8'>
        <Image fill className='md:object-fill object-fit-cover' alt='bt' src={'/bt.png'} />
      </div>
      <div className=' h-4 md:w-1/2 my-4 text-center text-white text-sm'>Made with  ❤️ &  💫</div>
      <div className='fixed hidden md:block top-8 left-1/2 w-1/2'>
        <div className=' h-16 w-32 mb-12'>
          <Image style={{ objectFit: 'cover' }} alt='logo.png' height={164} width={360} src={'/logo.png'} />
        </div>
        <div className='bg-gray-200 py-2 px-4 ml-8 rounded-full flex w-fit'>
          <PopupButton className='bg-yellow-400 cursor-pointer rounded-full  py-2 px-4 font-bold text-center' id='K3NgNN31'>Book demo</PopupButton>
          <PopupButton className=' rounded-full  py-2 px-4 font-bold text-center ml-2 cursor-pointer' id='WIWjg02L'>Join the commuinity</PopupButton>

        </div>

        <div className={` p-2 ml-8 mt-4 text-white text-5xl ${ibarra_real_nova.className}`}>
          A better way to test products?... Of course!
        </div>
      </div>
    </main>
  )
}
