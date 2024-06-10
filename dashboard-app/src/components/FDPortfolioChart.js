import React, { useRef, useEffect } from 'react';
import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(PieController, ArcElement, Tooltip, Legend);

function FDPortfolioChart() {
    const data = {
        labels: ['Bajaj Finserv', 'Shriram Finance', 'Mahindra Finance', 'Utkarsh Small Finance Bank'],
        datasets: [{
            data: [40, 25, 20, 15],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733'],
        }]
    };

    const chartRef = useRef(null);

    useEffect(() => {
        let chartInstance = null;
        if (chartRef.current) {
            chartInstance = new Chart(chartRef.current, {
                type: 'pie',
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

export default FDPortfolioChart;
