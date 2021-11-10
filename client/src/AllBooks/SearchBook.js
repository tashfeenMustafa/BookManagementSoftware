import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';

export default function SearchBook() {
    return ( 
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
                }}>
                    <SearchIcon 
                    sx={{
                        float: 'left'
                    }}/>
                    Search by book title 
                </Typography>
            }
            variant="standard" />
    )
}