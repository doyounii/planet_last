/* eslint-disable */
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Auth from "./hoc/Auth";
import Home from "./pages/Home/Home";
import Oauth from "./components/LoginPart/Oauth";
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
import Inquiry from "./pages/Setting/Inquiry";
import InquiryForm from "./pages/Setting/InquiryForm";
import Coupon from "./pages/Coupon/Coupon";
import CouponJoin from "./pages/Coupon/CouponJoin";
import EcoMission from "./pages/EcoMission/EcoMission";

import DetailCategory from "./components/CalendarPart/DetailCategory";

import Detail from "./components/StatisticsPart/Part2/ExpendDetail";
import FloatingPage from "./pages/Floating/FloatingPage";

import Login from "./pages/Login/Login";

import EcoCategory from "./pages/Statistics/Part2/EcoCategory";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={Auth(Home, true)} />
        <Route path="/login" element={Auth(Login, null)} />
        <Route path="/oauth" element={Auth(Oauth, null)} />
        <Route path="/calendar" element={Auth(CalendarPage, true)} />
        <Route
          path="/calendar/:month/:day"
          element={Auth(DetailCategory, true)}
        />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/statisticsView" element={<StatisticsView />} />
        <Route
          path="/statisticsView/:way/:year/:month"
          element={<StatisticsWays />}
        />
        <Route path="/statisticsModify" element={<StatisticsModify />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/news" element={<News />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/termsOfUse" element={<TermsOfUse />} />
        <Route path="/ecoMission" element={<EcoMission />} />

        <Route path="/floatingpage" element={<FloatingPage />} />
        <Route path="/ecocategory" element={<EcoCategory />} />
        <Route path="/usePage" element={<UsePage />} />
        <Route path="/informationPage" element={<InformationPage />} />
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/couponJoin" element={<CouponJoin />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/inquiryForm" element={<InquiryForm />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
