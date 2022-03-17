import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';

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
  
  
  
    return (
        <div>
          <form onSubmit={fetchFunc}>
          <input
                    value={text}
                    onChange={handleChange}
                />
  
                <button type='submit'>제출</button>
            
          </form>
                
        </div>
    );
  }
export default EditName;
