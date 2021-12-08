import React from "react";
import TextField from "@mui/material/TextField";

function FiscalYearInput(props) {
    const [value, setValue] = React.useState('2020-2021');

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <>
            <TextField
                value={value}
                onChange={handleChange}
                required
                label="Fiscal Year" />
        </>
    )
}

export default FiscalYearInput