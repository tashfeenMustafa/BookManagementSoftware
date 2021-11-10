import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContentCancelAndSave(props) {
    return ( 
        <Stack spacing={2} direction="row">
            <Button variant="text">Cancel</Button>
            <Button variant="contained">Save Content</Button>
        </Stack>
    )
}