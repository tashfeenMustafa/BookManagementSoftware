import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BooksListItem from './BooksListItem.js';
import SearchBook from './SearchBook.js';
import './AllBooks.css'

function AllBooks() {
    const [booksList] = useState(() => {
        let books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : []
        if (books) {
            const sortedBooks = books.slice().sort((a, b) => new Date(b.dateCreatedAt).getTime() - new Date(a.dateCreatedAt).getTime())
            console.log(sortedBooks)
            return sortedBooks
        }
        return []
    })
    const [search, setSearchTerm] = useState('')

    const [searchResults, setSearchResults] = useState([])

    let onSearch = (searchTerm) => {
        setSearchTerm(searchTerm)
        getSearchResults(searchTerm)
    }

    let getSearchResults = (searchTerm) => {
        let results = booksList.filter((book) => book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase()))
        const sortedResults = results.slice().sort((a, b) => new Date(b.dateCreatedAt.getTime()) - new Date(a.dateCreatedAt).getTime())
        setSearchResults(sortedResults)
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