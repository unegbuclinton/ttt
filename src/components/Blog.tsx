import React from 'react'
import Navabr from './nav/Navabr'
import Image from 'next/image'
import termImg from '@/assets/img/term-img.png'
import userImg from '@/assets/img/user.png'
import DateInfo from './date-info/DateInfo'
import UserInfo from './user-info/UserInfo'
import NewsCard from './card/NewsCard'
import clip from '@/assets/img/clip.png'
import Button from './button/Button'
import Footer from './footer/Footer'
import { newsItems } from '@/lib/news'

const Blog = () => {
  return (
    <div className='max-w-[1200px] mx-auto px-4'>
      <Navabr />
      <div className='text-center py-7 mb-10'>
        <p className='mb-3 text-xl'>Blog</p>
        <p className='text-4xl md:text-[64px]'>Thoughts and words</p>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center w-full mb-16'>
        <Image
          alt='term-img'
          className='mb-4'
          src={termImg.src}
          width={termImg.width}
          height={termImg.height}
        />
        <div className='max-w-[550px]'>
          <DateInfo />
          <p className='text-[48px] mb-5'>
            Pitch termsheet backing validation focus release.
          </p>
          <UserInfo img={userImg} />
        </div>
      </div>
      <div className='border border-primary w-full mb-24'></div>

      <div>
        <h4 className='text-[48px] mb-10 font-normal'>Latest news</h4>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {newsItems.map(({ desc, img, userinfo }, index) => (
            <NewsCard key={index} img={img} userImg={userinfo} desc={desc} />
          ))}
        </div>
      </div>
      <div className='flex justify-center mb-32'>
        <Button>Load more</Button>
      </div>

      <div className='py-16 bg-primary relative rounded-lg mb-20 px-4'>
        <Image
          className='absolute top-0 right-0 rounded-t-lg'
          alt='clip'
          src={clip.src}
          height={clip.height}
          width={clip.width}
        />
        <div className='max-w-[716px] mx-auto text-white text-center relative z-10'>
          <p className='text-2xl md:text-[48px] mb-12 leading-[60px]'>
            An enterprise template to ramp up your company website
          </p>
          <div className='flex flex-col md:flex-row justify-center gap-6'>
            <input
              type='text'
              placeholder='Your email address'
              className='border-none rounded-full w-full md:max-w-[370px] text-black outline-none pl-8 h-12 md:h-14'
            />
            <Button className='!bg-[#65E4A3] !border-none'>Start now</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog
