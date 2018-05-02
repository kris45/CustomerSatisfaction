import React from 'react';
import SignBlock from '../../containers/SignBlock';

const Header = () => (
    <header>
            <h1 className="site-logo">Logo</h1>
            <h2 className="site-description">Customer Satisfaction</h2>
        <nav>
            <ul className="nav-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Labels</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
        </nav>
        <SignBlock />
    </header>
)

export default Header