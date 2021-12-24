import * as React from 'react';
import { dataCategories } from '../../../data';
import Category from '../category';
import './style.scss'

export interface categoriesProps {

}

export const Categories: React.FC<categoriesProps> = ({ }) => {
    return (
        <section className="category">

            <h1 className="heading">adventure idea!</h1>

            <div className="box-container">
                {
                    dataCategories.map((category) => {
                        return <Category key={category.img} title={category.title} desc={category.desc} img={category.img} />
                    })
                }


            </div>

        </section>
    );
}