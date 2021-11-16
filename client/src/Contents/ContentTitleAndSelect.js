import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function ContentTitleAndSelect(props) {
    return ( 
        <Grid 
        container 
        spacing={2}>
            <Grid 
                item 
                xs={12} 
                sm={12} 
                md={12} 
                lg={12}>
                <Checkbox {...label} />
                <Typography
                    component="span">
                    {props.contentType ? props.contentType : props.title}
                </Typography>
            </Grid>
            <Grid
                
                item 
                xs={12} 
                sm={12} 
                md={12} 
                lg={12}>
                <Typography
                sx={{
                    paddingLeft: 1,
                    paddingBottom: 4
                }}
                    variant="p">
                        {props.type}
                </Typography>
            </Grid>
        </Grid>
        
    )
}