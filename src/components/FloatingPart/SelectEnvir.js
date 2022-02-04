import React, { Component } from 'react';
import SelectEnvirStyle from './SelectEnvir.module.css';

class SelectEnvir extends Component {
    render(){
        return(
            <section>
                  <section className={SelectEnvirStyle.type}>
                  <button className={SelectEnvirStyle.type_box}>
                        <div className={SelectEnvirStyle.type_box_text}>
                        친환경 제품 구매
                        </div> 
                  </button>
                  <button className={SelectEnvirStyle.type_box}>
                        <div className={SelectEnvirStyle.type_box_text}>
                        비건식당 방문
                        </div>
                  </button>
                  </section>
                  <section className={SelectEnvirStyle.type2}>
                  <button className={SelectEnvirStyle.type_box}>
                        <div className={SelectEnvirStyle.type_box_text}>
                        다회용기 사용
                        </div> 
                  </button>
                  <button className={SelectEnvirStyle.type_box}>
                        <div className={SelectEnvirStyle.type_box_text}>
                        장바구니/개인가방 사용
                        </div>
                  </button>
                  </section>
                  <section className={SelectEnvirStyle.type3}>
                  <button className={SelectEnvirStyle.type_box}>
                        <div className={SelectEnvirStyle.type_box_text}>
                        중고거래/나눔/기부
                        </div>
                  </button>
                  <button className={SelectEnvirStyle.type_box}>
                        <div className={SelectEnvirStyle.type_box_text}>
                        일회용품 사용
                        </div> 
                  </button>
                  </section>
                  <section className={SelectEnvirStyle.type4}>
                  <button className={SelectEnvirStyle.type_box}>
                        <div className={SelectEnvirStyle.type_box_text}>
                        비닐봉투 소비
                        </div> 
                  </button>
                  <button className={SelectEnvirStyle.type_box}>
                        <div className={SelectEnvirStyle.type_box_text}>
                        식자재 낭비
                        </div>
                  </button>
                  </section>
            </section>
        );
    }
}

export default SelectEnvir;