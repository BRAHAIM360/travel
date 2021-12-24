import * as React from 'react';
import Rating from '../rating';
import './style.scss'

export interface itemCardProps {
    prodcutName: string,
    price: string,
    img: string,
    rating?: number
}

export const ItemCard: React.FC<itemCardProps> = ({ prodcutName, price, img, rating }) => {
    return (
        <div className='swiper-container'>
            <div className="swiper-slide slide">
                <div className="image">
                    <img src={img} alt="" />
                    <div className="icons">
                        <a href="#" className="fas fa-shopping-cart"></a>
                        <a href="#" className="fas fa-eye"></a>
                        <a href="#" className="fas fa-share"></a>
                    </div>
                </div>
                <div className="content">
                    <h3>{prodcutName}</h3>
                    <div className="price"> {price}</div>
                    <Rating />
                </div>
            </div>
        </div>
    );
}