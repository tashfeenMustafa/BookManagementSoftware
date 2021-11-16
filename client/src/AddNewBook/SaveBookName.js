import * as React from 'react';
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import './SaveBookName.css'

export default function SaveBookName(props) {
    const handleChange = (event) => {
        props.handleSaveBookTitle(event.target.value)
    }

    const handleClick = (event) => {
        props.handleSaveBookClick()
    }

    return ( 
        <Grid container>
            <Grid item xs={6}>
                <TextField 
                sx={{
                    margin: '10px 0 10px 0',
                    width: '100%'
                }} 
                value={props.bookTitle}
                id="standard-basic" 
                label={props.type === "empty" ? "Add New Book" : "Change Book Name"} 
                variant="standard"
                onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
                <Link
                    className="saveBookButton"
                    onClick={handleClick}
                    to={`/books/${props.bookTitle}`}>
                    <Button 
                        disabled={props.disableSaveBookButton}
                        variant="contained">
                            Save Book
                    </Button>
                </Link>
                
            </Grid>
        </Grid>
    )
}