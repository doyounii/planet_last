import React, { Component, useState } from 'react';
import SelectMemoStyle from './SelectMemo.module.css';
import { CgClose } from "react-icons/cg";
import { useLocation, Link } from "react-router-dom";
import IncomeStyle from '../../pages/Floating/Float.module.css';


function SelectExpendMemo() {
    const [text, setText] = useState('');

    const date = useLocation().state.date;
    const price =useLocation().state.price;
    const filter = useLocation().state.filter;
    const cate = useLocation().state.cate;
    const arr2 = useLocation().state.arr2;
    const emoji = useLocation().state.emoji;

    const handleChange = (e) => {
      setText(e.target.value);
    };

    const onReset = () => {
      setText('');
    };
        return(
            <section>
                <p className={SelectMemoStyle.select}>지출</p>
                <section className={SelectMemoStyle.type}>
                  <div className={SelectMemoStyle.type_box_clicked}>
                        <p>{arr2[emoji]}</p>
                        <div className={SelectMemoStyle.type_box_text}>
                        {cate}
                        </div>
                  </div>
                </section>
                
                <div className={SelectMemoStyle.inputMemo}>
                  <input 
                    id="inputMemo"
                    type="text"
                    placeholder='ex) 스타벅스 아메리카노'
                    onChange={handleChange}
                    value={text}
                    />
                    <CgClose onClick={onReset} className={SelectMemoStyle.close}></CgClose>
                </div>


              <div className={IncomeStyle.bottomBtn3}>
              <Link to="/ExpendCategory">
                <button className={IncomeStyle.bottomBtnActive}>뒤로</button>
              </Link>
              <Link to="/ExpendLast"
              state={{ date, price, filter, arr2, cate, emoji, text }}>
                <button className={IncomeStyle.bottomBtnActive}>다음</button>
              </Link>
      </div>
            </section>
        );
}

export default SelectExpendMemo;