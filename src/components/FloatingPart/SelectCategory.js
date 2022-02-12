import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SelectCategoryStyle from './SelectCategory.module.css';
import IncomeStyle from '../../pages/Floating/Float.module.css';


function SelectCategory() {

      const [filter, setFilter] = useState('');

      function handleButton(value) {
            setFilter(value);
            console.log(value);
      }


      const arr = ["급여", "용돈", "기타"];
      const arr2 = ["💰", "👛", "💬"];
    
        return(
            <section className={SelectCategoryStyle.type}>

                  {arr.map((value,idx)=> {
                        return (
                        <button key={idx}  
                              className={filter===value ?SelectCategoryStyle.type_box_clicked:SelectCategoryStyle.type_box}
                              onClick={()=>handleButton(value)}>
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
                        <Link to="/FloatingMemo">
                        <button disabled={filter === ''?true:false} className={IncomeStyle.bottomBtnActive}>다음</button>
                        </Link>
                  </div>
            </section>
        );
    
}

export default SelectCategory;