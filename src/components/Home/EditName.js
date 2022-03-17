import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';
import Style from './EditName.module.css';
import { CgClose } from "react-icons/cg";

function EditName() {

    const [text, setText] = useState('');
  
    const fetchFunc = (e) => {
        //백엔드로 데이터 보내기
        fetch(`/main/update/yui12@gmail.com/${text}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
          'useName': text,
          })
        })
        .then(response => response.json())
        .then(response => {
          if (response.token) {
            localStorage.setItem('wtw-token', response.token);
          }
        })
        .then( e => {
          Navigate('/')
        })
    }
  
    const handleChange = (e) => {
      setText(e.target.value);
      };
  
    const onReset = () => {
      setText('');
    };

    const maxLength = (text)=>{
      if(text.length > text.maxLength){
        text = text.slice(0, text.maxLength);
      }
  };

  /*
   function numberMaxLength(e){
        if(e.value.length > e.maxLength){
            e.value = e.value.slice(0, e.maxLength);

        }

    }
  */

    return (
        <div>
          <form onSubmit={fetchFunc} className={Style.form}>
          <input 
                  id="inputMemo"
                  type="text"
                  value={text}
                  onChange={handleChange} 
                  maxLength = "8"
                  onInput={maxLength(text)}
                />
                <CgClose onClick={onReset} className={Style.close}></CgClose>
  
                <p className={Style.count}>{text.length}/8</p>
                <button
                className={Style.button1}>취소</button>
                <button type='submit'
                className={Style.button}>완료</button>
            
          </form>
                
        </div>
    );
  }
export default EditName;
