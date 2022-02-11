import React, { useState } from 'react';
import SelectCategoryStyle from './SelectCategory.module.css';

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
            </section>
        );
    
}

export default SelectCategory;