import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FDMaturityTimeline = () => {
    const data = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        datasets: [
            {
                label: 'Utkarsh FD 1',
                data: [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                stack: '2024',
            },
            {
                label: 'Shriram FD Plan 2',
                data: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                stack: '2024',
            },
            {
                label: 'Bajaj Finserv FD 1',
                data: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                stack: '2024',
            },
            {
                label: 'Mahindra FD Plan 2',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                backgroundColor: 'rgba(255, 205, 86, 0.2)',
                borderColor: 'rgba(255, 205, 86, 1)',
                borderWidth: 1,
                stack: '2025-2026',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'FD Maturity Timeline',
            },
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default FDMaturityTimeline;
