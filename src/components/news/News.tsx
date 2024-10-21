import React from 'react'
import NewsCard from '../card/NewsCard'
import Button from '../button/Button'
import { newsItems } from '@/lib/news'

const News = () => {
  return (
    <div>
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
    </div>
  )
}

export default News
