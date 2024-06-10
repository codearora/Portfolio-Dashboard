import React from 'react';
import { Pie } from 'react-chartjs-2';

function FDPortfolioChart() {
    const data = {
        labels: ['Bajaj Finserv', 'Shriram Finance', 'Mahindra Finance', 'Utkarsh Small Finance Bank'],
        datasets: [
            {
                data: [25, 25, 20, 30],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8E44AD'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8E44AD']
            }
        ]
    };

    return (
        <div>
            <h2>Your FD Portfolio</h2>
            <Pie data={data} />
        </div>
    );
}

export default FDPortfolioChart;
