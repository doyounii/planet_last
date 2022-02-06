import React, { Component , useState} from 'react';
import SelectTypeStyle from './SelectType.module.css';

function SelectType() {

      const [value, setValue] = useState(true);

      const handleButton = (e)=> {
            setValue(e.target.id);
            value(e.target.id);
      }


            return(
            <section className={SelectTypeStyle.type}>
                  <button id="case1" onClick={handleButton} className={value==='case1' ?SelectTypeStyle.type_box_clicked:SelectTypeStyle.type_box}>
                        <p>&#128179;</p>
                        <div className={SelectTypeStyle.type_box_text}>
                        카드
                        </div> 
                  </button>
                  <button id="case2" onClick={handleButton} className={value==='case2' ?SelectTypeStyle.type_box_clicked:SelectTypeStyle.type_box}>
                        <p>&#127974;</p>
                        <div className={SelectTypeStyle.type_box_text}>
                        은행
                        </div>
                  </button>
                  <button id="case3" onClick={handleButton} className={value==='case3' ?SelectTypeStyle.type_box_clicked:SelectTypeStyle.type_box}>
                        <p>&#128181;</p>
                        <div className={SelectTypeStyle.type_box_text}>
                        현금
                        </div>
                  </button>
            </section>
        );
    
}

export default SelectType;