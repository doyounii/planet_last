import React from 'react';
import Statistics from "../../components/StatisticsPart/StatisticsMain";
import Footer from '../../components/Footer/Footer';

function Statisics() {
  return (
      <>
      <Statistics />

      <Footer activeMenu="statistics">
          <div>통계</div>
      </Footer>

      </>
);
}

export default Statisics;