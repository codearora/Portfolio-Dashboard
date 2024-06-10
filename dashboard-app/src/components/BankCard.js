import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

function BankCard({ bankName, interestRate, details, action, color }) {
    return (
        <Card sx={{ backgroundColor: color, color: 'white' }}>
            <CardContent>
                <Typography variant="h5">{bankName}</Typography>
                <Typography variant="h6">{interestRate}</Typography>
                <Typography>{details}</Typography>
                <Button variant="contained" color="secondary">{action}</Button>
            </CardContent>
        </Card>
    );
}

export default BankCard;
