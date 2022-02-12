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
      const arr2 = ["💳", "🏦", "💵"]; //&#128179; , &#127974; ,&#128181;
      

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
                  
                  <div className={SelectTypeStyle.bottomBtn3}>
                        <Link to="/FloatingPrice">
                        <button className={IncomeStyle.bottomBtnActive}>뒤로</button>
                        </Link>
                        <Link to='/FloatingCategory'>
                        <button disabled={filter === ''?true:false} className={IncomeStyle.bottomBtnActive}
                        >다음</button>
                        </Link>
                  </div>
            </section>
        );
    
}

export default SelectType;


