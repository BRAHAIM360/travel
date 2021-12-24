import * as React from 'react';
import { ServicesData } from '../../../data';
import './style.scss'

export interface servicesProps {

}

export const Services: React.FC<servicesProps> = ({ }) => {
    return (

        <section className="services">

            <h1 className="heading"> what we offer </h1>

            <div className="box-container">

                {ServicesData.map((service) => {

                    return (<div className="box">
                        <img src={service.img} alt="" />
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                        <a href="#" className="btn">read more</a>
                    </div>)
                })}


            </div>

        </section>
    );
}