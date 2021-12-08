import React from "react";
import Typography from '@mui/material/Typography';
import Options from './Options.js';
import Template from './Template.js';

function Master(props) {
    return (
        <div>
            <Typography  variant="h3">
                Master
            </Typography>
            <Options />
            <Template />
        </div>
    )
}

export default Master;