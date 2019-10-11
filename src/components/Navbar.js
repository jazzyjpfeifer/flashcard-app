import React from 'react';
import { Link } from 'react-router-dom';



export function Navbar() {
    return (
        <nav className='navbar'>
            <Link to='/' >
                <svg className='navbar-icon navbar-icon-home'>
                    <use xlinkHref='/img/sprite.svg#icon-home'></use>
                </svg>
            </Link>
            <Link>
                <svg className='navbar-icon navbar-icon-back'>
                    <use xlinkHref='/img/sprite.svg#icon-chevron-left'></use>
                </svg>
            </Link>
            <Link>
                <svg className='navbar-icon navbar-icon-forward'>
                    <use xlinkHref='/img/sprite.svg#icon-chevron-right'></use>
                </svg>
            </Link>
        </nav>
    );
}