import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SaveBookName from './SaveBookName.js';
import AddContentBox from '../AddContent/AddContentBox.js';
import Content from '../Contents/Content.js';

function AddNewBook() {
    let params = useParams()
    let bookTitleParams = params.bookTitle
    
    let pageTitle = 'Add New Book'
    
    const [showContent, setShowContent] = useState(false)
    const [bookTitle, setBookTitle] = useState('')
    const [contentsList, setContents] = useState([])

    const handleAddContentButton = () => {
        setShowContent(!showContent)
    }

    const handleSaveContent = (newContent) => {
        setContents(contentsList => [...contentsList, newContent])
    }

    const handleSaveBookTitle = (bookTitle) => {
        setBookTitle(bookTitle)
    } 

    const contents_List = contentsList.map((content, index) => {
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
                bookTitle={bookTitle}
                handleSaveBookTitle={handleSaveBookTitle} />
            <Button 
                onClick={handleAddContentButton}
                variant="contained">
                    Add Content
            </Button>
            {showContent ? 
                <AddContentBox
                    handleSaveContent={handleSaveContent} /> 
                : 
                ''}
            {contentsList ? contents_List : null}
        </div>
    )
}

export default AddNewBook