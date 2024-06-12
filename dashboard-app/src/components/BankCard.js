import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

function BankCard({ bankName, interestRate, details, action, color }) {
    return (
        <Card sx={{
            backgroundColor: color,
            color: 'white',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '16px',
            marginBottom: '16px'
        }}>
            <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {bankName}
                </Typography>
                <Typography variant="h6" sx={{ marginTop: '8px' }}>
                    {interestRate}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '8px', opacity: 0.8 }}>
                    {details}
                </Typography>
                <Button variant="contained" color="secondary" sx={{ marginTop: '16px' }}>
                    {action}
                </Button>
            </CardContent>
        </Card>
    );
}

export default BankCard;
