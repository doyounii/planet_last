import React, { Component, useState } from 'react';
import SelectMemoStyle from './SelectMemo.module.css';
import { CgClose } from "react-icons/cg";
import { useLocation, Link } from "react-router-dom";
import IncomeStyle from '../../pages/Floating/Float.module.css';

function SelectMemo() {

  const [text, setText] = useState('');

  const date = useLocation().state.date;
  const price = useLocation().state.price;
  const filter = useLocation().state.filter;

  const cate = useLocation().state.cate;
  const arr2 = useLocation().state.arr2;
  const emoji = useLocation().state.emoji;

  console.log(date, price, filter, cate, arr2, emoji);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
  };

  const fetchFunc = () => {
    //백엔드로 데이터 보내기
    fetch(`/income/user1@naver.com/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        'in_way': filter,
        'in_type': cate,
        'in_cost': price,
        'memo': text,
        'date': '20' + date.slice(0, 2) + '-' + date.slice(3, 5) + '-' + date.slice(6, 8),
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response.token) {
          localStorage.setItem('wtw-token', response.token);
        }
      })
  }

  return (
    <section>
      <p className={SelectMemoStyle.select}>수입</p>
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
        <button className={IncomeStyle.bottomBtnDisabled}>뒤로</button>
        <Link to="/">
          <button onClick={() => { fetchFunc() }} className={IncomeStyle.bottomBtnActive}>완료</button>
        </Link>
      </div>
    </section>
  );
}


export default SelectMemo;