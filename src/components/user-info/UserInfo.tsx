import Image, { StaticImageData } from 'next/image'
import React from 'react'

const UserInfo = ({ img }: { img: StaticImageData }) => {
  return (
    <p className='flex gap-3'>
      <Image alt='user' src={img} width={img.width} height={img.height} />
      <p>Chandler Bing</p>
    </p>
  )
}

export default UserInfo
