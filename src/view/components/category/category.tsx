import * as React from 'react';
import { Icategory } from '../../../data';
import './style.scss'


export const Category: React.FC<Icategory> = ({ title, desc, img }) => {
    return (
        <div className="box">
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{desc}</p>
            <a className="btn">read more</a>
        </div>
    );
}