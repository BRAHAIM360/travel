import React, { useState } from 'react';
import './style.scss'

export interface searchProps {
    search?: string,
    setSearch?: any
}

export const Search: React.FC<searchProps> = ({ search, setSearch }) => {

    return (
        <div className={`search-form ${search}`}>

            <div id="close-search" className="fas fa-times" onClick={() => setSearch("")}></div>

            <form action="form">
                <input type="search" name="" placeholder="search here..." id="search-box" />
                <label className="fas fa-search"></label>
            </form>
        </div>

    );
}