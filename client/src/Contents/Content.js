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
            {
                props.content.type === "comparison-report" ? 
                <>
                    <ContentTitleAndSelect 
                        title={props.content.title1 + ' and ' + props.content.title2} />
                    <ContentStartPageInput 
                        s={props.content.s1} />
                    <ContentEndPageInput
                        e={props.content.e2} />
                    <ContentNumberOfPagesInput
                        n={props.content.n1 + props.content.n2} />
                    <ContentEditDeleteButton /> 
                </>
                :
                <>
                    <ContentTitleAndSelect 
                        title={props.content.title1} />
                    <ContentStartPageInput 
                        s={props.content.s1} />
                    <ContentEndPageInput
                        e={props.content.e1} />
                    <ContentNumberOfPagesInput
                        n={props.content.n1} />
                    <ContentEditDeleteButton />  
                </>
            }
        </Box>
    )
}