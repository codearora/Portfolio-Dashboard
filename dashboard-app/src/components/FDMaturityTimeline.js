import React from 'react';
import { Bar } from 'react-chartjs-2';

function FDMaturityTimeline() {
    const data = {
        labels: ['JFM', 'AMJ', 'JAS', 'OND', 'JFM', 'AMJ', 'JAS', 'OND'],
        datasets: [
            {
                label: 'Utkarsh FD 1',
                backgroundColor: '#36A2EB',
                data: [10, 20, 30, 40, 50, 60, 70, 80]
            },
            {
                label: 'Shriram FD Plan 2',
                backgroundColor: '#FF6384',
                data: [80, 70, 60, 50, 40, 30, 20, 10]
            }
        ]
    };

    const options = {
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        }
    };

    return (
        <div>
            <h2>FD Maturity Timeline</h2>
            <Bar data={data} options={options} />
        </div>
    );
}

export default FDMaturityTimeline;
