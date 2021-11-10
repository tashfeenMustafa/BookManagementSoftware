import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import ContentFileUpload from './ContentFileUpload';
import ContentFileTitle from './ContentFileTitle';
import ContentTypeSelect from './ContentTypeSelect';
import ContentStartPageInput from '../Contents/ContentStartPageInput';
import ContentEndPageInput from '../Contents/ContentEndPageInput';
import ContentNumberOfPagesInput from '../Contents/ContentNumberOfPagesInput';
import ContentCancelAndSave from './ContentCancelAndSave';

export default function AddContentBox() {

    return ( 
        <Box 
        sx={{
            border: '1px solid black',
            width: '90%',
            padding: '1%',
            marginTop: '3%'
        }}>
            <Grid container spacing={2}>
                <ContentFileTitle />
                <ContentFileUpload />
            </Grid>
            <Box>
                <ContentTypeSelect />
                <ContentStartPageInput />
                <ContentEndPageInput />
                <ContentNumberOfPagesInput />
                <ContentCancelAndSave />
            </Box>
            
        </Box>
    )
}