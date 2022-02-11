import React, { Component, useState } from 'react';
import SelectEnvirStyle from './SelectEnvir.module.css';

function SelectEnvir() {


      const [filter, setFilter] = useState('');

      function handleButton(value) {
            setFilter(value);
            console.log(value);
      }

      const a = filter;

      const arr = ["친환경 제품 구매", "비건식당 방문"];
      const arr2 = ["다회용기 사용", "장바구니 / 개인가방 사용"]; 
      const arr3 = ["중고거래 / 나눔 / 기부"];
      const arr4 = [ "비닐봉투 소비", "식자재 낭비"];
      const arr5 = ["일회용품 사용"] ;
      

            return(
            <section >

                  <div className={SelectEnvirStyle.type}>
                  {arr.map((value,idx)=> {
                        return (
                        <button key={idx}  
                              className={filter===value ?SelectEnvirStyle.type_box_clicked:SelectEnvirStyle.type_box}
                              onClick={()=>handleButton(value)}>
                              {/* <p>{arr2[idx]}</p> */}
                              <div className={filter===value ?SelectEnvirStyle.type_box_text2:SelectEnvirStyle.type_box_text}>
                              {value}
                              </div> 
                        </button>
                        )
                  })}
                  </div>

                  <div className={SelectEnvirStyle.type2}>
                  {arr2.map((value,idx)=> {
                        return (
                              <button key={idx}  
                              className={filter===value ?SelectEnvirStyle.type_box_clicked:SelectEnvirStyle.type_box}
                              onClick={()=>handleButton(value)}>
                              {/* <p>{arr2[idx]}</p> */}
                              <div className={filter===value ?SelectEnvirStyle.type_box_text2:SelectEnvirStyle.type_box_text}>
                              {value}
                              </div> 
                        </button>
                        )
                  })}  
                  </div>

                  <div className={SelectEnvirStyle.type3}>
                  {arr3.map((value,idx)=> {
                        return (
                        <button key={idx}  
                              className={filter===value ?SelectEnvirStyle.type_box_clicked:SelectEnvirStyle.type_box}
                              onClick={()=>handleButton(value)}>
                              {/* <p>{arr2[idx]}</p> */}
                              <div className={filter===value ?SelectEnvirStyle.type_box_text2:SelectEnvirStyle.type_box_text}>
                              {value}
                              </div> 
                        </button>
                        )
                  })}
                  {arr5.map((value,idx)=> {
                        return (
                        <button key={idx}  
                              className={filter===value ?SelectEnvirStyle.type_box_clicked2:SelectEnvirStyle.type_box2}
                              onClick={()=>handleButton(value)}>
                              {/* <p>{arr2[idx]}</p> */}
                              <div className={filter===value ?SelectEnvirStyle.type_box_text2:SelectEnvirStyle.type_box_text}>
                              {value}
                              </div> 
                        </button>
                        )
                  })}
                  </div>
                  <div className={SelectEnvirStyle.type4}>
                  {arr4.map((value,idx)=> {
                        return (
                        <button key={idx}  
                              className={filter===value ?SelectEnvirStyle.type_box_clicked2:SelectEnvirStyle.type_box2}
                              onClick={()=>handleButton(value)}>
                              {/* <p>{arr2[idx]}</p> */}
                              <div className={filter===value ?SelectEnvirStyle.type_box_text2:SelectEnvirStyle.type_box_text}>
                              {value}
                              </div> 
                        </button>
                        )
                  })}
                  </div>

</section>
        );
    
}
//     render(){
//         return(
//             <section>
//                   <section className={SelectEnvirStyle.type}>
//                   <button className={SelectEnvirStyle.type_box}>
//                         <div className={SelectEnvirStyle.type_box_text}>
//                         친환경 제품 구매
//                         </div> 
//                   </button>
//                   <button className={SelectEnvirStyle.type_box}>
//                         <div className={SelectEnvirStyle.type_box_text}>
//                         비건식당 방문
//                         </div>
//                   </button>
//                   </section>
//                   <section className={SelectEnvirStyle.type2}>
//                   <button className={SelectEnvirStyle.type_box}>
//                         <div className={SelectEnvirStyle.type_box_text}>
//                         다회용기 사용
//                         </div> 
//                   </button>
//                   <button className={SelectEnvirStyle.type_box}>
//                         <div className={SelectEnvirStyle.type_box_text}>
//                         장바구니/개인가방 사용
//                         </div>
//                   </button>
//                   </section>
//                   <section className={SelectEnvirStyle.type3}>
//                   <button className={SelectEnvirStyle.type_box}>
//                         <div className={SelectEnvirStyle.type_box_text}>
//                         중고거래/나눔/기부
//                         </div>
//                   </button>
//                   <button className={SelectEnvirStyle.type_box}>
//                         <div className={SelectEnvirStyle.type_box_text}>
//                         일회용품 사용
//                         </div> 
//                   </button>
//                   </section>
//                   <section className={SelectEnvirStyle.type4}>
//                   <button className={SelectEnvirStyle.type_box}>
//                         <div className={SelectEnvirStyle.type_box_text}>
//                         비닐봉투 소비
//                         </div> 
//                   </button>
//                   <button className={SelectEnvirStyle.type_box}>
//                         <div className={SelectEnvirStyle.type_box_text}>
//                         식자재 낭비
//                         </div>
//                   </button>
//                   </section>
            

export default SelectEnvir;