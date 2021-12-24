import * as React from 'react';
import './style.scss'

export interface ratingProps {
    rate?: number
}

export const Rating: React.FC<ratingProps> = ({ rate = 4.5 }) => {


    const renderStars = (): any => {
        var i: number = rate
        var j: number = 5
        var resul = [];
        while (j > 0) {
            if (i > 0.5) {
                i--;
                resul.push(<i key={i} className="fas fa-star"></i>)
            }
            else if (i === 0.5) {
                i = i - 0.4;
                resul.push(<i key={i} className="fas fa-star-half-alt"></i>)
            }
            else {
                i--;
                resul.push(<i key={i} className="far fa-star"></i>)
            }
            j--;
        }
        return resul

    }
    return (

        <div className="stars">
            {
                renderStars()
            }

        </div>
    );
}