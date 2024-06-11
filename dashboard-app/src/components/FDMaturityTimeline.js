import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const data = {
    labels,
    datasets: [
        {
            label: 'Utkarsh FD 1',
            data: [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: '#FF6384',
        },
        {
            label: 'Shriram FD Plan 2',
            data: [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: '#36A2EB',
        },
        {
            label: 'Bajaj Finserv FD 1',
            data: [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
            backgroundColor: '#FFCE56',
        },
        {
            label: 'Mahindra FD Plan 2',
            data: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
            backgroundColor: '#4BC0C0',
        },
    ],
};

function FDMaturityTimeline() {
    return (
        <div className="fd-maturity-timeline">
            <Bar options={options} data={data} />
        </div>
    );
}

export default FDMaturityTimeline;
