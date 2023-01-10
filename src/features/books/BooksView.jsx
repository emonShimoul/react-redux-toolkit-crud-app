import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from './BooksSlice';

const BooksView = () => {
    const books = useSelector((state) => state.booksReducer.books);
    const dispatch = useDispatch();
    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id));
    }

    return (
        <div>
            <h2>List Of Books</h2>
            <table className="w-1/2 text-sm text-center text-gray-500 dark:text-gray-400 mx-auto mt-8">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3">ID</th>
                        <th className="px-6 py-3">Title</th>
                        <th className="px-6 py-3">Author</th>
                        <th className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books && books.map((book) => {
                        const { id, title, author } = book;
                        return <tr className='border-b border-gray-200 dark:border-gray-700' key={id}>
                            <td className='py-3'>{id}</td>
                            <td>{title}</td>
                            <td>{author}</td>
                            <td>
                                <Link to="/edit-book">
                                    <button className='text-red-500'>Edit</button>
                                </Link>
                                <span> || </span>
                                <button onClick={() => handleDeleteBook(id)} className='text-green-500'>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default BooksView;