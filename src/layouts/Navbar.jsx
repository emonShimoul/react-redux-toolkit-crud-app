import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link><span> || </span>
            <Link to="/display-books">Display Books</Link><span> || </span>
            <Link to="/add-book">Add Book</Link>
        </nav>
    );
};

export default Navbar;