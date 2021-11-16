import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

export default function ContentTitleAndSelect(props) {
    return ( 
        <FormGroup>
            <FormControlLabel 
                control={<Checkbox />} 
                label={ 
                    <Typography
                        sx={{
                            width: '100%'
                        }}
                    >
                        {props.contentType ? props.contentType : props.title}
                    </Typography>
            } />
        </FormGroup>
    )
}