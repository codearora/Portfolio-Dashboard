import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

function VideoKYC() {
    return (
        <Card sx={{
            background: 'linear-gradient(135deg, #ff6b6b 30%, #f3e5ab 90%)',
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
                    Video KYC
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '8px', fontSize: '1em', opacity: 0.8 }}>
                    Scheduled On
                </Typography>
                <Typography variant="h6" sx={{ marginTop: '8px', fontSize: '1.2em', fontWeight: '500' }}>
                    28 Oct, 2023
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '8px', fontSize: '1em', opacity: 0.8 }}>
                    Utkarsh SF Bank FD Plan 2
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '8px', fontSize: '1em', opacity: 0.8 }}>
                    Deposit Amt: Rs. 20,000
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '8px', fontSize: '1em', opacity: 0.8 }}>
                    Tenure: 2 Years
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '8px', fontSize: '1em', opacity: 0.8 }}>
                    Interest Rate: 9.10%
                </Typography>
                <Button variant="contained" sx={{
                    marginTop: '16px',
                    borderRadius: '50px',
                    padding: '10px 20px',
                    fontSize: '1em',
                    textTransform: 'none',
                    backgroundColor: 'white',
                    color: '#ff6b6b',
                    '&:hover': {
                        backgroundColor: '#ff6b6b',
                        color: 'white',
                    }
                }}>
                    Complete Now
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
                    Reschedule
                </Button>
            </CardContent>
        </Card>
    );
}

export default VideoKYC;
