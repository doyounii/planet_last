import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import CalendarPage from "./pages/Calendar/CalendarPage";
import Statistics from "./pages/Statistics/Statistics";
import Diary from "./pages/Diary/Diary";
import News from "./pages/News/News";
import FloatingPage from "./pages/Floating/FloatingPage";
import FloatingExpensePage from "./pages/Floating/FloatingExpensePage";
import FloatingDate from "./pages/Floating/FloatingDate";
import FloatingPrice from "./pages/Floating/FloatingPrice";
import FloatingType from './pages/Floating/FloatingType';
import FloatingCategory from './pages/Floating/FloatingCategory';
import FloatingMemo from './pages/Floating/FloatingMemo';
import ExpendType from './pages/Floating/ExpendType';
import ExpendCategory from './pages/Floating/ExpendCategory';
import ExpendMemo from './pages/Floating/ExpendMemo';
import ExpendLast from './pages/Floating/ExpendLast';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/calendar" element={<CalendarPage />}></Route>
      <Route path="/statistics" element={<Statistics />}></Route>
      <Route path="/diary" element={<Diary />}></Route>
      <Route path="/news" element={<News />}></Route>
      <Route path="/floatingpage" element={<FloatingPage />}></Route>
      <Route path="/floatingExpensePage" element={<FloatingExpensePage />}></Route>
      <Route path="/floatingDate" element={<FloatingDate />}></Route>
      <Route path="/floatingPrice" element={<FloatingPrice />}></Route>
      <Route path="/floatingType" element={<FloatingType />}></Route>
      <Route path="/floatingCategory" element={<FloatingCategory />}></Route>
      <Route path="/floatingMemo" element={<FloatingMemo />}></Route>
      <Route path="/expendType" element={<ExpendType />}></Route>
      <Route path="/expendCategory" element={<ExpendCategory />}></Route>
      <Route path="/expendmemo" element={<ExpendMemo />}></Route>
      <Route path="/expendlast" element={<ExpendLast />}></Route>
    </Routes>
  );
}

export default App;
