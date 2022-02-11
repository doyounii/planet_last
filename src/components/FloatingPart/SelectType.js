import React, {  useState} from 'react';
import SelectTypeStyle from './SelectType.module.css';
import { Link } from 'react-router-dom';
import IncomeStyle from '../../pages/Floating/Float.module.css';


function SelectType() {
      
      const [filter, setFilter] = useState('');

      function handleButton(value) {
            setFilter(value);
            console.log(value);
      }

      const a = filter;

      const arr = ["카드", "은행", "현금"];
      const arr2 = ["✅", "💕", "👩"]; //&#128179; , &#127974; ,&#128181;
      

            return(
            <section className={SelectTypeStyle.type}>

                  {arr.map((value,idx)=> {
                        return (
                        <button key={idx}  
                              className={filter===value ?SelectTypeStyle.type_box_clicked:SelectTypeStyle.type_box}
                              onClick={()=>handleButton(value)}>
                              <p>{arr2[idx]}</p>
                              <div className={SelectTypeStyle.type_box_text}>
                              {value}
                              </div> 
                        </button>
                        )
                  })}

{a}
                  {/* <button id="case1" onClick={handleButton} className={value==='case1' ?SelectTypeStyle.type_box_clicked:SelectTypeStyle.type_box}>
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
                  </button> */}

                  
      <div className={IncomeStyle.bottomBtn3}>
        <Link to="/FloatingPrice">
        <button className={IncomeStyle.bottomBtnActive}>뒤로</button>
        </Link>
        <Link to={{
          pathname:`/FloatingCategory`,
          state : {filter},
        }}>
          <button className={IncomeStyle.bottomBtnActive}>다음</button>
        </Link>
      </div>
            </section>
        );
    
}

export default SelectType;


