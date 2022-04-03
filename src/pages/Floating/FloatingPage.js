import React, { useState } from "react";
import { format } from "date-fns";
import FloatingStyle from "./FloatingPage.module.css";
import HistoryToHome from "../../components/History/HistoryToHome";
import TopNav from "../../components/FloatingPart/TopNav";
import CustomSwitch from "../../components/buttons/CustomSwitch";
import DatePrice from "../../components/FloatingPart/DatePrice";
import SelectType from "../../components/FloatingPart/SelectType";
import Memo from "../../components/FloatingPart/Memo";
import SelectEco from "../../components/FloatingPart/SelectEco";
import "./Contents.css";

export default function FloatingPage() {
  const [progress, setProgress] = useState(1);
  const [total, setTotal] = useState(4);

  const [date, setDate] = useState(format(new Date(), "yy.MM.dd"));
  const [price, setprice] = useState("");
  const [type, setType] = useState({ type: "", emoji: "" });
  const [cate, setCate] = useState({ type: "", emoji: "" });
  const [memo, setMemo] = useState("");

  const onSelectSwitch = (num) => {
    setTotal(num + 3);
    setProgress(1);
    setDate(format(new Date(), "yy.MM.dd"));
    setprice("");
    setType({ type: "", emoji: "" });
    setCate({ type: "", emoji: "" });
    setMemo("");
  };

  const changePage = (btnType) => {
    switch (btnType) {
      case "다음":
        if (progress < total) {
          setProgress(progress + 1);
        }
        break;
      case "뒤로":
        if (progress > 1) {
          setProgress(progress - 1);
        }
        /* progress===total이면 여기서 데이터 전송 */
        break;
      default:
        break;
    }
  };

  const changeData = (data) => {
    switch (progress) {
      case 1:
        setDate(data.values.date);
        setprice(data.values.price);
        break;
      case 2:
        setType(data.value);
        break;
      case 3:
        setCate(data.value);
        break;
      case 4:
        setMemo(data.memo);
        break;
      default:
        break;
    }
    changePage(data.btnType);
  };

  const changeContent = () => {
    let article = null;
    switch (progress) {
      case 1:
        article = (
          <DatePrice propDate={date} propPrice={price} sendData={changeData} />
        );
        break;
      case 2:
        article = <SelectType propType={type} type={0} sendData={changeData} />;
        break;
      case 3:
        article = (
          <SelectType
            propType={cate}
            type={total === 4 ? 1 : 2}
            sendData={changeData}
          />
        );
        break;
      case 4:
        article = <Memo propType={cate} sendData={changeData} />;
        break;
      case 5:
        article = <SelectEco />;
        break;
      default:
        break;
    }
    return article;
  };

  return (
    <div className={FloatingStyle.floating_conainer}>
      <div className={FloatingStyle.floating_close}>
        <HistoryToHome />
      </div>
      <TopNav process={progress} total={total} />
      <CustomSwitch
        selectionMode={1}
        roundCorner={true}
        option1={"수입"}
        option2={"지출"}
        onSelectSwitch={onSelectSwitch}
        selectionColor={"#374756"}
      />
      {changeContent()}
    </div>
  );
}
