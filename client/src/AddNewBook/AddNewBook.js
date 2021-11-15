import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SaveBookName from './SaveBookName.js';
import AddContentBox from '../AddContent/AddContentBox.js';
import Content from '../Contents/Content.js';
import { contentTypes } from '../data.js';

function AddNewBook() {
    const [showContent, setShowContent] = useState(false)

    let handleAddContentButton = () => {
        setShowContent(!showContent)
    }

    const contents = contentTypes.map((contentType, index) => {
        return (
            <Content 
                index={index} 
                contentType={contentType} />
        )
    })

    return (
        <div>
            <div>
                <Typography 
                    variant="h3">
                        Add New Book
                </Typography>
                <SaveBookName />
                <Button 
                    onClick={handleAddContentButton}
                    variant="contained">
                        Add Content
                </Button>
                {showContent ? <AddContentBox /> : ''}
                {contents ? contents : null}
            </div>
        </div>
    )
}

export default AddNewBook