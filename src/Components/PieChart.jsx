// PieChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ data, labels }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create the new pie chart
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: data.labels,
        datasets: [
          {
            data: (data.values[0] == 0 && data.values[1] == 0) ? [] : data.values,
            backgroundColor: data.colors,
          },
        ],
      },
      options: {
        plugins: {
          emptyDoughnut: {
            color: 'rgba(0, 0, 0)',
            width: 2,
            // radiusDecrease: 20
          },
          legend: {
            onClick: null,
            display: true,
            position: 'bottom',
            padding: {
              top: 10, // You can adjust these values as needed
              bottom: 10,
              left: 10,
              right: 10,
            },
            labels: {
              boxWidth: 10,
              fontSize: 12,
            },
          },
        },
      },

    });

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, labels]);

  return (
    <div>
      <canvas ref={chartRef} width={120} height={120} />
    </div>
  );
};

export default PieChart;
