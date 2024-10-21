import Image, { StaticImageData } from 'next/image'
import React from 'react'
import DateInfo from '../date-info/DateInfo'
import UserInfo from '../user-info/UserInfo'

const NewsCard = ({
  img,
  userImg,
  desc,
}: {
  img: StaticImageData
  userImg: StaticImageData
  desc: string
}) => {
  return (
    <div className='lg:max-w-[300px] mb-20'>
      <Image
        alt='news-img'
        className='mb-6 w-full'
        src={img.src}
        width={img.width}
        height={img.height}
      />
      <DateInfo />
      <div className='min-h-[99px] text-xl mb-5'>
        <p>{desc}</p>
      </div>
      <UserInfo img={userImg} />
    </div>
  )
}

export default NewsCard
