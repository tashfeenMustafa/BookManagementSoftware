import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ContentTypeSelect(props) {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return ( 
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
    )
}