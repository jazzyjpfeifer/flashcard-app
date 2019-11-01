import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        const date = new Date();
        const year = date.getFullYear();
        return (
            <footer className = 'footer'>
                <div>
                    <p className='footer-info'>
                        Website designed by <Link to='/' className='footer-link'>Web Media Solutions LLC</Link>.
                        All rights reserved.
                        Copyright &copy; {year}
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;