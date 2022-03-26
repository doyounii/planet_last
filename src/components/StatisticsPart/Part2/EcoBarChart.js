import React from 'react';
import { Bar,  } from 'react-chartjs-2';
import styled from "styled-components";


class EcoBarChart extends React.Component{
    render(){
      const data = {
        labels: 'EcoTag',
        datasets: [
          {
            label: 'Dataset 1',
            borderWidth: 0, // 테두리 두께
            data: [1], // 수치
            backgroundColor:['#00C982'], // 각 막대 색
            borderRadius: 50,
            
          },
          {
            label: 'Dataset 2',
            borderWidth: 0, // 테두리 두께
            data: [3], // 수치
            backgroundColor:['#1466FE'], // 각 막대 색
          },
          {
            label: 'Dataset 3',
            borderWidth: 0, // 테두리 두께
            data: [1], // 수치
            backgroundColor:['#083FA5'], // 각 막대 색
            borderRadius: 10,
            borderSkipped: false,
          },
          {
            label: 'Dataset 4',
            borderWidth: 0, // 테두리 두께
            data: [1], // 수치
            backgroundColor:['#728EC6'], // 각 막대 색
            borderRadius: 10,
            borderSkipped: false,
          },
          {
            label: 'Dataset 5',
            borderWidth: 0, // 테두리 두께
            data: [1], // 수치
            backgroundColor:['#C7D2E8'], // 각 막대 색
            borderRadius: 50,
            borderSkipped: false,
          },         
        ],
        
      };

      const config = {
        indexAxis: 'y',
        plugins: {
          legend:false,
        },
        data: data,
        scales:{
          yAxes:{
            stacked: true,
            display: false,
          },
          xAxes: {
            stacked: true,
          display: false,
          },
        },
        
        elements: {
          bar: {
            borderWidth: 2,
          }
        },
        animation: {
          duration: 0
        },
        responsive: true
      };

      
      return (

        <div>
          <Bar data={data}
        options={config}
        height={150}/>
        </div>
        
      );
    }
  }

export {EcoBarChart}
