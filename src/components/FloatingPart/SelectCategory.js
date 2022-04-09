// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import SelectCategoryStyle from "./SelectCategory.module.css";
// import IncomeStyle from "../../pages/Floating/Float.module.css";

// function SelectCategory() {
//   const [cate, setCate] = useState("");
//   const [emoji, setEmoji] = useState("");
//   const [show1, setShow1] = useState(false);

//   const date = useLocation().state.date;
//   const price = useLocation().state.price;
//   const filter = useLocation().state.filter;

//   function handleButton(e, value) {
//     console.log(value);
//     if (cate === value.type) {
//       setCate("");
//       setEmoji("");
//       setShow1(false);
//     } else {
//       setCate(value.type);
//       setEmoji(value.emoji);
//       setShow1(true);
//     }
//   }
//   console.log(cate);

//   const contentArr = [
//     { type: "급여", emoji: "💰" },
//     { type: "용돈", emoji: "👛" },
//     { type: "기타", emoji: "💬" },
//   ];

//   const typeArr = [
//     { type: "식비", emoji: "🌭" },
//     { type: "교통", emoji: "🚗" },
//     { type: "문화생활", emoji: "🎬" },
//     { type: "생필품", emoji: "✏️" },
//     { type: "마트", emoji: "🛒" },
//     { type: "교육", emoji: "📚" },
//     { type: "통신", emoji: "📱" },
//     { type: "의료/건강", emoji: "🏥" },
//     { type: "경조사/회비", emoji: "💵" },
//     { type: "가전", emoji: "🛏" },
//     { type: "공과금", emoji: "🧾" },
//     { type: "기타", emoji: "💬" },
//   ];

//   return (
//     <section className={SelectCategoryStyle.type}>
//       <div className={SelectCategoryStyle.typeContainer}>
//         {typeArr.map((value, idx) => {
//           return (
//             <button
//               key={idx}
//               className={` ${SelectCategoryStyle.type_box} ${
//                 cate === value.type && show1
//                   ? SelectCategoryStyle.type_box_clicked
//                   : ""
//               }`}
//               value={value.type}
//               onClick={(e) => handleButton(e, value)}
//             >
//               <p>{value.emoji}</p>
//               <div className={SelectCategoryStyle.type_box_text}>
//                 {value.type}
//               </div>
//             </button>
//           );
//         })}
//       </div>

//       <div className={SelectCategoryStyle.bottomBtn3}>
//         <Link to="/FloatingType">
//           <button className={IncomeStyle.bottomBtnActive}>뒤로</button>
//         </Link>
//         <Link to="/FloatingMemo" state={{ date, price, filter, cate, emoji }}>
//           <button
//             disabled={!show1 ? true : false}
//             className={IncomeStyle.bottomBtnActive}
//           >
//             다음
//           </button>
//         </Link>
//       </div>
//     </section>
//   );
// }

// export default SelectCategory;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SelectCategoryStyle from "./SelectCategory.module.css";
import IncomeStyle from "../../pages/Floating/Float.module.css";

function SelectCategory() {
  const [cate, setCate] = useState("");
  const [emoji, setEmoji] = useState("");
  const [show1, setShow1] = useState(false);

  function handleButton(value, idx) {
    setCate(value);
    setEmoji(idx);
    console.log(value);
    setShow1((show1) => !show1);
    console.log(show1);
  }

  const date = useLocation().state.date;
  const price = useLocation().state.price;
  const filter = useLocation().state.filter;

  const arr = ["급여", "용돈", "기타"];
  const arr2 = ["💰", "👛", "💬"];

  return (
    <section className={SelectCategoryStyle.type}>
      {arr.map((value, idx) => {
        return (
          <button
            key={idx}
            className={
              cate === value && show1
                ? SelectCategoryStyle.type_box_clicked
                : SelectCategoryStyle.type_box
            }
            onClick={() => handleButton(value, idx)}
          >
            <p>{arr2[idx]}</p>
            <div className={SelectCategoryStyle.type_box_text}>{value}</div>
          </button>
        );
      })}

      <div className={SelectCategoryStyle.bottomBtn3}>
        <Link to="/FloatingType">
          <button className={IncomeStyle.bottomBtnActive}>뒤로</button>
        </Link>
        <Link
          to="/FloatingMemo"
          state={{ date, price, filter, arr2, cate, emoji }}
        >
          <button
            disabled={cate === "" ? true : false}
            className={IncomeStyle.bottomBtnActive}
          >
            다음
          </button>
        </Link>
      </div>
    </section>
  );
}

export default SelectCategory;
