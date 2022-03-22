import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SelectCategoryStyle from './SelectCategory.module.css';
import IncomeStyle from '../../pages/Floating/Float.module.css';


function SelectCategory() {

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


      const date = useLocation().state.date;
      const price =useLocation().state.price;
      const filter = useLocation().state.filter;

      const arr = ["급여", "용돈", "기타"];
      const arr2 = ["💰", "👛", "💬"];
    
        return(
            <section className={SelectCategoryStyle.type}>

                  {arr.map((value,idx)=> {
                        return (
                        <button key={idx}  
                              className={cate===value && show1?SelectCategoryStyle.type_box_clicked:SelectCategoryStyle.type_box}
                              onClick={()=>handleButton(value,idx)}>
                              <p>{arr2[idx]}</p>
                              <div className={SelectCategoryStyle.type_box_text}>
                              {value}
                              </div> 
                        </button>
                        )
                  })}

                  <div className={SelectCategoryStyle.bottomBtn3}>
                        <Link to="/FloatingType">
                        <button className={IncomeStyle.bottomBtnActive}>뒤로</button>
                        </Link>
                        <Link to="/FloatingMemo" state={{ date, price, filter, arr2, cate, emoji }}>
                        <button disabled={cate === ''?true:false} className={IncomeStyle.bottomBtnActive}>다음</button>
                        </Link>
                  </div>
            </section>
        );
    
}

export default SelectCategory;