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
      const arr2 = ["✅", "💕", "👩","✅", "💕", "👩","✅", "💕", "👩","✅", "💕", "👩"];
      
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

{/* <section className={ExpendCategoryStyle.type}>
<button className={ExpendCategoryStyle.type_box}>
<p>&#127789;</p>
<div className={ExpendCategoryStyle.type_box_text}>
식비
</div> 
</button>
<button className={ExpendCategoryStyle.type_box}>
<p>&#128663;</p>
<div className={ExpendCategoryStyle.type_box_text}>
교통
</div>
</button>
<button className={ExpendCategoryStyle.type_box}>
<p>&#127916;</p>
<div className={ExpendCategoryStyle.type_box_text}>
문화생활
</div>
</button>
</section>
<section className={ExpendCategoryStyle.type2}>
<button className={ExpendCategoryStyle.type_box}>
<p>&#9999;</p>
<div className={ExpendCategoryStyle.type_box_text}>
생필품
</div> 
</button>
<button className={ExpendCategoryStyle.type_box}>
<p>&#128722;</p>
<div className={ExpendCategoryStyle.type_box_text}>
마트
</div>
</button>
<button className={ExpendCategoryStyle.type_box}>
<p>&#128218;</p>
<div className={ExpendCategoryStyle.type_box_text}>
교육
</div>
</button>
</section>
<section className={ExpendCategoryStyle.type3}>
<button className={ExpendCategoryStyle.type_box}>
<p>&#128241;</p>
<div className={ExpendCategoryStyle.type_box_text}>
통신
</div> 
</button>
<button className={ExpendCategoryStyle.type_box}>
<p>&#127973;</p>
<div className={ExpendCategoryStyle.type_box_text}>
의료/건강
</div>
</button>
<button className={ExpendCategoryStyle.type_box}>
<p>&#128181;</p>
<div className={ExpendCategoryStyle.type_box_text}>
경조사/회비
</div>
</button>
</section>
<section className={ExpendCategoryStyle.type4}>
<button className={ExpendCategoryStyle.type_box}>
<p>&#128719;</p>
<div className={ExpendCategoryStyle.type_box_text}>
가전
</div> 
</button>
<button className={ExpendCategoryStyle.type_box}>
<p>&#129534;</p>
<div className={ExpendCategoryStyle.type_box_text}>
공과금
</div>
</button>
<button className={ExpendCategoryStyle.type_box}>
<p>&#128172;</p>
<div className={ExpendCategoryStyle.type_box_text}>
기타
</div>
</button>
</section> */}
</section>
);
}

export default SelectExpendCategory;