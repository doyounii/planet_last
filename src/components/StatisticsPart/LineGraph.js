import React, {useEffect} from 'react'
import Chart from 'chart.js/auto'


let LineChart;

function LineGraph() {
    useEffect(() => {
        buildChart();
    }, []);

    const buildChart = () => {
        var ctx = document.getElementById("LineChart").getContext("2d");

        if (typeof LineChart !== "undefined") LineChart.destroy();

        LineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['7월', '8월', '9월', '10월', '11월', '12월'],
                datasets: [{
                    data: [55, 13, 40, 91, 52, 72],
                    fill: false,
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 0.8,
                    pointBackgroundColor: '#00C982', //포인트 채우기 컬러
                    pointBorderColor: '#00C982', //포인트 테두리 컬러
                    pointBorderWidth: 1, //포인트 테두리 두께
                    pointRadius: 8,
                    tension: 0.1 //직선
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                }, 
                scales: {
                    x: {
                        grid: {
                            display: false,
                            drawBorder: false,
                        },
                    },
                    y: {
                        min: 0,
                        max: 100,
                        beginAtZero: false,
                        grid: {
                            display: false,
                            drawBorder: false,
                        },
                    },
                    xAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize : 2,
                            fontColor : "rgba(251, 203, 9, 1)",
                            fontSize : 14,
                        },
                        gridLines: {
                            display:false,
                            lineWidth:0
                        }
                    }],
                    yAxes:[{
                        ticks:{
                        display: false,
                       }
                     }],
                },
                animation: {
                    duration: 600,
                },
                
            }
        });
    }

    return (
        <div>
            <canvas id="LineChart" width="412px" height="248px"/>
        </div>
    )
}

export default LineGraph