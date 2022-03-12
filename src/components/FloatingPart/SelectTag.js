import React, { useState, useRef } from 'react';
import SelectEnvirStyle from './SelectEnvir.module.css';
import { CgClose } from "react-icons/cg";




function SelectTag() {

      const [filter9, setFilter9] = useState('');
      const [filter10, setFilter10] = useState('');
      const [filter11, setFilter11] = useState('');

      const [text, setText] = useState('');
      const [disabled, setdisabled] = useState(true);

      const [show, setShow] = useState(false);
      const [show2, setShow2] = useState(false);
      const [show3, setShow3] = useState(false);

      const [current, setCurrent] = useState({}) //수정 선택된 사용자
      const no = useRef(3) //id
      const userData = [
            {id : 1, name : '박서준', job : '배우'},
            {id : 2, name : '이무진', job : '가수'}
      ]
      const [users, setUsers] = useState(userData);

      const [form, setForm] = useState({
            text: ''
      })

      function handleButton9(value9) {
            setFilter9(value9);
            console.log(value9);
            setShow(show =>! show) ;
            console.log(show);
      }
      function handleButton10(value10) {
            setFilter10(value10);
            console.log(value10);
            setShow2(show2 =>! show2) ;
            console.log(show2);
      }
      function handleButton11(value11) {
            setFilter11(value11);
            console.log(value11);
            setShow3(show3 =>! show3) ;
            console.log(show3);
      }

      const onAdd = (form) => {
            form.id = no.current++;
            setUsers(users.concat(form))
      }
      const addTag =(e) =>{
            e.preventDefault();
            console.log(text);

            onAdd(form)

            setForm('');
      }

      const handleChange = (e) => {
            setText(e.target.value);
            setdisabled(text.length === 0 ? true : false);

            const {value, text} = e.target;
            setForm({
                  ...form,
                  [text] : value
              })
          };
        
        const onReset = () => {
            setText('');
        };


      const arr9 = ["친환경"] ;
      const arr10 = ["반환경"] ;
      const arr11 = ["일반"] ;

            return(
            <section >
                 
                  <div className={SelectEnvirStyle.tag}>

                  <div className={SelectEnvirStyle.coment1}>
                        태그 직접 추가
                  </div>
                  <form className={SelectEnvirStyle.inputMemo} onSubmit={addTag}>
                        <input 
                        id="inputMemo"
                        name="tagName"
                        type="text"
                        placeholder='내용을 입력하세요'
                        onChange={handleChange}
                        value={text}
                        />
                  <CgClose onClick={onReset} className={SelectEnvirStyle.close}></CgClose>
                  </form>

                  <div className={SelectEnvirStyle.coment2}>
                  어떤 지출인가요?
                  </div>
                  
                  <div className={SelectEnvirStyle.selecttag}>
                  {arr9.map((value9,idx9)=> {
                        return (
                        <button type="submit" key={idx9}  
                              className={filter9===value9 && show ?SelectEnvirStyle.type_box_clicked:SelectEnvirStyle.type_box}
                              onClick={()=> {handleButton9(value9)}}
                              disabled={text.length !== 0 ? false : true}>
                              <div className={filter9===value9 && show ?SelectEnvirStyle.type_box_text2:SelectEnvirStyle.type_box_text}>
                              {value9}
                              </div> 
                        </button>
                        )
                  })}
                  {arr10.map((value10,idx10)=> {
                        return (
                        <button key={idx10}  
                              className={filter10===value10 && show2?SelectEnvirStyle.type_box_clicked2:SelectEnvirStyle.type_box2}
                              onClick={()=>handleButton10(value10)} disabled={text.length !== 0 ? false : true}>
                              <div className={filter10===value10 && show2?SelectEnvirStyle.type_box_text2:SelectEnvirStyle.type_box_text}>
                              {value10}
                              </div> 
                        </button>
                        )
                  })}
                  {arr11.map((value11,idx11)=> {
                        return (
                        <button key={idx11}  
                              className={filter11===value11 && show3?SelectEnvirStyle.type_box_clicked3:SelectEnvirStyle.type_box3}
                              onClick={()=>handleButton11(value11)}>
                              <div className={filter11===value11 && show3?SelectEnvirStyle.type_box_text2:SelectEnvirStyle.type_box_text} disabled={text.length !== 0 ? false : true}>
                              {value11}
                              </div> 
                        </button>
                        )
                  })}
                  </div>
                  <div className={SelectEnvirStyle.coment3}>
                        환경 태그를 선택해주세요
                  </div>

                  {text}
                  </div>
                  


                  

</section>
        );
    
}

export default SelectTag;