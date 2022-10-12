import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='links-all'>
            <nav>
            <Link to='/home' > Home </Link>
            <Link to='/product' > Product </Link>
            <Link to='/friends' > Friends </Link>
            <Link to='/about' > About </Link>
            </nav>
            <h5>This is a common a header</h5>
        </div>
    );
};

export default Header;