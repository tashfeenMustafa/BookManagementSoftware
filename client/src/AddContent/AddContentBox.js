import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ContentFileUpload from './ContentFileUpload';
import ContentFileTitle from './ContentFileTitle';
import ContentTypeSelect from './ContentTypeSelect';
import ContentStartPageInput from '../Contents/ContentStartPageInput';
import ContentEndPageInput from '../Contents/ContentEndPageInput';
import ContentNumberOfPagesInput from '../Contents/ContentNumberOfPagesInput';
import ContentCancelAndSave from './ContentCancelAndSave';

const titleLabel = 'Content Title'
const titleLabel1 = 'Content Title 1'
const titleLabel2 = 'Content Title 2'

const fileLabel = 'File Upload'
const fileLabel1 = 'File Upload 1'
const fileLabel2 = 'File Upload 2'

const S = 'S'
const S1 = 'S1'
const S2 = 'S2'

const E = 'E'
const E1 = 'E1'
const E2 = 'E2'

const N = 'N'
const N1 = 'N1'
const N2 = 'N2'

export default function AddContentBox() {
    let [contentType, setContentType] = useState('')

    const handleContentTypeSelect = (contentType) => {
        setContentType(contentType)
    }

    return ( 
        <Box 
        sx={{
            border: '1px solid black',
            width: '100%',
            padding: '1%',
            marginTop: '3%'
        }}>
            <Grid container spacing={2}>
                {contentType === "comparison-report" ? 
                    <>
                        <ContentFileTitle
                            label={titleLabel1} />
                        <ContentFileUpload 
                            label={fileLabel1} />
                            <ContentFileTitle
                            label={titleLabel2} />
                        <ContentFileUpload 
                            label={fileLabel2} />
                    </> :
                    <>
                        <ContentFileTitle
                            label={titleLabel} />
                        <ContentFileUpload 
                            label={fileLabel} />
                    </>
                }
                
            </Grid>
            <Box>
                <div style={{
                    margin: '2% 0 2% 0'
                }}>
                    <ContentTypeSelect
                        contentType={contentType} 
                        handleContentTypeSelect={handleContentTypeSelect} />
                
                    {contentType === "comparison-report" ? 
                        <>
                            <ContentStartPageInput 
                                label={S1} />
                            <ContentEndPageInput 
                                label={E1} />
                            <ContentNumberOfPagesInput 
                                label={N1} />
                            <ContentStartPageInput 
                                label={S2} />
                            <ContentEndPageInput 
                                label={E2} />
                            <ContentNumberOfPagesInput 
                                label={N2} />
                        </> :
                        <>
                            
                            <ContentStartPageInput 
                                label={S} />
                            <ContentEndPageInput 
                                label={E} />
                            <ContentNumberOfPagesInput 
                                label={N} />
                        </>
                    }
                </div>
                <div>
                    <ContentCancelAndSave />
                </div>
            </Box>
        </Box>
    )
}