import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <div className='header'>
            <div className='header-logo-box'>
            </div>
            <div className='header-text-box'>
                <h1 className='heading-primary'>
                    <span className='heading-primary-main'>
                        Power
                    <span>
                        <svg className='heading-primary-icon'> className=''
                            <use xlinkHref='/img/sprite.svg#icon-flash'></use>
                        </svg>
                    </span> up Math Facts</span>
                    <span className='heading-primary-sub'>a flash card app to help you practice math</span>
                </h1>
                <div className='header-buttons'>
                    <Link to='/numbers' className='btn btn-white btn-header'>Click to start
                            <svg className='header-btn-icon'> className=''
                                <use xlinkHref='/img/sprite.svg#icon-flash'></use>
                            </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}