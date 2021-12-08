import * as React from 'react';
import Box from '@mui/material/Box';

import ContentStartPageInput from './ContentStartPageInput';
import ContentEndPageInput from './ContentEndPageInput';
import ContentNumberOfPagesInput from './ContentNumberOfPagesInput';
import ContentEditDeleteButton from './ContentEditDeleteButtons';
import ContentTitleAndSelect from './ContentTitleAndSelect';

/*const titleLabel = 'Content Title'
const titleLabel1 = 'Content Title 1'
const titleLabel2 = 'Content Title 2'

const fileLabel = 'File Upload'
const fileLabel1 = 'File Upload 1'
const fileLabel2 = 'File Upload 2'
*/
const S = 'S'
const S1 = 'S1'
const S2 = 'S2'

const E = 'E'
const E1 = 'E1'
const E2 = 'E2'

const N = 'N'
const N1 = 'N1'
const N2 = 'N2'

export default function Content(props) {
    return ( 
        <Box 
            key={props.index}  
            sx={{ 
                    margin: '1% 0 1% 0',
                    p: '12px 8px 12px 8px',
                    border: '1px solid grey' 
            }}>
            {
                props.content.type === "comparison-report" ? 
                <>
                    <ContentTitleAndSelect 
                        title={props.content.title1 + 
                        ' and ' + props.content.title2}
                        type={props.content.type} />
                    <div style={{
                        marginTop: '2%'
                    }}>
                        <ContentStartPageInput
                            label={S1}
                            s={props.content.s1} />
                        <ContentEndPageInput
                            label={E1}
                            e={props.content.e1} />
                        <ContentNumberOfPagesInput
                            label={N1}
                            n={props.content.n1} />
                        <ContentStartPageInput
                            label={S2}
                            s={props.content.s2} />
                        <ContentEndPageInput
                            label={E2}
                            e={props.content.e2} />
                        <ContentNumberOfPagesInput
                            label={N2}
                            n={props.content.n2} />
                    </div>
                    <ContentEditDeleteButton /> 
                </>
                :
                <>
                    <ContentTitleAndSelect 
                        title={props.content.title1}
                        type={props.content.type} />
                    <div style={{
                        marginTop: '2%'
                    }}>
                        <ContentStartPageInput 
                            label={S}
                            s={props.content.s1} />
                        <ContentEndPageInput
                            label={E}
                            e={props.content.e1} />
                        <ContentNumberOfPagesInput
                            label={N}
                            n={props.content.n1} />
                    </div>
                    <ContentEditDeleteButton />  
                </>
            }
        </Box>
    )
}