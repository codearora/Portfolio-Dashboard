import React from 'react';
import FDPortfolioChart from './FDPortfolioChart';
import FDMaturityTimeline from './FDMaturityTimeline';
import BankCard from './BankCard';
import VideoKYC from './VideoKYC';
import PendingPayments from './PendingPayments';
import Articles from './Articles';
import { Grid, Container, Button, Box, styled } from '@mui/material';

const StyledContainer = styled(Container)({
    paddingTop: '40px',
    paddingBottom: '40px',
});

const StyledButton = styled(Button)({
    borderRadius: '50px',
    padding: '10px 20px',
    fontSize: '1em',
    textTransform: 'none',
    backgroundColor: '#FF4081',
    color: 'white',
    '&:hover': {
        backgroundColor: '#F50057',
    }
});

function Dashboard() {
    return (
        <StyledContainer maxWidth="lg">
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
                        color="#9C27B0"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <BankCard
                        bankName="Bajaj Finserv"
                        interestRate="8.80% p.a"
                        details="Crisil AAA Rated, No Video KYC required"
                        action="Book Now"
                        color="#2196F3"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <BankCard
                        bankName="Shriram Finance"
                        interestRate="8.80% p.a"
                        details="Crisil AAA Rated, No Video KYC required"
                        action="Book Now"
                        color="#212121"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <BankCard
                        bankName="Mahindra Finance"
                        interestRate="8.80% p.a"
                        details="Crisil AAA Rated, No Video KYC required"
                        action="Book Now"
                        color="#F44336"
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
                        <StyledButton variant="contained">
                            Get Answers
                        </StyledButton>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Articles />
                </Grid>
            </Grid>
        </StyledContainer>
    );
}

export default Dashboard;
