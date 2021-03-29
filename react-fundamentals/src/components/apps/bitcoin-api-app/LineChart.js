import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';

const LineChart = (props) => {

    const [dates, setDates] = useState([]);
    const [payout, setPayout] = useState([]);

    useEffect(() => {
        const unsortedData = props.data;
        let dates = [];
        let payout = [];

        for (let item in unsortedData) {
            dates.push(item)
            payout.push(unsortedData[item])
        }
        setDates(dates);
        setPayout(payout);
    }, []);

    useEffect(() => {
        var chartContext = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(chartContext, {
        type: 'line',
        data: {
        labels: ['first','second','third','fourth'],
        datasets: [{
        data: [1,1,5,0],
        backgroundColor: 'rgba(54, 162, 235, 0.2)', 
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
        }]
        },
        options: {
        legend: {
        display: false
        },
        scales: {
        yAxis: [{
        ticks: {
        beginAtZero: true
        }
        }]
        }
        }
        });
      }, [dates])

  return (
    <canvas id='myChart'></canvas>
  );
};

export default LineChart;