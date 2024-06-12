import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

function BankCard({ bankName, interestRate, details, action, color }) {
    return (
        <Card sx={{
            background: `linear-gradient(135deg, ${color} 30%, #000000 90%)`,
            color: 'white',
            borderRadius: '20px',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
            },
            padding: '16px',
            marginBottom: '16px',
            textAlign: 'center',
        }}>
            <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    {bankName}
                </Typography>
                <Typography variant="h6" sx={{ marginTop: '8px', fontSize: '1.2em', fontWeight: '500' }}>
                    {interestRate}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '8px', opacity: 0.8, fontStyle: 'italic' }}>
                    {details}
                </Typography>
                <Button variant="contained" color="secondary" sx={{
                    marginTop: '16px',
                    borderRadius: '50px',
                    padding: '10px 20px',
                    fontSize: '1em',
                    textTransform: 'none',
                    backgroundColor: 'white',
                    color: color,
                    '&:hover': {
                        backgroundColor: color,
                        color: 'white',
                    }
                }}>
                    {action}
                </Button>
            </CardContent>
        </Card>
    );
}

export default BankCard;
