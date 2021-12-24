import * as React from 'react';
import './style.scss';

export interface fotterProps {

}

export const Footer: React.FC<fotterProps> = ({ }) => {
    return (

        <section className="footer">

            <div className="box-container">

                <div className="box">
                    <h3>quick links</h3>
                    <a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="#shop">shop</a>
                    <a href="#packages">packages</a>
                    <a href="#reviews">reviews</a>
                </div>

                <div className="box">
                    <h3>extra links</h3>
                    <a href="#">my account</a>
                    <a href="#">my order</a>
                    <a href="#">my wishlist</a>
                    <a href="#">ask questions</a>
                    {/* <a href="#">terms of use</a> */}
                    <a href="#">privacy policy</a>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <a href="#"> <i className="fas fa-phone"></i> +213-556593093 </a>
                    <a href="#"> <i className="fas fa-phone"></i> +213-556593092</a>
                    <a href="#"> <i className="fas fa-envelope"></i>contact@mahioussi.com </a>
                    <a href="#"> <i className="fas fa-map"></i> Oran, Algeria</a>
                </div>

                <div className="box">
                    <h3>follow us</h3>
                    <a href="https://www.facebook.com/brahim.madrido/"> <i className="fab fa-facebook-f"></i> facebook </a>
                    <a href="https://twitter.com/Aek360"> <i className="fab fa-twitter"></i> twitter </a>
                    <a href="https://www.instagram.com/brahim.360/"> <i className="fab fa-instagram"></i> instagram </a>
                    <a href="https://www.linkedin.com/in/brahim-mahioussi-4b2920111/"> <i className="fab fa-linkedin"></i> linkedin </a>
                    <a href="https://github.com/BRAHAIM360"> <i className="fab fa-github"></i> github </a>
                </div>

            </div>

            <div className="credit">created by <span>mr. Mahioussi Brahim</span> | all rights reserved!</div>

        </section>
    );
}