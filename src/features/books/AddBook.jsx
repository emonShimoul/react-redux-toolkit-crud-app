import React, { useState } from 'react';

const AddBook = () => {
    const [title, setTitle] = useState("");
    return (
        <div>
            <h2>Add Books</h2>
            <form>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input className='border' type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} required />
                </div>
            </form>
        </div>
    );
};

export default AddBook;