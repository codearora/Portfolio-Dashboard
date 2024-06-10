import React, { useRef, useEffect } from 'react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function FDMaturityTimeline() {
    const data = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        datasets: [{
            label: 'Utkarsh FD 1',
            data: [12, 19, 3, 5, 2, 3, 10, 15, 8, 20, 7, 11],
            backgroundColor: '#36A2EB',
        }]
    };

    const chartRef = useRef(null);

    useEffect(() => {
        let chartInstance = null;
        if (chartRef.current) {
            chartInstance = new Chart(chartRef.current, {
                type: 'bar',
                data: data,
            });
        }

        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, [data]);

    return <canvas ref={chartRef} />;
}

export default FDMaturityTimeline;
