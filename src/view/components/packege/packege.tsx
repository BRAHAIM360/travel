import * as React from 'react';
import './style.scss'

export interface packegesProps {
  title: string,
  img: string,
  price: string
  desc?: string
}

export const Packege: React.FC<packegesProps> = ({ title, desc, img, price }) => {
  return (
    <div className="box">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="price">{price}</div>
        <a href="#" className="btn">explore now</a>
      </div>
    </div>
  );
}