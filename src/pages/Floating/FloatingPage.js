import React, { useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import FloatingStyle from "./FloatingPage.module.css";
import HistoryToHome from "../../components/History/HistoryToHome";
import TopNav from "../../components/FloatingPart/TopNav";
import CustomSwitch from "../../components/buttons/CustomSwitch";
import DatePrice from "../../components/FloatingPart/DatePrice";
import SelectType from "../../components/FloatingPart/SelectType";
import Memo from "../../components/FloatingPart/Memo";
import SelectEco from "../../components/FloatingPart/SelectEco";
import Lottie from "react-lottie";
import Complete from "./complete.json";
import "./Contents.css";
import { Modal } from "../../components/CalendarPart/Modal";

export default function FloatingPage() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(1);
  const [total, setTotal] = useState(4);

  const [date, setDate] = useState(new Date());
  const [price, setprice] = useState("");
  const [type, setType] = useState({ type: "", emoji: "" });
  const [cate, setCate] = useState({ type: "", emoji: "" });
  const [memo, setMemo] = useState("");
  const [ecoTag, setEcoTag] = useState([]);
  const [userTag, setUserTag] = useState([]);
  const [userEcoTag, setUserEcoTag] = useState([]);
  const [complete, setComplete] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const fetchData = () => {
    if (total === 4) {
      axios
        .post("http://3.39.87.115:8080/income/new", {
          userId: null,
          in_cost: parseInt(price),
          date: format(date, "yyyy-MM-dd"),
          inType: cate.type,
          inWay: type.type,
          memo: memo,
        })
        .then(() => {
          closeModal();
          setComplete(true);
          setTimeout(() => {
            navigate("/", { replace: true });
          }, 2000);
        })
        .catch((error) => {
          window.alert("문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
        });
    } else {
      axios
        .post("http://3.39.87.115:8080/expenditure/new", {
          userId: null,
          ex_cost: parseInt(price),
          date: format(date, "yyyy-MM-dd"),
          exType: cate.type,
          exWay: type.type,
          memo: memo,
          ecoDetail: ecoTag,
          userAdd: userTag,
          eco: userEcoTag,
        })
        .then(() => {
          closeModal();
          setComplete(true);
          setTimeout(() => {
            navigate("/", { replace: true });
          }, 2000);
        })
        .catch((error) => {
          window.alert("문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
        });
    }
  };

  const onSelectSwitch = (num) => {
    setTotal(num + 3);
    setProgress(1);
    setDate(new Date());
    setprice("");
    setType({ type: "", emoji: "" });
    setCate({ type: "", emoji: "" });
    setEcoTag([]);
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
        break;
      case "완료":
        openModal();
        // setComplete(true);
        // console.log("끝");
        break;
      default:
        break;
    }
  };

  const changeData = (data) => {
    switch (progress) {
      case 1:
        setDate(data.date);
        setprice(data.price);
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
      case 5:
        setEcoData(data.data);
        break;
      default:
        break;
    }
    changePage(data.btnType);
  };

  const setEcoData = (data) => {
    let tempData = [...data[0], ...data[1], ...data[2]];
    let tempUserTag = [];
    let tempUserEcoTag = [];
    let tagData = tempData.map((arr) => {
      let eco = arr.isEco === "etc" ? "N" : arr.isEco === true ? "G" : "R";
      if (arr.id > 9) {
        tempUserTag.push(arr.tag);
        tempUserEcoTag.push(eco);
        return "사용자 추가";
      } else {
        return arr.tag;
      }
    });
    setEcoTag(tagData);
    setUserTag(tempUserTag);
    setUserEcoTag(tempUserEcoTag);
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
        article = (
          <SelectEco
            sendData={changeData}
            propData={{
              ecoTag: ecoTag,
              userTag: userTag,
              userEcoTag: userEcoTag,
            }}
          />
        );
        break;
      default:
        break;
    }
    return article;
  };

  const lottieDefault = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      className: "add-class", // svg에 적용
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (complete)
    return (
      <div className={FloatingStyle.floating_complete}>
        <div>
          가계부 작성 완료!
          <br /> 홈 화면으로 돌아갑니다
        </div>
        <div className={FloatingStyle.floating_animation}>
          <Lottie
            options={{ ...lottieDefault, animationData: Complete }}
            eventListeners={[
              {
                eventName: "complete",
                callback: () => console.log("the animation completed"),
              },
            ]}
          />
        </div>
      </div>
    );

  return (
    <div className={FloatingStyle.floating_conainer}>
      <div
        className={FloatingStyle.floating_close}
        onClick={() => {
          navigate("/", { replace: true });
        }}
      >
        <HistoryToHome />
      </div>
      <TopNav process={progress} total={total} />
      <div className={FloatingStyle.floating_button}>
        <CustomSwitch
          width={145}
          height={42}
          selectionMode={1}
          roundCorner={true}
          option1={"수입"}
          option2={"지출"}
          onSelectSwitch={onSelectSwitch}
          selectionColor={"#374756"}
        />
      </div>

      <div className={FloatingStyle.floating_margin} />
      {changeContent()}

      {isModalOpen && (
        <Modal
          className="floating-confirm"
          onClose={closeModal}
          maskClosable={true}
          closable={false}
          visible={true}
        >
          <div className="floating-confirm-modal">
            <div className="floating-confirm-message">
              가계부 작성을 완료하시겠습니까?
            </div>
            <div className="floating-confirm-button">
              <div className="floating-cancel" onClick={closeModal}>
                취소
              </div>
              <div className="floating-complete" onClick={fetchData}>
                완료
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
