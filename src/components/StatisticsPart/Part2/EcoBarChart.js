import React from 'react';
import { Bar, } from 'react-chartjs-2';
import styled from "styled-components";

function EcoBarChart(props) {
  const ecoColor = ['#00C982', '#1466FE', '#083FA5', '#728EC6', '#C7D2E8'];

  const data = {
    labels: 'EcoTag',
    datasets: [
      {
        label: 'Dataset 1',
        borderWidth: 0, // 테두리 두께
        data: [message.tagList[0][1]], // 수치
        backgroundColor: ['#00C982'], // 각 막대 색
        borderRadius: 50,
        borderSkipped: "middle",
      },
      {
        label: 'Dataset 2',
        borderWidth: 0, // 테두리 두께
        borderRadius: 50,
        data: [message.tagList[1][1]], // 수치
        backgroundColor: ['#1466FE'], // 각 막대 색
      },
      {
        label: 'Dataset 3',
        borderWidth: 0, // 테두리 두께
        borderRadius: 50,
        data: [message.tagList[2][1]], // 수치
        backgroundColor: ['#083FA5'], // 각 막대 색
      },
      {
        label: 'Dataset 4',
        borderWidth: 0, // 테두리 두께
        data: [0], // 수치
        borderRadius: 50,
        backgroundColor: ['#728EC6'], // 각 막대 색
      },
      {
        label: 'Dataset 5',
        borderWidth: 0, // 테두리 두께
        data: [0], // 수치
        backgroundColor: ['#C7D2E8'], // 각 막대 색
        borderRadius: 50,
        borderSkipped: "middle",
      },
    ],
  };

  const data2 = {
    labels: 'EcoTag',
    datasets: [
      {
        label: 'Dataset 1',
        borderWidth: 0, // 테두리 두께
        data: [1], // 수치
        backgroundColor: ['#8593B1'], // 각 막대 색
        borderRadius: 50,
        borderSkipped: "middle",
      },
      {
        label: 'Dataset 2',
        borderWidth: 0, // 테두리 두께
        data: [3], // 수치
        borderRadius: 50,
        backgroundColor: ['#667492'], // 각 막대 색
      },
      {
        label: 'Dataset 3',
        borderWidth: 0, // 테두리 두께
        data: [1], // 수치
        backgroundColor: ['#475572'], // 각 막대 색
      },
      {
        label: 'Dataset 4',
        borderWidth: 0, // 테두리 두께
        data: [1], // 수치
        borderRadius: 50,
        backgroundColor: ['#303B51'], // 각 막대 색
      },
      {
        label: 'Dataset 5',
        borderWidth: 0, // 테두리 두께
        data: [1], // 수치
        backgroundColor: ['#8593B1'], // 각 막대 색
        borderRadius: 50,
        borderSkipped: "middle",
      },
    ],
  };

  const config = {
    indexAxis: 'y',
    plugins: {
      legend: false,
    },
    data: data,
    data2: data2,
    scales: {
      yAxes: {
        stacked: true,
        display: false,
      },
      xAxes: {
        stacked: true,
        display: false,
      },
    },
    bar: {
      endingShape: 'rounded'
    },
    animation: {
      duration: 0
    },
    responsive: true
  };

  if (props.name === "eco") {
    return (
      <div>
        <Bar data={data}
          options={config}
          height={'80px'} />
      </div >
    )
  } else {
    return (
      <div>
        <Bar data={data2}
          options={config}
          height={'90px'} />
      </div >
    )
  }
}

export { EcoBarChart }

const message = {
  tagList: [["생필품", 33, 2], ["경조사/회비", 33, 2], ["마트", 33, 2]]
}