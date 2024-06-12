import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import Article from './Article';

function Articles() {
    const articles = [
        { title: "How FDs are taxed", content: "Learn about the taxation of Fixed Deposits in this comprehensive guide." },
        { title: "Benefits of Investing in FDs", content: "Discover the advantages of investing in Fixed Deposits for secure returns." },
        { title: "FDs vs Mutual Funds", content: "Compare Fixed Deposits and Mutual Funds to make an informed investment decision." }
    ];

    return (
        <Box sx={{ padding: '24px' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '16px', color: '#3f51b5' }}>
                Get Answers
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '32px', color: '#777' }}>
                to all your questions
            </Typography>
            <Grid container spacing={3}>
                {articles.map((article, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Article title={article.title} content={article.content} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Articles;
