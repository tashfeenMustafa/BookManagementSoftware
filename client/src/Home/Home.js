import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function Home () {
    const [localUser] = useState(localStorage.getItem('user') || '') 

    return (
        <>
            <Typography variant='h2'>
            Welcome to your Dashboard, {localUser}!
            </Typography>
            <Divider />
            <Typography variant='h4'>
            Access all your Books and Account Settings from here.
            </Typography>
        </>
    );
}