import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { contentTypes } from './data.js';

function AddNewBook() {

    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const contents = contentTypes.map((contentType, index) => {
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
                                {contentType.name }
                            <div style={{ 
                                    float: 'right' 
                            }}>
                            </div>
                            </Typography>
                    } />
                </FormGroup>
                <TextField 
                    sx={{
                        margin: '0 2% 0 2%',
                        width: '10%'
                    }}  
                    id="standard-basic" 
                    label="S" 
                    variant="standard" />
                <TextField 
                    sx={{
                        margin: '0 2% 0 2%',
                        width: '10%'
                    }}  
                    id="standard-basic" 
                    label="E" 
                    variant="standard" />
                <TextField 
                    sx={{
                        margin: '0 2% 0 2%',
                        width: '10%'
                    }}  
                    id="standard-basic" 
                    label="N" 
                    variant="standard" />
                <Stack spacing={2} direction="row" 
                sx={{
                    margin: '2% 0 0 0 '
                }}>
                    <Button variant="text">Edit</Button>
                    <Button variant="contained">Delete</Button>
                </Stack>
            </Box>
        )
    })

    return (
        <div>
            <div>
                <Typography 
                    variant="h3">
                        Add New Book
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField 
                        sx={{
                            margin: '10px 0 10px 0',
                            width: '100%'
                        }}  
                        id="standard-basic" 
                        label="Add New Book" 
                        variant="standard" />
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained">Save Book</Button>
                    </Grid>
                </Grid>
                <Button variant="contained">Add Content</Button>
                <Box 
                sx={{
                    border: '1px solid black',
                    width: '90%',
                    padding: '1%',
                    marginTop: '3%'
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <TextField 
                                sx={{
                                    margin: '10px 0 10px 0',
                                    width: '100%'
                                }}  
                                id="standard-basic" 
                                label="Content Title" 
                                variant="standard" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField 
                                sx={{
                                    margin: '10px 0 10px 0',
                                    width: '100%'
                                }}  
                                id="standard-basic" 
                                label="File Upload" 
                                variant="standard" />
                            
                        </Grid>
                    </Grid>
                    
                    <Box>
                        <FormControl sx={{width: '30%'}}>
                            <InputLabel id="demo-simple-select-label">Content Type</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Content Type"
                            onChange={handleChange}
                            >
                            <MenuItem value={10}>Book Cover</MenuItem>
                            <MenuItem value={20}>Book Intro</MenuItem>
                            <MenuItem value={30}>Simple Report</MenuItem>
                            <MenuItem value={30}>Comparison Report</MenuItem>
                            <MenuItem value={30}>Categorical Report</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField 
                                sx={{
                                    margin: '10px 2% 10px 2%',
                                    width: '10%'
                                }}  
                                id="standard-basic" 
                                label="S" 
                                variant="standard" />
                        <TextField 
                                sx={{
                                    margin: '10px 2% 10px 0',
                                    width: '10%'
                                }}  
                                id="standard-basic" 
                                label="E" 
                                variant="standard" />
                        <TextField 
                                sx={{
                                    margin: '10px 0 10px 0',
                                    width: '10%'
                                }}  
                                id="standard-basic" 
                                label="N" 
                                variant="standard" />
                        <Stack spacing={2} direction="row">
                            <Button variant="text">Cancel</Button>
                            <Button variant="contained">Save Content</Button>
                        </Stack>
                    </Box>
                    
                </Box>
                {contents ? contents : null}
            </div>
        </div>
    )
}

export default AddNewBook