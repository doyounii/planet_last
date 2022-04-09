/* eslint-disable */
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CalendarPage from "./pages/Calendar/CalendarPage";

import Statistics from "./pages/Statistics/Statistics";
import StatisticsView from "./pages/Statistics/StatisticsView";
import StatisticsWays from "./pages/Statistics/StatisticsWays";
import StatisticsModify from "./pages/Statistics/StatisticsModify";

import Diary from "./pages/Diary/Diary";
import News from "./pages/News/News";
import Setting from "./pages/Setting/Setting";
import MyPage from "./pages/Setting/MyPage";
import TermsOfUse from "./pages/Setting/TermsOfUse";
import UsePage from "./pages/Setting/UsePage";
import InformationPage from "./pages/Setting/InformationPage";
import Coupon from "./pages/Coupon/Coupon";
import CouponJoin from "./pages/Coupon/CouponJoin";
import EcoMission from "./pages/EcoMission/EcoMission";

import DetailCategory from "./components/CalendarPart/DetailCategory";

import Detail from "./components/StatisticsPart/Part2/ExpendDetail";
import FloatingPage from "./pages/Floating/FloatingPage";

import Login from "./pages/Login/Login";

import EcoCategory from "./pages/Statistics/Part2/EcoCategory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/calendar" element={<CalendarPage />}></Route>
      <Route path="/calendar/:month/:day" element={<DetailCategory />}></Route>
      <Route path="/statistics" element={<Statistics />}></Route>
      <Route path="/statisticsView" element={<StatisticsView />}></Route>
      <Route
        path="/statisticsView/:way/:year/:month"
        element={<StatisticsWays />}
      ></Route>
      <Route path="/statisticsModify" element={<StatisticsModify />}></Route>
      <Route path="/diary" element={<Diary />}></Route>
      <Route path="/news" element={<News />}></Route>
      <Route path="/setting" element={<Setting />}></Route>
      <Route path="/myPage" element={<MyPage />}></Route>
      <Route path="/termsOfUse" element={<TermsOfUse />}></Route>
      <Route path="/ecoMission" element={<EcoMission />}></Route>

      <Route path="/floatingpage" element={<FloatingPage />}></Route>
      <Route path="/ecocategory" element={<EcoCategory />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/usePage" element={<UsePage />}></Route>
      <Route path="/informationPage" element={<InformationPage />}></Route>
      <Route path="/coupon" element={<Coupon />}></Route>
      <Route path="/couponJoin" element={<CouponJoin />}></Route>
      <Route path="/detail" element={<Detail />}></Route>
    </Routes>
  );
}

export default App;
