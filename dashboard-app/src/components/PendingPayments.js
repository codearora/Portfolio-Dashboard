import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

function PendingPayments() {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">Pending Payment</Typography>
                <Typography variant="body2">Pay By</Typography>
                <Typography variant="h6">30 Oct, 2023</Typography>
                <Typography variant="body2">Bajaj Finserv Corp FD 1</Typography>
                <Typography variant="body2">Deposit Amt: Rs. 25,000</Typography>
                <Typography variant="body2">Tenure: 18 Months</Typography>
                <Typography variant="body2">Interest Rate: 8.10%</Typography>
                <Button variant="contained" color="primary">Pay Now</Button>
                <Button variant="outlined" color="secondary">Cancel Application</Button>
            </CardContent>
        </Card>
    );
}

export default PendingPayments;
