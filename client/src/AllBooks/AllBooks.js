import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BooksListItem from './BooksListItem.js';
import SearchBook from './SearchBook.js';
import './AllBooks.css'

function AllBooks() {
    const [booksList] = useState(localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [])
    const [search, setSearchTerm] = useState('')

    const [searchResults, setSearchResults] = useState([])

    let onSearch = (searchTerm) => {
        console.log(searchTerm)
        setSearchTerm(searchTerm)
        getSearchResults(searchTerm)
    }

    let getSearchResults = (searchTerm) => {
        let results = booksList.filter((book) => book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase()))
        setSearchResults(results)
    }

    const allBooks = booksList.map((book, index) => {
        return (
            <BooksListItem 
                key={index}
                index={index}
                book={book}
            />
        )
    })

    const searchResultsBooks = searchResults.map((book, index) => {
        return (
            <BooksListItem 
                key={index}
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
            <SearchBook 
                searchTerm={search}
                onSearch={onSearch} />
            <div>
                <Link
                    className="addNewBookButton" 
                    to="/add-new-book">
                    <Button sx={{
                    height: '45px'
                    }} 
                    variant="contained">
                        Add a New Book
                    </Button>
                </Link>
            </div>
            {search.length ? searchResultsBooks : allBooks}
        </div>
    );
}

export default AllBooks;