import React, { useState } from 'react';

const AddBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { title, author };
    }

    return (
        <div>
            <h2>Add Books</h2>
            <form onSubmit={handleSubmit} className='mt-8'>
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

export default AddBook;