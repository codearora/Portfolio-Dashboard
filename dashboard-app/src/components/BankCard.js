import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        borderLeft: props => `5px solid ${props.color}`,
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: '8px',
    },
    button: {
        marginTop: '10px',
    },
});

const BankCard = ({ bankName, interestRate, details, action, color }) => {
    const classes = useStyles({ color });

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {bankName}
                </Typography>
                <Typography color="textSecondary">
                    {interestRate}
                </Typography>
                <Typography variant="body2" component="p">
                    {details}
                </Typography>
                <Button className={classes.button} variant="contained" color="primary">
                    {action}
                </Button>
            </CardContent>
        </Card>
    );
};

export default BankCard;
