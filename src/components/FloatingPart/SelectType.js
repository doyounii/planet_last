import React, { Component } from 'react';
import SelectTypeStyle from './SelectType.module.css';

class SelectType extends Component {
    render(){
        return(
            <section className={SelectTypeStyle.type}>
                  <button className={SelectTypeStyle.type_box}>
                        <p>&#128179;</p>
                        <div className={SelectTypeStyle.type_box_text}>
                        카드
                        </div> 
                  </button>
                  <button className={SelectTypeStyle.type_box}>
                        <p>&#127974;</p>
                        <div className={SelectTypeStyle.type_box_text}>
                        은행
                        </div>
                  </button>
                  <button className={SelectTypeStyle.type_box}>
                        <p>&#128181;</p>
                        <div className={SelectTypeStyle.type_box_text}>
                        현금
                        </div>
                  </button>
            </section>
        );
    }
}

export default SelectType;