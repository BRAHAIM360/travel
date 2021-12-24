import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import * as React from 'react';
import './style.scss'


export interface navbarProps {
    active: string,
    setActive: any,
    setSearch: any
}

export const Navbar: React.FC<navbarProps> = ({ active, setActive, setSearch }) => {
    useScrollPosition(({ prevPos, currPos }) => {
        if (currPos.y < 0) {
            document.querySelector('.header')?.classList.add('active');
        } else {
            document.querySelector('.header')?.classList.remove('active');
        }
    })
    return (
        <>
            <header className="header">

                <a href="#" className="logo"> <i className="fas fa-hiking"></i> travel. </a>

                <nav className={"navbar " + active}>
                    <div id="nav-close" className="fas fa-times" onClick={() => setActive("")}></div>
                    <a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="#shop">shop</a>
                    <a href="#packages">packages</a>
                    <a href="#reviews">reviews</a>
                    <a href="#blogs">blogs</a>
                </nav>

                <div className="icons">
                    <div id="menu-btn" className="fas fa-bars" onClick={() => setActive("active")}></div>
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <div id="search-btn" className="fas fa-search" onClick={() => setSearch("active")}></div>
                </div>

            </header>

        </>
    );
}