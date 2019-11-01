import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

function Navbar(props) {
    const backButton = () => {
        props.history.goBack();
    }

    const forwardButton = () => {
        props.history.goForward();
    }

    return (
        <nav className='navbar'>
            <Link to='/' >
                <svg className='navbar-icon navbar-icon-home'>
                    <use xlinkHref='/img/sprite.svg#icon-home'></use>
                </svg>
            </Link>
            <div>
                <svg className='navbar-icon navbar-icon-back' onClick={backButton}>
                    <use xlinkHref='/img/sprite.svg#icon-chevron-left'></use>
                </svg>
            </div>
            <div>
                <svg className='navbar-icon navbar-icon-forward' onClick={forwardButton}>
                    <use xlinkHref='/img/sprite.svg#icon-chevron-right'></use>
                </svg>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);


