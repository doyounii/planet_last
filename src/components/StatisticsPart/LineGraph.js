import React, { useEffect } from 'react'
import Chart from 'chart.js/auto'
import { withTheme } from 'styled-components';

let LineChart;

Chart.defaults.font.size = 12;
Chart.defaults.font.family = 'Pretendard';

function LineGraph({ dataset }) {
    useEffect(() => {
        buildChart();
    }, []);
    let pointColor = ['#069567', '#00C982', '#00C982', '#00C982', '#00C982', '#00C982',];

    const getValues = Object.values(dataset);
    const getKeys = Object.keys(dataset);

    for (let i = 0; i < getKeys.length; i += 1) {
        getKeys[i] = getKeys[i] + "월";

        // getValues[i] <= 10 ? pointColor[i] = '#0E4F42' : pointColor[i] = '#00C982';

        if (getValues[i] <= 10)
            pointColor[i] = '#0E4F42'
        else if (getValues[i] <= 20 && getValues[i] > 10)
            pointColor[i] = '#08835E';
        else if (getValues[i] <= 30 && getValues[i] > 20)
            pointColor[i] = '#069567';
        else if (getValues[i] <= 40 && getValues[i] > 30)
            pointColor[i] = '#04A670';
        else
            pointColor[i] = '#00C982';
    }

    console.log(getValues);
    const labels = ['3월', '4월', '5월', '6월', '7월', '8월',]
    const buildChart = () => {
        var ctx = document.getElementById("LineChart").getContext("2d");

        if (typeof LineChart !== "undefined") LineChart.destroy();


        LineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: getKeys,
                datasets: [{
                    data: getValues,
                    fill: false,
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 0.8,
                    pointBackgroundColor: pointColor, //포인트 채우기 컬러
                    pointBorderColor: pointColor
                    , //#00C982포인트 테두리 컬러
                    pointBorderWidth: 1, //포인트 테두리 두께
                    pointRadius: 7,
                    tension: 0.1, //직선
                }]
            },
            options: {
                indexAxis: 'x',
                scales: {
                    y: {
                        display: false,
                        beginAtZero: true,
                    },
                    xAxes: {
                        fontColor: 'rgba(255, 255, 255)',
                        fontSize: 14
                    }
                },
                responsive: true,
                plugins: {
                    legend: {
                        //제목 label 삭제
                        display: false,
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    },
                },
                animation: {
                    duration: 600,
                },
            }
        });


    }

    return (
        <div style={{ width: "90%", marginTop: "3%", margin: "0 auto", "overflow-y": "scroll" }}>
            <canvas id="LineChart" width="375px" height="210px" style={{ "overflow-y": "scroll" }}
            />
        </div>
    )
}

export default LineGraph

// import React, {useEffect} from 'react'
// import Chart from 'chart.js/auto'
// import { withTheme } from 'styled-components';

// let LineChart;

// Chart.defaults.font.size = 12;
// Chart.defaults.font.family = 'Pretendard';

// function LineGraph() {
//     useEffect(() => {
//         buildChart();
//     }, []);

//     const buildChart = () => {
//         var ctx = document.getElementById("LineChart").getContext("2d");

//         if (typeof LineChart !== "undefined") LineChart.destroy();

//         LineChart = new Chart(ctx, {
//             type: 'line',
//             data: {
//                 labels: ['7월', '8월', '9월', '10월', '11월', '12월'],
//                 datasets: [{
//                     data: [55, 13, 40, 91, 52, 72],
//                     fill: false,
//                     borderColor: 'rgba(255, 255, 255, 0.1)',
//                     borderWidth: 0.8,
//                     pointBackgroundColor: '#00C982', //포인트 채우기 컬러
//                     pointBorderColor: '#00C982', //포인트 테두리 컬러
//                     pointBorderWidth: 1, //포인트 테두리 두께
//                     pointRadius: 8,
//                     tension: 0.1, //직선
//                 }]
//             },
//             options: {
//                 indexAxis: 'x',
//                 scales: {
//                   y: {
//                     display: false,
//                     beginAtZero: true,
//                   },
//                   xAxes : {
//                     fontColor : 'rgba(255, 255, 255)',
//                     fontSize : 14
//                   }
//                 },
//                 responsive: true,
//                 plugins: {
//                     legend: {
//                         //제목 label 삭제
//                         display: false,
//                         labels: {
//                             font: {
//                                 size: 14
//                             }
//                         }
//                     },
//                 },
//                 animation: {
//                     duration: 600,
//                 },
//             }
//         });
//     }

//     return (
//         <div style={{width:"90%", marginTop:"3%", margin:"0 auto"}}>
//             <canvas id="LineChart" width="375px" height="210px"/>
//         </div>
//     )
// }

// export default LineGraph