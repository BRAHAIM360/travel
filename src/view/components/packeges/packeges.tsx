import * as React from 'react';
import { PackegesItmes } from '../../../data';
import Packege from '../packege';
import './style.scss'

export interface packegesProps {

}

export const Packeges: React.FC<packegesProps> = ({ }) => {
    return (


        <section className="packages" id="packages">

            <h1 className="heading">popular packages</h1>

            <div className="box-container">
                {PackegesItmes.map(packeg => <Packege title={packeg.title} img={packeg.img} price={packeg.price} desc={packeg.desc} />)}

            </div>


        </section >

    );
}