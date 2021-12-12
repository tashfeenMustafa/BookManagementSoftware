import React from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


function ADPRADPInput (props) {
    const [ADPorRADP, setADPorRADP] = React.useState('adp');

    const handleChange = (event) => {
        setADPorRADP(event.target.value)
        props.handleADPorRADPChange(event.target.value)
    };

    return (
        <ToggleButtonGroup
        value={ADPorRADP}
        exclusive
        onChange={handleChange}
        aria-label="adp or radp"
        >
            <ToggleButton value="adp" aria-label="adp option">
                ADP
            </ToggleButton>
            <ToggleButton value="radp" aria-label="radp option">
                RADP
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default ADPRADPInput;