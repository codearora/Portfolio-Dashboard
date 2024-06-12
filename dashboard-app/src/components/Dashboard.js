import React from 'react';
import FDPortfolioChart from './FDPortfolioChart';
import FDMaturityTimeline from './FDMaturityTimeline';
import BankCard from './BankCard';
import VideoKYC from './VideoKYC';
import PendingPayments from './PendingPayments';
import Articles from './Articles';
import { Grid, Container, Button, Box } from '@mui/material';

function Dashboard() {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={4}>
                    <FDPortfolioChart />
                </Grid>
                <Grid item xs={12} md={6} lg={8}>
                    <FDMaturityTimeline />
                </Grid>
                <Grid item xs={12} md={6}>
                    <BankCard
                        bankName="Utkarsh Small Finance Bank"
                        interestRate="9.10% p.a"
                        details="Highest Interest Rate, RBI Insured"
                        action="Book Now"
                        color="purple"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <BankCard
                        bankName="Bajaj Finserv"
                        interestRate="8.80% p.a"
                        details="Crisil AAA Rated, No Video KYC required"
                        action="Book Now"
                        color="blue"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <BankCard
                        bankName="Shriram Finance"
                        interestRate="8.80% p.a"
                        details="Crisil AAA Rated, No Video KYC required"
                        action="Book Now"
                        color="black"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <BankCard
                        bankName="Mahindra Finance"
                        interestRate="8.80% p.a"
                        details="Crisil AAA Rated, No Video KYC required"
                        action="Book Now"
                        color="red"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <VideoKYC />
                </Grid>
                <Grid item xs={12} md={6}>
                    <PendingPayments />
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ textAlign: 'center', mt: 4 }}>
                        <Button variant="contained" color="primary" sx={{
                            borderRadius: '50px',
                            padding: '10px 20px',
                            fontSize: '1em',
                            textTransform: 'none',
                            backgroundColor: '#3f51b5',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#303f9f',
                            }
                        }}>
                            Get Answers
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Articles />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Dashboard;
