'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/assets/img/Logo.png'
import Link from 'next/link'
import Button from '../button/Button'

const Navabr = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { title: 'Product', url: '' },
    { title: 'Services', url: '' },
    { title: 'About', url: '' },
  ]

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <nav className='relative'>
      <div className='flex justify-between items-center px-4 lg:px-0 mb-11 mt-8 lg:mt-14'>
        <Image
          alt='logo'
          src={logo.src}
          width={logo.width}
          height={logo.height}
        />

        <div className='hidden lg:flex items-center gap-10'>
          {links.map(({ title, url }, index) => (
            <Link
              className='font-semibold cursor-pointer'
              key={index}
              href={url}
            >
              {title}
            </Link>
          ))}
          <Button small>Log in</Button>
        </div>

        <div className='lg:hidden'>
          <button className='text-3xl font-bold' onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center transform ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {links.map(({ title, url }, index) => (
          <Link
            className='text-2xl font-semibold mb-8'
            key={index}
            href={url}
            onClick={toggleMenu}
          >
            {title}
          </Link>
        ))}
        <Button small>Log in</Button>

        <button className='mt-10 text-2xl' onClick={toggleMenu}>
          Close
        </button>
      </div>
    </nav>
  )
}

export default Navabr
