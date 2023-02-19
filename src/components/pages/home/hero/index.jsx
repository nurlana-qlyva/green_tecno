import { Scrollbar, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';
import data from './../../../../data/hero.json'

const Hero = () => {
  return (
    <section className='gt-hero'>
        <Swiper
          modules={[Pagination, Scrollbar, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {data.banners.map(banner => {
            return <SwiperSlide key={banner.id}>
                  <img src={banner.image} alt="greentecno" />
            </SwiperSlide>
          })}
        </Swiper>
    </section>
  )
}

export default Hero
