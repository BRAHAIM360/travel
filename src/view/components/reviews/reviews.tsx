import * as React from 'react';
import { ComenteData } from '../../../data';
import './style.scss'

export interface reviewsProps {

}

export const Reviews: React.FC<reviewsProps> = ({ }) => {
    return (

        <section className="reviews" id="reviews">

            <h1 className="heading">client's reviews</h1>

            <div className="swiper review-slider">

                <div className="wrapper">
                    {ComenteData.map(coment => {

                        return (<div className="swiper-slide slide">
                            <p className="text">{coment.coment}</p>
                            <div className="user">
                                <img src={coment.img} alt="" />
                                <div className="info">
                                    <h3>{coment.username}</h3>
                                    <span>{coment.ocupation}</span>
                                </div>
                            </div>
                        </div>)
                    })}


                </div>

            </div>

        </section>
    );
}

// {ServicesData.map((service) => {

//     return (<div classNameName="box">
//         <img src={service.img} alt="" />
//         <h3>{service.title}</h3>
//         <p>{service.desc}</p>
//         <a href="#" classNameName="btn">read more</a>
//     </div>)
// })}