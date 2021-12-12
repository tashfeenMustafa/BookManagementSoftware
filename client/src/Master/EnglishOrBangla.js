import React from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function EnglishOrBangla(props) {
    const [language, setLanguage] = React.useState('english');

    const handleChange = (event) => {
        setLanguage(event.target.value)
        props.handleEnglishOrBangla(event.target.value)
    };

    return (
        <ToggleButtonGroup
        value={language}
        exclusive
        onChange={handleChange}
        aria-label="language option"
        >
            <ToggleButton value="english" aria-label="english">
                English
            </ToggleButton>
            <ToggleButton value="bangla" aria-label="bangla">
                বাংলা
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default EnglishOrBangla;