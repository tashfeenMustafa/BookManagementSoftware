import React from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function DraftOrFinal(props) {
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        >
            <ToggleButton value="left" aria-label="left aligned">
                Final
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
                Draft
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default DraftOrFinal;