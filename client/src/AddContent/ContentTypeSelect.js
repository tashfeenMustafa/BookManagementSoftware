import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ContentTypeSelect(props) {
    const handleChange = (event) => {
        console.log(event.target.value)
        props.handleContentTypeSelect(event.target.value)
    };

    return ( 
        <FormControl sx={{width: '30%'}}>
            <InputLabel id="demo-simple-select-label">Content Type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.contentType}
                label="Content Type"
                onChange={handleChange} >
            <MenuItem value={"book-report"}>Book Cover</MenuItem>
            <MenuItem value={"book-intro"}>Book Intro</MenuItem>
            <MenuItem value={"simple-report"}>Simple Report</MenuItem>
            <MenuItem value={"comparison-report"}>Comparison Report</MenuItem>
            <MenuItem value={"categorical-report"}>Categorical Report</MenuItem>
            </Select>
        </FormControl>
    )
}