import * as React from 'react';
import { dataItmes } from '../../../data';
import ItemCard from '../itemCard';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, { Autoplay } from 'swiper';
import './style.scss'

export interface shopProps {

}

export const Shop: React.FC<shopProps> = ({ }) => {
    SwiperCore.use([Autoplay]);

    return (
        <section className="shop" id="shop">
            <h1 className="heading">featured products</h1>

            <div className="swiper product-slider">

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}

                    navigation
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
                            slidesPerView: 1,
                            spaceBetween: 20,
                            centeredSlides: true,
                            centerInsufficientSlides: true,
                            centeredSlidesBounds: true
                        },
                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 2,
                            spaceBetween: 40
                        },
                        1024: {
                            width: 1024,
                            slidesPerView: 3,
                            spaceBetween: 50,
                            autoplay: {
                                delay: 1000,
                            },
                        },
                    }
                    }
                >
                    {dataItmes.map((item) => { return <SwiperSlide key={item.img}> <ItemCard prodcutName={item.title} price={item.price} img={item.img} rating={item.rating} /> </SwiperSlide> })}

                </Swiper>

            </div>
        </section>
    );
}

