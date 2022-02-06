import React, { useState } from 'react';
import SelectCategoryStyle from './SelectCategory.module.css';

function SelectCategory() {

      const [value, setValue] = useState(true);

      const handleButton = (e)=> {
            setValue(e.target.id);
            value(e.target.id);
      }
    
        return(
            <section className={SelectCategoryStyle.type}>
                  <button id="case1" onClick={handleButton} className={value==='case1' ?SelectCategoryStyle.type_box_clicked:SelectCategoryStyle.type_box}>
                        <p>&#128176;</p>
                        <div className={SelectCategoryStyle.type_box_text}>
                        급여
                        </div> 
                  </button>
                  <button id="case2" onClick={handleButton} className={value==='case2' ?SelectCategoryStyle.type_box_clicked:SelectCategoryStyle.type_box}>
                        <p>&#128091;</p>
                        <div className={SelectCategoryStyle.type_box_text}>
                        용돈
                        </div>
                  </button>
                  <button id="case3" onClick={handleButton} className={value==='case3' ?SelectCategoryStyle.type_box_clicked:SelectCategoryStyle.type_box}>
                        <p>&#128172;</p>
                        <div className={SelectCategoryStyle.type_box_text}>
                        기타
                        </div>
                  </button>
            </section>
        );
    
}

export default SelectCategory;