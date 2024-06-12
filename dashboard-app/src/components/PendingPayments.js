import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

function PendingPayments() {
    return (
        <Card sx={{
            background: 'linear-gradient(135deg, #8e44ad 30%, #3498db 90%)',
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
                    Pending Payment
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '8px', fontSize: '1em', opacity: 0.8 }}>
                    Pay By
                </Typography>
                <Typography variant="h6" sx={{ marginTop: '8px', fontSize: '1.2em', fontWeight: '500' }}>
                    30 Oct, 2023
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '8px', fontSize: '1em', opacity: 0.8 }}>
                    Bajaj Finserv Corp FD 1
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '8px', fontSize: '1em', opacity: 0.8 }}>
                    Deposit Amt: Rs. 25,000
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '8px', fontSize: '1em', opacity: 0.8 }}>
                    Tenure: 18 Months
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '8px', fontSize: '1em', opacity: 0.8 }}>
                    Interest Rate: 8.10%
                </Typography>
                <Button variant="contained" sx={{
                    marginTop: '16px',
                    borderRadius: '50px',
                    padding: '10px 20px',
                    fontSize: '1em',
                    textTransform: 'none',
                    backgroundColor: 'white',
                    color: '#8e44ad',
                    '&:hover': {
                        backgroundColor: '#8e44ad',
                        color: 'white',
                    }
                }}>
                    Pay Now
                </Button>
                <Button variant="outlined" sx={{
                    marginTop: '16px',
                    borderRadius: '50px',
                    padding: '10px 20px',
                    fontSize: '1em',
                    textTransform: 'none',
                    color: 'white',
                    borderColor: 'white',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    }
                }}>
                    Cancel Application
                </Button>
            </CardContent>
        </Card>
    );
}

export default PendingPayments;
