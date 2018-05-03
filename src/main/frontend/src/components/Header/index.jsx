import React from 'react';
import SignBlock from '../SignBlock';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <h1 className="site-logo">Logo</h1>
        <h2 className="site-description">Customer Satisfaction</h2>
        <nav>
            <ul className="nav-list">
                <li><Link
                    className="link_header"
                    to={'/'}
                >
                    Home
                </Link></li>
                <li><Link
                    className="link_header"
                    to={'/aboutUs'}
                >
                    About Us
                </Link></li>
                <li><Link
                    className="link_header"
                    to={'/labels'}
                >
                    Labels
                </Link></li>
                <li><Link
                    className="link_header"
                    to={'/contactUs'}
                >
                    Contact Us
                </Link></li>
            </ul>
        </nav>
        <SignBlock />
    </header>
)

export default Header