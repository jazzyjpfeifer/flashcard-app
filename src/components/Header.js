import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <div className='header'>
            <div className='header-logo-box'>
            </div>
            <div className='header-text-box'>
                <h1 className='heading-primary'>
                    <span className='heading-primary-main'>Flash Card</span>
                    <span className='heading-primary-sub'>Let's start learning</span>
                </h1>
                <Link to='/numbers' className='btn btn-white'>Click to start</Link>

            </div>
        </div>
    );
}