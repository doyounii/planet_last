import React, { Component, useState } from 'react';
import SelectMemoStyle from './SelectMemo.module.css';
import { CgClose } from "react-icons/cg";
import { useLocation } from "react-router-dom";


function SelectExpendMemo() {
    // state = {
    //     name: ''
    //   }
    //   handleChange = (e) => {
    //     this.setState({
    //       name: e.target.value
    //     })
    //   }

    const [text, setText] = useState('');

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
            </section>
        );
}

export default SelectExpendMemo;