import React, { Component, useState } from 'react';
import SelectEnvirStyle from './SelectEnvir.module.css';
import { AiFillPlusCircle } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import SelectTag from './SelectTag';



function SelectEnvir() {

      const [filter, setFilter] = useState('');
      const [filter2, setFilter2] = useState('');
      const [filter3, setFilter3] = useState('');
      const [filter4, setFilter4] = useState('');
      const [filter5, setFilter5] = useState('');
      const [filter6, setFilter6] = useState('');
      const [filter7, setFilter7] = useState('');
      const [filter8, setFilter8] = useState('');

      const [show, setShow] = useState(false);

      const [show1, setShow1] = useState(false);
      const [show2, setShow2] = useState(false);
      const [show3, setShow3] = useState(false);
      const [show4, setShow4] = useState(false);
      const [show5, setShow5] = useState(false);
      const [show6, setShow6] = useState(false);
      const [show7, setShow7] = useState(false);
      const [show8, setShow8] = useState(false);

      function handleButton(value) {
            setFilter(value);
            console.log(value);
            setShow1(show1 => !show1);
            console.log(show1);
      }
      function handleButton2(value2) {
            setFilter2(value2);
            console.log(value2);
            setShow2(show2 => !show2);
            console.log(show2);
      }
      function handleButton3(value3) {
            setFilter3(value3);
            console.log(value3);
            setShow3(show3 => !show3);
            console.log(show3);
      }
      function handleButton4(value4) {
            setFilter4(value4);
            console.log(value4);
            setShow4(show4 => !show4);
            console.log(show4);
      }
      function handleButton5(value5) {
            setFilter5(value5);
            console.log(value5);
            setShow5(show5 => !show5);
            console.log(show5);
      }
      function handleButton6(value6) {
            setFilter6(value6);
            console.log(value6);
            setShow6(show6 => !show6);
            console.log(show6);
      }
      function handleButton7(value7) {
            setFilter7(value7);
            console.log(value7);
            setShow7(show7 => !show7);
            console.log(show7);
      }
      function handleButton8(value8) {
            setFilter8(value8);
            console.log(value8);
            setShow8(show8 => !show8);
            console.log(show8);
      }

      function addTag() {
            setShow(show => !show);
            console.log(show);
      }


      

      const arr = ["친환경 제품 구매"];
      const arr2 = ["비건식당 방문"] ;
      const arr3 = ["다회용기 사용"] ;
      const arr4 = ["장바구니 / 개인가방 사용"] ;
      const arr5 = ["중고거래 / 나눔 / 기부"] ;
      const arr6 = ["일회용품 사용"];
      const arr7 = ["비닐봉투 소비"];
      const arr8 = ["식자재 낭비"] ;

            return(
            <section >
<div className={SelectEnvirStyle.type}>
                  {arr.map((value,idx)=> {
                        return (
                        <button key={idx}  
                              className={filter===value && show1?SelectEnvirStyle.type_box_clicked:SelectEnvirStyle.type_box}
                              onClick={()=>handleButton(value)}>
                              <div className={filter===value && show1?SelectEnvirStyle.type_box_text2:SelectEnvirStyle.type_box_text}>
                              {value}
                              </div> 
                        </button>
                        )
                  })}
                  {arr2.map((value2,idx2)=> {
                        return (
                        <button key={idx2}  
                              className={filter2===value2 && show2?SelectEnvirStyle.type_box_clicked:SelectEnvirStyle.type_box}
                              onClick={()=>handleButton2(value2)}>
                              <div className={filter2===value2 && show2?SelectEnvirStyle.type_box_text2:SelectEnvirStyle.type_box_text}>
                              {value2}
                              </div> 
                        </button>
                        )
                  })}
                  </div>

                  <div className={SelectEnvirStyle.type2}>
                  {arr3.map((value3,idx3)=> {
                        return (
                              <button key={idx3}  
                              className={filter3===value3 && show3?SelectEnvirStyle.type_box_clicked:SelectEnvirStyle.type_box}
                              onClick={()=>handleButton3(value3)}>
                              <div className={filter3===value3 && show3?SelectEnvirStyle.type_box_text2:SelectEnvirStyle.type_box_text}>
                              {value3}
                              </div> 
                        </button>
                        )
                  })}
                  {arr4.map((value4,idx4)=> {
                        return (
                        <button key={idx4}  
                              className={filter4===value4 && show4?SelectEnvirStyle.type_box_clicked:SelectEnvirStyle.type_box}
                              onClick={()=>handleButton4(value4)}>
                              <div className={filter4===value4 && show4?SelectEnvirStyle.type_box_text2:SelectEnvirStyle.type_box_text}>
                              {value4}
                              </div> 
                        </button>
                        )
                  })}  
                  </div>

                  <div className={SelectEnvirStyle.type3}>
                  {arr5.map((value5,idx5)=> {
                        return (
                        <button key={idx5}  
                              className={filter5===value5 && show5?SelectEnvirStyle.type_box_clicked:SelectEnvirStyle.type_box}
                              onClick={()=>handleButton5(value5)}>
                              <div className={filter5===value5 && show5?SelectEnvirStyle.type_box_text2:SelectEnvirStyle.type_box_text}>
                              {value5}
                              </div> 
                        </button>
                        )
                  })}
                  {arr6.map((value6,idx6)=> {
                        return (
                        <button key={idx6}  
                              className={filter6===value6 && show6?SelectEnvirStyle.type_box_clicked2:SelectEnvirStyle.type_box2}
                              onClick={()=>handleButton6(value6)}>
                              <div className={filter6===value6 && show6?SelectEnvirStyle.type_box_text2:SelectEnvirStyle.type_box_text}>
                              {value6}
                              </div> 
                        </button>
                        )
                  })}
                  </div>

                  <div className={SelectEnvirStyle.type4}>
                  {arr7.map((value7,idx7)=> {
                        return (
                        <button key={idx7}  
                              className={filter7===value7 && show7?SelectEnvirStyle.type_box_clicked2:SelectEnvirStyle.type_box2}
                              onClick={()=>handleButton7(value7)}>
                              <div className={filter7===value7 && show7?SelectEnvirStyle.type_box_text2:SelectEnvirStyle.type_box_text}>
                              {value7}
                              </div> 
                        </button>
                        )
                  })}
                  {arr8.map((value8,idx8)=> {
                        return (
                        <button key={idx8}  
                              className={filter8===value8 && show8?SelectEnvirStyle.type_box_clicked2:SelectEnvirStyle.type_box2}
                              onClick={()=>handleButton8(value8)}>
                              <div className={filter8===value8 && show8?SelectEnvirStyle.type_box_text2:SelectEnvirStyle.type_box_text}>
                              {value8}
                              </div> 
                        </button>
                        )
                  })}
                  </div>

                  <div className={SelectEnvirStyle.type5}>
                        기타
                  </div>
                  <div className={SelectEnvirStyle.type5}>
                  <div className={SelectEnvirStyle.etc}>
                        <AiFillPlusCircle onClick={()=>addTag()}></AiFillPlusCircle>
                        {show ? <SelectTag></SelectTag> : <div></div> } 
                  </div> 
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