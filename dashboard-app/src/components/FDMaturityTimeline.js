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
                data: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(75, 192, 192, 0.5)',
                stack: '2024',
            },
            {
                label: 'Shriram FD Plan 2',
                data: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(153, 102, 255, 0.5)',
                stack: '2024',
            },
            {
                label: 'Bajaj Finserv FD 1',
                data: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(255, 159, 64, 0.5)',
                stack: '2024',
            },
            {
                label: 'Mahindra FD Plan 2',
                data: Array(19).fill(1).concat(Array(1).fill(0)),
                backgroundColor: 'rgba(255, 205, 86, 0.2)',
                borderColor: 'rgba(255, 205, 86, 1)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(255, 205, 86, 0.5)',
                stack: '2025-2026',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14,
                        family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
                    },
                    color: '#333',
                },
            },
            title: {
                display: true,
                text: 'FD Maturity Timeline',
                font: {
                    size: 20,
                    family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    weight: 'bold',
                },
                color: '#333',
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleFont: {
                    size: 14,
                    family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                },
                bodyFont: {
                    size: 12,
                    family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                },
                footerFont: {
                    size: 10,
                    family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                },
            },
        },
        scales: {
            x: {
                stacked: true,
                ticks: {
                    font: {
                        size: 12,
                        family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    },
                    color: '#333',
                },
                grid: {
                    display: false,
                },
            },
            y: {
                stacked: true,
                beginAtZero: true,
                ticks: {
                    display: false,
                },
                grid: {
                    display: false,
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default FDMaturityTimeline;
