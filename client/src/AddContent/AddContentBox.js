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

export default function AddContentBox(props) {
    let [contentType, setContentType] = useState('')

    let [contentTitle1, setContentTitle1] = useState('')
    let [contentTitle2, setContentTitle2] = useState('')
    
    let [file1, setFile1] = useState('')
    let [file2, setFile2] = useState('')

    let [s1, setS1] = useState(0)
    let [s2, setS2] = useState(0)

    let [e1, setE1] = useState(0)
    let [e2, setE2] = useState(0)

    let [n1, setN1] = useState(0)
    let [n2, setN2] = useState(0)

    const handleContentTitle1_Change = (contentTitle1) => {
        setContentTitle1(contentTitle1)
    }

    const handleContentTitle2_Change = (contentTitle2) => {
        setContentTitle2(contentTitle2)
    }

    const handleFileTitle1_Change = (file1) => {
        setFile1(file1)
    }

    const handleFileTitle2_Change = (file2) => {
        setFile2(file2)
    }

    const handleS1_Change = (s1) => {
        setS1(isNaN(parseInt(s1)) ? 0 : parseInt(s1), 10)
    }

    const handleS2_Change = (s2) => {
        setS2(isNaN(parseInt(s2)) ? 0 : parseInt(s2), 10)
    }

    const handleE1_Change = (e1) => {
        setE1(isNaN(parseInt(e1)) ? 0 : parseInt(e1), 10)
    }

    const handleE2_Change = (e2) => {
        setE2(isNaN(parseInt(e2)) ? 0 : parseInt(e2), 10)
    }

    const handleN1_Change = (n1) => {
        setN1(isNaN(parseInt(n1)) ? 0 : parseInt(n1), 10)
    }

    const handleN2_Change = (n2) => {
        setN2(isNaN(parseInt(n2)) ? 0 : parseInt(n2), 10)
    }

    const handleContentTypeSelect = (contentType) => {
        setContentType(contentType)
    }

    const clearState = () => {
        setContentTitle1('')
        setContentTitle2(0)
        setFile1('')
        setFile2(0)
        setS1(0)
        setS2(0)
        setE1(0)
        setE2(0)
        setN1(0)
        setN2(0)
        setContentType('')
    }

    const saveContent = () => {
        let newContent = {
            type: contentType,
            title1: contentTitle1,
            title2: contentTitle2,
            file1: file1,
            file2: file2,
            s1: s1,
            e1: e1,
            n1: n1,
            s2: s2,
            e2: e2,
            n2: n2,
        }
        props.handleSaveContent(newContent)
        clearState()
    }

    const cancelContent = () => {
        clearState()
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
                            label={titleLabel1}
                            contentTitle={contentTitle1}
                            handleContentTitleChange={handleContentTitle1_Change} />
                        <ContentFileUpload 
                            label={fileLabel1} 
                            file={file1}
                            handleFileChange={handleFileTitle1_Change} />
                        <ContentFileTitle
                            label={titleLabel2} 
                            contentTitle={contentTitle2}
                            handleContentTitleChange={handleContentTitle2_Change} />
                        <ContentFileUpload 
                            label={fileLabel2}
                            file={file2}
                            handleFileChange={handleFileTitle2_Change} />
                    </> :
                    <>
                        <ContentFileTitle
                            label={titleLabel} 
                            contentTitle={contentTitle1}
                            handleContentTitleChange={handleContentTitle1_Change} />
                        <ContentFileUpload 
                            label={fileLabel}
                            file={file1}
                            handleFileChange={handleFileTitle1_Change} />
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
                                label={S1}
                                s={s1}
                                handleSChange={handleS1_Change} />
                            <ContentEndPageInput 
                                label={E1}
                                e={e1}
                                handleEChange={handleE1_Change} />
                            <ContentNumberOfPagesInput 
                                label={N1}
                                n={n1}
                                handleNChange={handleN1_Change} />
                            <ContentStartPageInput 
                                label={S2}
                                s={s2}
                                handleSChange={handleS2_Change}  />
                            <ContentEndPageInput 
                                label={E2}
                                e={e2}
                                handleEChange={handleE2_Change}  />
                            <ContentNumberOfPagesInput 
                                label={N2}
                                n={n2}
                                handleNChange={handleN2_Change}  />
                        </> :
                        <>
                            
                            <ContentStartPageInput 
                                label={S}
                                s={s1}
                                handleSChange={handleS1_Change} />
                            <ContentEndPageInput 
                                label={E}
                                e={e1}
                                handleEChange={handleE1_Change} />
                            <ContentNumberOfPagesInput 
                                label={N}
                                n={n1}
                                handleNChange={handleN1_Change} />
                        </>
                    }
                </div>
                <div>
                    <ContentCancelAndSave
                    handleSave={saveContent}
                    handleCancel={cancelContent} />
                </div>
            </Box>
        </Box>
    )
}