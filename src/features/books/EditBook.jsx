import React from 'react';
import { useLocation } from 'react-router-dom';

const EditBook = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <h2>Edit Book</h2>
        </div>
    );
};

export default EditBook;