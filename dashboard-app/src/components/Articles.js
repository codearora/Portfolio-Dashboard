import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';

function Article({ title, content }) {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2">{content}</Typography>
                <Button variant="text">Read more...</Button>
            </CardContent>
        </Card>
    );
}

function Articles() {
    const articles = [
        { title: "How FDs are taxed", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { title: "How FDs are taxed", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { title: "How FDs are taxed", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
    ];

    return (
        <div>
            <Typography variant="h5">Get Answer</Typography>
            <Typography variant="body2">to all your questions</Typography>
            <Grid container spacing={2}>
                {articles.map((article, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <Article title={article.title} content={article.content} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Articles;
