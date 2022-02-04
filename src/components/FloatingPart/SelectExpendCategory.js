import React, { Component } from 'react';
import ExpendCategoryStyle from './SelectExpendCategory.module.css';

class SelectExpendCategory extends Component {
    render(){
        return(
            <section>
                  <section className={ExpendCategoryStyle.type}>
                  <button className={ExpendCategoryStyle.type_box}>
                        <p>&#127789;</p>
                        <div className={ExpendCategoryStyle.type_box_text}>
                        식비
                        </div> 
                  </button>
                  <button className={ExpendCategoryStyle.type_box}>
                        <p>&#128663;</p>
                        <div className={ExpendCategoryStyle.type_box_text}>
                        교통
                        </div>
                  </button>
                  <button className={ExpendCategoryStyle.type_box}>
                        <p>&#127916;</p>
                        <div className={ExpendCategoryStyle.type_box_text}>
                        문화생활
                        </div>
                  </button>
                  </section>
                  <section className={ExpendCategoryStyle.type2}>
                  <button className={ExpendCategoryStyle.type_box}>
                        <p>&#9999;</p>
                        <div className={ExpendCategoryStyle.type_box_text}>
                        생필품
                        </div> 
                  </button>
                  <button className={ExpendCategoryStyle.type_box}>
                        <p>&#128722;</p>
                        <div className={ExpendCategoryStyle.type_box_text}>
                        마트
                        </div>
                  </button>
                  <button className={ExpendCategoryStyle.type_box}>
                        <p>&#128218;</p>
                        <div className={ExpendCategoryStyle.type_box_text}>
                        교육
                        </div>
                  </button>
                  </section>
                  <section className={ExpendCategoryStyle.type3}>
                  <button className={ExpendCategoryStyle.type_box}>
                        <p>&#128241;</p>
                        <div className={ExpendCategoryStyle.type_box_text}>
                        통신
                        </div> 
                  </button>
                  <button className={ExpendCategoryStyle.type_box}>
                        <p>&#127973;</p>
                        <div className={ExpendCategoryStyle.type_box_text}>
                        의료/건강
                        </div>
                  </button>
                  <button className={ExpendCategoryStyle.type_box}>
                        <p>&#128181;</p>
                        <div className={ExpendCategoryStyle.type_box_text}>
                        경조사/회비
                        </div>
                  </button>
                  </section>
                  <section className={ExpendCategoryStyle.type4}>
                  <button className={ExpendCategoryStyle.type_box}>
                        <p>&#128719;</p>
                        <div className={ExpendCategoryStyle.type_box_text}>
                        가전
                        </div> 
                  </button>
                  <button className={ExpendCategoryStyle.type_box}>
                        <p>&#129534;</p>
                        <div className={ExpendCategoryStyle.type_box_text}>
                        공과금
                        </div>
                  </button>
                  <button className={ExpendCategoryStyle.type_box}>
                        <p>&#128172;</p>
                        <div className={ExpendCategoryStyle.type_box_text}>
                        기타
                        </div>
                  </button>
                  </section>
            </section>
        );
    }
}

export default SelectExpendCategory;