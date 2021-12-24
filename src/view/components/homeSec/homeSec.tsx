import * as React from 'react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, { Autoplay } from 'swiper';
import './style.scss'

export interface homesecProps {

}

export const Homesec: React.FC<homesecProps> = ({ }) => {
    SwiperCore.use([Autoplay]);
    return (
        <section className="home" id="home">

            <div className="home-slider">



                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    autoplay={true}
                    loop
                    grabCursor
                >
                    <SwiperSlide>
                        <div className="box" style={{ background: "url(/images/home-bg-1.jpg) no-repeat" }}>
                            <div className="content">
                                <span>never stop</span>
                                <h3>exploring</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                                <a href="#" className="btn">get started</a>
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="box second" style={{ background: "url(/images/home-bg-2.jpg) no-repeat" }}>
                                <div className="content">
                                    <span>make tour</span>
                                    <h3>amazing</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                                    <a href="#" className="btn">get started</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="box" style={{ background: "url(/images/home-bg-3.jpg) no-repeat" }} >
                                <div className="content">
                                    <span>explore the</span>
                                    <h3>new world</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                                    <a href="#" className="btn">get started</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>


            </div>

        </section>
    );
}