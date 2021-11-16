import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContentCancelAndSave(props) {
    return ( 
        <Stack spacing={2} direction="row">
            <Button
                onClick={props.handleCancel} 
                variant="text">
                    Cancel
            </Button>
            <Button 
                onClick={props.handleSave}
                variant="contained">
                    Save Content
            </Button>
        </Stack>
    )
}