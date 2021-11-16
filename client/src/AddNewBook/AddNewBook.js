import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SaveBookName from './SaveBookName.js';
import AddContentBox from '../AddContent/AddContentBox.js';
import Content from '../Contents/Content.js';
import SearchContent from '../Contents/SearchContent.js';

function AddNewBook() {
    let params = useParams()
    let bookTitleParams = params.bookTitle
    
    let pageTitle = 'Add New Book'
    
    const [showAddContentBox, setShowContent] = useState(false)
    const [bookTitle, setBookTitle] = useState(() => bookTitleParams ? bookTitleParams : '')
    const [pageParams, setPageParams] = useState(() => bookTitleParams ? bookTitleParams : '')
    
    const [contentsList, setContents] = useState(() => {
        let books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : []
        let isBook = books.find(book => book.bookTitle === bookTitle)

        if (isBook !== undefined) {
            if (isBook.contents) {
                return isBook.contents
            }
        }
        return []
    })
    
    const [disableSaveBookButton, setDisableSaveBookButton] = useState(true) 
    const [disableAddContentButton, setDisableAddContentButton] = useState(true)
    const [search, setSearchTerm] = useState('')

    const [searchResults, setSearchResults] = useState([])
    
    let onSearch = (searchTerm) => {
        console.log(searchTerm)
        setSearchTerm(searchTerm)
        getSearchResults(searchTerm)
    }

    let getSearchResults = (searchTerm) => {
        let results = contentsList.filter((content) => {
            return content.title1.toLowerCase().includes(searchTerm.toLowerCase()) || content.title2.toLowerCase().includes(searchTerm.toLowerCase()) 
        })
        setSearchResults(results)
    }

    useEffect(() => {
        if (bookTitle === '') {
            setDisableSaveBookButton(true)
        }
        if (pageParams !== '') {
            setDisableAddContentButton(false)

            let books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : []
            
            let isBook = books.find(book => book.bookTitle === bookTitle)
            let isBookIndex = books.findIndex(book => book.bookTitle === bookTitle)
            
            if (isBook === undefined) {
                let newBook = {
                    bookTitle: bookTitle,
                    contents: contentsList
                }

                console.log(newBook)
                books = [...books, newBook]
                localStorage.setItem('books', JSON.stringify(books))
            }
            if (isBook !== undefined) {
                books[isBookIndex] = {
                    bookTitle: bookTitle,
                    contents: contentsList
                }

                localStorage.setItem('books', JSON.stringify(books))
            }
        }
    }, [bookTitle, pageParams, contentsList])

    const handleAddContentButton = () => {
        setShowContent(!showAddContentBox)
    }

    const handleSaveContent = (newContent) => {
        setContents(contentsList => [...contentsList, newContent])
    }

    const handleSaveBookChange = (bookTitle) => {
        setDisableSaveBookButton(false)
        setBookTitle(bookTitle)
    }

    const handleSaveBookClick = () => {
        setDisableSaveBookButton(true)
        setPageParams(bookTitle)
    }

    const contents_List = contentsList.map((content, index) => {
        return (
            <Content 
                key={index}
                index={index} 
                content={content} />
        )
    })

    const searchResultsBooks = searchResults.map((content, index) => {
        return (
            <Content 
                key={index}
                index={index} 
                content={content} />
        )
    })

    return (
        <div>
            <Typography 
                variant="h3">
                    {bookTitleParams ? bookTitleParams : pageTitle}
            </Typography>
            <SaveBookName
                disableSaveBookButton={disableSaveBookButton}
                type={bookTitleParams ? "params" : "empty"}
                bookTitle={bookTitle}
                handleSaveBookTitle={handleSaveBookChange}
                handleSaveBookClick={handleSaveBookClick} />
            <Button
                disabled={disableAddContentButton} 
                onClick={handleAddContentButton}
                variant="contained">
                    Add Content
            </Button>
            {showAddContentBox ? 
                <AddContentBox
                    handleSaveContent={handleSaveContent} /> 
                : 
                ''}
            <div>
                <SearchContent
                    searchTerm={search}
                    onSearch={onSearch} />
            </div>

            {search.length ? searchResultsBooks : contents_List}
        </div>
    )
}

export default AddNewBook