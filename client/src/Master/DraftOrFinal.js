import React from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function DraftOrFinal(props) {
    const [finalOrDraft, setFinalOrDraft] = React.useState('draft');

    const handleChange = (event) => {
        setFinalOrDraft(event.target.value)
        props.handleFinalOrDraft(event.target.value)
    };

    return (
        <ToggleButtonGroup
        value={finalOrDraft}
        exclusive
        onChange={handleChange}
        aria-label="final or draft option"
        >
            <ToggleButton value="draft" aria-label="draft option">
                Draft
            </ToggleButton>
            <ToggleButton value="final" aria-label="final option">
                Final
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default DraftOrFinal;