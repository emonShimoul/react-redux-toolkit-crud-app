import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const EditBook = () => {
    const location = useLocation();
    // console.log(location);
    const [id, setId] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);

    return (
        <div>
            <h2>Edit Book</h2>
            <form className='mt-8'>
                <div className='mb-4'>
                    <label htmlFor="title">Title: </label>
                    <input className='border border-black' type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="author">Author: </label>
                    <input className='border border-black' type="text" name="author" value={author} onChange={e => setAuthor(e.target.value)} required />
                </div>
                <button className='bg-black text-white py-2 px-4 mt-4' type='submit'>Add Book</button>
            </form>
        </div>
    );
};

export default EditBook;