import * as React from 'react';
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function SaveBookName(props) {
    const handleChange = (event) => {
        props.handleSaveBookTitle(event.target.value)
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
                label="Add New Book" 
                variant="standard"
                onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
                <Link to={`/books/${props.bookTitle}`}>
                    <Button 
                        variant="contained">
                            Save Book
                    </Button>
                </Link>
                
            </Grid>
        </Grid>
    )
}