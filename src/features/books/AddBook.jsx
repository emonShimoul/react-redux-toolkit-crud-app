import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './BooksSlice';

const AddBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const numOfBooks = useSelector(state => state.booksReducer.books.length);

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { id: numOfBooks + 1, title, author };
        // console.log(book);
        dispatch(addBook(book));
        navigate("/display-books", { replace: true });
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