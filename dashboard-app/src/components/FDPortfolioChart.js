import React, { useRef, useEffect } from 'react';
import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(PieController, ArcElement, Tooltip, Legend);

function FDPortfolioChart() {
    const data = {
        labels: ['Bajaj Finserv', 'Shriram Finance', 'Mahindra Finance', 'Utkarsh Small Finance Bank'],
        datasets: [{
            data: [40, 25, 20, 15],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733'],
            hoverOffset: 8, // Add hover offset for interactive effect
        }]
    };

    const chartRef = useRef(null);

    useEffect(() => {
        let chartInstance = null;
        if (chartRef.current) {
            chartInstance = new Chart(chartRef.current, {
                type: 'pie',
                data: data,
                options: {
                    plugins: {
                        legend: {
                            position: 'bottom', // Place legend at the bottom for better visibility
                            labels: {
                                boxWidth: 20,
                                usePointStyle: true,
                                padding: 20,
                                font: {
                                    size: 14,
                                },
                            },
                        },
                        tooltip: {
                            bodyFont: {
                                size: 14,
                            },
                        },
                    },
                    animation: {
                        duration: 1000, // Add animation for 1 second for a smoother transition
                    },
                },
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
