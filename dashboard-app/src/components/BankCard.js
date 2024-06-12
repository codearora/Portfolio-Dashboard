import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

function BankCard({ bankName, interestRate, details, action, color }) {
    return (
        <Card sx={{
            backgroundColor: color,
            color: 'white',
            borderRadius: '20px',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
            transformStyle: 'preserve-3d', // Preserve 3D transformations
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
                transform: 'translateY(-10px) rotateX(8deg)', // Apply translateY and rotateX transformations on hover
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            },
            padding: '16px',
            marginBottom: '16px',
            textAlign: 'center',
        }}>
            <CardContent sx={{ transform: 'translateZ(20px)' }}> {/* Add depth to content */}
                <Typography variant="h5" sx={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                    {bankName}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '12px' }}>
                    {interestRate} Interest Rate
                </Typography>
                <Typography sx={{ fontSize: '1rem', opacity: 0.9, marginBottom: '16px' }}>
                    {details}
                </Typography>
                <Button variant="contained" sx={{
                    borderRadius: '25px',
                    padding: '10px 24px',
                    fontSize: '0.9rem',
                    textTransform: 'capitalize',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
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
