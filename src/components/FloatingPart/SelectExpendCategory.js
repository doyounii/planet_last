import React, { useState } from 'react';
import ExpendCategoryStyle from './SelectExpendCategory.module.css';
import { Link } from 'react-router-dom';
import IncomeStyle from '../../pages/Floating/Float.module.css';


function SelectExpendCategory()  {

      const [cate, setCate] = useState('');
      const [emoji, setEmoji] = useState('');
      const [show1, setShow1] = useState(false);

      function handleButton(value,idx) {
            setCate(value);
            setEmoji(idx);
            console.log(value);
            setShow1(show1 => !show1);
            console.log(show1);
      }


      const arr = ["식비", "교통", "문화생활","생필품", "마트", "교육","통신", "의료/건강", "경조사/회비","가전","공과금", "기타"];
      const arr2 = ["🌭", "🚗", "🎬","✏️", "🛒", "📚","📱", "🏥", "💵","🛏", "🧾", "💬"];
      
      return(
            <section >

                  <div className={ExpendCategoryStyle.type}>
                  {arr.map((value,idx)=> {
                  return (
                  <button key={idx}  
                        className={cate===value && show1?ExpendCategoryStyle.type_box_clicked:ExpendCategoryStyle.type_box}
                        onClick={()=>handleButton(value,idx)}>
                        <p>{arr2[idx]}</p>
                        <div className={ExpendCategoryStyle.type_box_text}>
                        {value}
                        </div> 
                  </button>
                  )
                  })}
                  </div>

            <div className={ExpendCategoryStyle.bottomBtn3}>
                  <Link to="/ExpendType">
                  <button className={IncomeStyle.bottomBtnActive}>뒤로</button>
                  </Link>
                  <Link to="/ExpendMemo" state={{ arr2, cate, emoji }}>
                  <button disabled={cate === ''?true:false} className={IncomeStyle.bottomBtnActive}>다음</button>
                  </Link>
            </div>
</section>
);
}

export default SelectExpendCategory;