import * as React from 'react';
import Box from '@mui/material/Box';

import ContentStartPageInput from './ContentStartPageInput';
import ContentEndPageInput from './ContentEndPageInput';
import ContentNumberOfPagesInput from './ContentNumberOfPagesInput';
import ContentEditDeleteButton from './ContentEditDeleteButtons';
import ContentTitleAndSelect from './ContentTitleAndSelect';

export default function Content(props) {
    return ( 
        <Box 
            key={props.index} 
            component="div" 
            sx={{ 
                    margin: '1% 0 1% 0',
                    p: 2, 
                    border: '1px solid grey' 
            }}>
            <ContentTitleAndSelect contentType={props.contentType} />
            <ContentStartPageInput />
            <ContentEndPageInput />
            <ContentNumberOfPagesInput />
            <ContentEditDeleteButton />
        </Box>
    )
}