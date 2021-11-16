import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';

export default function SearchContent(props) {
    let handleSearchChange = (event) => {
        props.onSearch(event.target.value)
    }
    
    return ( 
        <TextField
            sx={{
                margin: '2% 0 2% 0',
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
                    Search by content title 
                </Typography>
            }
            variant="standard" 
            value={props.searchTerm}
            onChange={handleSearchChange} />
    )
}