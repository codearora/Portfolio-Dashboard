import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';

function Article({ title, content }) {
    return (
        <Card sx={{
            backgroundColor: '#f5f5f5',
            borderRadius: '15px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
            }
        }}>
            <CardContent>
                <Typography variant="h6" sx={{
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: '#3f51b5'
                }}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{
                    marginBottom: '16px',
                    color: '#555'
                }}>
                    {content}
                </Typography>
                <Button variant="text" sx={{
                    color: '#3f51b5',
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: 'transparent',
                        textDecoration: 'underline'
                    }
                }}>
                    Read more...
                </Button>
            </CardContent>
        </Card>
    );
}

export default Article;
