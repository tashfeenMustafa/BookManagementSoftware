import React from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FiscalYearInput from "./FiscalYearInput";
import ADPRADPInput from "./ADPRADPInput";
import DraftOrFinal from "./DraftOrFinal";
import EnglishOrBangla from "./EnglishOrBangla";
import './Options.css';

function Options(props) {
    const [options, setOptions] = React.useState({ fiscalYear: '', adpOrRadp: 'adp', finalOrDraft: 'Draft', englishOrBangla: 'English' })

    const handleADPorRADPChange = (option) => {
        console.log(option)
        setOptions({
            ...options,
            adpOrRadp: option
        })
    }

    const handleFinalOrDraft = (option) => {
        console.log(option)
        setOptions({
            ...options,
            finalOrDraft: option
        })
    }

    const handleEnglishOrBangla = (option) => {
        console.log(option)
        setOptions({
            ...options,
            englishOrBangla: option
        })
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Typography  variant="p">
                    Select your options
                </Typography>
            </Grid>
            <Grid item xs={8} sm={8} md={8} lg={8}>
                <span><FiscalYearInput /></span>
                <span>
                    <ADPRADPInput 
                        handleADPorRADPChange={handleADPorRADPChange}/>
                </span>
                <span>
                    <DraftOrFinal
                        handleFinalOrDraft={handleFinalOrDraft} />
                </span>
                <span>
                    <EnglishOrBangla
                        handleEnglishOrBangla={handleEnglishOrBangla} />
                </span>
            </Grid>
        </Grid>
    )
}

export default Options;