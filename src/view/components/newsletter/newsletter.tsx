import * as React from 'react';
import './style.scss'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, { Autoplay } from 'swiper';

export interface newsletterProps {

}

export const Newsletter: React.FC<newsletterProps> = ({ }) => {
  return (<>

    <section className="newsletter">

      <div className="content">
        <h1 className="heading">subscirbe now</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ipsam repellat nostrum esse officiis unde quisquam corporis doloremque adipisci similique!</p>
        <form action="">
          <input type="email" name="" placeholder="enter your email" id="" className="email" />
          <input type="submit" value="subscirbe" className="btn" />
        </form>
      </div>

    </section>

    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}

      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      autoplay
      loop
      slidesPerView={"auto"}
      grabCursor
      breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 2,
          spaceBetween: 20,
          centeredSlides: true,
          centerInsufficientSlides: true,
          centeredSlidesBounds: true
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 3,
          spaceBetween: 40
        },
        1024: {
          width: 1024,
          slidesPerView: 4,
          spaceBetween: 50,
          autoplay: {
            delay: 2000,
          },
        },
      }
      }
    >
      <SwiperSlide >  <div className="swiper-slide silde"><img src="images/client-logo-1.png" alt="" /></div></SwiperSlide>
      <SwiperSlide > <div className="swiper-slide silde"><img src="images/client-logo-2.png" alt="" /></div></SwiperSlide>
      <SwiperSlide ><div className="swiper-slide silde"><img src="images/client-logo-3.png" alt="" /></div></SwiperSlide>
      <SwiperSlide > <div className="swiper-slide silde"><img src="images/client-logo-4.png" alt="" /></div></SwiperSlide>

    </Swiper>

  </>
  );
}