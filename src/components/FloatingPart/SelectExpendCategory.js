import React, { useState } from 'react';
import ExpendCategoryStyle from './SelectExpendCategory.module.css';


function SelectExpendCategory()  {
      const [filter, setFilter] = useState('');

      function handleButton(value) {
            setFilter(value);
            console.log(value);
      }

      const a = filter;

      const arr = ["식비", "교통", "문화생활","생필품", "마트", "교육","통신", "의료/건강", "경조사/회비","가전","공과금", "기타"];
      const arr2 = ["🌭", "🚗", "🎬","✏️", "🛒", "📚","📱", "🏥", "💵","🛏", "🧾", "💬"];
      
      return(
            <section className={ExpendCategoryStyle.type}>

            {arr.map((value,idx)=> {
                  return (
                  <button key={idx}  
                        className={filter===value ?ExpendCategoryStyle.type_box_clicked:ExpendCategoryStyle.type_box}
                        onClick={()=>handleButton(value)}>
                        <p>{arr2[idx]}</p>
                        <div className={ExpendCategoryStyle.type_box_text}>
                        {value}
                        </div> 
                  </button>
                  )
            })}
</section>
);
}

export default SelectExpendCategory;