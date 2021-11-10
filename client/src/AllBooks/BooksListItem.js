import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function BooksListItem(props) {
    return (
        <Box 
        key={props.index} 
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
                    }}>
                        {props.book.title }
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
}