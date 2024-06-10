import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

function VideoKYC() {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">Video KYC</Typography>
                <Typography variant="body2">Scheduled On</Typography>
                <Typography variant="h6">28 Oct, 2023</Typography>
                <Typography variant="body2">Utkarsh SF Bank FD Plan 2</Typography>
                <Typography variant="body2">Deposit Amt: Rs. 20,000</Typography>
                <Typography variant="body2">Tenure: 2 Years</Typography>
                <Typography variant="body2">Interest Rate: 9.10%</Typography>
                <Button variant="contained" color="primary">Complete Now</Button>
                <Button variant="outlined" color="secondary">Reschedule</Button>
            </CardContent>
        </Card>
    );
}

export default VideoKYC;
