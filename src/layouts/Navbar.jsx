import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/" className='navlink'>Home</Link>
            <Link to="/display-books" className='navlink'>Display Books</Link>
            <Link to="/add-book" className='navlink'>Add Book</Link>
        </nav>
    );
};

export default Navbar;