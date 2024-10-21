import Image from 'next/image'
import React from 'react'
import logo from '@/assets/img/Logo.png'

const Footer = () => {
  return (
    <footer className='flex flex-col lg:flex-row text-secondary justify-between px-6 lg:px-[100px] py-16'>
      <div className='max-w-[300px] mb-12 lg:mb-0'>
        <Image
          alt='logo'
          src={logo.src}
          width={logo.width}
          height={logo.height}
          className='mb-10'
        />
        <p className='mb-8 text-[#ABABAB]'>
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>
        <p className='text-[#ABABAB]'>All rights reserved.</p>
      </div>

      <div className='flex flex-col lg:flex-row lg:gap-16'>
        <ul className='text-[#ABABAB] mb-12 lg:mb-0'>
          <h4 className='mb-8 font-semibold text-black'>Landings</h4>
          {['Home', 'Products', 'Services'].map((link, index) => (
            <li className='list-none mb-4 cursor-pointer' key={index}>
              {link}
            </li>
          ))}
        </ul>

        <ul className='text-[#ABABAB] mb-12 lg:mb-0'>
          <h4 className='mb-8 font-semibold text-black'>Company</h4>
          {['Home', 'Career', 'Service'].map((link, index) => (
            <li
              className='list-none mb-4 cursor-pointer flex items-center'
              key={index}
            >
              {link}
              {index === 1 && (
                <span className='inline-block text-primary px-4 py-1 font-bold ml-3 bg-[#65E4A3] text-xs rounded-full'>
                  Hiring!
                </span>
              )}
            </li>
          ))}
        </ul>

        <ul className='text-[#ABABAB]'>
          <h4 className='mb-8 font-semibold text-black'>Resources</h4>
          {['Blog', 'Products', 'Services'].map((link, index) => (
            <li className='list-none mb-4 cursor-pointer' key={index}>
              {link}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
