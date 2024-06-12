import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

function PendingPayments() {
    return (
        <Card sx={{ backgroundColor: '#f9f9f9', borderRadius: 2, boxShadow: 3 }}>
            <CardContent sx={{ textAlign: 'center', padding: 3 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                    Pending Payment
                </Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>
                    Pay By
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ color: '#e53935', fontWeight: 'bold' }}>
                    30 Oct, 2023
                </Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>
                    Bajaj Finserv Corp FD 1
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', marginBottom: 2 }}>
                    Deposit Amt: Rs. 25,000
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', marginBottom: 2 }}>
                    Tenure: 18 Months
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', marginBottom: 3 }}>
                    Interest Rate: 8.10%
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button variant="contained" color="primary" sx={{ marginRight: 1 }}>
                        Pay Now
                    </Button>
                    <Button variant="outlined" color="secondary">
                        Cancel Application
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}

export default PendingPayments;
