import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BooksListItem from './BooksListItem.js';
import SearchBook from './SearchBook.js';
import { books } from '../data.js';

function AllBooks() {
    const [booksList] = useState(books)

    const allBooks = booksList.map((book, index) => {
        return (
            <BooksListItem 
                index={index}
                book={book}
            />
        )
    })

    return (
        <div>
            <Typography 
                variant="h3">
                    All Books
            </Typography>
            <SearchBook />
            <div className="add-new-book-btn">
                <Link to="/add-new-book">
                    <Button sx={{
                    height: '45px'
                    }} 
                    variant="contained">
                        Add a New Book
                    </Button>
                </Link>
            </div>
            {allBooks ? allBooks : null}
        </div>
    );
}

export default AllBooks;