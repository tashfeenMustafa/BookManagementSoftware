import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';

import { books } from './data.js';

function AllBooks() {
    const [booksList] = useState(books)
    let location = useLocation()

    const allBooks = booksList.map((book, index) => {
        return (
            <Box 
                key={index} 
                component="div" 
                sx={{ 
                        margin: '1% 0 1% 0',
                        p: 2, 
                        border: '1px solid grey' 
                }}>
                <FormGroup>
                    <FormControlLabel 
                        control={<Checkbox />} 
                        label={ 
                            <Typography
                                sx={{
                                    width: '100%'
                                }}
                            >
                                {book.title }
                            <div 
                                style={{ 
                                    float: 'right' 
                                }}>
                                <EditIcon />
                                <DeleteIcon />
                            </div>
                            </Typography>
                            
                    } />
                    
                </FormGroup>
            </Box>
        )
    })
    return (
        <div>
            <div>
                <Typography 
                    variant="h3">
                        All Books
                </Typography>
            </div>
            <div className="search">
                <TextField
                    sx={{
                        margin: '10px 0 10px 0',
                        width: '40%'
                    }} 
                    id="standard-basic" 
                    label={
                        <Typography 
                            paragraph
                            sx={{
                                width: '100%'
                            }}
                        >
                            <SearchIcon 
                                sx={{
                                    float: 'left'
                                }}
                            />
                            Search by book title 
                        </Typography>
                    }
                    variant="standard" />
            </div>
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